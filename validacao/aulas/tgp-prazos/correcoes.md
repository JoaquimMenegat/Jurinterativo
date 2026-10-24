# Correções · tgp-prazos

Data: 24/10/2026 · Data-base: 22/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **10 aplicadas**, todas `corrigir`: 005, 012, 013, 017, 018, 024, 035, 036, 038 e 040.
- **0 bloqueadas.**
- Nenhum `divergente` no parecer.
- `não verificável` sem decisão, mantidos como estão: 006 (calculadora) e 022 (dilação do edital).
- Não mexidos: os 30 `confere`.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/tgp2.js`, aula `prazos` (linhas 85 a 117; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas.

Calculadora: nenhuma correção atinge `CALC.prazo` (`engine.js`); 006 é `não verificável` e ficou como está. `engine.js` não foi alterado.

Notas do Vault (pasta `Obsidian Vault/Faculdade/3ª Fase/Teoria Geral dos Processos/`). Nenhuma é `(C)`: o texto corrigido leva a marca *(C, 24/10/2026)*.

| Sigla | Nota |
|---|---|
| [PRZ] | `8. Aula 15-05/Prazos processuais.md` |
| [SUJ] | `7. Aula 10-04/Sujeitos Processuais.md` |

A transcrição do art. 229, §§ 1º e 2º, em [PRZ] (linhas 54 a 56) está correta e ficou intacta, sem ⚖️; a do art. 226 (linhas 43 a 46) também. As notas não têm diagrama, fluxograma ou quadro; as listas de tópicos que diziam a mesma coisa foram corrigidas, inclusive a lista em etapas do DJe ([PRZ] linhas 81 a 84). A nota-índice `Teoria geral dos Processos.md` só tem o link para [PRZ] nessa parte.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| tgp-prazos-005 | tgp2.js:92 (`steps` "De onde vem o prazo", item "Comparecimento") | `Intimação para comparecer: pelo menos 48 horas de antecedência.` | `Quando a lei ou o juiz não determinar prazo, a intimação só obriga ao comparecimento após decorridas 48 horas.` | [PRZ] linha 15: "Quando envolver comparecimento, o prazo será de 48 horas." trocada pela redação do parecer, com (CPC, art. 218, § 2º) *(C)*. | A referência "art. 218, §2º" já está na 3ª coluna do item; não foi repetida no texto. |
| tgp-prazos-012 | tgp2.js:99 (`table` "Quando o prazo começa", linha "Intimação eletrônica") | Rótulo `Intimação eletrônica`; texto `Dia útil seguinte à consulta ou ao fim do prazo de 10 dias corridos para consultar (Lei 11.419/06, art. 5º, §3º)` | Rótulo `Intimação eletrônica por consulta`; texto `Dia útil seguinte à consulta ou ao término dos 10 dias corridos contados do envio. Se a consulta ocorrer em dia não útil, a intimação considera-se realizada no primeiro dia útil seguinte. Observe também o art. 224 (art. 231, V; Lei 11.419/06, art. 5º, §§1º a 3º)` | [PRZ] linhas 71, 72 e 74: 10 dias corridos contados do envio; consulta em dia não útil; e "O prazo contar-se-á no décimo dia útil" trocado por "dia útil seguinte ao término dos 10 dias corridos", com (CPC, art. 231, V; Lei 11.419/2006, art. 5º, §§ 1º a 3º) *(C)*. | "art. 231, V" entrou como link `a()`, como no resto da tabela. A expressão "o dia do começo é" do parecer foi absorvida pelo cabeçalho da coluna ("Dia do começo"). |
| tgp-prazos-013 | tgp2.js:100 (mesma `table`, linha "Carta precatória ou rogatória") | `Juntada da comunicação do cumprimento ou da carta cumprida` | `Juntada do comunicado do art. 232 ou, se não houver esse comunicado, da carta devidamente cumprida aos autos de origem (art. 231, VI)` | [PRZ] linha 77: "Da juntada da devolução da carta precatória." trocada pela redação do parecer, com (CPC, art. 231, VI) e a menção à rogatória *(C)*. | "art. 231, VI" como link `a()`. |
| tgp-prazos-017 | tgp2.js:103 (mesma `table`, linha "Citação eletrônica", 2ª frase) | `Sem confirmação em 3 dias úteis, a citação é refeita por correio, oficial, escrivão ou edital, e o réu deve justificar a falta na primeira oportunidade, …` | `Sem confirmação em até 3 dias úteis do recebimento da citação eletrônica, a citação será realizada por correio, oficial de justiça, escrivão ou chefe de secretaria se o citando comparecer em cartório, ou edital (art. 246, §1º-A).` | [PRZ] linha 92 (item 2 da citação eletrônica): marco do recebimento e condição do comparecimento em cartório (art. 246, § 1º-A) *(C)*. A marca antiga *(C, 12/10/2026)* da linha foi substituída pela nova. | A referência única "art. 246, §§1º-A a 1º-C" virou duas: "§1º-A" (017) e "§§1º-B e 1º-C" (018), ambas link `a()`. A 1ª frase (016, `confere`) não foi tocada. |
| tgp-prazos-018 | tgp2.js:103 (mesma célula, frase seguinte) | `… e o réu deve justificar a falta na primeira oportunidade, sob pena de multa de até 5% do valor da causa (art. 246, §§1º-A a 1º-C)` | `Citado por outra forma, o réu deve apresentar justa causa para a falta de confirmação na primeira oportunidade de falar nos autos. Deixar de confirmar no prazo legal, sem justa causa, é passível de multa de até 5% do valor da causa (art. 246, §§1º-B e 1º-C)` | [PRZ] linha 92: mesma linha de 017, com a redação do parecer para a justa causa e a multa *(C)*. | Ver 017. |
| tgp-prazos-024 | tgp2.js:106 (`flips` "Regras de contagem", cartão "Exclui e inclui", 2ª frase) | `Protrai se o expediente começar tarde, acabar cedo ou o sistema cair.` | `Os dias do começo e do vencimento passam para o primeiro dia útil seguinte se coincidirem com expediente iniciado depois ou encerrado antes do horário normal, ou com indisponibilidade da comunicação eletrônica (§1º).` | Sem trecho correspondente: [PRZ] não trata da protração (a seção "Contagem dos prazos processuais", linhas 28 a 32, só tem a regra do art. 224, caput, entre aspas, mantida). | O "art. 224" da 1ª frase (023, `confere`) já é link; a nova frase cita só "§1º". |
| tgp-prazos-035 | tgp2.js:113 (`chooser` "Prazo em dobro", opção "Fazenda Pública") | `<p>art. 183.</p>` | `<p>art. 183: prazo em dobro para suas manifestações processuais, contado da intimação pessoal, por carga, remessa ou meio eletrônico.</p>` | [SUJ] linhas 116 e 117 já dizem "Prazo em dobro" e "Intimação pessoal (Carga, remessa, eletrônica)"; sem mudança. | Resultado "Dobro" mantido. Link do art. 183 mantido. |
| tgp-prazos-036 | tgp2.js:113 (mesmo `chooser`, opção "Defensoria e NPJ") | `<p>art. 186, inclusive escritórios de prática jurídica de faculdades e entidades conveniadas (§3º).</p>` | `<p>art. 186: prazo em dobro, contado da intimação pessoal do defensor. O dobro também alcança escritórios de prática jurídica de faculdades de Direito reconhecidas na forma da lei e entidades de assistência jurídica gratuita conveniadas com a Defensoria Pública (§§1º e 3º).</p>` | [SUJ] linhas 141 a 144 já trazem o § 3º com os requisitos *(C, 23/10/2026)* e a intimação pessoal; sem mudança. | Rótulo "Defensoria e NPJ" e resultado "Dobro" mantidos. |
| tgp-prazos-038 | tgp2.js:113 (mesmo `chooser`, opção "Litisconsortes", 2ª frase) | `Cessa se, havendo só dois réus, apenas um contestar (§1º).` | `Cessa a contagem em dobro se, havendo apenas dois réus, somente um oferecer defesa (§1º).` | [PRZ] linha 55: transcrição literal do art. 229, § 1º, já correta; sem mudança. | 1ª frase (037, `confere`) mantida. |
| tgp-prazos-040 | tgp2.js:115 (`quiz` 1, explicação) | `Publicação na terça (primeiro dia útil seguinte) e início na quarta (art. 224, §§2º e 3º).` | `Sem feriados ou suspensão, com terça e quarta como dias úteis, a disponibilização no DJe na segunda gera publicação na terça e início da contagem na quarta (art. 224, §§2º e 3º).` | [PRZ] linhas 82 a 84 (etapas do DJe): "Publicação - no segundo dia - aqui é o começo do prazo", "Começo - aqui é o início da contagem" e "A segunda e a terceira etapa ocorrem juntas" trocadas por publicação no primeiro dia útil após a disponibilização, começo no primeiro dia útil após a publicação (CPC, art. 224, § 3º), o exemplo do parecer e "ocorrem em dias úteis sucessivos" *(C)*. A linha 84 dizia o contrário da regra corrigida; por isso entrou na mesma correção. | Gabarito "Na quarta" (índice 2) e alternativas mantidos. A linha da tabela sobre o DJe (014, `confere`) não foi tocada. |

## Plataforma

- `node --check` em `tgp2.js`: sem erro.
- `node validacao/ferramentas/testar_calculadoras.js`: todas as verificações passaram (rodado por conferência; a calculadora não mudou, o teste não precisou de ajuste).
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: as nove redações novas estão em `prototipo/src/js/60-pk-tgp.js`, uma ocorrência de cada. A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `60-pk-tgp.js`: sem erro.
- `git diff`: em `tgp2.js`, só as linhas 92, 99, 100, 103, 106, 113 e 115.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código. Os IDs `corrigir` estão resolvidos; 006 e 022 seguem `não verificável` (sem decisão, ficam como estão). O Orquestrador decide se a marca entra.

## Notado de passagem

- **[PRZ] linha 13**: chama de "subsidiário" o prazo fixado "pelas partes" ("as partes podem requerer"); o prazo subsidiário do art. 218, § 3º, é o que vale na falta de lei e de decisão. Fora do parecer; não alterei.
- **[PRZ] linhas 18 a 26**: lista "Suspensão do prazo" mistura suspensão com prorrogação (art. 222) e cita "os casos do art. 213", que trata do horário do ato eletrônico. Fora do parecer; não alterei.
- **[PRZ] linha 62**: oficial de justiça "da certidão nos autos"; o art. 231, II, fala em juntada do mandado cumprido (009, `confere` na aula). Fora do parecer; não alterei.
