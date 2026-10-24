# Correções · con-tutelas

Data: 24/10/2026 · Data-base: 23/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`. Orientação do Orquestrador para os `divergente` (abaixo).

## Resumo

- **14 aplicadas**: 10 `corrigir` (009, 017, 018, 025, 035, 036, 038, 039, 040 e 044) e 4 `divergente` (019, 028, 046 e 051).
- **0 bloqueadas.**
- Não mexidos:
  - `não verificável`: 012 (relativização da irreversibilidade, cartão "Irreversibilidade") e 049 ("Não há posição da Corte Especial", bloco `juris`). Continuam como estão, pela regra geral de 16/10/2026.
  - `confere`: os 33 itens. Conceitos sem veredito: 001, 006, 023 e 043.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/conhecimento2.js`, aula `tutelas` (linhas 60 a 92; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas, salvo `saneamento` e `aij`, corrigidas antes nesta rodada. `engine.js` não foi tocado. O SVG "O mapa das tutelas" não trata de nenhum item corrigido.

## Decisão sobre os `divergente` (019, 028, 046 e 051)

O parecer sugeria apresentar as duas posições como equivalentes. A divergência é **interna ao STJ** (3ª e 4ª Turmas: a contestação impede a estabilização, REsp 1.760.966/SP e REsp 1.938.645/CE; 1ª Turma: exige agravo de instrumento, REsp 1.797.365/RS). Pela regra do Joaquim, transmitida pelo Orquestrador nesta rodada, divergência que obriga a mostrar duas visões é só a que há **entre o STF e o STJ**; dentro do STJ, vale o entendimento majoritário. Por isso:

- a posição da 3ª e da 4ª Turmas foi escrita como a regra;
- uma frase curta registra que a 1ª Turma exige agravo, sem tratá-las como visões equivalentes;
- precedentes, números e anos são os do parecer.

Observação para o Orquestrador: esta regra difere do texto de `00-regras-comuns.md` (regra 5, "ou dentro de cada um") e da linha de `decisoes-gerais.md` sobre divergência "entre STF e STJ (ou dentro deles)". Apliquei a orientação desta rodada; convém registrá-la em `decisoes-gerais.md`.

## Notas do Vault

Pasta `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento/7. Aula 21.10/`. Nenhuma é `(C)`: o texto corrigido entrou em linhas novas, abaixo do trecho de origem, com a marca *(C, 24/10/2026)*. Os números de linha são os de depois da inserção.

| Sigla | Nota |
|---|---|
| [URG] | `Tutela de urgência.md` |
| [EVI] | `Tutela da evidência.md` |

- Quadro "Emenda × Aditamento" de [URG] (linhas 53 a 61): recebeu uma linha *(C)* dentro da tabela, logo abaixo de "Quem solicita | Juiz" (044).
- Fluxo da estabilização em [URG] (linhas 78 a 82): recebeu a linha *(C)* 82 (028 e 019).
- Fluxo da cautelar em [URG] (linhas 121 a 127): recebeu as linhas *(C)* 124 e 127 (035 e 036).
- Listas de liminar de [EVI] (linhas 66 a 78): receberam as linhas *(C)* 70 e 74 (039 e 040).
- A transcrição do art. 304 (linhas 83 a 86) e do art. 305, parágrafo único, ficou intacta, sem ⚖️ novo. O aviso ⚖️ de 12/10/2026 (linha 88) ficou como estava; as linhas *(C)* 82 e 97 o completam com a 3ª Turma e a 1ª Turma.
- 009 (caução): sem trecho de origem no Vault (busca por "cauç" e "fidejuss").

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-tutelas-009 | conhecimento2.js:74 (`flips` "Regras gerais", cartão "Caução", verso) | `O juiz pode exigir caução real ou fidejussória, dispensada para quem não pode oferecê-la (art. 300, §1º).` | `O juiz pode exigir caução real ou fidejussória idônea. Pode dispensá-la se a parte economicamente hipossuficiente não puder oferecê-la (art. 300, §1º).` | Sem trecho de origem no Vault. | — |
| con-tutelas-017 | conhecimento2.js:75 (`wizard` "Que tutela pedir?": pergunta inicial e pergunta do ramo "Sim") | `Há perigo de dano ou risco ao resultado útil do processo?` / `Você quer assegurar o direito ou já satisfazê-lo?` | `Há probabilidade do direito e perigo de dano ou risco ao resultado útil do processo?` / `A cautelar busca assegurar o direito; a antecipada busca satisfazê-lo (arts. 300, 301, 303 e 305). Você quer assegurar ou já satisfazer?` | [URG] nova linha 17, abaixo da linha 16 ("Aqui não se trata de uma probabilidade de direito, uma vez que a tutela cautelar possui caráter protelatório"): redação do parecer *(C)*, com a frase de que a cautelar também exige probabilidade. | Botões "Assegurar" e "Satisfazer" mantidos. Citação em texto simples na pergunta, sem link `a()`, porque as perguntas do assistente não têm link em nenhuma aula. O ramo "Não" (evidência) não foi tocado. |
| con-tutelas-018 | conhecimento2.js:75 (mesmo `wizard`, resultado "Antecipada antecedente", 1ª frase do texto) | `A inicial pode se limitar ao pedido de tutela (art. 303).` | `Na urgência contemporânea à propositura, admite-se inicial simplificada, com pedido antecipado, indicação do pedido final e exposição da lide, do direito e do perigo ou risco, observados os §§ 4º e 5º do art. 303.` | [URG] nova linha 36, abaixo da linha 34 ("ela poderá limitar a sua petição inicial no que tange somente ao pedido da própria tutela"): redação do parecer *(C)*. | A pergunta que leva a esse resultado ("A urgência é contemporânea à propositura, sem tempo para a inicial completa?") ficou; é compatível com a redação nova. Link `a()` "art. 303" mantido. |
| con-tutelas-019 | conhecimento2.js:75 (mesmo resultado, 2ª frase do texto) | `Pode estabilizar se o réu não recorrer (art. 304).` | `Pode estabilizar se o réu não impugnar a decisão (art. 304): para a 3ª e a 4ª Turmas do STJ, a contestação basta para impedir a estabilização (REsp 1.760.966/SP e REsp 1.938.645/CE). A 1ª Turma exige agravo de instrumento (REsp 1.797.365/RS).` | Coberta pela linha *(C)* 97 de [URG] (ver 028). | `divergente`: aplicado pela orientação acima (majoritária como regra, 1ª Turma em uma frase). Ordinais "3ª", "4ª", "1ª", como no bloco `juris` da aula. |
| con-tutelas-025 | conhecimento2.js:78 (`steps` "Antecipada antecedente", etapa "Se concedida": texto e referência) | `O autor adita a inicial em 15 dias (ou mais, se o juiz fixar), nos mesmos autos e sem novas custas. Sem aditamento, extinção sem mérito.` · ref. `art. 303, §§1º a 3º` | `O autor deve aditar a inicial em 15 dias úteis ou prazo maior fixado pelo juiz, nos mesmos autos e sem novas custas. O STJ exige intimação específica para aditar (REsp 1.938.645/CE). Sem aditamento, extinção sem mérito.` · ref. `arts. 219 e 303, §§1º a 3º` | [URG] nova linha 40, abaixo da linha 38 ("no prazo de 15 dias ou no prazo em que o juiz fixar"), e nova linha 75, abaixo da linha 74 ("Prazo de 15 dias para o rito comum"): redação do parecer *(C)*. | "Sem aditamento, extinção sem mérito." mantida. Referência ganhou o art. 219, fonte dos dias úteis no parecer. |
| con-tutelas-028 | conhecimento2.js:80 (mesmo `steps`, etapa "Estabilização") | `Se o réu não recorrer da decisão concessiva, o processo é extinto e a tutela continua produzindo efeitos.` | `Se o réu não impugnar a decisão concessiva, por recurso, contestação ou outra impugnação, o processo é extinto e a tutela continua produzindo efeitos. É o entendimento da 3ª e da 4ª Turmas do STJ (REsp 1.760.966/SP e REsp 1.938.645/CE); a 1ª Turma exige agravo de instrumento para impedir a estabilização (REsp 1.797.365/RS).` | [URG] nova linha 82, no fluxo "Pode haver um recurso / Ou pode não haver nada: estabilização" (linha 81), e nova linha 97, abaixo da linha 95 ("A tutela antecipada se torna estável se não for interposto recurso pelo réu"): regra majoritária e frase da 1ª Turma *(C)*. | `divergente`: aplicado pela orientação acima. Referência `art. 304` mantida. A etapa "Revisão" não foi tocada. |
| con-tutelas-035 | conhecimento2.js:85 (`steps` "Cautelar antecedente", etapa "Efetivação e pedido principal") | `Efetivada a medida, o pedido principal deve ser apresentado em 30 dias, nos mesmos autos, sem novas custas.` | `Efetivada a cautelar, o autor deve formular o pedido principal em 30 dias úteis, nos mesmos autos, sem adiantamento de novas custas processuais.` | [URG] nova linha 124, abaixo da linha 123 ("Se efetivada: inicia-se o prazo de 30 dias para o ajuizamento do pedido principal"): redação do parecer *(C)*. | Teste 3 ("30 dias", `confere`) não tocado; ver "Notado de passagem". |
| con-tutelas-036 | conhecimento2.js:86 (mesmo `steps`, etapa "Cessa a eficácia": texto e referência) | `Se o pedido principal não vier em 30 dias, se a medida não for efetivada em 30 dias ou se o pedido principal for improcedente ou extinto.` · ref. `art. 309` | `Se o autor não formular o pedido principal no prazo legal de 30 dias úteis, se a cautelar não for efetivada em 30 dias ou se o juiz julgar improcedente o pedido principal ou extinguir o processo sem resolução do mérito.` · ref. `arts. 308 e 309` | [URG] nova linha 127, abaixo da linha 126 ("Se não feito o pedido principal: cessa-se a eficácia"): redação do parecer *(C)*. | O "Cessa a eficácia" do rótulo foi mantido e retirado do início da frase. O marco do prazo de efetivação não foi acrescentado, como diz o parecer. |
| con-tutelas-038 | conhecimento2.js:88 (`table` "Evidência", linha I) | `Abuso do direito de defesa ou propósito protelatório do réu` | `Abuso do direito de defesa ou manifesto propósito protelatório da parte` | [EVI] nova linha 32, abaixo da linha 30 ("a conduta processual do réu pode, por si só..."): redação do parecer *(C)*. | Coluna "Liminar?" mantida. O callout "Por que só II e III admitem liminar" não foi tocado. |
| con-tutelas-039 | conhecimento2.js:88 (mesma `table`, linha II) | `Fatos provados por documento e tese em repetitivo ou súmula vinculante` | `Alegações de fato comprováveis apenas documentalmente e tese firmada em julgamento de casos repetitivos ou em súmula vinculante` | [EVI] nova linha 38, abaixo da linha 36 ("O fato é comprovado por meio de prova documental..."), e nova linha 70, na lista de liminar, abaixo da linha 68 ("Fato comprovado por documento com tese firmada em precedente obrigatório"): redação do parecer *(C)*. | — |
| con-tutelas-040 | conhecimento2.js:88 (mesma `table`, linha III) | `Pedido de devolução fundado em prova documental de contrato de depósito` | `Pedido de entrega do objeto custodiado, fundado em prova documental adequada do contrato de depósito, com ordem de entrega sob multa` | [EVI] nova linha 52, abaixo da linha 50 ("Diante de um contrato formalizado, a recusa em devolver o bem..."), e nova linha 74, na lista de liminar, abaixo da linha 72: redação do parecer *(C)*. | — |
| con-tutelas-044 | conhecimento2.js:90 (`vs` "Emenda × aditamento", coluna Emenda, 1º e 2º itens) | `Quem pede: o juiz` / `Para corrigir vício da inicial` | `Quem determina: o juiz, indicando precisamente o que ajustar` / `O autor corrige ou completa a inicial` | [URG] nova linha 57, dentro do quadro "Emenda × Aditamento", abaixo da linha "Quem solicita": redação do parecer *(C)*. | A redação do parecer (uma frase) foi distribuída pelos dois itens da coluna; o 3º item (`art. 321`) ficou. A coluna Aditamento não foi tocada. |
| con-tutelas-046 | conhecimento2.js:91 (`juris` "Estabilização na jurisprudência": tese e texto) | Tese `Não só o recurso evita a estabilização: a contestação ou outra impugnação do réu também pode afastá-la.`; texto `A 3ª e a 4ª Turmas (REsp 1.938.645/CE, 2024) entendem que a contestação impede a estabilização; a 1ª Turma (REsp 1.797.365/RS) exige o recurso. Não há posição da Corte Especial.` | Tese `Para a 3ª Turma, não só o recurso evita a estabilização: a contestação ou outra impugnação do réu também a afasta.`; texto `É o entendimento majoritário: a 4ª Turma o segue (REsp 1.938.645/CE, 2024). A 1ª Turma exige agravo de instrumento (REsp 1.797.365/RS, 2019). Não há posição da Corte Especial.` | Coberta pela linha *(C)* 97 de [URG]. | `divergente`: aplicado pela orientação acima. Tribunal, ano (2018) e número do cartão mantidos. 047 e 048 (`confere`) ficaram com o mesmo conteúdo, reescrito para a forma majoritária; 049 (`não verificável`) ficou com a mesma frase. |
| con-tutelas-051 | conhecimento2.js:92 (teste, questão 2: enunciado e explicação) | Enunciado `Tutela antecipada antecedente concedida, réu não recorreu. Efeito?`; explicação `art. 304.` | Enunciado `Tutela antecipada antecedente concedida, sem recurso nem qualquer outra impugnação do réu. Efeito?`; explicação `art. 304. Estabilização, sem coisa julgada. Para a 3ª e a 4ª Turmas do STJ, a contestação também impede a estabilização (REsp 1.760.966/SP e REsp 1.938.645/CE); a 1ª Turma exige agravo (REsp 1.797.365/RS).` | Sem trecho de origem no Vault. | `divergente`: enunciado do parecer, que tira a ambiguidade; explicação pela orientação acima. Alternativas (`Coisa julgada`, `Estabilização`) e gabarito (índice 1) mantidos. |

## Plataforma

- `node --check` em `conhecimento2.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/61-pk-conhecimento.js` (conferida por busca de trecho de 040). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `61-pk-conhecimento.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código (mesmo critério das aulas anteriores do arquivo). 012 e 049 continuam `não verificável`.

## Notado de passagem

- **Teste 3** (`Prazo para o pedido principal após efetivar a cautelar:` `15 dias` / `30 dias`): sem "úteis", agora diferente da etapa corrigida em 035. O item é `confere`; não mexi.
- **Etapa "Se negada"** (`Emenda em até 5 dias, sob pena de extinção.`) e **etapa "Defesa"** da cautelar (`5 dias`): sem "úteis". Não estão no parecer como `corrigir`.
- **[URG] linhas 13 e 16**: chamam a cautelar de "protelatória". Fora dos itens do parecer; a linha *(C)* 17 trata só da probabilidade.
- **[URG] linha 88** (aviso ⚖️ de 12/10/2026) fala em "divergência com a Primeira Turma" sem dizer qual posição prevalece; as linhas *(C)* 82 e 97 completam.
