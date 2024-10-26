import React, { useEffect } from 'react';
import axios from 'axios';
import { InputGroup, FormControl } from 'react-bootstrap';
import TableComponent from '../GlobalComponents/Table';
import { connect } from 'react-redux';
import { AlbumAction } from '../redux/actions/type';
import { api } from '../api/api';

const Albums = ({state, updateState}) => {
    const { albums, search } = state;
    

    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await api("albums");
            console.log(response, "res")
            updateState({...albums, albums:response});
        };
        fetchAlbums();
    }, [updateState]);

    const filteredAlbums = albums.filter(album => 
        album.title.toLowerCase().includes(search ? search.toLowerCase() : '') 
    );


    const columns = [
        { header: "Id", field: "id" },
        { header: "Title", field: "title" },
    ];

    return (
        <div>
            {/* <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search by name"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </InputGroup> */}
            
            <TableComponent data={filteredAlbums} columns={columns} title={"Albums"}/>
        </div>
    );
};

const mapStateToProps = ({ album }) => ({
    state: album.albumState,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    updateState: (params) => dispatch(AlbumAction(params)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Albums);