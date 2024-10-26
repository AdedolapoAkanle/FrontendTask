import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InputGroup, FormControl } from 'react-bootstrap';
import TableComponent from '../GlobalComponents/Table';
import { connect } from 'react-redux';
import { UserAction } from '../redux/actions/type';

const Users = ({state, updateState}) => {
    const { users, search } = state;

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            updateState({...users, users:response.data});
        };
        fetchUsers();
    }, [users]);

    // const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes((search || "").toLowerCase()) // Fallback to empty string
    );


    const columns = [
        { header: "Name", field: "name" },
        { header: "Email", field: "email" },
        { header: "City", accessor: user => user.address.city }, 
        { header: "Company", accessor: user => user.company.name } 
    ];

    return (
        <div>
            {/* <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search by name"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </InputGroup> */}
            
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