import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

    const [category, setCategory] = useState("All");

  return (
    <div>
         <Header/>
         <ExploreMenu category={category} setCategory={setCategory}/>
         {/* category={category}: Esto significa que le estamos diciendo al componente <ExploreMenu/> que la categoría seleccionada actualmente es la que está almacenada en la variable category. */}
         {/*setCategory={setCategory}: estamos pasando una función llamada "setCategory" al componente <ExploreMenu/>. Esta función nos permite cambiar la categoría seleccionada. Al pasársela al componente <ExploreMenu/>, el menú puede usar esta función para actualizar la categoría cuando el usuario hace clic en una opción. */}
         <FoodDisplay category={category}/>
    </div>
  )
}

export default Home