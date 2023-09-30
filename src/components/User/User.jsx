import React from 'react'
import {useParams} from 'react-router-dom';

const User = () => {
    const {userid}=useParams()  //userparams method
  return (
    <div className='bg-gray-600 text-white text-center text-4xl p-4'>User:{userid}</div> //now u will get user id here or whatever is there in the url now its about to u to do whatever with that id
  )
}

export default User
