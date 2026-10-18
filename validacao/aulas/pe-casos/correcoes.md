# Correções · pe-casos

Data: 18/10/2026 · Data-base: 18/10/2026.
Entradas: `parecer.md`, `ficha.md`, `aula.md` e `nota-orquestrador.md`. Não há `decisoes.md`.

## Resumo

- **3 aplicadas**, todas `corrigir`: 016, 022 e 027.
- **1 ajuste no Vault pedido pelo Orquestrador** (nota-orquestrador.md): Caso 8 da nota `(C) 14. Casos Práticos de Recursos.md`, alinhado à correção validada de pe-admissibilidade-034.
- **0 bloqueadas.**
- Não mexidos:
  - 18 `confere`: 001, 004, 007 a 010, 013 a 015, 017 a 021 e 023 a 026.
  - 6 `não verificável`: 002, 003, 005, 006, 011 e 012. Continuam como estão, pela regra geral de 16/10/2026.
- Nenhum item `divergente` nem citação doutrinária.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/procesp3.js`, aula `casos` (linhas 60 a 77). Só mudaram as linhas 74 (`chooser`, item "Complementaridade"), 75 (`arts`, item "Art. 610") e 76 (`quiz`, questões 1 e 2). Nenhuma outra aula foi tocada.

Nota do Vault (caminho relativo a `Obsidian Vault/Faculdade/6ª Fase/2. Procedimentos Especiais/Recursos/0. Material do Professor/`):
- **[R14]** `(C) 14. Casos Práticos de Recursos.md`

A nota é `(C)` (gerada por IA). Como nos lotes anteriores, corrigi o texto diretamente, sem a marca *(C, 18/10/2026)*. O número de linhas não mudou (153).

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| pe-casos-016 | procesp3.js:74 (`chooser`, item "Complementaridade", texto) | `` A apela no primeiro dia; B opõe embargos de declaração que modificam a sentença. A pode complementar ou alterar suas razões em 15 dias, nos limites da modificação (${a(`art. 1.024, §4º`)}). `` | `` A já apelou e B obteve, em embargos de declaração, a modificação da sentença. A pode complementar ou alterar suas razões em 15 dias úteis, contados da intimação da decisão dos embargos, nos exatos limites da modificação (${a(`arts. 1.024, §4º, e 219`)}). `` | Sem alteração. [R14] não trata da complementaridade. A nota `(C) 8. Princípios Fundamentais dos Recursos.md` (linha 105) já traz 15 dias úteis, contados da intimação da decisão dos embargos, nos exatos limites da modificação. O caso em `(C) 10. …Extrínsecos.md` (linhas 77–82) só faz a pergunta, sem prazo. | procesp3.js:76, quiz 2: alternativa certa `pode complementar em 15 dias` → `pode complementar em 15 dias úteis`; explicação `` ${a(`art. 1.024, §4º`)}. `` → `` Nos limites da modificação, contados os 15 dias úteis da intimação da decisão dos embargos (${a(`arts. 1.024, §4º, e 219`)}). `` A alternativa errada ("nada pode fazer") e o gabarito (índice 1) ficaram iguais. Título e subtítulo do item ficaram iguais. |
| pe-casos-022 | procesp3.js:75 (`arts`, item "Art. 610", 3º campo) | `Judicial com testamento ou incapaz; extrajudicial com todos capazes e concordes.` | `Judicial com testamento ou incapaz; escritura pública com todos capazes, concordes e assistidos por advogado ou defensor. O STJ admite a via extrajudicial com testamento, desde que os interessados sejam capazes, concordes e assistidos por advogado, com registro judicial do testamento ou autorização expressa do juízo competente (REsp 1.808.767/RJ e REsp 1.951.456/RS).` | Sem alteração. [R14] não trata do art. 610. A nota de inventário (`Procedimentos Especiais/0. Material do Professor/(C) 11. Inventário Judicial — Conceitos e Prazos.md`) é origem de outra aula e não foi tocada. | Redação sugerida, encurtada só no início para o formato do cartão ("O art. 610 do CPC prevê inventário judicial com testamento ou incapaz e permite escritura pública…" → "Judicial com testamento ou incapaz; escritura pública…"), já que o título do cartão é "Art. 610". A parcela do CNJ sobre incapazes ficou de fora, como no parecer. |
| pe-casos-027 | procesp3.js:76 (`quiz` 1, explicação, 2ª frase) | `` Desde a Lei 15.484/2026, com demonstração da relevância da questão federal (${a(`CPC, art. 1.035-A`)}). `` | `` A demonstração da relevância da questão federal, em tópico específico e fundamentado, é exigida nos REsp contra acórdãos publicados a partir de 03/09/2026, conforme o marco anunciado pelo STJ para a Lei 15.484/2026 (${a(`CPC, art. 1.035-A`)}). `` | Sem alteração. [R14] (Caso 2, linhas 40–42) não fala da relevância. | A 1ª frase (`CF, art. 105, III, c`, 008, `confere`), o enunciado, as alternativas e o gabarito ficaram iguais. |
| Nota do Orquestrador (pe-admissibilidade-034) | — (só Vault) | — | — | [R14] linha 115 (Caso 8, "Caminho", item 1). Antes: `> **(1)** Depósito **sem ressalva** = ato **incompatível** com a vontade de recorrer → **aquiescência tácita** → **preclusão lógica**.` Depois: `> **(1)** O depósito **sem ressalva**, **por si só**, não basta para concluir que houve aquiescência. Se o réu **paga** a condenação sem reserva e **pede expressamente a extinção e o arquivamento**, há **aceitação tácita** → **preclusão lógica** (art. 1.000; AgInt no AREsp 2.758.505/PE). O depósito para evitar multa no cumprimento provisório **não é incompatível** com o recurso (art. 520, § 3º).` | Mesma redação aplicada em [R10] na correção de pe-admissibilidade-034. O enunciado do caso (linha 109), as perguntas e o item (2) do "Caminho" ficaram iguais. A nota não tem diagrama, fluxograma nem quadro com essa conclusão além desse callout. |

## Plataforma

- `node --check` em `procesp3.js`: sem erro. `git diff --stat`: 3 linhas mudadas, todas na aula `casos`.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; as três redações novas estão em `prototipo/src/js/62-pk-procesp.js`. A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `62-pk-procesp.js`: sem erro.
- Não abri a aula no navegador; as mudanças são só de texto, sem SVG.

## Marca "Validada em"

Não aplicada. A aula não tem linha "Validada em" no código, e 002, 003, 005, 006, 011 e 012 seguem `não verificável` (mantidos pela regra geral, com pendência para o Joaquim). O Orquestrador decide se a marca entra.

## Notado de passagem

- **pe-casos-003 × Vault:** o cartão 2 da Rodada 1 (`O réu deposita toda a condenação sem ressalva e depois apela.` → "Não conhece", "Aquiescência tácita, preclusão lógica") e o quiz 3 (procesp3.js:65 e 76) continuam com a conclusão antiga, porque 003 é `não verificável` e não pode ser mexido. Depois do ajuste pedido pelo Orquestrador, o Caso 8 de [R14] e a aula `admissibilidade` (pe-admissibilidade-034, já corrigida) dizem que o mero depósito não basta. A aula `casos` ficou em descompasso com elas. Sugiro ao Joaquim decidir 003 à luz da correção validada de pe-admissibilidade-034.
- **`(C) 6. Pronunciamentos Sujeitos a Recurso.md`, linha 59:** diz que a relevância vale para acórdãos "publicados **após** 3/9/2026"; o marco do STJ usado no parecer de 027 é "a partir de 03/09/2026". Não é nota de origem desta aula; não alterei.
- **pe-casos-022:** a disciplina atual do CNJ para inventário extrajudicial com incapaz segue sem verificação (pendência do parecer). O cartão continua dizendo "Judicial com … incapaz", que é o texto do art. 610.
- **Teste rápido com 3 questões:** a estrutura do projeto pede 5. Não é item do parecer; não alterei.
