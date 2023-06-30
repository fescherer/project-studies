

SOBRE MEMO

Porque um componente renderiza?
- Hooks changed (Mudou estado, contexto, reducer, etc);
- Props changed (mudou propriedades);
- Parent rerender (component pai renderizou);

Qual o fluxo de renderização?
1. O React recria o HTML da interface daquele component;
2. Compara a versão do HTML recriada com a versão anterior;
3. SE mudou alguma coisa, ele reescreve o HTML na tela;

Memo:
0: Hooks changed, Props changed (deep comparison)
0.1: Comparar a versão anterior dos hooks e props
0.2: SE mudou algo, ele vai permitar a nova renderização

Memo é muito bom, mas o algoritmo de renderização do react já é muito bom e por isso na maioria das vezes, usar o deep comparison vai ser mais custoso do que renderizar o componente novamente.
