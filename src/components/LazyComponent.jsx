import { lazy, Suspense } from 'react'

const AsyncLazyComponent = lazy( () => import( './AsyncLazyComponent' ) )

const LadingAsyncLazyComponent = () => <h3>Carregando...</h3>

const LazyComponent = () => (
  <Suspense fallback={<LadingAsyncLazyComponent />}>
    <AsyncLazyComponent title={'Vindo de um componente importado dinamicamente'} />
  </Suspense>
)

export default LazyComponent
