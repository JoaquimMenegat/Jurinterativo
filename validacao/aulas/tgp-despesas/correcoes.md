# Correções · tgp-despesas

Data: 23/10/2026 · Data-base: 22/10/2026.
Entrada: `parecer.md` (para 016, vale a segunda conferência, já refletida no parecer). Sem `decisoes.md`.

## Resumo

- **6 aplicadas**, todas `corrigir`: 002, 006, 009, 010, 027 e 031.
- **0 bloqueadas.**
- Nenhum `divergente` no parecer. A pendência do Tema 1.255 do STF não é divergência julgada (parecer).
- Não mexidos:
  - `não verificável`: 008 (exemplos de tratados na caução) e 013 (calculadora de honorários). Continuam como estão, pela regra geral de 16/10/2026.
  - `confere`: os 24 itens.

Material: `prototipo/pacotes/inciso-materiais/src/conteudo/tgp2.js`, aula `despesas` (linhas 171 a 197; a contagem de linhas não mudou). As outras aulas do arquivo não foram tocadas. `engine.js` não foi tocado.

Notas do Vault (pasta `Obsidian Vault/Faculdade/3ª Fase/Teoria Geral dos Processos/10. Aula 12-06/`). Nenhuma é `(C)`: o texto corrigido leva a marca *(C, 23/10/2026)*.

| Sigla | Nota |
|---|---|
| [PAG] | `2. Pagamento das despesas processuais.md` |
| [CAU] | `2.1 Caução para garantia da sucumbência.md` |
| [HON] | `2.3 Honorários de sucumbência.md` |

As transcrições literais (art. 82, caput e §§ 1º a 3º, e art. 515, V, em [PAG]; art. 83 em [CAU]; art. 85, §§ 2º, 3º, 8º, 10, 11, 14, 15, 18 e 19, e CF, art. 37, XI, em [HON]) estão corretas e ficaram intactas, sem ⚖️. As linhas *(C, 12/10/2026)* de [CAU] e [HON] também ficaram intactas. As notas não têm diagrama, fluxograma ou quadro; as listas de tópicos que diziam a mesma coisa foram corrigidas. O Vault não trata da monitória (busca por "701" e "monit" na pasta da matéria).

## Correções

