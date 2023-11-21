import React from 'react'
import { useState } from 'react'

export default function Bikramcounter() {
    const [count, setcount] = useState(0);

  return (
      <div>
          
          <h3>Bikram Counter with usestate</h3>
          <h1>{count}</h1>

      <button onClick={() => setcount(count + 1)}>Add</button>
    </div>
  );
}
