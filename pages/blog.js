import Content from "../components/content"
import { useEffect } from "react"
import fs from 'fs'
import matter from "gray-matter"
import {datesort} from "../utils/datesort"
import PostCard from "../components/post_card"
export default function Blog({ posts }) {
    useEffect(() => { document.title = 'Blog'; });
    return (
        <div className="page">
            <Content image={'blogbg.jpg'} title={'Blog'} content={
                <div style={{overflow: 'auto', overflowX: 'hidden', maxHeight: '100vh'}}>
                    {posts.map((post, idx) => {
                        return <PostCard key={idx} idx={idx} picture={`/${post.frontmatter.picture}`} url={`./blog/${post.slug}`} title={post.frontmatter.title} excerpt={post.frontmatter.excerpt} date={post.frontmatter.date} />
                        
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