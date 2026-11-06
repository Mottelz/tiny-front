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
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <textarea 
                placeholder="What do you want to share with the void?"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            /><br />
            {error && <><p>{error}</p></>}
            <button type="submit">Add Post</button>
        </form>
    )
}


export default NewPostForm;