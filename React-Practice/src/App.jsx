import First from "./Exercises/Lesson-01"
import ChatInput from "./ChatBot/ChatInputs"
import ChatMessage from "./ChatBot/ChatMessage"

function App() {

  return (
    <>
      {/* <First /> */}
      <ChatInput />
      <ChatMessage message = 'Hello Chatbot' sender = 'user'/>
      <ChatMessage message = 'Hi how can i help you' sender = 'robot'/>
      <ChatMessage message = 'can you get me today date' sender = 'user'/>
      <ChatMessage message = 'Today is August 14' sender = 'robot'/> 



    </>
  )
}

export default App
