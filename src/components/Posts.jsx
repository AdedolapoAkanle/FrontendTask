import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InputGroup, FormControl } from 'react-bootstrap';
import TableComponent from '../GlobalComponents/Table';
import { connect } from 'react-redux';
import { PostAction } from '../redux/actions/type';
import { api } from '../api/api';

const Posts = ({state, updateState}) => {
    const {posts, search, isCollapsed} = state

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await api("posts");
            updateState({...posts, posts:response});
        };
        fetchPosts();
    }, [updateState]);


    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(search ? search.toLowerCase() : ''));

    const columns = [
        { header: "Id", field: "id" },
        { header: "Title", field: "title" },
        { header: "Body", field: "body" },
    ];

    return (
        <div style={{padding:"3rem 0"}}>
            {/* <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search by title"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </InputGroup> */}
            
            <TableComponent data={filteredPosts} columns={columns} title={"Posts"} isCollapsed={isCollapsed}/>
        </div>
    );
};

const mapStateToProps = ({ post }) => ({
    state: post.postState,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    updateState: (params) => dispatch(PostAction(params)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Posts);