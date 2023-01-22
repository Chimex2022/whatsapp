import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import './SidebarChat.css'
import db from './firebase'

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState('')
   

    useEffect(() => {
      setSeed(Math.floor(Math.random() *5000))
    }, [])

    const createChat = () => {
        const roomName = prompt("Enter the name of your chat")
        
        if (roomName) {
          db.collection('rooms').add({
              name: roomName
            })
        }
        
    }

    return !addNewChat ? (
        <div className="sidebarChart">
            <Avatar src={`https://avatars.dicebear.com/api/human/>${seed}.svg`} />
            <div className="sidebarChat__info">
          <h2>{name}</h2>
                <p>Last mesage...</p>
            </div>
        </div> 
    ) : (
            <div onClick={createChat} className='sidebarChat'>
              <h2>Add new chat</h2>
            </div>
  )
}

export default SidebarChat