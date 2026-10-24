# Correções · con-aij

Data: 24/10/2026 · Data-base: 23/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **10 aplicadas**, todas `corrigir`: 004, 005, 006, 007, 008, 012, 016, 020, 021 e 022.
- **0 bloqueadas.**
- Nenhum `divergente`, `não verificável` nem `citação doutrinária` no parecer.
- Não mexidos: os 13 itens `confere`, inclusive o teste 3 (gravação).

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/conhecimento2.js`, aula `aij` (linhas 45 a 58; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas, salvo `saneamento`, corrigida antes nesta rodada (ver `validacao/aulas/con-saneamento/correcoes.md`). `engine.js` não foi tocado.

Nota do Vault: `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento/6. Aula 23.09/1. Audiência de instrução e julgamento.md` ([AIJ]). Não é `(C)`: o texto corrigido entrou em linhas novas, abaixo do trecho de origem, com a marca *(C, 24/10/2026)*. Os números de linha abaixo são os de depois da inserção.

A seção "1. Procedimento em sequência" de [AIJ] é a lista-fluxo da audiência: recebeu as linhas *(C)* de 004 a 008. A transcrição literal do art. 189 (linhas 52 a 58) e do art. 361, parágrafo único (linha 62), está correta e ficou intacta, sem ⚖️. A linha 64 ("Quem der causa ao adiamento da audiência responderá pelas despesas acrescidas") já está de acordo com 020; não mexi. Não há trecho de origem de 012 ("una e contínua"; busca por "contínua" e "cindid" na pasta da matéria) nem dos testes.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-aij-004 | conhecimento2.js:51 (`tl` "A sequência da audiência", etapa "Perito e assistentes técnicos") | `Respondem aos quesitos de esclarecimento (art. 361, I).` | `Respondem aos quesitos de esclarecimento requeridos no prazo e na forma do art. 477, caso ainda não respondidos por escrito (art. 361, I).` | [AIJ] nova linha 11, abaixo da linha 10 ("Inicialmente, é ouvido o perito"): redação do parecer *(C)*. | Novo link `a()` "art. 477". |
| con-aij-005 | conhecimento2.js:52 (mesmo `tl`, etapa "Depoimentos pessoais") | `Primeiro o autor, depois o réu (II).` | `Preferencialmente, primeiro o autor, depois o réu (art. 361, caput e II).` | [AIJ] nova linha 13, abaixo da linha 12 ("Após, é tomado o depoimento pessoal das partes"): redação do parecer *(C)*. | Link `a()` passou de "II" para "art. 361, caput e II". |
| con-aij-006 | conhecimento2.js:53 (mesmo `tl`, etapa "Testemunhas") | `Primeiro as do autor, depois as do réu (III). A ordem é preferencial.` | `Primeiro as do autor, depois as do réu (III). O juiz pode alterar essa ordem se as partes concordarem (art. 456 e parágrafo único).` | [AIJ] nova linha 17, abaixo da linha 16 ("Não é uma ordem peremptória, mas preferencial."): redação do parecer *(C)*. O texto antigo ficou. | Novo link `a()` "art. 456 e parágrafo único". |
| con-aij-007 | conhecimento2.js:54 (mesmo `tl`, etapa "Debates orais", 1ª frase) | `20 minutos para cada parte e para o MP, prorrogáveis por 10 (art. 364).` | `20 minutos para o advogado do autor, o do réu e o MP, quando intervier, sucessivamente; prorrogáveis por 10, a critério do juiz. Litisconsortes e terceiros do mesmo grupo dividem o prazo, salvo convenção diversa (art. 364, caput e §1º).` | [AIJ] nova linha 21, abaixo da linha 20 ("Tempo: 20 minutos +10 minutos (caso necessário, havendo litisconsórcio...)"): redação do parecer *(C)*. | Link `a()` passou de "art. 364" para "art. 364, caput e §1º". |
| con-aij-008 | conhecimento2.js:54 (mesma etapa, 2ª frase) | `Causa complexa: memoriais em 15 dias sucessivos.` | `Em questões complexas de fato ou de direito, os debates podem ser substituídos por razões finais escritas: prazos sucessivos de 15 dias úteis para autor, réu e MP, quando intervier, assegurada vista dos autos e observados os prazos diferenciados legais (art. 364, §2º; arts. 180, 183, 186 e 219).` | [AIJ] nova linha 24, abaixo da linha 23 ("Apresentada, sucessivamente, no prazo de 15 dias..."): redação do parecer *(C)*. | Novos links `a()` "art. 364, §2º" e "arts. 180, 183, 186 e 219". |
| con-aij-012 | conhecimento2.js:56 (`flips` "Regras da sala", cartão "Una e contínua", verso) | `Pode ser cindida excepcionalmente (art. 365).` | `A audiência é una e contínua. Pode ser excepcional e justificadamente cindida na ausência de perito ou testemunha, com concordância das partes (art. 365).` | Sem trecho de origem no Vault. | Frente do cartão mantida. |
| con-aij-016 | conhecimento2.js:57 (`chooser` "Adiamento", opção "Impedimento justificado": subtítulo e texto) | Subtítulo `Quem deve participar não pode vir`; texto `Inciso II. O impedimento deve ser comprovado até a abertura (§1º).` | Subtítulo `Quem deve necessariamente participar não pode vir`; texto `A audiência pode ser adiada se, por motivo justificado, não puder comparecer pessoa que deva necessariamente participar (inciso II). O impedimento deve ser comprovado até a abertura (§1º).` | [AIJ] nova linha 44, abaixo da linha 43 ("Justificado: deverá ser provado até a abertura..."): redação do parecer *(C)*, com o § 1º. | A frase do § 1º (017, `confere`) foi mantida. Rótulo da opção mantido. |
| con-aij-020 | conhecimento2.js:57 (mesmo `chooser`, opção "Advogado ausente", 2ª frase) | `Quem der causa ao adiamento paga as despesas (§3º).` | `Quem der causa ao adiamento responde pelas despesas acrescidas (§3º).` | Sem alteração: [AIJ] linha 64 já fala em "despesas acrescidas". | — |
| con-aij-021 | conhecimento2.js:58 (teste, questão 1: enunciado) | `Quem depõe primeiro?` | `Segundo a ordem preferencial do art. 361, II, quem presta depoimento pessoal primeiro?` | Sem trecho de origem no Vault (coberto pela linha 13 de 005). | Alternativas (`O réu`, `O autor`), gabarito (`O autor`) e explicação mantidos. |
| con-aij-022 | conhecimento2.js:58 (teste, questão 2: enunciado e alternativa certa) | Enunciado `Tempo de debates de cada parte:`; alternativa `20 + 10 minutos` | Enunciado `Qual é o prazo dos debates orais para cada advogado das partes, sem litisconsortes ou terceiros intervenientes?`; alternativa `20 minutos, prorrogáveis por 10 a critério do juiz` | Sem trecho de origem no Vault (coberto pela linha 21 de 007). | Alternativa errada (`15 minutos`), gabarito (índice 1) e explicação (`art. 364`) mantidos. |

## Plataforma

- `node --check` em `conhecimento2.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/61-pk-conhecimento.js` (conferida por busca de trechos de 016 e 020). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `61-pk-conhecimento.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código (mesmo critério das aulas anteriores do arquivo).

## Notado de passagem

- **[AIJ] linha 20**: "+10 minutos (caso necessário, havendo litisconsórcio ou caso o MP seja fiscal da ordem jurídica)" mistura a prorrogação com a divisão do prazo entre litisconsortes. A linha *(C)* 21 traz a regra; o texto antigo ficou.
- **[AIJ] linhas 38 e 39**: o "não comparecimento injustificado" aparece como "atraso superior a 30 minutos". O atraso é do início da audiência (art. 362, III), como a aula já diz (`confere`). Não é item corrigido; não alterei.
