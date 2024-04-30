import React, { useContext } from 'react'
import './FoodItem.css'
import plusicon from '../../assets/plus-icon.png';
import plus_icon from '../../assets/green-plus.png';
import removeicon from '../../assets/red-plus.png'
import { StoreContext } from '../../assets/context/StoreContext';

const FoodItem = ({ id, name, description, price, image }) => {
      
     const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="food-item">
      <img className='food-item-img' src={image} alt={name}/>
      {!cartItems[id]
           ?<img className='add' onClick={()=>addToCart(id)} src={plusicon} alt=''/>
           :<div className='food-item-count'>
            <img className='rem-add' onClick={()=>removeFromCart(id)} src={removeicon} alt=''/>
            <p>{cartItems[id]}</p>
            <img className='rem-add' onClick={()=>addToCart(id)} src={plus_icon} alt=''/>

           </div>

      }
      <div className='food-item-info'>
      <h3 className='food-name'>{name}</h3>
      <p className='food-item-desc'>{description}</p>
      <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;