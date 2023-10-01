import React from 'react'
import { useEffect, useState } from 'react'

function Post() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setPosts(data))
    }, []);
    return (
        <>
            {posts.map((post, index) => (
                <div key={index}>{post.id} ~ {post.body}</div>
            ))}
        </>
    )
}

export default Post