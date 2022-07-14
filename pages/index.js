import Content from '../components/content'
import { useEffect } from 'react';
import { motion } from 'framer-motion';
function Home() {
  useEffect(() => { document.title = 'Home'; });
  let links = new Map([
    ['Walmart Scratch', "https://devo1ution.github.io/blocks"],
    ['If you think you\'re smart, this might change your opinion', "https://docs.google.com/document/d/1NVCuk1u35kJRM6FnS8U0PVK47bhrxgMXHlo0rp1HGmM/edit?usp=sharing"],
    ['200 commits and still horrible', 'https://github.com/devo1ution/spark/tree/master'],
    ['Literally got an A for this', "https://devo1ution.github.io/buttons/"],
    ['Figuratively got an A for this', "https://devo1ution.github.io/Dreamsexual/"]
  ])
  return (
    <div className="page">
      <Content image={'/homebg.jpeg'} title={'Welcome!'} content={<>
        <p>Check out some of my other projects:</p><br />
        {
          Array.from(links.entries()).map(([title, link], idx) => {
            return <motion.div key={idx} initial="hidden" animate="visible" variants={{
              hidden: {
                scale: .8,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: .3 * (idx + 2)
                }
              }
            }}>
              <a href={link} target="_blank">{title}</a>
            </motion.div>
          })
        }
      </>} />
    </div>
  );
}

export default Home;
