import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "core/auth/auth.context"
import { AuthWrapper } from "core/auth/authwrapper"
import { LoginScene, CompanyEmployeeListScene, EmployeeDetailScene } from "scenes"
import { switchRoutes } from "./router"
import { EmployeeListProvider } from "core/company-employee-list/employee-list.context"
import { EmployeeListWrapper } from "core/company-employee-list/employee-list-wrapper"
import { RickMortyCharacterListScene } from "scenes/rickmorty-character-list.scene"
import { RickMortyCharacterDetailScene } from "scenes/rickmorty-character-detail.scene"
import { LayouComponent } from "layout/layout"
import { RickMortyProvider } from "core/rickmorty-list/rickmorty.context"

export const AppRouter: React.FC = () => {
    return (
        <AuthProvider>
            <EmployeeListProvider>
                <RickMortyProvider>
                    <HashRouter>
                        <Routes>
                            <Route element={<LayouComponent />}>
                                <Route path={switchRoutes.root} element={
                                    <AuthWrapper>
                                        <EmployeeListWrapper>
                                            <CompanyEmployeeListScene />
                                        </EmployeeListWrapper>
                                    </AuthWrapper>} />
                                <Route path={switchRoutes.login} element={<LoginScene />} />
                                <Route path={switchRoutes.employeeDetail} element={<AuthWrapper><EmployeeDetailScene /></AuthWrapper>} />
                                <Route path={switchRoutes.rickmortyList} element={<AuthWrapper><RickMortyCharacterListScene /></AuthWrapper>} />
                                <Route path={switchRoutes.characterDetail} element={<AuthWrapper><RickMortyCharacterDetailScene /></AuthWrapper>} />
                            </Route>
                        </Routes>
                    </HashRouter>
                </RickMortyProvider>
            </EmployeeListProvider>
        </AuthProvider>
    )
}