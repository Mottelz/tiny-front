function Post({post, onDelete}) {
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={() => onDelete(post.id)}>Delete</button>
        </>
    )
}

export default Post