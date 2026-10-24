# Correções · con-reconvencao

Data: 23/10/2026 · Data-base: 22/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **4 aplicadas**, todas `corrigir`: 007, 010, 011 e 012.
- **0 bloqueadas.**
- Nenhum `divergente` nem `citação doutrinária` no parecer.
- Não mexidos:
  - `não verificável`: 013 ("A reconvenção tem valor da causa e custas próprios", no callout). Continua como está, pela regra geral de 16/10/2026; o parecer o lista em "Para o Joaquim decidir", e não há `decisoes.md`.
  - `confere`: os 8 itens, inclusive os dois gabaritos. Conceitos sem veredito: 2.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/conhecimento.js`, aula `reconvencao` (linhas 137 a 150; o `aula.md` indica a linha 135, e a diferença de 2 vem das linhas acrescentadas aos SVGs de con-rito e con-pedido nesta rodada). A contagem de linhas da aula não mudou. As outras aulas do arquivo não foram tocadas. `engine.js` não foi tocado.

Nota do Vault: `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento/4. Aula 09.09/Reconvenção.md` ([REC]). Não é `(C)`. **Nenhuma alteração foi necessária** nela:

- a linha 7 trata só da desistência da ação principal, sem a "extinção" genérica corrigida em 007;
- a linha 21 já traz as duas exigências do art. 343, § 5º (reconvenção contra o autor, como substituto, e afirmação de direito contra o substituído);
- a nota não trata de possessórias, ações dúplices nem Juizados (busca por "contraposto", "dúplice", "9.099" e "juizado" na pasta da matéria). A tag `tema/reconvencao-e-natureza-duplice` liga a nota a duas notas `(C)` de Procedimentos Especiais, que são origem de outra aula e não foram tocadas.

A nota não tem diagrama, fluxograma ou quadro.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-reconvencao-007 | conhecimento.js:148 (`flips` "As regras do art. 343", cartão "Autonomia", verso) | `A desistência ou extinção da ação principal não impede a reconvenção (§2º).` | `A desistência da ação principal ou sua extinção sem exame do mérito não impede o prosseguimento do processo quanto à reconvenção (§2º).` | Sem alteração ([REC] linha 7 trata só da desistência, de acordo com o § 2º). | Teste 1 ("O autor desistiu da ação. A reconvenção: prossegue") trata da desistência e continua certo; não mexi. A citação "(art. 343, § 2º)" ficou "(§2º)", como nos outros cartões do bloco, cujo título já é "As regras do art. 343". |
| con-reconvencao-010 | conhecimento.js:148 (mesmo `flips`, cartão "Substituto processual", verso) | `Se o autor age como substituto, o reconvinte deve afirmar direito contra o substituído (§5º).` | `Se o autor atua como substituto processual, o reconvinte deve afirmar direito contra o substituído e propor a reconvenção contra o autor, também na qualidade de substituto processual (§5º).` | Sem alteração ([REC] linha 21 já traz as duas exigências). | Mesmo critério de citação de 007. |
| con-reconvencao-011 | conhecimento.js:149 (`callout` "Quando não cabe", 1ª frase) | `Nas ações dúplices, como as possessórias (art. 556), o réu já pode pedir na contestação;` | `Nas possessórias, o réu que alega ter sido ofendido em sua posse pode pedir, na contestação, proteção possessória e indenização pelos prejuízos da turbação ou do esbulho cometido pelo autor, sem precisar de reconvenção para esses pedidos (art. 556).` | Sem trecho de origem no Vault. | A frase única de 011 e 012, ligada por "; e", virou frases separadas, como na redação sugerida. Título do callout mantido; ver "Notado de passagem". |
| con-reconvencao-012 | conhecimento.js:149 (mesmo `callout`, 2ª parte) | `e nos Juizados, a reconvenção é vedada, admitindo-se só o pedido contraposto (Lei 9.099/95, art. 31).` | `Nos Juizados Especiais Cíveis regidos pela Lei 9.099/1995, não cabe reconvenção. O réu pode formular pedido contraposto na contestação, nos limites do art. 3º e fundado nos mesmos fatos da controvérsia (Lei 9.099/95, art. 31).` | Sem trecho de origem no Vault. | Link `a()` mantido com o texto antigo "Lei 9.099/95, art. 31". A última frase do callout (013, `não verificável`) não foi tocada. |

## Plataforma

- `node --check` em `conhecimento.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/61-pk-conhecimento.js` (conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `61-pk-conhecimento.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código, e 013 segue `não verificável` à espera do Joaquim.

## Notado de passagem

- **Título do callout "Quando não cabe" (conhecimento.js:149)**: resolvido no ajuste de 24/10/2026 (seção abaixo), a pedido do Reconferente.
- **SVG "Os papéis se cruzam" (conhecimento.js:147)**: a legenda "reconvenção, na própria contestação" não menciona a reconvenção sem contestação (§ 6º), que o cartão "Onde" já traz. Fora do parecer; não alterei.
- **[REC] linhas 11 a 16**: a lista de requisitos traz "Conexão com os fundamentos da parte autora"; o art. 343, caput, fala em conexão com a ação principal ou com o fundamento da defesa. Fora do parecer; não alterei.

## Ajuste pedido na reconferência (24/10/2026)

Entrada: `reconferencia.md` (resultado "refazer — con-reconvencao-011"). Só este item foi tocado.

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-reconvencao-011 | conhecimento.js:149 (`callout`, título `b3.title`) | `Quando não cabe` | `Reconvenção e pedido na contestação` | Sem trecho de origem no Vault (já registrado acima; a nota [REC] não trata de possessórias nem de Juizados). | O texto do callout (011, 012 e 013) não foi tocado. O título novo, sugerido pelo Reconferente, comporta a dispensa de reconvenção nas possessórias e a vedação nos Juizados, sem sugerir vedação geral. |

Plataforma: `node --check` em `conhecimento.js` e em `61-pk-conhecimento.js` sem erro; `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais` gerou o conteúdo com o título novo (conferido por busca), com a falha conhecida e inofensiva `WinError 32` na cópia final.
