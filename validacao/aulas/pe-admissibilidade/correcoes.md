# Correções · pe-admissibilidade

Data: 18/10/2026 · Data-base: 17/10/2026.
Entradas: `parecer.md` e `parecer-complemento.md` (o complemento prevalece para 010, 011, 016, 026, 033 e 034). Não há `decisoes.md`.

## Resumo

- **5 aplicadas**, todas `corrigir`: 014, 015 e 018 (parecer); 033 e 034 (complemento).
- **0 bloqueadas.**
- Não mexidos:
  - 26 `confere`: 002, 005 a 008, 012, 013, 016, 017, 019 a 028, 030 a 032 e 035 a 038 (016 e 026 passaram a `confere` no complemento).
  - 3 `não verificável`: 010, 011 e 029. Continuam como estão, pela regra geral de 16/10/2026.
  - 4 conceitos sem veredito: 001, 003, 004 e 009.
- Nenhum item `divergente` nem citação doutrinária.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/procesp3.js`, aula `admissibilidade` (linhas 25 a 33). Só mudaram as linhas 30 (`chooser` "Requisitos extrínsecos", item "Tempestividade"), 31 (`juris` "Preparo depois do expediente") e 32 (`callout` "Caso: o depósito sem ressalva"). A aula `teoria-recursos` (linhas 18 a 23, já corrigida) não foi tocada.

Nota do Vault (caminho relativo a `Obsidian Vault/Faculdade/6ª Fase/2. Procedimentos Especiais/Recursos/0. Material do Professor/`):
- **[R10]** `(C) 10. Juízo de Admissibilidade — Requisitos Extrínsecos.md`

A nota é `(C)` (gerada por IA). Como nos lotes anteriores, corrigi o texto diretamente, sem a marca *(C, 18/10/2026)*. A transcrição da Súmula 484 (linha 56) ficou intacta. O número de linhas não mudou (116).

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| pe-admissibilidade-014 | procesp3.js:30 (item "Tempestividade", 1ª frase) | `Prazo em dobro para MP, Fazenda e Defensoria.` | `` MP, Fazenda Pública e Defensoria Pública têm prazo em dobro, contado da intimação pessoal, salvo quando a lei estabelece expressamente prazo próprio para o ente (${a(`arts. 180, 183 e 186`)}). `` | [R10] linha 26 (tabela "Tempestividade"). Antes: `\| **Prazo em dobro** \| MP, Fazenda, Defensoria \|` Depois: `\| **Prazo em dobro** \| MP, Fazenda Pública e Defensoria Pública, contado da **intimação pessoal**, salvo quando a lei estabelece expressamente **prazo próprio** para o ente (arts. 180, 183 e 186) \|` | Artigos com `a()`, sem "do CPC", como no resto da aula. O subtítulo do item ("15 dias úteis; embargos, 5", 012 e 013) não mudou. |
| pe-admissibilidade-015 | procesp3.js:30 (item "Tempestividade", 2ª frase) | `` Feriado local deve ser comprovado no ato, mas o vício é sanável: o tribunal manda corrigir ou o desconsidera se a informação já constar do processo (${a(`art. 1.003, §6º`)}, redação da Lei 14.939/2024; a Corte Especial do STJ aplica a regra também a recursos anteriores). `` | `` O feriado local deve ser comprovado na interposição. Se faltar a prova, o tribunal determinará a correção do vício ou poderá desconsiderá-lo caso a informação já conste do processo eletrônico (${a(`art. 1.003, §6º`)}, redação da Lei 14.939/2024; a Corte Especial do STJ aplica a regra também a recursos anteriores). `` | [R10] linha 28 (tabela, "Feriado local"). Antes: `Se não comprovar, o tribunal **manda corrigir** o vício ou o **desconsidera** se a informação já constar do processo (art. 1.003, §6º, …` Depois: `Se faltar a prova, o tribunal **determinará a correção** do vício ou **poderá desconsiderá-lo** caso a informação já conste do **processo eletrônico** (art. 1.003, §6º, …` (o resto da célula, com a QO no AREsp 2.638.376/MG, ficou igual). | O parêntese da Corte Especial (016, `confere` no complemento) foi mantido. |
| pe-admissibilidade-018 | procesp3.js:30 (item "Tempestividade", última frase) | `` Embargos de declaração interrompem o prazo para todos (${a(`art. 1.026`)}), salvo se intempestivos ou manifestamente incabíveis, como os opostos contra a decisão que inadmite REsp ou RE na origem. `` | `` Embargos de declaração interrompem o prazo para todos (${a(`art. 1.026`)}). Embargos intempestivos não interrompem o prazo recursal. No STJ, em regra, também não o interrompem os embargos contra a decisão que inadmite o REsp na origem; admite-se exceção quando a decisão é tão genérica que impede a elaboração do agravo (EAREsp 2.039.129). `` | [R10] linha 31 (quadro "Embargos de declaração interrompem o prazo"). Antes: `> Os embargos **interrompem** o prazo **para todas as partes** — salvo se **intempestivos** ou **manifestamente incabíveis**. Para o STJ, em regra são incabíveis os embargos contra a decisão que **inadmite o REsp na origem**, exceto quando ela é tão genérica que inviabiliza o agravo. O prazo …` Depois: `> Os embargos **interrompem** o prazo **para todas as partes** (art. 1.026). Embargos **intempestivos** não interrompem o prazo recursal. No STJ, em regra, também não o interrompem os embargos contra a decisão que **inadmite o REsp na origem**; admite-se exceção quando a decisão é tão genérica que impede a elaboração do agravo (EAREsp 2.039.129). O prazo …` | A 1ª parte (017, `confere`) ficou igual, em frase própria. A referência ao RE e a "manifestamente incabíveis" saiu, como na redação sugerida (o parecer registra a pendência do RE/STF para o Joaquim). |
| pe-admissibilidade-033 | procesp3.js:31 (`juris`, campo `html`) | `Orientação do STJ; confira se o tribunal de destino a segue.` | `` A Súmula 484 do STJ deve ser observada nos casos abrangidos pelo enunciado. O STJ reconhece o dever de observância de suas súmulas com fundamento no ${a(`art. 927, IV`)} (REsp 1.960.494/MS). `` | [R10] linha 58 (quadro "Súmula 484 do STJ"). Antes: `> ⚠️ A súmula é **orientação do STJ**. Confira se o tribunal de destino a segue.` Depois: `> ⚠️ A Súmula 484 do STJ **deve ser observada** nos casos abrangidos pelo enunciado. O STJ reconhece o **dever de observância** de suas súmulas com fundamento no art. 927, IV, do CPC (REsp 1.960.494/MS).` | A tese da súmula (032, `confere`) e o texto literal na nota (linha 56) não mudaram. |
| pe-admissibilidade-034 | procesp3.js:32 (`callout`, 2ª frase) | `O depósito incondicional é ato incompatível com a vontade de recorrer: <b>aquiescência tácita, preclusão lógica</b>.` | `` O depósito sem ressalva, por si só, não basta para concluir que houve aquiescência. Se o réu paga a condenação sem reserva e pede expressamente a extinção e o arquivamento, há <b>aceitação tácita e preclusão lógica</b> (${a(`art. 1.000`)}; AgInt no AREsp 2.758.505/PE). O depósito para evitar multa no cumprimento provisório não é incompatível com o recurso (${a(`art. 520, §3º`)}). `` | [R10] linha 109 (quadro "Estudo de caso — o depósito sem ressalva", "Chaves"). Antes: `> **Chaves:** o depósito **sem ressalva** é ato **incompatível** com a vontade de recorrer → **aquiescência tácita** → **preclusão lógica** (questão 1). …` Depois: `> **Chaves:** o depósito **sem ressalva**, **por si só**, não basta para concluir que houve aquiescência. Se o réu **paga** a condenação sem reserva e **pede expressamente a extinção e o arquivamento**, há **aceitação tácita** → **preclusão lógica** (art. 1.000; AgInt no AREsp 2.758.505/PE). O depósito para evitar multa no cumprimento provisório **não é incompatível** com o recurso (art. 520, § 3º) (questão 1). …` (a parte da questão 2 ficou igual). | O título do quadro e o enunciado do caso (1ª frase) ficaram iguais. A última frase (035, `confere`, devolutivo) não mudou. |

Redação: segui a sugerida, ajustando só o formato da aula (artigo com `a()`, sem "do CPC").

Teste rápido, cartões e "Os artigos, em ordem": as 3 questões (036, 037, 038, `confere`) não dependem dos trechos corrigidos e não mudaram. A aula não tem `flips` nem bloco "Os artigos, em ordem".

## Plataforma

- `node --check` em `procesp3.js`: sem erro. `git diff` confirma, nesta aula, só as linhas 30 a 32.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; as cinco redações novas estão em `prototipo/src/js/62-pk-procesp.js` (uma ocorrência de cada). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `62-pk-procesp.js`: sem erro.
- `python prototipo/build.py`: gerou `vade-sucessoes.html` (797 KB), com o texto novo.
- `node validacao/ferramentas/testar_calculadoras.js`: "Todas as verificações passaram".
- Não abri a aula no navegador; as mudanças são só de texto, sem SVG.

## Marca "Validada em"

Não aplicada. A aula não tem linha "Validada em" no código, e 010, 011 e 029 seguem `não verificável` (mantidos pela regra geral, com pendência para o Joaquim). O Orquestrador decide se a marca entra.

## Notado de passagem

- **Nota `(C) 14. Casos Práticos de Recursos.md`, Caso 8 (linhas 107–116):** o "Caminho" repete a conclusão corrigida em 034 ("Depósito sem ressalva = ato incompatível… aquiescência tácita"). A nota não é origem desta aula e o caso não aparece em outra aula do material; não alterei.
- **[R10] linha 92 (tabela "Renúncia", "ocorre após ciência da decisão"):** ligada a 029 (`não verificável`); não alterei.
- **pe-admissibilidade-018:** a referência ao RE/STF saiu com a redação sugerida; se o Joaquim pedir a pesquisa complementar indicada no parecer, ela pode voltar.
- **Teste rápido com 3 questões:** a estrutura do projeto pede 5. Não é item do parecer; não alterei.
