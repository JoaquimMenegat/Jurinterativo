/* ================= Matéria: tgp (gerado por importar_pacote.py — não editar) ================= */
(function(){
const a=s=>`<span class="art-ref">${s}</span>`;const PK={};
PK.c={id:`tgp`,title:`Teoria Geral do Processo`,kicker:`Matéria I`,h1a:`Teoria geral`,h1b:`do processo`,
intro:`Jurisdição, ação e processo, do princípio ao fim do processo: competência, sujeitos, terceiros, prazos, nulidades e custos. Cada módulo tem simuladores e termina com um teste.`,
seal:{ring:`JURISDIÇÃO • AÇÃO • PROCESSO • LEI 13.105/2015 • `,word:`Processo`,sub:`inércia e impulso`},
footer:`JurInterativo — Teoria Geral do Processo. Conteúdo escrito a partir do Código de Processo Civil (Lei 13.105/2015), da Constituição Federal e da legislação citada. Material em revisão jurídica: confira sempre o texto vigente.`,
mods:[
/* ================= I ================= */
{id:`fundamentos`,group:`Fundamentos`,title:`Jurisdição, ação e processo`,
intro:`Toda a teoria geral se apoia em três institutos. Nenhum existe sem os outros: a jurisdição precisa ser provocada pela ação, e a ação só chega a um resultado por meio do processo.`,
blocks:[
{t:`svg`,h:`A tríade estrutural`,hint:`Um pressupõe o outro. Role até aqui e veja o triângulo se formar.`,html:`<svg viewBox="0 0 700 380" role="img" aria-label="Triângulo com jurisdição, ação e processo nos vértices">
<path class="draw" d="M350,50 L600,320 L100,320 Z" fill="none" stroke="var(--brass)" stroke-width="3"/>
<g class="pop" style="transition-delay:.5s"><circle cx="350" cy="50" r="40" fill="var(--seal)"/><text x="350" y="56" text-anchor="middle" fill="#fff" font-size="15" font-weight="700">Jurisdição</text></g>
<g class="pop" style="transition-delay:.8s"><circle cx="100" cy="320" r="40" fill="var(--ink)"/><text x="100" y="326" text-anchor="middle" fill="var(--paper)" font-size="15" font-weight="700">Ação</text></g>
<g class="pop" style="transition-delay:1.1s"><circle cx="600" cy="320" r="40" fill="var(--sage)"/><text x="600" y="326" text-anchor="middle" fill="#fff" font-size="15" font-weight="700">Processo</text></g>
<text class="pop" style="transition-delay:1.3s" x="205" y="170" text-anchor="middle" fill="var(--muted)" font-size="13">provoca</text>
<text class="pop" style="transition-delay:1.4s" x="495" y="170" text-anchor="middle" fill="var(--muted)" font-size="13">se exerce por</text>
<text class="pop" style="transition-delay:1.5s" x="350" y="345" text-anchor="middle" fill="var(--muted)" font-size="13">instaura e movimenta</text></svg>`},
{t:`flips`,h:`Cada instituto em uma frase`,items:[
[`Jurisdição`,`Do latim <em>juris dictio</em>, "dizer o direito". Função do Estado de resolver conflitos aplicando a lei. É una: exercida por juízes e tribunais em todo o país (${a(`CPC, art. 16`)}).`],
[`Ação`,`Direito público, subjetivo, <em>autônomo e abstrato</em> de provocar a jurisdição. Existe mesmo que o autor não tenha razão: perder a causa não significa que não havia direito de ação.`],
[`Processo`,`De <em>pro-cedere</em>, "caminhar para frente". Sequência ordenada de atos, presidida pelo juiz, que só é legítima se respeitar o <em>devido processo legal</em>.`],
[`Lide`,`Conflito de interesses qualificado por uma pretensão resistida. É o que a jurisdição contenciosa resolve.`]]},
{t:`callout`,kind:`brass`,title:`Por que a ação é dirigida ao Estado`,html:`<p>No dia a dia se diz "vou entrar com uma ação contra fulano". Tecnicamente, a ação é um pedido ao Estado-juiz; o réu é quem suporta os efeitos do que o juiz decidir. A Lei 13.105/2015 é o Código de Processo Civil que organiza todo esse caminho.</p>`},
{t:`table`,h:`Os sujeitos e seus nomes`,hint:`O nome muda conforme o tipo de processo.`,head:[`Sujeito`,`No processo civil`,`Na execução`,`No processo penal`],rows:[
[`Autor`,`Requerente`,`Exequente`,`Ministério Público (autor da ação penal pública, por denúncia) ou querelante`],
[`Réu`,`Requerido`,`Executado`,`Denunciado (no inquérito, indiciado)`],
[`Juiz`,`Magistrado; "juízo" é o órgão`,`Juízo da execução`,`Juízo criminal`]]},
{t:`svg`,h:`Como a Justiça está dividida`,html:`<svg viewBox="0 0 760 330" role="img" aria-label="Organograma: justiça comum (estadual e federal) e especial (trabalho, eleitoral, militar)">
<g class="pop"><rect x="300" y="10" width="160" height="44" fill="var(--ink)"/><text x="380" y="38" text-anchor="middle" fill="var(--paper)" font-size="15" font-weight="700">Poder Judiciário</text></g>
<path class="draw" d="M380,54 V80 H190 V105 M380,80 H570 V105" fill="none" stroke="var(--line)" stroke-width="2"/>
<g class="pop" style="transition-delay:.4s"><rect x="110" y="105" width="160" height="40" fill="var(--seal)"/><text x="190" y="131" text-anchor="middle" fill="#fff" font-size="14" font-weight="700">Justiça comum</text></g>
<g class="pop" style="transition-delay:.5s"><rect x="490" y="105" width="160" height="40" fill="var(--brass)"/><text x="570" y="131" text-anchor="middle" fill="#1B2540" font-size="14" font-weight="700">Justiça especial</text></g>
<path class="draw" d="M190,145 V170 H95 V190 M190,170 H285 V190 M570,145 V170 H460 V190 M570,170 V190 M570,170 H680 V190" fill="none" stroke="var(--line)" stroke-width="2"/>
<g class="pop" style="transition-delay:.8s"><rect x="25" y="190" width="140" height="56" fill="none" stroke="var(--seal)" stroke-width="2"/><text x="95" y="213" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700">Estadual</text><text x="95" y="233" text-anchor="middle" fill="var(--muted)" font-size="11">residual · juízes e TJ</text></g>
<g class="pop" style="transition-delay:.9s"><rect x="215" y="190" width="140" height="56" fill="none" stroke="var(--seal)" stroke-width="2"/><text x="285" y="213" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700">Federal</text><text x="285" y="233" text-anchor="middle" fill="var(--muted)" font-size="11">União · juízes e TRF</text></g>
<g class="pop" style="transition-delay:1s"><rect x="400" y="190" width="120" height="56" fill="none" stroke="var(--brass)" stroke-width="2"/><text x="460" y="223" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700">Trabalho</text></g>
<g class="pop" style="transition-delay:1.1s"><rect x="525" y="190" width="90" height="56" fill="none" stroke="var(--brass)" stroke-width="2"/><text x="570" y="223" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700">Eleitoral</text></g>
<g class="pop" style="transition-delay:1.2s"><rect x="620" y="190" width="120" height="56" fill="none" stroke="var(--brass)" stroke-width="2"/><text x="680" y="223" text-anchor="middle" fill="var(--ink)" font-size="13" font-weight="700">Militar</text></g>
<text class="pop" style="transition-delay:1.4s" x="380" y="300" text-anchor="middle" fill="var(--muted)" font-size="13">Órgão singular: um juiz decide · Órgão colegiado: turma ou câmara decide em conjunto</text></svg>`},
{t:`sorter`,h:`Qual justiça julga?`,bins:[`Estadual`,`Federal`,`Trabalho`,`Eleitoral`],cards:[
[`Ação de cobrança entre dois vizinhos.`,0,`Competência residual: tudo o que não é das justiças especiais nem da Federal fica na Estadual.`],
[`Ação em que a União é ré, fora das exceções constitucionais.`,1,`${a(`CF, art. 109, I`)}: União, autarquias e empresas públicas federais como autoras, rés, assistentes ou oponentes, exceto falência, acidentes de trabalho e causas das Justiças Eleitoral e do Trabalho.`],
[`Empregado cobra horas extras do empregador.`,2,`Relação de trabalho: ${a(`CF, art. 114`)}.`],
[`Impugnação ao registro de candidatura.`,3,`Matéria eleitoral, organizada pela Justiça Eleitoral.`]]}],
quiz:[
[`A ação é considerada abstrata porque:`,[`só existe se o autor tiver razão`,`existe independentemente do resultado do processo`,`depende de autorização do juiz`],1,`O direito de ação não se confunde com o direito material discutido: quem perde a causa também exerceu ação.`],
[`Qual é a justiça de competência residual?`,[`Federal`,`Estadual`,`do Trabalho`],1,`A Justiça Estadual julga tudo o que não estiver atribuído às demais.`],
[`Na execução, o réu é chamado de:`,[`requerido`,`executado`,`denunciado`],1,`Na execução, autor é exequente e réu é executado.`]]},

/* ================= II ================= */
{id:`jurisdicao`,group:`Fundamentos`,title:`Características e princípios da jurisdição`,
intro:`A jurisdição tem traços que a distinguem de qualquer outra atividade do Estado, e princípios que limitam quem pode exercê-la e como.`,
blocks:[
{t:`flips`,h:`As três características`,items:[
[`Inércia`,`O Judiciário não age por conta própria: <em>depende de provocação</em> (${a(`CPC, art. 2º`)}). Iniciado, o processo anda por impulso oficial.`],
[`Substitutividade`,`O Estado proíbe a justiça pelas próprias mãos e <em>substitui a vontade das partes</em> pela sua, aplicando a lei ao caso.`],
[`Definitividade`,`Só a decisão judicial pode se tornar <em>imutável pela coisa julgada</em> (${a(`CPC, art. 502`)}), dando segurança jurídica.`]]},
{t:`table`,h:`Os princípios inerentes à jurisdição`,head:[`Princípio`,`O que garante`,`Fonte`],rows:[
[`Investidura`,`O exercício da jurisdição pressupõe regular investidura. O ingresso na carreira da magistratura ocorre por concurso de provas e títulos, sem excluir outras formas constitucionais de provimento dos tribunais, como o quinto constitucional`,`${a(`CF, arts. 93, I, e 94`)}`],
[`Territorialidade`,`O juiz atua nos limites territoriais fixados em lei (aderência ao território)`,`Leis de organização judiciária`],
[`Indeclinabilidade`,`O juiz não pode se recusar a julgar, nem alegando lacuna da lei`,`${a(`CPC, art. 140`)}`],
[`Indelegabilidade`,`O poder de decidir não pode ser transferido a particulares ou a outro órgão`,`Decorre do juiz natural`],
[`Inafastabilidade`,`Nenhuma lesão ou ameaça a direito fica fora do Judiciário`,`${a(`CF, art. 5º, XXXV`)}; ${a(`CPC, art. 3º`)}`],
[`Juiz natural`,`Ninguém escolhe o juiz nem é julgado por tribunal de exceção`,`${a(`CF, art. 5º, XXXVII e LIII`)}`]]},
{t:`vs`,h:`Voluntária × contenciosa`,l:{t:`Jurisdição voluntária`,i:[`Sem lide: não há conflito entre as partes`,`Caráter administrativo: o juiz fiscaliza e homologa (corrente clássica; parte da doutrina vê natureza jurisdicional)`,`Fala-se em interessados, não em partes`,`Exemplos: alvará, autorização de viagem de menor, divórcio consensual judicial`,`${a(`CPC, arts. 719 a 770`)}`]},r:{t:`Jurisdição contenciosa`,i:[`Há lide, com interesses opostos`,`O juiz decide o conflito com sentença de mérito`,`A decisão de mérito forma coisa julgada material quando não está mais sujeita a recurso (${a(`CPC, art. 502`)})`,`Exemplos: cobrança, despejo, divórcio litigioso`,`Regra geral do CPC`]}},
{t:`chooser`,h:`Quem resolve o conflito?`,hint:`Do mais primitivo ao mais institucional.`,items:[
[`Autotutela`,`As próprias partes, pela força`,`<p>Em regra proibida; pode ser crime de exercício arbitrário das próprias razões (${a(`CP, art. 345`)}). Exceções: legítima defesa e desforço imediato da posse (${a(`CC, art. 1.210, §1º`)}).</p>`],
[`Autocomposição`,`As próprias partes, sem terceiro que decida`,`<p>O conflito é resolvido pelas próprias partes, por transação, renúncia à pretensão ou reconhecimento da procedência do pedido. O Estado promoverá a solução consensual sempre que possível (${a(`CPC, arts. 3º, §2º, e 487, III`)}).</p>`],
[`Conciliação`,`Terceiro que sugere soluções`,`<p>Indicada quando as partes não tinham vínculo anterior, como numa batida de carro entre desconhecidos (${a(`CPC, art. 165, §2º`)}).</p>`],
[`Mediação`,`Terceiro que reaproxima as partes`,`<p>O mediador ajuda a restabelecer o diálogo; as partes constroem a solução. Indicada quando há vínculo anterior, como entre sócios ou familiares (${a(`CPC, art. 165, §3º`)}; Lei 13.140/2015).</p>`],
[`Arbitragem`,`Árbitro escolhido pelas partes`,`<p>Só para direitos patrimoniais disponíveis. A sentença arbitral tem os mesmos efeitos da judicial e, se condenatória, é título executivo (${a(`Lei 9.307/96, arts. 1º e 31`)}).</p>`],
[`Jurisdição`,`Estado-juiz`,`<p>Decide de forma imperativa e definitiva, com aptidão para a coisa julgada.</p>`]]},
{t:`callout`,title:`Fungibilidade recursal`,html:`<p>Um recurso errado pode ser aproveitado como o correto se houver <b>dúvida objetiva</b> sobre qual cabia, <b>ausência de erro grosseiro</b> e interposição <b>no prazo do recurso correto</b>. O CPC prevê casos expressos: embargos de declaração recebidos como agravo interno, depois de intimado o recorrente para complementar as razões em 5 dias (${a(`art. 1.024, §3º`)}), recurso especial remetido ao STF (${a(`art. 1.032`)}) e extraordinário remetido ao STJ (${a(`art. 1.033`)}).</p>`}],
quiz:[
[`Um juiz se recusa a julgar dizendo que não há lei sobre o tema. Que princípio ele viola?`,[`Indelegabilidade`,`Indeclinabilidade`,`Territorialidade`],1,`${a(`CPC, art. 140`)}: o juiz não se exime de decidir alegando lacuna.`],
[`Qual característica explica que o processo só começa com a petição inicial?`,[`Inércia`,`Definitividade`,`Substitutividade`],0,`Sem provocação, não há jurisdição (${a(`CPC, art. 2º`)}).`],
[`Sócios em conflito querem um terceiro que os ajude a retomar o diálogo. Qual método?`,[`Conciliação`,`Mediação`,`Arbitragem`],1,`Havendo vínculo anterior, mediação (${a(`CPC, art. 165, §3º`)}).`],
[`A sentença arbitral condenatória é:`,[`título executivo extrajudicial`,`título executivo judicial`,`mero parecer`],1,`${a(`CPC, art. 515, VII`)} e ${a(`Lei 9.307/96, art. 31`)}.`]]},

/* ================= III ================= */
{id:`principios`,group:`Princípios`,title:`Princípios do processo`,
intro:`Os princípios dão forma a todo o resto. Muitos estão na Constituição e foram repetidos nas normas fundamentais do CPC (arts. 1º a 12).`,
blocks:[
{t:`flips`,h:`Garantias constitucionais`,items:[
[`Devido processo legal`,`Ninguém é privado da liberdade ou dos bens sem processo justo (${a(`CF, art. 5º, LIV`)}). É a cláusula-mãe de onde derivam os demais.`],
[`Contraditório`,`Em regra, não se decide contra a parte sem prévia oportunidade de manifestação (${a(`CPC, art. 9º`)}); o parágrafo único excepciona a tutela de urgência, a tutela da evidência do art. 311, II e III, e a decisão do art. 701. Basta a <em>oportunidade</em> de falar. Vedada a decisão surpresa (${a(`art. 10`)}).`],
[`Ampla defesa`,`Defesa com todos os meios e recursos lícitos (${a(`CF, art. 5º, LV`)}). Não há contraditório sem defesa, nem defesa sem contraditório.`],
[`Isonomia`,`Paridade de armas (${a(`CPC, art. 7º`)}). Igualdade material: tratar desigualmente os desiguais, na medida da desigualdade.`],
[`Duração razoável`,`Solução integral do mérito em prazo razoável, incluída a atividade satisfativa (${a(`CF, art. 5º, LXXVIII`)}, EC 45/2004; ${a(`CPC, art. 4º`)}).`],
[`Juiz natural e imparcial`,`Juiz previamente competente e sem interesse na causa (${a(`CF, art. 5º, XXXVII e LIII`)}; impedimento e suspeição, ${a(`CPC, arts. 144 e 145`)}).`],
[`Publicidade`,`Atos públicos, salvo segredo de justiça (${a(`CF, arts. 5º, LX, e 93, IX`)}; ${a(`CPC, art. 189`)}).`],
[`Motivação`,`Toda decisão fundamentada, sob pena de nulidade (${a(`CF, art. 93, IX`)}; ${a(`CPC, arts. 11 e 489, §1º`)}).`]]},
{t:`flips`,h:`Princípios do próprio processo`,items:[
[`Inércia e demanda`,`A parte provoca; o juiz fica adstrito ao pedido (${a(`CPC, arts. 2º, 141 e 492`)}). "O direito não socorre aos que dormem."`],
[`Instrumentalidade das formas`,`Ato feito de outro modo é válido se atingiu a finalidade (${a(`CPC, arts. 188 e 277`)}).`],
[`Economia processual`,`Máximo resultado com mínimo de atos: aproveitar atos (${a(`art. 283`)}), reunir ações conexas, admitir reconvenção.`],
[`Eficiência`,`Dever do juiz ao aplicar o ordenamento (${a(`CPC, art. 8º`)}). Corolário do devido processo legal.`],
[`Boa-fé e cooperação`,`Todos agem com lealdade e cooperam para a decisão justa (${a(`CPC, arts. 5º e 6º`)}). Má-fé gera multa (${a(`arts. 80 e 81`)}).`],
[`Duplo grau`,`Revisão por órgão superior. Implícito na CF. Na acusação de delito, a Convenção Americana assegura expressamente o direito de recorrer da sentença para juiz ou tribunal superior (art. 8.2.h). Não é absoluto.`]]},
{t:`sorter`,h:`Qual princípio está em jogo?`,bins:[`Contraditório`,`Juiz natural`,`Motivação`,`Instrumentalidade`,`Duração razoável`],cards:[
[`Fora da hipótese de improcedência liminar do art. 332, §1º, o juiz quer reconhecer prescrição não alegada sem dar oportunidade de manifestação às partes.`,0,`Vedada a decisão surpresa, mesmo em matéria de ofício (${a(`CPC, arts. 10 e 487, parágrafo único`)}).`],
[`Cria-se um tribunal especial, depois do fato, só para julgar aquele caso.`,1,`Proibido tribunal de exceção (${a(`CF, art. 5º, XXXVII`)}).`],
[`A liminar diz apenas: "presentes os pressupostos legais, defiro".`,2,`Fórmula genérica não é fundamentação (${a(`CPC, art. 489, §1º, III`)}).`],
[`A citação teve vício de forma, mas o réu compareceu e contestou tudo.`,3,`Atingida a finalidade, não se anula (${a(`CPC, art. 239, §1º e 277`)}).`],
[`Processo parado há anos aguardando um despacho de mero expediente.`,4,`${a(`CF, art. 5º, LXXVIII`)}.`]]},
{t:`table`,h:`O que não é fundamentação`,hint:`${a(`CPC, art. 489, §1º`)}. Decisão assim é omissa e desafia embargos de declaração.`,head:[`Inciso`,`Vício`],rows:[
[`I`,`Só reproduzir, indicar ou parafrasear a lei, sem ligar ao caso`],
[`II`,`Usar conceito jurídico indeterminado sem explicar por que incide`],
[`III`,`Invocar motivos que serviriam para qualquer decisão`],
[`IV`,`Não enfrentar argumentos capazes de mudar a conclusão`],
[`V`,`Limitar-se a invocar precedente ou súmula sem identificar seus fundamentos determinantes e demonstrar que o caso se ajusta a eles`],
[`VI`,`Deixar de seguir precedente invocado sem demonstrar distinção ou superação`]]},
{t:`vs`,h:`Duplo grau não é o mesmo que recorribilidade`,l:{t:`Recurso sem duplo grau pleno`,i:[`Recurso especial e extraordinário: só discutem direito, não reexaminam provas`,`Embargos de declaração: julgados pelo mesmo órgão`,`Competência originária do STF: cabem só recursos internos (embargos de declaração, agravo interno); não há instância acima para reexaminar`]},r:{t:`Duplo grau sem recurso`,i:[`Remessa necessária: nas hipóteses do art. 496, a sentença é submetida ao tribunal mesmo sem apelação, ressalvadas as dispensas dos §§ 3º e 4º (${a(`CPC, art. 496`)})`]}},
{t:`juris`,h:`Na jurisprudência`,items:[
{court:`Corte IDH`,year:`2012`,id:`Caso Mohamed vs. Argentina`,tese:`O condenado tem direito de recorrer da primeira condenação, mesmo quando ela reforma uma absolvição.`,html:`Fundamento: art. 8.2.h da Convenção Americana. O recurso deve permitir revisão ampla, de fato e de direito.`}]},
{t:`callout`,kind:`sage`,title:`Publicidade e segredo de justiça`,html:`<p>Tramitam em segredo (${a(`CPC, art. 189`)}): os processos em que o interesse público ou social o exigir; os que tratam de casamento, separação de corpos, divórcio, separação, união estável, filiação, alimentos e guarda de crianças e adolescentes; os que contêm dados protegidos pela intimidade; e os processos judiciais sobre arbitragem, inclusive cumprimento de carta arbitral, quando comprovada perante o juízo a confidencialidade estipulada na arbitragem. Terceiro com interesse jurídico pode pedir certidão do dispositivo da sentença.</p>`}],
quiz:[
[`O contraditório exige que a parte efetivamente se manifeste?`,[`Sim, sempre`,`Não, basta ter tido a oportunidade`,`Só no processo penal`],1,`O que se garante é a oportunidade de participar e influir.`],
[`Fora da hipótese de improcedência liminar por prescrição ou decadência (CPC, art. 332, §1º), o juiz pode decidir matéria de ordem pública com base em fundamento sobre o qual não deu às partes oportunidade de manifestação?`,[`Sim, livremente`,`Não, deve dar oportunidade de manifestação antes`,`Só em segundo grau`],1,`${a(`CPC, art. 10`)}.`],
[`A remessa necessária é exemplo de:`,[`recurso sem duplo grau`,`duplo grau sem recurso`,`fungibilidade`],1,`A sentença sobe ao tribunal por força de lei, sem recurso.`],
[`Prazo em dobro para a Defensoria concretiza qual princípio?`,[`Isonomia material`,`Publicidade`,`Inércia`],0,`Tratar desigualmente os desiguais para equilibrar a disputa.`]]},

/* ================= IV ================= */
{id:`internacional`,group:`Competência`,title:`Limites da jurisdição e cooperação`,
intro:`Antes de saber qual juiz brasileiro julga, é preciso saber se a causa pode ser julgada no Brasil. E, quando um ato precisa ser praticado em outro lugar, entram as cartas.`,
blocks:[
{t:`vs`,h:`Concorrente × exclusiva`,l:{t:`Concorrente (arts. 21 e 22)`,i:[`Réu domiciliado no Brasil`,`Obrigação a ser cumprida aqui`,`Fato ou ato praticado aqui`,`Alimentos: credor com domicílio ou residência no Brasil, ou réu com vínculos no país, como bens, renda ou benefícios econômicos. Consumo: consumidor com domicílio ou residência no Brasil (${a(`art. 22, I e II`)})`,`A ação proposta no estrangeiro não induz litispendência no Brasil, ressalvadas disposições contrárias de tratados internacionais e acordos bilaterais em vigor no país (${a(`art. 24`)})`]},r:{t:`Exclusiva (art. 23)`,i:[`Ações sobre imóveis situados no Brasil`,`Sucessão: confirmar testamento particular, inventário e partilha de bens situados no Brasil`,`Divórcio, separação ou fim da união estável: partilha de bens situados no Brasil`,`Sentença estrangeira sobre isso não é homologada`]}},
{t:`callout`,title:`Atenção a um erro comum`,html:`<p>A competência exclusiva no divórcio não abrange o divórcio em si, apenas a <b>partilha dos bens situados no Brasil</b>. Um casal pode se divorciar no exterior; o que não pode é partilhar lá o apartamento que tem em Florianópolis.</p>`},
{t:`callout`,kind:`brass`,title:`Eleição de foro estrangeiro`,html:`<p>Em contrato internacional, a cláusula de foro exclusivo estrangeiro afasta a jurisdição brasileira se o réu a alegar na contestação, salvo competência exclusiva brasileira. A cláusula deve constar de instrumento escrito, referir-se expressamente a determinado negócio e guardar pertinência com o domicílio ou residência de uma das partes ou com o local da obrigação, ressalvada a pactuação consumerista favorável ao consumidor. Aplicam-se também as regras de controle de abusividade (${a(`CPC, arts. 25 e 63, §§ 1º a 4º`)}).</p>`},
{t:`table`,h:`As cartas`,head:[`Carta`,`De quem para quem`,`Exemplo`],rows:[
[`Precatória`,`Entre órgãos jurisdicionais brasileiros de competências territoriais diversas`,`Um juízo solicita a outro a oitiva de testemunha em outra comarca (${a(`CPC, art. 237, III`)})`],
[`Rogatória`,`De juízo brasileiro para autoridade estrangeira, ou o inverso`,`Citar réu que mora em Portugal; depende de exequatur do STJ quando vem de fora (${a(`CF, art. 105, I, i`)})`],
[`De ordem`,`De tribunal para juízo a ele vinculado, para ato fora dos limites territoriais do local de sua sede`,`TJ solicita a juiz vinculado a colheita de prova em outra comarca (${a(`CPC, arts. 236, § 2º, e 237, I`)})`],
[`Arbitral`,`Do árbitro para o Judiciário`,`Cumprir medida decretada na arbitragem (${a(`CPC, art. 237, IV`)})`]]},
{t:`steps`,h:`Homologação de decisão estrangeira`,items:[
[`Decisão proferida no exterior`,`Em regra, a sentença estrangeira depende de homologação pelo STJ; a decisão interlocutória estrangeira pode ser executada por carta rogatória, com exequatur, ressalvada disposição contrária de lei ou tratado. A homologação de decisão arbitral estrangeira segue tratado e lei, com aplicação subsidiária do CPC (arts. 960, §§ 1º e 3º, e 961).`,`CPC, arts. 960 e 961`],
[`Pedido ao STJ`,`A competência é do Superior Tribunal de Justiça.`,`CF, art. 105, I, i`],
[`Requisitos`,`Autoridade competente; citação regular, ainda que haja revelia; eficácia no país de origem; não ofender a coisa julgada brasileira; tradução oficial, salvo dispensa prevista em tratado; e não conter manifesta ofensa à ordem pública.`,`CPC, art. 963`],
[`Exceção`,`Sentença estrangeira de divórcio consensual produz efeitos no Brasil sem homologação.`,`CPC, art. 961, §5º`]]}],
quiz:[
[`Inventário de bens situados no Brasil de quem morreu na Itália:`,[`pode ser feito na Itália e homologado`,`é de competência exclusiva brasileira`,`depende de tratado`],1,`${a(`CPC, art. 23, II`)}.`],
[`Um juiz de primeiro grau solicita a outro juízo de comarca diversa, por carta, a oitiva de testemunha. Qual carta utiliza?`,[`rogatória`,`precatória`,`de ordem`],1,`Cooperação entre órgãos jurisdicionais brasileiros de competências territoriais diversas (${a(`CPC, art. 237, III`)}).`],
[`Quem homologa sentença estrangeira?`,[`STF`,`STJ`,`TJ do Estado`],1,`${a(`CF, art. 105, I, i`)}.`]]},

/* ================= V ================= */
{id:`competencia`,group:`Competência`,title:`Competência absoluta e relativa`,
intro:`Competência é a medida da jurisdição: diz qual órgão, entre todos os que têm jurisdição, deve julgar aquela causa. A diferença entre absoluta e relativa decide quem pode alegar, quando e o que acontece se ninguém alegar.`,
blocks:[
{t:`vs`,h:`Os critérios`,l:{t:`Absoluta`,i:[`Matéria (família, falência, trabalho)`,`Pessoa (União na Justiça Federal)`,`Função ou hierarquia (recursos, competência originária)`,`Interesse público: não se altera`]},r:{t:`Relativa`,i:[`Território (domicílio do réu, ${a(`art. 46`)})`,`Valor da causa: em regra, competência relativa (${a(`art. 63`)}). Nos Juizados Especiais Federais e da Fazenda Pública, a competência é absoluta onde instalados, dentro das hipóteses legais (${a(`Lei 10.259/2001, art. 3º, § 3º`)}; ${a(`Lei 12.153/2009, art. 2º, § 4º`)})`,`Interesse das partes: pode ser alterada`,`Exceção: território absoluto nas possessórias imobiliárias e foro obrigatório da situação do imóvel nas hipóteses do art. 47, § 1º. Nas demais ações reais imobiliárias, cabe a opção prevista nesse parágrafo (${a(`art. 47`)})`]}},
{t:`chooser`,h:`O regime na prática`,items:[
[`Quem alega?`,`Absoluta: as partes e o MP, nos limites de sua atuação; o juiz a declara de ofício. Relativa: o réu e o MP nas causas em que atuar (CPC, arts. 64 e 65).`,`<p><b>Absoluta</b>: em qualquer tempo e grau, e o juiz declara de ofício (${a(`CPC, art. 64, §1º`)}). <b>Relativa</b>: o réu, em preliminar de contestação; o MP pode alegar nas causas em que atua (${a(`art. 65, parágrafo único`)}). O juiz não a reconhece de ofício (${a(`Súmula 33 do STJ`)}), salvo a cláusula de eleição abusiva antes da citação (${a(`art. 63, §3º`)}) e a ação proposta em juízo aleatório (${a(`art. 63, §5º`)}).</p>`],
[`E se ninguém alegar?`,`Absoluta: o vício permanece. Relativa: prorroga.`,`<p>A incompetência absoluta pode fundamentar ação rescisória (${a(`art. 966, II`)}). A relativa se prorroga e o juízo passa a ser competente (${a(`art. 65`)}).</p>`],
[`As partes podem mudar?`,`Só a relativa.`,`<p>A absoluta é inderrogável por convenção (${a(`art. 62`)}). A relativa pode ser modificada por eleição de foro, em instrumento escrito, ligada a um negócio determinado e com pertinência com o domicílio ou a residência de uma das partes ou com o local da obrigação; em contrato de consumo, vale a cláusula favorável ao consumidor (${a(`art. 63, §1º`)}, redação da Lei 14.879/2024).</p>`],
[`Efeito da declaração`,`Remessa ao juízo competente.`,`<p>Declarada a incompetência, os autos vão ao juízo competente. Salvo decisão judicial em contrário, conservam-se os efeitos das decisões anteriores até que o juízo competente profira outra, se for o caso (${a(`art. 64, §§3º e 4º`)}).</p>`]]},
{t:`sorter`,h:`Absoluta ou relativa?`,bins:[`Absoluta`,`Relativa`],cards:[
[`Ação de família proposta na vara cível, existindo vara de família na comarca.`,0,`Critério de matéria.`],
[`Cobrança proposta fora do domicílio do réu, sem outro foro legalmente competente.`,1,`Critério territorial (${a(`CPC, arts. 46, 63 e 65`)}).`],
[`União é ré em causa abrangida pelo art. 109, I, da CF, fora de suas exceções, e a ação corre na Justiça Estadual.`,0,`Critério de pessoa (${a(`CF, art. 109, I`)}; ${a(`CPC, art. 62`)}).`],
[`Ação possessória sobre imóvel proposta fora do foro do imóvel.`,0,`Exceção territorial absoluta (${a(`CPC, art. 47, §2º`)}).`],
[`Contrato com eleição de foro eficaz em Joaçaba; ação proposta em Chapecó, sem outro foro autorizado e sem caracterizar juízo aleatório.`,1,`Eleição de foro é critério territorial (${a(`CPC, arts. 63 e 65`)}).`]]},
{t:`callout`,kind:`brass`,title:`Cláusula de eleição abusiva`,html:`<p>Antes da citação, o juiz pode reputar ineficaz, de ofício, a cláusula de foro abusiva e remeter os autos ao foro do domicílio do réu (${a(`art. 63, §3º`)}). Citado, cabe ao réu alegar na contestação, sob pena de preclusão (§4º). E se a ação for proposta em juízo aleatório, sem vínculo com o domicílio ou a residência das partes nem com o negócio, o juiz pode declinar de ofício (§5º, incluído pela Lei 14.879/2024).</p>`},
{t:`keys`,h:`Números que caem em prova`,items:[[`40`,`salários mínimos`,`limite de competência do Juizado Especial Cível estadual pelo critério do valor da causa (Lei 9.099/95, art. 3º, I), observadas as demais hipóteses e exclusões legais`],[`60`,`salários mínimos`,`teto dos Juizados Federais e da Fazenda Pública`],[`33`,`Súmula do STJ`,`incompetência relativa não se declara de ofício (exceções: art. 63, §§3º e 5º)`]]}],
quiz:[
[`O juiz pode declarar de ofício a incompetência territorial relativa?`,[`Sim`,`Não, salvo cláusula abusiva antes da citação ou ação em juízo aleatório`,`Só em segundo grau`],1,`${a(`CPC, arts. 337, § 5º, e 63, §§ 3º e 5º`)}. Se a competência territorial for absoluta, o juiz deve declarar a incompetência de ofício (${a(`arts. 47, § 2º, e 64, § 1º`)}).`],
[`O réu não alegou incompetência relativa. Consequência?`,[`Nulidade`,`Prorrogação`,`Extinção`],1,`${a(`CPC, art. 65`)}.`],
[`Competência em razão da matéria é:`,[`relativa`,`absoluta`,`depende do valor`],1,`Critério de interesse público.`]]},

/* ================= VI ================= */
{id:`modificacao`,group:`Competência`,title:`Modificação e conflito de competência`,
intro:`Só a competência relativa se modifica. Os caminhos são a vontade das partes (derrogação), a inércia do réu (prorrogação) e a ligação entre ações (conexão e continência).`,
blocks:[
{t:`tl`,h:`Quatro formas de modificar`,items:[
[`Derrogação`,`As partes elegem foro por instrumento escrito, com referência expressa a determinado negócio jurídico. O foro deve guardar pertinência com o domicílio ou a residência de uma delas ou com o local da obrigação, ressalvada a pactuação consumerista favorável ao consumidor (${a(`art. 63, §1º`)}). Vincula herdeiros e sucessores (§2º).`],
[`Prorrogação`,`A competência relativa se prorroga se o réu não alegar a incompetência em preliminar de contestação. O MP também pode alegá-la nas causas em que atuar (${a(`arts. 64 e 65`)}).`],
[`Conexão`,`Duas ações com o mesmo pedido ou a mesma causa de pedir são reunidas (${a(`art. 55`)}).`],
[`Continência`,`Mesmas partes e causa de pedir, e o pedido de uma abrange o da outra (${a(`art. 56`)}).`]]},
{t:`svg`,h:`Conexão e continência em imagem`,html:`<svg viewBox="0 0 720 260" role="img" aria-label="Conexão: dois círculos que se tocam; continência: um círculo dentro do outro">
<text x="180" y="24" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">Conexão</text>
<circle class="draw" cx="140" cy="135" r="80" fill="none" stroke="var(--seal)" stroke-width="3"/><circle class="draw" cx="230" cy="135" r="80" fill="none" stroke="var(--brass)" stroke-width="3"/>
<text class="pop" x="105" y="140" font-size="13" fill="var(--ink)">Ação A</text><text class="pop" x="245" y="140" font-size="13" fill="var(--ink)">Ação B</text>
<text class="pop" style="transition-delay:.8s" x="185" y="245" text-anchor="middle" font-size="12" fill="var(--muted)">mesmo pedido ou mesma causa de pedir</text>
<text x="530" y="24" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">Continência</text>
<circle class="draw" cx="530" cy="135" r="95" fill="none" stroke="var(--seal)" stroke-width="3"/><circle class="draw" cx="555" cy="150" r="45" fill="none" stroke="var(--sage)" stroke-width="3"/>
<text class="pop" x="460" y="105" font-size="13" fill="var(--ink)">continente</text><text class="pop" x="530" y="155" font-size="12" fill="var(--ink)">contida</text>
<text class="pop" style="transition-delay:.8s" x="530" y="255" text-anchor="middle" font-size="12" fill="var(--muted)">mesmas partes e causa de pedir; um pedido abrange o outro</text></svg>`},
{t:`table`,h:`O que acontece com as ações`,head:[`Situação`,`Consequência`,`Base`],rows:[
[`Conexão`,`Em regra, reunião para decisão conjunta no juízo prevento, salvo se uma ação já foi sentenciada. Em ACPs nacionais ou regionais, o STJ admitiu reunião mesmo após sentença (AgInt no CC 202.644/ES, Informativo 885)`,`${a(`arts. 55, §1º, e 58`)}; ${a(`Súmula 235 do STJ`)}`],
[`Execução de título extrajudicial e ação de conhecimento relativa ao mesmo ato jurídico`,`São consideradas conexas`,`${a(`art. 55, §2º, I`)}`],
[`Risco de decisões conflitantes, mesmo sem conexão`,`Reunião`,`${a(`art. 55, §3º`)}`],
[`Continência, com a continente proposta antes`,`A contida é extinta sem mérito`,`${a(`art. 57`)}`],
[`Continência, com a contida proposta antes`,`Reunião das ações`,`${a(`art. 57`)}`],
[`Juízo prevento`,`O do registro ou distribuição da primeira ação`,`${a(`arts. 58 e 59`)}`]]},
{t:`sorter`,h:`Conexão, continência ou nada?`,bins:[`Conexão`,`Continência`,`Nenhuma`],cards:[
[`A: despejo por falta de pagamento. B: consignação dos mesmos aluguéis.`,0,`Causa de pedir comum: o mesmo contrato e o mesmo débito.`],
[`A: anular o contrato inteiro. B: anular só a cláusula 5ª. Mesmas partes e causa de pedir.`,1,`O pedido de A abrange o de B.`],
[`A: cobrança de aluguel entre Maria e João. B: divórcio de Pedro e Ana.`,2,`Nada em comum.`],
[`A: execução de nota promissória. B: ação para anular a mesma nota.`,0,`${a(`art. 55, §2º, I`)}.`]]},
{t:`chooser`,h:`Conflito de competência`,hint:`${a(`CPC, art. 66 e arts. 951 a 959`)}.`,items:[
[`Positivo`,`Dois ou mais juízes se dizem competentes`,`<p>${a(`art. 66, I`)}. O relator pode sobrestar o processo e designar um juiz para medidas urgentes (${a(`art. 955`)}).</p>`],
[`Negativo`,`Dois ou mais juízes se consideram incompetentes, atribuindo um ao outro a competência`,`<p>${a(`art. 66, II`)}. Quem não acolher a competência declinada deve suscitar o conflito, salvo se atribuí-la a outro juízo (${a(`art. 66, parágrafo único`)}).</p>`],
[`Sobre reunião`,`Divergência sobre reunir ou separar processos`,`<p>${a(`art. 66, III`)}.</p>`],
[`Quem suscita`,`Partes, MP ou juiz`,`<p>O juiz por ofício; partes e MP por petição (${a(`arts. 951 e 953`)}). Não pode suscitar a parte que arguiu incompetência relativa (${a(`art. 952`)}).</p>`],
[`Quem julga`,`O tribunal com ascendência sobre ambos`,`<p>Entre juízes do mesmo TJ, o TJ; entre juízes vinculados a tribunais diversos, o STJ (${a(`CF, art. 105, I, d`)}). O relator pode julgar o conflito de plano quando sua decisão se fundar em súmula do STF, do STJ ou do próprio tribunal, ou em tese firmada em casos repetitivos ou em incidente de assunção de competência (${a(`art. 955, parágrafo único`)}).</p>`]]}],
quiz:[
[`Ação continente proposta depois da contida. O que ocorre?`,[`Extinção da contida`,`Reunião`,`Suspensão da continente`],1,`${a(`CPC, art. 57`)}: se a contida veio antes, reúnem-se.`],
[`Pela regra geral do art. 55, § 1º, do CPC e da Súmula 235/STJ, cabe reunião por conexão se um processo já foi sentenciado?`,[`Sim`,`Não`],1,`Essa é a regra geral (${a(`art. 55, §1º`)}; ${a(`Súmula 235 do STJ`)}). O STJ admitiu exceção em ACPs nacionais ou regionais (AgInt no CC 202.644/ES, Informativo 885).`],
[`Dois juízes se consideram incompetentes, atribuindo um ao outro a competência. Que conflito é?`,[`Positivo`,`Negativo`],1,`É a hipótese do ${a(`art. 66, II, do CPC`)}.`]]},

/* ================= VII ================= */
{id:`capacidade`,group:`Sujeitos e terceiros`,title:`Capacidade, representação e procuração`,
intro:`Para estar em juízo não basta ser pessoa. São três capacidades diferentes, e cada uma tem seu remédio quando falta.`,
blocks:[
{t:`steps`,h:`As três capacidades`,items:[
[`Capacidade de ser parte`,`Ter personalidade jurídica, ou ser ente despersonalizado a quem a lei dá essa aptidão (espólio, massa falida, condomínio).`,`CPC, art. 75`],
[`Capacidade de estar em juízo`,`Estar no exercício dos próprios direitos (${a(`art. 70`)}). Incapazes são representados ou assistidos.`,`CPC, arts. 70 e 71`],
[`Capacidade postulatória`,`Falar nos autos. Em regra, só o advogado inscrito na OAB (${a(`art. 103`)}). Exceções: nos Juizados Especiais Cíveis, as partes podem atuar sem advogado nas causas de até 20 salários mínimos. No recurso, o advogado é obrigatório (${a(`Lei 9.099/1995, arts. 9º e 41, §2º`)}).`,`CPC, art. 103`]]},
{t:`table`,h:`Incapazes no processo`,head:[`Quem`,`Como atua`],rows:[
[`Absolutamente incapaz (menor de 16)`,`Representado pelos pais ou tutor`],
[`Relativamente incapaz (16 a 18, ébrios habituais, pródigos, quem não pode exprimir vontade)`,`Assistido pelos pais, tutor ou curador`],
[`Incapaz sem representante ou com interesses colidentes`,`Curador especial (${a(`art. 72, I`)})`],
[`Réu preso revel ou réu revel citado por edital ou com hora certa`,`Curador especial enquanto não for constituído advogado. A curatela especial cabe à Defensoria Pública, nos termos da lei (${a(`art. 72, II e parágrafo único`)})`]]},
{t:`flips`,h:`A procuração`,items:[
[`Regra`,`O advogado não postula sem procuração (${a(`art. 104`)}).`],
[`Exceção`,`Para evitar preclusão, decadência ou prescrição, ou praticar ato urgente. Nessas hipóteses, o advogado deve exibir a procuração em <em>15 dias úteis</em>, independentemente de caução. O prazo pode ser prorrogado por igual período por despacho do juiz (${a(`arts. 104, §1º, e 219`)}).`],
[`Ato não ratificado`,`É <em>ineficaz</em> em relação à parte, e o advogado responde por despesas e perdas e danos (${a(`art. 104, §2º`)}).`],
[`Poderes especiais`,`Exigem cláusula específica: receber citação, confessar, reconhecer a procedência do pedido, transigir, desistir, renunciar ao direito sobre o qual se funda a ação, receber, dar quitação, firmar compromisso e assinar declaração de hipossuficiência econômica (${a(`art. 105`)}).`],
[`Fim do mandato`,`O mandato cessa por revogação ou renúncia; morte ou interdição de uma das partes; mudança de estado que inabilite o mandante a conferir poderes ou o mandatário a exercê-los; término do prazo ou conclusão do negócio. No mandato judicial, observam-se as regras processuais e, supletivamente, o CC (${a(`CC, arts. 682 e 692`)}).`]]}],
quiz:[
[`Espólio pode ser parte?`,[`Não, não tem personalidade`,`Sim, a lei lhe dá capacidade de ser parte`],1,`${a(`CPC, art. 75, VII`)}.`],
[`Advogado sem procuração pode agir para evitar a prescrição?`,[`Não`,`Sim, apresentando a procuração em 15 dias úteis, prorrogáveis por igual período por despacho do juiz`],1,`${a(`CPC, art. 104, caput e §1º, e art. 219`)}.`],
[`Réu citado por edital e revel recebe:`,[`curador especial`,`nada, segue revel`,`tutor`],0,`${a(`CPC, art. 72, II`)}.`]]},

/* ================= VIII ================= */
{id:`litisconsorcio`,group:`Sujeitos e terceiros`,title:`Litisconsórcio`,
intro:`Litisconsórcio é a pluralidade de partes num mesmo polo. Serve à economia processual e à coerência das decisões.`,
blocks:[
{t:`callout`,kind:`brass`,title:`Quando é possível (art. 113)`,html:`<p>Duas ou mais pessoas litigam juntas quando houver <b>comunhão</b> de direitos ou obrigações; <b>conexão</b> pelo pedido ou causa de pedir; ou <b>afinidade</b> de questões por ponto comum de fato ou de direito.</p>`},
{t:`table`,h:`As classificações`,head:[`Critério`,`Espécies`,`O que define`],rows:[
[`Obrigatoriedade`,`Necessário × facultativo`,`Necessário quando a lei exige ou quando, pela natureza da relação jurídica controvertida, a eficácia da sentença depende da citação de todos os litisconsortes (${a(`art. 114`)})`],
[`Resultado`,`Unitário × simples`,`Unitário quando o mérito tem de ser igual para todos (${a(`art. 116`)})`],
[`Posição`,`Ativo, passivo ou misto`,`Vários autores, vários réus, ou ambos`],
[`Momento`,`Inicial × ulterior`,`Desde a inicial ou formado depois`]]},
{t:`chooser`,h:`Faltou um litisconsorte necessário`,hint:`${a(`CPC, art. 115`)}.`,items:[
[`Unitário`,`Sentença nula`,`<p>Se o litisconsórcio era necessário e unitário, a sentença proferida sem um deles é <b>nula</b> para todos.</p>`],
[`Simples`,`Sentença ineficaz para o ausente`,`<p>Se era necessário mas simples, a sentença é <b>ineficaz</b> apenas para quem não foi citado.</p>`],
[`Remédio`,`Juiz manda citar`,`<p>No litisconsórcio passivo necessário, o juiz determina ao autor que requeira a citação de todos os litisconsortes, no prazo que fixar, sob pena de extinção do processo (${a(`art. 115, parágrafo único`)}).</p>`]]},
{t:`flips`,h:`Regras de convivência`,items:[
[`Autonomia`,`Em relação à parte adversa, os litisconsortes são litigantes distintos. No litisconsórcio <em>unitário</em>, os atos e as omissões de um não prejudicam os outros, mas podem beneficiá-los (${a(`art. 117`)}).`],
[`Multitudinário`,`O juiz pode limitar o número de litisconsortes facultativos no conhecimento, na liquidação ou na execução, quando comprometer a rápida solução do litígio ou dificultar a defesa ou o cumprimento da sentença (${a(`art. 113, §1º`)}). O requerimento de limitação interrompe o prazo para manifestação ou resposta, que recomeça da intimação da decisão que o solucionar (§2º).`],
[`Prazo em dobro`,`Com procuradores diferentes, de escritórios distintos, em <em>autos físicos</em> (${a(`art. 229`)}). Cessa se, de dois réus, só um se defende.`]]},
{t:`sorter`,h:`Classifique`,bins:[`Necessário e unitário`,`Facultativo e simples`,`Facultativo e unitário`],cards:[
[`Ação para anular casamento proposta pelo MP contra os dois cônjuges.`,0,`A relação é incindível e a lei exige os dois.`],
[`Vários passageiros do mesmo voo cancelado pedem indenização juntos.`,1,`Podiam processar separadamente; cada um recebe sua indenização.`],
[`Dois condôminos, em conjunto, reivindicam o imóvel comum.`,2,`Cada um poderia agir sozinho (${a(`CC, art. 1.314`)}), mas a decisão sobre a coisa é uma só.`]]}],
quiz:[
[`Sentença sem litisconsorte necessário unitário é:`,[`válida`,`nula`,`ineficaz só para o ausente`],1,`${a(`CPC, art. 115, I`)}.`],
[`Prazo em dobro do art. 229 vale em autos eletrônicos?`,[`Sim`,`Não`],1,`${a(`art. 229, §2º`)}.`],
[`O juiz pode limitar o litisconsórcio necessário?`,[`Sim`,`Não, só o facultativo`],1,`${a(`art. 113, §1º`)}.`]]}
]};
PK.c.mods.push(
/* ================= IX ================= */
{id:`terceiros`,group:`Sujeitos e terceiros`,title:`Intervenção de terceiros`,
intro:`Terceiro é quem não é parte, mas tem razão jurídica para entrar no processo. O CPC prevê cinco figuras (arts. 119 a 138).`,
blocks:[
{t:`table`,h:`As cinco figuras`,head:[`Figura`,`Quem provoca`,`Para quê`,`Artigos`],rows:[
[`Assistência`,`O próprio terceiro`,`Ajudar uma parte a vencer, por ter interesse jurídico no resultado`,`119 a 124`],
[`Denunciação da lide`,`Autor ou réu`,`Trazer quem deve indenizar em regresso`,`125 a 129`],
[`Chamamento ao processo`,`Só o réu`,`Trazer o afiançado, os demais fiadores ou os demais devedores solidários`,`130 a 132`],
[`Desconsideração da personalidade`,`Parte ou MP, quando lhe couber intervir`,`Alcançar bens dos sócios ou, na modalidade inversa, da pessoa jurídica, observados os pressupostos legais`,`133 a 137`],
[`Amicus curiae`,`O juiz, de ofício ou a pedido`,`Contribuir tecnicamente em tema relevante`,`138`]]},
{t:`vs`,h:`Assistência simples × litisconsorcial`,l:{t:`Simples (arts. 121 a 123)`,i:[`O assistente tem relação jurídica com o assistido que pode ser afetada pela sentença`,`Atua como auxiliar; não pode contrariar o assistido`,`Se o assistido for revel, o assistente atua como seu substituto processual`,`Não impede desistência ou acordo do assistido`]},r:{t:`Litisconsorcial (art. 124)`,i:[`A sentença influirá na relação entre o assistente e o adversário do assistido`,`É tratado como litisconsorte do assistido`,`Exemplo: condômino que ingressa na ação reivindicatória movida por outro condômino`]}},
{t:`callout`,title:`Efeito da assistência simples (art. 123)`,html:`<p>Após o trânsito em julgado, o assistente não pode discutir a justiça da decisão em outro processo, salvo se alegar e provar que o estado do processo ou declarações e atos do assistido impediram provas capazes de influir na sentença, ou que desconhecia alegações ou provas não utilizadas pelo assistido por dolo ou culpa.</p>`},
{t:`sorter`,h:`Que intervenção é essa?`,bins:[`Assistência`,`Denunciação`,`Chamamento`,`Desconsideração`,`Amicus curiae`],cards:[
[`O fiador, réu na cobrança, quer trazer o devedor principal.`,2,`${a(`CPC, art. 130, I`)}.`],
[`O réu de uma ação por acidente quer que sua seguradora o reembolse ali mesmo.`,1,`Regresso por contrato (${a(`art. 125, II`)}).`],
[`O sublocatário quer ajudar o locatário a vencer a ação de despejo.`,0,`Interesse jurídico no resultado (${a(`art. 119`)}).`],
[`O credor quer alcançar os bens dos sócios de empresa esvaziada.`,3,`Incidente dos ${a(`arts. 133 a 137`)}.`],
[`Uma entidade científica quer opinar num processo sobre tema de grande repercussão.`,4,`${a(`art. 138`)}.`],
[`Comprador evicto quer trazer quem lhe vendeu o imóvel.`,1,`${a(`art. 125, I`)}: evicção.`]]},
{t:`flips`,h:`Detalhes que decidem questões`,items:[
[`Denunciação não é obrigatória`,`Se não for feita ou for indeferida, o direito de regresso pode ser exercido em ação autônoma (${a(`art. 125, §1º`)}). Só se admite uma denunciação sucessiva (§2º).`],
[`Seguradora condenada direto`,`Se aceitar a denunciação ou contestar o pedido, pode ser condenada direta e solidariamente com o segurado, nos limites da apólice (${a(`Súmula 537 do STJ`)}).`],
[`Chamamento gera título`,`A sentença de procedência vale como título executivo para o réu que pagar a dívida cobrar o valor integral do devedor principal ou, de cada codevedor, sua quota (${a(`art. 132`)}).`],
[`Desconsideração`,`Cabe em qualquer fase. A instauração do incidente suspende o processo; se a desconsideração for requerida na petição inicial, dispensa-se o incidente e essa suspensão não ocorre (${a(`art. 134, §§2º e 3º`)}). O sócio é citado e tem 15 dias. Pode ser inversa. O incidente é resolvido por decisão interlocutória: cabe agravo de instrumento em primeiro grau e agravo interno se decidida pelo relator. Se a questão integrar a sentença, cabe apelação (${a(`arts. 136, 1.015, IV, e 1.009, §3º`)}).`],
[`Amicus curiae`,`Decisão de admissão é irrecorrível. Não altera a competência. Só recorre por embargos de declaração e no IRDR (${a(`art. 138, §§1º e 3º`)}).`]]},
{t:`juris`,h:`Súmula aplicável`,items:[{court:`STJ`,year:`Súm. 537`,id:`Súmula 537 do STJ`,tese:`Em ação de reparação de danos, a seguradora denunciada que aceitar a denunciação ou contestar o pedido do autor pode ser condenada direta e solidariamente com o segurado, nos limites da apólice.`}]}],
quiz:[
[`O chamamento ao processo pode ser feito pelo autor?`,[`Sim`,`Não, só pelo réu`],1,`${a(`CPC, art. 130`)}.`],
[`A denunciação da lide é obrigatória para preservar o direito de regresso?`,[`Sim`,`Não`],1,`${a(`art. 125, §1º`)}.`],
[`Do que o amicus curiae pode recorrer?`,[`De qualquer decisão`,`Só embargos de declaração e decisão do IRDR`,`De nada`],1,`${a(`art. 138, §§1º e 3º`)}.`]]},

/* ================= X ================= */
{id:`sujeitos`,group:`Sujeitos e terceiros`,title:`Juiz, MP, Advocacia Pública e Defensoria`,
intro:`Além das partes, o processo tem sujeitos com funções próprias: quem julga e quem desempenha funções essenciais à justiça.`,
blocks:[
{t:`p`,h:`Poderes e deveres do juiz`,html:`<p>O juiz dirige o processo (${a(`CPC, art. 139`)}) e deve, entre outras coisas: assegurar igualdade; velar pela duração razoável; prevenir atos contrários à dignidade da justiça; determinar medidas indutivas, coercitivas, mandamentais ou sub-rogatórias; promover a autocomposição; mandar suprir pressupostos processuais; e, ao identificar diversas demandas individuais repetitivas, oficiar o MP, a Defensoria e, na medida do possível, outros legitimados, para que avaliem propor a ação coletiva respectiva. Também <b>pode dilatar prazos e alterar a ordem de produção das provas</b> para adequá-los às necessidades do conflito; a dilação deve ser determinada antes do encerramento do prazo regular (${a(`art. 139, VI e parágrafo único`)}). Não pode deixar de decidir por lacuna (${a(`art. 140`)}) e responde civil e regressivamente por perdas e danos quando, no exercício de suas funções, age com dolo ou fraude (${a(`art. 143, I`)}).</p>`},
{t:`vs`,h:`Impedimento × suspeição`,l:{t:`Impedimento (art. 144)`,i:[`Critério objetivo: basta o fato`,`Atuou como advogado, perito, MP ou testemunha`,`Já decidiu a causa em outro grau`,`Ele, cônjuge ou companheiro, ou parente consanguíneo ou afim até o 3º grau, é parte; ou cônjuge, companheiro ou parente nesse grau atua como advogado, defensor público ou membro do MP, desde que já integrasse o processo antes do início da atividade judicante do juiz (${a(`art. 144, III e IV e §1º`)})`,`Sócio ou membro da direção ou administração de pessoa jurídica parte; herdeiro presuntivo, donatário ou empregador de qualquer das partes`,`Gera nulidade e permite ação rescisória (${a(`art. 966, II`)})`]},r:{t:`Suspeição (art. 145)`,i:[`Critério subjetivo: risco à imparcialidade`,`Amigo íntimo ou inimigo da parte ou do advogado`,`Recebeu presentes de pessoa interessada na causa, aconselhou alguma das partes sobre o objeto da causa ou forneceu meios para as despesas do litígio`,`Parte é credora ou devedora dele, de seu cônjuge ou companheiro, ou de parentes destes em linha reta até o 3º grau`,`Interessado no julgamento; foro íntimo, sem declarar razões`,`Não autoriza rescisória`]}},
{t:`callout`,kind:`brass`,title:`Suspeição provocada não vale`,html:`<p>É ilegítima a alegação de suspeição provocada por quem a alega ou feita por quem já praticou ato de aceitação do juiz (${a(`art. 145, §2º`)}). Ofender o juiz para depois chamá-lo de inimigo não funciona. A parte deve arguir o impedimento ou a suspeição em 15 dias úteis, contados do conhecimento do fato, por petição específica dirigida ao juiz do processo (${a(`arts. 146 e 219`)}). Arguido o impedimento ou a suspeição, o processo fica suspenso até a definição dos efeitos pelo relator: sem efeito suspensivo, volta a correr; com ele, permanece suspenso até o julgamento do incidente (${a(`art. 146, §2º`)}; ${a(`art. 313, III`)}).</p>`},
{t:`table`,h:`As funções essenciais à justiça no processo civil`,head:[``,`Ministério Público`,`Advocacia Pública`,`Defensoria Pública`],rows:[
[`Missão`,`Ordem jurídica, regime democrático, interesses sociais e individuais indisponíveis (${a(`CF, art. 127`)})`,`Defender e promover os interesses públicos da União, Estados, DF e Municípios, representando judicialmente as pessoas jurídicas de direito público da administração direta e indireta (${a(`CPC, art. 182`)})`,`Orientação jurídica, direitos humanos e defesa dos necessitados`],
[`Como atua`,`Parte ou fiscal da ordem jurídica (${a(`CPC, arts. 177 e 178`)})`,`Representação judicial, consultoria e assessoria`,`Parte ou curadora especial; pode propor ação civil pública`],
[`Prazo`,`Em dobro (${a(`art. 180`)})`,`Em dobro (${a(`art. 183`)})`,`Em dobro, também para os escritórios de prática jurídica de faculdades de Direito reconhecidas na forma da lei e as entidades de assistência jurídica gratuita conveniadas com a Defensoria (${a(`art. 186, caput e §3º`)})`],
[`Intimação`,`Pessoal: carga, remessa ou meio eletrônico`,`Pessoal`,`Pessoal do defensor; pode requerer a intimação pessoal do assistido quando o ato depender de providência ou informação que somente ele possa realizar ou prestar (${a(`art. 186, §§1º e 2º`)})`],
[`Responsabilidade`,`Regressiva por dolo ou fraude (${a(`art. 181`)})`,`Regressiva por dolo ou fraude (${a(`art. 184`)})`,`Regressiva por dolo ou fraude (${a(`art. 187`)})`]]},
{t:`chooser`,h:`Quando o MP intervém como fiscal`,hint:`${a(`CPC, art. 178`)}. Intimado, tem vista depois das partes e é intimado de todos os atos (art. 179).`,items:[
[`Interesse público ou social`,`Intervém`,`<p>Inciso I.</p>`],[`Interesse de incapaz`,`Intervém`,`<p>Inciso II. Se faltar a intimação obrigatória do MP, a invalidação alcança os atos desde quando ele deveria ter sido intimado. Antes de decretar a nulidade, o juiz deve intimá-lo para se manifestar sobre a existência ou não de prejuízo (${a(`art. 279`)}).</p>`],[`Litígio coletivo pela posse de terra`,`Intervém`,`<p>Inciso III, rural ou urbana.</p>`],[`Fazenda Pública é parte`,`Por si só, não`,`<p>A participação da Fazenda não configura, sozinha, interesse público (${a(`art. 178, parágrafo único`)}).</p>`]]},
{t:`callout`,kind:`sage`,title:`Prazo próprio afasta o dobro`,html:`<p>O prazo em dobro não se aplica quando a lei fixa prazo específico para o ente público (${a(`arts. 180, §2º, 183, §2º e 186, §4º`)}). Empresas públicas e sociedades de economia mista não têm a prerrogativa: são pessoas de direito privado. Exceção: os Correios (ECT) têm os privilégios processuais da Fazenda por lei especial (DL 509/69, art. 12).</p>`}],
quiz:[
[`Juiz que é amigo íntimo do advogado da parte é:`,[`impedido`,`suspeito`],1,`${a(`CPC, art. 145, I`)}.`],
[`Cabe ação rescisória por suspeição?`,[`Sim`,`Não`],1,`Só o impedimento autoriza (${a(`art. 966, II`)}).`],
[`A presença da Fazenda Pública obriga a intervenção do MP?`,[`Sim`,`Não, por si só`],1,`${a(`art. 178, parágrafo único`)}.`],
[`Os Correios (ECT), embora sejam empresa pública, têm prerrogativas da Fazenda Pública relativas a prazos?`,[`Sim`,`Não`],0,`O art. 12 do DL 509/1969 lhes estende esses privilégios, conforme reconhecido pelo STJ no REsp 1.574.008/SE (Informativo 644).`]]},

/* ================= XI ================= */
{id:`atos`,group:`Atos, prazos e nulidades`,title:`Atos processuais e pronunciamentos`,
intro:`O processo é feito de atos: das partes, do juiz e dos auxiliares. Cada um tem forma, tempo e lugar.`,
blocks:[
{t:`flips`,h:`Atos das partes`,items:[
[`Efeito imediato`,`Os atos das partes consistentes em declarações unilaterais ou bilaterais de vontade produzem imediatamente efeitos sobre direitos processuais, ressalvada a desistência da ação (${a(`CPC, art. 200`)}).`],
[`A exceção da desistência`,`A desistência da ação só produz efeitos depois de <em>homologada</em> (${a(`art. 200, parágrafo único`)}; ${a(`art. 485, VIII`)}). Após a contestação, depende de consentimento do réu (${a(`art. 485, §4º`)}), e só cabe até a sentença (§5º).`],
[`Unilaterais e bilaterais`,`Petição inicial e contestação são unilaterais; transação e negócio processual são bilaterais.`],
[`Sem rabiscos`,`São vedadas cotas marginais ou interlineares nos autos (${a(`art. 202`)}).`]]},
{t:`callout`,kind:`brass`,title:`Negócio jurídico processual (art. 190)`,html:`<p>Em causas sobre direitos que admitam autocomposição, partes plenamente capazes podem ajustar o procedimento às especificidades da causa e convencionar sobre seus ônus, poderes, faculdades e deveres processuais, antes ou durante o processo. O juiz controla a validade, de ofício ou a requerimento, e só recusa aplicação em caso de nulidade, inserção abusiva em contrato de adesão ou manifesta situação de vulnerabilidade de alguma parte. Exemplo típico: o <b>calendário processual</b> (${a(`art. 191`)}), fixado de comum acordo pelo juiz e pelas partes, que os vincula. Seus prazos só podem ser alterados em casos excepcionais justificados. Dispensa-se a intimação das partes para atos e audiências com datas nele designadas.</p>`},
{t:`table`,h:`Pronunciamentos do juiz`,head:[`Pronunciamento`,`Conceito`,`Recurso`],rows:[
[`Sentença`,`Ressalvadas as disposições expressas dos procedimentos especiais, põe fim à fase cognitiva do procedimento comum ou extingue a execução, com fundamento nos arts. 485 ou 487 (${a(`art. 203, §1º`)})`,`Apelação`],
[`Decisão interlocutória`,`Todo pronunciamento decisório que não é sentença (${a(`art. 203, §2º`)})`,`Agravo de instrumento nas hipóteses legais, inclusive contra interlocutórias na liquidação, no cumprimento de sentença, na execução e no inventário (${a(`art. 1.015, parágrafo único`)}). Na fase de conhecimento, questões cuja decisão não comporte agravo podem ser suscitadas em preliminar de apelação ou nas contrarrazões, sem preclusão (${a(`art. 1.009, §1º`)})`],
[`Despacho`,`Sem conteúdo decisório, só impulsiona (${a(`art. 203, §3º`)})`,`Irrecorrível (${a(`art. 1.001`)})`],
[`Ato ordinatório`,`Praticado pelo servidor, como juntada e vista obrigatória (${a(`art. 203, §4º`)})`,`Revisável pelo juiz`],
[`Decisão monocrática`,`Do relator, sozinho, no tribunal`,`Agravo interno`],
[`Acórdão`,`Julgamento colegiado do tribunal (${a(`art. 204`)})`,`REsp, RE, recurso ordinário, embargos`]]},
{t:`sorter`,h:`Que pronunciamento é esse?`,bins:[`Despacho`,`Interlocutória`,`Sentença`],cards:[
[`"Intime-se o autor para se manifestar sobre os documentos."`,0,`Só impulsiona o processo.`],
[`"Indefiro o pedido de gratuidade da justiça."`,1,`Decide, sem encerrar a fase.`],
[`"Julgo procedente o pedido e condeno o réu..."`,2,`Encerra a fase de conhecimento com base no art. 487.`],
[`"Defiro a tutela de urgência."`,1,`Decisão no curso do processo.`]]},
{t:`keys`,h:`Tempo e lugar dos atos`,items:[[`6h–20h`,`horário dos atos`,`em dias úteis (${a(`art. 212`)}); atos iniciados antes das 20h serão concluídos após esse horário quando o adiamento prejudicar a diligência ou causar grave dano (${a(`art. 212, §1º`)})`],[`24h`,`processo eletrônico`,`em qualquer horário, até as 24h do último dia do prazo, considerado o horário vigente no juízo perante o qual o ato deve ser praticado (${a(`art. 213`)})`],[`20/12–20/1`,`suspensão dos prazos`,`de 20/12 a 20/1, inclusive. Nesse período, não se realizam audiências nem sessões de julgamento (${a(`art. 220`)})`]]},
{t:`p`,html:`<p><b>Mesmo nas férias e feriados</b>, citações, intimações e penhoras podem ocorrer independentemente de autorização judicial, observada a inviolabilidade do domicílio prevista no ${a(`CF, art. 5º, XI`)} (${a(`art. 212, §2º`)}); também se praticam tutelas de urgência (${a(`art. 214`)}).</p><p><b>Nas férias forenses</b>, onde as houver, processam-se e não se suspendem pela superveniência delas: “os procedimentos de jurisdição voluntária e os necessários à conservação de direitos, quando puderem ser prejudicados pelo adiamento”; a ação de alimentos; os processos de nomeação ou remoção de tutor e curador; e os processos que a lei determinar (${a(`art. 215`)}). Nos feriados, aplica-se o ${a(`art. 214`)}.</p><p><b>Lugar:</b> em regra, na sede do juízo. Excepcionalmente, os atos podem ocorrer em outro lugar por deferência, interesse da justiça, natureza do ato ou obstáculo arguido pelo interessado e acolhido pelo juiz (${a(`art. 217`)}). Autoridades como o Presidente da República são inquiridas em sua residência ou onde exercem a função, conforme o procedimento do ${a(`art. 454`)}.</p>`}],
quiz:[
[`Despacho que manda intimar a parte admite recurso?`,[`Agravo`,`Não, é irrecorrível`],1,`${a(`CPC, art. 1.001`)}.`],
[`Depois da contestação, o autor pode desistir sozinho?`,[`Sim`,`Não, depende do consentimento do réu`],1,`${a(`art. 485, §4º`)}.`],
[`Penhora pode ser feita durante as férias forenses?`,[`Não`,`Sim`],1,`${a(`art. 212, §2º`)}.`]]},

/* ================= XII ================= */
{id:`prazos`,group:`Atos, prazos e nulidades`,title:`Prazos processuais`,
intro:`Perder um prazo costuma ser irreversível. Por isso vale dominar de onde ele vem, quando começa e como se conta.`,
blocks:[
{t:`steps`,h:`De onde vem o prazo`,items:[
[`Legal`,`Fixado em lei, como os 15 dias da contestação.`,`CPC, art. 218`],
[`Judicial`,`Fixado pelo juiz quando a lei for omissa, considerando a complexidade do ato.`,`art. 218, §1º`],
[`Subsidiário`,`Sem lei nem decisão: 5 dias para a parte.`,`art. 218, §3º`],
[`Comparecimento`,`Quando a lei ou o juiz não determinar prazo, a intimação só obriga ao comparecimento após decorridas 48 horas.`,`art. 218, §2º`]]},
{t:`calc`,kind:`prazo`,h:`Calcule um prazo de verdade`,hint:`Dias úteis, exclusão do dia do começo, recesso de fim de ano, feriados nacionais e prazo em dobro.`},
{t:`table`,h:`Quando o prazo começa`,hint:`${a(`CPC, art. 231`)}. Depois desse marco, aplica-se a contagem do art. 224.`,head:[`Forma de comunicação`,`Dia do começo`],rows:[
[`Correio`,`Juntada do aviso de recebimento`],
[`Oficial de justiça (inclusive hora certa)`,`Juntada do mandado cumprido`],
[`Escrivão ou chefe de secretaria`,`Data em que ocorreu`],
[`Edital`,`Dia útil seguinte ao fim da dilação fixada pelo juiz`],
[`Intimação eletrônica por consulta`,`Dia útil seguinte à consulta ou ao término dos 10 dias corridos contados do envio. Se a consulta ocorrer em dia não útil, a intimação considera-se realizada no primeiro dia útil seguinte. Observe também o art. 224 (${a(`art. 231, V`)}; Lei 11.419/06, art. 5º, §§1º a 3º)`],
[`Carta precatória ou rogatória`,`Juntada do comunicado do art. 232 ou, se não houver esse comunicado, da carta devidamente cumprida aos autos de origem (${a(`art. 231, VI`)})`],
[`Diário da Justiça eletrônico`,`Publicação: considera-se publicado no primeiro dia útil após a disponibilização, e o prazo começa no dia útil seguinte (${a(`art. 224, §§2º e 3º`)})`],
[`Carga dos autos`,`Dia da carga`],
[`Citação eletrônica`,`Quinto dia útil após a confirmação do recebimento (${a(`art. 231, IX`)}). Sem confirmação em até 3 dias úteis do recebimento da citação eletrônica, a citação será realizada por correio, oficial de justiça, escrivão ou chefe de secretaria se o citando comparecer em cartório, ou edital (${a(`art. 246, §1º-A`)}). Citado por outra forma, o réu deve apresentar justa causa para a falta de confirmação na primeira oportunidade de falar nos autos. Deixar de confirmar no prazo legal, sem justa causa, é passível de multa de até 5% do valor da causa (${a(`art. 246, §§1º-B e 1º-C`)})`]]},
{t:`flips`,h:`Regras de contagem`,items:[
[`Só dias úteis`,`Para prazos processuais em dias (${a(`art. 219`)}). Prazos de direito material, como a prescrição e a decadência, correm em dias corridos. A dilação do edital (20 a 60 dias, art. 257, III) é fixada pelo juiz, e há divergência sobre contá-la em dias úteis.`],
[`Exclui e inclui`,`Exclui o dia do começo e inclui o do vencimento (${a(`art. 224`)}). Os dias do começo e do vencimento passam para o primeiro dia útil seguinte se coincidirem com expediente iniciado depois ou encerrado antes do horário normal, ou com indisponibilidade da comunicação eletrônica (§1º).`],
[`Antes do prazo vale`,`Ato praticado antes do termo inicial é tempestivo (${a(`art. 218, §4º`)}).`],
[`Renúncia`,`A parte pode renunciar ao prazo estabelecido só em seu favor, de forma expressa (${a(`art. 225`)}).`],
[`Justa causa`,`Evento alheio à vontade que impediu o ato permite praticá-lo em prazo fixado pelo juiz (${a(`art. 223`)}).`],
[`Prorrogação`,`Até 2 meses em comarca de difícil transporte; mais em calamidade pública (${a(`art. 222`)}).`]]},
{t:`keys`,h:`Prazos do juiz e do servidor`,hint:`São prazos impróprios: o descumprimento não gera preclusão.`,items:[[`5`,`dias`,`despachos (${a(`art. 226, I`)})`],[`10`,`dias`,`decisões interlocutórias (II)`],[`30`,`dias`,`sentenças (III)`],[`1`,`dia`,`servidor remeter os autos conclusos (${a(`art. 228`)})`]]},
{t:`chooser`,h:`Prazo em dobro`,items:[
[`Ministério Público`,`Dobro`,`<p>${a(`art. 180`)}, contado da intimação pessoal.</p>`],[`Fazenda Pública`,`Dobro`,`<p>${a(`art. 183`)}: prazo em dobro para suas manifestações processuais, contado da intimação pessoal, por carga, remessa ou meio eletrônico.</p>`],[`Defensoria e NPJ`,`Dobro`,`<p>${a(`art. 186`)}: prazo em dobro, contado da intimação pessoal do defensor. O dobro também alcança escritórios de prática jurídica de faculdades de Direito reconhecidas na forma da lei e entidades de assistência jurídica gratuita conveniadas com a Defensoria Pública (§§1º e 3º).</p>`],[`Litisconsortes`,`Dobro, com ressalvas`,`<p>Procuradores diferentes, de escritórios distintos, em autos físicos (${a(`art. 229`)}). Cessa a contagem em dobro se, havendo apenas dois réus, somente um oferecer defesa (§1º).</p>`],[`Lei com prazo próprio`,`Sem dobro`,`<p>Quando a lei fixa prazo específico para o ente.</p>`]]}],
quiz:[
[`Intimação publicada no DJe que foi disponibilizado na segunda-feira. Quando começa o prazo?`,[`Na segunda`,`Na terça`,`Na quarta`],2,`Sem feriados ou suspensão, com terça e quarta como dias úteis, a disponibilização no DJe na segunda gera publicação na terça e início da contagem na quarta (${a(`art. 224, §§2º e 3º`)}).`],
[`O prazo para o juiz sentenciar é preclusivo?`,[`Sim`,`Não, é impróprio`],1,`${a(`art. 226`)}.`],
[`Sem prazo na lei ou na decisão, a parte tem:`,[`5 dias`,`15 dias`,`48 horas`],0,`${a(`art. 218, §3º`)}.`]]},

/* ================= XIII ================= */
{id:`nulidades`,group:`Atos, prazos e nulidades`,title:`Nulidades processuais`,
intro:`No processo, nenhuma invalidade age sozinha: ela precisa ser decretada pelo juiz. E o sistema prefere aproveitar o ato a anulá-lo.`,
blocks:[
{t:`svg`,h:`Os três planos do ato`,html:`<svg viewBox="0 0 700 220" role="img" aria-label="Escada de três degraus: existência, validade, eficácia">
<path class="draw" d="M40,190 H240 V130 H440 V70 H640" fill="none" stroke="var(--brass)" stroke-width="4"/>
<g class="pop" style="transition-delay:.4s"><text x="140" y="178" text-anchor="middle" font-size="18" fill="var(--ink)" font-weight="700">Existência</text><text x="140" y="210" text-anchor="middle" font-size="12" fill="var(--muted)">o ato existe?</text></g>
<g class="pop" style="transition-delay:.7s"><text x="340" y="118" text-anchor="middle" font-size="18" fill="var(--seal)" font-weight="700">Validade</text><text x="340" y="150" text-anchor="middle" font-size="12" fill="var(--muted)">é aqui que moram as nulidades</text></g>
<g class="pop" style="transition-delay:1s"><text x="540" y="58" text-anchor="middle" font-size="18" fill="var(--ink)" font-weight="700">Eficácia</text><text x="540" y="90" text-anchor="middle" font-size="12" fill="var(--muted)">produz efeitos?</text></g></svg>`},
{t:`table`,h:`Espécies de vício`,head:[`Espécie`,`O que é`,`Como se trata`],rows:[
[`Inexistência`,`Falta elemento essencial (sentença sem dispositivo, processo sem citação)`,`Pode ser reconhecida a qualquer tempo, até por ação própria (querela nullitatis)`],
[`Nulidade absoluta`,`Viola norma de ordem pública`,`De ofício e a qualquer tempo, ouvidas antes as partes (${a(`art. 10`)})`],
[`Nulidade relativa`,`Viola norma dispositiva, de interesse da parte`,`Depende de alegação, na primeira oportunidade`],
[`Mera irregularidade`,`Defeito sem relevância`,`Não invalida nada`]]},
{t:`flips`,h:`As regras do sistema`,items:[
[`Quem causou não alega`,`Quando a lei prescreve forma sob pena de nulidade, a parte que deu causa ao vício não pode requerer sua decretação (${a(`art. 276`)}).`],
[`Finalidade atingida`,`Ato feito de outro modo é válido se alcançou a finalidade (${a(`art. 277`)}).`],
[`Primeira oportunidade`,`Alega-se na primeira vez em que couber falar nos autos, sob pena de preclusão, salvo nulidade de ofício ou impedimento legítimo (${a(`art. 278`)}).`],
[`Sem prejuízo, sem nulidade`,`O ato não se repete se não houver prejuízo à parte (${a(`art. 282, §1º`)}): <em>pas de nullité sans grief</em>.`],
[`Primazia do mérito`,`Se o juiz puder decidir o mérito a favor de quem aproveitaria a nulidade, não a pronuncia (${a(`art. 282, §2º`)}).`],
[`Contaminação`,`Anulado o ato, caem os subsequentes que dele dependam; partes independentes se salvam (${a(`art. 281`)}).`]]},
{t:`callout`,title:`MP não intimado`,html:`<p>Se o MP deveria intervir e não foi intimado, anulam-se os atos a partir de quando deveria ter sido chamado. Mas o juiz só decreta depois de ouvir o MP sobre a existência de prejuízo (${a(`art. 279, §§1º e 2º`)}).</p>`},
{t:`wizard`,h:`Devo anular este ato?`,tree:{q:`O ato tem um vício de forma?`,a:[[`Sim`,{q:`Mesmo assim, ele atingiu a finalidade?`,a:[[`Sim`,{end:`Ato válido`,txt:`Instrumentalidade das formas (${a(`arts. 188 e 277`)}).`}],[`Não`,{q:`Houve prejuízo para alguma parte?`,a:[[`Não`,{end:`Não se anula`,txt:`Sem prejuízo, não há nulidade (${a(`art. 282, §1º`)}).`}],[`Sim`,{q:`O juiz pode julgar o mérito a favor de quem seria beneficiado pela anulação?`,a:[[`Sim`,{end:`Julga o mérito`,txt:`Primazia do mérito (${a(`art. 282, §2º`)}).`}],[`Não`,{q:`A lei prescreve a forma sob pena de nulidade e a parte requerente deu causa ao vício?`,a:[[`Sim`,{end:`Não pode requerer`,txt:`Ela não pode requerer a decretação (${a(`art. 276`)}).`}],[`Não`,{q:`A nulidade foi alegada na primeira oportunidade?`,a:[[`Sim`,{end:`Decreta a nulidade`,txt:`O juiz identifica os atos atingidos e determina as providências para repeti-los ou retificá-los; os subsequentes dependentes ficam sem efeito (${a(`arts. 281 e 282`)}).`}],[`Não`,{end:`Preclusão`,txt:`Há preclusão, salvo nulidade que o juiz deva decretar de ofício ou legítimo impedimento comprovado (${a(`art. 278`)}).`}]]}]]}]]}]]}]]}],[`Não`,{end:`Nada a anular`,txt:`Sem vício, segue o processo.`}]]}}],
quiz:[
[`Quando a lei prescreve forma sob pena de nulidade, a parte que deu causa ao vício pode requerer sua decretação?`,[`Sim`,`Não`],1,`${a(`art. 276`)}.`],
[`Nulidade relativa não alegada na primeira oportunidade, sem legítimo impedimento comprovado:`,[`preclui`,`pode ser alegada na apelação`,`é declarada de ofício`],0,`${a(`art. 278`)}. Não pode ser guardada para alegação inicial na apelação nem é decretada de ofício.`],
[`Citação com vício, mas o réu contestou tudo. O que se faz?`,[`Anula-se`,`Considera-se suprida`],1,`Comparecimento supre a falta ou nulidade (${a(`art. 239, §1º`)}).`]]},

/* ================= XIV ================= */
{id:`valor`,group:`Custos e ciclo do processo`,title:`Valor da causa`,
intro:`Toda causa tem valor, mesmo sem conteúdo econômico imediato (art. 291). Ele repercute nas custas e pode servir de base aos honorários, quando não for possível mensurar o proveito econômico, observadas as regras do art. 85. Também define a competência dos Juizados e até o cabimento de alguns atos.`,
blocks:[
{t:`calc`,kind:`valorcausa`,h:`Simulador do art. 292`,hint:`Escolha o tipo de ação e mude os números.`},
{t:`table`,h:`O art. 292, inciso por inciso`,head:[`Inciso`,`Ação`,`Valor da causa`],rows:[
[`I`,`Cobrança`,`Principal corrigido + juros de mora vencidos + penalidades até a propositura`],
[`II`,`Existência, validade, cumprimento, modificação, resolução, resilição ou rescisão de ato jurídico`,`Valor do ato ou da parte controvertida`],
[`III`,`Alimentos`,`Soma de 12 prestações mensais`],
[`IV`,`Divisão, demarcação e reivindicação`,`Valor de avaliação da área ou do bem`],
[`V`,`Indenização, inclusive dano moral`,`Valor pretendido`],
[`VI`,`Pedidos cumulados`,`Soma de todos`],
[`VII`,`Pedidos alternativos`,`O de maior valor`],
[`VIII`,`Pedido subsidiário`,`O do pedido principal`]]},
{t:`flips`,h:`Ajustes e controle`,items:[
[`Vencidas e vincendas`,`Somam-se as duas (${a(`§1º`)}). Vincendas: uma prestação anual se a obrigação for por prazo indeterminado ou superior a 1 ano; se inferior, a soma das restantes (§2º).`],
[`Correção de ofício`,`O juiz corrige de ofício, por arbitramento, o valor que não corresponda ao conteúdo patrimonial em discussão ou ao proveito econômico perseguido pelo autor, com recolhimento das custas correspondentes (${a(`§3º`)}).`],
[`Impugnação do réu`,`Em preliminar de contestação, sob pena de preclusão (${a(`arts. 293 e 337, III`)}).`]]}],
quiz:[
[`Ação de alimentos de R$ 800 por mês. Valor da causa?`,[`R$ 800`,`R$ 9.600`,`R$ 4.800`],1,`12 × 800 (${a(`art. 292, III`)}).`],
[`Pedidos alternativos de R$ 20 mil e R$ 35 mil. Valor da causa?`,[`R$ 55 mil`,`R$ 35 mil`,`R$ 20 mil`],1,`O de maior valor (VII).`],
[`O réu discordou do valor só na apelação. Pode?`,[`Sim`,`Não, precluiu`],1,`Deve impugnar na contestação (${a(`art. 293`)}).`]]},

/* ================= XV ================= */
{id:`despesas`,group:`Custos e ciclo do processo`,title:`Despesas e honorários`,
intro:`Quem paga o processo? Durante o caminho, quem pede o ato adianta. No final, quem perdeu, ou quem deu causa, reembolsa.`,
blocks:[
{t:`tl`,h:`O ciclo do dinheiro no processo`,items:[
[`Adiantamento`,`Em regra, cada parte adianta as despesas dos atos que realiza ou requer; o autor adianta as dos atos determinados de ofício ou requeridos pelo MP fiscal (${a(`art. 82`)}). Há regras especiais para gratuidade, cobrança de honorários por advogado, atos requeridos pela Fazenda Pública, MP ou Defensoria e perícias; nestas, o adiantamento é rateado quando determinadas de ofício ou requeridas por ambas as partes (${a(`arts. 82, §3º, 91, 95 e 98`)}).`],
[`Despesas`,`Custas (taxa paga ao Judiciário), indenização de viagem, remuneração de assistente técnico e diária de testemunha (${a(`art. 84`)}).`],
[`Sentença`,`Condena o vencido a ressarcir o que o vencedor antecipou (${a(`art. 82, §2º`)}) e a pagar honorários (${a(`art. 85`)}).`],
[`Recurso`,`O tribunal majora os honorários pelo trabalho adicional, até os tetos legais (${a(`art. 85, §11`)}).`]]},
{t:`callout`,kind:`brass`,title:`Caução do autor que mora fora (art. 83)`,html:`<p>O autor, brasileiro ou estrangeiro, que reside fora do Brasil ou deixa de residir no país durante o processo presta caução para custas e honorários do advogado da parte contrária, se não tiver imóveis no Brasil que assegurem o pagamento, ressalvadas as dispensas legais. Dispensada por tratado (como o Protocolo de Las Leñas, Decreto 2.067/1996, e o acordo do Mercosul com Bolívia e Chile, Decreto 6.891/2009), na execução de título extrajudicial, no cumprimento de sentença e na reconvenção.</p>`},
{t:`keys`,h:`Honorários de sucumbência (art. 85)`,items:[[`10–20%`,`regra geral`,`sobre o valor da condenação; na ausência de condenação, sobre o proveito econômico obtido ou, não sendo possível mensurá-lo, sobre o valor atualizado da causa (§2º)`],[`5%`,`monitória`,`o mandado concede 15 dias para cumprimento e pagamento de honorários de 5% do valor da causa; o cumprimento no prazo isenta o réu das custas processuais (art. 701, caput e §1º)`],[`alimentar`,`natureza`,`vedada a compensação na sucumbência parcial (§14)`]]},
{t:`p`,html:`<p>Para fixar o percentual, o juiz considera o zelo do profissional, o lugar do serviço, a natureza e importância da causa, o trabalho e o tempo exigidos (${a(`art. 85, §2º`)}).</p>`},
{t:`calc`,kind:`honor`,h:`Honorários contra a Fazenda Pública`,hint:`Arraste o valor e veja as faixas se preencherem.`},
{t:`chooser`,h:`Situações especiais`,items:[
[`Equidade`,`Só para valores baixos ou inestimáveis`,`<p>O juiz arbitra por equidade quando o proveito é inestimável ou irrisório ou o valor da causa é muito baixo (${a(`§8º`)}). Nesses casos, observa a tabela da OAB ou o mínimo de 10%, o que for maior (§8º-A). Fora disso, a equidade é proibida (${a(`§6º-A`)}, Lei 14.365/2022; STJ, Tema 1.076). Nas causas com a Fazenda Pública, a questão aguarda o STF (Tema 1.255).</p>`],
[`Perda do objeto`,`Paga quem deu causa`,`<p>Princípio da causalidade (${a(`§10`)}).</p>`],
[`Sucumbência recíproca`,`Divisão proporcional`,`<p>Cada um vencedor e vencido em parte: despesas proporcionais. Se um perdeu parte mínima, o outro paga tudo (${a(`art. 86`)}). Ex.: pediu R$ 50 mil e ganhou R$ 49 mil.</p>`],
[`Litisconsortes vencidos`,`Proporcional, ou solidária se omissa`,`<p>A sentença deve distribuir expressamente; se não o fizer, respondem solidariamente (${a(`art. 87`)}).</p>`],
[`Jurisdição voluntária`,`Rateio`,`<p>O requerente adianta e as despesas são rateadas entre os interessados (${a(`art. 88`)}). Nos juízos divisórios sem litígio, proporcional aos quinhões (${a(`art. 89`)}).</p>`],
[`Sentença omissa`,`Ação autônoma`,`<p>Se a decisão transitada nada disse sobre honorários, cabe ação própria (${a(`§18`)}).</p>`]]},
{t:`juris`,h:`Na jurisprudência`,items:[
{court:`STJ`,year:`Tema 1.076`,id:`REsp 1.850.512, 1.877.883, 1.906.618 e 1.906.623`,tese:`É vedada a fixação de honorários por equidade quando o valor da condenação, do proveito econômico ou da causa for elevado.`,html:`Nesses casos, são obrigatórios os percentuais do art. 85, § 2º, ou, quando a Fazenda Pública for parte, as faixas do § 3º.`},
{court:`STF`,year:`ADI 6.053`,id:`ADI 6.053`,tese:`Advogados públicos podem receber honorários de sucumbência, respeitado o teto remuneratório.`,html:`O §19 do art. 85 é constitucional, mas a soma com o subsídio não pode ultrapassar o teto do art. 37, XI, da Constituição.`}]}],
quiz:[
[`Ação extinta por perda do objeto. Quem paga honorários?`,[`O autor, sempre`,`Quem deu causa ao processo`,`Ninguém`],1,`${a(`art. 85, §10`)}.`],
[`Causa de R$ 50 milhões, com proveito econômico mensurável e não irrisório: o valor elevado permite fixar honorários por equidade?`,[`Sim`,`Não`],1,`Aplicam-se os percentuais legais, inclusive quando a Fazenda Pública é parte (${a(`art. 85, §§2º, 3º, 6º-A e 8º`)}; STJ, Tema 1.076). Para causas com a Fazenda Pública, o STF ainda não julgou o mérito do Tema 1.255.`],
[`Honorários podem ser compensados na sucumbência parcial?`,[`Sim`,`Não`],1,`${a(`art. 85, §14`)}.`]]},

/* ================= XVI ================= */
{id:`ciclo`,group:`Custos e ciclo do processo`,title:`Formação, suspensão e extinção`,
intro:`O processo nasce com o protocolo, pode parar em situações previstas em lei e termina por sentença. Entre uma coisa e outra, o juiz deve sempre tentar salvar o julgamento de mérito.`,
blocks:[
{t:`vs`,h:`Quando o processo existe`,l:{t:`Para o autor e o juízo`,i:[`Com o protocolo da petição inicial (${a(`art. 312`)})`,`Todos os processos estão sujeitos a registro e, onde houver mais de um juiz, também à distribuição (${a(`art. 284`)})`]},r:{t:`Para o réu`,i:[`Em relação ao réu, os efeitos do art. 240 dependem de citação válida (${a(`art. 312`)})`,`A citação válida induz litispendência, torna litigiosa a coisa e constitui o devedor em mora, ressalvados os arts. 397 e 398 do Código Civil (${a(`art. 240`)})`,`A interrupção da prescrição, operada pelo despacho que ordena a citação, retroage à propositura se o autor adotar, em 10 dias úteis de sua intimação, as providências necessárias para viabilizá-la. A demora exclusiva do serviço judiciário não prejudica a parte (§§1º a 3º)`]}},
{t:`table`,h:`Causas de suspensão (art. 313)`,head:[`Inciso`,`Causa`,`Prazo ou consequência`],rows:[
[`I`,`Morte ou perda de capacidade da parte, representante ou procurador`,`Falecido o réu, se não houver ação de habilitação, o juiz intimará o autor para promover a citação do espólio, do sucessor ou dos herdeiros no prazo judicial de 2 a 6 meses (§2º, I). Autor: habilitação, sob pena de extinção. Morto o advogado, a parte será intimada para constituir novo mandatário em 15 dias úteis; sem regularização, haverá extinção sem mérito se for o autor, ou prosseguimento à revelia se for o réu (§3º)`],
[`II`,`Convenção das partes`,`Máximo de 6 meses`],
[`III`,`Arguição de impedimento ou suspeição do juiz`,`Permanece suspenso até o julgamento do incidente se recebido com efeito suspensivo; sem esse efeito, volta a correr (art. 146, §2º)`],
[`IV`,`Admissão de IRDR`,`O relator suspende os processos pendentes sobre a mesma questão de direito no Estado ou na região. Após 1 ano, cessa a suspensão, salvo decisão fundamentada em contrário. A suspensão nacional depende de pedido ao tribunal superior (arts. 980 e 982)`],
[`V`,`Prejudicialidade externa`,`Máximo de 1 ano`],
[`VI`,`Força maior`,`Enquanto durar`],
[`VII`,`Questão do Tribunal Marítimo`,`—`],
[`IX`,`Parto ou concessão de adoção à advogada única patrona`,`30 dias a partir do evento, mediante documento comprobatório e notificação ao cliente (§6º)`],
[`X`,`Paternidade do advogado único patrono`,`8 dias a partir do parto ou da concessão da adoção, mediante documento comprobatório e notificação ao cliente (§7º)`]]},
{t:`callout`,title:`Durante a suspensão`,html:`<p>Nenhum ato pode ser praticado, salvo atos urgentes para evitar dano irreparável. Mas, se a suspensão vem da arguição de impedimento ou suspeição, nem os urgentes podem ser praticados pelo juiz arguido (${a(`art. 314`)}). Questão penal prejudicial: se o mérito depender da verificação de fato delituoso, o juiz pode suspender o processo civil. Se a ação penal não for proposta em 3 meses da intimação do ato de suspensão, esta cessa e o juiz cível examina incidentalmente a questão (${a(`art. 315, caput e §1º`)}). Proposta a ação penal, a suspensão dura no máximo 1 ano (§2º).</p>`},
{t:`callout`,kind:`sage`,title:`Extinção e primazia do mérito`,html:`<p>A extinção se dá por sentença (${a(`art. 316`)}). Antes de extinguir sem resolver o mérito, o juiz deve dar à parte oportunidade de corrigir o vício, se possível (${a(`art. 317`)}).</p>`},
{t:`arts`,h:`Os artigos-chave da matéria`,hint:`Abra cada um.`,items:[
[`Art. 2º`,`Inércia`,`O processo começa por iniciativa da parte e se desenvolve por impulso oficial, salvo as exceções previstas em lei.`],
[`Art. 10`,`Não surpresa`,`O juiz não decide com base em fundamento sobre o qual as partes não puderam se manifestar, ainda que seja matéria de ofício.`],
[`Art. 64, §1º`,`Incompetência absoluta`,`Pode ser alegada em qualquer tempo e grau e deve ser declarada de ofício.`],
[`Art. 113`,`Litisconsórcio`,`Comunhão, conexão ou afinidade autorizam litigar em conjunto.`],
[`Art. 144`,`Impedimento`,`Hipóteses objetivas que proíbem o juiz de atuar.`],
[`Art. 219`,`Dias úteis`,`Prazos processuais em dias contam só os úteis.`],
[`Art. 277`,`Finalidade`,`Ato feito de outro modo é válido se alcançou a finalidade.`],
[`Art. 292`,`Valor da causa`,`Critérios de fixação do valor.`],
[`Art. 85`,`Honorários`,`Em regra, de 10% a 20%, com faixas próprias para a Fazenda Pública e fixação por equidade nas hipóteses do §8º.`],
[`Art. 313`,`Suspensão`,`Causas e prazos de suspensão do processo.`]]}],
quiz:[
[`A citação válida constitui o devedor em mora?`,[`Sim`,`Não`],0,`${a(`art. 240`)}, ressalvados os arts. 397 e 398 do Código Civil.`],
[`Qual é o prazo máximo de suspensão do processo por convenção das partes?`,[`3 meses`,`6 meses`,`1 ano`],1,`${a(`art. 313, II e §4º`)}.`],
[`A advogada única patrona dá à luz, apresenta documento comprobatório e notifica o cliente. Qual é o período de suspensão, contado do parto?`,[`8 dias`,`30 dias`,`15 dias`],1,`${a(`art. 313, IX e §6º`)}.`]]}
);

defPackCourse(PK.c,{"area": "Direito Processual", "seed": true});
})();
