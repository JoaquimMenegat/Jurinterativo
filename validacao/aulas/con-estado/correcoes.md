# Correções · con-estado

Data: 23/10/2026 · Data-base: 23/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **2 aplicadas**, ambas `corrigir`: 001 e 014.
- **0 bloqueadas.**
- Nenhum `divergente` nem `não verificável` no parecer.
- Não mexidos: os 17 itens `confere` e os conceitos 011 e 016 (sem veredito).

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/conhecimento2.js`, aula `estado` (linhas 15 a 25; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas. `engine.js` não foi tocado.

Nota do Vault: `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento/5. Aula 16.09/2. Julgamento conforme o estado do processo.md` (sigla [JCE]). Não é `(C)`: o texto corrigido leva a marca *(C, 23/10/2026)*. A nota não tem diagrama, fluxograma ou quadro, nem julgado, súmula ou citação literal. Também procurei o tema em `1. Providências preliminares.md`, `3. Saneamento processual.md`, `3.1 Relatório sobre saneamento.md` e na nota-índice `Processo de conhecimento - procedimento comum.md`: nenhuma repete os quatro caminhos nem o exemplo do dano material.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-estado-001 | conhecimento2.js:16 (`intro` da aula) | `Depois das providências preliminares, o juiz escolhe entre quatro caminhos. Só um deles leva à fase de provas.` | `Depois das providências preliminares, há quatro caminhos: extinção, julgamento antecipado, julgamento antecipado parcial e saneamento. O saneamento organiza as provas; havendo julgamento parcial, a parcela restante também pode seguir para instrução (arts. 353 a 357 do CPC).` | [JCE] linha 4 ("o juiz poderá julgar o processo ou decidir seu rumo (saneamento)"): reescrita com a redação do parecer, citando "CPC, arts. 353 a 357" *(C)*. | Os artigos ficaram em texto simples, porque nenhum `intro` do pacote usa `a()`. O `wizard` "Que caminho o juiz toma?" já leva a parcela não julgada ao saneamento por outro ramo e não precisou de ajuste. |
| con-estado-014 | conhecimento2.js:22 (`sorter` "Classifique", 3º cartão) | `O réu reconheceu o dano material; o dano moral depende de prova.` | `O pedido de indenização por dano material está incontroverso e pronto para julgamento, sem reconhecimento formal da procedência; o dano moral depende de prova.` | Sem trecho de origem no Vault (busca por "dano material" na pasta da matéria). | Categoria certa (`Antecipado parcial`, índice 2) e explicação (`Parcela incontroversa (art. 356, I).`) mantidas: já batem com o "→ Antecipado parcial (art. 356, I, do CPC)" da redação sugerida. |

## Plataforma

- `node --check` em `conhecimento2.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/61-pk-conhecimento.js` (conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `61-pk-conhecimento.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: todos os IDs estão resolvidos, mas a aula não tem linha "Validada em" no código (nenhuma aula tem). O Orquestrador decide se a marca entra.

## Notado de passagem

- **[JCE] linha 5**: atribui ao art. 487, II, "decadência ou perempção" (o inciso trata de decadência ou prescrição) e diz que, nas hipóteses dos arts. 485 e 487, II e III, o juiz "poderá julgar antecipadamente o mérito" (o art. 354 fala em sentença de extinção). Fora do parecer; não alterei.
- **[JCE] linha 8**: diz que, no julgamento antecipado parcial, o direito julgado "não poderá ser incontroverso", e liga a hipótese à revelia. O art. 356, I, prevê justamente o pedido incontroverso (ver con-estado-006, `confere`). Fora do parecer, porque a aula não repete esse trecho; não alterei.
- **`1. Providências preliminares.md`, linha 4**: diz que todo processo sem julgamento antecipado do mérito passa pelo saneamento. Toca a mesma ideia de 001, mas é nota de outra aula (con-preliminares); não alterei.
