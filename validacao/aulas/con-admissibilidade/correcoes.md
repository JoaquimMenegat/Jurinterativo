# Correções · con-admissibilidade

Data: 23/10/2026 · Data-base: 22/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **9 aplicadas**, todas `corrigir`: 004, 012, 015, 028, 031, 032, 033, 034 e 041.
- **0 bloqueadas.**
- Nenhum `divergente` nem `citação doutrinária` no parecer.
- Não mexidos:
  - `não verificável`: 035 (prazo de contestação após reforma, art. 331, § 2º, estendido à improcedência liminar). Continua como está, pela regra geral de 16/10/2026; o parecer o lista em "Para o Joaquim decidir", e não há `decisoes.md`.
  - `confere`: os 30 itens. Conceitos sem veredito: 008 e 039.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/conhecimento.js`, aula `admissibilidade` (linhas 51 a 77; a contagem de linhas da aula não mudou). As outras aulas do arquivo não foram tocadas. `engine.js` não foi tocado.

Notas do Vault (pasta `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento/2. Aula 19.08/`). Nenhuma é `(C)`: o texto corrigido leva a marca *(C, 23/10/2026)*. Os números de linha abaixo são os de depois da inserção.

| Sigla | Nota |
|---|---|
| [IND] | `1. Indeferimento da petição inicial.md` |
| [IMP] | `2. Improcedência liminar do pedido..md` |

A transcrição literal do art. 331, caput, em [IND] linha 43 está correta e ficou intacta, sem ⚖️. As notas não têm diagrama, fluxograma ou quadro; as listas de tópicos que diziam a mesma coisa receberam subitens *(C)*, com o texto original mantido.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-admissibilidade-004 | conhecimento.js:54 (`vs` "Duas coisas diferentes", lado "Indeferimento", 3º item) | `Não faz coisa julgada material: dá para repropor corrigindo o vício` | `Não faz coisa julgada material. É possível repropor a ação corrigindo o vício, observada também a exigência de comprovar o pagamento ou depósito das custas e dos honorários de advogado (art. 486, §§ 1º e 2º)` | [IND] nova linha 9, abaixo da linha 8 ("Não se trata de um julgamento material…"): redação do parecer *(C)*. | Artigo em `a()`, como os outros itens do bloco. Teste 1 ("faz coisa julgada material? Não") não muda. |
| con-admissibilidade-012 | conhecimento.js:56 (`table` "Hipóteses de indeferimento", linha "Inépcia", última parte) | `pedidos incompatíveis (§1º)` | `pedidos incompatíveis entre si, ressalvados os pedidos subsidiários ou alternativos dos arts. 326 e 327, § 3º (§1º)` | [IND] nova linha 21, abaixo da linha 20 ("Também é inepta a petição que possui pedidos incompatíveis entre si"): ressalva dos arts. 326 e 327, § 3º *(C)*. | O "(§1º)" final foi mantido porque cobre todas as hipóteses de inépcia da célula; o inciso IV fica implícito no § 1º. |
| con-admissibilidade-015 | conhecimento.js:59 (mesma tabela, linha "Não atendido o art. 106", coluna "Detalhe") | `Advogado em causa própria sem os dados` | `Advogado em causa própria que não informa os dados do art. 106, I: o juiz determina o suprimento em 5 dias úteis; o descumprimento leva ao indeferimento (arts. 106, § 1º, 219 e 330, IV)` | [IND] nova linha 33, abaixo da linha 32 ("5 dias no caso previsto no art. 106"): suprimento em 5 dias úteis, antes da citação; descumprimento leva ao indeferimento *(C)*. A linha 4 (mesmo prazo, sem "úteis") não foi tocada; a nova linha 33 a esclarece. | Coluna "Hipótese" mantida. |
| con-admissibilidade-028 | conhecimento.js:66 (`sorter` "O que o juiz faz?", 3º cartão) | Caso `Os pedidos são incompatíveis entre si e o autor não corrigiu.`; explicação `Inépcia (art. 330, §1º, IV).` | Caso `Os pedidos são incompatíveis entre si, não são subsidiários nem alternativos, e o autor não cumpriu a determinação de correção.`; explicação `Indefere por inépcia (arts. 321, parágrafo único, 330, § 1º, IV, e 327, § 3º).` | Mesma linha 21 de [IND] (012). | Categoria certa mantida (índice 1, "Indefere"). |
| con-admissibilidade-031 | conhecimento.js:69 (mesmo `sorter`, 6º cartão) | Caso `A inicial está completa e não há precedente contrário.`; explicação `Designa audiência e manda citar (art. 334).` | Caso `A inicial preenche os requisitos essenciais e não há hipótese de improcedência liminar.`; explicação `Manda citar. Em regra, designa audiência de conciliação ou mediação, observadas as hipóteses de sua não realização (arts. 332 e 334, caput e § 4º).` | Sem trecho de origem no Vault (o sorter não vem das notas). | Categoria certa mantida (índice 3, "Manda citar"). |
| con-admissibilidade-032 | conhecimento.js:71 (`steps` "Se o autor apelar", etapa "Apelação") | Texto `Em 15 dias.`; referência `arts. 331 e 332, §§2º a 4º` | Texto `Do autor, no prazo geral de 15 dias úteis, contado da intimação da sentença, observadas as regras de contagem e as prerrogativas legais de prazo.`; referência `arts. 331 e 332, §§2º a 4º; 1.003, 1.009 e 219` | [IND] nova linha 37, abaixo da linha 36 ("o prazo de interposição é 15 dias"): redação do parecer *(C)*. | O "Apelação do autor" da redação sugerida ficou "Do autor", porque o título da etapa já é "Apelação". A referência antiga foi mantida e recebeu os artigos do parecer. |
| con-admissibilidade-033 | conhecimento.js:72 (mesmo `steps`, etapa "Retratação") | Texto `O juiz pode voltar atrás em 5 dias.`; referência `efeito regressivo` | Texto `Interposta a apelação, o juiz pode se retratar em 5 dias úteis.`; referência `efeito regressivo; arts. 331, 332, § 3º, e 219` | [IND] nova linha 41, abaixo da linha 40 ("poderá se retratar, no prazo de 5 dias"), e [IMP] nova linha 33, abaixo da linha 32: 5 dias úteis, depois da apelação *(C)*. | Mesmo ajuste no teste (041). |
| con-admissibilidade-034 | conhecimento.js:73 (mesmo `steps`, etapa "Sem retratação") | Texto `O réu é citado para contrarrazões em 15 dias.`; referência `arts. 331, §1º e 332, §4º` | Texto `O réu é citado para apresentar contrarrazões no prazo geral de 15 dias úteis, contado conforme a modalidade da citação e as regras legais, observadas as prerrogativas de prazo.`; referência `arts. 331, § 1º, 332, § 4º, 219, 224 e 231` | [IND] nova linha 46, abaixo da linha 45 ("responder a apelação no prazo de 15 dias"), e [IMP] nova linha 33 (mesma de 033): 15 dias úteis, contados conforme a modalidade da citação *(C)*. | "Sem retratação" ficou no título da etapa, como antes. |
| con-admissibilidade-041 | conhecimento.js:77 (teste, questão 2) | Enunciado `Juiz que julga improcedente liminarmente pode se retratar em:`; alternativas `5 dias` / `15 dias`; explicação `art. 332, §3º.` | Enunciado `Interposta apelação contra a improcedência liminar, o juiz pode se retratar em:`; alternativas `5 dias úteis` / `15 dias úteis`; explicação `arts. 332, § 3º, e 219.` | Coberto pela linha 33 de [IMP] (033). | Gabarito mantido (índice 0, "5 dias úteis"). |

## Plataforma

- `node --check` em `conhecimento.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/61-pk-conhecimento.js` (conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `61-pk-conhecimento.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código, e 035 segue `não verificável` à espera do Joaquim.

## Notado de passagem

- **[IND] linha 4 e linhas 29 e 30**: o prazo de emenda (15 dias, art. 321) aparece sem "úteis". Fora do parecer; não alterei.
- **[IND] linha 34**: "embargos de declaração, cujo prazo é de 5 dias (art. 1.023)" também sem "úteis". Fora do parecer; não alterei.
- **[IND] linhas 24 e 25**: liga ilegitimidade manifesta à incapacidade relativa e absoluta do Código Civil, que é questão de capacidade, não de legitimidade. Fora do parecer; não alterei.
- **[IMP] linhas 31 e 32** (originais): "Se houver [retratação], o juiz determinará a citação do réu, caso não haja, determinará a citação do réu para apresentar as contrarrazões" — a primeira parte não diz para quê. Fora do parecer; mantida, com o subitem *(C)* abaixo.
