import { Link } from "react-router-dom";
import stocks from "./Data";

const Dashboard = () => {
  return (
    <div>List of Stocks from data file
        <ul>
            {stocks.map((stock)=>{
                const { name, symbol } = stock

                return (
                    <Link key={symbol} to={"/Stock/" + symbol}>
                        <li>{name}</li>
                    </Link>
                )
            })}
        </ul>
    </div>
  )
}

export default Dashboard