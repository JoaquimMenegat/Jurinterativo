# Correções · con-sentenca

Data: 24/10/2026 · Data-base: 23/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **13 aplicadas**, todas `corrigir`: 004, 009, 023, 024, 026, 029, 033, 034, 038, 040, 041, 042 e 045.
- **0 bloqueadas.**
- Nenhum `divergente` nem `citação doutrinária` no parecer.
- Não mexidos:
  - `não verificável`: 019 (Súmula 240 no cartão "Abandono") e 047 (Súmula 240 na explicação do teste 1). Continuam como estão, pela regra geral de 16/10/2026; o parecer os lista em "Para o Joaquim decidir", e não há `decisoes.md`.
  - `confere`: os 31 itens. Conceitos sem veredito: 030, 031 e 032.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/conhecimento2.js`, aula `sentenca` (linhas 94 a 105; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas, salvo `saneamento`, `aij` e `tutelas`, corrigidas antes nesta rodada. `engine.js` não foi tocado.

Nota do Vault: `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento/8. Aula 11.11/Da sentença e da coisa julgada.md` ([SEN]). Não é `(C)`: o texto corrigido entrou em linhas novas, abaixo do trecho de origem, com a marca *(C, 24/10/2026)*. Os números de linha abaixo são os de depois da inserção.

- As listas de [SEN] que funcionam como quadro (hipóteses do art. 485, "Elementos da sentença", "Petitas", "Art. 495") receberam as linhas *(C)* dos itens correspondentes.
- A transcrição literal do art. 492 (linhas 72 e 73) está correta e ficou intacta, sem ⚖️.
- A linha 26 já tinha uma correção *(C, 23/10/2026)* sobre a repropositura (rodada de con-coisajulgada); ficou como estava, e a linha nova 27 acrescenta as hipóteses de 023 e a prova do § 2º de 024.
- 040 e 045: sem trecho de origem no Vault (busca por "remessa", "salários mínimos", "erro material" e "inexatid" na pasta da matéria).

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-sentenca-004 | conhecimento2.js:97 (`vs` "Terminativa × definitiva", coluna Sem mérito, 2º item) | `Paralisação por mais de 1 ano por negligência das partes` | `Paralisação por mais de 1 ano por negligência das partes, após intimação pessoal para suprir a falta em 5 dias úteis (art. 485, II e §1º; art. 219)` | [SEN] nova linha 11, abaixo da linha 10 ("II - Por negligência das partes, o processo ficar parado por mais de um ano"): redação do parecer *(C)*. | Novos links `a()`. Os outros itens da coluna não têm citação; a deste ficou por vir na redação sugerida. |
| con-sentenca-009 | conhecimento2.js:97 (mesma coluna, 7º item) | `Convenção de arbitragem` | `Acolhimento da alegação de convenção de arbitragem ou reconhecimento da competência pelo juízo arbitral (art. 485, VII)` | [SEN] nova linha 18, abaixo da linha 17 ("VII - quando acolher alegação de existência de convenção de arbitragem"): redação do parecer *(C)*. | Novo link `a()` "art. 485, VII". |
| con-sentenca-023 | conhecimento2.js:98 (`flips` "Detalhes das terminativas", cartão "Repropositura", 2ª frase) | `Na litispendência e nos casos de inépcia, pressupostos, condições e arbitragem, só corrigindo o vício (art. 486, §1º);` | `Na litispendência e nos casos de indeferimento da inicial, falta de pressupostos processuais, ilegitimidade ou falta de interesse e arbitragem, a nova ação depende da correção do vício (art. 486, §1º).` | [SEN] nova linha 27, abaixo da linha 26 (repropositura): redação do parecer *(C)*, junto com 024. | A 1ª frase ("Possível, salvo perempção e coisa julgada.") ficou. |
| con-sentenca-024 | conhecimento2.js:98 (mesmo cartão, fim) | `sempre pagando custas e honorários (§2º).` | `Para o despacho da nova inicial, exige-se prova do pagamento ou do depósito das custas e dos honorários de advogado (§2º).` | [SEN] mesma linha 27. | "§2º" passou a link `a()`, como o "§1º" do mesmo cartão. |
| con-sentenca-026 | conhecimento2.js:99 (`steps` "Elementos da sentença", etapa "Relatório") | `Nomes das partes, resumo do pedido e da contestação, registro das principais ocorrências.` | `Nomes das partes, identificação do caso, resumo do pedido e da contestação e registro das principais ocorrências do processo.` | [SEN] nova linha 50, abaixo da linha 49 ("O juiz vai resumir todo o processo..."): redação do parecer *(C)*. | Referência `inciso I` mantida. |
| con-sentenca-029 | conhecimento2.js:99 (mesmo `steps`, etapa "Dispositivo", 2ª frase) | `É a parte que transita em julgado.` | `A coisa julgada material alcança a questão principal expressamente decidida e pode abranger questão prejudicial, nos requisitos e limites do art. 503, §§1º e 2º. Motivos e verdade dos fatos não fazem coisa julgada (art. 504).` | [SEN] nova linha 57, abaixo da linha 56 ("É a única parte mutável, é o que cria 'força de lei' entre as partes"): redação do parecer *(C)*. | 1ª frase ("Resolve as questões principais.") e referência `inciso III` mantidas. Novos links `a()`. |
| con-sentenca-033 | conhecimento2.js:101 (`sorter` "Que vício tem a sentença?", caso 1, retorno) | `Foi além do pedido: reduz-se ao limite.` | `Ultra petita, por exceder o limite quantitativo do pedido (art. 492). O excesso pode ser decotado se isso não causar prejuízo às partes; havendo prejuízo, cabe anulação (STJ, REsp 2.035.370/DF).` | [SEN] nova linha 80, abaixo da linha 79 ("Ultra petita - o juiz aumenta o que foi pedido"): exemplo e redação do parecer *(C)*. | Enunciado do caso e categoria certa (Ultra petita) mantidos. O motor mostra o retorno depois de "Certo.". Teste 3 (`confere`) não tocado. |
| con-sentenca-034 | conhecimento2.js:102 (mesmo `sorter`, caso 2, retorno) | `Decidiu fora do pedido: nula nessa parte.` | `Extra petita, por decidir fora do pedido (art. 492). Admite-se decote sem prejuízo às partes; havendo prejuízo, anula-se integralmente o julgado (STJ, REsp 2.035.370/DF).` | [SEN] nova linha 83, abaixo da linha 82 ("Extra petita - o juiz concede um pedido extemporâneo"): exemplo e redação do parecer *(C)*. | Enunciado e categoria certa (Extra petita) mantidos. |
| con-sentenca-038 | conhecimento2.js:104 (`chooser` "Outras regras", opção "Quantia certa") | `Fixa a extensão da obrigação, o índice de correção, a taxa e o termo inicial dos juros e a capitalização (art. 491).` | `Na obrigação de pagar quantia, a decisão define extensão, índice de correção, taxa de juros, termo inicial de ambos e periodicidade da capitalização, se cabível. Se o montante não puder ser determinado ou depender de prova demorada ou excessivamente dispendiosa, cabe liquidação (art. 491).` | [SEN] nova linha 70, abaixo da lista "Na sentença de pagamento de quantia certa" (linhas 65 a 69): redação do parecer *(C)*. | Rótulo e subtítulo ("Tudo explicitado") mantidos. |
| con-sentenca-040 | conhecimento2.js:104 (mesmo `chooser`, opção "Depois de publicada": subtítulo e texto) | Subtítulo `Só erro material ou embargos`; texto `art. 494.` | Subtítulo `Correção ou embargos, salvo retratação`; texto `Publicada a sentença, o juiz pode corrigir inexatidões materiais ou erros de cálculo e alterá-la por embargos de declaração (art. 494), ressalvadas as hipóteses legais de retratação.` | Sem trecho de origem no Vault. | O subtítulo dizia "Só", que o parecer aponta como erro; foi ajustado para não contradizer o texto. Rótulo mantido. |
| con-sentenca-041 | conhecimento2.js:104 (mesmo `chooser`, opção "Hipoteca judiciária", 1ª frase) | `A sentença condenatória vale como título para hipoteca, mesmo sem trânsito e sem urgência.` | `A decisão que condena ao pagamento em dinheiro ou converte outra obrigação em prestação pecuniária vale como título para hipoteca judiciária, sem exigir trânsito em julgado ou demonstração de urgência.` | [SEN] nova linha 87, abaixo da linha 86 ("Hipoteca judiciária nada mais é que..."): redação do parecer *(C)*. | Subtítulo ("Garantia imediata") mantido. |
| con-sentenca-042 | conhecimento2.js:104 (mesma opção, 2ª frase) | `O credor informa o registro ao juízo em 15 dias e responde objetivamente se a sentença cair (art. 495).` | `Quem realiza a hipoteca informa o ato ao juízo em até 15 dias úteis, contados da sua realização, excluído o dia do começo (arts. 219 e 224), e responde objetivamente se a sentença cair (art. 495).` | [SEN] nova linha 89, abaixo da linha 88 ("Após, a parte informa ao juízo no processo, no prazo de 15 dias."): redação do parecer *(C)*. | A parte "responde objetivamente se a sentença cair" (item `confere`) ficou, com o link `a()` "art. 495". Novo link "arts. 219 e 224". |
| con-sentenca-045 | conhecimento2.js:104 (mesmo `chooser`, opção "Remessa necessária") | `Sobe ao tribunal sem recurso, salvo abaixo de 1.000 salários mínimos (União), 500 (Estados e capitais) ou 100 (demais municípios), ou se fundada em súmula ...` | `Sobe ao tribunal sem recurso. Dispensa-se a remessa quando a condenação ou o proveito econômico for certo e líquido e inferior a 1.000 salários mínimos para a União; 500 para Estados, DF e Municípios capitais; e 100 para os demais Municípios, observada a inclusão das respectivas autarquias e fundações de direito público no §3º. Também não há remessa se a sentença for fundada em súmula ...` | Sem trecho de origem no Vault. | A parte do § 4º (súmula, repetitivo, IRDR, IAC, orientação vinculante) e o link "art. 496, §§3º e 4º" ficaram; só a ligação da frase mudou ("Também não há remessa se a sentença for fundada"). |

## Plataforma

- `node --check` em `conhecimento2.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/61-pk-conhecimento.js` (conferida por busca de "2.035.370"). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `61-pk-conhecimento.js`: sem erro.
- Conferi no `engine.js` que o retorno do `sorter` usa `innerHTML`, então os links `a()` de 033 e 034 aparecem.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código (mesmo critério das aulas anteriores do arquivo). 019 e 047 continuam `não verificável`.

## Notado de passagem

- **Cartão "Retratação"** (`Na apelação, o juiz pode se retratar em 5 dias (§7º).`): sem "úteis". O item não está no parecer como `corrigir`.
- **[SEN] linha 63** ("passível de agravo de embargos de declaração") e **linha 56** ("É a única parte mutável"): redação confusa na nota de origem; fora dos itens do parecer, exceto pela linha *(C)* 57 sobre o dispositivo.
- **[SEN] linha 81** ("Citra petita - o juiz concede menos do que foi pedido"): a aula trata a citra petita como omissão (caso 3, `confere`); a nota não foi alterada.
