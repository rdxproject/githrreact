import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [user, setuser] = useState()

    const userdatas=()=>{
        axios.get("http://localhost:5000/user/find").then((res)=>{
            setuser(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(() => {
      userdatas()
    },)
    
    const nav=useNavigate()

    const mor=(id)=>{
        localStorage.setItem('id', id);
        nav("about")
    }
  return (
    <div>
       <div className='homecontant'>
          <h1>Home</h1>
       </div>
       <div>
       <table>
        <tr>
            <td >Name</td>
            <td >Area</td>
            <td >Contact No</td>
            <td >Experience Year</td>
            <td >getmore</td>
        </tr>
        {
            user?.map((us)=>{
                return(
                    <tr className={`uscontant ${us.experienceyear >= 15 ? 'yellow-bg' : ''} ${
                        us.experienceyear <= 5 ? 'red-bg' : ''
                      }`}>
                        <td >{us.name}</td>
                        <td >{us.area}</td>
                        <td >{us.contact}</td>
                        <td >{us.experienceyear}</td>
                        <td >
                            <button onClick={()=>mor(us._id)}>More</button>
                        </td>
                    </tr>
                )
            })
        }
      </table>
       </div>
    </div>
  )
}

export default Home
