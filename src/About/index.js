import './index.css';
import React from 'react';
import Content from '../Content';
import bg from './bg.jpg';
export default function About() {
    return (
        <div className="about">
        <Content image={bg} title={'About me'} content={
            <>
            <p>My main hobbies are competitive math and programming, and working on projects like these. Please give me a star to motivate me :)</p>
            </>
        }/>
        </div>
    );
}