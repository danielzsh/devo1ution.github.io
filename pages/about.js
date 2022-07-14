import Content from '../components/content';
import { useEffect } from 'react';
export default function About() {
    useEffect(() => {document.title = 'About';});
    return (
        <div className="page">
            <Content image={'aboutbg.jpg'} title={'About me'} content={
                <>
                    <p>My main hobbies are competitive math and programming, and working on projects like these. <br/>Please give me a star to motivate me :)</p>
                </>
            } />
        </div>
    );
}