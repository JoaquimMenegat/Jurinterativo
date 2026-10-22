# tgp-despesas — Despesas e honorários

Origem: tgp2.js:171 · grupo: Custos e ciclo do processo
Itens listados: 56


## Introdução
- [intro] Quem paga o processo? Durante o caminho, quem pede o ato adianta. No final, quem perdeu, ou quem deu causa, reembolsa.

## Bloco 1 · tl · O ciclo do dinheiro no processo
Origem: tgp2.js:174
- [b1.items[1][1]] Adiantamento
- [b1.items[1][2]] Cada parte antecipa as despesas dos atos que requer; o autor adianta os determinados de ofício ou a pedido do MP fiscal (art. 82, §1º). Exceção: gratuidade da justiça (arts. 98 a 102).
- [b1.items[2][1]] Despesas
- [b1.items[2][2]] Custas (taxa paga ao Judiciário), indenização de viagem, remuneração de assistente técnico e diária de testemunha (art. 84).
- [b1.items[3][1]] Sentença
- [b1.items[3][2]] Condena o vencido a ressarcir o que o vencedor antecipou (art. 82, §2º) e a pagar honorários (art. 85).
- [b1.items[4][1]] Recurso
- [b1.items[4][2]] O tribunal majora os honorários pelo trabalho adicional, até os tetos legais (art. 85, §11).

## Bloco 2 · callout
Origem: tgp2.js:179
- [b2.kind] brass
- [b2.title] Caução do autor que mora fora (art. 83)
- [b2.html] Autor, brasileiro ou estrangeiro, que reside fora do país ou deixa de residir durante o processo, sem imóveis no Brasil, presta caução para custas e honorários. Dispensada por tratado (como o Protocolo de Las Leñas, Decreto 2.067/1996, e o acordo do Mercosul com Bolívia e Chile, Decreto 6.891/2009), na execução de título extrajudicial, no cumprimento de sentença e na reconvenção.

## Bloco 3 · keys · Honorários de sucumbência (art. 85)
Origem: tgp2.js:180
- [b3.items[1][1]] 10–20%
- [b3.items[1][2]] regra geral
- [b3.items[1][3]] sobre condenação, proveito econômico ou valor atualizado da causa
- [b3.items[2][1]] 5%
- [b3.items[2][2]] monitória cumprida
- [b3.items[2][3]] honorários reduzidos para quem paga no prazo (art. 701)
- [b3.items[3][1]] alimentar
- [b3.items[3][2]] natureza
- [b3.items[3][3]] vedada a compensação na sucumbência parcial (§14)

## Bloco 4 · p
Origem: tgp2.js:171
- [b4.html] Para fixar o percentual, o juiz considera o zelo do profissional, o lugar do serviço, a natureza e importância da causa, o trabalho e o tempo exigidos (art. 85, §2º).

## Bloco 5 · calc · Honorários contra a Fazenda Pública
Origem: tgp2.js:182
- [b5.calculadora] Calculadora "honor": a regra está em engine.js (CALC)
- [b5.kind] honor
- [b5.hint] Arraste o valor e veja as faixas se preencherem.

## Bloco 6 · chooser · Situações especiais
Origem: tgp2.js:183
- [b6.items[1][1]] Equidade
- [b6.items[1][2]] Só para valores baixos ou inestimáveis
- [b6.items[1][3]] O juiz arbitra por equidade quando o proveito é inestimável ou irrisório ou o valor da causa é muito baixo (§8º). Nesses casos, observa a tabela da OAB ou o mínimo de 10%, o que for maior (§8º-A). Fora disso, a equidade é proibida (§6º-A, Lei 14.365/2022; STJ, Tema 1.076). Nas causas com a Fazenda Pública, a questão aguarda o STF (Tema 1.255).
- [b6.items[2][1]] Perda do objeto
- [b6.items[2][2]] Paga quem deu causa
- [b6.items[2][3]] Princípio da causalidade (§10).
- [b6.items[3][1]] Sucumbência recíproca
- [b6.items[3][2]] Divisão proporcional
- [b6.items[3][3]] Cada um vencedor e vencido em parte: despesas proporcionais. Se um perdeu parte mínima, o outro paga tudo (art. 86). Ex.: pediu R$ 50 mil e ganhou R$ 49 mil.
- [b6.items[4][1]] Litisconsortes vencidos
- [b6.items[4][2]] Proporcional, ou solidária se omissa
- [b6.items[4][3]] A sentença deve distribuir expressamente; se não o fizer, respondem solidariamente (art. 87).
- [b6.items[5][1]] Jurisdição voluntária
- [b6.items[5][2]] Rateio
- [b6.items[5][3]] O requerente adianta e as despesas são rateadas entre os interessados (art. 88). Nos juízos divisórios sem litígio, proporcional aos quinhões (art. 89).
- [b6.items[6][1]] Sentença omissa
- [b6.items[6][2]] Ação autônoma
- [b6.items[6][3]] Se a decisão transitada nada disse sobre honorários, cabe ação própria (§18).

## Bloco 7 · juris · Na jurisprudência
Origem: tgp2.js:190
- [b7.items[1].court] STJ
- [b7.items[1].year] Tema 1.076
- [b7.items[1].id] REsp 1.850.512, 1.877.883, 1.906.618 e 1.906.623
- [b7.items[1].tese] É vedada a fixação de honorários por equidade quando o valor da condenação, do proveito econômico ou da causa for elevado.
- [b7.items[1].html] Nesses casos aplicam-se obrigatoriamente os percentuais dos §§ 2º e 3º do art. 85.
- [b7.items[2].court] STF
- [b7.items[2].year] ADI 6.053
- [b7.items[2].id] ADI 6.053
- [b7.items[2].tese] Advogados públicos podem receber honorários de sucumbência, respeitado o teto remuneratório.
- [b7.items[2].html] O §19 do art. 85 é constitucional, mas a soma com o subsídio não pode ultrapassar o teto do art. 37, XI, da Constituição.

## Teste do módulo
- [quiz1] Ação extinta por perda do objeto. Quem paga honorários? → resposta dada como certa: "Quem deu causa ao processo" (alternativas: O autor, sempre | Quem deu causa ao processo | Ninguém) — explicação: art. 85, §10.
- [quiz2] Causa de R$ 50 milhões. O juiz pode fixar honorários por equidade? → resposta dada como certa: "Não" (alternativas: Sim | Não) — explicação: Art. 85, §6º-A, e STJ, Tema 1.076 (entre particulares; com a Fazenda, aguarda-se o STF, Tema 1.255).
- [quiz3] Honorários podem ser compensados na sucumbência parcial? → resposta dada como certa: "Não" (alternativas: Sim | Não) — explicação: art. 85, §14.
