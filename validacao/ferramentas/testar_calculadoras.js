// Testa as calculadoras do motor (engine.js) com casos de resultado conhecido.
// Roda o código real de cada calculadora, com uma página falsa mínima, sem navegador.
// Uso: node validacao/ferramentas/testar_calculadoras.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const engine = fs.readFileSync(path.join(__dirname, '..', '..', 'prototipo', 'pacotes', 'inciso-materiais', 'src', 'engine.js'), 'utf8');
const linhas = engine.split('\n');
const linha = prefixo => linhas.find(l => l.startsWith(prefixo));
// Trecho de uma calculadora: da linha "CALC.<nome>=" até a linha anterior à próxima "CALC.".
const calculadora = nome => {
  const i = linhas.findIndex(l => l.startsWith(`CALC.${nome}=`));
  let j = i + 1;
  while (j < linhas.length && !linhas[j].startsWith('CALC.')) j++;
  return linhas.slice(i, j).join('\n');
};

// Elemento falso: guarda valor, texto e ouvintes, o bastante para as calculadoras.
const elemento = () => {
  const filhos = {};
  return {
    innerHTML: '', textContent: '', value: '', checked: false, style: {}, classList: { add() {}, remove() {} },
    addEventListener(tipo, fn) { this.ouvinte = fn; },
    querySelector(sel) { return filhos[sel] || (filhos[sel] = elemento()); },
    querySelectorAll() { return []; },
    closest() { return null; },
  };
};

// setTimeout e requestAnimationFrame rodam na hora: as calculadoras só os usam para animar.
const ctx = { CALC: {}, Date, Math, console, setTimeout: f => f(), requestAnimationFrame: f => f() };
vm.createContext(ctx);
vm.runInContext([linha('const pad='), linha('const brl='), linha('function easter'), linha('const ferCache'), linha('function util'), 'const replay=()=>{};',
  ...['forca', 'resolucao', 'inventario', 'prazo', 'valorcausa', 'honor'].map(calculadora)].join('\n'), ctx);

let falhas = 0;
const confere = (nome, obtido, esperado) => {
  const ok = obtido === esperado;
  if (!ok) falhas++;
  console.log(`${ok ? 'ok  ' : 'FALHOU'} ${nome}: ${obtido}${ok ? '' : ` (esperado: ${esperado})`}`);
};

// Força nova ou velha (CPC, art. 558): a aula usa como limite a data do fato + 1 ano + 1 dia, inclusive.
const forca = (fato, acao) => {
  const el = elemento();
  ctx.CALC.forca(el);
  el.querySelector('.a').value = fato;
  el.querySelector('.b').value = acao;
  el.querySelector('.a').ouvinte();
  return el.querySelector('.res').textContent;
};
confere('fato 01/01/2025, ação 01/01/2026', forca('2025-01-01', '2026-01-01'), 'Força nova');
confere('fato 01/01/2025, ação 02/01/2026 (último dia)', forca('2025-01-01', '2026-01-02'), 'Força nova');
confere('fato 01/01/2025, ação 03/01/2026', forca('2025-01-01', '2026-01-03'), 'Força velha');
confere('fato 01/01/2025, ação 10/01/2026 (questão da aula)', forca('2025-01-01', '2026-01-10'), 'Força velha');
confere('fato 15/06/2025, ação no mesmo dia', forca('2025-06-15', '2025-06-15'), 'Força nova');
confere('fato 31/12/2024, ação 01/01/2026 (virada de ano)', forca('2024-12-31', '2026-01-01'), 'Força nova');
confere('fato 31/12/2024, ação 02/01/2026', forca('2024-12-31', '2026-01-02'), 'Força velha');

// Data da resolução da sociedade (CPC, art. 605): óbito; notificação + 60 dias; notificação; trânsito; assembleia.
const resolucao = (motivo, data) => {
  const el = elemento();
  ctx.CALC.resolucao(el);
  el.querySelector('.k').value = String(motivo);
  el.querySelector('.d').value = data;
  el.querySelector('.k').ouvinte();
  return el.querySelector('.res').textContent;
};
const br = iso => { const [a, m, d] = iso.split('-'); return `${d}/${m}/${a}`; };
confere('resolução por falecimento (art. 605, I): a data do óbito', resolucao(0, '2026-03-10'), br('2026-03-10'));
confere('retirada imotivada (art. 605, II): notificação + 60 dias', resolucao(1, '2026-03-10'), br('2026-05-09'));
confere('recesso (art. 605, III): o dia da notificação', resolucao(2, '2026-03-10'), br('2026-03-10'));
confere('exclusão judicial (art. 605, IV): o trânsito em julgado', resolucao(3, '2026-03-10'), br('2026-03-10'));
confere('exclusão extrajudicial (art. 605, V): a assembleia', resolucao(4, '2026-03-10'), br('2026-03-10'));

