import React from 'react'

import {useParams,useNavigate} from 'react-router-dom'

const Description = ({prodMovie}) => {
  const navigate = useNavigate()
    const goBack=()=>{
        if(true)
        navigate(-1)
        else
        navigate("/")
    }
  const params=useParams()
  const descr= prodMovie.find(elm=>elm.id == +params.prodId )
  console.log(params)
  return (
    
    <div>
     <iframe width="560" height="315" src={descr.description}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
     <button onClick={goBack} style={{width:'150px',borderColor:'red',fontFamily:'cursive',fontSize:'20px',display:'flex',flexDirection:'column',alignItems:'center',margin:'25px',backgroundColor:'white'}}>goBack</button>
      
      </div>
    
  )
}

export default Description