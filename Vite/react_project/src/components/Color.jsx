import React, { useState } from 'react'
const Color = () => {
    const [color,setColor] = useState("red");
    const styleIs={height:40,width:90,marginRight:30,fontSize:20}
    return (
        <div style={{textAlign:"center",marginTop:"100px",fontSize:"40px",backgroundColor:"pink"}}>
            <h1>My Favourite Color is<div style={{color:color}}>{color}</div></h1>
            <button style={styleIs} onClick={()=>setColor("blue")}>Blue</button>
            <button style={styleIs} onClick={()=>setColor("red")}>Red</button>
            <button style={styleIs} onClick={()=>setColor("green")}>Green</button>
            <button style={styleIs} onClick={()=>setColor("yellow")}>Yellow</button>
        </div>
    )
}
export default Color