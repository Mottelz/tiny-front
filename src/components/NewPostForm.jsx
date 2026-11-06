import { useState } from "react";

function NewPostForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (title.trim() === "" || body.trim() === "") {
            setError("Title & Body are required")
            return;
        }

        onAdd({ title: title.trim(), body: body.trim() });
        setTitle("")
        setBody("")
        setError("")
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-4">
            <input
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={4}
                placeholder="What do you want to share with the void?"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
                type="submit"
                className="block ml-auto bg-indigo-600 text-white font-medium rounded-lg px-4 py-2 hover:bg-indigo-700"
            >
                Add Post
            </button>
        </form>
    )
}


export default NewPostForm;