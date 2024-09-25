'use client'
import { useEffect, useState } from "react";

const toppers=()=>{
const [detail,setdetail] = useState([])
debugger
useEffect(() => {
  fetch('/studentsdata/students.json')
    .then((response) => response.json())
    .then((data) => setdetail(data))
    .catch((error) => console.error('Error fetching the JSON file:',error));
}, []);
console.log(detail)
return(
    <h1>hello</h1>
)
}
export default toppers
