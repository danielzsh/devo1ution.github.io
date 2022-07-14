import { motion } from "framer-motion";
function Content(props) {
    return <div className='titleCard' style={{ backgroundImage: `url(${props.image})`}}>
    <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
                scale: .8,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                }
            },
    }}>
        <h1 className='title'>{props.title}</h1>
    </motion.div>
    <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
                scale: .8,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: .5
                }
            },
    }}>
        {props.content}
    </motion.div>
    </div>
}
export default Content;