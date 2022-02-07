import { Employee } from "./api.model";


export const getEmployeeByCompany = (company: string): Promise<Employee[]> => {
    return fetch(`https://api.github.com/orgs/${company}/members`)
        .then(r => r.json());
}