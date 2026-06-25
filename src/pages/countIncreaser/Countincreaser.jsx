import React,{useState} from "react";
export default function Countincreaser(){
    const [count,setcount]=useState(0)
    const [fruits,setfruits]=useState(["apple","orange"])
    return <div>
        <p>COUNT : {count}  </p>
        <button onClick={()=>setcount(count+1)}>ADD COUNT</button>
        <div>
            <p>fruits : </p>
            {fruits.map((value,index)=><p>{value}</p>)}
            <button onClick={()=>setfruits([...fruits,"mango"])}>ADD FRUITS</button>
        </div>
    </div>
}