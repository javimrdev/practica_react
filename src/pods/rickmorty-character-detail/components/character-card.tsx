import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Character } from 'pods/rickmorty-character-list/rickmorty-character-list.vm';
import { css } from '@emotion/react';

interface Props {
    character: Character;
}

export const CharacterCardComponent: React.FC<Props> = (props) => {
    const { character, children } = props;

    const linkBack = css`
        display: flex;
        justify-content: flex-end;
    `;

    return (
        <Card>
            <CardMedia
                component="img"
                height="194"
                image={character.image}
                alt={character.name}
            />
            <CardContent>
                <Typography variant="h5" color="black">
                    {character.name ? character.name : '-'}
                </Typography>
                <Typography variant="h6" color="black">Gender</Typography>
                <Typography variant='body1'>
                    {character.gender ? character.gender : '-'}
                </Typography>
                <Typography variant="h6" color="black">Location</Typography>
                <Typography variant='body1'>
                    {character.location ? character.location : '-'}
                </Typography>
                <Typography variant="h6" color="black">Species</Typography>
                <Typography variant='body1'>
                    {character.species ? character.species : '-'}
                </Typography>
                <Typography variant="h6" color="black">Status</Typography>
                <Typography variant='body1'>
                    {character.status ? character.status : '-'}
                </Typography>
                <Typography variant="h6" color="black">Type</Typography>
                <Typography variant='body1'>
                    {character.type ? character.type : '-'}
                </Typography>
                <Typography variant="h6" color="black">Origin</Typography>
                <Typography variant='body1'>
                    {character.origin ? character.origin : '-'}
                </Typography>
                <div css={linkBack}>
                    {children}
                </div>
            </CardContent>
        </Card>
    );
}