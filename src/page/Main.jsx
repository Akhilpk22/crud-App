import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <>
      <div className='bg-body-tertiary '>
         <div className='d-flex justify-content-center align-items-center w-100 mt-5 p-5'>
                  <Link style={{textDecoration:'none',color:'black'}} to={'/Home'}><h2 className='shadow-lg '>Empolyee-Manage</h2></Link>
         </div>
      </div>
    </>
  )
}

export default Main