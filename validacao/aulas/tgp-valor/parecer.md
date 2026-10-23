# Parecer · tgp-valor — Valor da causa

Data-base: 22/10/2026.

## Resumo

25 afirmações examinadas: 22 `confere`, 3 `corrigir`, 0 `divergente` e 0 `não verificável`.
Correções: 0 de gravidade alta, 2 de gravidade média e 1 de gravidade baixa.
Conceitos sem veredito: 0. Citações doutrinárias: 0.
Comparação limitada às pesquisas aceitas e às ressalvas da `conferencia.md`. Não houve consulta externa nem inspeção do código da calculadora.

## Comparação

| ID | Afirmação (copiada da ficha) | Veredito | Gravidade | O que a fonte diz | Fonte | Redação sugerida |
|---|---|---|---|---|---|---|
| tgp-valor-001 | Toda causa tem valor, mesmo sem conteúdo econômico imediato. | confere | — | O art. 291 exige valor certo mesmo sem conteúdo econômico imediatamente aferível. | [CPC, art. 291][CPC] | — |
| tgp-valor-002 | O valor da causa define custas e honorários. | corrigir | média | O valor da causa repercute nas custas, mas o CPC não estabelece sua tabela. Nos honorários, o art. 85, § 2º, prevê primeiro a condenação ou o proveito econômico; o valor atualizado da causa é base subsidiária. A frase omite essa condição relevante. | [CPC, arts. 85, § 2º, 292, § 3º, e 293][CPC] | O valor da causa repercute nas custas e pode servir de base aos honorários, quando não for possível mensurar o proveito econômico, observadas as regras do art. 85 do CPC. |
| tgp-valor-003 | O valor da causa define a competência dos Juizados. | confere | — | O valor é critério de competência: art. 3º, I, da Lei 9.099/1995; art. 3º da Lei 10.259/2001; art. 2º da Lei 12.153/2009. A frase introdutória não enumera limites nem afirma que o valor seja o único critério. | [Lei 9.099/1995, art. 3º][JEC]; [Lei 10.259/2001, art. 3º][JEF]; [Lei 12.153/2009, art. 2º][JFP] | — |
| tgp-valor-004 | O valor da causa define o cabimento de alguns atos. | confere | — | A pesquisa aceita demonstra consequências e requisitos processuais ligados ao valor: depósito na rescisória, assistência obrigatória por advogado no JEC e bases de multas, entre outros. Isso sustenta a referência genérica a atos; não autoriza acrescentar regra sobre cabimento de recursos. | [CPC, arts. 77, 334, § 8º, e 968, II][CPC]; [Lei 9.099/1995, art. 9º][JEC] | — |
| tgp-valor-005 | Calculadora "valorcausa" (engine.js): na ação de alimentos, o valor é a soma de 12 prestações mensais (12 × a pensão mensal pedida). | confere | — | O art. 292, III, determina a soma de 12 prestações mensais pedidas pelo autor. Confere a regra descrita na ficha; o funcionamento do código não foi examinado. | [CPC, art. 292, III][CPC] | — |
| tgp-valor-006 | Calculadora: prestações vencidas e vincendas somam-se; vincendas = uma prestação anual (12) se o prazo for indeterminado ou superior a 1 ano; se inferior, a soma das restantes (meses restantes). | confere | — | Os §§ 1º e 2º mandam somar vencidas e vincendas e estabelecem os critérios reproduzidos. A conversão em 12 parcelas pressupõe prestações mensais, como descrito. O prazo exatamente anual não é expressamente tratado pela pesquisa aceita. Confere a regra descrita, sem inspeção do código. | [CPC, art. 292, §§ 1º e 2º][CPC] | — |
| tgp-valor-007 | Calculadora: na cumulação de pedidos, somam-se os valores de todos os pedidos. | confere | — | O inciso VI determina a soma dos valores de todos os pedidos cumulados. Confere a regra descrita, sem inspeção do código. | [CPC, art. 292, VI][CPC] | — |
| tgp-valor-008 | Calculadora: nos pedidos alternativos, vale o de maior valor. | confere | — | O inciso VII adota o pedido de maior valor. Confere a regra descrita, sem inspeção do código. | [CPC, art. 292, VII][CPC] | — |
| tgp-valor-009 | Calculadora: no pedido subsidiário, vale o valor do pedido principal, ainda que o subsidiário seja maior. | confere | — | O inciso VIII adota o valor do pedido principal, sem condicioná-lo à comparação com o subsidiário. Confere a regra descrita, sem inspeção do código. | [CPC, art. 292, VIII][CPC] | — |
| tgp-valor-010 | Calculadora (texto do resultado): se o valor não passar de 40 salários mínimos, cabe opção pelo Juizado. | corrigir | média | O art. 3º, I, prevê o critério de 40 salários mínimos, mas o § 2º exclui matérias, inclusive causas de natureza alimentar. O resultado pode induzir erro especialmente porque a calculadora inclui alimentos. O § 3º menciona opção, mas a conferência deixou a facultatividade como lacuna. A correção decorre das exclusões legais comprovadas, sem resolver essa lacuna. | [Lei 9.099/1995, art. 3º, I e §§ 2º e 3º][JEC] | Valor de até 40 salários mínimos atende ao critério do art. 3º, I, da Lei 9.099/1995. O acesso ao Juizado Especial Cível estadual depende também dos demais requisitos legais. Causas de natureza alimentar estão excluídas (art. 3º, § 2º). |
| tgp-valor-011 | Inciso I, cobrança: principal corrigido + juros de mora vencidos + penalidades até a propositura. | confere | — | O inciso I inclui principal, juros de mora vencidos e outras penalidades, se houver, na soma monetariamente corrigida até a propositura. O quadro reproduz as parcelas e o marco temporal. | [CPC, art. 292, I][CPC] | — |
| tgp-valor-012 | Inciso II, existência, validade, cumprimento, modificação, resolução, resilição ou rescisão de ato jurídico: valor do ato ou da parte controvertida. | confere | — | O inciso II enumera essas hipóteses e adota o valor do ato ou de sua parte controvertida. | [CPC, art. 292, II][CPC] | — |
| tgp-valor-013 | Inciso III, alimentos: soma de 12 prestações mensais. | confere | — | O inciso III determina a soma de 12 prestações mensais pedidas pelo autor. | [CPC, art. 292, III][CPC] | — |
| tgp-valor-014 | Inciso IV, divisão, demarcação e reivindicação: valor de avaliação da área ou do bem. | confere | — | O inciso IV adota o valor de avaliação da área ou do bem objeto do pedido nessas ações. | [CPC, art. 292, IV][CPC] | — |
| tgp-valor-015 | Inciso V, indenização, inclusive dano moral: valor pretendido. | confere | — | O inciso V adota o valor pretendido na ação indenizatória, inclusive fundada em dano moral. | [CPC, art. 292, V][CPC] | — |
| tgp-valor-016 | Inciso VI, pedidos cumulados: soma de todos. | confere | — | O inciso VI determina a soma dos valores de todos os pedidos cumulados. | [CPC, art. 292, VI][CPC] | — |
| tgp-valor-017 | Inciso VII, pedidos alternativos: o de maior valor. | confere | — | O inciso VII determina o valor do pedido de maior valor. | [CPC, art. 292, VII][CPC] | — |
| tgp-valor-018 | Inciso VIII, pedido subsidiário: o do pedido principal. | confere | — | O inciso VIII determina o valor do pedido principal. | [CPC, art. 292, VIII][CPC] | — |
| tgp-valor-019 | Vencidas e vincendas: somam-se as duas. | confere | — | O § 1º considera o valor de umas e outras; as vincendas são calculadas segundo o § 2º, explicado na sequência da aula. | [CPC, art. 292, §§ 1º e 2º][CPC] | — |
| tgp-valor-020 | Vincendas: uma prestação anual se a obrigação for por prazo indeterminado ou superior a 1 ano; se inferior, a soma das restantes. | confere | — | A redação corresponde ao § 2º. A lei transcrita não menciona expressamente prazo exatamente anual; a aula também não apresenta solução para ele. | [CPC, art. 292, § 2º][CPC] | — |
| tgp-valor-021 | Correção de ofício: o juiz corrige por arbitramento quando o valor não corresponder ao proveito econômico e manda complementar custas. | corrigir | baixa | O § 3º contempla o conteúdo patrimonial em discussão **ou** o proveito econômico perseguido pelo autor e determina o recolhimento das custas correspondentes. A hipótese enunciada está correta, mas a síntese deve preservar os dois critérios e a expressão legal sobre custas. Gravidade baixa: a regra principal foi mantida, e não há caso concreto em que a omissão altere a resposta. | [CPC, art. 292, § 3º][CPC] | O juiz corrige de ofício, por arbitramento, o valor que não corresponda ao conteúdo patrimonial em discussão ou ao proveito econômico perseguido pelo autor, com recolhimento das custas correspondentes (art. 292, § 3º). |
| tgp-valor-022 | Impugnação do réu: em preliminar de contestação, sob pena de preclusão. | confere | — | Os arts. 293 e 337, III, estabelecem esse momento e a preclusão para o réu. A afirmação não impede a correção de ofício tratada separadamente na aula. | [CPC, arts. 293 e 337, III][CPC] | — |
| tgp-valor-023 | Ação de alimentos de R$ 800 por mês. Valor da causa? → "R$ 9.600" (12 × 800). Descartadas: R$ 800; R$ 4.800. | confere | — | Pelo inciso III, 12 × R$ 800 = R$ 9.600. R$ 800 e R$ 4.800 não correspondem ao cálculo legal; há uma única alternativa correta. | [CPC, art. 292, III][CPC] | — |
| tgp-valor-024 | Pedidos alternativos de R$ 20 mil e R$ 35 mil. Valor da causa? → "R$ 35 mil" (o de maior valor). Descartadas: R$ 55 mil; R$ 20 mil. | confere | — | Pelo inciso VII, adota-se R$ 35 mil. R$ 55 mil somaria os pedidos e R$ 20 mil adotaria o menor; nenhuma das alternativas descartadas está correta. | [CPC, art. 292, VII][CPC] | — |
| tgp-valor-025 | O réu discordou do valor só na apelação. Pode? → "Não, precluiu" (deve impugnar na contestação). Descartada: Sim. | confere | — | O art. 293 prevê preclusão se o réu não impugnar em preliminar da contestação. O enunciado descreve impugnação apresentada pela primeira vez na apelação, e não revisão de questão anteriormente decidida. Nesse caso, “Sim” não é alternativa correta. | [CPC, arts. 293 e 1.009, § 1º][CPC] | — |

## Para o Joaquim decidir

Nenhum ID com veredito `divergente` ou `não verificável`. Não há citações doutrinárias na ficha.

[CPC]: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105compilada.htm
[JEC]: https://www.planalto.gov.br/ccivil_03/leis/l9099.htm
[JEF]: https://www.planalto.gov.br/ccivil_03/leis/leis_2001/l10259.htm
[JFP]: https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/lei/l12153.htm
