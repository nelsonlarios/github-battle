import React from 'react';
import ReactDom from 'react-dom';
import Battle from './components/Battle';
import Popular from './components/Popular';
import './index.css';

export default function App() {
  return (
    <div className="container">
      <Battle />
      {/* <Popular /> */}
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
