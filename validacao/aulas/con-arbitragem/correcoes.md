# Correções · con-arbitragem

Data: 24/10/2026 · Data-base: 23/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **9 aplicadas**, todas `corrigir`: 004, 005, 010, 013, 014, 015, 029, 031 e 033.
- **0 bloqueadas.**
- Nenhum `divergente` nem `citação doutrinária` no parecer.
- Não mexidos:
  - `não verificável`: 032 (teste 1, guarda de filhos). Continua como está, pela regra geral de 16/10/2026; o parecer o lista em "Para o Joaquim decidir", e não há `decisoes.md`.
  - `confere`: os 23 itens. Conceito sem veredito: 001.
- Lacuna respeitada em 015: não acrescentei "úteis" nem "corridos" aos 90 dias, como manda o parecer.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/conhecimento2.js`, aula `arbitragem` (linhas 115 a 121; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas, salvo `saneamento`, `aij`, `tutelas` e `sentenca`, corrigidas antes nesta rodada. `engine.js` não foi tocado.

Nota do Vault: `Obsidian Vault/Faculdade/4ª Fase/Processo de conhecimento/8. Aula 11.11/Lei da arbitragem - tópicos.md` ([ARB]). Não é `(C)`: o texto corrigido entrou em linhas novas, abaixo do trecho de origem, com a marca *(C, 24/10/2026)*. Os números de linha são os de depois da inserção. A nota é uma lista curta, sem diagrama, fluxograma, quadro, julgado ou citação literal. Não há nela trecho de origem de 005, 015, 029, 031 e 033.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| con-arbitragem-004 | conhecimento2.js:118 (`flips` "O essencial da Lei 9.307/96", cartão "Objeto", 2ª frase) | `A Administração Pública também pode usar (§1º).` | `A Administração Pública direta e indireta pode usar arbitragem sobre direitos patrimoniais disponíveis, sempre de direito e respeitada a publicidade (arts. 1º, §1º, e 2º, §3º).` | [ARB] nova linha 11, abaixo da linha 10 ("As decisões são relativas à direitos patrimoniais disponíveis"): redação do parecer *(C)*. | "§1º" virou link `a()` "arts. 1º, §1º, e 2º, §3º". 1ª frase do cartão (`confere`) mantida. |
| con-arbitragem-005 | conhecimento2.js:118 (mesmo `flips`, cartão "Convenção", parêntese da cláusula) | `Cláusula compromissória (antes do conflito, no contrato) ou compromisso arbitral (depois do conflito) (art. 3º).` | `Cláusula compromissória (convenção escrita para submeter à arbitragem litígios futuros relativos ao contrato, inserida nele ou em documento apartado que a ele se refira, art. 4º) ou compromisso arbitral (depois do conflito) (art. 3º).` | Sem trecho de origem no Vault. | A redação do parecer entrou no parêntese da cláusula, para manter o cartão numa frase que compara as duas espécies. A parte do compromisso arbitral (`confere`) ficou. Novo link `a()` "art. 4º". |
| con-arbitragem-010 | conhecimento2.js:118 (mesmo `flips`, cartão "Sentença", 1ª parte) | `Não se sujeita a recurso nem homologação, e tem os mesmos efeitos da judicial;` | `A sentença arbitral nacional não se sujeita a recurso nem a homologação judicial (art. 18), sem prejuízo dos arts. 30 e 33. A estrangeira depende de homologação pelo STJ (art. 35). Tem os mesmos efeitos da judicial;` | [ARB] nova linha 9, abaixo da linha 8 ("A sentença do árbitro é título executivo"): redação do parecer *(C)*. | O resto do cartão ("se condenatória, é título executivo judicial (art. 31; CPC, art. 515, VII)", `confere`) ficou; o art. 31 passou a fundamentar só os efeitos e o título, como aponta o parecer. Novos links `a()` "art. 18", "arts. 30 e 33" e "art. 35". |
| con-arbitragem-013 | conhecimento2.js:118 (mesmo `flips`, cartão "Urgência", 1ª parte) | `Antes de instituída a arbitragem, a parte pede tutela ao Judiciário;` | `Antes de instituída a arbitragem, a parte pode pedir medida cautelar ou de urgência ao Judiciário. A medida perde eficácia se a parte interessada não requerer a instituição da arbitragem em 30 dias da efetivação da decisão (art. 22-A).` | [ARB] nova linha 13, abaixo da linha 12 ("Haverá tutela jurisdicional quando necessitar de medidas cautelares de urgência"): redações do parecer de 013 e 014 *(C)*. | O link único "arts. 22-A e 22-B" virou dois: "art. 22-A" e "art. 22-B". |
| con-arbitragem-014 | conhecimento2.js:118 (mesmo cartão, 2ª parte) | `depois, os árbitros mantêm ou revogam (arts. 22-A e 22-B).` | `Instituída a arbitragem, cabe aos árbitros manter, modificar ou revogar a medida concedida pelo Judiciário; novos pedidos são dirigidos aos árbitros (art. 22-B).` | [ARB] mesma linha 13. | — |
| con-arbitragem-015 | conhecimento2.js:118 (mesmo `flips`, cartão "Anulação") | `Ação em 90 dias (art. 33).` | `A parte interessada pode pedir judicialmente a nulidade da sentença arbitral em até 90 dias do recebimento da notificação da sentença parcial ou final, ou da decisão do pedido de esclarecimentos (art. 33, §1º).` | Sem trecho de origem no Vault. | Link `a()` passou de "art. 33" para "art. 33, §1º". Sem "úteis"/"corridos" (lacuna do parecer). |
| con-arbitragem-029 | conhecimento2.js:120 (`arts` "Os artigos-chave da matéria", item "Art. 300", resumo) | `Probabilidade do direito e perigo de dano.` | `Tutela de urgência: probabilidade do direito e perigo de dano ou risco ao resultado útil do processo.` | Sem trecho de origem no Vault. | Rótulo ("Art. 300") e título ("Urgência") mantidos; o travessão da redação sugerida virou dois-pontos, como nos outros resumos sem travessão. |
| con-arbitragem-031 | conhecimento2.js:120 (mesmo `arts`, item "Art. 502", resumo) | `Imutabilidade da decisão de mérito.` | `Coisa julgada material: autoridade que torna imutável e indiscutível a decisão de mérito não mais sujeita a recurso.` | Sem trecho de origem no Vault. | Rótulo e título ("Coisa julgada") mantidos. |
| con-arbitragem-033 | conhecimento2.js:121 (teste, questão 2: enunciado e explicação) | Enunciado `Sentença arbitral precisa ser homologada pelo juiz?`; explicação `art. 18.` | Enunciado `Sentença arbitral nacional precisa de homologação judicial?`; explicação `art. 18. A sentença arbitral estrangeira depende de homologação pelo STJ (art. 35).` | Sem trecho de origem no Vault (coberto pela linha 9 de 010). | Alternativas (`Sim`, `Não`) e gabarito (`Não`) mantidos. |

## Plataforma

- `node --check` em `conhecimento2.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/61-pk-conhecimento.js` (conferida por busca de trecho de 005). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `61-pk-conhecimento.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código (mesmo critério das aulas anteriores do arquivo). 032 continua `não verificável`.

## Notado de passagem

- **Item "Art. 335" do bloco `arts`** ("Termo inicial do prazo de 15 dias."): sem "úteis". Não está no parecer como `corrigir`.
- **[ARB] linha 4**: chama a arbitragem de jurisdição "administrativa". Fora dos itens do parecer; não alterei.
