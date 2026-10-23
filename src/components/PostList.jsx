import Post from './Post';

function PostList({ posts }) {
    if (!posts) {
        return <p>&#128544; You forgot to give me posts to render! &lt;3 PostList</p>
    }
    return (
        <>
        {posts.map((post) => {
            return <Post key={post.id} title={post.title} body={post.body} />
        })}
        </>
    )
}

export default PostList