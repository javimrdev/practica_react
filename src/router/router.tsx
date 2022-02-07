import { generatePath } from "react-router-dom"

interface SwitchRoutes {
    root: string,
    login: string,
    employeeDetail: string,
    rickmortyList: string,
    characterDetail: string
}

export const switchRoutes: SwitchRoutes = {
    root: '/',
    login: '/login',
    employeeDetail: '/employee/:id',
    rickmortyList: '/rickmortylist',
    characterDetail: '/character/:id'
}

interface LinkRoutes extends Omit<SwitchRoutes, 'employeeDetail' | 'characterDetail'> {
    employeeDetail: (id: string) => string;
    characterDetail: (id: string) => string;
}
export const linkRoutes: LinkRoutes = {
    ...switchRoutes,
    employeeDetail: (id: string) => generatePath(switchRoutes.employeeDetail, { id: `${id}` }),
    characterDetail: (id: string) => generatePath(switchRoutes.characterDetail, { id: `${id}` })
}