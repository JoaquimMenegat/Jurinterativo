# Correções · tgp-competencia

Data: 21/10/2026 · Data-base: 20/10/2026.
Entrada: `parecer.md` (já com a `conferencia-devolucoes.md` aplicada pelo Comparador). Sem `decisoes.md`.

## Resumo

- **9 aplicadas**, todas `corrigir`: 006, 008, 009, 024, 027, 028, 030, 034 e 037 (a única de gravidade alta).
- **0 bloqueadas.**
- Nenhum `divergente` no parecer.
- Não mexidos:
  - `não verificável`: 013 e 036. Continuam como estão, pela regra geral de 16/10/2026 (o parecer também sugere manter).
  - `confere`: os 25 demais itens com veredito.
  - Conceitos sem veredito: 004, 007 e 025.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/tgp.js`, aula `competencia` (linhas 146 a 166; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas.

Nota do Vault: **[CAR]** `Obsidian Vault/Faculdade/3ª Fase/Teoria Geral dos Processos/4. Aula 13-03/Competência absoluta e relativa.md`. Não é `(C)`: o texto corrigido leva a marca *(C, 21/10/2026)*. As linhas abaixo são as do arquivo depois da correção (um parágrafo novo entrou na linha 18). A nota não tem diagrama, fluxograma ou quadro. `5. Aula 27-03/Prorrogação.md`, linha 9 (Súmula 33), trata só da incompetência relativa e não contraria 037; ficou intacta.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| tgp-competencia-006 | tgp.js:149 (`vs` "Os critérios", coluna "Relativa", 2º item) | `Valor da causa` | `Valor da causa: em regra, competência relativa (art. 63). Nos Juizados Especiais Federais e da Fazenda Pública, a competência é absoluta onde instalados, dentro das hipóteses legais (Lei 10.259/2001, art. 3º, § 3º; Lei 12.153/2009, art. 2º, § 4º)` | [CAR] linha 12: acrescentada a mesma regra, com as três citações *(C)*. | Citações com link (`a()`), como no item "Território". "CPC, art. 63" ficou "art. 63", no padrão da coluna. |
| tgp-competencia-008 | tgp.js:149 (mesmo `vs`, 4º item da coluna "Relativa") | `Exceção: território absoluto em imóveis e possessórias (art. 47)` | `Exceção: território absoluto nas possessórias imobiliárias e foro obrigatório da situação do imóvel nas hipóteses do art. 47, § 1º. Nas demais ações reais imobiliárias, cabe a opção prevista nesse parágrafo (art. 47)` | [CAR] linha 18: parágrafo novo com a exceção, depois do parágrafo sobre territorialidade *(C)*. | Link do `art. 47` mantido. O cartão 4 do `sorter` (possessória, art. 47, § 2º, `confere`) não mudou. |
| tgp-competencia-009 | tgp.js:151 (`chooser` "O regime na prática", opção "Quem alega?", resumo) | `Absoluta: qualquer um, o juiz de ofício. Relativa: só o réu.` | `Absoluta: as partes e o MP, nos limites de sua atuação; o juiz a declara de ofício. Relativa: o réu e o MP nas causas em que atuar (CPC, arts. 64 e 65).` | [CAR] linha 16: acrescentado quem alega cada uma, com os arts. 64 e 65 *(C)*. | A explicação da mesma opção não mudou (já cita o MP); a frase da Súmula 33 nela é do 013 (`não verificável`) e ficou. Citação do resumo em texto simples, como nos outros resumos do `chooser`. |
| tgp-competencia-024 | tgp.js:154 (mesmo `chooser`, opção "Efeito da declaração", explicação) | `Declarada a incompetência, os autos vão ao juízo competente, e as decisões do incompetente conservam efeitos até outra decisão (art. 64, §§3º e 4º).` | `Declarada a incompetência, os autos vão ao juízo competente. Salvo decisão judicial em contrário, conservam-se os efeitos das decisões anteriores até que o juízo competente profira outra, se for o caso (art. 64, §§3º e 4º).` | Sem trecho de origem no Vault (a nota não trata do efeito da declaração). | Resumo "Remessa ao juízo competente." mantido. Link mantido. |
| tgp-competencia-027 | tgp.js:157 (`sorter` "Absoluta ou relativa?", cartão 2: texto e explicação) | `Cobrança proposta fora do domicílio do réu.` · `Critério territorial (art. 46).` | `Cobrança proposta fora do domicílio do réu, sem outro foro legalmente competente.` · `Critério territorial (CPC, arts. 46, 63 e 65).` | Sem trecho de origem no Vault (cartão sem nota correspondente). | Categoria certa (Relativa) mantida. A citação da redação sugerida foi para a explicação, como nos outros cartões. |
| tgp-competencia-028 | tgp.js:158 (mesmo `sorter`, cartão 3) | `União é ré, e a ação corre na Justiça Estadual.` · `Critério de pessoa (CF, art. 109, I).` | `União é ré em causa abrangida pelo art. 109, I, da CF, fora de suas exceções, e a ação corre na Justiça Estadual.` · `Critério de pessoa (CF, art. 109, I; CPC, art. 62).` | [CAR] linha 28 (item "Pessoa"): acrescentado que a competência federal pela pessoa vale para o art. 109, I, fora das exceções, com os arts. 45 e 62 do CPC *(C)*. | Categoria certa (Absoluta) mantida. |
| tgp-competencia-030 | tgp.js:160 (mesmo `sorter`, cartão 5) | `Contrato com foro de eleição em Joaçaba; ação proposta em Chapecó.` · `Eleição de foro é critério territorial.` | `Contrato com eleição de foro eficaz em Joaçaba; ação proposta em Chapecó, sem outro foro autorizado e sem caracterizar juízo aleatório.` · `Eleição de foro é critério territorial (CPC, arts. 63 e 65).` | Sem trecho de origem no Vault (cartão sem nota correspondente). | Categoria certa (Relativa) mantida. Citação na explicação. |
| tgp-competencia-034 | tgp.js:162 (`keys` "Números que caem em prova", 1º item) | `teto do Juizado Especial Cível estadual (Lei 9.099/95, art. 3º)` | `limite de competência do Juizado Especial Cível estadual pelo critério do valor da causa (Lei 9.099/95, art. 3º, I), observadas as demais hipóteses e exclusões legais` | [CAR] linha 14: acrescentado, depois de "40 salários mínimos vigentes", "(limite pelo critério do valor da causa, Lei 9.099/1995, art. 3º, I, observadas as demais hipóteses e exclusões legais)" *(C)*. | "JEC" da redação sugerida ficou por extenso, como no original. O item dos 60 salários mínimos não está no parecer como correção e não mudou. |
| tgp-competencia-037 | tgp.js:164 (`quiz`, questão 1: enunciado e explicação) | Pergunta: `O juiz pode declarar de ofício a incompetência territorial?` · Explicação: `Súmula 33 do STJ; exceções no CPC, art. 63, §§3º e 5º (Lei 14.879/2024).` | Pergunta: `O juiz pode declarar de ofício a incompetência territorial relativa?` · Explicação: `CPC, arts. 337, § 5º, e 63, §§ 3º e 5º. Se a competência territorial for absoluta, o juiz deve declarar a incompetência de ofício (arts. 47, § 2º, e 64, § 1º).` | Sem trecho de origem no Vault (questão do teste). A única frase próxima ([Prorrogação] linha 9) já fala só da incompetência relativa. | Alternativas e gabarito (índice 1) mantidos. Com a pergunta restrita à relativa, "Sim" e "Só em segundo grau" ficam erradas e só a 2ª alternativa é correta. A explicação segue a redação sugerida: a Súmula 33 saiu dela (036 segue `não verificável` e o parecer pede não depender da pesquisa sumular). |

## Plataforma

- `node --check` em `tgp.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; as nove redações novas estão em `prototipo/src/js/60-pk-tgp.js` (uma ocorrência de cada, conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `60-pk-tgp.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto em blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código, e 013 e 036 seguem `não verificável` (mantidos pela regra geral). O Orquestrador decide se a marca entra.

## Notado de passagem

- **[CAR] linha 28**: "são os casos onde a União e o estado são autores ou réus … julgado em instâncias federais": o estado-membro não atrai a Justiça Federal (CF, art. 109, I). Fora do parecer; não alterei.
- **[CAR] linha 29**: o exemplo de "competência ambiental … o TRF é absolutamente competente" mistura primeiro e segundo grau. Fora do parecer; não alterei.
- **[CAR] linha 22**: "sob pena de nulidade processual"; o CPC fala em remessa ao juízo competente e conservação dos efeitos (art. 64, §§ 3º e 4º). Fora do parecer; não alterei.
- **tgp.js:162**, item dos 60 salários mínimos ("teto dos Juizados Federais e da Fazenda Pública"): tem o mesmo problema de alcance apontado em 034. Não está no parecer como correção; não alterei.
