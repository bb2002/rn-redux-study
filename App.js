import React from 'react';
import 'react-native-get-random-values';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Books from './components/Books';
import rootReducer from './reducers';

const store = createStore(rootReducer)

export default function App() {
	return (
		<Provider store={store}>
			<Books />
		</Provider>
	);
}