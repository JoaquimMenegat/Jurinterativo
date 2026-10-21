# Correções · tgp-principios

Data: 21/10/2026 · Data-base: 20/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **10 aplicadas**, todas `corrigir`: 004, 011, 027, 028, 038, 043, 048, 049, 051 e 054.
- **0 bloqueadas.**
- Nenhum `divergente` no parecer.
- Não mexidos:
  - `confere`: 001, 002, 005, 006, 007, 009, 014, 015, 016, 018, 020, 021, 022, 024, 025, 029, 030, 031, 032, 033, 034, 035, 036, 037, 039, 040, 041, 050, 052, 053, 055 e 056.
  - `não verificável`: 012, 013, 042, 046 e 047. Continuam como estão, pela regra geral de 16/10/2026.
  - Conceitos sem veredito: os 9 itens `conceito` da ficha.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/tgp.js`, aula `principios` (linhas 81 a 121; a contagem de linhas não mudou). As aulas `jurisdicao` e as demais não foram tocadas.

Notas do Vault (caminho relativo a `Obsidian Vault/Faculdade/3ª Fase/Teoria Geral dos Processos/`):
- **[CON]** `3. Aula 06-03/Princípio do contraditório.md`
- **[CEL]** `3. Aula 06-03/Princípio da Celeridade Processual.md`
- **[DG]** `3. Aula 06-03/Princípio do Duplo Grau de jurisdição.md`
- **[AP]** `8. Aula 15-05/Atos processuais.md`

Nenhuma é `(C)`: o texto corrigido leva a marca *(C, 21/10/2026)*. Citações literais ficaram intactas, com aviso ⚖️ ao lado: [CON] linha 6 (transcrição do art. 9º) e [DG] linha 56 (citação de Capez, "art. 8º, item 3º, h"). As notas não têm diagrama, fluxograma ou quadro sobre esses pontos além da lista de [AP] (linhas 14 a 18), que foi corrigida.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| tgp-principios-004 | tgp.js:86 (`flips` "Garantias constitucionais", cartão "Contraditório") | `Não se decide contra a parte sem ouvi-la antes (CPC, art. 9º).` | `Em regra, não se decide contra a parte sem prévia oportunidade de manifestação (CPC, art. 9º); o parágrafo único excepciona a tutela de urgência, a tutela da evidência do art. 311, II e III, e a decisão do art. 701.` | [CON] linha 10: "O contraditório somente não se aplica quando uma decisão favorece o réu" → redação do parecer *(C)*, seguida de "O contraditório prévio também não se aplica quando uma decisão favorece o réu" (só saiu o "somente", que contrariava as exceções). [CON] linha 6: ⚖️ ao lado da transcrição do caput, remetendo às exceções. | O resto do cartão ("Basta a oportunidade de falar", "Vedada a decisão surpresa") ficou como estava (005 e 006 `confere`). |
| tgp-principios-011 | tgp.js:89 (`flips` "Garantias constitucionais", cartão "Duração razoável") | `Solução integral do mérito em prazo razoável (CF, art. 5º, LXXVIII, EC 45/2004; CPC, art. 4º).` | `Solução integral do mérito em prazo razoável, incluída a atividade satisfativa (CF, art. 5º, LXXVIII, EC 45/2004; CPC, art. 4º).` | [CEL] linha 4: acrescentado "No CPC (art. 4º), a garantia é a de obter em prazo razoável a solução integral do mérito, incluída a atividade satisfativa" *(C)*. | Citações e links mantidos. |
| tgp-principios-027 | tgp.js:99 (`flips` "Princípios do próprio processo", cartão "Duplo grau") | `Revisão por órgão superior. Implícito na CF; expresso na Convenção Americana (art. 8.2.h). Não é absoluto.` | `Revisão por órgão superior. Implícito na CF. Na acusação de delito, a Convenção Americana assegura expressamente o direito de recorrer da sentença para juiz ou tribunal superior (art. 8.2.h). Não é absoluto.` | [DG] linha 54: acrescentado ": na acusação de delito, a Convenção Americana assegura expressamente o direito de recorrer da sentença para juiz ou tribunal superior (art. 8.2.h)" *(C)*. [DG] linha 56: citação intacta, com ⚖️ indicando que o dispositivo é o art. 8.2.h, sobre acusação de delito. | O bloco `juris` do caso Mohamed (046 e 047, `não verificável`) não mudou. |
| tgp-principios-028 | tgp.js:101 (`sorter` "Qual princípio está em jogo?", cartão 1: texto e explicação) | Cartão: `O juiz quer reconhecer prescrição que nenhuma parte alegou, sem ouvi-las antes.` · Explicação: `Vedada a decisão surpresa, mesmo em matéria de ofício (CPC, art. 10).` | Cartão: `Fora da hipótese de improcedência liminar do art. 332, §1º, o juiz quer reconhecer prescrição não alegada sem dar oportunidade de manifestação às partes.` · Explicação: `Vedada a decisão surpresa, mesmo em matéria de ofício (CPC, arts. 10 e 487, parágrafo único).` | Sem trecho de origem no Vault: o cartão não vem de nota (busca por "prescrição", "decisão surpresa" e "ordem pública" nas notas de TGP sem resultado). | A citação da redação sugerida foi para a explicação, como nos outros cartões, com link. A categoria certa (Contraditório) não mudou. |
| tgp-principios-038 | tgp.js:111 (`table` "O que não é fundamentação", linha "V") | `Citar precedente ou súmula sem identificar seus fundamentos determinantes` | `Limitar-se a invocar precedente ou súmula sem identificar seus fundamentos determinantes e demonstrar que o caso se ajusta a eles` | Sem trecho de origem no Vault: a nota da motivação não traz os incisos do art. 489, §1º. | A citação `CPC, art. 489, §1º, V` da redação sugerida não foi repetida na linha: a tabela cita o artigo no `hint`, e nenhuma outra linha traz citação. |
| tgp-principios-043 | tgp.js:113 (`vs` "Duplo grau não é o mesmo que recorribilidade", coluna "Duplo grau sem recurso") | `Remessa necessária: sentença contra a Fazenda sobe ao tribunal mesmo sem apelação (CPC, art. 496)` | `Remessa necessária: nas hipóteses do art. 496, a sentença é submetida ao tribunal mesmo sem apelação, ressalvadas as dispensas dos §§ 3º e 4º (CPC, art. 496)` | [DG] linha 28: "como nos casos de remessa de ofício" → acrescentado "(remessa necessária: nas hipóteses do art. 496 do CPC, a sentença é submetida ao tribunal mesmo sem apelação, ressalvadas as dispensas dos §§ 3º e 4º)" *(C)*. | "do CPC" virou a citação com link no fim, como no original. A explicação da questão 3 do teste (055, `confere`) não mudou. |
| tgp-principios-048 | tgp.js:116 (`callout` "Publicidade e segredo de justiça", 1º item da lista) | `interesse público ou social` | `os processos em que o interesse público ou social o exigir` | [AP] linha 15: "Em casos de interesse público ou social" → "Processos em que o interesse público ou social o exigir (CPC, art. 189, I)" *(C)*. | A lista do callout ganhou forma de frase ("os processos…; os que…") para acomodar as três redações; o item de intimidade (050, `confere`) só recebeu "os que contêm". |
| tgp-principios-049 | tgp.js:116 (mesmo `callout`, 2º item) | `casamento, divórcio, união estável, filiação, alimentos e guarda` | `os que tratam de casamento, separação de corpos, divórcio, separação, união estável, filiação, alimentos e guarda de crianças e adolescentes` | [AP] linha 16: "Processos de família" → "Processos sobre casamento, separação de corpos, divórcio, separação, união estável, filiação, alimentos e guarda de crianças e adolescentes (CPC, art. 189, II)" *(C)*. | Ver 048. |
| tgp-principios-051 | tgp.js:116 (mesmo `callout`, 4º item) | `arbitragem com confidencialidade comprovada` | `e os processos judiciais sobre arbitragem, inclusive cumprimento de carta arbitral, quando comprovada perante o juízo a confidencialidade estipulada na arbitragem` | [AP] linha 18: "Quando há carta arbitral que dispõe de confidencialidade" → "Processos judiciais sobre arbitragem, inclusive cumprimento de carta arbitral, quando comprovada perante o juízo a confidencialidade estipulada na arbitragem (CPC, art. 189, IV)" *(C)*. | Ver 048. A frase do terceiro (052, `confere`) não mudou. |
| tgp-principios-054 | tgp.js:119 (`quiz`, questão 2: enunciado e alternativa correta) | Pergunta: `Pode o juiz decidir com base em fundamento sobre o qual as partes não falaram, se for matéria de ordem pública?` · Correta: `Não, deve ouvi-las antes` | Pergunta: `Fora da hipótese de improcedência liminar por prescrição ou decadência (CPC, art. 332, §1º), o juiz pode decidir matéria de ordem pública com base em fundamento sobre o qual não deu às partes oportunidade de manifestação?` · Alternativas: `Sim, livremente`; `Não, deve dar oportunidade de manifestação antes`; `Só em segundo grau`. Correta: a 2ª. | Sem trecho de origem no Vault (ver 028). | Gabarito continua no índice 1. Explicação (`CPC, art. 10`) mantida. A citação no enunciado ficou em texto simples, sem `a()`, como nos outros enunciados do teste. |

## Plataforma

- `node --check` em `tgp.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo. As redações novas estão em `prototipo/src/js/60-pk-tgp.js` (conferido por busca: "art. 311, II e III", "atividade satisfativa", "Na acusação de delito", "487, parágrafo único", "Limitar-se a invocar", "dispensas dos §§ 3º e 4º", "separação de corpos", "deve dar oportunidade de manifestação antes"). No passo final, a cópia do pacote sobre ele mesmo falhou com `WinError 32`, a falha conhecida e inofensiva. `tgp.js` continua com as correções.
- `node --check` em `60-pk-tgp.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto em blocos existentes.

## Marca "Validada em"

Não aplicada. A aula não tem linha "Validada em" no código, e 012, 013, 042, 046 e 047 seguem `não verificável` (mantidos pela regra geral). O Orquestrador decide se a marca entra.

## Notado de passagem

- **[CEL] linha 4**: cita "art. º, LXXVII, da CRFB"; a aula usa art. 5º, LXXVIII (032, `confere`). Fora do parecer; não alterei.
- **[CON] linha 10**: a afirmação de que o contraditório prévio não se aplica quando a decisão favorece o réu ficou como estava; não está no parecer.
- **[DG] linha 62**: data do caso Mohamed grafada "23.1L2012.45" (erro de digitação). Fora do parecer; não alterei.
- **[AP] linha 12**: "serão acessados somente pelas partes, pelo advogados e por interessados": vale conferir com o art. 189, §§ 1º e 2º (o parecer, em 052, trata o terceiro com interesse jurídico como quem pode pedir certidão do dispositivo). Fora do parecer; não alterei.
