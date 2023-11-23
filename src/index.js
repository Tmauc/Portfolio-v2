import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import App from 'App';
import i18n from 'translation/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>

);
