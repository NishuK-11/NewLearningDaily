
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Home'
import { SocketProvider } from './providers/socket'
import RoomPage from './pages/Room'
import { PeerProvider } from './providers/Peer'

function App() {

  return (
    <div>
       <SocketProvider>  
        <PeerProvider>
          <Routes>
       
          <Route path='/' element={<Homepage/>}/>
          <Route path='/room/:roomId' element={<RoomPage />} /> 
        </Routes>
        </PeerProvider>
      </SocketProvider>
    </div>
  )
}

export default App
