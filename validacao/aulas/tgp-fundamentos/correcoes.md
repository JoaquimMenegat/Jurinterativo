# Correções · tgp-fundamentos

Data: 21/10/2026 · Data-base: 20/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **1 aplicada**, `corrigir`: 017.
- **0 bloqueadas.**
- Nenhum `divergente` no parecer.
- Não mexidos:
  - `confere`: 003, 010, 011, 016, 018, 019, 021 e 022.
  - `não verificável`: 008 e 014. Continuam como estão, pela regra geral de 16/10/2026.
  - Conceitos sem veredito: os 11 itens `conceito` da ficha.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/tgp.js`, aula `fundamentos` (linhas 7 a 49; a contagem de linhas não mudou). A aula `jurisdicao` e as demais não foram tocadas por esta correção.

Nota do Vault (caminho relativo a `Obsidian Vault/Faculdade/3ª Fase/Teoria Geral dos Processos/`):
- **[RJ]** `1. Aula 20-02/Ramos da justiça.md`

Não é `(C)`: o texto corrigido leva a marca *(C, 21/10/2026)*. Não há julgado, súmula ou citação literal nos trechos tocados. O quadro "Resumo" da nota (linha 42) dizia o mesmo e também foi corrigido. A nota-resumo `Teoria geral dos Processos.md` (linha 31) só descreve a estrutura da Justiça Federal; não mudou.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| tgp-fundamentos-017 | tgp.js:42 (`sorter` "Qual justiça julga?", cartão 2: texto e explicação) | Cartão: `Ação em que a União é ré.` · Explicação: `CF, art. 109, I: causas de interesse da União, autarquias e empresas públicas federais.` | Cartão: `Ação em que a União é ré, fora das exceções constitucionais.` · Explicação: `CF, art. 109, I: União, autarquias e empresas públicas federais como autoras, rés, assistentes ou oponentes, exceto falência, acidentes de trabalho e causas das Justiças Eleitoral e do Trabalho.` | [RJ] linha 19: "as ações que envolvem a União, suas autarquias e empresas públicas" → "as causas em que a União, suas autarquias ou empresas públicas federais forem autoras, rés, assistentes ou oponentes, exceto as de falência, as de acidentes de trabalho e as sujeitas à Justiça Eleitoral e à Justiça do Trabalho (CF, art. 109, I)" *(C)*. [RJ] linha 42 (quadro "Resumo"): "competência relacionada à União e entidades federais" → "causas da União, autarquias e empresas públicas federais, fora das exceções do art. 109, I, da CF" *(C)*. | A redação do parecer foi dividida entre o cartão (a regra, com a ressalva) e a explicação (o detalhe do art. 109, I), como nos outros cartões do bloco. `CF, art. 109, I` segue com link (`a()`). A categoria certa (Federal) não mudou. Nenhum teste depende do item. |

## Plataforma

- `node --check` em `tgp.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo. A nova redação está em `prototipo/src/js/60-pk-tgp.js` (conferido por busca: "fora das exceções constitucionais"). No passo final, a cópia do pacote sobre ele mesmo falhou com `WinError 32`, a falha conhecida e inofensiva. `tgp.js` continua com a correção.
- `node --check` em `60-pk-tgp.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; a mudança é só de texto num bloco existente.

## Marca "Validada em"

Não aplicada. A aula não tem linha "Validada em" no código, e 008 e 014 seguem `não verificável` (mantidos pela regra geral). O Orquestrador decide se a marca entra.

## Notado de passagem

- **[RJ] linha 15**: "A Justiça Federal tem competência para julgar casos que envolvem matérias de interesse da União, como questões fiscais, de imigração, e crimes federais" é uma descrição genérica, sem as ressalvas do art. 109, I. Fora do trecho do ID; não alterei.
- **tgp.js:30 (organograma "Como a Justiça está dividida")**: a legenda "União · juízes e TRF" é só rótulo do ramo; não afirma competência e não foi alterada.
