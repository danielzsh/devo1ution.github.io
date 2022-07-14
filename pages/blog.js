import Content from "../components/content"
import { useEffect } from "react"
import fs from 'fs'
import matter from "gray-matter"
import { motion } from "framer-motion"
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
                                    delay: .3 * (idx + 2)
                                }
                            }
                        }}>
                            <div className="card mb-3 bg-transparent container-fluid" style={{ maxWidth: '600px' }}>
                                <div className="row no-gutters justify-content-center">
                                    <div className="col-md-4">
                                        <img src={`${post.frontmatter.picture}`} className="card-img" style={{ height: '200px', width: 'auto', borderRadius: '20px' }} />
                                    </div>
                                    <div className="col-md-8">
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
            posts: posts
        }
    }
}