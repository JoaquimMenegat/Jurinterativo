# Correções · tgp-terceiros

Data: 23/10/2026 · Data-base: 22/10/2026.
Entrada: `parecer.md` (para 030, vale a `conferencia-devolucoes.md`, já refletida no parecer). Sem `decisoes.md`.

## Resumo

- **7 aplicadas**, todas `corrigir`: 005, 006, 017, 027, 029, 032 e 036.
- **0 bloqueadas.**
- Nenhum `divergente` no parecer.
- Não mexidos:
  - `não verificável`: 009 (relação jurídica da assistência simples), 020 (sublocatário na ação de despejo) e 030. Continuam como estão, pela regra geral de 16/10/2026.
  - `confere`: os 27 itens.
  - Conceitos sem veredito: 001 e 016.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/tgp2.js`, aula `terceiros` (linhas 3 a 31; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas.

Notas do Vault (pasta `Obsidian Vault/Faculdade/3ª Fase/Teoria Geral dos Processos/6. Aula 03-04/`). Nenhuma é `(C)`: o texto corrigido leva a marca *(C, 23/10/2026)*.

| Sigla | Nota |
|---|---|
| [ASS] | `Assistência.md` |
| [CHA] | `Chamamento ao processo.md` |

A transcrição do art. 123 em [ASS] (linhas 6 a 8) está correta e ficou intacta, sem ⚖️; o mesmo vale para a do art. 124. As notas não têm diagrama, fluxograma ou quadro. O Vault não tem nota sobre a desconsideração da personalidade jurídica nem sobre a Súmula 537 do STJ (busca em todo o Vault): 006, 029, 032 e 036 não têm trecho de origem a corrigir. A nota `Intervenção de terceiros.md` só lista as modalidades.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| tgp-terceiros-005 | tgp2.js:9 (`table` "As cinco figuras", linha "Chamamento ao processo", coluna "Para quê") | `Trazer os coobrigados solidários` | `Trazer o afiançado, os demais fiadores ou os demais devedores solidários` | [CHA] linha 4 ("se trata de uma obrigação solidária imposta à parte passiva… coobrigados"): redação do parecer *(C)*. | "Só o réu" e "130 a 132" mantidos. Cartão 1 do `sorter` (fiador traz o devedor principal) e questão 1 do teste já coerentes; não tocados. |
| tgp-terceiros-006 | tgp2.js:10 (mesma `table`, linha "Desconsideração da personalidade", colunas "Quem provoca" e "Para quê") | `Parte ou MP` · `Alcançar bens de sócios ou da empresa` | `Parte ou MP, quando lhe couber intervir` · `Alcançar bens dos sócios ou, na modalidade inversa, da pessoa jurídica, observados os pressupostos legais` | Sem trecho de origem no Vault. | Coluna "Artigos" (133 a 137) mantida. |
| tgp-terceiros-017 | tgp2.js:13 (`callout`, título e texto) | Título `Efeito da intervenção (art. 123)`; texto `Transitada a sentença, o assistente não pode discutir a justiça da decisão em outro processo, salvo se provar que foi impedido de produzir provas pelo estado em que recebeu o processo, ou que o assistido, por dolo ou culpa, deixou de usar alegações ou provas que ele desconhecia.` | Título `Efeito da assistência simples (art. 123)`; texto `Após o trânsito em julgado, o assistente não pode discutir a justiça da decisão em outro processo, salvo se alegar e provar que o estado do processo ou declarações e atos do assistido impediram provas capazes de influir na sentença, ou que desconhecia alegações ou provas não utilizadas pelo assistido por dolo ou culpa.` | [ASS] linha 4 ("bem como não pode discutir o mérito da sentença transitado em julgado"): redação do parecer, com "(CPC, art. 123)" *(C)*. | A citação do art. 123 ficou no título, como antes. |
| tgp-terceiros-027 | tgp2.js:24 (`flips` "Detalhes que decidem questões", cartão "Chamamento gera título") | `A sentença vale como título para quem pagar cobrar do devedor principal ou dos demais a quota de cada um (art. 132).` | `A sentença de procedência vale como título executivo para o réu que pagar a dívida cobrar o valor integral do devedor principal ou, de cada codevedor, sua quota (art. 132).` | [CHA] linha 6 ("Pode ser feita pela divisão de suas quotas-partes, seja integralmente, nos casos de fiador e devedor principal."): redação do parecer *(C)*. | Título do cartão mantido. |
| tgp-terceiros-029 | tgp2.js:25 (mesmo `flips`, cartão "Desconsideração", 2ª oração) | `suspende o processo, salvo se pedida na inicial;` | `A instauração do incidente suspende o processo; se a desconsideração for requerida na petição inicial, dispensa-se o incidente e essa suspensão não ocorre (art. 134, §§2º e 3º).` | Sem trecho de origem no Vault. | "Cabe em qualquer fase", "o sócio é citado e tem 15 dias" e "Pode ser inversa" mantidos (itens `confere`). A pontuação do cartão passou de ponto e vírgula para frases separadas, para caber a nova redação. |
| tgp-terceiros-032 | tgp2.js:25 (mesmo cartão, última frase) | `Decide-se por interlocutória agravável (art. 1.015, IV).` | `O incidente é resolvido por decisão interlocutória: cabe agravo de instrumento em primeiro grau e agravo interno se decidida pelo relator. Se a questão integrar a sentença, cabe apelação (arts. 136, 1.015, IV, e 1.009, §3º).` | Sem trecho de origem no Vault. | Link `a()` passou a citar os três artigos do parecer. |
| tgp-terceiros-036 | tgp2.js:27 (`juris` "Súmula aplicável", campo `tese`) | `Na denunciação da lide, a seguradora pode ser condenada direta e solidariamente com o segurado, nos limites da apólice.` | `Em ação de reparação de danos, a seguradora denunciada que aceitar a denunciação ou contestar o pedido do autor pode ser condenada direta e solidariamente com o segurado, nos limites da apólice.` | Sem trecho de origem no Vault. | `court`, `year` e `id` mantidos. O cartão "Seguradora condenada direto" (026, `confere`) não foi tocado. |

## Plataforma

- `node --check` em `tgp2.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/60-pk-tgp.js` (conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `60-pk-tgp.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código, e 009, 020 e 030 seguem `não verificável`. O Orquestrador decide se a marca entra.

## Notado de passagem

- **[CHA] linha 8**: "O chamamento ao processo pode ser uma assistência litisconsorial" confunde dois institutos. Fora do parecer; não alterei.
- **[ASS] linha 4**: "o terceiro não responde sob as ações da parte em caso de revelia" não bate com o que a aula diz (o assistente simples atua como substituto processual do revel, art. 121, parágrafo único). Fora do parecer; não alterei.
- **[ASS] linha 22**: "As partes se manifestam no prazo de 15 dias", sem artigo. Não conferido; fora do parecer.
