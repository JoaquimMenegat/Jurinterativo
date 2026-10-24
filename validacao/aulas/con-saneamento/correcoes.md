# Correções · con-saneamento

Data: 24/10/2026 · Data-base: 23/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **5 aplicadas**, todas `corrigir`: 013, 016, 017 (gravidade alta), 020 e 023.
- **0 bloqueadas.**
- Nenhum `divergente` nem `citação doutrinária` no parecer.
- Não mexidos:
  - `não verificável`: 008 (Súmula 7 do STJ, no `vs`). Continua como está, pela regra geral de 16/10/2026; o parecer o lista em "Para o Joaquim decidir", e não há `decisoes.md`.
  - `confere`: os 17 itens, inclusive os três gabaritos. Conceitos sem veredito: 001, 007 e 009.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/conhecimento2.js`, aula `saneamento` (linhas 27 a 43; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas. `engine.js` não foi tocado.

Notas do Vault (pasta `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento/5. Aula 16.09/`). Nenhuma é `(C)`: o texto corrigido entrou em linhas novas, abaixo do trecho de origem, com a marca *(C, 24/10/2026)*. Os números de linha são os de depois da inserção.

| Sigla | Nota |
|---|---|
| [SAN] | `3. Saneamento processual.md` |
| [REL] | `3.1 Relatório sobre saneamento.md` |

A transcrição da Súmula 7 em [SAN] (linha 89 depois da inserção) é do item 008, `não verificável`; ficou intacta. As notas não têm diagrama, fluxograma ou quadro; a lista de efeitos de [REL] (linhas 92 a 96) é o único "quadro" sobre os itens e recebeu a linha *(C)*. Busquei na pasta da matéria por "preclus", "perito", "10 testemunhas", "prova impossível", "hipossufic" e "verossim": não há outro trecho de origem dos itens 020 e 023.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-saneamento-013 | conhecimento2.js:37 (`flips` "Depois da decisão", cartão "Testemunhas", verso) | `Rol em até 15 dias; no máximo 10, sendo 3 por fato (§§4º e 6º).` | `Determinada a prova testemunhal, o juiz fixa prazo comum de até 15 dias úteis para o rol. No saneamento em cooperação, as partes levam o rol à audiência (§§4º e 5º). No máximo 10, sendo 3 por fato (§6º).` | [SAN] nova linha 42, abaixo da linha 41 ("As partes podem indicar até 10 testemunhas, sendo 3 para cada fato"): redação do parecer *(C)*. | O link `a()` "§§4º e 6º" virou dois: "§§4º e 5º" (rol) e "§6º" (limites). A parte "no máximo 10, sendo 3 por fato" (014 e 015, `confere`) foi mantida. Teste 2 ("3", `confere`) não tocado. |
| con-saneamento-016 | conhecimento2.js:37 (mesmo `flips`, cartão "Perícia", verso) | `O juiz nomeia o perito e, se possível, fixa calendário (§8º).` | `O juiz nomeia perito especializado e fixa de imediato o prazo para entrega do laudo; se possível, estabelece também calendário para a perícia (§8º e art. 465).` | [SAN] nova linha 44, abaixo da linha 43 ("Em caso de prova pericial, o juiz na decisão saneadora definirá quem será o perito..."): redação do parecer *(C)*. | Novo link `a()` "art. 465". Citação "(§8º ...)" no padrão dos outros cartões do bloco, que tratam do art. 357. |
| con-saneamento-017 | conhecimento2.js:37 (mesmo `flips`, cartão "Efeitos", verso) | `Abre a instrução, estabiliza a demanda e torna preclusas as questões resolvidas.` | `Organiza a instrução e marca o limite para alterar pedido e causa de pedir nas condições do art. 329. A decisão se estabiliza após o prazo de ajustes (§1º). Questões cuja decisão não comporte agravo podem ser impugnadas na apelação ou nas contrarrazões, sem preclusão (art. 1.009, §1º).` | [REL] nova linha 98, abaixo do item "3. Preclusão sobre Questões Prévias" (linha 96) da lista de efeitos: redação do parecer *(C)*, com "agravo de instrumento", como no art. 1.009, § 1º. O texto antigo da lista ficou. | Gravidade alta. Novos links `a()`: "art. 329", "§1º" e "art. 1.009, §1º". O cartão "Ajustes" (010, `confere`) já dizia o mesmo sobre a estabilização; não mexi. |
| con-saneamento-020 | conhecimento2.js:40 (`chooser` "Ônus da prova", opção "Distribuição dinâmica") | `Não pode gerar prova impossível (§2º).` | `A redistribuição não pode tornar impossível ou excessivamente difícil à parte cumprir o encargo probatório (§2º).` | Sem trecho de origem no Vault. | "§2º" passou a link `a()`, como o "§1º" da mesma frase. As frases de 019 e 021 (`confere`) não foram tocadas. |
| con-saneamento-023 | conhecimento2.js:42 (mesmo `chooser`, opção "Consumidor") | `Quando verossímil a alegação ou hipossuficiente o consumidor (CDC, art. 6º, VIII).` | `No processo civil, o juiz pode inverter o ônus da prova em favor do consumidor quando reconhecer verossimilhança da alegação ou hipossuficiência, segundo as regras ordinárias de experiência (CDC, art. 6º, VIII).` | Sem trecho de origem no Vault. | Rótulo e subtítulo da opção ("Consumidor", "Inversão do CDC") mantidos. |

## Plataforma

- `node --check` em `conhecimento2.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/61-pk-conhecimento.js` (conferida por busca de trechos de 017, 020 e 023). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `61-pk-conhecimento.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código (mesmo critério das aulas anteriores do arquivo). O item 008 continua `não verificável`.

## Notado de passagem

- **[SAN] linha 8**: "Não cabe recurso", na lista sobre a decisão de saneamento, sem ressalva do agravo de instrumento nas hipóteses do art. 1.015 (ex.: inciso XI, redistribuição do ônus da prova). Não é trecho de item do parecer; não alterei.
- **[REL] linha 76**: diz que, estabilizada a decisão, o recurso imediato fica limitado às hipóteses do art. 1.015, sem mencionar o art. 1.009, § 1º. A linha *(C)* 98 cobre o ponto; o texto antigo ficou.
