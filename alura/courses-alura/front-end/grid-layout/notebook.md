# Properties

```css
.grid-container {
  display: grid;
  grid-template-areas: 
    "header"
    "content"
    "footer";
  grid-template-columns: auto;
  grid-template-rows: number number number;
  grid-gap: number;
}

.header {
  grid-area: "header";
  grid-column-start: number;
  grid-column-end: number;
  grid-row-start: number;
  grid-row-end: number;

  // ou
  grid-column: number-start / number-end;
  grid-row: number-start / number-end;
}

.content {
  grid-area: "content"
}

.footer {
  grid-area: "footer"
}
```