# tgp-prazos — Prazos processuais

Origem: tgp2.js:85 · grupo: Atos, prazos e nulidades
Itens listados: 80


## Introdução
- [intro] Perder um prazo costuma ser irreversível. Por isso vale dominar de onde ele vem, quando começa e como se conta.

## Bloco 1 · steps · De onde vem o prazo
Origem: tgp2.js:88
- [b1.items[1][1]] Legal
- [b1.items[1][2]] Fixado em lei, como os 15 dias da contestação.
- [b1.items[1][3]] CPC, art. 218
- [b1.items[2][1]] Judicial
- [b1.items[2][2]] Fixado pelo juiz quando a lei for omissa, considerando a complexidade do ato.
- [b1.items[2][3]] art. 218, §1º
- [b1.items[3][1]] Subsidiário
- [b1.items[3][2]] Sem lei nem decisão: 5 dias para a parte.
- [b1.items[3][3]] art. 218, §3º
- [b1.items[4][1]] Comparecimento
- [b1.items[4][2]] Intimação para comparecer: pelo menos 48 horas de antecedência.
- [b1.items[4][3]] art. 218, §2º

## Bloco 2 · calc · Calcule um prazo de verdade
Origem: tgp2.js:93
- [b2.calculadora] Calculadora "prazo": a regra está em engine.js (CALC)
- [b2.kind] prazo
- [b2.hint] Dias úteis, exclusão do dia do começo, recesso de fim de ano, feriados nacionais e prazo em dobro.

## Bloco 3 · table · Quando o prazo começa
Origem: tgp2.js:94
- [b3.hint] CPC, art. 231. Depois desse marco, aplica-se a contagem do art. 224.
- [b3.head[1]] Forma de comunicação
- [b3.head[2]] Dia do começo
- [b3.rows[1][1]] Correio
- [b3.rows[1][2]] Juntada do aviso de recebimento
- [b3.rows[2][1]] Oficial de justiça (inclusive hora certa)
- [b3.rows[2][2]] Juntada do mandado cumprido
- [b3.rows[3][1]] Escrivão ou chefe de secretaria
- [b3.rows[3][2]] Data em que ocorreu
- [b3.rows[4][1]] Edital
- [b3.rows[4][2]] Dia útil seguinte ao fim da dilação fixada pelo juiz
- [b3.rows[5][1]] Intimação eletrônica
- [b3.rows[5][2]] Dia útil seguinte à consulta ou ao fim do prazo de 10 dias corridos para consultar (Lei 11.419/06, art. 5º, §3º)
- [b3.rows[6][1]] Carta precatória ou rogatória
- [b3.rows[6][2]] Juntada da comunicação do cumprimento ou da carta cumprida
- [b3.rows[7][1]] Diário da Justiça eletrônico
- [b3.rows[7][2]] Publicação: considera-se publicado no primeiro dia útil após a disponibilização, e o prazo começa no dia útil seguinte (art. 224, §§2º e 3º)
- [b3.rows[8][1]] Carga dos autos
- [b3.rows[8][2]] Dia da carga
- [b3.rows[9][1]] Citação eletrônica
- [b3.rows[9][2]] Quinto dia útil após a confirmação do recebimento (art. 231, IX). Sem confirmação em 3 dias úteis, a citação é refeita por correio, oficial, escrivão ou edital, e o réu deve justificar a falta na primeira oportunidade, sob pena de multa de até 5% do valor da causa (art. 246, §§1º-A a 1º-C)

## Bloco 4 · flips · Regras de contagem
Origem: tgp2.js:104
- [b4.items[1][1]] Só dias úteis
- [b4.items[1][2]] Para prazos processuais em dias (art. 219). Prazos de direito material, como a prescrição e a decadência, correm em dias corridos. A dilação do edital (20 a 60 dias, art. 257, III) é fixada pelo juiz, e há divergência sobre contá-la em dias úteis.
- [b4.items[2][1]] Exclui e inclui
- [b4.items[2][2]] Exclui o dia do começo e inclui o do vencimento (art. 224). Protrai se o expediente começar tarde, acabar cedo ou o sistema cair.
- [b4.items[3][1]] Antes do prazo vale
- [b4.items[3][2]] Ato praticado antes do termo inicial é tempestivo (art. 218, §4º).
- [b4.items[4][1]] Renúncia
- [b4.items[4][2]] A parte pode renunciar ao prazo estabelecido só em seu favor, de forma expressa (art. 225).
- [b4.items[5][1]] Justa causa
- [b4.items[5][2]] Evento alheio à vontade que impediu o ato permite praticá-lo em prazo fixado pelo juiz (art. 223).
- [b4.items[6][1]] Prorrogação
- [b4.items[6][2]] Até 2 meses em comarca de difícil transporte; mais em calamidade pública (art. 222).

## Bloco 5 · keys · Prazos do juiz e do servidor
Origem: tgp2.js:111
- [b5.hint] São prazos impróprios: o descumprimento não gera preclusão.
- [b5.items[1][1]] 5
- [b5.items[1][2]] dias
- [b5.items[1][3]] despachos (art. 226, I)
- [b5.items[2][1]] 10
- [b5.items[2][2]] dias
- [b5.items[2][3]] decisões interlocutórias (II)
- [b5.items[3][1]] 30
- [b5.items[3][2]] dias
- [b5.items[3][3]] sentenças (III)
- [b5.items[4][1]] 1
- [b5.items[4][2]] dia
- [b5.items[4][3]] servidor remeter os autos conclusos (art. 228)

## Bloco 6 · chooser · Prazo em dobro
Origem: tgp2.js:112
- [b6.items[1][1]] Ministério Público
- [b6.items[1][2]] Dobro
- [b6.items[1][3]] art. 180, contado da intimação pessoal.
- [b6.items[2][1]] Fazenda Pública
- [b6.items[2][2]] Dobro
- [b6.items[2][3]] art. 183.
- [b6.items[3][1]] Defensoria e NPJ
- [b6.items[3][2]] Dobro
- [b6.items[3][3]] art. 186, inclusive escritórios de prática jurídica de faculdades e entidades conveniadas (§3º).
- [b6.items[4][1]] Litisconsortes
- [b6.items[4][2]] Dobro, com ressalvas
- [b6.items[4][3]] Procuradores diferentes, de escritórios distintos, em autos físicos (art. 229). Cessa se, havendo só dois réus, apenas um contestar (§1º).
- [b6.items[5][1]] Lei com prazo próprio
- [b6.items[5][2]] Sem dobro
- [b6.items[5][3]] Quando a lei fixa prazo específico para o ente.

## Teste do módulo
- [quiz1] Intimação publicada no DJe que foi disponibilizado na segunda-feira. Quando começa o prazo? → resposta dada como certa: "Na quarta" (alternativas: Na segunda | Na terça | Na quarta) — explicação: Publicação na terça (primeiro dia útil seguinte) e início na quarta (art. 224, §§2º e 3º).
- [quiz2] O prazo para o juiz sentenciar é preclusivo? → resposta dada como certa: "Não, é impróprio" (alternativas: Sim | Não, é impróprio) — explicação: art. 226.
- [quiz3] Sem prazo na lei ou na decisão, a parte tem: → resposta dada como certa: "5 dias" (alternativas: 5 dias | 15 dias | 48 horas) — explicação: art. 218, §3º.
