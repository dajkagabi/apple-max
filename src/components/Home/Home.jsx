import React from 'react'
import Hero from '../Hero/Hero'
import Items from '../Items/Items';

import Slider from '../Slider/Slider';
import FuncD from '../FuncD/FuncD';
import DesignSection from '../Design/Design';
import Data from '../Datas/Data';
import Answer from '../Answer/Answer';

const Home = () => {
  return (
    <div>
        <Hero/>
        <Items/>
        <FuncD/>
        <DesignSection/>
        <Data/>
        
        <Slider/>
        <Answer/>
    </div>
  )
}

export default Home