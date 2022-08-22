import React from 'react';
import './animals.css';
const Animals = () =>{
  return (
    <div className='gameBackground'>
     <div className='gameWrapper'>
       <div>
          <img src={require('../../images/cat-image.jpg')} alt= "cat"/>
          <img src={require('../../images/dog-image.jpg')} alt= "dog"/>
          <img src={require('../../images/fox-image.jpg')} alt= "fox"/>
          <img src={require('../../images/koala-image.png')} alt= "koala"/>
          <img src={require('../../images/panda-image.jpg')} alt= "panda"/>
        </div>
      </div>
    </div>
  );
}
export default Animals;
