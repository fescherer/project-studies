import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme/theme'
import { GlobalStyle } from './global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h2>hello world</h2>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
