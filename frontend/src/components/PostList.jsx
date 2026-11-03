import { useEffect, useState } from "react";

function PostList() {

    const [posts, setPosts] = useState([]);

    async function getPosts() {

        const response = await fetch("http://localhost:3000/api/posts");
        console.log(response);

        const data = await response.json();
        setPosts(data);

        console.log(data);
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <h3>All Posts</h3>
            <p>Number of posts: {posts.length}</p>
            {posts.map((post) => (

                <div key={post.blog_id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>

                    <p>Created by: {post.creator_name}</p>

                    <button> Edit </button>

                    <button> Delete </button>

                </div>
            ))}
        </>
    );
}

export default PostList;