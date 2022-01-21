import React from "react"
import {render} from "react-dom"
import App from "./components/App.js"
import store from './Redux-toolkit/store'
import { Provider } from 'react-redux'


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
