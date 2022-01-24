import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import charactersService from "../../service/characters.service/characters.service";
import Characters from "../../components/Characters/Characters";
import episodeService from "../../service/episode.service/episode.service";
import EpisodeDetails from "../../components/EpisodeDetails/EpisodeDetails";

const CharactersPAge = () => {
    const [characters, setCharacters] = useState([])
    const [pageNumber, setPageNumber] = useState([])
    const {id} = useParams()
    useEffect(() => {
        charactersService.getAll(id)
            .then(item => {
                setCharacters([...item.results])
            })
        episodeService.getAll()
            .then(item => setPageNumber([...item.results]))

    }, [])
    return (
        <div>
            <div className={'RickAndMortyEpisodes'}>
                {pageNumber.filter(item => item.id == id).map(episod => <EpisodeDetails key={episod.id}
                                                                                        episod={episod}/>)}
            </div>
            <div className={'episodes'}>
                {characters.map(character => <Characters key={character.id} character={character}/>)}
            </div>
        </div>
    );
};

export default CharactersPAge;