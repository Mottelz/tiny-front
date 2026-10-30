import { useState } from 'react';
import Post from './Post';

function PostList() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "Post 1",
            body: "This is the first post."
        },
        {
            id: 2,
            title: "Post 2",
            body: "This is the second post."
        },
        {
            id: 3,
            title: "Post 3",
            body: "This is the third post."
        },
    ]) 

    if (!posts) {
        return <p>&#128544; You forgot to give me posts to render! &lt;3 PostList</p>
    }

    function onDelete(id) {
        console.log(posts.find((post) => post.id === id));
        setPosts(posts.filter((post) => post.id !== id));
    }

    return (
        <>
        {posts.map((post) => {
            return <Post key={post.id} post={post} onDelete={onDelete} />
        })}
        </>
    )
}

export default PostList