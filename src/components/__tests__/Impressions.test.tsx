import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Impressions from '../Impressions'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../../redux/reducers/index'
import * as promiseMiddleware from 'redux-promise'


const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;


test('the Impressions component', async () => {
  // const store = createStore(
  //   rootReducer,
  //   undefined,
  //   composeEnhancers(applyMiddleware(promiseMiddleware["default"]))
  // )
  // render(<Provider store={store}><Impressions /></Provider>)
  // // await waitFor(() => screen.queryByText('Impressions'))

  // expect(screen.getByText('Impressions')).toBeTruthy()
})