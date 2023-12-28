import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./About.css"
import { useNavigate } from 'react-router-dom'

const About = () => {


    const [puser, setpuser] = useState()
    const nav=useNavigate()

    const data=()=>{
        let id=localStorage.getItem('id')
        const data={id:id}
        axios.post(`https://hrnode.onrender.com/user/find`,data).then((res)=>{
           console.log(res.data.data)
           setpuser(res.data.data)
        }).catch((err)=>{
            alert("err",err)
        })
    }

    useEffect(() => {
        data()
    }, [])
    
    const edit=()=>{
      nav("/edt")
    }

    const del=()=>{
      let id=localStorage.getItem('id')
      axios.delete(`https://hrnode.onrender.com/user/delete/${id}`).then((res)=>{
        console.log(res)
        alert("successfully delete")
        nav("/")
      }).catch((err)=>{
        console.log(err)
        console.log("err in delete")
      })
    }

  return (
    <div>
      <div className='buttons'>
        <button className='but1' onClick={()=>edit()}>Edit</button>
        <button className='but2' onClick={()=>del()}>Delete</button>
      </div>
      <div className='abutcontainer'>
        <div className='aboutcon'>
            <h3>Name:</h3>
            <div>{puser?.name}</div>
        </div>
        <div className='aboutcon'>
            <h3>Area:</h3>
            <div> {puser?.area}</div>
        </div>
        <div className='aboutcon'>
            <h3>Contact No:</h3>
            <div>{puser?.contact}</div>
        </div>
        <div className='aboutcon'>
            <h3>Experience Year:</h3>
            <div>{puser?.experienceyear}</div>
        </div>
      </div>
    </div>
  )
}

export default About
