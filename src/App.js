import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Users from './components/Users';
import Posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/Todos';
import Dashboard from './components/Dashboard';
import axios from 'axios';
import Albums from './components/Albums';
import Header from './GlobalComponents/Header';

const App = () => {
    const [isCollapsed, setCollapsed] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false); 
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        };

        const fetchPosts = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
        };

        const fetchAlbums = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
            setAlbums(response.data);
        };

        const fetchTodos = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setTodos(response.data);
        };

        fetchUsers();
        fetchPosts();
        fetchAlbums();
        fetchTodos();
    }, []);

    return (
        <Router>
            <div className={isDarkMode ? 'dark-mode' : ''} style={{ height: "100vh" }}>
                <Header setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
                <div className="d-flex" style={{ display:'flex'}}>
                    <Sidebar isCollapsed={isCollapsed} setCollapsed={setCollapsed} isDarkMode={isDarkMode} />
                    <div className="content flex-grow-1">
                        <Routes>
                            <Route path="/" element={<Dashboard users={users} posts={posts} albums={albums} todos={todos}/>} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/posts" element={<Posts />} />
                            <Route path="/todos" element={<Todos />} />
                            <Route path="/albums" element={<Albums />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;

