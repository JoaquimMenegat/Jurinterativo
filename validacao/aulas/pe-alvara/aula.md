# pe-alvara — Alvará judicial

Origem: procesp2.js:56 · grupo: Juizados e jurisdição voluntária
Itens listados: 32


## Introdução
- [intro] Alvará é autorização judicial. Serve, entre outras coisas, para levantar pequenos valores deixados por quem morreu, sem inventário.

## Bloco 1 · calc · Cabe alvará?
Origem: procesp2.js:59
- [b1.calculadora] Calculadora "{"kind":"alvara","hint":"Marque a situação."}": a regra está em engine.js (CALC)
- [b1.kind] alvara
- [b1.hint] Marque a situação.

## Bloco 2 · vs · Os dois artigos da Lei 6.858/80
Origem: procesp2.js:60
- [b2.l.t] Art. 1º
- [b2.l.i[1]] FGTS, PIS-PASEP e verbas trabalhistas
- [b2.l.i[2]] Independe de inventário, mesmo havendo outros bens (CPC, art. 666)
- [b2.l.i[3]] Sem limite de valor
- [b2.l.i[4]] Primeiro os dependentes habilitados no INSS; na falta, os sucessores civis
- [b2.r.t] Art. 2º
- [b2.r.i[1]] Restituição de tributos, saldos bancários, poupança e fundos
- [b2.r.i[2]] Só se não houver outros bens a inventariar (discute-se se a condição alcança as restituições de tributos)
- [b2.r.i[3]] Até 500 OTN

## Bloco 3 · table · Na prática
Origem: procesp2.js:61
- [b3.head[1]] Tema
- [b3.head[2]] Regra
- [b3.rows[1][1]] Natureza
- [b3.rows[1][2]] Jurisdição voluntária (CPC, art. 725, VII)
- [b3.rows[2][1]] Custas
- [b3.rows[2][2]] Devidas
- [b3.rows[3][1]] Réu
- [b3.rows[3][2]] Em regra não há
- [b3.rows[4][1]] Justiça
- [b3.rows[4][2]] Estadual (Súmula 161 do STJ)
- [b3.rows[5][1]] Foro
- [b3.rows[5][2]] Não há regra expressa; na prática, admite-se o domicílio do requerente. Competência territorial e relativa, sem declinação de ofício
- [b3.rows[6][1]] Inicial
- [b3.rows[6][2]] Origem e valor do crédito, óbito, vínculo, certidões de inexistência de dependentes e de testamento, todos os herdeiros no polo ativo
- [b3.rows[7][1]] Menores
- [b3.rows[7][2]] Quotas depositadas em poupança até a maioridade (Lei 6.858/80, art. 1º, §1º)

## Teste do módulo
- [quiz1] FGTS do falecido com imóvel a inventariar pode sair por alvará? → resposta dada como certa: "Sim" (alternativas: Sim | Não) — explicação: Art. 1º da Lei 6.858/80.
- [quiz2] Saldo de poupança acima de 500 OTN sai por alvará? → resposta dada como certa: "Não" (alternativas: Sim | Não) — explicação: Art. 2º.
- [quiz3] O alvará serve para provar união estável controvertida? → resposta dada como certa: "Não" (alternativas: Sim | Não) — explicação: Exige ação contenciosa.
