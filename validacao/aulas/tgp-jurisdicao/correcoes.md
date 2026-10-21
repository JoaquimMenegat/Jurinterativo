# Correções · tgp-jurisdicao

Data: 21/10/2026 · Data-base: 20/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **3 aplicadas**, todas `corrigir`: 005, 016 e 020.
- **0 bloqueadas.**
- Nenhum `divergente` no parecer.
- Não mexidos:
  - `confere`: 002, 007, 009, 010, 014, 019, 021, 023, 024, 026, 027, 029, 030, 031, 032, 033, 034, 035 e 036.
  - `não verificável`: 004 e 013. Continuam como estão, pela regra geral de 16/10/2026.
  - Conceitos sem veredito: os 12 itens `conceito` da ficha.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/tgp.js`, aula `jurisdicao` (linhas 51 a 79; a contagem de linhas não mudou). As demais aulas do arquivo não foram tocadas.

Notas do Vault (caminho relativo a `Obsidian Vault/Faculdade/3ª Fase/Teoria Geral dos Processos/`):
- **[PIJ]** `2. Aula 27-02/Princípios Inerentes à Jurisdição.md`
- **[JE]** `2. Aula 27-02/Jurisdições em espécie.md`
- **[ACA]** `2. Aula 27-02/Autocomposição, Conciliação e Arbitragem.md`
- **[TGP]** `Teoria geral dos Processos.md` (nota-resumo das aulas)

Nenhuma é `(C)`: o texto corrigido leva a marca *(C, 21/10/2026)*. Não há julgado, súmula ou citação literal nos trechos tocados. As notas não têm diagrama nem fluxograma sobre esses pontos; o quadro de [JE] (linhas 40 a 47) não fala de coisa julgada e não mudou.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| tgp-jurisdicao-005 | tgp.js:59 (`table` "Os princípios inerentes à jurisdição", linha "Investidura", colunas 2 e 3) | `Só exerce jurisdição quem foi regularmente investido no cargo, por concurso de provas e títulos` · Fonte: `CF, art. 37, II e 93, I` | `O exercício da jurisdição pressupõe regular investidura. O ingresso na carreira da magistratura ocorre por concurso de provas e títulos, sem excluir outras formas constitucionais de provimento dos tribunais, como o quinto constitucional` · Fonte: `CF, arts. 93, I, e 94` | [PIJ] linha 7: a frase do concurso pelo art. 37, II, virou `O ingresso na carreira da magistratura ocorre por concurso público de provas e títulos, no cargo inicial de juiz substituto, sem excluir … quinto constitucional (CRFB, arts. 93, I, e 94)` *(C)*. [TGP] linha 55: a linha da investidura recebeu a redação do parecer *(C)*. | A citação foi para a coluna "Fonte", como nas outras linhas da tabela, com link (`a()`). A fonte passou a ser a do parecer (arts. 93, I, e 94). Nenhum teste depende do item. |
| tgp-jurisdicao-016 | tgp.js:65 (`vs` "Voluntária × contenciosa", coluna "Jurisdição contenciosa", 3º item) | `Forma coisa julgada material` | `A decisão de mérito forma coisa julgada material quando não está mais sujeita a recurso (CPC, art. 502)` | [JE] linha 36: acrescentado, depois de "caráter definitivo", `a decisão de mérito forma coisa julgada material quando não está mais sujeita a recurso (CPC, art. 502)` *(C)*. | "Na jurisdição contenciosa" ficou implícito no título da coluna. `CPC, art. 502` com link. |
| tgp-jurisdicao-020 | tgp.js:68 (`chooser` "Quem resolve o conflito?", opção "Autocomposição": subtítulo e texto) | Subtítulo: `As próprias partes, por acordo`. Texto: `Transação, renúncia ou submissão. O Estado deve promovê-la sempre que possível (CPC, art. 3º, §§2º e 3º).` | Subtítulo: `As próprias partes, sem terceiro que decida`. Texto: `O conflito é resolvido pelas próprias partes, por transação, renúncia à pretensão ou reconhecimento da procedência do pedido. O Estado promoverá a solução consensual sempre que possível (CPC, arts. 3º, §2º, e 487, III).` | [ACA] linha 5 e [TGP] linha 69: `…as partes envolvidas chegam a um acordo consensual` → redação do parecer *(C)*. | O subtítulo "por acordo" era o ponto apontado pelo parecer; saiu, e o novo evita repetir o "pela força" da autotutela. Citação com link. Nenhum teste depende do item. |

## Plataforma

- `node --check` em `tgp.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo. As três redações novas estão em `prototipo/src/js/60-pk-tgp.js` (conferido por busca: "quinto constitucional", "não está mais sujeita a recurso", "O Estado promoverá a solução"). No passo final, a cópia do pacote sobre ele mesmo falhou com `WinError 32`, a falha conhecida e inofensiva. `tgp.js` continua com as correções.
- `node --check` em `60-pk-tgp.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto em blocos existentes.

## Marca "Validada em"

Não aplicada. A aula não tem linha "Validada em" no código, e 004 e 013 seguem `não verificável` (mantidos pela regra geral). O Orquestrador decide se a marca entra.

## Notado de passagem

- **tgp.js:57 (004, `não verificável`)**: "Só a decisão judicial pode se tornar imutável pela coisa julgada" convive, na mesma aula (linha 69), com "A sentença arbitral tem os mesmos efeitos da judicial" (027, `confere`). Não alterei.
- **[PIJ] linha 9**: "O juiz só pode atuar … após ser nomeado oficialmente" ficou como estava; não está no parecer.
- **[JE] linhas 45 e 51**: "Não há sentença, apenas procedimento" na jurisdição voluntária contradiz a correção já feita na linha 7 (*C, 12/10/2026*: o juiz decide por sentença, CPC, arts. 723 e 724). Fora deste parecer; não alterei.
- **[TGP] linha 65 (seção "Aula 27/02")**: "não existe sentença, mas sim, somente um procedimento" (mesmo problema). Não alterei.
