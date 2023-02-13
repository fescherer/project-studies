
##

- `\d` -vem de digit, pega um dígito
- `\` serve para dar um valor literal:
  - `\.` valor literal do `.` pois o `.` sozinho é um meta-char que significa pegar todos os caracteres especiais

## Meta char

- `.` o "ponto" que significa qualquer char
- `*` o asterisco que serve para definir uma quantidade de chars, zero ou mais vezes
- `{` e `}` as chaves que servem para definir uma quantidade de caracteres específicas que é desejado encontrar
- `?` Serve para deixar o valor opcional - Outro jeito de fazer isso seria `{0,1}`
-  `?` - zero ou uma vez.
- `*` - zero ou mais vezes.
-  `+` - uma ou mais vezes.
-  `{n}` - exatamente n vezes.
-  `{n,}` - no mínimo n vezes.
-  `{n,m}` - no mínimo n vezes, no máximo m vezes.

exemplos: 
```javascript
a{3} letra a 3 vezes.

\d* um digito zero ou mais vezes
```

## Quantifier

Para não precisar ficar escrevendo `\d` toda hora

- `\d{3}` -> faz `\d` três vezes como se fosse `\d\d\d` 

- `+` serve para pegar o máximo de caracteres possíveis- quantifier greedy

Ex:
```
<h1 class="text-left">Expressões regulares</h1>
```
a expressão regular `<h1.+>` pega toda a linha, pois temos o sinal de `>` quando se fecha a tag h1
- `+?` serve para pegar só a primeira opção- quantifier lazy

a expressão regular `<h1.+?>` pega somente `<h1 class="text-left">`

## Char Classes

Uma classe de caracteres é definida por `[]`

exemplos: 
```javascript
[-.] // Pega - e .
```

## Anchors

Uma âncora não casa caracteres como as classes fazem, e nem definem quantidades. Âncoras marcam uma posição específica no alvo, por isso não é possível combiná-las com um quantifier.

\b é uma das âncoras, chamada de word boundary- Busca um intervalo de símbolos

^ é uma âncora que busca no incio

$ é uma âncora que busca no final

## Group
Serve para retornar apenas uma parte da regex, para fazer um grupo usasse `()`

grupos opcionais utilizam o `?`

Non-capturing groups serve para retornar apenas uma parte do grupo, usasse `:`

- Backreference-> Quando quisermos referenciar um grupo podemos usar por exemplo `/1` para referenciar ao primeiro grupo. Onde isso pode ser útil?
Ex:
```
<h1 class="text-left">Expressões regulares</h1>
```
A expressão regular <(h1|h2).+?>([\s\wçã]+)</(h1|h2)> retornaria true se fosse 
```
<h2 class="text-left">Expressões regulares</h2>
```
Para contornar isso, usamos 
`<(h1|h2).+?>([\s\wçã]+)<^\1>`