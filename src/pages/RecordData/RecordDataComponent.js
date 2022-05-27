import { ref, set } from "firebase/database";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseDatabase } from "../../Backend/firebaseHandler";
import './RecordDataComponent.css';

const RecordData = () => {
    const navigate = useNavigate();
     const [student,setStudent] = useState({
         sname:"",
         susn:""
     })
    const handleChange = (e) => {
      const {name,value} = e.target
      setStudent({
          ...student,
          [name]:value
      })
    }
 
    const handleSave = async () => {
     if(student.sname == "" || student.susn == ""){
         alert("Fill Both the Fields")
     }else{
     const fireref = ref(firebaseDatabase,`Student-Records/${student.susn}`)
     await set(fireref,student)
     setStudent({
         sname:"",
         susn:""
     })
     alert("Record Added!")
     navigate('/students-record');
    }
    }

    return (
        <div className="record-container">
            <div className="record-input-container"> 
                <input className="inputs" name="sname" placeholder="Student Name" onChange={handleChange} value={student.sname}/>
                <input className="inputs" name="susn" placeholder="Student Name" onChange={handleChange} value={student.susn} />
                <button onClick={handleSave} className="save-button">Save</button>
                <button onClick={()=> navigate('/students-record')} className="view-button">View Record</button>
            </div>
        </div>
    )
}

export default RecordData