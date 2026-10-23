# tgp-despesas — Despesas e honorários

Origem: tgp2.js:171 · grupo: Custos e ciclo do processo
Itens listados: 58


## Introdução
- [intro] Quem paga o processo? Durante o caminho, quem pede o ato adianta. No final, quem perdeu, ou quem deu causa, reembolsa.

## Bloco 1 · tl · O ciclo do dinheiro no processo
Origem: tgp2.js:174
- [b1.items[1][1]] Adiantamento
- [b1.items[1][2]] Em regra, cada parte adianta as despesas dos atos que realiza ou requer; o autor adianta as dos atos determinados de ofício ou requeridos pelo MP fiscal (art. 82). Há regras especiais para gratuidade, cobrança de honorários por advogado, atos requeridos pela Fazenda Pública, MP ou Defensoria e perícias; nestas, o adiantamento é rateado quando determinadas de ofício ou requeridas por ambas as partes (arts. 82, §3º, 91, 95 e 98).
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
- [b2.html] O autor, brasileiro ou estrangeiro, que reside fora do Brasil ou deixa de residir no país durante o processo presta caução para custas e honorários do advogado da parte contrária, se não tiver imóveis no Brasil que assegurem o pagamento, ressalvadas as dispensas legais. Dispensada por tratado (como o Protocolo de Las Leñas, Decreto 2.067/1996, e o acordo do Mercosul com Bolívia e Chile, Decreto 6.891/2009), na execução de título extrajudicial, no cumprimento de sentença e na reconvenção.

## Bloco 3 · keys · Honorários de sucumbência (art. 85)
Origem: tgp2.js:180
- [b3.items[1][1]] 10–20%
- [b3.items[1][2]] regra geral
- [b3.items[1][3]] sobre o valor da condenação; na ausência de condenação, sobre o proveito econômico obtido ou, não sendo possível mensurá-lo, sobre o valor atualizado da causa (§2º)
- [b3.items[2][1]] 5%
- [b3.items[2][2]] monitória
- [b3.items[2][3]] o mandado concede 15 dias para cumprimento e pagamento de honorários de 5% do valor da causa; o cumprimento no prazo isenta o réu das custas processuais (art. 701, caput e §1º)
- [b3.items[3][1]] alimentar
- [b3.items[3][2]] natureza
- [b3.items[3][3]] vedada a compensação na sucumbência parcial (§14)

## Bloco 4 · p
Origem: tgp2.js:171
- [b4.html] Para fixar o percentual, o juiz considera o zelo do profissional, o lugar do serviço, a natureza e importância da causa, o trabalho e o tempo exigidos (art. 85, §2º).

## Bloco 5 · calc · Honorários contra a Fazenda Pública
Origem: tgp2.js:182
- [b5.calculadora] Calculadora "honor": a regra está em engine.js (CALC)
- [b5.calculadora.estado1] Se Mínimo legal (campos numéricos no valor padrão: s=3000) → 3.000 SM até 200 SM (10–20%) 20 SM 200 a 2.000 (8–10%) 144 SM 2.000 a 20.000 (5–8%) 50 SM 20.000 a 100.000 (3–5%) 0 SM acima de 100.000 (1–3%) 0 SM Total 214 SM
- [b5.calculadora.estado2] Se Máximo legal (campos numéricos no valor padrão: s=3000) → 3.000 SM até 200 SM (10–20%) 40 SM 200 a 2.000 (8–10%) 180 SM 2.000 a 20.000 (5–8%) 80 SM 20.000 a 100.000 (3–5%) 0 SM acima de 100.000 (1–3%) 0 SM Total 300 SM
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
- [b7.items[1].html] Nesses casos, são obrigatórios os percentuais do art. 85, § 2º, ou, quando a Fazenda Pública for parte, as faixas do § 3º.
- [b7.items[2].court] STF
- [b7.items[2].year] ADI 6.053
- [b7.items[2].id] ADI 6.053
- [b7.items[2].tese] Advogados públicos podem receber honorários de sucumbência, respeitado o teto remuneratório.
- [b7.items[2].html] O §19 do art. 85 é constitucional, mas a soma com o subsídio não pode ultrapassar o teto do art. 37, XI, da Constituição.

## Teste do módulo
- [quiz1] Ação extinta por perda do objeto. Quem paga honorários? → resposta dada como certa: "Quem deu causa ao processo" (alternativas: O autor, sempre | Quem deu causa ao processo | Ninguém) — explicação: art. 85, §10.
- [quiz2] Causa de R$ 50 milhões, com proveito econômico mensurável e não irrisório: o valor elevado permite fixar honorários por equidade? → resposta dada como certa: "Não" (alternativas: Sim | Não) — explicação: Aplicam-se os percentuais legais, inclusive quando a Fazenda Pública é parte (art. 85, §§2º, 3º, 6º-A e 8º; STJ, Tema 1.076). Para causas com a Fazenda Pública, o STF ainda não julgou o mérito do Tema 1.255.
- [quiz3] Honorários podem ser compensados na sucumbência parcial? → resposta dada como certa: "Não" (alternativas: Sim | Não) — explicação: art. 85, §14.
