import React from 'react'
import header_img from '../../assets/header.avif'
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
      <img src={header_img} alt='' className="header-image" />
        <div className="header-contents">
            <h2>Order your favorite food here</h2>
            <p>knkjbVhvh hbhbj jbhjb hjbj bgvgcfcfcfg gvfdxdxcgv hj bjbjbhjbhvhvh hb hb </p>
            <button>View menu</button>
        </div>
    </div>
  )
}

export default Header