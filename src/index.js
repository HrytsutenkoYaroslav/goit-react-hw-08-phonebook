
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './components/redux/store/store';
import App from './components/App/App';

createRoot(document.getElementById('root')).render(
<Provider store={store}>
<PersistGate persistor={persistor} loading={null}>
<App />
</PersistGate>
</Provider>
);
