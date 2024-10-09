
// @ts-ignore
// import RemoteComponent from 'remote/RemoteComponent';
//
// console.log('RemoteComponent', RemoteComponent)

import {lazy} from "react";

// @ts-ignore
const RemoteComponent = lazy(() => import('remoteApp/RemoteComponent'));

const App = () => {
    console.log('RemoteComponent', RemoteComponent)
  return (
    <h1>
        host
        <RemoteComponent />
        {/*{RemoteComponent}*/}
    </h1>
  )
}

export default App
