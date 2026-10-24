# Correções · con-pedido

Data: 23/10/2026 · Data-base: 22/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **3 aplicadas**, todas `corrigir`: 006, 015 e 025.
- **0 bloqueadas.**
- Nenhum `divergente` nem `citação doutrinária` no parecer.
- Não mexidos:
  - `não verificável`: 026 (vedação de alterar o pedido depois do saneamento, no SVG) e 028 (gabarito "Não" no teste 2). Continuam como estão, pela regra geral de 16/10/2026; o parecer os lista em "Para o Joaquim decidir", e não há `decisoes.md`.
  - `confere`: os 22 itens. Conceitos sem veredito: 021 e 029.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/conhecimento.js`, aula `pedido` (linhas 79 a 99 depois da correção; o SVG ganhou uma linha, então o arquivo passou a ter uma linha a mais a partir da 97). As outras aulas do arquivo não foram tocadas. `engine.js` não foi tocado.

Nota do Vault: `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento/2. Aula 19.08/3. Pedido.md` ([PED]). Não é `(C)`: o texto corrigido leva a marca *(C, 23/10/2026)*. Os números de linha abaixo são os de depois da inserção.

A transcrição literal do art. 323 ([PED] linha 22) e do art. 329, I (linhas 62 e 63), estão corretas e ficaram intactas, sem ⚖️. O diagrama da nota (imagem `Alteração de pedido no cpc.png`, linha 66) não fala em prazo; como não dá para editar a imagem, a correção de 025 entrou como linha *(C)* logo abaixo dela.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-pedido-006 | conhecimento.js:82 (`flips` "O que entra mesmo sem ser pedido", cartão "Prestações sucessivas", verso) | `As que vencerem no curso do processo, enquanto durar a obrigação (art. 323).` | `As que vencerem no curso do processo entram na condenação sem pedido expresso, enquanto durar a obrigação, se o devedor deixar de pagá-las ou consigná-las (art. 323).` | [PED] nova linha 20, abaixo da linha 19 ("São incluídas conforme vencer."), e nova linha 35, abaixo da resposta do caso (linha 34): a inclusão depende de o devedor deixar de pagar ou consignar *(C)*. | O "Prestações sucessivas:" da redação sugerida é a frente do cartão. O caso do callout (linha 83, Pedro "deixa de pagar") e o teste 1 já estão de acordo; não mexi. |
| con-pedido-015 | conhecimento.js:86 (`chooser` "Formas de combinar pedidos", opção "Cumulação simples") | `Requisitos: compatíveis entre si, mesmo juízo competente e procedimento adequado, admitindo-se o comum com técnicas especiais (art. 327). Valor: soma.` | `Requisitos: compatíveis entre si, mesmo juízo competente e procedimento adequado a todos os pedidos. Se os procedimentos forem distintos, admite-se a cumulação pelo procedimento comum, com técnicas dos procedimentos especiais que sejam compatíveis com ele (art. 327, §§ 1º e 2º). Valor: soma.` | [PED] nova linha 60, abaixo das linhas 58 e 59 ("compatíveis ao mesmo procedimento (ou aderirem ao procedimento comum)" e "No procedimento comum, tudo é admitido."): redação do parecer *(C)*. | "Valor: soma." mantido. |
| con-pedido-025 | conhecimento.js:96 e 97 (`svg` "Até quando dá para mudar o pedido", legenda do trecho "com consentimento do réu") | Uma legenda: `contraditório em 15 dias e prova suplementar` (y=138) | Duas legendas: `prazo mínimo de 15 dias úteis para o réu se manifestar` (y=138) e `e possibilidade de requerer prova suplementar (arts. 329, II, e 219)` (y=154) | [PED] nova linha 67, abaixo do diagrama (linha 66): entre a citação e o saneamento, com consentimento do réu, prazo mínimo de 15 dias úteis e prova suplementar (arts. 329, II, e 219) *(C)*. | "Após a citação e até o saneamento, a alteração exige consentimento do réu" já está no próprio diagrama (marcos "Citação" e "Saneamento" e legenda "com consentimento do réu"), por isso a legenda nova traz só o restante da redação sugerida. As duas linhas ficam dentro do `viewBox` (altura 170). |

## Plataforma

- `node --check` em `conhecimento.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/61-pk-conhecimento.js` (conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `61-pk-conhecimento.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código, e 026 e 028 seguem `não verificável` à espera do Joaquim.

## Notado de passagem

- **[PED] linhas 48 e 50**: cita o art. 292, VII e VIII (valor da causa) para os pedidos alternativos e subsidiários; os dispositivos do pedido são os arts. 325 e 326. Fora do parecer; não alterei.
- **[PED] linha 66**: o embed aponta para `ZLIXEIRA/Alteração de pedido no cpc.png`, mas a imagem está em `Anexos/`. Não alterei.
