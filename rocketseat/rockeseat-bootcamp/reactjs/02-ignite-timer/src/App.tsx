import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme/theme'
import { GlobalStyle } from './global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CyclesContextProvider } from './contexts/Cycles.context'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>{' '}
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
