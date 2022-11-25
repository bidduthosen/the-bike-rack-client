import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Blog = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>blogs</h1>
            <h1>{user?.email}</h1>
            <h1>{user?.displayName}</h1>
        </div>
    );
};

export default Blog;