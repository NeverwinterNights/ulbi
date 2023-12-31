import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import {App} from 'app/App'
import {ThemeProvider} from 'app/providers/ThemeProvider'

import 'shared/config/i18Next/i18Next'
import ErrorBoundary from "./app/providers/ErrorBoundary/ui/ErrorBoundary";

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
)
