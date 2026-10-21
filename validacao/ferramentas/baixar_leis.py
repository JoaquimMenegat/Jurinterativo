# Baixa o texto compilado das leis do Planalto para validacao/fontes/, uma vez por lote.
# Uso: python validacao/ferramentas/baixar_leis.py [nome ...]   (sem nome: todas)
# O Pesquisador de lei lê a cópia local; a fonte citada continua sendo a URL do Planalto.
# Trecho riscado no Planalto (revogado ou com redação antiga) vira [RISCADO: ...], para não ser lido como vigente.
import datetime
import pathlib
import re
import sys
import urllib.request
from html.parser import HTMLParser

LEIS = {
    'cpc': 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105compilada.htm',
    'cc': 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm',
    'cf': 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicaocompilado.htm',
    'lindb': 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del4657compilado.htm',
    'l9099': 'https://www.planalto.gov.br/ccivil_03/leis/l9099.htm',
    'l10259': 'https://www.planalto.gov.br/ccivil_03/leis/leis_2001/l10259.htm',
    'l12153': 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/lei/l12153.htm',
    'eca': 'https://www.planalto.gov.br/ccivil_03/leis/l8069compilado.htm',
    'l13146': 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm',
    'l6858': 'https://www.planalto.gov.br/ccivil_03/leis/l6858.htm',
    'cpp': 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689compilado.htm',
    'cp': 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm',
    'lc64': 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp64.htm',
    'l9307': 'https://www.planalto.gov.br/ccivil_03/leis/l9307.htm',
    'l13140': 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13140.htm',
    'lc95': 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp95.htm',
    'd678': 'https://www.planalto.gov.br/ccivil_03/decreto/d0678.htm',
    'lc80': 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp80.htm',
    'l15484': 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15484.htm',
}

DESTINO = pathlib.Path(__file__).resolve().parents[1] / 'fontes'


def baixar(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=60) as r:
        bruto = r.read()
    m = re.search(rb'charset=["\']?([\w-]+)', bruto[:3000], re.I)
    return bruto.decode(m.group(1).decode() if m else 'windows-1252', errors='replace')


class Leitor(HTMLParser):
    # Riscado no Planalto: <strike>, <s>, <del> ou style "line-through", em qualquer nível de aninhamento.
    QUEBRA = {'p', 'br', 'div', 'tr', 'h1', 'h2', 'h3', 'h4', 'li'}
    VAZIAS = {'br', 'img', 'hr', 'meta', 'link', 'input'}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.pilha, self.partes, self.ignorar, self.riscado = [], [], 0, False

    def _riscado_agora(self):
        return any(r for _, r in self.pilha)

    def _marca(self):
        agora = self._riscado_agora()
        if agora != self.riscado:
            self.partes.append(' [RISCADO: ' if agora else '] ')
            self.riscado = agora

    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style'):
            self.ignorar += 1
        if tag in self.QUEBRA:
            self.partes.append('\n')
        if tag in self.VAZIAS:
            return
        estilo = (dict(attrs).get('style') or '').lower()
        self.pilha.append((tag, tag in ('strike', 's', 'del') or 'line-through' in estilo))

    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self.ignorar = max(0, self.ignorar - 1)
        for i in range(len(self.pilha) - 1, -1, -1):
            if self.pilha[i][0] == tag:
                del self.pilha[i:]
                break
        if tag in self.QUEBRA:
            self._marca()
            self.partes.append('\n')

    def handle_data(self, dados):
        if not self.ignorar and dados.strip():
            self._marca()
            self.partes.append(dados)


def em_texto(pagina):
    leitor = Leitor()
    leitor.feed(pagina)
    texto = ''.join(leitor.partes) + ('] ' if leitor.riscado else '')
    linhas = (re.sub(r'[ \t\xa0]+', ' ', l).strip() for l in texto.splitlines())
    return '\n'.join(l for l in linhas if l)


def main(nomes):
    DESTINO.mkdir(exist_ok=True)
    hoje = datetime.date.today().strftime('%d/%m/%Y')
    for nome in nomes or LEIS:
        url = LEIS[nome]
        try:
            texto = em_texto(baixar(url))
        except Exception as erro:
            print(f'FALHOU {nome}: {erro}')
            continue
        (DESTINO / f'{nome}.txt').write_text(f'Fonte: {url}\nBaixado em: {hoje}\n\n{texto}\n', encoding='utf-8')
        print(f'ok {nome}: {len(texto) // 1000} mil caracteres')


if __name__ == '__main__':
    main(sys.argv[1:])
