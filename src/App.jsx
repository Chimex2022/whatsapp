import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'



function App() {
  return (
    <div className="app">
      <h1>Let's build a whatsapp clone</h1>
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
   </div>
  )
}

export default App