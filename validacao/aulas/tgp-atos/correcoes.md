# Correções · tgp-atos

Data: 23/10/2026 · Data-base: 22/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **11 aplicadas**, todas `corrigir`: 002, 008, 009, 010, 013, 027, 028, 029, 030, 032 e 034.
- **0 bloqueadas.**
- Nenhum `divergente` nem `não verificável` no parecer.
- Não mexidos: os 24 `confere` e os conceitos sem veredito (001 e 006).

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/tgp2.js`, aula `atos` (linhas 56 a 82; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas.

Notas do Vault (pasta `Obsidian Vault/Faculdade/3ª Fase/Teoria Geral dos Processos/8. Aula 15-05/`). Nenhuma é `(C)`: o texto corrigido leva a marca *(C, 23/10/2026)*.

| Sigla | Nota |
|---|---|
| [ADP] | `Atos das partes.md` |
| [APR] | `Atos processuais.md` |
| [PRJ] | `Pronunciamentos do juiz.md` |
| [TLA] | `Tempo de lugar dos atos processuais.md` |

As transcrições literais (art. 485, VIII, em [ADP]; arts. 188 e 191 em [APR]) estão corretas e ficaram intactas, sem ⚖️. As notas não têm diagrama, fluxograma ou quadro; as listas de tópicos que diziam a mesma coisa foram corrigidas. A nota-índice `Teoria geral dos Processos.md` só tem links nessa parte.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| tgp-atos-002 | tgp2.js:60 (`flips` "Atos das partes", cartão "Efeito imediato") | `Os atos das partes produzem efeitos desde logo (CPC, art. 200).` | `Os atos das partes consistentes em declarações unilaterais ou bilaterais de vontade produzem imediatamente efeitos sobre direitos processuais, ressalvada a desistência da ação (CPC, art. 200).` | [ADP] linha 7: "Possuem efeitos imediatos" trocada pela redação do parecer *(C)*. | Título do cartão e cartão seguinte (desistência) mantidos. |
| tgp-atos-008 | tgp2.js:64 (`callout` "Negócio jurídico processual (art. 190)", 1ª e 2ª frases) | `Em causas que admitem autocomposição, partes plenamente capazes podem ajustar o procedimento e convencionar sobre ônus, poderes, faculdades e deveres, antes ou durante o processo. O juiz controla a validade e recusa a convenção nula, abusiva em contrato de adesão ou que explore vulnerabilidade.` | `Em causas sobre direitos que admitam autocomposição, partes plenamente capazes podem ajustar o procedimento às especificidades da causa e convencionar sobre seus ônus, poderes, faculdades e deveres processuais, antes ou durante o processo. O juiz controla a validade, de ofício ou a requerimento, e só recusa aplicação em caso de nulidade, inserção abusiva em contrato de adesão ou manifesta situação de vulnerabilidade de alguma parte.` | [APR] linhas 26 e 27 ("Ou recusar em casos de nulidade, inserção abusiva" / "Parte vulnerável."): controle de ofício ou a requerimento; contrato de adesão; manifesta situação de vulnerabilidade de alguma parte (CPC, art. 190) *(C)*. | A citação "(CPC, art. 190)" do parecer já está no título do callout; não foi repetida no texto. |
| tgp-atos-009 | tgp2.js:64 (mesmo `callout`, frase do calendário) | `Exemplo típico: o calendário processual (art. 191), fixado pelo juiz e pelas partes, que vincula todos e dispensa intimações.` | `Exemplo típico: o calendário processual (art. 191), fixado de comum acordo pelo juiz e pelas partes, que os vincula. Seus prazos só podem ser alterados em casos excepcionais justificados. Dispensa-se a intimação das partes para atos e audiências com datas nele designadas.` | [APR] linha 32 (calendário procedimental): comum acordo, vinculação, alteração só excepcional e dispensa de intimação delimitada (CPC, art. 191) *(C)*. A transcrição do art. 191 (linhas 35 a 37) ficou intacta. | "Exemplo típico" e o link do art. 191 mantidos. |
| tgp-atos-010 | tgp2.js:66 (`table` "Pronunciamentos do juiz", linha "Sentença", coluna "Conceito") | `Põe fim à fase de conhecimento ou extingue a execução, com fundamento nos arts. 485 ou 487 (art. 203, §1º)` | `Ressalvadas as disposições expressas dos procedimentos especiais, põe fim à fase cognitiva do procedimento comum ou extingue a execução, com fundamento nos arts. 485 ou 487 (art. 203, §1º)` | [PRJ] linha 13: "Sentença: encerra a fase de conhecimento." trocada pela redação do parecer *(C)*. | Coluna "Recurso" (Apelação) mantida. O cartão 3 do `sorter` ("Encerra a fase de conhecimento com base no art. 487", tgp-atos-024, `confere`) não foi tocado. |
| tgp-atos-013 | tgp2.js:67 (mesma `table`, linha "Decisão interlocutória", coluna "Recurso") | `Agravo de instrumento, se no rol do art. 1.015; senão, preliminar de apelação` | `Agravo de instrumento nas hipóteses legais, inclusive contra interlocutórias na liquidação, no cumprimento de sentença, na execução e no inventário (art. 1.015, parágrafo único). Na fase de conhecimento, questões cuja decisão não comporte agravo podem ser suscitadas em preliminar de apelação ou nas contrarrazões, sem preclusão (art. 1.009, §1º)` | Sem trecho correspondente: [PRJ] não trata de recursos. | Os artigos viraram links `a()`, como no resto da tabela. Nada foi dito sobre agravo fora das hipóteses expressas, conforme o parecer. |
| tgp-atos-027 | tgp2.js:77 (`keys` "Tempo e lugar dos atos", item "6h–20h") | `em dias úteis (art. 212); ato iniciado pode ser concluído se o adiamento causar dano` | `em dias úteis (art. 212); atos iniciados antes das 20h serão concluídos após esse horário quando o adiamento prejudicar a diligência ou causar grave dano (art. 212, §1º)` | [TLA] linha 9 ("Verificarmos que a não prorrogação possa gerar prejuízo ou grave dano"): redação do parecer *(C)*. | — |
| tgp-atos-028 | tgp2.js:77 (mesmo `keys`, item "24h") | `até as 24 horas do último dia (art. 213)` | `em qualquer horário, até as 24h do último dia do prazo, considerado o horário vigente no juízo perante o qual o ato deve ser praticado (art. 213)` | [TLA] linha 15 ("Atos processuais eletrônicos também são exceção: 24/7"): redação do parecer *(C)*. | Rótulo "processo eletrônico" mantido. |
| tgp-atos-029 | tgp2.js:77 (mesmo `keys`, item "20/12–20/1") | Rótulo `recesso`; texto `prazos suspensos (art. 220)` | Rótulo `suspensão dos prazos`; texto `de 20/12 a 20/1, inclusive. Nesse período, não se realizam audiências nem sessões de julgamento (art. 220)` | [TLA] linha 17 ("Férias forenses (20/12 a 20/01) - esse período gera a suspensão do prazo."): redação do parecer *(C)*. | O rótulo "recesso" saiu porque o parecer aponta que o art. 220 não estabelece recesso integral. Número grande "20/12–20/1" mantido. |
| tgp-atos-030 | tgp2.js:78 (`p`, 1º parágrafo) | `Mesmo nas férias e feriados se praticam citações, intimações e penhoras (art. 212, §2º), tutelas de urgência (art. 214), …` | `Mesmo nas férias e feriados, citações, intimações e penhoras podem ocorrer independentemente de autorização judicial, observada a inviolabilidade do domicílio prevista no CF, art. 5º, XI (art. 212, §2º); também se praticam tutelas de urgência (art. 214).` | [TLA] linha 14 ("O oficial de justiça pode fazer tais atos independentemente da intimação do juiz."): férias e feriados, sem autorização judicial, inviolabilidade do domicílio (CF, art. 5º, XI; CPC, art. 212, § 2º) *(C)*. | "CF, art. 5º, XI" entrou como link `a()`. A tutela de urgência (031, `confere`) ficou no mesmo parágrafo, sem mudança de conteúdo. A questão 3 do teste (037, `confere`) não foi tocada. |
| tgp-atos-032 | tgp2.js:78 (`p`, novo 2º parágrafo) | `… e tramitam jurisdição voluntária, alimentos e nomeação ou remoção de tutor e curador (art. 215).` | `Nas férias forenses, onde as houver, processam-se e não se suspendem pela superveniência delas: “os procedimentos de jurisdição voluntária e os necessários à conservação de direitos, quando puderem ser prejudicados pelo adiamento”; a ação de alimentos; os processos de nomeação ou remoção de tutor e curador; e os processos que a lei determinar (art. 215). Nos feriados, aplica-se o art. 214.` | [TLA] linhas 24 a 29 (lista "São praticados atos em férias forenses"): os itens "Processos de jurisdição voluntária", "Conservação de direito", "Atos que não podem ser adiados", "Questões referentes à alimentos", "Processos com curadores ou tutores" e "Ou quando a lei dispor sobre" viraram a lista do art. 215, I a III, com a condição do inciso I inteira, e entrou a linha "Nos feriados, aplica-se o art. 214" *(C)*. O exemplo do mandado de segurança ficou. | O trecho virou parágrafo próprio, porque o parecer separa férias (art. 215) de feriados (art. 214). Aspas da condição do inciso I mantidas, como no parecer. |
| tgp-atos-034 | tgp2.js:78 (`p`, parágrafo "Lugar") | `Exceções: deferência a autoridades (como ouvir o Presidente da República onde ele indicar, art. 454), interesse da justiça, natureza do ato ou obstáculo criado por quem quer impedi-lo (art. 217).` | `Excepcionalmente, os atos podem ocorrer em outro lugar por deferência, interesse da justiça, natureza do ato ou obstáculo arguido pelo interessado e acolhido pelo juiz (art. 217). Autoridades como o Presidente da República são inquiridas em sua residência ou onde exercem a função, conforme o procedimento do art. 454.` | [TLA] linha 37 (Presidente "ouvido no palácio do planalto") e linha 40 ("obstáculo criado pela parte"): redação do parecer *(C)*. | "Lugar: em regra, na sede do juízo." (033, `confere`) mantido. |

## Plataforma

- `node --check` em `tgp2.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/60-pk-tgp.js` (conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `60-pk-tgp.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código. Todos os IDs com veredito estão resolvidos; o Orquestrador decide se a marca entra.

## Notado de passagem

- **[TLA] linha 18**: "É caso de congelamento do prazo prescricional do processo", sob a suspensão do art. 220. Não conferido; fora do parecer; não alterei.
- **[TLA] linha 16**: horário de funcionamento do fórum "12h às 19h" é dado local, sem fonte. Fora do parecer; não alterei.
- **[TLA] linha 41**: o exemplo do obstáculo ("a parte tenta bloquear o local") ainda ilustra o obstáculo criado pela parte; não contraria a lei, mas a regra agora é o obstáculo arguido e acolhido. Não alterei.
- **[TLA] linha 30**: "Pois são atos de suma importância…" ficou como fecho da lista, agora após a linha dos feriados.
