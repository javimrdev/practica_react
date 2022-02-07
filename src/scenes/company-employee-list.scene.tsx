import React from "react";
import { useNavigate } from "react-router-dom";
import { CompanyEmployeeListContainer } from "pods/company-employee-list";
import { linkRoutes } from "router/router";

export const CompanyEmployeeListScene: React.FC = () => {
    const navigate = useNavigate();
    const onEditHandler = (id: string) => {
        navigate(linkRoutes.employeeDetail(id));
    }

    return (
        <CompanyEmployeeListContainer onEditHandler={onEditHandler} />
    )
}