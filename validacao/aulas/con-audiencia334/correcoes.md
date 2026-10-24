# Correções · con-audiencia334

Data: 24/10/2026 · Data-base: 23/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **9 aplicadas**, todas `corrigir`: 002, 003, 004, 006, 007, 010, 013, 015 e 019.
- **0 bloqueadas.**
- Nenhum `divergente` nem `citação doutrinária` no parecer.
- Não mexidos:
  - `não verificável`: 001 (marco "Desde 2015" na introdução). Continua como está, pela regra geral de 16/10/2026; o parecer o lista em "Para o Joaquim decidir", e não há `decisoes.md`.
  - `confere`: os 11 itens.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/conhecimento.js`, aula `audiencia334` (linhas 101 a 107). Nenhuma linha nova. As outras aulas do arquivo não foram tocadas. `engine.js` não foi tocado (conferido que o bloco `keys` aceita texto com parênteses na legenda).

Nota do Vault: `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento/2. Aula 19.08/4. Audiência de conciliação e mediação.md` ([AUD]). Não é `(C)`: o texto corrigido entrou em linhas novas, abaixo do trecho de origem, com a marca *(C, 24/10/2026)*. Os números de linha abaixo são os de depois da inserção. As transcrições literais do art. 334, caput (linha 10), do art. 319, VII (linhas 33 e 34), do art. 77, IV, e do art. 487, III (linhas 46 e 47, e 54 a 58), estão corretas e ficaram intactas, sem ⚖️. A nota não tem diagrama, fluxograma nem quadro; as listas de condutor, de dispensa da audiência e de regras da sessão receberam as linhas *(C)*.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-audiencia334-002 | conhecimento.js:104 (`keys` "Os números do art. 334", 1º item) | `30` · `dias` · `antecedência mínima da audiência` | `30` · `dias úteis` · `antecedência mínima entre a designação e a audiência (arts. 334, caput, e 219)` | [AUD] nova linha 13, abaixo da linha 12 ("O juiz designará com 30 dias de antecedência..."), junto com 003. | Unidade do item passou a "dias úteis". |
| con-audiencia334-003 | conhecimento.js:104 (mesmo `keys`, 2º item) | `20` · `dias` · `antecedência mínima da citação do réu` | `20` · `dias úteis` · `antecedência mínima da citação do réu em relação à audiência (arts. 334, caput, e 219)` | [AUD] linha 13. | Unidade do item passou a "dias úteis". |
| con-audiencia334-004 | conhecimento.js:104 (mesmo `keys`, 3º item) | `10` · `dias` · `antes da audiência, prazo para o réu dizer que não quer` | `10` · `dias úteis` · `de antecedência da audiência: prazo para o réu apresentar petição de desinteresse na autocomposição (arts. 334, § 5º, e 219)` | [AUD] nova linha 29, abaixo da linha 28 ("Já o réu, deverá demonstrar o desinteresse com pelo menos 10 (dez) dias..."), junto com 010. | Unidade do item passou a "dias úteis". |
| con-audiencia334-006 | conhecimento.js:104 (mesmo `keys`, 5º item) | `2` · `meses` · `limite para sessões adicionais` | `2` · `meses` · `desde a primeira sessão: limite para sessões adicionais necessárias à composição das partes (art. 334, § 2º)` | [AUD] nova linha 21, abaixo da linha 20 ("não poderá extrapolar o prazo de 2 meses após a primeira sessão"). | — |
| con-audiencia334-007 | conhecimento.js:104 (mesmo `keys`, 6º item) | `20` · `minutos` · `intervalo mínimo entre audiências na pauta` | `20` · `minutos` · `intervalo mínimo entre o início de uma audiência e o início da seguinte na pauta (art. 334, § 12)` | [AUD] nova linha 61, abaixo da linha 60 ("O Art. 334, § 12º estabelece..."). | — |
| con-audiencia334-010 | conhecimento.js:105 (`gauge` "A audiência vai acontecer?", 2º item) | `O réu peticionou recusando com 10 dias de antecedência` · `art. 334, §5º; em litisconsórcio, todos (§6º)` | `O réu peticionou manifestando desinteresse com 10 dias úteis de antecedência da audiência` · `art. 334, §5º; em litisconsórcio, todos os litisconsortes devem manifestar desinteresse (§6º; art. 219)` | [AUD] linha 29. | Redação sugerida dividida entre rótulo e detalhe do item, como no original. `hint`, `on` e `off` (008, 011 e 012, `confere`) mantidos. |
| con-audiencia334-013 | conhecimento.js:106 (`flips` "Regras da sessão", cartão "Quem conduz", verso) | `Conciliador (sem vínculo anterior entre as partes) ou mediador (com vínculo).` | `Onde houver, atua conciliador ou mediador. Preferencialmente, o conciliador atua sem vínculo anterior entre as partes, e o mediador, quando há vínculo (art. 334, § 1º; art. 165, §§ 2º e 3º).` | [AUD] nova linha 18, abaixo das linhas 15 a 17 ("Atuação necessária" / conciliador / mediador). | Frente do cartão mantida. |
| con-audiencia334-015 | conhecimento.js:106 (mesmo `flips`, cartão "Eletrônica", verso) | `Pode ser por meio eletrônico (§7º).` | `A audiência pode realizar-se por meio eletrônico, nos termos da lei (art. 334, § 7º). As intimações realizam-se, sempre que possível, por meio eletrônico, na forma da lei (art. 270).` | [AUD] nova linha 41, abaixo da linha 40 ("Pode ser realizada por meio eletrônico"). | Frente "Eletrônica" mantida; vale para os dois objetos da redação nova. |
| con-audiencia334-019 | conhecimento.js:107 (`quiz`, 1ª questão, explicação) | `Só a dupla negativa a afasta.` | `O silêncio do réu não dispensa a audiência: a recusa exige manifestação expressa de ambas as partes. Ela também não ocorre quando não se admite autocomposição (art. 334, § 4º, I e II).` | [AUD] nova linha 38, abaixo das linhas 36 e 37 ("Se tem um que fala que quer, vai ter" / litisconsórcio). | O "Sim." da redação sugerida é o gabarito, mantido (índice 0); a explicação começa depois dele. |

## Plataforma

- `node --check` em `conhecimento.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/61-pk-conhecimento.js` (conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `61-pk-conhecimento.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código, e 001 segue `não verificável` à espera do Joaquim.

## Notado de passagem

- **[AUD] linha 28**: "no 9º dia, já é nula a demonstração de desinteresse" não tem base no art. 334, § 5º (que fixa a antecedência, sem falar em nulidade). Fora do parecer; não alterei.
- **[AUD] linhas 42 a 47**: a nota cita o art. 77, IV, para a ausência à audiência; a regra específica é o art. 334, § 8º. Não alterei.
- **[AUD] linha 51**: "devem ser representadas por seus defensores" corresponde ao § 9º (advogado ou defensor público); sem correção no parecer.
