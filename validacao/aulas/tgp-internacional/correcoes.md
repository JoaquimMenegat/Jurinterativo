# Correções · tgp-internacional

Data: 21/10/2026 · Data-base: 20/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **8 aplicadas**, todas `corrigir`: 004, 005, 011, 013, 016, 018, 020 e 023.
- **0 bloqueadas.**
- Nenhum `divergente` nem `não verificável` no parecer.
- Não mexidos:
  - `confere`: 001, 002, 003, 006, 007, 008, 009, 010, 014, 015, 017, 019, 021, 022 e 024.
  - Conceito sem veredito: 012.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/tgp.js`, aula `internacional` (linhas 124 a 143; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas.

Notas do Vault (caminho relativo a `Obsidian Vault/Faculdade/3ª Fase/Teoria Geral dos Processos/4. Aula 13-03/`):
- **[LIM]** `Limites de jurisdição nacional e cooperação internacional.md`
- **[CR]** `Carta rogatória e Precatória.md`
- **[HOM]** `Homologação de decisão estrangeira.md`

Nenhuma é `(C)`: o texto corrigido leva a marca *(C, 21/10/2026)*. As transcrições literais dos arts. 24 e 25 em [LIM] ficaram intactas: já trazem a ressalva dos tratados (art. 24) e a remissão ao art. 63, §§ 1º a 4º (art. 25, § 2º), e não contrariam a correção; por isso não levaram ⚖️. As notas não têm diagrama, fluxograma ou quadro sobre esses pontos.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| tgp-internacional-004 | tgp.js:127 (`vs` "Concorrente × exclusiva", coluna esquerda, 4º item) | `Alimentos com credor domiciliado aqui; relações de consumo com consumidor aqui` | `Alimentos: credor com domicílio ou residência no Brasil, ou réu com vínculos no país, como bens, renda ou benefícios econômicos. Consumo: consumidor com domicílio ou residência no Brasil (art. 22, I e II)` | Sem trecho de origem no Vault: as notas não listam as hipóteses dos arts. 21 e 22 (busca por "alimentos" e "consumidor" sem resultado na pasta). | A citação ficou como `art. 22, I e II`, com link, no padrão do item vizinho (`art. 24`); o título da coluna já diz "arts. 21 e 22". |
| tgp-internacional-005 | tgp.js:127 (mesmo `vs`, 5º item) | `Ação no estrangeiro não induz litispendência (art. 24)` | `A ação proposta no estrangeiro não induz litispendência no Brasil, ressalvadas disposições contrárias de tratados internacionais e acordos bilaterais em vigor no país (art. 24)` | [LIM] linha 6: transcrição do art. 24 já traz a ressalva; sem mudança. | Link do `art. 24` mantido. |
| tgp-internacional-011 | tgp.js:129 (`callout` "Eleição de foro estrangeiro") | `Em contrato internacional, a cláusula de foro exclusivo estrangeiro afasta a jurisdição brasileira se o réu a alegar na contestação (CPC, art. 25), salvo nos casos de competência exclusiva.` | Redação do parecer: `Em contrato internacional, a cláusula de foro exclusivo estrangeiro afasta a jurisdição brasileira se o réu a alegar na contestação, salvo competência exclusiva brasileira. A cláusula deve constar de instrumento escrito, referir-se expressamente a determinado negócio e guardar pertinência com o domicílio ou residência de uma das partes ou com o local da obrigação, ressalvada a pactuação consumerista favorável ao consumidor. Aplicam-se também as regras de controle de abusividade (CPC, arts. 25 e 63, §§ 1º a 4º).` | [LIM]: novo parágrafo depois da transcrição do art. 25 (linha 16), com os requisitos e a menção à Lei 14.879/2024 *(C)*. Transcrição intacta. | A citação foi para o fim, com link, como na redação sugerida. |
| tgp-internacional-013 | tgp.js:131 (`table` "As cartas", linha "Precatória") | `Entre juízos nacionais de comarcas diferentes` · `Ouvir testemunha que mora em outra cidade` | `Entre órgãos jurisdicionais brasileiros de competências territoriais diversas` · `Um juízo solicita a outro a oitiva de testemunha em outra comarca (CPC, art. 237, III)` | [CR] linha 4: "entre juízes de comarcas distintas (ambos juízes da mesma hierarquia)" → "entre órgãos jurisdicionais brasileiros de competências territoriais diversas (ambos da mesma hierarquia; CPC, art. 237, III); exemplo: …" *(C)*. O resto da frase ficou. | Citação com link na coluna "Exemplo", como nas linhas Rogatória e Arbitral. |
| tgp-internacional-016 | tgp.js:133 (mesma tabela, linha "De ordem") | `De tribunal para juízo a ele vinculado` · `TJ manda o juiz colher prova` | `De tribunal para juízo a ele vinculado, para ato fora dos limites territoriais do local de sua sede` · `TJ solicita a juiz vinculado a colheita de prova em outra comarca (CPC, arts. 236, § 2º, e 237, I)` | [CR] linha 8: "é a ordem de um tribunal superior para um tribunal ou juiz de hierarquia inferior" → redação do parecer, com os arts. 236, § 2º, e 237, I *(C)*. | Citação com link na coluna "Exemplo". |
| tgp-internacional-018 | tgp.js:136 (`steps` "Homologação de decisão estrangeira", etapa 1) | Texto: `Sentença ou sentença arbitral estrangeira depende de homologação pelo STJ; decisão interlocutória estrangeira cumpre-se por carta rogatória, com exequatur (art. 960, §1º).` · Fonte: `CPC, art. 960` | Texto: `Em regra, a sentença estrangeira depende de homologação pelo STJ; a decisão interlocutória estrangeira pode ser executada por carta rogatória, com exequatur, ressalvada disposição contrária de lei ou tratado. A homologação de decisão arbitral estrangeira segue tratado e lei, com aplicação subsidiária do CPC (arts. 960, §§ 1º e 3º, e 961).` · Fonte: `CPC, arts. 960 e 961` | [HOM]: novo parágrafo depois da linha 26, com a regra e a ressalva *(C)*. | O rótulo de fonte da etapa passou a citar também o art. 961. Etapas 2 e 4 não mudaram. |
| tgp-internacional-020 | tgp.js:138 (mesmo `steps`, etapa "Requisitos") | `Autoridade competente, citação regular, eficácia no país de origem, não ofender coisa julgada brasileira nem a ordem pública, tradução oficial.` | `Autoridade competente; citação regular, ainda que haja revelia; eficácia no país de origem; não ofender a coisa julgada brasileira; tradução oficial, salvo dispensa prevista em tratado; e não conter manifesta ofensa à ordem pública.` | Sem trecho de origem no Vault: [HOM] não lista os requisitos do art. 963. | Fonte da etapa (`CPC, art. 963`) mantida; por isso a citação não foi repetida no texto. |
| tgp-internacional-023 | tgp.js:142 (`quiz`, questão 2: enunciado e explicação) | Pergunta: `Para ouvir testemunha em outra comarca, expede-se carta:` · Explicação: `Comunicação entre juízos nacionais.` | Pergunta: `Um juiz de primeiro grau solicita a outro juízo de comarca diversa, por carta, a oitiva de testemunha. Qual carta utiliza?` · Explicação: `Cooperação entre órgãos jurisdicionais brasileiros de competências territoriais diversas (CPC, art. 237, III).` | Sem trecho de origem no Vault (questão do teste). | Alternativas e gabarito (índice 1, "precatória") mantidos. Citação da explicação com link, como nas questões 1 e 3. |

## Plataforma

- `node --check` em `tgp.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; as redações novas estão em `prototipo/src/js/60-pk-tgp.js` (conferido por busca: "benefícios econômicos", "acordos bilaterais em vigor no país", "pactuação consumerista", "competências territoriais diversas" (2), "para ato fora dos limites territoriais", "ressalvada disposição contrária de lei ou tratado", "manifesta ofensa à ordem pública", "Um juiz de primeiro grau solicita"). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `60-pk-tgp.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto em blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código. O Orquestrador decide se a marca entra.

## Notado de passagem

- **[CR] linha 4**: "A carta precatória é utilizada quando as partes de um processo, residem em comarcas diferentes" é imprecisa (o critério é o ato a praticar fora da competência territorial, não a residência das partes). Fora do parecer; não alterei.
- **[CR] linha 6**: a rogatória aparece só no sentido Brasil → exterior ("de um juiz brasileiro para o juiz de outro país"); a aula também trata do inverso (014, `confere`). Fora do parecer; não alterei.
- **[HOM] linha 4**: "O instituto está consubstanciado no artigo 105 da Constituição Federal" sem o inciso (art. 105, I, i). Fora do parecer; não alterei.