// Prazos do inventário: CC, art. 1.796 (30 dias); CPC, art. 611 (instaurar em 2 meses e concluir nos 12 meses seguintes).
const inventario = obito => {
  const el = elemento();
  ctx.CALC.inventario(el);
  el.querySelector('.d').value = obito;
  el.querySelector('.d').ouvinte();
  return el.querySelector('.tl').innerHTML;
};
const tl = inventario('2026-01-15');
confere('inventário: prazo do CC (30 dias) a partir de 15/01/2026', tl.includes('14/02/2026'), true);
confere('inventário: instaurar em 2 meses (CPC, art. 611) = 15/03/2026', tl.includes('15/03/2026'), true);
confere('inventário: concluir nos 12 meses seguintes = 15/03/2027', tl.includes('15/03/2027'), true);

// Prazo processual (CPC, arts. 219, 220, 224, 180, 183, 186, 229): dias úteis, sem fins de semana,
// feriados nacionais e o recesso de 20/12 a 20/01; prazo em dobro para Fazenda, MP, Defensoria e litisconsortes.
const prazo = (data, dias, parte) => {
  const el = elemento();
  // A calculadora roda uma vez ao abrir, com a data de hoje: os selects precisam já ter valor.
  el.querySelector('.p').value = String(dias);
  el.querySelector('.q').value = String(parte);
  ctx.CALC.prazo(el);
  el.querySelector('.d').value = data;
  el.querySelector('.go').onclick();
  return el.querySelector('.res').innerHTML;
};
confere('prazo: 5 dias úteis da intimação em 19/10/2026 (segunda) termina em 26/10/2026', prazo('2026-10-19', 5, 1).includes('26 de outubro de 2026'), true);
confere('prazo: 5 dias úteis da intimação em 15/12/2026 atravessam o recesso e terminam em 22/01/2027', prazo('2026-12-15', 5, 1).includes('22 de janeiro de 2027'), true);
confere('prazo: feriado de 02/11 (Finados) não conta; 1 dia útil de 30/10/2026 termina em 03/11/2026', prazo('2026-10-30', 1, 1).includes('3 de novembro de 2026') || prazo('2026-10-30', 1, 1).includes('03 de novembro de 2026'), true);
confere('prazo em dobro (Fazenda): 15 dias viram 30 dias úteis', prazo('2026-10-19', 15, 2).includes('30 dias úteis'), true);

// Valor da causa (CPC, art. 292).
const valor = (tipo, a, b, c) => {
  const el = elemento();
  ctx.CALC.valorcausa(el);
  el.querySelector('.k').value = tipo;
  el.querySelector('.a').value = String(a);
  el.querySelector('.b').value = String(b);
  el.querySelector('.c').value = String(c);
  el.querySelector('.k').ouvinte();
  return el.querySelector('.res').textContent.replace(/\s/g, ' ');
};
confere('valor da causa: alimentos de R$ 1.000 = 12 prestações (art. 292, III)', valor('alim', 1000, 0, 0), 'R$ 12.000,00');
confere('valor da causa: 3 vencidas + prazo indeterminado = 3 + 12 (art. 292, §§ 1º e 2º)', valor('venc', 1000, 0, 3), 'R$ 15.000,00');
confere('valor da causa: 3 vencidas + 5 meses restantes = 3 + 5', valor('venc', 1000, 5, 3), 'R$ 8.000,00');
confere('valor da causa: cumulados somam (art. 292, VI)', valor('cum', 1000, 2000, 3000), 'R$ 6.000,00');
confere('valor da causa: alternativos, o de maior valor (art. 292, VII)', valor('alt', 1000, 5000, 3000), 'R$ 5.000,00');
confere('valor da causa: subsidiário, o pedido principal (art. 292, VIII)', valor('sub', 1000, 9000, 0), 'R$ 1.000,00');

// Honorários contra a Fazenda (CPC, art. 85, §§ 3º e 5º): faixas escalonadas.
const honor = (sm, maximo) => {
  const el = elemento();
  ctx.CALC.honor(el);
  el.querySelector('.s').value = String(sm);
  el.querySelector('.m').value = String(maximo);
  el.querySelector('.s').ouvinte();
  return el.querySelector('.bars').innerHTML.match(/Total.*?>([\d.,]+) SM/)[1];
};
confere('honorários: 3.000 SM no mínimo = 200×10% + 1.800×8% + 1.000×5% = 214 SM', honor(3000, 0), '214');
confere('honorários: 3.000 SM no máximo = 200×20% + 1.800×10% + 1.000×8% = 300 SM', honor(3000, 1), '300');
confere('honorários: 150 SM no mínimo = 15 SM (só a primeira faixa)', honor(150, 0), '15');

console.log(falhas ?`\n${falhas} falha(s).` : '\nTodas as verificações passaram.');
process.exit(falhas ? 1 : 0);
