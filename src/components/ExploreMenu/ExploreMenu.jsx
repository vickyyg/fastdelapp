import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu.</h1>
      <p className="explore-menu-text">knslkfndknvdkbnfxkbnfxbkfkbnkbvkcbvkbcvkbkvcb</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index)=>{
          // item: En cada iteración del map(), item representará un elemento del array menu_list.
          //index: Es el índice actual de la iteración en el array.
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
              {/* key: es como un número en una lista de invitados en una fiesta (ejemplo de chatgpt). Ayuda a React a mantener el control y a saber qué elementos son nuevos, cuáles se han cambiado y cuáles se han eliminado cuando actualizamos una lista dinámica. */}
              {/*{index]: Por cada iteración en el bucle map, index se incrementa, proporcionando un valor único para cada elemento en la lista. */}
              {/*prev=>prev===item.menu_name?"All":item.menu_name: Esta es la lógica para cambiar la categoría. */}
              {/*prev: es el valor anterior de la categoría seleccionada.
               item.menu_name: es la categoría del elemento de menú en el que hiciste clic.
               Si la categoría actual (prev) es igual a la categoría del elemento de menú (item.menu_name), entonces se establece la categoría en "All". Esto significa que si ya se ha seleccionado esta categoría, al hacer clic nuevamente se restablecerá la selección a "All".
               */}
              <img className={category===item.menu_name?"active":""} src={item.menu_img} alt=''/>
              <p>{item.menu_name}</p>
            </div>
          )

        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu