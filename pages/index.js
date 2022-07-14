import bg from '../public/homebg.jpeg'
import Content from '../components/content'
function Home() {
  return (
    <div className="page">
      <Content image={bg} title={'Welcome!'} content={<>
      <p>Check out some of my other projects:</p><br /> 
      <ul style={{listStyleType: "none"}}>
          <li><a href="https://satanic-santa.github.io/blocks" target="_blank">Walmart Scratch</a></li>
          <li><a href="https://docs.google.com/document/d/1NVCuk1u35kJRM6FnS8U0PVK47bhrxgMXHlo0rp1HGmM/edit?usp=sharing" target="_blank">If you think you're smart, this might change your opinion</a></li>
          <li><a href="https://github.com/satanic-santa/spark/tree/master" target="_blank">200 commits and still horrible</a></li>
          <li><a href="https://satanic-santa.github.io/buttons/" target="_blank">Literally got an A for this</a></li>
          <li><a href="https://satanic-santa.github.io/Dreamsexual/" target="_blank">Figuratively got an A for this</a></li>
      </ul>
      </>} />
    </div>
  );
}

export default Home;
