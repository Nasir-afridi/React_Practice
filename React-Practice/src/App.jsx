import First from "./Exercises/Lesson-01"
import ChatInput from "./ChatBot/ChatInputs"
import ChatMessage from "./ChatBot/ChatMessage"

function App() {

  return (
    <>
      {/* <First /> */}
      <ChatInput />
      <ChatMessage message = 'Hello Chatbot'/>
      <ChatMessage message = 'Hi how can i help you'/>
    </>
  )
}

export default App
