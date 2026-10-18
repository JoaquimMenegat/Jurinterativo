# pe-especies — Mapa dos recursos em espécie

Origem: procesp3.js:46 · grupo: Recursos
Itens listados: 77


## Introdução
- [intro] Este módulo é um complemento escrito a partir da lei: um mapa rápido de cada recurso para você nunca errar o caminho.

## Bloco 1 · wizard · Qual recurso cabe?
Origem: procesp3.js:49
- [b1.tree.q] Quem proferiu a decisão?
- [b1.tree.a[1][1]] Juiz de primeiro grau
- [b1.tree.a[1][2].q] Que tipo de decisão?
- [b1.tree.a[1][2].a[1][1]] Sentença
- [b1.tree.a[1][2].a[1][2].end] Apelação · 15 dias
- [b1.tree.a[1][2].a[1][2].txt] Interposta no juízo de origem, que não faz juízo de admissibilidade (art. 1.010, §3º). Em regra com efeito suspensivo.
- [b1.tree.a[1][2].a[2][1]] Interlocutória do rol do art. 1.015
- [b1.tree.a[1][2].a[2][2].end] Agravo de instrumento · 15 dias
- [b1.tree.a[1][2].a[2][2].txt] Direto no tribunal. Também cabe contra qualquer interlocutória na liquidação, no cumprimento, na execução e no inventário (parágrafo único).
- [b1.tree.a[1][2].a[3][1]] Interlocutória fora do rol
- [b1.tree.a[1][2].a[3][2].end] Sem recurso imediato
- [b1.tree.a[1][2].a[3][2].txt] Alegue em preliminar de apelação ou nas contrarrazões (art. 1.009, §1º). Exceção: urgência que torne inútil esperar (STJ, Tema 988).
- [b1.tree.a[2][1]] Relator, sozinho
- [b1.tree.a[2][2].end] Agravo interno · 15 dias
- [b1.tree.a[2][2].txt] Ao colegiado (art. 1.021). Manifestamente inadmissível ou improcedente por unanimidade: multa de 1% a 5% do valor da causa.
- [b1.tree.a[3][1]] Tribunal, em acórdão
- [b1.tree.a[3][2].q] Qual o vício alegado?
- [b1.tree.a[3][2].a[1][1]] Ofensa ou divergência sobre lei federal
- [b1.tree.a[3][2].a[1][2].end] Recurso especial · 15 dias
- [b1.tree.a[3][2].a[1][2].txt] Ao STJ (CF, art. 105, III). Exige prequestionamento e não reexamina prova (Súmula 7 do STJ). Desde 3/9/2026, o recorrente também precisa demonstrar, em tópico próprio e fundamentado, a relevância da questão de direito federal (CF, art. 105, §§2º e 3º; CPC, art. 1.035-A, incluído pela Lei 15.484/2026). A relevância é presumida em ações penais, de improbidade, de valor acima de 500 salários mínimos, que possam gerar inelegibilidade, ou quando o acórdão contrariar jurisprudência dominante do STJ. Só 2/3 do órgão julgador podem recusá-la.
- [b1.tree.a[3][2].a[2][1]] Ofensa à Constituição
- [b1.tree.a[3][2].a[2][2].end] Recurso extraordinário · 15 dias
- [b1.tree.a[3][2].a[2][2].txt] Ao STF (CF, art. 102, III). Exige repercussão geral.
- [b1.tree.a[4][1]] Qualquer uma, com omissão, contradição, obscuridade ou erro material
- [b1.tree.a[4][2].end] Embargos de declaração · 5 dias
- [b1.tree.a[4][2].txt] Julgados pelo mesmo órgão; interrompem o prazo dos outros recursos (arts. 1.022 a 1.026). Protelatórios: multa de até 2%, e até 10% na reiteração.

