function Post({post, onDelete}) {
    return (
        <article className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold text-slate-800">{post.title}</h2>
            <p className="text-slate-700 mt-2">{post.body}</p>
            <button
                onClick={() => onDelete(post.id)}
                className="block ml-auto text-sm text-red-600 border border-red-300 rounded-lg px-3 py-1 hover:bg-red-50 mt-4"
            >
                Delete
            </button>
        </article>
    )
}

export default Post