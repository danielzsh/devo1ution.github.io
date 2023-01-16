import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import useOnScreen from "../utils/onscreen"
function _content(props) {
    return <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
            scale: .8,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .4 * (props.idx) + 1
            }
        }
    }}>
        <div className="card mt-4 bg-transparent container-fluid" style={{ width: 'max-content' }}>
            <div className="row justify-content-center g-0" style={{ width: 'max-content' }}>
                <div className="col-md-3" style={{ height: '200px', width: '200px', }}>
                    <img src={props.picture} className="card-img" style={{ borderRadius: '20px', height: '100%', width: '100%', objectFit: 'cover' }} />
                </div>
                <div className="col-md-auto" style={{}}>
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-subtitle text-muted">{props.excerpt}</p>
                        <a href={props.url} className="card-link">Read &gt;&gt;</a>
                        <p className="card-text" style={{ fontSize: '1rem' }}><small className="text-muted">Date published: {props.date}</small></p>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
}
export default function PostCard(props) {
    // const ref = useRef();
    // const refValue = useOnScreen(ref);
    // const [isref, setref] = useState(false);
    // useEffect(() => {
    //     if (!isref) setref(refValue);
    // }, [refValue]);
    return <div>
        {<_content {...props} />}
    </div>
}
