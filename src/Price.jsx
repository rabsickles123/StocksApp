import React from 'react'
import stocks from './Data'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Price = () => {
    let {symbol} = useParams()

    let apikey = "zvrXe7CP8FHP2LvcFuFDIOFyBX2JoiKd"
    // let [price, setPrice] = useState(null)
    const [data, setData] = useState(null) 

   useEffect(() => {
     async function getData() {
        try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/stock/list?apikey=${apikey}`)
            const data = await response.json()
            console.log(data)
            
            const stock = data.filter((data)=> {
                if (data.symbol == symbol){
                    return true
                }
            })
            setData(stock)
        } catch(error) {
            console.log(error)
        }
     }
     getData()
     console.log(data)
   }, [])

   console.log(data)

   
   
    
    // const filteredStock = stocks.filter((stock)=> {
    //     if (stock.symbol==symbol) {
    //         return true
    //     } 
    // })

    // setPrice(filteredStock)
    // console.log(filteredStock)

  return (
    <div>
        {/* <h1>Name: {filteredStock[0].name}</h1>
        <h2>Price: {filteredStock[0].lastPrice}</h2> */}
        {data && 
        <div> 
            <h1>Name: {data[0]?.name}</h1>
            <h2>Price: {data[0]?.price}</h2>
        </div>
        
        }
    </div>
  )
}

export default Price