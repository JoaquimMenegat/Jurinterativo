# Correções · con-rito

Data: 23/10/2026 · Data-base: 22/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **3 aplicadas**, todas `corrigir`: 006, 009 e 013.
- **0 bloqueadas.**
- Nenhum `divergente`, `não verificável` ou `citação doutrinária` no parecer.
- Não mexidos: os 12 `confere` e 012 (`conceito`, sem veredito).

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/conhecimento.js`, aula `rito` (linhas 7 a 30 depois da correção; o SVG ganhou uma linha, então o arquivo passou a ter uma linha a mais a partir da 27). As outras aulas do arquivo não foram tocadas. `engine.js` não foi tocado.

Notas do Vault (pasta `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento/`). Nenhuma é `(C)`: o texto corrigido leva a marca *(C, 23/10/2026)*.

| Sigla | Nota |
|---|---|
| [INI] | `1. Aula 12.08/Art. 319 - da petição inicial.md` |
| [CON] | `3. Aula 02.09/Contestação.md` |
| [REC] | `4. Aula 09.09/Reconvenção.md` |

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-rito-006 | conhecimento.js:14 (`steps` "Da inicial à sentença", etapa "Contestação e reconvenção") | Texto `Toda a defesa do réu, numa só peça.`; referência `arts. 335 a 343` | Texto `Contestação: concentra a defesa do réu. Reconvenção: pedido próprio, que pode ser apresentado na contestação ou independentemente dela.`; referência `arts. 335 a 343 (336 e 343, § 6º)` | Sem alteração. [CON] linha 51 ("Toda a defesa do réu está concentrada na contestação.") não trata a reconvenção como defesa e está de acordo com o art. 336. [REC] linhas 5 e 6 já dizem que a reconvenção vem, em regra, com a contestação e pode ser proposta sem ela. | A citação "(arts. 336 e 343, § 6º)" da redação sugerida foi para o campo de referência da etapa, mantendo o intervalo original. Título da etapa mantido. |
| con-rito-009 | conhecimento.js:17 (mesmo `steps`, etapa "Instrução", campo de referência) | `arts. 358 a 368` | `arts. 358 a 368 e 369 a 484` | Sem trecho de origem no Vault (busca por "358" e "369" na pasta da matéria). | Texto da etapa mantido, como manda o parecer. |
| con-rito-013 | conhecimento.js:26 e 27 (`svg` "As fases em uma linha", legenda do topo) | Uma legenda: `depois: liquidação e cumprimento de sentença` (y=30) | Duas legendas: `depois: liquidação, quando necessária, e cumprimento, conforme a obrigação reconhecida (arts. 509 e 513)` (y=22) e `a decisão parcial de mérito também pode ser liquidada ou executada desde logo (art. 356, §§ 2º a 4º)` (y=40) | [INI] nova linha 29, abaixo da lista de fases (linhas 25 a 28, "Liquidação: determina os valores…", "Cumprimento", "Execução"): liquidação só quando necessária (art. 509), cumprimento conforme a obrigação (art. 513) e liquidação ou execução da decisão parcial (art. 356, §§ 2º a 4º) *(C)*. A lista é o "fluxograma" da nota; as linhas originais ficaram e a correção entrou como subitem. | A redação sugerida virou duas linhas no SVG, com inicial minúscula, como as outras legendas do diagrama. As duas linhas cabem na largura de 760 do `viewBox` e ficam acima dos círculos (y=64). `aria-label` do SVG mantido (não cita a legenda). |

## Plataforma

- `node --check` em `conhecimento.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/61-pk-conhecimento.js` (conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `61-pk-conhecimento.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código. Todos os IDs estão resolvidos; o Orquestrador decide se a marca entra.

## Notado de passagem

- **[INI] linhas 8 a 12**: diz que só existem três procedimentos e que os especiais e a execução são usados "subsidiariamente". Pelo art. 318, parágrafo único, é o procedimento comum que se aplica subsidiariamente aos demais. A aula (002) está certa; a nota inverte a relação. Fora do parecer; não alterei.
- **[INI] linha 25**: "Decisória: sentença, caso saia a condenação" sugere que só há sentença quando há condenação. Fora do parecer; não alterei.
