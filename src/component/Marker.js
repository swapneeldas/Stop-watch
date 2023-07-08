import React from 'react';
function Mark(props){
    return(
      props.data.map((d,index)=>{
       return( <p className='para'>🚩{index+1}:-{d.h}:{d.m}:{d.s}:{d.ms}</p>);
      })
    );
}
export default  Mark;