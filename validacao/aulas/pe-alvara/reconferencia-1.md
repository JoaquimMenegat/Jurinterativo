# Reconferência — pe-alvara

Data-base: 20/10/2026.  
Base: `parecer.md`, `correcoes.md` e `aula-corrigida.md` fornecidos. Sem consulta externa.

Resultado: **refazer — pe-alvara-003, pe-alvara-004, pe-alvara-005 e pe-alvara-007.**

A aula gerada não inclui o conteúdo de `CALC.alvara`: em `[b1.calculadora]`, há apenas uma referência ao `engine.js`. Assim, as quatro correções da calculadora estão registradas pelo Corretor, mas não podem ser confirmadas na extração independente. Isso não demonstra que deixaram de ser aplicadas; exige complementar a extração para concluir a reconferência.

| ID | Correção aplicada? | Lugar certo? | Entorno sem erro novo? | Vault registrado? | Observação |
|---|---|---|---|---|---|
| pe-alvara-003 | refazer | refazer | refazer | ok | `[b1.calculadora]` não mostra o seletor de dependentes nem os resultados dos seus dois estados. Incluir esses textos na extração para confirmar a aplicação e a coerência do seletor. O ajuste correspondente no Vault está registrado junto ao de pe-alvara-011. |
| pe-alvara-004 | refazer | refazer | refazer | ok | `[b1.calculadora]` não contém o resultado sobre a quota do menor. A redação declarada corresponde ao parecer, mas falta confirmação independente. O registro informa que nenhuma nota do Vault trata dessa quota. |
| pe-alvara-005 | refazer | refazer | refazer | ok | `[b1.calculadora]` não expõe opções nem resultados. Além da falta de confirmação independente, `correcoes.md` registra que restituições continuam agrupadas com saldos e sujeitas aos ramos de outros bens e de valor acima do teto. Esse comportamento não acompanha a delimitação determinada pelo parecer. Incluir a extração completa e adequar o alcance da opção de restituições. |
| pe-alvara-007 | refazer | refazer | refazer | ok | O resultado acima do teto não aparece em `[b1.calculadora]`. Segundo `correcoes.md`, ele também continua alcançando a opção que inclui restituições, embora a correção determine uma conclusão sobre saldos. Confirmar o texto na extração independente e corrigir esse alcance. |
| pe-alvara-011 | ok | ok | ok | ok | `[b2.l.i[4]]` corresponde à redação sugerida. A atualização de `[N18]`, linha 52, está registrada com o mesmo conteúdo aplicável. |
| pe-alvara-014 | ok | ok | ok | ok | `[b2.r.i[3]]` usa 500 ORTN e delimita o teto a saldos bancários, poupança e fundos. A atualização da unidade no Vault está registrada. O item pe-alvara-013 foi preservado, conforme determinado. |
| pe-alvara-016 | ok | ok | ok | ok | `[b3.rows[2][2]]` reproduz a regra de adiantamento, rateio, gratuidade e legislação aplicável. O quadro de `[N18]`, linha 29, recebeu conteúdo equivalente. |
| pe-alvara-020 | ok | ok | ok | ok | `[b3.rows[5][2]]` incorpora as duas exceções indicadas no parecer e preserva a primeira frase, relativa a pe-alvara-019. Há registro equivalente em `[N18]` e `[N22]`. |
| pe-alvara-022 | ok | ok | ok | ok | `[b3.rows[7][2]]` inclui juros, correção, idade de 18 anos e as finalidades de disponibilidade antecipada autorizada judicialmente. O registro informa que nenhuma nota do Vault trata da quota de menor. |
| pe-alvara-024 | ok | ok | ok | ok | `[quiz2]` delimita a pergunta ao regime do art. 2º, usa ORTN e mantém gabarito e explicação compatíveis. O registro informa que não há questão correspondente no Vault. |

## Mudanças fora do parecer

Não há mudança autônoma indevida identificada no registro fornecido. As alterações dos rótulos dos seletores e das referências à unidade monetária são ajustes relacionados às correções determinadas.

O ramo de pe-alvara-006 deve permanecer preservado quanto à flexibilização não verificável. A adequação necessária da calculadora deve impedir que a opção de restituições receba conclusões destinadas aos saldos, sem excluir a afirmação não verificável.

