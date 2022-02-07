import * as am from './api/api.model';
import * as vm from './company-employee-list.vm';

export const mapEmployeeListToVM = (list: am.Employee[]): vm.Employee[] => 
    list.map(mapEmployeeToVM);

const mapEmployeeToVM = (data: am.Employee): vm.Employee => ({
    login: data.login,
    id: data.id,
    avatarUrl: data.avatar_url
});