import { useSelector,useDispatch } from "react-redux"
import {add,sub} from "./counter.slice"

export default  function CounterPage(){

    const count = useSelector((state)=> state?.counter?.counts)
    const disPatch = useDispatch()
return <div>
    <h2>Counter page </h2>
    <div className="countTheValue">
        <h2>
            count:{count}
        </h2>
        <button onClick={()=>disPatch(add())}>
            ADD
        </button>
                <button onClick={()=>disPatch(sub())}>
            SUB
        </button>
    </div>


</div>

    
}