## Bloco 2 · table · Rol do agravo de instrumento (art. 1.015)
Origem: procesp3.js:54
- [b2.head[1]] Inciso
- [b2.head[2]] Decisão sobre
- [b2.rows[1][1]] I
- [b2.rows[1][2]] Tutelas provisórias
- [b2.rows[2][1]] II
- [b2.rows[2][2]] Mérito do processo
- [b2.rows[3][1]] III
- [b2.rows[3][2]] Rejeição da convenção de arbitragem
- [b2.rows[4][1]] IV
- [b2.rows[4][2]] Desconsideração da personalidade jurídica
- [b2.rows[5][1]] V
- [b2.rows[5][2]] Rejeição ou revogação da gratuidade
- [b2.rows[6][1]] VI
- [b2.rows[6][2]] Exibição ou posse de documento ou coisa
- [b2.rows[7][1]] VII
- [b2.rows[7][2]] Exclusão de litisconsorte
- [b2.rows[8][1]] VIII
- [b2.rows[8][2]] Rejeição do pedido de limitação do litisconsórcio
- [b2.rows[9][1]] IX
- [b2.rows[9][2]] Intervenção de terceiros
- [b2.rows[10][1]] X
- [b2.rows[10][2]] Efeito suspensivo aos embargos à execução
- [b2.rows[11][1]] XI
- [b2.rows[11][2]] Redistribuição do ônus da prova
- [b2.rows[12][1]] XIII
- [b2.rows[12][2]] Outros casos previstos em lei

## Bloco 3 · juris · Taxatividade mitigada
Origem: procesp3.js:55
- [b3.items[1].court] STJ
- [b3.items[1].year] Tema 988
- [b3.items[1].id] REsp 1.704.520 e 1.696.396
- [b3.items[1].tese] O rol do art. 1.015 é de taxatividade mitigada: cabe agravo fora dele quando houver urgência que torne inútil o julgamento na apelação.

## Bloco 4 · sorter · Cabe agravo de instrumento?
Origem: procesp3.js:56
- [b4.categoria1] Cabe agravo
- [b4.categoria2] Não cabe agora
- [b4.cartao1] Decisão que nega tutela de urgência. → categoria certa: Cabe agravo (art. 1.015, I.)
- [b4.cartao2] Decisão que indefere prova pericial. → categoria certa: Não cabe agora (Fora do rol: preliminar de apelação.)
- [b4.cartao3] Decisão que revoga a gratuidade. → categoria certa: Cabe agravo (V.)
- [b4.cartao4] Decisão que inverte o ônus da prova. → categoria certa: Cabe agravo (XI.)
- [b4.cartao5] Decisão interlocutória no cumprimento de sentença. → categoria certa: Cabe agravo (parágrafo único.)
- [b4.cartao6] Decisão que rejeita a incompetência relativa. → categoria certa: Não cabe agora (Fora do rol, salvo urgência (Tema 988).)

## Bloco 5 · keys · Prazos
Origem: procesp3.js:57
- [b5.items[1][1]] 15
- [b5.items[1][2]] dias úteis
- [b5.items[1][3]] todos os recursos e as contrarrazões (art. 1.003, §5º)
- [b5.items[2][1]] 5
- [b5.items[2][2]] dias úteis
- [b5.items[2][3]] embargos de declaração
- [b5.items[3][1]] 10
- [b5.items[3][2]] dias
- [b5.items[3][3]] recurso inominado nos Juizados

## Teste do módulo
- [quiz1] Decisão que indefere prova testemunhal: → resposta dada como certa: "preliminar de apelação" (alternativas: agravo de instrumento | preliminar de apelação) — explicação: Fora do rol do art. 1.015.
- [quiz2] Acórdão que ofende a Constituição: → resposta dada como certa: "recurso extraordinário" (alternativas: recurso especial | recurso extraordinário) — explicação: CF, art. 102, III.
- [quiz3] Quem julga os embargos de declaração? → resposta dada como certa: "O mesmo órgão que decidiu" (alternativas: O tribunal superior | O mesmo órgão que decidiu) — explicação: art. 1.024.
