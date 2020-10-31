import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import defaultTheme from '../styles/default-theme'
import Pages from '../pages'
import Grid from './Grid'
import store from '../store'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Grid>
          <Pages />
        </Grid>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
)

export default App
