# Correções · con-inicial

Data: 24/10/2026 · Data-base: 23/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **5 aplicadas**, todas `corrigir`: 003, 010, 015, 018 e 023.
- **0 bloqueadas.**
- Nenhum `divergente`, `não verificável` nem `citação doutrinária` no parecer.
- Não mexidos: os 18 itens `confere`. Conceito sem veredito: 011 (mnemônico).

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/conhecimento.js`, aula `inicial` (linhas 31 a 49; nenhuma linha nova, a numeração do arquivo não mudou). As outras aulas do arquivo não foram tocadas. `engine.js` não foi tocado.

Nota do Vault: `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento/1. Aula 12.08/Art. 319 - da petição inicial.md` ([INI]). Não é `(C)`: o texto corrigido entrou em linhas novas, abaixo do trecho de origem, com a marca *(C, 24/10/2026)*. Os números de linha abaixo são os de depois da inserção. A transcrição literal do art. 106, I (linhas 65 e 66), está correta e ficou intacta, sem ⚖️. A nota não tem diagrama, fluxograma nem quadro sobre esses pontos; o mnemônico (linha 42) não fala dos itens corrigidos.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-inicial-003 | conhecimento.js:36 (`flips` "Os requisitos do art. 319", cartão "II · Partes", verso) | `Nome, estado civil ou união estável, profissão, CPF ou CNPJ, e-mail e endereço de autor e réu.` | `Nomes e prenomes, estado civil, existência de união estável, profissão, CPF ou CNPJ, e-mail, domicílio e residência de autor e réu, observadas as ressalvas do art. 319, §§ 1º a 3º.` | [INI] nova linha 57, abaixo da linha 56 ("NPEP ... Email ou domicílio de residência do autor e do réu"): redação do parecer *(C)*. | "II · Partes" é a frente do cartão; mantida. |
| con-inicial-010 | conhecimento.js:42 (mesmo `flips`, cartão "Documentos", verso) | `Os indispensáveis à propositura (art. 320) e a procuração.` | `Os indispensáveis à propositura da ação (art. 320) e a procuração, ressalvadas as hipóteses legais de atuação sem sua apresentação (arts. 104 e 287, parágrafo único).` | [INI] nova linha 49, abaixo da linha 48 ("procuração (obrigatória)"): redação do parecer *(C)*. | "Documentos" é a frente do cartão; mantida. |
| con-inicial-015 | conhecimento.js:46 (`chooser` "E se faltar algo?", opção "Requisito ou documento") | Rótulo `Emenda em 15 dias`; texto `O juiz manda emendar ou completar em 15 dias, indicando com precisão o que corrigir (art. 321). Descumprida, indefere a inicial.` | Rótulo `Emenda em 15 dias úteis`; texto `O juiz determina ao autor emendar ou completar a inicial em 15 dias úteis, indicando com precisão o que corrigir (arts. 321 e 219). A contagem observa a modalidade de intimação e exclui o dia do começo (arts. 224 e 231). Descumprida, indefere a inicial.` | [INI] nova linha 78, abaixo das linhas 76 e 77 ("O prazo é de 15 dias." / "Caso a parte deixar transcorrer..."): redação do parecer *(C)*. | Rótulo da opção ajustado para "15 dias úteis". "Descumprida, indefere a inicial." (016, `confere`) mantido. |
| con-inicial-018 | conhecimento.js:47 (mesmo `chooser`, opção "Advogado em causa própria") | Rótulo `5 dias`; texto `... (art. 106, I). Faltando, 5 dias para suprir.` | Rótulo `5 dias úteis`; texto `... (art. 106, I). Faltando a declaração, o juiz ordena ao advogado em causa própria suprir a omissão em 5 dias úteis, antes de determinar a citação do réu, sob pena de indeferimento (arts. 106, § 1º, e 219). A contagem observa os arts. 224 e 231, excluído o dia do começo.` | [INI] nova linha 81, abaixo da linha 80 ("No caso do art. 106, I, do CPC, o prazo será de 5 dias."): redação do parecer *(C)*. | Rótulo da opção ajustado para "5 dias úteis". Primeira frase (017, `confere`) mantida. |
| con-inicial-023 | conhecimento.js:49 (`quiz`, 2ª questão) | Alternativas `5 dias`, `10 dias`, `15 dias`; explicação `art. 321.` | Alternativas `5 dias úteis`, `10 dias úteis`, `15 dias úteis` (gabarito: índice 2); explicação `arts. 321 e 219. Prazo do autor; a contagem observa a modalidade de intimação e exclui o dia do começo (arts. 224 e 231).` | Mesma linha 78 de [INI] (015). | As duas alternativas erradas também ganharam "úteis", para a certa não se destacar pela forma. Gabarito inalterado. |

## Plataforma

- `node --check` em `conhecimento.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/61-pk-conhecimento.js` (conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `61-pk-conhecimento.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código (mesmo critério das aulas anteriores do arquivo).

## Notado de passagem

- **`Obsidian Vault/.../2. Aula 19.08/1. Indeferimento da petição inicial.md`, linhas 4 e 31**: repetem "15 dias" para a emenda, sem "úteis". Não é a nota de origem desta aula; não alterei.
- **[INI] linha 56**: "Email ou domicílio de residência" também aparece como alternativa; a linha *(C)* 57 abaixo dela já traz a redação certa.
