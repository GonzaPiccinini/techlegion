import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard, Home, Login, Shop } from "./pages"
import { ROUTES } from "./constants"
import { AppContainer, Layout } from './containers'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Suspense, lazy } from 'react'
import { Loader } from './components'

const AuthGuard = lazy(() => import('./guards/AuthGuard'))

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path={ROUTES.PUBLIC_ROUTES.DEFAULT} element={<Navigate to={ROUTES.PRIVATE_ROUTES.DASHBOARD} replace />} />
                <Route path={ROUTES.PUBLIC_ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.PUBLIC_ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.PUBLIC_ROUTES.SHOP} element={<Shop />} />
                <Route element={<AuthGuard />}>
                  <Route path={ROUTES.PRIVATE_ROUTES.DASHBOARD} element={<Dashboard />} />
                </Route>
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </AppContainer>
    </Provider>
  )
}

export default App
