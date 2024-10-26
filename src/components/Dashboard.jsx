import React, { useRef } from 'react';
import '../styles/components/Dashboard.css'; 
import { BsChat, BsImage, BsListCheck, BsPerson } from 'react-icons/bs';
import useScrollTriggeredCountUp from './CountUp';

const Dashboard = ({ users, posts, albums, todos }) => {
    const usersRef = useRef(null);
    const postsRef = useRef(null);
    const todosRef = useRef(null);
    const albumsRef = useRef(null);

    const usersCount = useScrollTriggeredCountUp(usersRef, users.length, 2000);
    const postsCount = useScrollTriggeredCountUp(postsRef, posts.length, 2000);
    const todosCount = useScrollTriggeredCountUp(todosRef, todos.length, 2000);
    const albumsCount = useScrollTriggeredCountUp(albumsRef, albums.length, 2000);

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className="summary-container">
                <div ref={usersRef} className="summary-item">
                    <h3><BsPerson/> <span>Users</span></h3>
                    <p>{usersCount}</p> 
                </div>
                <div ref={postsRef} className="summary-item">
                    <h3><BsChat/> <span>Posts</span></h3>
                    <p>{postsCount}</p> 
                </div>
                <div ref={todosRef} className="summary-item">
                    <h3><BsListCheck/><span>Todos</span></h3>
                    <p>{todosCount}</p>
                </div>
                <div ref={albumsRef} className="summary-item">
                    <h3><BsImage/><span>Albums</span></h3>
                    <p>{albumsCount}</p> 
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
