import './index.css';
import React from 'react';
function Title(props) {
    return <div className='titleCard' style={{backgroundImage: `url(${props.image})`}}><h1 className='title'>{props.title}</h1></div>
}
export default Title;