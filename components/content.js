function Content(props) {
    return <div className='titleCard' style={{ backgroundImage: `url(${props.image.src})`}}><h1 className='title'>{props.title}</h1>{props.content}</div>
}
export default Content;