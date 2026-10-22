# Correções · tgp-modificacao

Data: 22/10/2026 · Data-base: 20/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **8 aplicadas**, todas `corrigir`: 002, 004, 008, 009, 021, 027, 029 e 030.
- **0 bloqueadas.**
- Nenhum `divergente` no parecer.
- Não mexidos:
  - `não verificável`: 014 e 026. Continuam como estão, pela regra geral de 16/10/2026.
  - `confere`: os 19 demais itens com veredito.
  - Conceito sem veredito: 016.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/tgp.js`, aula `modificacao` (linhas 169 a 207; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas. O diagrama SVG "Conexão e continência em imagem" (linhas 177 a 185) não diz nada sobre os pontos corrigidos e ficou como estava.

Notas do Vault (caminho relativo a `Obsidian Vault/Faculdade/3ª Fase/Teoria Geral dos Processos/5. Aula 27-03/`):
- **[DER]** `Derrogação.md`
- **[PRO]** `Prorrogação.md`
- **[CNX]** `Conexão.md`
- **[CFL]** `Conflito de competências.md`

Nenhuma é `(C)`. Só [CNX] precisou de texto novo, com a marca *(C, 22/10/2026)*. As transcrições literais (arts. 55, 63, 65, 66 e 955) estão corretas e ficaram intactas, sem ⚖️, porque não contrariam as correções. As notas não têm diagrama, fluxograma ou quadro sobre esses pontos.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| tgp-modificacao-002 | tgp.js:173 (`tl` "Quatro formas de modificar", etapa "Derrogação") | `Antes do processo: as partes elegem, no contrato, foro ligado ao domicílio de uma delas ou ao local da obrigação (art. 63, §1º). Vincula herdeiros e sucessores (§2º).` | `As partes elegem foro por instrumento escrito, com referência expressa a determinado negócio jurídico. O foro deve guardar pertinência com o domicílio ou a residência de uma delas ou com o local da obrigação, ressalvada a pactuação consumerista favorável ao consumidor (art. 63, §1º). Vincula herdeiros e sucessores (§2º).` | [DER] linha 8 já traz os requisitos da Lei 14.879/2024 *(C, 12/10/2026)*; sem mudança. | A frase final (§2º), fora do parecer, ficou. Link do `art. 63, §1º` mantido. |
| tgp-modificacao-004 | tgp.js:174 (mesmo `tl`, etapa "Prorrogação") | `No processo: o réu não alega a incompetência relativa (art. 65).` | `A competência relativa se prorroga se o réu não alegar a incompetência em preliminar de contestação. O MP também pode alegá-la nas causas em que atuar (arts. 64 e 65).` | [PRO] linha 4 já fala em "contestação preliminar", e a transcrição do art. 65 (linhas 6 e 7) traz o MP; sem mudança. | Link passou a `arts. 64 e 65`, como na redação sugerida. |
| tgp-modificacao-008 | tgp.js:187 (`table` "O que acontece com as ações", linha "Conexão") | Consequência: `Reunião para decisão conjunta no juízo prevento, salvo se uma já foi sentenciada` · Base: `art. 55, §1º; Súmula 235 do STJ` | Consequência: `Em regra, reunião para decisão conjunta no juízo prevento, salvo se uma ação já foi sentenciada. Em ACPs nacionais ou regionais, o STJ admitiu reunião mesmo após sentença (AgInt no CC 202.644/ES, Informativo 885)` · Base: `arts. 55, §1º, e 58; Súmula 235 do STJ` | [CNX] linha 19: parágrafo novo com a regra, a Súmula 235 e a exceção das ACPs *(C)*. A transcrição do art. 55 ficou intacta. | O julgado ficou na coluna "Consequência", porque a coluna "Base" só tem links de lei e súmula. |
| tgp-modificacao-009 | tgp.js:188 (mesma tabela, linha 2) | `Execução e ação de conhecimento sobre o mesmo ato` · Base: `art. 55, §2º` | `Execução de título extrajudicial e ação de conhecimento relativa ao mesmo ato jurídico` · Base: `art. 55, §2º, I` | [CNX] linha 11: transcrição do art. 55, § 2º, I, já correta; sem mudança. | "São consideradas conexas" mantido. O cartão 4 do `sorter` (nota promissória, art. 55, §2º, I) já estava conforme. |
| tgp-modificacao-021 | tgp.js:200 (`chooser` "Conflito de competência", opção "Negativo", resumo) | `Dois ou mais juízes se dizem incompetentes` | `Dois ou mais juízes se consideram incompetentes, atribuindo um ao outro a competência` | [CFL] linhas 8 e 13: a transcrição do art. 66, II, já traz o requisito; sem mudança. | A explicação da opção (art. 66, II, e parágrafo único) não mudou. |
| tgp-modificacao-027 | tgp.js:203 (mesmo `chooser`, opção "Quem julga", 2ª frase da explicação) | `O relator julga de plano se houver súmula ou tese repetitiva (art. 955, parágrafo único).` | `O relator pode julgar o conflito de plano quando sua decisão se fundar em súmula do STF, do STJ ou do próprio tribunal, ou em tese firmada em casos repetitivos ou em incidente de assunção de competência (art. 955, parágrafo único).` | [CFL] linhas 34 a 36: transcrição do art. 955, parágrafo único, já correta; sem mudança. | A 1ª frase (026, `não verificável`) e o resumo "O tribunal com ascendência sobre ambos" ficaram como estavam. |
| tgp-modificacao-029 | tgp.js:206 (`quiz`, questão 2: enunciado e explicação) | Pergunta: `Um processo já foi sentenciado. Cabe reunião por conexão?` · Explicação: `art. 55, §1º e Súmula 235 do STJ.` | Pergunta: `Pela regra geral do art. 55, § 1º, do CPC e da Súmula 235/STJ, cabe reunião por conexão se um processo já foi sentenciado?` · Explicação: `Essa é a regra geral (art. 55, §1º; Súmula 235 do STJ). O STJ admitiu exceção em ACPs nacionais ou regionais (AgInt no CC 202.644/ES, Informativo 885).` | Ver 008. | Alternativas e gabarito (índice 1, "Não") mantidos. Os links da explicação antiga foram mantidos na nova. |
| tgp-modificacao-030 | tgp.js:207 (`quiz`, questão 3: enunciado e explicação) | Pergunta: `Dois juízes se declaram incompetentes. Que conflito é?` · Explicação: `art. 66, II.` | Pergunta: `Dois juízes se consideram incompetentes, atribuindo um ao outro a competência. Que conflito é?` · Explicação: `É a hipótese do art. 66, II, do CPC.` | Ver 021. | Alternativas e gabarito (índice 1, "Negativo") mantidos. |

## Plataforma

- `node --check` em `tgp.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; as redações novas estão em `prototipo/src/js/60-pk-tgp.js` (conferido por busca: "por instrumento escrito, com referência expressa", "em preliminar de contestação. O MP também", "o STJ admitiu reunião mesmo após sentença", "Execução de título extrajudicial e ação de conhecimento relativa", "atribuindo um ao outro a competência" (2), "incidente de assunção de competência", "Pela regra geral do art. 55", "O STJ admitiu exceção em ACPs"). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `60-pk-tgp.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto em blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código, e 014 e 026 seguem `não verificável`. O Orquestrador decide se a marca entra.

## Notado de passagem

- **[CFL] linha 16**: "O tribunal competente … onde dois tribunais estaduais geram uma controvérsia é o de segunda instância" está confuso (conflito entre tribunais vai ao STJ ou ao STF; CF, arts. 102, I, o, e 105, I, d). Fora do parecer; não alterei.
- **[CFL] linha 18**: diz que o conflito é suscitado "pelo Juiz ou pelo Ministério Público"; o art. 951 inclui as partes. Fora do parecer; não alterei.
- **[PRO] linha 9**: frase da Súmula 33 do STJ; a mesma súmula está `não verificável` em tgp-competencia (013 e 036). Não alterei.
