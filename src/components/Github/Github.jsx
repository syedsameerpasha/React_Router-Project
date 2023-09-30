import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/syedsameerpasha')
        .then(response=>response.json())
        .then(data =>{
            console.log(data)
            setData(data)
        })
    })
  return (
    
    <div className='text-center m-4 bg-gray-600 p-4 text-3xl'>Github followers:{data.followers}
    <img src={data.avatar_url} alt="Git_img" width={300}/>
    </div>
    
  )
}

export default Github