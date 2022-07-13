import './index.css';
import React from 'react';
function Content(props) {
    return <div className='titleCard' style={{backgroundImage: `url(${props.image})`}}><h1 className='title'>{props.title}</h1>{props.content}</div>
}
export default Content;