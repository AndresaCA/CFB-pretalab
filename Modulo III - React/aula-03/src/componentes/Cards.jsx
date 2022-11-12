function Cards({title, description, imgPath}) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={imgPath}  width="200" height="200"/>
            <p>{description}</p>
        </div>
    )
}

export default Cards