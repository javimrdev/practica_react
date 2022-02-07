import React from "react";
import { useParams } from "react-router-dom";
import { EmployeeDetailComponent } from "./employee-detail.component";

export const EmployeeDetailContainer: React.FC = () => {
    const { id } = useParams();

    return (
        <EmployeeDetailComponent id={id} />
    )
}