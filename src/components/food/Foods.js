import React from 'react';
import './foods.css';
const Foods = () =>{
  return (
    <div className='gameBackground'>
     <div className='gameWrapper'>
       <div>
          <img src={require('../../images/donut.jpg')} alt= "donut"/>
          <img src={require('../../images/fries.jpg')} alt= "fries"/>
          <img src={require('../../images/pizza.jpg')} alt= "pizza"/>
          <img src={require('../../images/potato.jpg')} alt= "potato"/>

        </div>
      </div>
    </div>
  );
}
export default Foods;