| ID | Arquivo:linha | Antes | Depois | Nota do Vault | Ajustes no entorno |
|---|---|---|---|---|---|
| tgp-despesas-002 | tgp2.js:175 (`tl` "O ciclo do dinheiro no processo", etapa "Adiantamento") | `Cada parte antecipa as despesas dos atos que requer; o autor adianta os determinados de ofício ou a pedido do MP fiscal (art. 82, §1º). Exceção: gratuidade da justiça (arts. 98 a 102).` | `Em regra, cada parte adianta as despesas dos atos que realiza ou requer; o autor adianta as dos atos determinados de ofício ou requeridos pelo MP fiscal (art. 82). Há regras especiais para gratuidade, cobrança de honorários por advogado, atos requeridos pela Fazenda Pública, MP ou Defensoria e perícias; nestas, o adiantamento é rateado quando determinadas de ofício ou requeridas por ambas as partes (arts. 82, §3º, 91, 95 e 98).` | [PAG] linha 6 ("Exceção - gratuidade da justiça deferida."): redação do parecer, com "CPC" *(C)*. | Os links seguem a citação do parecer: "art. 82" no lugar de "art. 82, §1º" e "arts. 82, §3º, 91, 95 e 98" no lugar de "arts. 98 a 102". |
| tgp-despesas-006 | tgp2.js:179 (`callout` "Caução do autor que mora fora (art. 83)", 1ª frase) | `Autor, brasileiro ou estrangeiro, que reside fora do país ou deixa de residir durante o processo, sem imóveis no Brasil, presta caução para custas e honorários.` | `O autor, brasileiro ou estrangeiro, que reside fora do Brasil ou deixa de residir no país durante o processo presta caução para custas e honorários do advogado da parte contrária, se não tiver imóveis no Brasil que assegurem o pagamento, ressalvadas as dispensas legais.` | [CAU] linha 13 ("caso não tenha bens imóveis") e linha 20 (requisito "Não possuir bens imóveis."): imóveis no Brasil que assegurem o pagamento; custas e honorários do advogado da parte contrária (CPC, art. 83) *(C)*. | O "(art. 83)" do parecer já está no título do callout. A frase seguinte (dispensas: tratados, execução, cumprimento de sentença e reconvenção; 008 `não verificável` nos exemplos de tratados) não foi tocada. |
| tgp-despesas-009 | tgp2.js:180 (`keys` "Honorários de sucumbência (art. 85)", item "10–20%") | `sobre condenação, proveito econômico ou valor atualizado da causa` | `sobre o valor da condenação; na ausência de condenação, sobre o proveito econômico obtido ou, não sendo possível mensurá-lo, sobre o valor atualizado da causa (§2º)` | Sem alteração: [HON] linha 47 é a transcrição literal do art. 85, § 2º, e fica intacta; a nota não tem paráfrase própria das bases. | Rótulo "regra geral" mantido. O § 2º ficou em texto simples, como o "(§14)" do item vizinho. |
| tgp-despesas-010 | tgp2.js:180 (mesmo `keys`, item "5%") | Rótulo `monitória cumprida`; texto `honorários reduzidos para quem paga no prazo (art. 701)` | Rótulo `monitória`; texto `o mandado concede 15 dias para cumprimento e pagamento de honorários de 5% do valor da causa; o cumprimento no prazo isenta o réu das custas processuais (art. 701, caput e §1º)` | Sem trecho de origem no Vault. | O rótulo perdeu "cumprida", porque os 5% são fixados no mandado, e o benefício do cumprimento é a isenção de custas (parecer). |
| tgp-despesas-027 | tgp2.js:191 (`juris` "Na jurisprudência", item Tema 1.076, campo `html`) | `Nesses casos aplicam-se obrigatoriamente os percentuais dos §§ 2º e 3º do art. 85.` | `Nesses casos, são obrigatórios os percentuais do art. 85, § 2º, ou, quando a Fazenda Pública for parte, as faixas do § 3º.` | [HON] nova linha 77, após as linhas *(C, 12/10/2026)* do Tema 1.076: percentuais do § 2º ou faixas do § 3º quando a Fazenda é parte *(C)* (mesma linha de 031). | A citação "(STJ, Tema 1.076)" da redação sugerida não foi repetida no `html`, porque o cartão já traz `court: STJ` e `year: Tema 1.076`. `tese` e `id` mantidos. |
| tgp-despesas-031 | tgp2.js:195 (teste, questão 2: enunciado e explicação) | Enunciado `Causa de R$ 50 milhões. O juiz pode fixar honorários por equidade?`; explicação `Art. 85, §6º-A, e STJ, Tema 1.076 (entre particulares; com a Fazenda, aguarda-se o STF, Tema 1.255).` | Enunciado `Causa de R$ 50 milhões, com proveito econômico mensurável e não irrisório: o valor elevado permite fixar honorários por equidade?`; explicação `Aplicam-se os percentuais legais, inclusive quando a Fazenda Pública é parte (art. 85, §§2º, 3º, 6º-A e 8º; STJ, Tema 1.076). Para causas com a Fazenda Pública, o STF ainda não julgou o mérito do Tema 1.255.` | [HON] nova linha 77: o Tema 1.076 também alcança as causas com a Fazenda Pública; o STF ainda não julgou o mérito do Tema 1.255 *(C)*. A linha 76 (*C, 12/10/2026*, Tema 1.255 no STF) ficou intacta. | Alternativas (`Sim`, `Não`) e gabarito (`Não`) mantidos. Os artigos viraram link `a()`. O cartão "Equidade" do `chooser` ("Nas causas com a Fazenda Pública, a questão aguarda o STF (Tema 1.255)") não está no parecer como `corrigir` e não foi tocado; ver "Notado de passagem". |

## tgp-despesas-013 · calculadora de honorários (`não verificável`)

Não mexido, nem a calculadora (`engine.js`) nem a aula. Registro, por ordem do Orquestrador: a regra da calculadora `honor` é testada em `validacao/ferramentas/testar_calculadoras.js` (linhas 125 a 136), com o escalonamento do art. 85, §§ 3º e 5º. Para 3.000 salários mínimos, o teste espera **214 SM no mínimo** (200 × 10% + 1.800 × 8% + 1.000 × 5%) e **300 SM no máximo** (200 × 20% + 1.800 × 10% + 1.000 × 8%). Rodei o script em 23/10/2026, depois da importação: os três testes de honorários passaram (214, 300 e 15 SM).

## Plataforma

- `node --check` em `tgp2.js`: sem erro.
- `python prototipo/importar_pacote.py prototipo/pacotes/inciso-materiais`: gerou os arquivos de conteúdo; a redação nova está em `prototipo/src/js/60-pk-tgp.js` (conferida por busca). A cópia final falhou com `WinError 32`, a falha conhecida e inofensiva.
- `node --check` em `60-pk-tgp.js`: sem erro.
- Não rodei `build.py` nem abri a aula no navegador; as mudanças são só de texto, nos blocos existentes.

## Marca "Validada em"

Não aplicada: a aula não tem linha "Validada em" no código, e 008 e 013 seguem `não verificável`. O Orquestrador decide se a marca entra.

## Notado de passagem

- **Cartão "Equidade" do `chooser` (tgp2.js:184)**: termina com "Nas causas com a Fazenda Pública, a questão aguarda o STF (Tema 1.255)". Depois da correção de 031, que diz que o Tema 1.076 também alcança a Fazenda, a frase pode sugerir que a regra não vale para ela. Fora do parecer; não alterei.
- **[PAG] linha 19**: "Quando o MP atua como parte, as custas processuais não serão cobradas". Toca o regime do art. 91, que o parecer só menciona em 002. Não conferido; não alterei.
- **[CAU] linhas 16 e 40**: "incumbe ao réu requerer a caução" e "Incumbe ao réu fiscalizar o bem garantido", sem artigo. Não conferido; fora do parecer.
