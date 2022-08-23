import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [time,setTime] = useState('')
    const [reminder,setReminder] = useState(false)
    const onSubmit =(e)=>{
       e.preventDefault()
       if(!text){
        alert('Please Add A task') 
        return
       }
       onAdd({text , time , reminder})
       setText('')
       setTime('')
       setReminder(false)
    }
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label> Task</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label> Add Day & Time</label>
            <input type="text" placeholder="Add Day & Time" value={time} onChange={(e)=>setTime(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder </label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
}



export default AddTask