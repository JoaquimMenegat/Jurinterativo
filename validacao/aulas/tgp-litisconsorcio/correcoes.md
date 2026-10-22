# Correções · tgp-litisconsorcio

Data: 22/10/2026 · Data-base: 20/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **5 aplicadas**, todas `corrigir`: 003, 009, 010, 011 e 012.
- **0 bloqueadas.**
- Nenhum `divergente` no parecer.
- Não mexidos:
  - `não verificável`: 015, 016 e 017 (os três cartões do `sorter` "Classifique"). Continuam como estão, pela regra geral de 16/10/2026.
  - `confere`: os 9 demais itens com veredito.
  - Conceitos sem veredito: os 3 itens `conceito` da ficha.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/tgp.js`, aula `litisconsorcio` (linhas 234 a 258; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas.

Nota do Vault: **[LIT]** `Obsidian Vault/Faculdade/3ª Fase/Teoria Geral dos Processos/6. Aula 03-04/Litisconsórcio.md`. Não é `(C)`: o texto corrigido leva a marca *(C, 22/10/2026)*. As transcrições dos arts. 113 e 116 estão corretas e ficaram intactas, sem ⚖️. A nota não tem diagrama, fluxograma ou quadro; as listas de classificação (linhas 18 a 33) só foram tocadas no item "Litisconsórcio Necessário".

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| tgp-litisconsorcio-003 | tgp.js:239 (`table` "As classificações", linha "Obrigatoriedade", coluna "O que define") | `Necessário quando a lei exige ou a relação só pode ser decidida com todos (art. 114)` | `Necessário quando a lei exige ou quando, pela natureza da relação jurídica controvertida, a eficácia da sentença depende da citação de todos os litisconsortes (art. 114)` | [LIT] linha 18: acrescentado o critério do art. 114 ao item "Litisconsórcio Necessário" *(C)*. | Colunas "Critério" e "Espécies" sem mudança. Link mantido. |
| tgp-litisconsorcio-009 | tgp.js:246 (`chooser` "Faltou um litisconsorte necessário", opção "Remédio", explicação) | `O juiz determina ao autor que requeira a citação de todos, em prazo que fixar, sob pena de extinção (art. 115, parágrafo único).` | `No litisconsórcio passivo necessário, o juiz determina ao autor que requeira a citação de todos os litisconsortes, no prazo que fixar, sob pena de extinção do processo (art. 115, parágrafo único).` | [LIT] linha 18: acrescentada a providência do art. 115, parágrafo único, no passivo necessário *(C)*. | Resumo "Juiz manda citar" mantido. |
| tgp-litisconsorcio-010 | tgp.js:248 (`flips` "Regras de convivência", cartão "Autonomia") | `Litisconsortes são litigantes distintos: os atos de um não prejudicam nem beneficiam os outros, <em>salvo no unitário</em> (art. 117).` | `Em relação à parte adversa, os litisconsortes são litigantes distintos. No litisconsórcio <em>unitário</em>, os atos e as omissões de um não prejudicam os outros, mas podem beneficiá-los (art. 117).` | Sem trecho de origem no Vault: [LIT] não trata do art. 117. | O destaque `<em>` ficou em "unitário". Link mantido. |
| tgp-litisconsorcio-011 | tgp.js:249 (mesmo `flips`, cartão "Multitudinário", 1ª frase) | `O juiz pode limitar o facultativo quando o número de partes atrapalhar a defesa ou a rapidez (art. 113, §1º).` | `O juiz pode limitar o número de litisconsortes facultativos no conhecimento, na liquidação ou na execução, quando comprometer a rápida solução do litígio ou dificultar a defesa ou o cumprimento da sentença (art. 113, §1º).` | [LIT] linha 10: transcrição do art. 113, § 1º, já correta; sem mudança. | A questão 3 do teste ("Não, só o facultativo", `confere`) continua conforme. |
| tgp-litisconsorcio-012 | tgp.js:249 (mesmo cartão, 2ª frase) | `O pedido de limitação interrompe o prazo de resposta (§2º).` | `O requerimento de limitação interrompe o prazo para manifestação ou resposta, que recomeça da intimação da decisão que o solucionar (§2º).` | [LIT] linha 11: transcrição do art. 113, § 2º, já correta; sem mudança. | Citação curta "(§2º)" mantida, como no original, porque segue a do § 1º no mesmo cartão. |

## Plataforma

- `node --check` em `tgp.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; as cinco redações novas estão em `prototipo/src/js/60-pk-tgp.js` (uma ocorrência de cada, conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `60-pk-tgp.js`: sem erro.
- `git diff` de `tgp.js`: só linhas 127 a 249, dentro das cinco aulas do lote; `fundamentos`, `jurisdicao` e `principios` intactas.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto em blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código, e 015, 016 e 017 seguem `não verificável`. O Orquestrador decide se a marca entra.

## Notado de passagem

- **[LIT] linha 18**: diz que o necessário, se não observado, "gera nulidade processual"; o art. 115 distingue nulidade (unitário) e ineficácia (simples). Fora do parecer; não alterei.
- **[LIT] linha 25**: chama de "Uniforme" o que a lei chama de unitário (art. 116, transcrito logo abaixo). Fora do parecer; não alterei.
- **[LIT] linha 28**: liga o litisconsórcio misto à reconvenção ("o autor vira réu"); misto é ter vários autores e vários réus. Fora do parecer; não alterei.
- **tgp.js:252**, cartão do casamento (015, `não verificável`): o parecer aponta que o art. 1.549 do CC trata de nulidade, e o cartão fala em anular. Aguarda decisão do Joaquim; não alterei.
