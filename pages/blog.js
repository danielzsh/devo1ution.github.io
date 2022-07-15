import Content from "../components/content"
import { useEffect } from "react"
import fs from 'fs'
import matter from "gray-matter"
import { motion } from "framer-motion"
import {datesort} from "../utils/datesort"
export default function Blog({ posts }) {
    useEffect(() => { document.title = 'Blog'; });
    console.log(posts);
    return (
        <div className="page">
            <Content image={'blogbg.jpg'} title={'Blog'} content={
                <div>
                    {posts.map((post, idx) => {
                        return <motion.div key={idx} initial="hidden" animate="visible" variants={{
                            hidden: {
                                scale: .8,
                                opacity: 0
                            },
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: .2 * (idx + 2)
                                }
                            }
                        }}>
                            <div className="card mt-4 bg-transparent container-fluid" style={{ width: 'max-content'}}>
                                <div className="row justify-content-center g-0" style={{ width: 'max-content' }}>
                                    <div className="col-md-3" style={{height: '200px', width: '200px', }}>
                                        <img src={`/${post.frontmatter.picture}`} className="card-img" style={{ borderRadius: '20px', height: '100%', width: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div className="col-md-auto" style={{}}>
                                        <div className="card-body">
                                            <h2 className="card-title">{post.frontmatter.title}</h2>
                                            <p className="card-subtitle text-muted">{post.frontmatter.excerpt}</p>
                                            <a href={`./blog/${post.slug}`} className="card-link">Read &gt;&gt;</a>
                                            <p className="card-text" style={{fontSize: '1rem'}}><small className="text-muted">Date published: {post.frontmatter.date}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                    })}
                </div>
            } />
        </div>
    );
}
export async function getStaticProps() {
    const files = fs.readdirSync('./posts');
    const posts = files.map((filename) => {
        const post = fs.readFileSync(`./posts/${filename}`, 'utf8');
        const {data:frontmatter} = matter(post);
        return {
            slug: filename.replace('.md', ''),
            frontmatter
        }
    })
    return {
        props: {
            posts: posts.sort(datesort)
        }
    }
}