import React, { useEffect } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import routeHistory from 'route-history'
import { Switch, Route } from 'react-router-dom'
import { Layout, message, Button, PageHeader } from 'antd'

import { TReduxProps } from './Container'
import NotFound from '../NotFound'
import Rates from '../Rates'
import Loader from '../Loader'

const { Content } = Layout

export type TComponentProps = {
} & TReduxProps

const App: React.FC<TComponentProps> = ({ fetching, error, setError }) => {
  useEffect(() => {
    if (error) {
      message.error(error)
      setError('')
    }
  }, [error])

  const clearLocalStorage = () => localStorage.clear()

  return (
    <ConnectedRouter history={routeHistory}>
      <Layout style={{ minHeight: '100vh' }}>
        <PageHeader title="Rate" extra={[
          <Button onClick={clearLocalStorage} key="1">Clear Local Storage</Button>,
          <Button href="https://github.com/dnlklbv/rates_boilerplate" target="_blank" rel="noopener" key="2">Go To Code</Button>
        ]} />
        <Layout>
          <Content style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Switch>
              <Route exact path="/" component={Rates} />
              <Route component={NotFound} />
            </Switch>
            {fetching && <Loader />}
          </Content>
        </Layout>
      </Layout>
    </ConnectedRouter>
  )
}

export default App
