# Correções · con-contestacao

Data: 24/10/2026 · Data-base: 23/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **11 aplicadas**, todas `corrigir`: 002, 007, 008, 010, 015, 017, 021, 022, 023, 025 e 028.
- **0 bloqueadas.**
- Nenhum `divergente`, `não verificável` nem `citação doutrinária` no parecer.
- Não mexidos: os 19 itens `confere`. Conceitos sem veredito: 012 (mnemônico) e 024 ("Manter").

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/conhecimento.js`, aula `contestacao` (linhas 109 a 135; a ficha registrava a origem na linha 107, antes das correções de outras aulas do arquivo). Nenhuma linha nova. As outras aulas do arquivo não foram tocadas. `engine.js` não foi tocado.

Notas do Vault (pasta `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento/3. Aula 02.09/`). Nenhuma é `(C)`: o texto corrigido entrou em linhas novas, abaixo do trecho de origem, com a marca *(C, 24/10/2026)*. Os números de linha abaixo são os de depois da inserção.

- [CON] `Contestação.md`
- [EST] `Estrutura da contestação.md`
- [ONUS] `Ônus da impugnação específica.md`
- [LEG] `Legitimidade e Competência - arts. 338, 339 e 340.md`

Transcrições literais intactas, sem ⚖️, porque estão corretas: art. 337 ([CON] linhas 16 a 35, inclusive o § 5º, que reproduz a lei; a ressalva do art. 63 entrou em [EST]), art. 231 ([CON] linhas 68 a 81 e 90), art. 336 ([CON] linha 101), art. 341, parágrafo único, e art. 342 ([ONUS] linhas 12 e 16 a 19). As notas não têm diagrama nem fluxograma; as listas de termo inicial ([CON] linhas 58 a 64) e das opções do autor ([CON] linhas 44 a 46; [LEG] linhas 5 a 10) receberam as linhas *(C)*.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-contestacao-002 | conhecimento.js:112 (`chooser`, título e `hint`) | Título `Quando começam os 15 dias`; hint `art. 335. Dobro para Fazenda, MP e Defensoria.` | Título `Quando começam os 15 dias úteis`; hint `O prazo comum para contestar é de 15 dias úteis (arts. 335 e 219). Dobro para Fazenda, MP e Defensoria.` | [CON] nova linha 56, abaixo da linha 55 ("Prazo da contestação: 15 dias..."). | "Dobro para Fazenda, MP e Defensoria" (003, `confere`) mantido. |
| con-contestacao-007 | conhecimento.js:115 (mesmo `chooser`, opção "Sem audiência") | `Vários réus: a última das datas (art. 231, §1º).` | `Vários réus: nas hipóteses dos incisos I a VI do art. 231, o dia do começo do prazo para contestar corresponde à última dessas datas (art. 231, § 1º).` | [CON] nova linha 88, abaixo da linha 87 ("LU = ... §1º do art. 231"). | Primeira frase da opção (006, `confere`) mantida. |
| con-contestacao-008 | conhecimento.js:116 (mesmo `chooser`, opção "Desistência quanto a um réu") | `Se o autor desiste em relação a réu ainda não citado, os demais contam da intimação da decisão que homologar a desistência (§2º).` | `Quando não se admite autocomposição, havendo litisconsórcio passivo e desistência quanto a réu ainda não citado, o prazo de resposta dos demais corre da intimação da decisão que homologar a desistência (art. 335, § 2º).` | [CON] nova linha 96, abaixo da linha 95 ("O prazo da contestação em caso da desistência..."). | Remissão "§2º" passou a "art. 335, § 2º", como na redação sugerida. Rótulos da opção mantidos. |
| con-contestacao-010 | conhecimento.js:117 (`table` "Preliminares (art. 337)", `hint`) | `Vêm antes do mérito. O juiz conhece de ofício todas, exceto convenção de arbitragem e incompetência relativa (§5º).` | `Vêm antes do mérito. O juiz conhece de ofício as matérias do art. 337, exceto convenção de arbitragem e, em regra, incompetência relativa (§5º). O art. 63 admite atuação de ofício diante de cláusula de eleição de foro abusiva antes da citação (§ 3º) e de ajuizamento em juízo aleatório (§ 5º).` | [EST] nova linha 36, abaixo da linha 35 ("Menos a incompetência relativa e a convenção de arbitragem."). | Quiz 1 (030, arbitragem) não depende da ressalva; mantido. |
| con-contestacao-015 | conhecimento.js:122 (`sorter`, 3º cartão) | Caso `O autor abandonou a mesma ação três vezes e propõe a quarta.`; explicação `art. 486, §3º: não pode propor de novo, mas pode alegar o direito em defesa.` | Caso `O autor deu causa, por três vezes, a sentenças de extinção por abandono e propõe nova ação contra o mesmo réu com o mesmo objeto.`; explicação `Há perempção: não pode renovar a ação, mas pode alegar seu direito em defesa (art. 486, § 3º).` | [EST] nova linha 46, abaixo das linhas 44 e 45 (perempção). | Categoria certa mantida (índice 2, "Perempção"). |
| con-contestacao-017 | conhecimento.js:125 (`flips` "Ônus e limites da defesa", cartão "Impugnação específica", verso) | `Fato não impugnado presume-se verdadeiro, salvo se não admitir confissão, faltar instrumento essencial ou contradizer a defesa como um todo (art. 341).` | `Presumem-se verdadeiras as alegações de fato não impugnadas, salvo se não admitirem confissão, se a inicial não vier acompanhada de instrumento que a lei considere da substância do ato ou se contradisserem a defesa em seu conjunto (art. 341).` | [ONUS] nova linha 10, abaixo da lista de exceções (linhas 5 a 9). | Frente do cartão mantida. |
| con-contestacao-021 | conhecimento.js:130 (`chooser` "O réu diz que não é o réu", opção "Substituir", 1ª frase) | `O autor pode, em 15 dias, alterar a inicial e substituir o réu, ...` | `Alegada a ilegitimidade ou a ausência de responsabilidade pelo prejuízo, o juiz facultará ao autor substituir o réu em 15 dias úteis, contados da intimação desse ato judicial, conforme os arts. 224 e 231 (arts. 338 e 219).` | [LEG] nova linha 6, abaixo da linha 5 ("o juiz concederá o prazo de 15 dias"); [CON] nova linha 47, abaixo das linhas 44 a 46 (lista das opções), junto com 022 e 023. | A frase única da opção virou duas (021 e 022). Rótulos mantidos. |
| con-contestacao-022 | conhecimento.js:130 (mesma opção, 2ª frase) | `... reembolsando despesas e pagando honorários de 3% a 5% do valor da causa ao excluído (ou por equidade, se irrisório).` | `Realizada a substituição, o autor reembolsa as despesas e paga honorários ao procurador do réu excluído, entre 3% e 5% do valor da causa; se esse valor for irrisório, aplica-se o art. 85, § 8º (art. 338, parágrafo único).` | [LEG] nova linha 11, abaixo da linha 10 ("Substitua o polo passivo..."); [CON] linha 47. | Quiz 3 (032, `confere`) mantido: o parecer o dá como certo e remete a precisão do destinatário a este ID. |
| con-contestacao-023 | conhecimento.js:131 (mesmo `chooser`, opção "Incluir") | `O autor pode manter o réu e incluir o indicado como litisconsorte passivo (art. 339, §2º).` | `O autor pode, em 15 dias úteis, alterar a inicial para incluir o sujeito indicado como litisconsorte passivo, mantendo o réu original (arts. 339, § 2º, e 219).` | [LEG] nova linha 8, abaixo da linha 7 ("Inclua um novo réu..."); [CON] linha 47. | Rótulos mantidos. |
| con-contestacao-025 | conhecimento.js:133 (mesmo `chooser`, opção "Dever do réu") | `Sempre que souber, o réu indica o sujeito passivo correto, sob pena de arcar com despesas e indenizar o autor (art. 339).` | `Ao alegar sua ilegitimidade, o réu deve indicar o sujeito passivo sempre que souber quem é, sob pena de arcar com despesas processuais e indenizar o autor pelos prejuízos decorrentes da falta de indicação (art. 339).` | [LEG] nova linha 14, abaixo da linha 13 ("Ademais, o réu que alegar ilegitimidade..."). | Rótulos mantidos. |
| con-contestacao-028 | conhecimento.js:134 (`callout` "Contestação no foro do réu (art. 340)", 3ª frase) | `Reconhecida a competência do foro do réu, este fica prevento.` | `Reconhecida a competência do foro indicado pelo réu, fica prevento o juízo ao qual foi distribuída a contestação ou a carta precatória (art. 340, § 2º).` | [LEG] nova linha 22, abaixo da linha 21 ("o foro de seu domicílio será considerado prevento"). | Demais frases do callout (026, 027 e 029, `confere`) mantidas. |

## Plataforma

- `node --check` em `conhecimento.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/61-pk-conhecimento.js` (conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `61-pk-conhecimento.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código (mesmo critério das aulas anteriores do arquivo).

## Notado de passagem

- **[EST] linhas 18 a 20**: o mnemônico "2 con" lista "Continência", mas o art. 337, X, é convenção de arbitragem (a aula já diz convenção). Fora do parecer; não alterei.
- **[CON] linha 41**: diz que o art. 339 trata da ilegitimidade "de parte autora"; o artigo trata da ilegitimidade alegada pelo réu. Não alterei.
- **[CON] linha 66**: "o réu é citado em até 20 dias de antecedência e deverá informar seu desejo ... em até 10 dias" mistura prazos do art. 334 (citação com 20 dias de antecedência; petição do réu 10 dias antes da audiência). Não alterei.
