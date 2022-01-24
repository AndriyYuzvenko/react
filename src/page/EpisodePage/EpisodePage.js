import React, {useEffect, useState} from 'react';

import Episode from "../../components/Episode/Episode";
import './EpisodesPage.css'
import episodeService from "../../service/episode.service/episode.service";

const EpisodePage = () => {
    const [episodes, setEpisodes] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    useEffect(() => {
        episodeService.getAll(pageNumber)
            .then(item => {
                setEpisodes([...item.results])
            })
    }, [pageNumber])
    const next = () => {
        if (pageNumber <= 2) {
            setPageNumber(pageNumber + 1)
        }
    }
    const previous = () => {
        if (pageNumber >= 2) {
            setPageNumber(pageNumber - 1)
        }
    }
    return (
        <div>
            <div className={'RickAndMortyEpisodes'}><h3>Rick and Morty episodes!</h3></div>
            <div className={'episodes '}>{episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}</div>
            <div className={'buttons'}>
                <button onClick={previous}>previous</button>
                <button onClick={next}>next</button>
            </div>
        </div>
    );
};

export default EpisodePage;