import { useState } from "react"


function App() {

  const [demo, setDemo] = useState(10)

  const handleDecrement = () => {
    if (demo > 0) {
      setDemo(demo - 1)
    }
  }

  const handleIncrease = () => {
    if (demo < 20) {
      setDemo(demo + 1)
    } else {
      setDemo(0)
    }
  }


  return (
    <>

      <div className="bg">

        {demo}

        <button onClick={handleDecrement}>Decrement</button>

        <button onClick={handleIncrease}>Increase</button>

      </div>


    </>
  )
}

export default App
