import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from '../serviceWorker';
import { ClientRoutes } from './ClientRoutes';

ReactDOM.render(<ClientRoutes />, document.getElementById('root'));

serviceWorker.unregister();
