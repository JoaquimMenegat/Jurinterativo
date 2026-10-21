# Reconferência — tgp-jurisdicao

Data-base: **20/10/2026**. Conferência restrita aos textos fornecidos, sem pesquisa externa.

Resultado: **aprovada**.

| ID | Correção aplicada? | Lugar certo? | Entorno sem erro novo? | Vault registrado? | Observação |
|---|---|---|---|---|---|
| tgp-jurisdicao-005 | ok | ok | ok | ok | `b2.rows[1][2]` reproduz a correção da investidura, incluindo outras formas constitucionais de provimento. `b2.rows[1][3]` indica os arts. 93, I, e 94 da CF. Não há teste dependente. Registro no Vault em [PIJ] e [TGP], com conteúdo compatível. |
| tgp-jurisdicao-016 | ok | ok | ok | ok | `b3.r.i[3]` exige decisão de mérito não mais sujeita a recurso e cita o art. 502 do CPC. A localização sob `b3.r.t` preserva o contexto da jurisdição contenciosa. Não foi identificada inconsistência nova nos demais blocos ou testes. Registro compatível no Vault em [JE]. |
| tgp-jurisdicao-020 | ok | ok | ok | ok | `b4.items[2][2]` remove a restrição “por acordo”. `b4.items[2][3]` reproduz as modalidades e o dever estatal conforme o parecer, com os artigos indicados. O entorno e os testes permanecem compatíveis. Registros no Vault em [ACA] e [TGP] com a redação do parecer. |

## Mudanças fora do parecer

Nenhuma registrada em `correcoes.md`. O ajuste do subtítulo em `b4.items[2][2]` integra a execução da correção de tgp-jurisdicao-020.

Os itens não verificáveis tgp-jurisdicao-004 (`b1.items[3][2]`) e tgp-jurisdicao-013 (`b3.l.i[4]`) foram preservados. As questões preexistentes apontadas em “Notado de passagem” não foram alteradas e não constituem erro novo criado pelas correções.

A conferência do Vault limita-se aos registros de `correcoes.md`, conforme as instruções do papel.

