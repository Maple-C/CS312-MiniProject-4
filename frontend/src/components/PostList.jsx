import { useEffect, useState } from "react";
import EditPost from "./EditPost";

function PostList() {

    const [posts, setPosts] = useState([]);
    const [editing, setEditing] = useState(null);

    useEffect(() => {
        getPosts();
    }, []);
    
    async function getPosts() {

        try {
            const response = await fetch("http://localhost:3000/api/posts");
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }

    async function deletePost(postId) {
        const response = await fetch(`http://localhost:3000/delete-post/${postId}`, {
            method: "POST"
        });
        if (response.ok) {
            setPosts((prevPosts) => prevPosts.filter((post) => post.blog_id !== postId));

        }
    }

    return (
        <>
            <h3>All Posts</h3>
            <p>Number of posts: {posts.length}</p>
            {posts.map((post) => (

                

                <div key={post.blog_id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>

                    <p>Created by: {post.creator_name}</p>


                    <button onClick={() => setEditing(post.blog_id)}> Edit </button>
                 

                    <button onClick={() => deletePost(post.blog_id)}> Delete </button>
                    
                    {editing === post.blog_id && (
                        <EditPost post={post} />
                    )}
                    
                </div>
            ))}
        </>
    );
}



export default PostList;