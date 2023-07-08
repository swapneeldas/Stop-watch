import React from 'react';

function Data_gen(props){
    let hour=props.data.h;
    let minute=props.data.m;
    let secound=props.data.s;
    let milisecound=props.data.ms;
    if(hour<10){
        hour='0'+hour
    }
    if(minute<10){
        minute='0'+minute
    }
    if(secound<10){
        secound='0'+secound;
    }
    if(milisecound<10){
        milisecound='0'+milisecound;
    }
    return(
        <p className='para2'>{hour}:{minute}:{secound}:{milisecound}</p>
    );
}
export default Data_gen;