import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsChevronDoubleRight, BsChevronDoubleLeft, BsListCheck, BsImage, BsGear, BsChat, BsPerson, BsHouseDoor } from 'react-icons/bs'; 
import '../styles/components/sidebar.css'; 

const Sidebar = ({ isCollapsed, setCollapsed, isDarkMode }) => {
    return (
        <div className={`sidebar ${isDarkMode ? 'dark-mode-sidebar' : ''}`} style={{ width: isCollapsed ? '80px' : '250px' }}>
            <div className="sidebar-header">
                <h2>{!isCollapsed && ''}</h2>
                <button className="collapse-btn" onClick={() => setCollapsed(!isCollapsed)}>
                    {isCollapsed ? <BsChevronDoubleRight /> : <BsChevronDoubleLeft /> }
                </button>
            </div>
            <nav className="sidebar-nav">
                <NavLink to="/" className="sidebar-item" activeClassName="active">
                    <BsHouseDoor className="icon" />
                    {!isCollapsed && <span>Dashboard</span>}
                </NavLink>
                <NavLink as={NavLink} to="/users" className="sidebar-item" activeClassName="active">
                    <BsPerson className="icon" />
                    {!isCollapsed && <span>User</span>}
                </NavLink>
                <NavLink tas={NavLink} to="/posts" className="sidebar-item" activeClassName="active">
                    <BsChat className="icon" />
                    {!isCollapsed && <span>Posts</span>}
                </NavLink>
                <NavLink as={NavLink} to="/todos" className="sidebar-item" activeClassName="active">
                    <BsListCheck className="icon" />
                    {!isCollapsed && <span>Todos</span>}
                </NavLink>
                <NavLink to="/albums" className="sidebar-item" activeClassName="active">
                    <BsImage className="icon" />
                    {!isCollapsed && <span>Albums</span>}
                </NavLink>
                <NavLink to="/settings" className="sidebar-item" activeClassName="active">
                    <BsGear className="icon" />
                    {!isCollapsed && <span>Settings</span>}
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;
