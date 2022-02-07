import Container from "@mui/material/Container";
import React from "react";
import { Outlet } from "react-router-dom";
import { FooterComponent } from "./footer";
import { HeaderComponent } from "./header";
import { mq, bp } from 'common/css-helper';
import { css } from "@emotion/react";

export const LayouComponent: React.FC = () => {
    const containerClass = css`
        min-height: calc(100vh - 64px);
        padding-top: 10px;
        padding-bottom: 10px;
    `;

    return (
        <>
            <HeaderComponent />
            <Container css={containerClass} fixed>
                <Outlet />
            </Container>
            <FooterComponent />
        </>
    )
}