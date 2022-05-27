import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseDatabase } from "../../Backend/firebaseHandler";
import './DisplayRecordCompo.css'


const DisplayRecord = () => {
    const navigate = useNavigate();
    const [students,setStudents] = useState([]);

    useEffect(()=>{
     const fetchData = () => {
         const fetchref= ref(firebaseDatabase,'Student-Records')
         onValue(fetchref,(snapshot)=>{
             setStudents(Object.values(snapshot.val()))
         })
     }
     fetchData();
    },[])
    return (
        <div>
           <header>
               <h1>Student List:</h1>
               <button onClick={() => navigate('/record-data')}>ADD Student</button>
           </header>
           <div className="list-container">
               {students.map(student =>{
                  return <div key={student.susn} className="list-items">
                      <h2>Name: {student.sname}</h2>
                      <h2>USN: {student.susn}</h2>
                  </div>
               })}
           </div>
        </div>
    )
}


export default DisplayRecord