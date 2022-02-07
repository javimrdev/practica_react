import { Employee } from "pods/company-employee-list/company-employee-list.vm";
import React from "react";

interface EmployeeListContext {
    company: string;
    setCompany: (company: string) => void;
    companyMembers: Employee[];
    setCompanyMembers: (employees: Employee[]) => void;
}

export const EmployeeListContext = React.createContext<EmployeeListContext>({
    company: null,
    setCompany: (company: string) => console.log('setCompany function todo'),
    companyMembers: null,
    setCompanyMembers: (employees: Employee[]) => console.log('setCompany members todo')
})

export const EmployeeListProvider: React.FC = (props) => {
    const { children } = props;
    const [company, setCompany] = React.useState<string>('Lemoncode');
    const [companyMembers, setCompanyMembers] = React.useState<Employee[]>(null);

    return (
        <EmployeeListContext.Provider value={{ company, setCompany, companyMembers, setCompanyMembers }}>
            {children}
        </EmployeeListContext.Provider>
    )
}