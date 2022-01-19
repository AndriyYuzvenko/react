import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {useParams} from "react-router-dom";

import albumsService from "../../service/albums.service/albums.service";
import Album from "../../components/Album/Album";
import './AlbumsPage.css'

const AlbumsPage = () => {
    const {id} = useParams()
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        albumsService.getAll()
            .then(item => setAlbums([...item]))
    }, [])
    console.log(id)
    return (
        <div className={'contentAlbums'}>
            <div className={'album'}>
                {albums.filter(item => item.userId == id).map(album => <Album key={album.id} album={album}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export default AlbumsPage;