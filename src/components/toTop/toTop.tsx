import React from 'react';
import './toTop.scss';



const ToTop = () => {
  
  const mybutton = document.getElementById('toTop')!;

  window.onscroll = () => {scrollFunction();};

  const scrollFunction = () => {
    if (document.body.scrollTop > 400 ||
       document.documentElement.scrollTop > 400) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  };
  return (
    <button type='button' onClick={topFunction} id="toTop" title="Go to top">Top</button>
  );
};

export default ToTop;
