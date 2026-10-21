# Correções · pe-efeitos

Data: 20/10/2026 · Data-base: 18/10/2026.
Entradas: `parecer.md`, `ficha.md` e `aula.md`. Não há `decisoes.md`. Destaque aprovado pelo Joaquim, recebido do Orquestrador: pe-efeitos-007 mantém "Em REsp e RE, prevalece que não, pela exigência de prequestionamento" e troca a parte do "mas" pela redação do parecer, coerente com o cartão "Translativo e prequestionamento" (procesp3.js:43). **Gravidade do 007: média** (decisão do Joaquim: a frase não estava toda errada; o parecer indicava alta).

## Resumo

- **4 aplicadas**, todas `corrigir`: 003, 007, 014 e 028.
- **0 bloqueadas.**
- Não mexidos:
  - 24 `confere`.
  - 8 `não verificável`: 002, 004, 008, 024, 025, 030, 032 e 033. Sem decisão do Joaquim; continuam como estão (regra geral de 16/10/2026).
  - 001 é `conceito`, sem veredito.
- Nenhum item `divergente` nem citação doutrinária.

| ID | Gravidade |
|---|---|
| pe-efeitos-003 | média |
| pe-efeitos-007 | média (decisão do Joaquim) |
| pe-efeitos-014 | baixa |
| pe-efeitos-028 | média |

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/procesp3.js`, aula `efeitos` (linhas 35 a 44). Só mudaram as linhas 38 (tabela "Os seis efeitos"), 40 (callout "Causa madura") e 43 (`flips`, cartão "Pedido de efeito suspensivo"). O número de linhas não mudou. A aula `especies` e as demais do arquivo não foram tocadas.

Plataforma: `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais` rodou; só a cópia final de `src` deu WinError 32 (inofensivo). O pacote gerado `prototipo/src/js/62-pk-procesp.js` traz as quatro novas redações e passa em `node --check`. O objeto `efeitos` é lido sem erro (6 blocos).

Marca "Validada em": não atualizada. Oito itens `não verificável` seguem com pontos para o Joaquim decidir no parecer; o material também não tem esse campo nas demais aulas.

Notas do Vault (caminho relativo a `Obsidian Vault/Faculdade/6ª Fase/2. Procedimentos Especiais/Recursos/0. Material do Professor/`):
- **[R12]** `(C) 12. Efeito Suspensivo e Suspensivo Ativo.md`
- **[R13]** `(C) 13. Efeitos Translativo, Expansivo e Regressivo.md`
- Lidas, sem alteração: **[R11]** `(C) 11. Efeito Devolutivo.md`, **[R23]** `(C) 23. Apelação — Efeitos e Processamento.md`, **[R8]** `(C) 8. Princípios Fundamentais dos Recursos.md` e **[R19]** `(C) 19. Incidente de Resolução de Demandas Repetitivas.md`.

Busquei nas notas de Recursos por "1.034", "julga a causa", "a pedido", "requerimento", "demais", "995", "dano grave", "probabilidade", "987", "madura", "1.013", "omissão", "terminativ", "incongruen" e por blocos `mermaid`. Não há diagramas nem fluxogramas; os quadros com as mesmas afirmações (tabela "Em regra, apenas a APELAÇÃO" em [R12] e "Quadro-síntese dos seis efeitos" em [R13]) foram corrigidos. As notas são `(C)`; como nos lotes anteriores, corrigi o texto diretamente, sem a marca *(C, data)*. Julgados e súmulas citados ganharam o aviso ⚖️. A pasta `1. Material de Concurso` está vazia.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| pe-efeitos-003 | procesp3.js:38 (`table` "Os seis efeitos", linha "Suspensivo", colunas 2 e 3) | Col. 2: `Impede a decisão de produzir efeitos`. Col. 3: `Em regra só a apelação; nos demais, a pedido` | Col. 2: `Impede a eficácia da decisão recorrida`. Col. 3: `` Em regra a apelação, ressalvadas as exceções legais (${a(`art. 1.012`)}); por lei, também RE e REsp contra o julgamento de mérito do IRDR (${a(`art. 987, §1º`)}); nas demais hipóteses, pode haver concessão judicial (${a(`art. 995`)}) `` | [R12] linhas 37–39 (quadro "Em regra, apenas a APELAÇÃO"). Antes: linha única `Agravo de instrumento, …, embargos de divergência \| ❌ **Não** — mas **pode ser requerido ao relator**`. Depois: nova linha `**RE e REsp contra o julgamento de mérito do IRDR** \| ✅ **Sim**, por lei (**art. 987, §1º**)`, e a linha dos demais recursos passou a `(fora da hipótese acima) \| ❌ **Não** por lei — mas **pode haver concessão judicial**, a pedido (art. 995)`. [R13] linha 91 (quadro-síntese). Antes: `Em regra só **apelação**; os demais, a requerimento`. Depois: `Em regra **apelação** (art. 1.012, ressalvadas as exceções); por lei, também RE e REsp contra o mérito do **IRDR** (art. 987, §1º); nos demais, concessão judicial (art. 995)`. [R19] linha 49 já trazia o art. 987, §1º. | Redação sugerida adaptada às duas células da tabela. Tabela do art. 1.012, §1º (018 a 023, `confere`) igual. |
| pe-efeitos-007 | procesp3.js:38 (mesma tabela, linha "Translativo", coluna 3) | `Apelação, agravo, embargos de declaração e recurso ordinário. Em REsp e RE, prevalece que não, pela exigência de prequestionamento; mas, conhecido o recurso, o tribunal julga a causa e pode examinar matéria de ordem pública (art. 1.034)` | `` Apelação, agravo, embargos de declaração e recurso ordinário. Em REsp e RE, prevalece que não, pela exigência de prequestionamento. Admitido o REsp ou o RE, o tribunal julga a causa, aplicando o direito (${a(`art. 1.034`)}); no STJ, conhecer o REsp por outro fundamento não dispensa o prequestionamento da matéria de ordem pública (EDcl no AgInt no AREsp 2.000.239/GO) `` | [R13] linha 38 (callout "Por que os excepcionais não têm"). Antes: `**conhecido** o REsp ou o RE, o tribunal julga a causa aplicando o direito (art. 1.034 e parágrafo único; Súmula 456 do STF), e parte da doutrina e da jurisprudência admite o exame de ofício da matéria de ordem pública nesse momento. Isso não dispensa o prequestionamento para a admissão do recurso.` Depois: `**admitido** o REsp ou o RE, o tribunal julga a causa, aplicando o direito (art. 1.034 e parágrafo único; Súmula 456 do STF ⚖️). No STJ, conhecer o REsp por outro fundamento **não dispensa** o prequestionamento da matéria de ordem pública (EDcl no AgInt no AREsp 2.000.239/GO ⚖️).` Link do Planalto mantido. [R13] linha 93 (quadro-síntese). Antes: `nos excepcionais, prevalece que **não** (ressalva do art. 1.034)`. Depois: `nos excepcionais, prevalece que **não**, pela exigência de prequestionamento; admitido o recurso, o tribunal julga a causa (art. 1.034), sem dispensar o prequestionamento da matéria de ordem pública (STJ)`. | Destaque do Joaquim: 1ª parte (006, `confere`) mantida; "ao capítulo impugnado" da redação do parecer não entrou, conforme o texto aprovado. Coerente com o cartão "Translativo e prequestionamento" (procesp3.js:43; 033, `não verificável`, intocado) e com a explicação do quiz 2 (036, `confere`, intocada). Citação do art. 1.034 passou a usar `a()`, como no resto da aula. |
| pe-efeitos-014 | procesp3.js:40 (`callout` "Causa madura", 1ª frase) | `Se o processo estiver em condições, o tribunal julga o mérito diretamente ao reformar sentença terminativa, ao anular sentença incongruente, ao suprir omissão ou ao anular por falta de fundamentação.` | `Se o processo estiver em condições de imediato julgamento, o tribunal deve decidir desde logo o mérito ao reformar sentença terminativa, anular sentença incongruente, constatar omissão no exame de um pedido ou anular sentença por falta de fundamentação.` | Sem alteração: [R23] linhas 35–41 e [R8] linha 82 não listam a hipótese da omissão. | Citação "(art. 1.013, §3º, do CPC)" da redação sugerida já está no título do callout. Frases sobre o §4º (015) e a piora (016), `confere`, iguais. Quiz 3 (037) igual. |
| pe-efeitos-028 | procesp3.js:43 (`flips`, cartão "Pedido de efeito suspensivo", 1ª frase) | `` Requisitos: probabilidade de provimento e risco de dano grave (${a(`art. 995, parágrafo único`)}). `` | `` Regra geral: probabilidade de provimento e risco de dano grave, de difícil ou impossível reparação, pela eficácia imediata da decisão (${a(`art. 995, parágrafo único`)}). Na apelação do art. 1.012, §1º, basta demonstrar probabilidade de provimento ou, sendo relevante a fundamentação, risco de dano grave ou de difícil reparação (${a(`§4º`)}). Os embargos de declaração têm regra própria (${a(`art. 1.026, §1º`)}). `` | [R12] linhas 41–46. Antes: `**Fundamentos do pedido ao relator:**` / `**Urgência**;` / `**Risco de dano grave ou de difícil reparação**.` Depois: `**Fundamentos do pedido ao relator (regra geral, art. 995, parágrafo único):**` / `**Probabilidade de provimento**;` / `**Risco de dano grave, de difícil ou impossível reparação**, pela eficácia imediata da decisão.` / `Na apelação do art. 1.012, §1º, a regra é própria (§4º; ver abaixo).` [R12] linhas 62–64. Antes: `**Requisitos:** urgência/risco de dano irreparável **+** probabilidade de provimento (**art. 995, CPC**);`. Depois: três itens com a regra geral (art. 995, parágrafo único), a da apelação (art. 1.012, §4º) e a dos embargos (art. 1.026, §1º). | 2ª frase do cartão (029, `confere`: tribunal antes da distribuição, relator depois, art. 1.012, §3º) igual. |

## Ajuste pedido pelo Reconferente (21/10/2026)

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| pe-efeitos-007 | procesp3.js:43 (`flips`, cartão "Translativo e prequestionamento", b6.items[4][2]) | `` REsp e RE só examinam matéria prequestionada (${a(`Súmulas 282 e 356 do STF`)}; ${a(`211 do STJ`)}). `` | `` REsp e RE só examinam matéria prequestionada (${a(`Súmulas 282 e 356 do STF`)}; ${a(`211 do STJ`)}): a exigência vale para conhecer o recurso. Admitido o REsp ou o RE, o tribunal julga a causa (${a(`art. 1.034`)}); no STJ, conhecer por outro fundamento não dispensa o prequestionamento da matéria de ordem pública. `` | Sem alteração: as notas não têm esse cartão; o callout de [R13] (linhas 35–38) já traz a mesma distinção, corrigida acima. | Frase original (033, `não verificável`) mantida; só foi acrescentada a distinção já aplicada na tabela (linha 38). Importador rodado de novo (só WinError 32 na cópia final); `62-pk-procesp.js` passa em `node --check`. |

## Segundo ajuste pedido pelo Reconferente (21/10/2026)

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| pe-efeitos-007 | procesp3.js:43 (`flips`, cartão "Translativo e prequestionamento", b6.items[4][2]) | `` REsp e RE só examinam matéria prequestionada (${a(`Súmulas 282 e 356 do STF`)}; ${a(`211 do STJ`)}): a exigência vale para conhecer o recurso. Admitido o REsp ou o RE, o tribunal julga a causa (${a(`art. 1.034`)}); no STJ, conhecer por outro fundamento não dispensa o prequestionamento da matéria de ordem pública. `` | `` Para conhecer o REsp e o RE, a matéria precisa estar prequestionada (${a(`Súmulas 282 e 356 do STF`)}; ${a(`211 do STJ`)}). Admitido o recurso, o tribunal julga a causa (${a(`art. 1.034`)}); no STJ, conhecer por outro fundamento não dispensa o prequestionamento da matéria de ordem pública. `` | Sem alteração: as notas não têm esse cartão; [R13] linhas 35–38 já trazem a mesma distinção. | Título do cartão igual. Importador rodado de novo (só WinError 32 na cópia final); `62-pk-procesp.js` passa em `node --check`. |

## Notado de passagem

- [R12] linha 30: "recurso de um favorece aos demais? — art. 116, CPC. Quando têm fundamentos comuns." A aula usa o art. 1.005 (034, `confere`); a nota não está no parecer. Fica para outro lote, se for o caso.
- [R13] linha 51: expansivo subjetivo ligado ao "litisconsórcio unitário"; a aula (034) segue a fórmula do art. 1.005 ("salvo interesses distintos ou opostos"). Não é objeto de veredito `corrigir`.
