import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/App';

const result = ReactDOMServer.renderToString(<App />);

export default result;