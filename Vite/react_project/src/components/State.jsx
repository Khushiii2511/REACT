import React, { useState } from 'react'
const State = () => {
    const [total,setTotal] = useState(0);
    return (
        <div style={{textAlign:"center",marginTop:"10"}}>
            <button onClick={()=>setTotal(total+1)}>Increase</button>
            <button onClick={()=>setTotal(total-1)}>Decrease</button>
            <h1>Value : {total}</h1>
        </div>
    )
}
export default State