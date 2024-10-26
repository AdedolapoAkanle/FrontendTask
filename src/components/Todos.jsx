import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InputGroup, FormControl, Spinner } from 'react-bootstrap';
import TableComponent from '../GlobalComponents/Table';
import { connect } from 'react-redux';
import { TodoAction } from '../redux/actions/type';
import { api } from '../api/api';

const Todos = ({state, updateState}) => {
    const {todos, search} = state

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await api("todos");
            updateState({...todos, todos:response});
        };
        fetchTodos();
    }, [updateState]);

    const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(search? search.toLowerCase() : "")
    );

    const columns = [
        { header: "Id", field: "id" },
        { header: "Title", field: "title" },
        { header: "Status", field: "completed" },
    ];

    // if (loading) {
    //     return <Spinner animation="border" />;
    // }

    return (
        <div>
            {/* <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search by title"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </InputGroup> */}

            <TableComponent data={filteredTodos} columns={columns} title={"Todos"} />
        </div>
    );
};

const mapStateToProps = ({ todo }) => ({
    state: todo.todoState,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    updateState: (params) => dispatch(TodoAction(params)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Todos);