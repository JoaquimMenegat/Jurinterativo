# Correções · tgp-capacidade

Data: 22/10/2026 · Data-base: 20/10/2026.
Entrada: `parecer.md`. Sem `decisoes.md`.

## Resumo

- **6 aplicadas**, todas `corrigir`: 005, 009, 012, 014, 015 e 017.
- **0 bloqueadas.**
- Nenhum `divergente` no parecer.
- Não mexidos:
  - `não verificável`: 007. Continua como está, pela regra geral de 16/10/2026.
  - `confere`: os 10 demais itens com veredito.
  - O item `conceito` da ficha, sem veredito.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/tgp.js`, aula `capacidade` (linhas 210 a 231; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas.

Notas do Vault (caminho relativo a `Obsidian Vault/Faculdade/3ª Fase/Teoria Geral dos Processos/5. Aula 27-03/`):
- **[PRC]** `Procuração.md`
- **[INC]** `Incapazes Processuais (legitimatio ad processum).md`

Nenhuma é `(C)`: o texto corrigido leva a marca *(C, 22/10/2026)*. As transcrições dos arts. 103, 104 e 682 ficaram intactas; a do art. 104, § 1º, recebeu ⚖️ ao lado (contagem em dias úteis). As notas não têm diagrama, fluxograma ou quadro sobre esses pontos.

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| tgp-capacidade-005 | tgp.js:216 (`steps` "As três capacidades", etapa "Capacidade postulatória") | `Exceções: Juizado Especial até 20 salários mínimos (Lei 9.099/95, art. 9º).` | `Exceções: nos Juizados Especiais Cíveis, as partes podem atuar sem advogado nas causas de até 20 salários mínimos. No recurso, o advogado é obrigatório (Lei 9.099/1995, arts. 9º e 41, §2º).` | [PRC] linha 16: acrescentada a mesma regra, com a ressalva do recurso *(C)*. | O rótulo "Exceções:" e a 1ª frase da etapa (art. 103, `confere`) ficaram. Link mantido, com a citação ampliada. |
| tgp-capacidade-009 | tgp.js:221 (`table` "Incapazes no processo", linha 4) | `Réu preso revel, ou citado por edital ou hora certa e revel` · `Curador especial, função da Defensoria (art. 72, II e parágrafo único)` | `Réu preso revel ou réu revel citado por edital ou com hora certa` · `Curador especial enquanto não for constituído advogado. A curatela especial cabe à Defensoria Pública, nos termos da lei (art. 72, II e parágrafo único)` | [INC] linha 18: acrescentada a hipótese do art. 72, II, com a condição temporal e a Defensoria *(C)*. A frase sobre o curador do art. 72, I, ficou. | A questão 3 do teste (`CPC, art. 72, II`, `confere`) não mudou. |
| tgp-capacidade-012 | tgp.js:224 (`flips` "A procuração", cartão "Exceção", 2ª frase) | `Deve exibir a procuração em <em>15 dias, prorrogáveis por mais 15</em>.` | `Nessas hipóteses, o advogado deve exibir a procuração em <em>15 dias úteis</em>, independentemente de caução. O prazo pode ser prorrogado por igual período por despacho do juiz (arts. 104, §1º, e 219).` | [PRC] linha 7: transcrição do art. 104, § 1º, intacta, com ⚖️ "o prazo é contado em dias úteis (CPC, art. 219)" *(C)*. | O destaque `<em>` ficou no prazo. Citação com link, como nos outros cartões. Sem termo inicial, como pede o parecer. |
| tgp-capacidade-014 | tgp.js:226 (mesmo `flips`, cartão "Poderes especiais") | `Receber citação, confessar, reconhecer a procedência, transigir, desistir, renunciar, dar quitação, firmar compromisso e declarar hipossuficiência exigem cláusula específica (art. 105).` | `Exigem cláusula específica: receber citação, confessar, reconhecer a procedência do pedido, transigir, desistir, renunciar ao direito sobre o qual se funda a ação, receber, dar quitação, firmar compromisso e assinar declaração de hipossuficiência econômica (art. 105).` | Sem trecho de origem no Vault: [PRC] não lista os poderes especiais. | Link do `art. 105` mantido. |
| tgp-capacidade-015 | tgp.js:227 (mesmo `flips`, cartão "Fim do mandato") | `Revogação ou renúncia; morte ou interdição; mudança de estado; fim do prazo ou do negócio (CC, art. 682).` | `O mandato cessa por revogação ou renúncia; morte ou interdição de uma das partes; mudança de estado que inabilite o mandante a conferir poderes ou o mandatário a exercê-los; término do prazo ou conclusão do negócio. No mandato judicial, observam-se as regras processuais e, supletivamente, o CC (CC, arts. 682 e 692).` | [PRC] linha 22: acrescentado o requisito da mudança de estado e o art. 692 *(C)*. A transcrição do art. 682 (linhas 24 a 28) está correta e ficou intacta. | Citação com link ampliada para `CC, arts. 682 e 692`. |
| tgp-capacidade-017 | tgp.js:230 (`quiz`, questão 2: alternativa correta e explicação) | Alternativa: `Sim, apresentando-a em 15 dias prorrogáveis` · Explicação: `CPC, art. 104, §1º.` | Alternativa: `Sim, apresentando a procuração em 15 dias úteis, prorrogáveis por igual período por despacho do juiz` · Explicação: `CPC, art. 104, caput e §1º, e art. 219.` | Sem trecho de origem no Vault (questão do teste); ver 012. | Enunciado, alternativa "Não" e gabarito (índice 1) mantidos. |

## Plataforma

- `node --check` em `tgp.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; as seis redações novas estão em `prototipo/src/js/60-pk-tgp.js` (uma ocorrência de cada, conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `60-pk-tgp.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto em blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código, e 007 segue `não verificável`. O Orquestrador decide se a marca entra.

## Notado de passagem

- **[INC] linha 16**: "Ébrios eventuais e pródigos"; o CC, art. 4º, II, fala em ébrios **habituais**. Fora do parecer; não alterei.
- **[INC] linha 4**: afirma que todo sujeito de direitos "possui capacidade de estar em juízo", o que confunde capacidade de ser parte e de estar em juízo (CPC, art. 70). Fora do parecer; não alterei.
- **[PRC] linha 10**: "ad judicia ex extra" (provável "ad judicia et extra"). Fora do parecer; não alterei.
