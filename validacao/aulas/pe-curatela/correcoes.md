# Correções · pe-curatela

Data: 21/10/2026 · Data-base: 20/10/2026.
Entradas: `parecer.md`, `ficha.md` e `aula.md`. Não há `decisoes.md`.

## Resumo

- **10 aplicadas**, todas `corrigir`: 001, 006, 011, 012, 019, 021, 022, 023, 026 e 027. As duas de gravidade alta são 012 e 019.
- **0 bloqueadas.**
- Não mexidos:
  - 16 `confere`.
  - 2 `não verificável` sem decisão: 005 (CC, arts. 1.728 a 1.766) e 013 (exemplos de guarda). Continuam como estão (regra geral de 16/10/2026).
  - 3 conceitos sem veredito: 003, 007 e 017.
- Nenhum item `divergente` nem citação doutrinária.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/procesp2.js`, aula `curatela` (linhas 47 a 54). Mudaram as linhas 48 (`intro`), 50 (`vs` Tutela × curatela), 51 (`vs` Guarda × tutela), 52 (`steps` Interdição) e 53 (`flips` Regras finais). O número de linhas não mudou. A aula `alvara`, no mesmo arquivo, não foi tocada.

Plataforma: `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais` rodou; só a cópia final de `src` deu WinError 32 (inofensivo). O pacote gerado `prototipo/src/js/62-pk-procesp.js` traz as novas redações e passa em `node --check`; `procesp2.js` também passa.

Marca "Validada em": a aula não tem essa marca no material (nenhuma aula de `src/conteudo/*.js` tem). Não criei.

Nota do Vault (caminho relativo a `Obsidian Vault/Faculdade/6ª Fase/2. Procedimentos Especiais/Procedimentos Especiais/0. Material do Professor/`):
- **[N17]** `(C) 17. Tutela e Curatela — Conceitos e Distinções.md`. É `(C)`; como nos lotes anteriores, corrigi o texto diretamente, sem a marca *(C, data)*. Não há diagramas nem fluxogramas; os quadros com as mesmas afirmações (linhas 42, 108, 109 e 128) foram corrigidos. A frase-síntese do slide (linha 113, citação literal) ficou intacta; não contraria as correções.
- Buscas em toda a pasta `2. Procedimentos Especiais` por "família natural", "doença mental", "interditando", "equipe multidisciplinar", "escusa" e blocos `mermaid`: nenhuma outra ocorrência. O rito da interdição (019, 021 a 023) e os prazos de compromisso e escusa (026, 027) não aparecem em nota do Vault.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| pe-curatela-001 | procesp2.js:48 (`intro`) | `Dois institutos para suprir capacidade: um pela idade, outro pela falta de discernimento. Processualmente, são jurisdição voluntária.` | `A tutela protege menores nas hipóteses legais; a curatela atende às situações previstas no art. 1.767 do CC. Seus procedimentos integram a jurisdição voluntária no CPC, Capítulo XV, Seções IX e X.` | [N17] linha 49 (callout "Chave de memorização"). Antes: `**Tutela → idade.** **Curatela → discernimento.**`. Depois: `**Tutela → idade.** **Curatela → hipóteses do art. 1.767 do CC.**` | Intro sem `a()`, como as demais intros do pacote. |
| pe-curatela-006 | procesp2.js:50 (`vs`, Curatela, item 1) | `Pressuposto: impossibilidade de exprimir a vontade, total ou parcial` | `` Sujeitam-se à curatela quem, por causa transitória ou permanente, não puder exprimir sua vontade, os ébrios habituais, os viciados em tóxico e os pródigos (${a(`CC, art. 1.767`)}) `` | [N17] linha 38: `a **curatela** se relaciona com situações de **deficiência total ou parcial**` → `a **curatela** atende às situações do **art. 1.767 do CC**: quem, por causa transitória ou permanente, **não puder exprimir sua vontade**, os **ébrios habituais**, os **viciados em tóxico** e os **pródigos**`. Quadro, linha 42: `**Deficiência total ou parcial**` → `**Hipóteses do art. 1.767 do CC**: impossibilidade de exprimir a vontade (causa transitória ou permanente), ébrios habituais, viciados em tóxico e pródigos`. Resumo, linha 128: `**Deficiência total ou parcial**` → `**Hipóteses do art. 1.767 do CC** (impossibilidade de exprimir a vontade, ébrios habituais, viciados em tóxico, pródigos)`. | Itens 2 a 4 da Curatela (007, 008, 009) iguais. |
| pe-curatela-011 | procesp2.js:51 (`vs`, Guarda, item 2) | `Só o exercício é limitado e transferido ao guardião` | `` Atribui assistência material, moral e educacional e permite ao guardião opor-se inclusive aos pais; a representação para atos determinados pode ser deferida (${a(`ECA, art. 33`)}) `` | [N17] linha 95: retirado `apesar de haver **limitação do exercício** deste poder familiar, por ter sido **transferido ao guardião**`; entrou `O guardião presta **assistência material, moral e educacional** e pode **opor-se a terceiros, inclusive aos pais**; a **representação para atos determinados** pode ser deferida (ECA, art. 33).` Quadro, linha 108: `**Limitação do exercício** (transferido ao guardião)` → `Guardião presta **assistência material, moral e educacional** e pode opor-se inclusive aos pais; representação para atos determinados pode ser deferida (ECA, art. 33)`. | Sujeito "A guarda" implícito no título da coluna. Explicação do quiz 1 ("Só o exercício é limitado.") mantida: 030 é `confere`, e o parecer diz que ela não afirma a transferência geral. |
| pe-curatela-012 | procesp2.js:51 (`vs`, Guarda, item 3) | `Família natural` | `` Também é forma de colocação em família substituta, assim como a tutela e a adoção (${a(`ECA, art. 28`)}) `` | [N17] linha 95: retirado `(família natural)`; acrescentado `A guarda também é forma de colocação em **família substituta**, assim como a tutela e a adoção (ECA, art. 28).` Quadro, linha 109: `**Família natural** \| **Família substituta**` → `Também forma de colocação em **família substituta** (ECA, art. 28) \| **Família substituta** (ECA, art. 28)`. | Tutela, item 3, "Família substituta" (016, `confere`) mantido. Exemplos da guarda (013, `não verificável`) mantidos. |
| pe-curatela-019 | procesp2.js:52 (`steps`, "Quem pede", texto) | `... ou o MP (este só em doença mental grave ou falta dos demais).` | `... ou o MP (este só em caso de doença mental grave, se os legitimados dos incisos I a III do art. 747 não existirem ou não agirem, ou se forem incapazes os dos incisos I e II).` | Sem alteração: nenhuma nota trata da legitimidade do MP. | Lista dos demais legitimados (018, `confere`) e citação `arts. 747 e 748` mantidas. O "E" cumulativo fica na estrutura: doença mental grave + uma das situações. |
| pe-curatela-021 | procesp2.js:52 (`steps`, "Impugnação") | Texto: `15 dias após a entrevista.` Citação: `art. 752` | Texto: `O interditando pode impugnar em 15 dias úteis contados da entrevista, excluído o dia em que ela ocorrer.` Citação: `arts. 752, 219 e 224` | Sem alteração: nenhuma nota trata do rito da interdição. | Citação do passo ajustada aos artigos da redação sugerida. |
| pe-curatela-022 | procesp2.js:52 (`steps`, "Perícia", texto) | `Por equipe multidisciplinar.` | `Avalia a capacidade do interditando e pode ser realizada por equipe multidisciplinar.` | Sem alteração (idem). | "A perícia" implícito no título do passo. Citação `art. 753` mantida. |
| pe-curatela-023 | procesp2.js:52 (`steps`, "Sentença", texto) | `Fixa os limites da curatela conforme o estado do interditando; é registrada e publicada.` | `Fixa os limites da curatela segundo o estado e o desenvolvimento mental, considerando características pessoais, potencialidades, habilidades, vontades e preferências; é registrada e publicada.` | Sem alteração (idem). | "É registrada e publicada" (024, `confere`) mantido. Citação `art. 755` mantida. |
| pe-curatela-026 | procesp2.js:53 (`flips`, "Compromisso") | `` Tutor ou curador presta compromisso em 5 dias (${a(`art. 759`)}). `` | `` Tutor ou curador será intimado a prestar compromisso em 5 dias úteis, contados da nomeação legal ou da intimação do despacho que mandar cumprir o testamento ou instrumento público (${a(`arts. 759 e 219`)}). `` | Sem alteração: nenhuma nota trata do prazo do compromisso. | — |
| pe-curatela-027 | procesp2.js:53 (`flips`, "Escusa") | `` Em 5 dias (${a(`art. 760`)}). `` | `` Tutor ou curador apresenta escusa em 5 dias úteis: antes da aceitação, da intimação para prestar compromisso; após entrar em exercício, do motivo superveniente. Sem pedido tempestivo, renuncia ao direito de alegá-la (${a(`arts. 760 e 219`)}). `` | Sem alteração: nenhuma nota trata da escusa. | Cartões "Responsabilidade" (028) e "Apelação" (029), ambos `confere`, iguais. |

## Notado de passagem

- [N17] linhas 17 e 123 situam os procedimentos só nos "arts. 759 a 763, CPC", enquanto o parecer (001) cita o CPC, Capítulo XV, Seções IX e X, e a aula trata a interdição nos arts. 747 a 758. Vale conferir se a nota deve mencionar também a Seção IX. Não está no parecer; não mexi.
