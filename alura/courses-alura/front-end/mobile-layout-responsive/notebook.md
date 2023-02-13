# Reponsive

## Font-size

- REM: relativo ao font-size da tag ``<html>`` 
- EM: relativo ao font-size do container pai

## Images

- SVG: Tipo de imagem que é feita a partir de fórmulas matemáticas- Talvez perca nitidez, mas podemos aumentar ou diminuir o quanto quiser

- Para saber se coloca a imagem em CSS ou html: Fazer a pergunta: Essa imagem é conteúdo? Se for, coloca no HTML, se não, coloca no CSS
## Mobile first

- É uma estratégia usada para desenvolver o layout mobile primeiro que o layout desktop. O desktop deve ter mais elementos e por isso pensar no mobile primeiro, as vezes fica mais fácil de fazer essas duas versões

## Viewport

- Sempre adicionar a tag 

```html
<meta name="viewport" content="width=device-width" initial-scale="1.0">
```

## Breakpoints

https://css-tricks.com/snippets/css/media-queries-for-standard-devices/
```css

// Phone
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
}

// Tablet
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
}

// Laptop
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
}

```