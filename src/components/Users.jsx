import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableComponent from '../GlobalComponents/Table';
import { connect } from 'react-redux';
import { UserAction } from '../redux/actions/type';
import { api } from '../api/api';

const Users = ({state, updateState}) => {
    const { users, search } = state;

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await api("users");
            updateState({...users, users:response});
        };
        fetchUsers();
    }, [updateState]);

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes((search || "").toLowerCase()) 
    );


    const columns = [
        { header: "Name", field: "name" },
        { header: "Email", field: "email" },
        { header: "City", field: "username"}, 
        { header: "Company", field: "email" } 
    ];

    return (
        <div>
            
            <TableComponent data={filteredUsers} columns={columns} title={"Users"}/>
        </div>
    );
};

const mapStateToProps = ({ user }) => ({
    state: user.userState,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    updateState: (params) => dispatch(UserAction(params)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Users);