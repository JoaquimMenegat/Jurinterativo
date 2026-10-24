# Correções · con-coisajulgada

Data: 23/10/2026 · Data-base: 23/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **5 aplicadas**, todas `corrigir`: 005, 010, 018, 020 e 023.
- **0 bloqueadas.**
- Nenhum `divergente` no parecer.
- Não mexidos:
  - `não verificável`: 017 (exemplo da revisão de alimentos) e 021 (taxatividade das hipóteses do art. 966). Continuam como estão, pela regra geral de 16/10/2026.
  - `confere`: os 14 itens. Conceitos sem veredito: os 3 itens.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/conhecimento2.js`, aula `coisajulgada` (linhas 107 a 113; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas, salvo `estado`, corrigida antes nesta mesma rodada (ver `validacao/aulas/con-estado/correcoes.md`). `engine.js` não foi tocado.

Notas do Vault (pasta `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento/8. Aula 11.11/`). Nenhuma é `(C)`: o texto corrigido leva a marca *(C, 23/10/2026)*.

| Sigla | Nota |
|---|---|
| [CJ] | `Da coisa julgada.md` |
| [SCJ] | `Da sentença e da coisa julgada.md` |

As notas não têm diagrama, fluxograma ou quadro, nem julgado, súmula ou citação literal sobre os itens corrigidos. Busquei na pasta da matéria por "prejudicial", "preclusiv", "deduzidas e repelidas", "rescis" e "repropo": só a repropositura aparece no Vault.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-coisajulgada-005 | conhecimento2.js:110 (`vs` "Formal × material", coluna Formal, 3º item) | `Permite repropor a ação` | `A decisão sem mérito permite, em regra, repropor a ação, observadas a correção do vício, quando exigida, e a prova do pagamento ou depósito de custas e honorários. Se o autor der causa a três extinções por abandono, não poderá propor nova ação contra o mesmo réu com o mesmo objeto (art. 486).` | [CJ] linha 6 ("mediante a repropositura de uma ação") e [SCJ] linha 24 ("Há a possibilidade da parte realizar a repropositura da ação"): acrescentada, em cada uma, a frase com as condições e a perempção (CPC, art. 486) *(C)*. O texto anterior das linhas ficou. | "art. 486" virou link `a()`. A coluna Material não foi tocada. |
| con-coisajulgada-010 | conhecimento2.js:111 (`flips` "Limites", cartão "Prejudicial") | `A questão prejudicial decidida expressa e incidentemente também transita se dela depender o mérito, houver contraditório efetivo (não vale na revelia) e o juízo for competente para ela como questão principal (art. 503, §1º).` | `A questão prejudicial decidida expressa e incidentemente faz coisa julgada se dela depender o julgamento do mérito, houver contraditório prévio e efetivo, sem revelia, e o juízo tiver competência em razão da matéria e da pessoa para julgá-la como questão principal. A regra não se aplica se restrições probatórias ou limitações à cognição impedirem aprofundar sua análise (art. 503, §§1º e 2º).` | Sem trecho de origem no Vault. | Link `a()` passou de "art. 503, §1º" para "art. 503, §§1º e 2º". Os itens 011 e 012 (`confere`) estão neste cartão e ficaram cobertos pela redação nova, como diz o parecer. |
| con-coisajulgada-018 | conhecimento2.js:111 (mesmo `flips`, cartão "Eficácia preclusiva") | `Consideram-se deduzidas e repelidas todas as alegações que a parte poderia ter feito (art. 508).` | `Transitada em julgado a decisão de mérito, consideram-se deduzidas e repelidas todas as alegações e defesas que a parte poderia opor ao acolhimento ou à rejeição do pedido (art. 508).` | Sem trecho de origem no Vault. | — |
| con-coisajulgada-020 | conhecimento2.js:112 (`keys` "Para desfazer a coisa julgada", item "2 anos") | `prazo da ação rescisória, do trânsito da última decisão (art. 975)` | `em regra, o prazo da rescisória é de dois anos do trânsito em julgado da última decisão proferida no processo (art. 975). Na hipótese de prova nova, conta-se da descoberta, observado o limite de cinco anos do trânsito. Em caso de simulação ou colusão, conta-se da ciência para o terceiro prejudicado e o MP que não interveio. O vencimento prorroga-se ao primeiro dia útil nas hipóteses do art. 975, §1º` | Sem trecho de origem no Vault. | Inicial minúscula e sem ponto final, como os outros textos de `keys`. Mantive o link "art. 975" logo após a regra geral e linkei "art. 975, §1º". O item "966" (021, `não verificável`) e a questão 3 do teste ("2 anos", `confere`) não foram tocados. |
| con-coisajulgada-023 | conhecimento2.js:113 (teste, questão 2: enunciado e explicação) | Enunciado `A sentença pode prejudicar terceiro que não participou?`; explicação `art. 506.` | Enunciado `A coisa julgada pode prejudicar terceiros?`; explicação `A sentença faz coisa julgada entre as partes, sem prejudicar terceiros (art. 506).` | Sem alteração: [CJ] linha 18 já fala da coisa julgada ("A coisa julgada não prejudica terceiros que não integraram ao processo"). | Alternativas (`Sim`, `Não`) e gabarito (`Não`) mantidos. |

## Plataforma

- `node --check` em `conhecimento2.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/61-pk-conhecimento.js` (conferida por busca de trechos de 005, 010, 018, 020 e 023). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `61-pk-conhecimento.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada. A aula não tem linha "Validada em" no código (nenhuma aula tem), e 017 e 021 seguem `não verificável` (mantidos pela regra geral, com pendência para o Joaquim). O Orquestrador decide se a marca entra.

## Notado de passagem

- **[CJ] linha 21**: "Somente o dispositivo faz coisa julgada." Não menciona a extensão à questão prejudicial (CPC, art. 503, §1º), tratada em 010. A aula não repete essa frase; não alterei.
- **[SCJ] linha 30**: diz que repropor ação já julgada com coisa julgada material leva ao "indeferimento da própria petição inicial". O efeito apontado em 008 (`confere`) é a extinção sem resolução do mérito (arts. 337, §4º, e 485, V). Fora do parecer; não alterei.
- **[CJ] linha 6**: chama a coisa julgada formal de "tão somente um conceito doutrinário". Não conferido; fora do parecer.
