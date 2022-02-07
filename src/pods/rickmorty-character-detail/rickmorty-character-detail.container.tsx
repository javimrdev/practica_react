import React from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "./api/api";
import { RickMortiCharacterDetailComponent } from "./rickmorty-character-detail.component";
import { mapCharacterToVM } from "./rickmorty-character-detail.mapper";
import { Character } from "./rickmorty-character-detail.vm";

export const RickMortiCharacterDetailContainer: React.FC = () => {
    const { id } = useParams();

    const [character, setCharacter] = React.useState<Character>(null);


    React.useEffect(() => {
        getCharacterById(id)
            .then(mapCharacterToVM)
            .then(setCharacter)
    })

    return <RickMortiCharacterDetailComponent character={character} />
}