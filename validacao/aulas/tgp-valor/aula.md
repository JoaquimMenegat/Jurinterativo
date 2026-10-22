# tgp-valor — Valor da causa

Origem: tgp2.js:148 · grupo: Custos e ciclo do processo
Itens listados: 40


## Introdução
- [intro] Toda causa tem valor, mesmo sem conteúdo econômico imediato (art. 291). Ele define custas, honorários, competência dos Juizados e até o cabimento de alguns atos.

## Bloco 1 · calc · Simulador do art. 292
Origem: tgp2.js:151
- [b1.calculadora] Calculadora "valorcausa": a regra está em engine.js (CALC)
- [b1.kind] valorcausa
- [b1.hint] Escolha o tipo de ação e mude os números.

## Bloco 2 · table · O art. 292, inciso por inciso
Origem: tgp2.js:152
- [b2.head[1]] Inciso
- [b2.head[2]] Ação
- [b2.head[3]] Valor da causa
- [b2.rows[1][1]] I
- [b2.rows[1][2]] Cobrança
- [b2.rows[1][3]] Principal corrigido + juros de mora vencidos + penalidades até a propositura
- [b2.rows[2][1]] II
- [b2.rows[2][2]] Existência, validade, cumprimento, modificação, resolução, resilição ou rescisão de ato jurídico
- [b2.rows[2][3]] Valor do ato ou da parte controvertida
- [b2.rows[3][1]] III
- [b2.rows[3][2]] Alimentos
- [b2.rows[3][3]] Soma de 12 prestações mensais
- [b2.rows[4][1]] IV
- [b2.rows[4][2]] Divisão, demarcação e reivindicação
- [b2.rows[4][3]] Valor de avaliação da área ou do bem
- [b2.rows[5][1]] V
- [b2.rows[5][2]] Indenização, inclusive dano moral
- [b2.rows[5][3]] Valor pretendido
- [b2.rows[6][1]] VI
- [b2.rows[6][2]] Pedidos cumulados
- [b2.rows[6][3]] Soma de todos
- [b2.rows[7][1]] VII
- [b2.rows[7][2]] Pedidos alternativos
- [b2.rows[7][3]] O de maior valor
- [b2.rows[8][1]] VIII
- [b2.rows[8][2]] Pedido subsidiário
- [b2.rows[8][3]] O do pedido principal

## Bloco 3 · flips · Ajustes e controle
Origem: tgp2.js:161
- [b3.items[1][1]] Vencidas e vincendas
- [b3.items[1][2]] Somam-se as duas (§1º). Vincendas: uma prestação anual se a obrigação for por prazo indeterminado ou superior a 1 ano; se inferior, a soma das restantes (§2º).
- [b3.items[2][1]] Correção de ofício
- [b3.items[2][2]] O juiz corrige por arbitramento quando o valor não corresponder ao proveito econômico, e manda complementar custas (§3º).
- [b3.items[3][1]] Impugnação do réu
- [b3.items[3][2]] Em preliminar de contestação, sob pena de preclusão (arts. 293 e 337, III).

## Teste do módulo
- [quiz1] Ação de alimentos de R$ 800 por mês. Valor da causa? → resposta dada como certa: "R$ 9.600" (alternativas: R$ 800 | R$ 9.600 | R$ 4.800) — explicação: 12 × 800 (art. 292, III).
- [quiz2] Pedidos alternativos de R$ 20 mil e R$ 35 mil. Valor da causa? → resposta dada como certa: "R$ 35 mil" (alternativas: R$ 55 mil | R$ 35 mil | R$ 20 mil) — explicação: O de maior valor (VII).
- [quiz3] O réu discordou do valor só na apelação. Pode? → resposta dada como certa: "Não, precluiu" (alternativas: Sim | Não, precluiu) — explicação: Deve impugnar na contestação (art. 293).
