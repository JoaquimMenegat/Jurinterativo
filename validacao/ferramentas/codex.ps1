# Roda um papel da validação no Codex (outro fornecedor de modelo).
# Uso: powershell -ExecutionPolicy Bypass -File validacao/ferramentas/codex.ps1 <conferente|comparador|reconferencia|pesquisador> <aula-id> <data-base> [-Ids "id1,id2"]
# Modelo: conferente e pesquisador no gpt-6-astra; comparador no gpt-6.1-sol; reconferência no gpt-6.1-sol (o gpt-6-luna deu falsos positivos em 21/10/2026).
#
# O Codex não abre arquivos do projeto: o script entrega a ele só os arquivos que o papel pode ler,
# e a resposta final dele é gravada como o arquivo que o papel entrega. Assim a regra "às cegas"
# não depende só do prompt, e o sandbox do Windows não precisa criar processos.
param(
  [Parameter(Mandatory=$true)][ValidateSet('conferente','comparador','reconferencia','pesquisador')][string]$Papel,
  [Parameter(Mandatory=$true)][string]$Aula,
  [Parameter(Mandatory=$true)][string]$DataBase,
  # Conferente: só estes IDs (devoluções). Pesquisador: IDs da segunda pesquisa. Comparador: IDs do complemento. Reconferência: IDs de refazer.
  [string]$Ids = ''
)
$ErrorActionPreference = 'Stop'
# Sem isso, o PowerShell 5.1 manda o texto ao Codex sem acentos.
$OutputEncoding = New-Object System.Text.UTF8Encoding $false
[Console]::OutputEncoding = New-Object System.Text.UTF8Encoding $false

$raiz = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$pasta = Join-Path $raiz "validacao\aulas\$Aula"
# Modelo por papel (20/10/2026): quem abre fontes fica no mais forte; quem só lê arquivos usa um mais barato.
$modelos = @{ conferente = 'gpt-6-astra'; pesquisador = 'gpt-6-astra'; comparador = 'gpt-6.1-sol'; reconferencia = 'gpt-6.1-sol' }
$modelo = $modelos[$Papel]

switch ($Papel) {
  'conferente' {
    $prompt = '05-conferente.md'; $saida = 'conferencia.md'; $web = $true
    # O Planalto às vezes não responde ao Codex (timeout em 22/10/2026): o script junta os artigos citados,
    # tirados da cópia local que baixar_leis.py baixou do Planalto, para a conferência da lei não depender do site.
    if (Test-Path (Join-Path $pasta 'pesquisa-lei.md')) { & python (Join-Path $PSScriptRoot 'trechos_lei.py') $Aula | Out-Null }
    $entradas = @('perguntas.md', 'pesquisa-lei.md', 'pesquisa-jurisprudencia.md', 'trechos-lei.md')
    $lei = 'Para a lei: tente o Planalto; se não abrir, confira contra trechos-lei.md, que é o texto do Planalto baixado por script (não pelo Pesquisador), e registre "cópia local do Planalto" na coluna do link. Só marque não verificável o que nem o Planalto nem trechos-lei.md permitirem conferir. Jurisprudência continua exigindo o link oficial.'
    $tarefa = "Confira as pesquisas contra as perguntas. Use a busca na web para abrir os links citados nas pesquisas. $lei"
    if ($Ids) {
      $saida = 'conferencia-devolucoes.md'
      $tarefa = "Segunda conferência, só dos IDs $Ids, cujas pesquisas foram refeitas após devolução. Confira apenas esses IDs, no mesmo formato de tabela. Use a busca na web para abrir os links. $lei"
    }
  }
  'comparador' {
    $prompt = '06-comparador.md'; $saida = 'parecer.md'; $web = $false
    $entradas = @('ficha.md', 'perguntas.md', 'pesquisa-lei.md', 'pesquisa-jurisprudencia.md', 'conferencia.md', 'conferencia-devolucoes.md', 'aula.md')
    $tarefa = 'Momento 1 (parecer). Não pesquise na web: use só os arquivos abaixo. Se houver conferencia-devolucoes.md, o resultado dela vale para os IDs que ela lista, no lugar do resultado da conferencia.md.'
    if ($Ids) {
      $saida = 'parecer-complemento.md'
      $entradas += @('parecer.md', 'pesquisa-jurisprudencia-codex.md', 'conferencia-codex.md')
      $tarefa = "Complemento do parecer, só dos IDs $Ids, que receberam segunda pesquisa (pesquisa-jurisprudencia-codex.md, conferida em conferencia-codex.md). Dê novo veredito só para esses IDs, na mesma tabela do parecer. Regras gerais de 16/10/2026: item sem prova de erro continua como está (veredito confere ou não verificável, sem correção); se a aula se contradiz, a redação sugerida fica com o entendimento majoritário do STJ/STF ou retira as frases contraditórias. Não pesquise na web."
    }
  }
  'pesquisador' {
    $prompt = '04-pesquisador-jurisprudencia.md'; $saida = 'pesquisa-jurisprudencia-codex.md'; $web = $true
    $entradas = @('perguntas.md', 'pesquisa-lei.md', 'pesquisa-jurisprudencia.md', 'conferencia.md')
    $tarefa = "Segunda pesquisa de jurisprudência (STF e STJ), só dos IDs $Ids, que ficaram sem confirmação por falta de julgado, portal bloqueado ou link que não abriu. Para cada ID, tente abrir os julgados já citados em pesquisa-jurisprudencia.md e procure outros nos portais oficiais. Responda no formato de bloco do seu prompt, um por ID, com a URL oficial que você de fato abriu. Se não achar, diga não encontrada."
  }
  'reconferencia' {
    $prompt = '09-reconferente.md'; $saida = 'reconferencia.md'; $web = $false
    $entradas = @('parecer.md', 'parecer-complemento.md', 'decisoes.md', 'correcoes.md', 'aula-corrigida.md')
    $tarefa = 'Reconferência: confira se cada correção do parecer entrou na aula-corrigida.md (aula depois da correção, gerada por script) e se não criou erro novo. Regras gerais do Joaquim: item sem prova de erro continua como estava. Não pesquise na web.'
    if ($Ids) {
      # Rodada de refazer: só os IDs devolvidos; os demais já foram aprovados na rodada anterior.
      $tarefa = "Reconferência de refazer, só dos IDs $Ids, devolvidos na rodada anterior e corrigidos de novo. Os demais IDs já foram aprovados: não os reexamine nem aponte itens novos. Para cada ID listado, diga ok ou refazer, no mesmo formato. Não pesquise na web."
    }
  }
}

