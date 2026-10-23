# Correções · tgp-nulidades

Data: 23/10/2026 · Data-base: 22/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **5 aplicadas**, todas `corrigir`: 008, 019, 020, 021 e 022.
- **0 bloqueadas.**
- Nenhum `divergente` no parecer.
- Não mexidos:
  - `não verificável`: 005 (nulidade absoluta "a qualquer tempo") e 023 (teste da citação suprida). Continuam como estão, pela regra geral de 16/10/2026.
  - `confere`: os 11 demais itens com veredito.
  - Conceitos sem veredito: 001, 003, 004, 007 e 015.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/tgp2.js`, aula `nulidades` (linhas 120 a 145; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas.

Nota do Vault: **[NUL]** `Obsidian Vault/Faculdade/3ª Fase/Teoria Geral dos Processos/9. Aula 05-06/Nulidades Processuais.md`. Não é `(C)`: o texto corrigido leva a marca *(C, 23/10/2026)*. As transcrições dos arts. 276, 277, 278 e 282 estão corretas e ficaram intactas, sem ⚖️. A nota não tem diagrama, fluxograma ou quadro; as listas de "Espécies de invalidade" só foram tocadas no item da nulidade relativa.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| tgp-nulidades-008 | tgp2.js:134 (`flips` "As regras do sistema", cartão "Quem causou não alega") | `A parte que deu causa à nulidade não pode pedir sua decretação (art. 276).` | `Quando a lei prescreve forma sob pena de nulidade, a parte que deu causa ao vício não pode requerer sua decretação (art. 276).` | [NUL] linha 40: "A parte que deu causa a nulidade não pode alegar a nulidade." trocada pela redação do parecer, com "(CPC, art. 276)" *(C)*. | Título do cartão mantido. Link mantido. |
| tgp-nulidades-019 | tgp2.js:141 (`wizard` "Devo anular este ato?", 4ª pergunta e seu desfecho "Sim") | Pergunta `Quem alega foi quem deu causa ao vício?`; desfecho `Não pode alegar` / `art. 276.` | Pergunta `A lei prescreve a forma sob pena de nulidade e a parte requerente deu causa ao vício?`; desfecho `Não pode requerer` / `Ela não pode requerer a decretação (art. 276).` | [NUL] linha 40 (mesma correção do 008). | O rótulo do desfecho passou de "Não pode alegar" para "Não pode requerer", para acompanhar a redação sugerida. |
| tgp-nulidades-020 | tgp2.js:141 (mesmo `wizard`, ramo "Não" da 4ª pergunta) | Desfecho direto `Decreta a nulidade` / `O juiz declara os atos atingidos e manda repeti-los ou retificá-los (art. 282). Os atos dependentes também caem (art. 281).` | Nova pergunta `A nulidade foi alegada na primeira oportunidade?` com dois desfechos: **Sim** → `Decreta a nulidade` / `O juiz identifica os atos atingidos e determina as providências para repeti-los ou retificá-los; os subsequentes dependentes ficam sem efeito (arts. 281 e 282).`; **Não** → `Preclusão` / `Há preclusão, salvo nulidade que o juiz deva decretar de ofício ou legítimo impedimento comprovado (art. 278).` | [NUL] nova linha 70, na seção "Consequências", antes da transcrição do art. 282: conferir a preclusão do art. 278 antes de decretar *(C)*. | A redação do parecer foi repartida entre a nova pergunta e os dois desfechos, para o wizard conferir a preclusão antes de decretar. Os demais ramos do wizard não mudaram. |
| tgp-nulidades-021 | tgp2.js:143 (teste, questão 1, enunciado) | `Advogado que causou o vício pode pedir a nulidade?` | `Quando a lei prescreve forma sob pena de nulidade, a parte que deu causa ao vício pode requerer sua decretação?` | [NUL] linha 40 (mesma correção do 008). | Alternativas (Sim, Não), gabarito ("Não") e explicação (art. 276) mantidos. |
| tgp-nulidades-022 | tgp2.js:144 (teste, questão 2, enunciado e explicação) | Enunciado `Nulidade relativa não alegada na primeira oportunidade:`; explicação `art. 278.` | Enunciado `Nulidade relativa não alegada na primeira oportunidade, sem legítimo impedimento comprovado:`; explicação `art. 278. Não pode ser guardada para alegação inicial na apelação nem é decretada de ofício.` | [NUL] linha 27 (nulidade relativa): acrescentado que se alega na primeira oportunidade e que, se não, preclui, salvo legítimo impedimento comprovado (CPC, art. 278) *(C)*. | Alternativas e gabarito ("preclui") mantidos. |

## Plataforma

- `node --check` em `tgp2.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; as redações novas estão em `prototipo/src/js/60-pk-tgp.js` (uma ocorrência de cada, conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `60-pk-tgp.js`: sem erro.
- `git diff` de `tgp2.js`: só linhas 134, 141, 143 e 144, dentro da aula `nulidades`.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são de texto e um nó a mais no `wizard`, no formato dos nós existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código, e 005 e 023 seguem `não verificável`. O Orquestrador decide se a marca entra.

## Notado de passagem

- **[NUL] linha 56**: diz que o parágrafo único do art. 278 "foi feito em virtude das nulidades absolutas"; o parágrafo também ressalva o legítimo impedimento, que vale para qualquer nulidade. Fora do parecer; não alterei.
- **[NUL] linha 77** (sob o art. 282, § 1º): "tem que haver prejuízo e ato tem que não atingir sua finalidade" mistura os arts. 277 e 282, § 1º. Fora do parecer; não alterei.
- **[NUL] linha 28**: dá a suspeição do juiz como exemplo de nulidade relativa; não conferido. Fora do parecer; não alterei.
