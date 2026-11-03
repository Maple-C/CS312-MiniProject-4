import { useState } from "react";

function BlogPostForm() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();

        await fetch("http://localhost:3000/create-post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                content: content
            })
        });

        setTitle("");
        setContent("");

        
        window.location.reload();
    }
    


return (
    <>
        <h3>Create New Post</h3>

        <form onSubmit={handleSubmit}>
            
            <input 
                type="text"
                placeholder="Title of the post!"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <br /> <br />

            <textarea
                placeholder="Content of the post!"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <br /> <br />

            <button type="submit">Create Post</button>
        </form>
    </>
    );
}

export default BlogPostForm;
