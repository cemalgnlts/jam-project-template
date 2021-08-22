import './App.css';

import { useJam, use } from "jam-core-react";

function App() {
    // get Jam state and API methods
    // eslint-disable-next-line
    let [state, api] = useJam();

    // listen to specific state changes
    let [myIdentity, roomId] = use(state, ['myIdentity', 'roomId']);
    console.log(roomId);
    return (
        <div>
            <p>
                User: {myIdentity.info ?? ""}
            </p>
            <p>
                Room: {roomId ?? ""}
            </p>
        </div>
    );
}

export default App;
