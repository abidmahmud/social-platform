import React, { useEffect, useState } from "react";
import axios from "axios";

const api_endPoint = "https://jsonplaceholder.typicode.com";
const Posts = (props) => {
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        /* get 
        post
        put
        patch
        delete
        */
        try {
            /** request to this api , then it will give response*/
            const promise = axios.get(`${api_endPoint}/posts`);

            console.log(promise);
            const response = await promise;
            setPosts(response.data);
            console.log(response);
            console.log(response.data);

            console.log("abid");

            // promise
            //     .then(response => {
            //         const data = response.data;
            //         setPosts(data);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     })

        }
        catch (error) {
            console.log("Eita error");
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    const handleAdd = async () => {
        try {

            const response = await axios.post(`${api_endPoint}/posts`, { title: 'Abid' });
            console.log(response);
            const allPosts = [response.data, ...posts];
            setPosts(allPosts);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleUpdate = async (postId) => {
        try {
            const allPosts = [...posts];

            const response = await axios.put(`${api_endPoint}/posts/${postId}`, { title: 'Abid' });
            console.log(response);
            const post = allPosts.find(post => post.id === postId);
            post.title = response.data.title;

            setPosts(allPosts);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (postId) => {
        try {
            await axios.delete(`${api_endPoint}/posts/${postId}`);
            const remainingPost = posts.filter(post => post.id != postId);

            setPosts(remainingPost);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <React.Fragment>
            <button onClick={handleAdd}>Add</button>
            <h1>Post component</h1>
            <ul className="list-group">
                {posts.map((post) => (
                    <React.Fragment key={post.id}>
                        <li className="list-group-item">
                            {post.title}
                            <span onClick={() => handleUpdate(post.id)} className="btn btn btn-primary">Update</span>
                            <span onClick={() => handleDelete(post.id)} className="btn btn btn-danger">Delete</span>
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </React.Fragment>
    );
}
export default Posts;
