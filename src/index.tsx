import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'

import 'shared/config/i18Next/i18Next'

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
