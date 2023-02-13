# Flexbox

```css
display: flex;
align-items: center | justify-between | start | end | justify-around;
justify-content: center | justify-between | start | end | justify-around;
flex-direction: row | column;
flex-wrap: no-wrap | wrap;
flex-grow: 1;
flex-shrink: 1;
```

## Grid com flexbox

Não há um jeito fácil de espaçar os elementos usando ``flex-box``, uma ideia é usar margin com cálculo do ``nth-child(n)``

## Trocando direção

Quando se usa o ``flex-direction: column`` troca o axis base, ou seja, o ``align-items`` vira ``justifty-content`` e o ``justifty-content`` vira ``align-items``

## Flex-grow e flex-shrink

``Flex-grow`` serve para os elementos ``items`` crescerem e ocuparem o resto do tamanho que sobra. Se dentro de um container ``flex`` tiver mais de uma dessa propriedade, o espaço restante será distribuido pelo elementos proporcionalmente ao número da propriedade. Ex:
```css
container: {
  display: flex;
} 

item-1 {
  flex-grow: 1
}

item-2 {
  flex-grow: 2
}
```

No exemplo acima, o container será dividido em 3, sendo que uma parte irá para o ``item-1`` e duas partes irão para o ``item-2``.

``Flex-shrink`` serve para falar quanto o elemento deve ser redimencionado


## Desafios

- Flex froggy;
- Flexbox defender;