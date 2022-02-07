import Avatar from "@mui/material/Avatar";
import Table from "@mui/material/Table";
import React from "react";

import { Employee } from "./company-employee-list.vm";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Icon, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';


interface Props {
    employees: Employee[];
    onEditHandler: (id: string) => void;
}

export const CompanyEmployeeListComponent: React.FC<Props> = (props) => {
    const { employees, onEditHandler } = props;
    return (
        <>
            {employees !== null &&
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Login</TableCell>
                                <TableCell>Avatar</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employees.map((e) => (
                                <TableRow key={e.id}>
                                    <TableCell>{e.id}</TableCell>
                                    <TableCell>{e.login}</TableCell>
                                    <TableCell><Avatar alt={e.login} src={e.avatarUrl} /></TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => onEditHandler(e.id)}>
                                            <EditIcon />
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