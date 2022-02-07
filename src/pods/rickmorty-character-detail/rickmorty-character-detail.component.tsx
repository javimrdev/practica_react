import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "router/router";
import { CharacterCardComponent } from "./components/character-card";
import { Character } from "./rickmorty-character-detail.vm";

interface Props {
    character: Character;
}

export const RickMortiCharacterDetailComponent: React.FC<Props> = (props) => {
    const { character } = props;

    return (
        <>
            {character &&
                <>
                    <CharacterCardComponent character={character}>
                        <Link to={switchRoutes.rickmortyList}>Back to list page</Link>
                    </CharacterCardComponent>
                </>
            }
        </>
    )
}