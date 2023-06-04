import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LzBotao } from '../.';

const App = () => {
  return (
    <div>
      <LzBotao />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
