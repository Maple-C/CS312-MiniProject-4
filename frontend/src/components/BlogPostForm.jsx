import { useState } from "react";

function BlogPostForm() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(e) {
        e.preventDefault();


        console.log({ title, content });  
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
