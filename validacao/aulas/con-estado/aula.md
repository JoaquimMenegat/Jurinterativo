# con-estado — Julgamento conforme o estado do processo

Origem: conhecimento2.js:15 · grupo: Organização do processo
Itens listados: 29


## Introdução
- [intro] Depois das providências preliminares, o juiz escolhe entre quatro caminhos. Só um deles leva à fase de provas.

## Bloco 1 · wizard · Que caminho o juiz toma?
Origem: conhecimento2.js:18
- [b1.tree.q] Há causa de extinção do art. 485, ou prescrição, decadência ou homologação do art. 487?
- [b1.tree.a[1][1]] Sim
- [b1.tree.a[1][2].end] Extinção do processo
- [b1.tree.a[1][2].txt] art. 354. Se atingir só parte do processo, é decisão interlocutória, impugnável por agravo de instrumento (parágrafo único).
- [b1.tree.a[2][1]] Não
- [b1.tree.a[2][2].q] Ainda é preciso produzir provas sobre todo o objeto?
- [b1.tree.a[2][2].a[1][1]] Não
- [b1.tree.a[2][2].a[1][2].end] Julgamento antecipado do mérito
- [b1.tree.a[2][2].a[1][2].txt] art. 355: não há necessidade de outras provas, ou o réu é revel com efeito material e não pediu provas.
- [b1.tree.a[2][2].a[2][1]] Só sobre parte
- [b1.tree.a[2][2].a[2][2].end] Julgamento antecipado parcial
- [b1.tree.a[2][2].a[2][2].txt] art. 356: um pedido ou parcela incontroverso ou pronto para julgamento. Decisão interlocutória de mérito, agravável (§5º), executável desde logo, sem caução, e que faz coisa julgada.
- [b1.tree.a[2][2].a[3][1]] Sim
- [b1.tree.a[2][2].a[3][2].end] Saneamento e organização
- [b1.tree.a[2][2].a[3][2].txt] art. 357: o juiz organiza a fase de provas.

## Bloco 2 · sorter · Classifique
Origem: conhecimento2.js:19
- [b2.categoria1] Extinção
- [b2.categoria2] Antecipado
- [b2.categoria3] Antecipado parcial
- [b2.categoria4] Saneamento
- [b2.cartao1] As partes fizeram acordo e pedem homologação. → categoria certa: Extinção (art. 487, III, b via art. 354.)
- [b2.cartao2] A causa é só de direito: discute-se a validade de uma cláusula. → categoria certa: Antecipado (art. 355, I.)
- [b2.cartao3] O réu reconheceu o dano material; o dano moral depende de prova. → categoria certa: Antecipado parcial (Parcela incontroversa (art. 356, I).)
- [b2.cartao4] Há versões opostas sobre quem avançou o sinal, e testemunhas a ouvir. → categoria certa: Saneamento (art. 357.)

## Bloco 3 · callout
Origem: conhecimento2.js:24
- [b3.kind] brass
- [b3.title] Decisão parcial de mérito
- [b3.html] É interlocutória pela forma, mas sentença pelo conteúdo: resolve definitivamente parte do mérito. Por isso cabe agravo de instrumento (art. 1.015, II), pode ser liquidada e cumprida desde logo (art. 356, §§2º a 4º) e transita em julgado.

## Teste do módulo
- [quiz1] Contra a decisão de julgamento antecipado parcial cabe: → resposta dada como certa: "agravo de instrumento" (alternativas: apelação | agravo de instrumento) — explicação: art. 356, §5º.
- [quiz2] Causa só de direito permite: → resposta dada como certa: "julgamento antecipado" (alternativas: julgamento antecipado | saneamento obrigatório) — explicação: art. 355, I.
