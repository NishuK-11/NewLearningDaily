import React from 'react'

const App = () => {
    const handleInput=(e)=>{
        console.log(e.target.value);
    }
     const handleSubmit=(det)=>{
        console.log(det);
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <h2>Event Handling</h2>
        {/* <input type="text" onInput={handleInput} />
         */}
         {/* <input type="text" onInput={(e)=>handleInput(e.target.value)} />
          */}
          <input type="text" onInput={handleInput} />
        {/* //html mei  <input type="text" onInput="handleInput()" /> */}
        <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default App