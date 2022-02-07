import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from "react";
import { Character } from "./rickmorty-character-list.vm";

interface Props {
    list: Character[];
    onViewHandler: (id: string) => void;
}

export const RickMortyCharacterListComponent: React.FC<Props> = (props) => {
    const { list, onViewHandler } = props;

    return (
        <>
            {list !== null &&
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Species</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Origin</TableCell>
                                <TableCell>Location</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {list.map((e) => (
                                <TableRow key={e.id}>
                                    <TableCell>{e.name}</TableCell>
                                    <TableCell>{e.status}</TableCell>
                                    <TableCell>{e.species}</TableCell>
                                    <TableCell>{e.gender}</TableCell>
                                    <TableCell>{e.origin}</TableCell>
                                    <TableCell>{e.location}</TableCell>
                                    <TableCell>
                                        <Avatar alt={e.name} src={e.image} />
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => onViewHandler(e.id.toString())}>
                                            <VisibilityIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </>
    )
}