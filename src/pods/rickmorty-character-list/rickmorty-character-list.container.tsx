import React from "react";
import { RickMortyCharacterListComponent } from "pods/rickmorty-character-list/rickmorty-character-list.component";
import { getCharacters } from "./api/api";
import { mapApiAnswerToVM } from "./rickmorty-character-list.mapper";
import Pagination from "@mui/material/Pagination";
import { RickMortyContext } from "core/rickmorty-list/rickmorty.context";
import { css } from "@emotion/react";
import { SearcherComponent } from "pods/rickmorty-character-list/components/searcher.component";
import { useDebouncedCallback } from "use-debounce";


interface Props {
    onViewHandler: (id: string) => void;
}

export const RickMortyCharacterListContainer: React.FC<Props> = (props) => {
    const { onViewHandler } = props;
    const { apiAnswer, setApiAnswer, filter, setFilter } = React.useContext(RickMortyContext);

    const debouncedFilter = useDebouncedCallback((value: string) => {
        setFilter({
            page: 1,
            name: value
        })
    }, 1000);

    React.useEffect(() => {
        getCharacters(filter)
            .then(mapApiAnswerToVM)
            .then(setApiAnswer)
    }, [filter, apiAnswer])

    const onPageChangeHandler = (event: React.ChangeEvent<unknown>, page: number) => {
        event.preventDefault();
        setFilter({
            ...filter,
            page: page
        });
    }

    const containerClass = css`
        display: flex;
        justify-content: center;
        align-content:center;
        flex-wrap: wrap;
        row-gap: 10px;
    `;

    return (
        <>
            {apiAnswer &&
                <div css={containerClass}>
                    <SearcherComponent onDebounce={debouncedFilter} defaultValue={filter.name} />
                    <RickMortyCharacterListComponent onViewHandler={onViewHandler} list={apiAnswer.characters} />
                    <Pagination page={filter.page} count={apiAnswer.info.pages} onChange={onPageChangeHandler} />
                </div>
            }
        </>
    )
}