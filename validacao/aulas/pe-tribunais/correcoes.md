# Correções · pe-tribunais

Data: 18/10/2026 · Data-base: 17/10/2026.
Entrada: `parecer.md`. Não há `decisoes.md`.

## Resumo

- **7 aplicadas**, todas `corrigir`: 016, 024, 030, 033, 035, 036 e 046.
- **0 bloqueadas.**
- Não mexidos:
  - 36 `confere`: 002, 006 a 015, 017 a 023, 025 a 029, 031, 032, 034, 038 a 041, 043 a 045 e 047 a 049.
  - 1 `não verificável`: 037 (julgamento decomposto). Continua como está, pela regra geral de 16/10/2026.
  - 5 conceitos sem veredito: 001, 003, 004, 005 e 042.
- Nenhum item `divergente` nem citação doutrinária.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/procesp3.js`, aula `tribunais` (linhas 3 a 13). Só mudaram as linhas 8 (`chooser`), 9 (`flips`), 10 (`tl`) e 12 (`vs` da ampliação). Nenhuma outra aula do arquivo foi tocada.

Notas do Vault (caminho relativo a `Obsidian Vault/Faculdade/6ª Fase/2. Procedimentos Especiais/Recursos/0. Material do Professor/`):
- **[R2]** `(C) 2. Precedentes Vinculantes.md`
- **[R3]** `(C) 3. Atribuições do Relator.md`
- **[R4]** `(C) 4. O Julgamento Colegiado.md`
- **[R5]** `(C) 5. Ampliação do Colegiado.md`

Busquei na pasta `Recursos/0. Material do Professor` por "modul", "contrarraz", "videoconfer", "vista", "proclama", "corte especial" e "946". A pasta `Recursos` não tem `1. Material de Concurso`.

As quatro notas são `(C)` (geradas por IA). O `CONTEXTO.md` manda usar a marca *(C, data)* só nas notas sem `(C)`. Por isso, corrigi o texto diretamente em [R4] e não pus a marca *(C, 18/10/2026)*, como nos lotes anteriores (pe-forca a pe-inventario). A transcrição do art. 942 em [R5] (linha 16) e a citação entre aspas em [R5] (linha 32) ficaram intactas; nenhuma é contrariada pelas correções, por isso não pus aviso ⚖️. As linhas do Vault abaixo são as de depois da correção (não mudou o número de linhas).

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| pe-tribunais-016 | procesp3.js:8 (`chooser`, item "Tese superada / Overruling") | `<p>Pode deixar de aplicar, fundamentando a superação; o tribunal pode modular efeitos (${a(`art. 927, §3º`)}).</p>` | `<p>Pode deixar de aplicar, fundamentando a superação. Na alteração prevista no ${a(`art. 927, §3º`)}, o órgão prolator do precedente pode modular seus efeitos por interesse social e segurança jurídica; o tribunal de origem não pode modular precedente do STJ (AREsp 1.033.647/RO).</p>` | Nenhuma alteração: [R2] (linha 47, quadro dos três caminhos) trata do overruling sem falar em modulação; nenhuma nota da pasta menciona modulação. | A primeira frase (015, `confere`) ficou, como frase própria. |
| pe-tribunais-024 | procesp3.js:9 (`flips`, cartão "Julgar o mérito sozinho", 2ª parte) | `Negar provimento a recurso contrário a súmula, repetitivo, REsp com relevância reconhecida, IRDR ou IAC; dar provimento, depois das contrarrazões, se a decisão recorrida for contrária a eles (${a(`IV e V`)}).` | `Negar provimento a recurso contrário a súmula, repetitivo, REsp com relevância reconhecida, IRDR ou IAC (${a(`art. 932, IV`)}). Depois de facultada a apresentação de contrarrazões, o relator pode dar provimento sozinho se a decisão contrariar súmula do STF, do STJ ou do próprio tribunal, repetitivo, REsp com relevância reconhecida, IRDR ou IAC (${a(`art. 932, V`)}).` | Nenhuma alteração: [R3] (linhas 47 a 54) lista as hipóteses do art. 932, IV e V, sem mencionar contrarrazões. | A 1ª parte (023, `confere`) ficou igual; só a citação `IV e V` foi dividida em `art. 932, IV` e `art. 932, V`, uma para cada frase. O cartão vira flashcard sozinho. |
| pe-tribunais-030 | procesp3.js:10 (`tl`, etapa "Sustentação oral", parte final) | `…; preferência pedida até o início da sessão (§2º) e, por videoconferência, requerida até o dia anterior (§4º).` | `…; preferência pedida até o início da sessão (§2º). Pelo §4º, o advogado com domicílio profissional em cidade diversa da sede do tribunal pode sustentar por videoconferência, requerendo até o dia anterior à sessão.` | Nenhuma alteração: [R4] linha 26 já diz `por **videoconferência**, o advogado com domicílio profissional em cidade diversa da sede do tribunal deve requerer até o dia anterior (§4º);`. | A etapa já cita o "art. 937" no começo; por isso a redação sugerida ficou "Pelo §4º", sem repetir "art. 937". 028 e 029 (`confere`) não mudaram. |
| pe-tribunais-033 | procesp3.js:10 (`tl`, etapa "Mérito", 2ª frase) | `Vista por até 10 dias (${a(`art. 940`)}).` | `Vista por até 10 dias úteis, com possibilidade de prorrogação, a pedido do julgador, por até mais 10 dias (${a(`arts. 940 e 219`)}).` | [R4] linha 39. Antes: `- Se algum juiz **não se sentir habilitado** para julgar, pode **pedir vistas por 10 dias**;` Depois: `- Se algum juiz **não se sentir habilitado** para julgar, pode **pedir vista por até 10 dias úteis**, com possibilidade de prorrogação, a pedido do julgador, por até mais 10 dias (arts. 940 e 219, CPC);` | 032 (`confere`), na 1ª frase da etapa, não mudou. |
| pe-tribunais-035 | procesp3.js:10 (`tl`, etapa "Resultado", 1ª frase, 2ª parte) | `Voto vencido é declarado e integra o acórdão; o voto pode mudar até a proclamação (${a(`art. 941`)}).` | `Voto vencido é declarado e integra o acórdão (${a(`art. 941`)}). O voto pode ser alterado até a proclamação do resultado, salvo o já proferido por juiz afastado ou substituído (${a(`art. 941, §1º`)}).` | [R4] linha 57. Antes: `- **Até o encerramento da votação** o julgador pode **alterar o voto**;` Depois: `- **Até a proclamação do resultado** o julgador pode **alterar o voto**, salvo o já proferido por juiz afastado ou substituído (art. 941, § 1º, CPC);` | A parte do voto vencido (034, `confere`) virou frase própria e manteve a citação `art. 941`. O marco "encerramento da votação" da nota foi trocado pelo da redação sugerida ("proclamação do resultado"), que é o do art. 941, § 1º. |
| pe-tribunais-036 | procesp3.js:10 (`tl`, etapa "Resultado", 2ª frase) | `Agravo se julga antes da apelação do mesmo processo (${a(`art. 946`)}).` | `O agravo de instrumento é julgado antes da apelação interposta no mesmo processo (${a(`art. 946`)}).` | Nenhuma alteração: [R4] linha 59 já diz `O **agravo de instrumento será julgado ANTES da apelação** interposta no mesmo processo.` | — |
| pe-tribunais-046 | procesp3.js:12 (`vs` "Ampliação do colegiado", coluna "Quando", 4º item) | `Não se aplica a IRDR, assunção de competência, remessa necessária e plenário` | `Não se aplica a IRDR, IAC, remessa necessária nem a julgamento não unânime pelo plenário ou pela corte especial (${a(`art. 942, §4º`)})` | Nenhuma alteração: [R5] não lista as exclusões do § 4º (o quadro "Cabimento", linhas 25 a 29, só traz as hipóteses de cabimento). | O item ganhou a citação com `a()`, como os demais blocos da aula. O teste (quiz 2, 048, `confere`) não depende da lista de exclusões. |

Redação: segui a sugerida pelo parecer, ajustando só ao formato de cada bloco:
- O artigo vai com `a()`, como nos demais, sem "CPC," (a aula é toda do CPC).
- Em 024, 035 e 036, o trecho corrigido dividia o mesmo cartão ou etapa com um item `confere` (023, 034); cada um virou frase própria, sem mudar o conteúdo do item `confere`.

Teste rápido, "Os artigos, em ordem" e tabelas: a aula tem só 3 questões e não tem bloco "Os artigos, em ordem". Nenhuma questão nem a tabela do art. 927 (linha 7) dependem dos itens corrigidos; não mudaram.

## Plataforma

- `node --check` em `procesp3.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo. As sete redações novas estão em `prototipo/src/js/62-pk-procesp.js` (conferido por busca). No passo final, a cópia do pacote sobre ele mesmo falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `62-pk-procesp.js`: sem erro.
- `node validacao/ferramentas/testar_calculadoras.js`: "Todas as verificações passaram".
- `python prototipo/build.py`: gerou `vade-sucessoes.html` (794 KB). Não abri a aula no navegador; as mudanças são só de texto, sem SVG.

