import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  let link = <Link to="/Stocks" className= "aboutlink"><div>Stocks.</div></Link> 

  return (
    <div>
      <h1 className = "title">Welcome to my super simple Stock app!</h1>
      <p className= "text">This app was built using a simple API to give the most upto date prices
        of the list of stocks listed under</p> {link}
        <br/>
      <p className= "text">Click on any link above to navigate to a different page.</p>  
      


    </div>
  )
}

export default About