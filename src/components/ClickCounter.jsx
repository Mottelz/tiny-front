import { useState } from 'react'

function ClickCounter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
  )
}

export default ClickCounter
