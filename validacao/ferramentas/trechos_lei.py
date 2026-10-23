# Junta, da cópia local do Planalto (validacao/fontes/), o texto dos artigos citados numa pesquisa-lei.md.
# Uso: python validacao/ferramentas/trechos_lei.py <aula-id>   -> grava validacao/aulas/<aula-id>/trechos-lei.md
# Serve ao Conferente quando o Planalto não abre: ele confere a transcrição contra o texto que o script baixou,
# não contra o que o Pesquisador escreveu. Sem IA: mesma entrada, mesma saída.
import pathlib
import re
import sys

RAIZ = pathlib.Path(__file__).resolve().parents[2]
FONTES = RAIZ / 'validacao' / 'fontes'

# Como a lei aparece na linha "Dispositivo" -> arquivo da cópia local. A ordem importa: o primeiro que casar vale.
LEIS = [
    (r'Lei\s*(n[º°.]?\s*)?9\.?099', 'l9099'), (r'Lei\s*(n[º°.]?\s*)?12\.?153', 'l12153'), (r'Lei\s*(n[º°.]?\s*)?10\.?259', 'l10259'),
    (r'Lei\s*(n[º°.]?\s*)?15\.?484', 'l15484'), (r'Lei\s*(n[º°.]?\s*)?14\.?879', 'l14879'), (r'Lei\s*(n[º°.]?\s*)?6\.?858', 'l6858'),
    (r'Lei\s*(n[º°.]?\s*)?9\.?307', 'l9307'), (r'Lei\s*(n[º°.]?\s*)?13\.?140', 'l13140'), (r'Lei\s*(n[º°.]?\s*)?13\.?146|LBI|Estatuto da Pessoa com Defici', 'l13146'),
    (r'Lei\s*(n[º°.]?\s*)?11\.?419', 'l11419'), (r'Lei\s*(n[º°.]?\s*)?8\.?560', 'l8560'), (r'Lei\s*(n[º°.]?\s*)?8\.?069|ECA\b', 'eca'),
    (r'Lei\s*(n[º°.]?\s*)?8\.?078|CDC\b', 'cdc'), (r'LC\s*(n[º°.]?\s*)?80|Complementar\s*(n[º°.]?\s*)?80', 'lc80'),
    (r'LC\s*(n[º°.]?\s*)?95|Complementar\s*(n[º°.]?\s*)?95', 'lc95'), (r'LC\s*(n[º°.]?\s*)?64|Complementar\s*(n[º°.]?\s*)?64', 'lc64'),
    (r'LINDB|Decreto-Lei\s*4\.?657', 'lindb'), (r'Decreto-Lei\s*509|DL\s*509', 'dl509'), (r'Decreto\s*678|Conven[çc][ãa]o Americana', 'd678'),
    (r'\bCPP\b|Processo Penal', 'cpp'), (r'\bCP\b|C[óo]digo Penal', 'cp'), (r'\bCF\b|Constitui', 'cf'), (r'\bCC\b|C[óo]digo Civil', 'cc'), (r'\bCPC\b', 'cpc'),
]


def artigos(arquivo):
    # Divide a cópia local em artigos: chave "1.015", "1.035-A", "5" etc.
    texto = (FONTES / f'{arquivo}.txt').read_text(encoding='utf-8')
    blocos, atual, corpo = {}, None, []
    for linha in texto.splitlines():
        m = re.match(r'^Art\.\s*([\d.]+(?:-[A-Z])?)\s*[º°o]?', linha)
        if m:
            if atual and atual not in blocos:
                blocos[atual] = '\n'.join(corpo)
            atual, corpo = m.group(1).rstrip('.'), [linha]
        elif atual:
            corpo.append(linha)
    if atual and atual not in blocos:
        blocos[atual] = '\n'.join(corpo)
    cab = texto.splitlines()[:2]
    return blocos, cab


def main(aula):
    pasta = RAIZ / 'validacao' / 'aulas' / aula
    pesquisa = (pasta / 'pesquisa-lei.md').read_text(encoding='utf-8')
    pedidos = {}
    for linha in pesquisa.splitlines():
        if not re.match(r'^-\s*(Dispositivo|Texto vigente|Resposta)', linha):
            continue
        # Cada trecho "lei, arts. X, Y" vira (lei, [artigos]); sem lei explícita, vale o CPC.
        for parte in re.split(r';', linha):
            arq = next((a for p, a in LEIS if re.search(p, parte)), 'cpc')
            for num in re.findall(r'arts?\.\s*([\d.]+(?:-[A-Z])?(?:\s*(?:,|e|a)\s*[\d.]+(?:-[A-Z])?)*)', parte):
                for n in re.findall(r'[\d.]+(?:-[A-Z])?', num):
                    n = n.strip('.')
                    if n:
                        pedidos.setdefault(arq, set()).add(n)
    saida = [f'# Trechos da cópia local do Planalto · {aula}', '',
             'Texto baixado do Planalto por script (validacao/ferramentas/baixar_leis.py), sem passar pelo Pesquisador.',
             'Trecho entre [RISCADO: ...] é texto riscado no Planalto (revogado ou redação antiga).', '']
    for arq in sorted(pedidos):
        if not (FONTES / f'{arq}.txt').exists():
            continue
        blocos, cab = artigos(arq)
        saida += [f'## {arq}', *cab, '']
        chave = lambda n: [int(x) if x.isdigit() else 0 for x in re.split(r'[.-]', n)]
        for n in sorted(pedidos[arq], key=chave):
            if n in blocos:
                saida += [blocos[n], '']
    (pasta / 'trechos-lei.md').write_text('\n'.join(saida) + '\n', encoding='utf-8')
    print(f'{aula}: {sum(len(v) for v in pedidos.values())} artigos pedidos, {len(saida)} linhas')


if __name__ == '__main__':
    main(sys.argv[1])
