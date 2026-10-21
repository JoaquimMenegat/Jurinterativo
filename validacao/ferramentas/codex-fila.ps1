# Roda o mesmo papel do Codex em várias aulas, uma depois da outra (fila), para não estourar a cota de uma vez.
# Uso: powershell -ExecutionPolicy Bypass -File validacao/ferramentas/codex-fila.ps1 <papel> <data-base> <aula-id> [<aula-id> ...]
param(
  [Parameter(Mandatory=$true)][string]$Papel,
  [Parameter(Mandatory=$true)][string]$DataBase,
  [Parameter(Mandatory=$true, ValueFromRemainingArguments=$true)][string[]]$Aulas
)
foreach ($aula in $Aulas) {
  & powershell -ExecutionPolicy Bypass -File (Join-Path $PSScriptRoot 'codex.ps1') $Papel $aula $DataBase
}
