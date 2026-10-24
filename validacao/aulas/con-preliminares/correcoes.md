# Correções · con-preliminares

Data: 24/10/2026 · Data-base: 22/10/2026 (o parecer registra 23/10/2026).
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **3 aplicadas**, todas `corrigir`: 001, 002 e 009.
- **0 bloqueadas.**
- Nenhum `divergente` no parecer.
- Não mexidos: os `não verificável` 007 e 012 (sem decisão do Joaquim, continuam como estão), os 8 `confere` e os conceitos 006 e 010 (sem veredito).

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/conhecimento2.js`, aula `preliminares` (linhas 3 a 13; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas. `engine.js` não foi tocado.

Nota do Vault: `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento/5. Aula 16.09/1. Providências preliminares.md` (sigla [PP]). Não é `(C)`: o texto corrigido leva a marca *(C, 24/10/2026)*. A nota não tem diagrama, fluxograma ou quadro. A transcrição do art. 337 (linhas 11 a 24) é texto de lei e não foi tocada. Também procurei o tema em `3. Aula 02.09/Contestação.md` e `Legitimidade e Competência - arts. 338, 339 e 340.md`: nenhuma repete a lista de peremptórias nem o marco do art. 347.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-preliminares-001 | conhecimento2.js:4 (`intro`) | `Terminada a resposta do réu, o juiz arruma a casa antes de decidir o rumo. Nem sempre há providências; quando há, elas abrem espaço para o autor falar e para corrigir vícios.` | `Findo o prazo para contestação, o juiz toma as providências preliminares necessárias, conforme o caso. Elas podem abrir espaço para o autor falar e para corrigir vícios. Cumpridas ou dispensadas, segue-se o julgamento conforme o estado do processo (arts. 347 a 353 do CPC).` | [PP] linha 4 ("as providências preliminares nem sempre ocorrerão, diferentemente do saneamento..."): primeira parte trocada pela redação do parecer, com "CPC, arts. 347 a 353" *(C)*. A frase sobre o saneamento ficou, só reordenada ("Já o saneamento ocorre em todo processo em que não cabe julgamento antecipado do mérito"). | Artigos em texto simples, como nos outros `intro` do pacote. |
| con-preliminares-002 | conhecimento2.js:7 (`chooser`, item "Revelia sem efeito", texto) | `o autor é intimado a especificar as provas que pretende produzir (art. 348)` | `o juiz determina que o autor especifique as provas que pretende produzir, se ainda não as tiver indicado (art. 348)` | [PP] linhas 6 e 7 (bullet "Caso o autor não tenha especificado..." e sub-bullet "isso se o réu for revel..."): fundidas em um bullet com a redação do parecer, citando "CPC, art. 345" e "art. 348" *(C)*. Linha do litisconsórcio (agora 7) mantida. | Rótulos do cartão ("Revelia sem efeito", "Autor especifica provas") mantidos: continuam corretos. A referência ao art. 345 ficou. |
| con-preliminares-009 | conhecimento2.js:11 (`vs` "Preliminares dilatórias × peremptórias", `r.i[2]`) | `Perempção, litispendência, coisa julgada, convenção de arbitragem, inépcia não sanada, ilegitimidade` | `Podem levar à extinção sem mérito: perempção, litispendência, coisa julgada, convenção de arbitragem acolhida, inépcia não sanada e ilegitimidade. Antes da extinção, cabe corrigir o vício, se possível; na ilegitimidade passiva alegada, o autor pode substituir o réu (arts. 317, 338, 339 e 485)` | [PP] linha 32, agora 31 ("Preliminares peremptórias: inépcia da petição inicial, perempção, ..."): substituída pela redação do parecer, com "CPC, arts. 317, 338, 339 e 485" *(C)*. A lista da nota não tinha ilegitimidade; passou a ter, como na redação sugerida. | Artigos com `a()`, como nos outros itens de `vs`; "do CPC" omitido, como no resto da aula. `r.i[1]` ("Encerram o processo sem mérito", 008 `confere`) não mudou. Quiz não depende deste item. |

## Plataforma

- `node --check` em `conhecimento2.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; as três redações novas estão em `prototipo/src/js/61-pk-conhecimento.js` (conferidas por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `61-pk-conhecimento.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: 007 e 012 seguem como `não verificável` aguardando o Joaquim (o parecer os lista em "Para o Joaquim decidir"), e a aula não tem linha "Validada em" no código. O Orquestrador decide.

## Notado de passagem

- **[PP] linha 6 original** dizia que o juiz manda especificar as provas "no prazo de 15 dias". O art. 348 não fixa esse prazo, e a redação do parecer não o traz; a menção saiu junto com a linha substituída. O Reconferente pode conferir se isso basta.
- **[PP] linha 4**: a frase mantida diz que todo processo sem julgamento antecipado do mérito passa pelo saneamento (já apontado em con-estado). Fora do parecer; não alterei.
- **[PP] linha 30** (dilatórias) inclui o "polo ativo incapaz" e a "falta de autorização"; o item correspondente da aula (007) é `não verificável` e ficou como está.
