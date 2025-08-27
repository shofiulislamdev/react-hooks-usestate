import { useState } from "react"


function App() {

  const [demo, setDemo] = useState(10)

  const handleDecrement = () => {
    if (demo > 0) {
      setDemo(demo - 1)
    }
  }


  return (
    <>

      <div className="bg">

        {demo}

        <button onClick={handleDecrement}>Decrement</button>

      </div>


    </>
  )
}

export default App
