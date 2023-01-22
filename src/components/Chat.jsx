import { Avatar, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { AttachFile, InsertEmoticon, Mic, MoreVert,  SearchOutlined } from '@mui/icons-material'
import './Chat.css'

function Chat() {

    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() *5000))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>>", input);

        setInput('');
    }
  return (
      <div className="chat">
          <div className="chat__header">
              <Avatar src={`https://avatars.dicebear.com/api/human/>${seed}.svg`} />
              <div className="chat__headerInfo">
                  <h3>Room name</h3>
                  <p>Last seen at ...</p>
              </div>
              <div className="chat__headerRight">
                  <IconButton>
                      <AttachFile />
                  </IconButton>

                  <IconButton>
                      <MoreVert />
                  </IconButton>
                  
                  <IconButton>
                      <SearchOutlined />
                  </IconButton>
              </div>
          </div>

          <div className="chat__body">
              <p className= {`chat__message ${true && "chat__receiver"}`}>
                   <span className='chat__name'>Gabriel</span>
                  Hey Guys
                  <span className='chat__timestamp'>3:53pm</span>
              </p>
          </div>

          <div className="chat__footer">
              <InsertEmoticon />
              <form>
                  <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Type a Message' />
                  <button onClick={sendMessage}>Send a Message</button>
              </form>
              <Mic />
          </div>
       </div>
  )
}

export default Chat