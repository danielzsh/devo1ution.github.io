import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Content from '../../components/content'
import {marked} from 'marked'
export default function PostPage({ frontmatter: {title, date, picture}, slug, content}) {
    console.log(picture);
  return (
    <>
        <Content image={`${picture}`} title={title} content={<div dangerouslySetInnerHTML={{__html: marked(content)}}></div>} />
    </>
  )
}
export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({params: {slug}}) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)
    console.log(frontmatter);
    return {
        props: {
            frontmatter,
            slug, 
            content
        }
    }
}