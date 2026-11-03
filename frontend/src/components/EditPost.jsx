import { useState } from "react";

function EditPost( { post } ) {

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.body);

    async function handleSubmit(e) {

        e.preventDefault();

        await fetch(`http://localhost:3000/edit/${post.blog_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },  
            body: JSON.stringify({
                title: title,
                content: content
            })
        });

        window.location.reload();

    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />  

            <button type="submit">Save</button>

        </form>
    );  
}
export default EditPost;
            
