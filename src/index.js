import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {JamProvider, useJam, use} from 'jam-core-react';

const jamConfig = { domain: 'jam.systems' };

ReactDOM.render(
    <React.StrictMode>
        <JamProvider options={{ jamConfig }}>
            <App />
        </JamProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

function App() {
  // get Jam state and API methods
  // eslint-disable-next-line
  let [state, api] = useJam();

  // listen to specific state changes
  let [myIdentity, roomId] = use(state, ['myIdentity', 'jam-room-id']);

  return (
    <div>
      User: {myIdentity.info.name ?? ''},<br />
      Room: {roomId ?? ''}
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