$ler = { param($p) [System.IO.File]::ReadAllText($p, [System.Text.Encoding]::UTF8) }
$texto = New-Object System.Text.StringBuilder
[void]$texto.AppendLine("Seu papel: $Papel. aula-id: $Aula. data-base: $DataBase.")
[void]$texto.AppendLine("Tarefa: $tarefa")
[void]$texto.AppendLine("Você NÃO tem acesso aos arquivos do projeto nem a um terminal: tudo o que pode ler está abaixo. Não tente abrir arquivos nem rodar comandos.")
[void]$texto.AppendLine("Sua resposta final será gravada, sem alteração, como validacao/aulas/$Aula/$saida. Responda SOMENTE com o conteúdo desse arquivo, em Markdown, no formato do seu prompt, sem comentários antes ou depois. Se precisar recusar a tarefa, responda só com a linha BLOQUEADO das regras comuns.")
foreach ($p in @("validacao\prompts\00-regras-comuns.md", "validacao\prompts\$prompt")) {
  [void]$texto.AppendLine("`n===== INSTRUÇÕES: $p =====`n" + (& $ler (Join-Path $raiz $p)))
}
foreach ($e in $entradas) {
  $f = Join-Path $pasta $e
  if (Test-Path $f) { [void]$texto.AppendLine("`n===== ARQUIVO: $e =====`n" + (& $ler $f)) }
}

$destino = Join-Path $pasta $saida
$args_ = @()
if ($web) { $args_ += '--search' }
$args_ += @('exec', '-m', $modelo, '-s', 'read-only', '--skip-git-repo-check', '-C', $pasta, '-o', $destino, '-')

Write-Host "== Codex · $Papel ($modelo) · $Aula · entrega $saida ==" -ForegroundColor Yellow
$texto.ToString() | & codex @args_
if (Test-Path $destino) {
  # O Codex às vezes repete a linha PRONTO no fim da resposta; ela não pertence ao arquivo.
  $linhas = Get-Content $destino -Encoding UTF8 | Where-Object { $_ -notmatch '^PRONTO ' }
  [System.IO.File]::WriteAllLines($destino, [string[]]$linhas, (New-Object System.Text.UTF8Encoding $false))
  $primeira = (Get-Content $destino -Encoding UTF8 -TotalCount 1)
  if ($primeira -like 'BLOQUEADO*') { Write-Host $primeira -ForegroundColor Red }
  else { Write-Host "PRONTO · $Aula · $saida" -ForegroundColor Green }
} else { Write-Host "BLOQUEADO · $Aula · o Codex não entregou $saida" -ForegroundColor Red }
