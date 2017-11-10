import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CodedApp from './CodedApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CodedApp />, document.getElementById('root'));
registerServiceWorker();