## Marca "Validada em"

Não aplicada. A aula `tribunais` não tem linha "Validada em" no código, e 037 segue `não verificável` (mantido pela regra geral, à espera de decisão do Joaquim sobre pesquisa aprofundada). O Orquestrador decide se a marca entra.

## Notado de passagem

- **Teste rápido com 3 questões:** a estrutura do projeto pede 5. Não é item do parecer; não alterei.
- **Cartão "Incumbências" (procesp3.js:9, 020, `confere`):** diz "intimar o MP" sem "quando for o caso"; o parecer aceitou como síntese. Não alterei.
- **[R4] linha 17:** "5 dias entre a publicação da pauta e a sessão", sem "úteis" (026, `confere`, indica que a contagem é em dias úteis pelo art. 219). Não alterei, por não ser item `corrigir`.
- **[R4] linha 56:** "Voto divergente deve ser declarado"; a aula diz "voto vencido" (034, `confere`). Não alterei.
- **[R4] linhas 66 a 73 (caso do julgamento decomposto):** depende de 037 (`não verificável`). Não alterei.
- **[R2] linhas 54 e 55, [R4] linha 66:** "Caso do professor" e menção a TJSC/comarca; a regra 1 proíbe isso no material (não no Vault), e a aula não reproduz. Não alterei.
