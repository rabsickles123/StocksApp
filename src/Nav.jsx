import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div className="nav">
            <Link to="/" className="link">
                <div>
                    iStocks
                </div>
            </Link>
            <Link to="/Stocks" className="link">
                <div>
                    Stocks
                </div>
            </Link>
            <Link to="/About" className="link">
                <div>
                    About
                </div>
            </Link>

        </div>
    )
}