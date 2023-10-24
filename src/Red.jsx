import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


function Red() {
  const [data, setData] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    axios
      .get("https://crud-json-rjqd.onrender.com/posts/" + id)
      .then((result) => setData(result.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div className='d-flex w-100 justify-content-center align-items-center bg-light'>
        <div className=' text-center w-50 border bg-white shadow-lg px-5 pb-5 pt-3 rounded mt-5'>
          <h2>Detail of Empolyees</h2>
          <div className='mb-2'>
            <strong>Name:{data.Name}</strong>
            
          </div>
          <div className='mb-2'>
            <strong>Email:{data.Email}</strong>
            
          </div>
          <div className='mb-2'>
            <strong>Address:{data.Address}</strong>
            
          </div>
          <div className='mb-2'>
            <strong>Phone:{data.Phone}</strong>
            
          </div>
          
          <Link to={`/uodate/${id}`} className='btn btn-success' >Edit</Link>
          <Link to={'/Home'} className='btn btn-primary ms-5'>Back</Link>


        </div>
        
      </div>
    </div>
  )
}

export default Red