import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search-icon.png'
import basket from '../../assets/basket.png' 
import {Link} from 'react-router-dom'
import { StoreContext } from '../../assets/context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
        <Link to='/'><img src={logo} alt='' className='logo'/></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home" ? "active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu" ? "active":""}>Menu</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us" ? "active":""}>Contact us</a>
        </ul>
        <div className='navbar-right'>
            <img src={search} alt=''/>
            <div className='navbar-search-icon'>
                <Link to='/cart'><img src={basket} alt=''/></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>

            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>

    </div>
  )
}

export default Navbar