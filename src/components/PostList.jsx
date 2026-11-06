import Post from './Post';

function PostList({ posts, onDelete }) {

    if (!posts) {
        return <p className="bg-yellow-50 border border-yellow-300 text-yellow-800 rounded-lg p-4">&#128544; You forgot to give me posts to render! &lt;3 PostList</p>
    }

    return (
        <div className="space-y-4">
        {posts.map((post) => {
            return <Post key={post.id} post={post} onDelete={onDelete} />
        })}
        </div>
    )
}

export default PostList