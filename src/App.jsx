import NewPostForm from "./components/NewPostForm";
import PostList from "./components/PostList"
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
        {
            id: 0,
            title: "Post 1",
            body: "This is the first post."
        },
        {
            id: 1,
            title: "Post 2",
            body: "This is the second post."
        },
        {
            id: 2,
            title: "Post 3",
            body: "This is the third post."
        },
    ]) 

    function onDelete(id) {
        console.log(posts.find((post) => post.id === id));
        setPosts(posts.filter((post) => post.id !== id));
    }

    function onAdd({ title, body }) {
        setPosts((prev) => {
            const id = prev.length > 0 ? Math.max(...prev.map((post) => post.id)) + 1 : 0;
            return [...prev, { title, body, id }];
        });
    }

  return (
    <div className="min-h-screen bg-slate-100">
      <main className="mx-auto max-w-2xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-slate-800">tiny</h1>
        <NewPostForm onAdd={onAdd} />
        <PostList posts={posts} onDelete={onDelete} />
      </main>
    </div>
  )
}

export default App
