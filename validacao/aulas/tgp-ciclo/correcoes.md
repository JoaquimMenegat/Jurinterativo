# Correções · tgp-ciclo

Data: 23/10/2026 · Data-base: 22/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **15 aplicadas**, todas `corrigir`: 003, 004, 005, 006, 008, 010, 012, 013, 017, 018, 021 (gravidade alta), 025, 033, 036 e 037.
- **0 bloqueadas.**
- Nenhum `divergente` no parecer.
- Não mexidos:
  - `não verificável`: 015 (força maior, "Enquanto durar"). Continua como está, pela regra geral de 16/10/2026.
  - `confere`: os 20 itens com esse veredito.
  - Conceito sem veredito: 001.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/tgp2.js`, aula `ciclo` (linhas 199 a 229; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas nesta correção.

Nota do Vault: **[CIC]** `Obsidian Vault/Faculdade/3ª Fase/Teoria Geral dos Processos/11. Aula 19-06/Da Formação, da Suspensão e da Extinção do Processo.md`. Não é `(C)`: o texto corrigido leva a marca *(C, 23/10/2026)*. A nota não transcreve artigos literalmente; não houve ⚖️. O **quadro do art. 313** (linhas 90 a 102) foi corrigido nas linhas I, III e IV; as linhas IX e X do quadro já traziam prazo a partir do evento, comprovação e notificação ao cliente, e ficaram como estão. A linha 68 (inciso III, já marcada *(C, 12/10/2026)*) já estava conforme e não foi tocada.

Os arts. 2º e 85 (025 e 033) e as questões do teste (036 e 037) não têm trecho de origem nessa nota. A nota `10. Aula 12-06/2.3 Honorários de sucumbência.md` transcreve o art. 85, § 2º, e já trata da equidade (§§ 6º-A, 8º e 8º-A, linha 75, *(C, 12/10/2026)*); não foi alterada. Nenhuma nota de TGP no Vault trata do art. 2º (busca por "impulso oficial").

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| tgp-ciclo-003 | tgp2.js:202 (`vs` "Quando o processo existe", coluna "Para o autor e o juízo", 2º item) | `Registro, ou distribuição se houver mais de uma vara` | `Todos os processos estão sujeitos a registro e, onde houver mais de um juiz, também à distribuição (art. 284)` | [CIC] linha 30 ("Para o Juízo"): o "registro … ou … distribuição" trocado pela regra do art. 284 *(C)*. | Link novo para o art. 284, no padrão `a()` da coluna. |
| tgp-ciclo-004 | tgp2.js:202 (mesmo `vs`, coluna "Para o réu", 1º item) | `Só com a citação válida` | `Em relação ao réu, os efeitos do art. 240 dependem de citação válida (art. 312)` | [CIC] linha 32 ("Para o Réu") *(C)*. | Título da coluna "Para o réu" mantido. |
| tgp-ciclo-005 | tgp2.js:202 (mesmo `vs`, coluna "Para o réu", 2º item) | `Induz litispendência, torna a coisa litigiosa e constitui o devedor em mora (art. 240)` | `A citação válida induz litispendência, torna litigiosa a coisa e constitui o devedor em mora, ressalvados os arts. 397 e 398 do Código Civil (art. 240)` | [CIC] linha 40 (efeito "Constituir o Devedor em Mora"): acrescentada a ressalva dos arts. 397 e 398 do CC *(C)*. | A questão 1 do teste (035, `confere`) já trazia a ressalva; sem mudança. |
| tgp-ciclo-006 | tgp2.js:202 (mesmo `vs`, coluna "Para o réu", 3º item) | `A interrupção da prescrição retroage à propositura, se o autor promover a citação em 10 dias (§§1º e 2º)` | `A interrupção da prescrição, operada pelo despacho que ordena a citação, retroage à propositura se o autor adotar, em 10 dias úteis de sua intimação, as providências necessárias para viabilizá-la. A demora exclusiva do serviço judiciário não prejudica a parte (§§1º a 3º)` | [CIC] linha 46 ("Interrupção da Prescrição") *(C)*. | A citação curta "(§§…)" segue a do art. 240 no item anterior, como no original. |
| tgp-ciclo-008 | tgp2.js:204 (`table` "Causas de suspensão", inciso I, coluna "Prazo ou consequência", 1ª parte) | `Réu: citar espólio em 2 a 6 meses.` | `Falecido o réu, se não houver ação de habilitação, o juiz intimará o autor para promover a citação do espólio, do sucessor ou dos herdeiros no prazo judicial de 2 a 6 meses (§2º, I).` | [CIC] linha 93 (quadro do art. 313, linha I, "Réu falecido") *(C, no fim da célula)*. | A 2ª parte da célula ("Autor: habilitação, sob pena de extinção", 009, `confere`) ficou como estava. |
| tgp-ciclo-010 | tgp2.js:204 (mesma célula, 3ª parte) | `Advogado: novo em 15 dias, sob pena de extinção ou revelia` | `Morto o advogado, a parte será intimada para constituir novo mandatário em 15 dias úteis; sem regularização, haverá extinção sem mérito se for o autor, ou prosseguimento à revelia se for o réu (§3º)` | [CIC] linha 93 (quadro, linha I, "Procurador falecido") *(C)*. | As duas frases do parecer viraram uma, com ponto e vírgula, para caber na célula sem mudar o conteúdo. |
| tgp-ciclo-012 | tgp2.js:206 (mesma `table`, inciso III) | Causa `Arguição de impedimento ou suspeição`; prazo `Até o julgamento do incidente` | Causa `Arguição de impedimento ou suspeição do juiz`; prazo `Permanece suspenso até o julgamento do incidente se recebido com efeito suspensivo; sem esse efeito, volta a correr (art. 146, §2º)` | [CIC] linha 95 (quadro, linha III) *(C)*. A linha 68 já estava correta. | O "art. 313, III" da redação sugerida já está no título da tabela "(art. 313)" e na coluna "Inciso". |
| tgp-ciclo-013 | tgp2.js:207 (mesma `table`, inciso IV, coluna "Prazo ou consequência") | `Todos os processos sobre a mesma questão` | `O relator suspende os processos pendentes sobre a mesma questão de direito no Estado ou na região. Após 1 ano, cessa a suspensão, salvo decisão fundamentada em contrário. A suspensão nacional depende de pedido ao tribunal superior (arts. 980 e 982)` | [CIC] linha 70 (texto do inciso IV) e linha 96 (quadro, linha IV) *(C)*. | — |
| tgp-ciclo-017 | tgp2.js:211 (mesma `table`, inciso IX) | Causa `Parto ou adoção da advogada única patrona`; prazo `30 dias` | Causa `Parto ou concessão de adoção à advogada única patrona`; prazo `30 dias a partir do evento, mediante documento comprobatório e notificação ao cliente (§6º)` | [CIC] linha 101 (quadro, linha IX): já correta; sem mudança. | — |
| tgp-ciclo-018 | tgp2.js:212 (mesma `table`, inciso X, coluna "Prazo ou consequência") | `8 dias` | `8 dias a partir do parto ou da concessão da adoção, mediante documento comprobatório e notificação ao cliente (§7º)` | [CIC] linha 102 (quadro, linha X): já correta; sem mudança. | — |
| tgp-ciclo-021 | tgp2.js:213 (`callout` "Durante a suspensão", 3ª frase) | `Questão penal prejudicial: suspende se a ação penal for proposta em 3 meses, por no máximo 1 ano (art. 315).` | `Questão penal prejudicial: se o mérito depender da verificação de fato delituoso, o juiz pode suspender o processo civil. Se a ação penal não for proposta em 3 meses da intimação do ato de suspensão, esta cessa e o juiz cível examina incidentalmente a questão (art. 315, caput e §1º). Proposta a ação penal, a suspensão dura no máximo 1 ano (§2º).` | [CIC] linha 108 (art. 315, § 1º): acrescentados o termo inicial dos 3 meses e o exame incidental pelo juiz cível *(C)*. A linha 106 (caput) e a linha 110 (§ 2º) já estavam corretas. | Gravidade alta. O limite de 1 ano (022, `confere`) foi mantido e ligado à propositura da ação penal, como no § 2º. |
| tgp-ciclo-025 | tgp2.js:216 (`arts` "Os artigos-chave da matéria", "Art. 2º · Inércia") | `O processo começa por iniciativa da parte e se desenvolve por impulso oficial.` | `O processo começa por iniciativa da parte e se desenvolve por impulso oficial, salvo as exceções previstas em lei.` | Sem trecho de origem no Vault. | — |
| tgp-ciclo-033 | tgp2.js:224 (mesmo `arts`, "Art. 85 · Honorários") | `Entre 10% e 20%, com faixas para a Fazenda Pública.` | `Em regra, de 10% a 20%, com faixas próprias para a Fazenda Pública e fixação por equidade nas hipóteses do §8º.` | Sem mudança: a nota de honorários já transcreve o § 2º e trata da equidade (linha 75, já *(C)*). | O "(art. 85)" da redação sugerida já está no rótulo do item. |
| tgp-ciclo-036 | tgp2.js:228 (teste, questão 2, enunciado e explicação) | `Por quanto tempo as partes podem suspender o processo por acordo?`; explicação `art. 313, §4º.` | `Qual é o prazo máximo de suspensão do processo por convenção das partes?`; explicação `art. 313, II e §4º.` | Sem mudança: [CIC] linha 94 (quadro, linha II) e linha 150 já falam em prazo máximo de 6 meses. | Alternativas e gabarito ("6 meses") mantidos. |
| tgp-ciclo-037 | tgp2.js:229 (teste, questão 3, enunciado) | `Advogada única patrona dá à luz. Suspensão de:` | `A advogada única patrona dá à luz, apresenta documento comprobatório e notifica o cliente. Qual é o período de suspensão, contado do parto?` | Sem mudança: [CIC] linha 101 já está correta. | Alternativas, gabarito ("30 dias") e explicação mantidos. |

## Plataforma

- `node --check` em `tgp2.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: as 15 redações novas estão em `prototipo/src/js/60-pk-tgp.js` (uma ocorrência de cada, conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `60-pk-tgp.js`: sem erro.
- `git diff` de `tgp2.js` nesta aula: só as linhas 202, 204, 206, 207, 211, 212, 213, 216, 224, 228 e 229.
- Nenhuma calculadora envolvida. Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código, e 015 segue `não verificável`. O Orquestrador decide se a marca entra.

## Notado de passagem

- **[CIC] linha 34**: diz que os efeitos do art. 240 "retroagem à data do protocolo"; só a interrupção da prescrição retroage à propositura (art. 240, § 1º). Fora do parecer; não alterei.
- **[CIC] linha 36**: diz que a segunda ação idêntica "será extinta"; o resultado depende de qual citação foi válida primeiro. Não conferido; fora do parecer.
- **[CIC] linha 104**: diz que a exceção dos atos urgentes "não se aplica" na arguição de impedimento ou suspeição; o art. 314 limita a vedação ao juiz arguido, e a tutela de urgência vai ao substituto legal (art. 146, § 3º), como a aula já diz (020). Fora do parecer; não alterei.
- **[CIC] linhas 6 e 12**: citam nome de professor e videoaula. Nada disso está na aula; registro só para o Orquestrador.
