import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { switchRoutes } from 'router/router';

interface Props {
    id: string;
}

export const EmployeeDetailComponent: React.FC<Props> = (props) => {
    const { id } = props;
    return (
        <>
            <h2>Hello from Detail page</h2>
            <h3>User Id: {id}</h3>
            <Link to={switchRoutes.root}>Back to list page</Link>
        </>
    )
}