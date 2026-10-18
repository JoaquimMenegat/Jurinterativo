# Correções · pe-arrolamento

Data: 18/10/2026 · Data-base: 18/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **7 aplicadas**, todas `corrigir`: 001, 003, 004, 006, 007, 009 e 012.
- **0 bloqueadas.**
- Nenhum `divergente` no parecer.
- Não mexidos:
  - `confere`: 002, 008, 010, 011 e 015.
  - `não verificável`: 014 e 017. Continuam como estão, pela regra geral de 16/10/2026.
  - Conceitos sem veredito: 005, 013 e 016.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/procesp2.js`, aula `arrolamento` (linhas 23 a 31; a contagem de linhas não mudou). A aula `juizados` e as demais do arquivo não foram tocadas.

Notas do Vault (caminho relativo a `Obsidian Vault/Faculdade/6ª Fase/2. Procedimentos Especiais/Procedimentos Especiais/0. Material do Professor/`):
- **[P13]** `(C) 13. Arrolamento Comum e Sumário.md`
- **[P14]** `(C) 14. Sobrepartilha e Inventário Negativo.md`

As duas notas são `(C)`. Como nos lotes anteriores, corrigi o texto diretamente, sem a marca *(C, data)*. Ficaram intactos a citação de Donizetti ([P13] linha 16; [P14] linha 19) e as transcrições do art. 669, do art. 670 e do CC, art. 1.523 ([P14]). As linhas abaixo são as de depois da correção.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| pe-arrolamento-001 | procesp2.js:26 (`vs`, coluna "Sumário", 1º item); :28 (`sorter`, cartões 1 e 4) | Item: `Todos capazes e de acordo, ou herdeiro único (adjudicação)`. Cartão 1: `Três herdeiros maiores, todos de acordo, …`. Cartão 4: `Herdeiro único, maior.` | Item: `Partilha amigável entre partes capazes; também cabe adjudicação ao herdeiro único capaz (art. 659)`. Cartão 1: `Três herdeiros capazes, todos de acordo, patrimônio de R$ 5 milhões.` Cartão 4: `Herdeiro único capaz.` | [P13] linha 56. Antes: `Todos **maiores** e **capazes**`. Depois: `Todos **capazes**: partilha amigável entre partes capazes (art. 659)`. Linha 59: herdeiro único passou a `Sendo **capaz**, … (art. 659, § 1º)`. Quadro, linhas 91, 92 e 96: `maiores e capazes` → `capazes`; herdeiro único → `ao herdeiro **capaz**`. | `art. 659` com link (`a()`). Gabaritos dos cartões mantidos (sumário). |
| pe-arrolamento-003 | procesp2.js:26 (`vs`, coluna "Sumário", 3º item, dividido em dois) | `Dispensa primeiras declarações e avaliação: basta o plano de partilha` | `Dispensa termos, mas a petição indica o inventariante, os títulos dos herdeiros, os bens e seus valores, além da partilha amigável (art. 660)` + item novo: `Não há avaliação, salvo dos bens reservados se o credor notificado impugnar a estimativa (arts. 661 a 663)` | [P13] linha 60. Antes: `**NÃO há necessidade** — basta o **plano de partilha** ou o **pedido de adjudicação**`. Depois: `**Dispensam-se termos**, mas a petição indica o inventariante, os títulos dos herdeiros, os bens e seus valores, além da partilha amigável ou do pedido de adjudicação (art. 660)`. Linha 61 nova (Avaliação). Quadro, linhas 93 e 94 (idem, linha "Avaliação" nova). | A redação do parecer tem duas frases; virou dois itens do `vs`, como em pe-juizados-021. |
| pe-arrolamento-004 | procesp2.js:26 (`vs`, coluna "Sumário", item do imposto); :27 (`callout` "Para não confundir", frase do sumário) | Item: `Homologa primeiro; depois o fisco lança o imposto`. Callout: `Sumário: homologa primeiro, tributa depois.` | Item: `A homologação e o formal de partilha (ou a carta de adjudicação) dispensam o pagamento prévio do ITCMD, mas exigem a quitação dos tributos relativos aos bens e às rendas do espólio. Após o trânsito em julgado, o fisco é intimado para o lançamento (art. 659, §2º; STJ, Tema 1.074)`. Callout: `Sumário: a homologação dispensa o pagamento prévio do ITCMD, mas exige a quitação dos tributos relativos aos bens e às rendas do espólio; após o trânsito em julgado, o fisco é intimado para o lançamento (art. 659, §2º; STJ, Tema 1.074).` | [P13] linha 62 (tabela do sumário). Antes: `Após a homologação da partilha por sentença, **intima-se o fisco para lançamento dos tributos**`. Depois: a redação do parecer. Quadro "A distinção decisiva", linhas 69, 75 e 76: título `o momento do ITCMD` → `o momento dos tributos`; linha "Sequência" com a redação nova; linha `Tributo: Vem depois da sentença` → `ITCMD lançado pelo fisco após o trânsito em julgado`. Callout, linhas 78 e 79: `Memorize a inversão / homologa primeiro, tributa depois` → `Memorize a diferença` + a redação nova. Quadro comparativo, linha 95. | `art. 659, §2º` com link. O lema "homologa primeiro, tributa depois" saiu do callout porque é a fórmula que o parecer aponta como imprecisa. |
| pe-arrolamento-006 | procesp2.js:26 (`vs`, coluna "Comum", 1º item); :28 (`sorter`, cartão 2) | Item: `Bens até 1.000 salários mínimos`. Cartão 2: `Herdeiros brigam, mas os bens somam 300 salários mínimos.` | Item: `Bens de valor igual ou inferior a 1.000 salários mínimos`. Cartão 2: `Todos os interessados são capazes, os herdeiros brigam e os bens somam 300 salários mínimos.` | Nenhuma alteração de teto: [P13] linhas 32 e 88 já diziam "igual ou inferior a 1.000" / "≤ 1.000". A parte do incapaz já estava nas linhas 35, 44–45 e 92. | A metade "havendo incapaz, exige concordância de todas as partes e do MP" já estava no 5º item da coluna (010, `confere`), mantido; também entrou no item de 007. Explicação do cartão 2: `Valor até 1.000 SM; entre capazes, sem precisar de acordo.` Gabarito mantido (comum). Cartão 3 não mudou. |
| pe-arrolamento-007 | procesp2.js:26 (`vs`, coluna "Comum", 2º item); :31 (quiz 1, pergunta e explicação) | Item: `Não exige acordo`. Quiz: `Arrolamento comum exige acordo?` — explicação `O critério é o valor.` | Item: `Entre interessados capazes, não exige acordo; com incapaz, todas as partes e o MP devem concordar (arts. 664 e 665)`. Quiz: `Se todos os interessados são capazes, o arrolamento comum exige acordo?` — explicação `O critério é o valor. Com incapaz, todas as partes e o MP devem concordar (arts. 664 e 665).` | [P13] linha 34. Antes: `**NÃO é necessário** que as partes estejam de acordo`. Depois: `Entre interessados **capazes**, **NÃO é necessário** …; com incapaz, ver a linha abaixo (arts. 664 e 665)`. Callout, linha 40: `entre interessados **capazes**` acrescentado. Quadro, linha 90: `**Não**, entre interessados capazes; com incapaz, partes e MP devem concordar`. | Gabarito do quiz 1 continua "Não" (índice 1). |
| pe-arrolamento-009 | procesp2.js:26 (`vs`, coluna "Comum", 4º item); :27 (`callout`, frase do comum) | Item: `Paga-se o imposto antes da homologação`. Callout: `Comum: tributa primeiro, homologa depois.` | Item: `O julgamento da partilha exige prova da quitação dos tributos relativos aos bens e às rendas do espólio (art. 664, §5º)`. Callout: `Comum: o julgamento da partilha exige prova da quitação dos tributos relativos aos bens e às rendas do espólio (art. 664, §5º).` | [P13] linha 37. Antes: `Precisa ter **pago o ITCMD** *causa mortis* para a partilha ser homologada por sentença`. Depois: a redação do parecer. Quadro "A distinção decisiva", linhas 75 e 76 (coluna "Comum"); callout, linha 80; quadro comparativo, linha 95 (`ITCMD × homologação` → `Tributos × homologação`). | `art. 664, §5º` com link. A referência ao ITCMD prévio no comum saiu, como manda o parecer. |
| pe-arrolamento-012 | procesp2.js:29 (`table` "Sobrepartilha", linhas 3 e 4 e `hint`) | Linha 3: `Litigiosos ou de liquidação difícil`. Linha 4: `Em lugar remoto`. Hint: `Nova partilha de bens que ficaram de fora, pelo mesmo rito e nos mesmos autos.` | Linha 3: `Litigiosos ou de liquidação difícil ou morosa`. Linha 4: `Em lugar remoto da sede do juízo`. Hint: o mesmo texto + `Os litigiosos, os de liquidação difícil ou morosa e os situados em lugar remoto ficam reservados sob guarda e administração de inventariante, com consentimento da maioria dos herdeiros (art. 669).` | [P14] linhas 41 e 42 já traziam "liquidação difícil ou morosa" e "lugar remoto da sede do juízo"; não mudaram. Callout novo, linhas 48 e 49, depois do "Duas famílias de hipóteses": `Reserva dos bens dos incisos III e IV` com a frase da reserva (art. 669). Art. 669 transcrito (linhas 28 a 33) intacto. | A coluna "Por que ficaram de fora" (013, conceito) não mudou. A 1ª frase do hint (011, `confere`) ficou igual; a reserva entrou como 2ª frase, porque a tabela não tem lugar próprio para ela. |

## Plataforma

- `node --check` em `procesp2.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo (procesp 95161). As redações novas estão em `prototipo/src/js/62-pk-procesp.js` (conferido por busca: "Herdeiro único capaz", "Tema 1.074", "liquidação difícil ou morosa"). No passo final, a cópia do pacote sobre ele mesmo falhou com `WinError 32`, a falha conhecida e inofensiva. `procesp2.js` continua com as correções.
- `node --check` em `62-pk-procesp.js`: sem erro.
- `python prototipo/build.py`: gerou `vade-sucessoes.html` (801 KB). Não abri a aula no navegador; as mudanças são de texto em blocos existentes (mais um item na coluna "Sumário" do `vs`).

## Marca "Validada em"

Não aplicada. A aula não tem linha "Validada em" no código, e 014 e 017 seguem `não verificável` (mantidos pela regra geral). O Orquestrador decide se a marca entra.

## Notado de passagem

- **[P13] linhas 49 e 55 e quadro, linha 87:** a base legal do sumário aparece como "arts. 660 a 663", enquanto a aula e o parecer (001) usam o art. 659 (e o § 1º para a adjudicação). Acrescentei "art. 659" só nas linhas tocadas; não mudei os títulos.
- **[P13] linha 36:** "Primeiras declarações: precisará ter" no comum. O art. 664 fala em declarações apresentadas pelo inventariante (008, `confere`). Não alterei.
- **`procesp2.js:26`, coluna "Comum":** com 007, a exigência de concordância com incapaz aparece duas vezes (2º e 5º itens). O 5º é de 010 (`confere`); não alterei.
- **[P14] linha 102, quadro-resumo:** "Construção prática; conexão com CC art. 1.523, I" é o tema de 014 e 017 (`não verificável`). Não alterei.
