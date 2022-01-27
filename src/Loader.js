import React from 'react';


import load from './assets/preloader.gif';

const Loading = () => {
    
    return (
        <div style={{backgroundColor: 'white',left:'40%',top:'15rem',position: 'absolute',alignItems: 'center'}}>
            <img src={load}/>
            <p style={{position:'absolute',left:'4rem'}}>Loading..</p>
        </div>
    );
  }
   
  export default Loading;