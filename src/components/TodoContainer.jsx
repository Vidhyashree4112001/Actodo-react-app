import AddTodoForm from "./AddTodoForm"
import AddTodoList from "./AddTodoList"
import { useState } from "react"
function TodoContainer(){
    const[activityArr,setactivityArr]=useState([

        {
            id:1,
            activity:"Go for a walk"
        },
        
        {
            id:2,
            activity:"Have Breakfast"
        },
        {
            id:3,
            activity:"Take a cool shower"
        }
    
    
    ])

    return(
        <div>
          <div className="flex gap-5 flex-wrap">
       <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}/>


       <AddTodoList activityArr={activityArr} setactivityArr={setactivityArr}/>
        </div>
      </div>
    )
}
export default TodoContainer