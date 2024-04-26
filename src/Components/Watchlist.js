import React, { useContext, useEffect } from 'react'
import { ContextData } from './GlobalContext';

const Watchlist = () => {
    const {watch , getRandomColor , setwatch} = useContext(ContextData)

    useEffect(()=>{
        fetch("https://stock-management-backend-dpp8.onrender.com/api/watchlist").then(async (res)=>{

        const data1 = await res.json()
    
        // console.log(data1)
    
        setwatch(data1)
    
    
    
        }).catch((error)=>{
          console.log(error)
    
          
        })
    }, [])

   
  return (
    <div className="App">
            <h1>Stock Market MERN App</h1>
            <h2>My Watchlist</h2>
            <ul>
                {watch.map((stock) => (
                    <li key={stock.symbol}>
                        {stock.company} ({stock.symbol}) -
                        <span style={{ color: getRandomColor() }}>
                            {" "}
                            ${stock.initial_price}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
  
}

export default Watchlist