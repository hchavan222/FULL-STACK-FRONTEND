import React, { createContext, useEffect, useState } from 'react'


export const ContextData = createContext(null)


const GlobalContext = ({children}) => {
  
  const getRandomColor = () => {
    const colors = ["#FF0000", "#00FF00"]; // Red and Green
    return colors[Math.floor(Math.random() * colors.length)];
   };

  const [data , setdata] = useState([])
  const [watch , setwatch] = useState([])

  const addtowatch = (stock)=>{

    fetch("https://stock-management-backend-dpp8.onrender.com/api/watchlist" , {
      method : "POST",
      headers:{
        "Content-type" : "application/json"
      } ,
      body : JSON.stringify(stock)
    }).then( (res)=>
      res.json()

    
    ).then((data)=>{
      alert(data.message)

      setwatch([...watch , stock])
    })

  }

  useEffect(()=>{
    fetch("https://stock-management-backend-dpp8.onrender.com/api/stock").then(async (res)=>{

    const data1 = await res.json()

    // console.log(data1)

    setdata(data1)



    }).catch((error)=>{
      console.log(error)

      
    })
  },[])

  console.log(watch)




      return (
    <div>

    <ContextData.Provider value={{data , setdata , getRandomColor , addtowatch , setwatch ,watch}}>{children}

    </ContextData.Provider>

    </div>
  )
}

export default GlobalContext