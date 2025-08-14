import React from 'react'

const ChatMessage = (props) => {
    const message = props.message
  return (
    <div>
        {message}
        <img src="/user.png" width={50} alt="" />
    </div>
  )
}

export default ChatMessage