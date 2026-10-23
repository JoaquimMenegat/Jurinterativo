# Correções · tgp-valor

Data: 23/10/2026 · Data-base: 22/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **3 aplicadas**, todas `corrigir`: 002, 010 e 021.
- **0 bloqueadas.**
- Nenhum `divergente` nem `não verificável` no parecer.
- Não mexidos: os 22 itens `confere`.

Material:
- `prototipo/pacotes/inciso-materiais/src/conteudo/tgp2.js`, aula `valor` (linhas 148 a 168; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas nesta correção.
- `prototipo/pacotes/inciso-materiais/src/engine.js`, calculadora `CALC.valorcausa` (linha 84, só o texto fixo do resultado). A calculadora é usada só nesta aula (`kind:'valorcausa'`, tgp2.js:151).

Nota do Vault: **[VAL]** `Obsidian Vault/Faculdade/3ª Fase/Teoria Geral dos Processos/10. Aula 12-06/1. Valor da causa - Art. 292.md`. Não é `(C)`: o texto corrigido leva a marca *(C, 23/10/2026)*. A transcrição do art. 292, § 3º (linha 62) já está correta e ficou intacta, sem ⚖️. A nota não tem diagrama, fluxograma ou quadro; a lista "Efeitos do valor da causa" (linhas 15 a 19) é o único trecho tocado.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| tgp-valor-002 | tgp2.js:149 (`intro`, 2ª frase) | `Ele define custas, honorários, competência dos Juizados e até o cabimento de alguns atos.` | `Ele repercute nas custas e pode servir de base aos honorários, quando não for possível mensurar o proveito econômico, observadas as regras do art. 85. Também define a competência dos Juizados e até o cabimento de alguns atos.` | [VAL] linhas 17 e 18: "Define as custas processuais" → "Repercute nas custas processuais"; "Determina os honorários advocatícios sucumbenciais" → "Pode servir de base aos honorários advocatícios sucumbenciais, quando não for possível mensurar o proveito econômico, observadas as regras do art. 85 do CPC" *(C)*. | A parte da frase sobre Juizados e cabimento de atos (003 e 004, `confere`) foi mantida, em frase própria. |
| tgp-valor-010 | engine.js:84 (`CALC.valorcausa`, texto do resultado) | `Se não passar de 40 salários mínimos, cabe opção pelo Juizado (Lei 9.099/95, art. 3º).` | `Valor de até 40 salários mínimos atende ao critério do art. 3º, I, da Lei 9.099/1995. O acesso ao Juizado Especial Cível estadual depende também dos demais requisitos legais. Causas de natureza alimentar estão excluídas (art. 3º, § 2º).` | [VAL] linha 19 (competência): o exemplo "causas menores que 40 salários mínimos vão pro juizado especial" trocado pelo critério do art. 3º, I, com os demais requisitos e a exclusão das causas alimentares (art. 3º, § 2º) *(C)*. | Mantido o `<span class="art-ref">`. O cálculo não mudou. `node validacao/ferramentas/testar_calculadoras.js`: todas as verificações passaram; o teste não confere esse texto, então não precisou de ajuste. |
| tgp-valor-021 | tgp2.js:163 (`flips` "Ajustes e controle", cartão "Correção de ofício") | `O juiz corrige por arbitramento quando o valor não corresponder ao proveito econômico, e manda complementar custas (§3º).` | `O juiz corrige de ofício, por arbitramento, o valor que não corresponda ao conteúdo patrimonial em discussão ou ao proveito econômico perseguido pelo autor, com recolhimento das custas correspondentes (§3º).` | [VAL] linha 62: transcrição do art. 292, § 3º, já correta; sem mudança. | Link do "§3º" mantido. |

## Plataforma

- `node --check` em `tgp2.js` e `engine.js`: sem erro.
- `node validacao/ferramentas/testar_calculadoras.js`: todas as verificações passaram.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: as redações novas estão em `prototipo/src/js/60-pk-tgp.js` (002 e 021) e em `prototipo/src/js/54-pk-engine.js` (010), uma ocorrência de cada. A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `60-pk-tgp.js` e `54-pk-engine.js`: sem erro.
- `git diff`: em `tgp2.js`, só as linhas 149 e 163 nesta aula; em `engine.js`, só a linha 84.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código. Todos os IDs com veredito estão resolvidos; o Orquestrador decide se a marca entra.

## Notado de passagem

- **[VAL] linha 11**: diz que o rol do art. 292 é "meramente taxativo, podendo ser modificado"; a frase se contradiz. Fora do parecer; não alterei.
- **[VAL] linha 23** (inciso II): a explicação não corresponde ao texto do inciso (existência, validade, cumprimento etc. de ato jurídico). Fora do parecer; não alterei.
- **[VAL] linha 64**: afirma que, fora da contestação, o réu "somente poderá impugnar a validade da obrigação"; o art. 292, § 3º, ainda permite a correção de ofício. Fora do parecer; não alterei.
