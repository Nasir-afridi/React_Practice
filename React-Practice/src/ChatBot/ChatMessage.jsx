import React from 'react'

const ChatMessage = (props) => {
    const message = props.message
    const sender = props.sender


  return (
    <div>
        {sender === 'robot' && <img src="/robot.png" width={50} />}
        {sender === 'user' && <img src="/user.png" width={50} />}
        {message}
    </div>
  )
}

export default ChatMessage