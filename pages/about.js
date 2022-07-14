import Content from '../components/content';
import bg from '../public/aboutbg.jpg';
export default function About() {
    return (
        <div className="page">
        <Content image={bg} title={'About me'} content={
            <>
            <p>My main hobbies are competitive math and programming, and working on projects like these. Please give me a star to motivate me :)</p>
            </>
        }/>
        </div>
    );
}