import { RickMortyCharacterListContainer } from "pods/rickmorty-character-list";
import React from "react";
import { useNavigate } from "react-router-dom";
import { linkRoutes } from "router/router";

export const RickMortyCharacterListScene: React.FC = () => {
    const navigate = useNavigate();
    const onViewHandler = (id: string) => {
        navigate(linkRoutes.characterDetail(id));
    }

    return <RickMortyCharacterListContainer onViewHandler={onViewHandler} />
}