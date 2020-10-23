import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-table/react-table.css';
import 'react-select/dist/react-select.css';
import 'react-calendar/dist/Calendar.css';
import './styles/css/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import {I18nextProvider} from 'react-i18next';
import App from './app/App'
import { getI18nextConfig } from './app/common/i18nConfiguration';
ReactDOM.render(
  <I18nextProvider i18n={getI18nextConfig()}>
      <App/>
  </I18nextProvider>,
  document.getElementById('root')
);
