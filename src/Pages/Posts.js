import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

function Posts() {

    //Api End point
    const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";

    //State for posts
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const response = await axios.get(apiEndPoint);
            setPosts(response.data);
        };
        getPosts();
    }, []);

    //Add Post

    const addPost = async () => {
        const post = { title: "New Post", body: "new" };
        await axios.post(apiEndPoint, post);
        setPosts([post, ...posts]);
    };

    //Update Post

    const handleUpdate = async (post) => {
        post.title = "Updated";
        await axios.put(apiEndPoint + "/" + post.id);
        const postsClone = [...posts];
        const index = postsClone.indexOf(post);
        postsClone[index] = { ...post };
        setPosts(postsClone);
    };

    //Delete Post

    const handleDelete = async (post) => {
        await axios.delete(apiEndPoint + "/" + post.id + post);
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    if (posts.length === 0) return <h2> there are no post in the Database </h2>;

    return (
        <>
            <div className="container">
                <h2> there are {posts.length} post in the Database </h2>
                <button onClick={addPost} className="btn btn-primary btn-sm">
                    Add Post
                </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <tr key={index}>
                                <td> {post.title} </td>
                                <td>
                                    <button
                                        onClick={() => handleUpdate(post)}
                                        className="btn btn-info btn-sm"
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(post)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Posts