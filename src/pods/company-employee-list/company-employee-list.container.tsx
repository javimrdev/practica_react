import { EmployeeListContext } from "core/company-employee-list/employee-list.context";
import React from "react";
import { getEmployeeByCompany } from "./api/api";
import { CompanyEmployeeListComponent } from "./company-employee-list.component";
import { mapEmployeeListToVM } from "./company-employee-list.mappers";
import { SearcherComponent } from "./components/searcher.component";

interface Props {
    onEditHandler: (id: string) => void;
}

export const CompanyEmployeeListContainer: React.FC<Props> = (props) => {
    const { onEditHandler } = props;
    const { company, setCompany, companyMembers, setCompanyMembers } = React.useContext(EmployeeListContext);

    React.useEffect(() => {
        getEmployeeByCompany(company)
            .then(mapEmployeeListToVM)
            .then(setCompanyMembers);
        console.log('otra vez')
    }, [company]);

    const onSubmitHandler = (value: string) => {
        event.preventDefault();
        setCompany(value);
    }

    return (
        <>
            <SearcherComponent onSubmitHandler={onSubmitHandler} defaultValue={company} />
            <CompanyEmployeeListComponent employees={companyMembers} onEditHandler={onEditHandler} />
        </>
    )
}