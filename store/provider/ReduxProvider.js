'use client'

// import provider and store from redux state management.
import { Provider } from 'react-redux'
import { store } from 'store/store'

const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider