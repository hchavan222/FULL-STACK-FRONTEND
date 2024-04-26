import React, { useContext } from 'react'
import { ContextData } from './GlobalContext'

import "./style.css"

const Stock = () => {

    const {data , setdata , getRandomColor ,addtowatch} = useContext(ContextData)
  return (
    <div>
        <h1>STOCK MARKET APPLICATION</h1>
        <h2>STOCKS</h2>

        <ul>
            {
                data.map((d)=>(

                    <li key={d.symbol}>

                    {d.company} ({d.symbol}) - 
                    <span style={{color : getRandomColor()}}>
                        {" "} ${d.initial_price}
                    </span>

                    <button onClick={()=>{addtowatch(d)}}>
                        ADD TO WATCHLIST
                    </button>

                    </li>

                ))
            }
        </ul>
    </div>
  )
}

export default Stock