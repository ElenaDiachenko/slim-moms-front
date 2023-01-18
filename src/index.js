import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { App } from './App';
import "./i18n.js";
import { ThemeProvider } from '@emotion/react';
import { theme } from './components/Theme';
import Loader from 'components/Loader/Loader';
// import { disableReactDevTools } from '@fvilers/disable-react-devtools';

// if (process.env.NODE_ENV === 'production') disableReactDevTools()


ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loader/>} >
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
    </React.StrictMode>
    </Suspense>
);
