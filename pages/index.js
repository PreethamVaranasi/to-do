import React from 'react'
import Form from './components/form'
import List from './components/list'
import {Provider} from 'react-redux'
import store from '../redux/list/list.store'


const Index = () => (
  <Provider store={store}>
  <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h1>Welcome to Soulpage To-Do Application!</h1>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <Form/>
        </div>
        <div className="col-sm-6">
          <List/>
        </div>
      </div>
    </div>
  </main>
  </Provider>
)


export default Index
