# Correções · con-revelia

Data: 23/10/2026 · Data-base: 22/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **4 aplicadas**, todas `corrigir`: 008, 016, 018 e 019.
- **0 bloqueadas.**
- Nenhum `divergente` nem `citação doutrinária` no parecer.
- Não mexidos:
  - `não verificável`: 003 (corréu que contesta, no simulador) e 005 (exemplo da certidão de casamento no divórcio). Continuam como estão, pela regra geral de 16/10/2026; o parecer os lista em "Para o Joaquim decidir", e não há `decisoes.md`.
  - `confere`: os 15 itens. Conceito sem veredito: 1.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/conhecimento.js`, aula `revelia` (linhas 152 a 158; a diferença em relação ao `aula.md` vem das linhas acrescentadas aos SVGs de con-rito e con-pedido nesta rodada). A contagem de linhas da aula não mudou. As outras aulas do arquivo não foram tocadas. `engine.js` não foi tocado.

Nota do Vault: `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento/4. Aula 09.09/Revelia.md` ([REV]). Não é `(C)`: o texto corrigido leva a marca *(C, 23/10/2026)*. Os números de linha abaixo são os de depois da inserção. A nota não tem diagrama, fluxograma ou quadro, nem transcrição literal de lei; a lista de exemplos de revelia imprópria recebeu subitens *(C)*, com o texto original mantido.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-revelia-008 | conhecimento.js:155 (`gauge` "Simulador de revelia", resultado "Presunção afastada", 2ª frase) | `O autor ainda tem de provar o que alegou, e o juiz manda especificar provas (art. 348).` | `O autor ainda tem de provar o que alegou, e o juiz manda que ele especifique as provas que pretende produzir, se ainda não as tiver indicado (art. 348).` | Sem trecho de origem no Vault ([REV] não trata do art. 348). | O "Afastada a presunção" da redação sugerida já é o título do resultado; "o autor" virou "ele", porque a frase já começa por "O autor". A 1ª frase e os itens do simulador (003 e 005, `não verificável`) não foram tocados. |
| con-revelia-016 | conhecimento.js:156 (`vs` "Os dois efeitos", lado "Processual", 3º item) | `Pode produzir provas contrapostas se ingressar a tempo (art. 349)` | `Pode produzir provas contrapostas às alegações do autor, desde que se faça representar nos autos a tempo de praticar os atos indispensáveis a essa produção (art. 349)` | Sem trecho de origem no Vault ([REV] linha 25 trata só do ingresso no estado em que o processo está). | O sujeito "O revel" ficou implícito, como nos outros itens do bloco. |
| con-revelia-018 | conhecimento.js:157 (`callout` "Revelia própria e imprópria", exemplo 1) | `como não regularizar a representação (art. 76, §1º, II)` | `Na instância originária, o réu é considerado revel se não sanar, no prazo razoável fixado pelo juiz, o vício de representação cuja regularização lhe caiba (art. 76, § 1º, II).` | [REV] nova linha 10, abaixo do exemplo do art. 76 (linha 9): redação do parecer *(C)*. A linha 9 original ("a parte é incapaz, houve a suspensão do processo") ficou. | A frase única do callout virou três: a definição doutrinária (mantida, sem o "como") e os dois exemplos com a redação sugerida. |
| con-revelia-019 | conhecimento.js:157 (mesmo `callout`, exemplo 2) | `ou não constituir novo advogado após a morte do anterior (art. 313, §3º)` | `Se o advogado do réu morrer, o processo é suspenso e o juiz determina a constituição de novo mandatário em 15 dias úteis, contados da intimação para essa providência. Descumprida a determinação, o processo prossegue à revelia do réu (art. 313, I e § 3º).` | [REV] nova linha 12, abaixo do exemplo da morte do defensor (linha 11): redação do parecer *(C)*. | Link `a()` passou de "art. 313, §3º" para "art. 313, I e § 3º", como na redação sugerida. |

## Plataforma

- `node --check` em `conhecimento.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/61-pk-conhecimento.js` (conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `61-pk-conhecimento.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código, e 003 e 005 seguem `não verificável` à espera do Joaquim.

## Notado de passagem

- **[REV] linha 4**: "não contestou, é réu" parece querer dizer "é revel". Fora do parecer; não alterei.
- **[REV] linha 9** (original): descreve o exemplo do art. 76 como "a parte é incapaz"; o § 1º, II, trata do vício de representação do réu. A linha *(C)* logo abaixo traz a regra; o texto original ficou.
- **[REV] linha 22**: "Quando as alegações da parte autora forem controvérsias e inverossímeis com as provas" — redação confusa para o art. 345, IV. Fora do parecer; não alterei.
