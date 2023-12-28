import React, { useState, useEffect } from 'react';
import './Edit.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'


const Edit = () => {
    const [puser, setpuser] = useState();
    const { register, handleSubmit, setValue } = useForm(); // Use setValue from react-hook-form

    console.log(puser)
    const nav=useNavigate()

  
    const data = () => {
      let id = localStorage.getItem('id');
      const data = { id: id };
      axios.post('https://hrnode.onrender.com/user/find', data)
        .then((res) => {
          setpuser(res.data.data);
          // Set initial values using setValue
          setValue('name', res.data.data.name);
          setValue('area', res.data.data.area);
          setValue('contact', res.data.data.contact);
          setValue('experienceyear', res.data.data.experienceyear);
        })
        .catch((err) => {
          alert('err', err);
        });
    };
  
    useEffect(() => {
      data();
    }, []);
  
    const can = () => {
       nav("/edt")
    };
  
    const submit = (data) => {
      let id2 = localStorage.getItem('id');
      console.log(data);
      axios.put(`https://hrnode.onrender.com/user/up/${id2}`, data)
        .then((res) => {
          alert('Successfully updated');
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          alert('Error updating user');
        });
    };
  
    return (
      <div className='usercontent'>
        <div className='usercontant1'>
          <h4>Employee Details</h4>
        </div>
        <div>
          <form id='userForm' onSubmit={handleSubmit(submit)}>
            <div className='fornco'>
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' name='name' required {...register('name')} />
            </div>
  
            <div className='fornco'>
              <label htmlFor='area'>Area:</label>
              <input type='text' id='area' name='area' required {...register('area')} />
            </div>
  
            <div className='fornco'>
              <label htmlFor='contactNo'>Contact No:</label>
              <input type='tel' id='contactNo' name='contactNo' required {...register('contact')} />
            </div>
  
            <div className='fornco'>
              <label htmlFor='experienceYear'>Experience Year:</label>
              <input type='number' id='experienceYear' name='experienceYear' required {...register('experienceyear')} />
            </div>
  
            <div className='fornco'>
              <button type='submit'>Save</button>
              <button type='button' className='cancel' onClick={can}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Edit;
