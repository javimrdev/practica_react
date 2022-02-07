import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

import { useNavigate } from "react-router-dom";
import { switchRoutes } from "router/router";
import Avatar from "@mui/material/Avatar";

export const HeaderComponent: React.FC = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Lemoncode!
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => console.log('')}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={false}
                            onClose={() => console.log('')}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem key={'Employees'} onClick={() => navigate(switchRoutes.root)}>
                                <Typography textAlign="center">{'Employees'}</Typography>
                            </MenuItem>
                            <MenuItem key={'Login'} onClick={() => navigate(switchRoutes.login)}>
                                <Typography textAlign="center">{'Login'}</Typography>
                            </MenuItem>
                            <MenuItem key={'RickMortiList'} onClick={() => navigate(switchRoutes.rickmortyList)}>
                                <Typography textAlign="center">{'Rick & Morty list'}</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <MenuItem key={'Employees'} onClick={() => navigate(switchRoutes.root)}>
                            <Typography textAlign="center">{'Employees'}</Typography>
                        </MenuItem>
                        <MenuItem key={'Login'} onClick={() => navigate(switchRoutes.login)}>
                            <Typography textAlign="center">{'Login'}</Typography>
                        </MenuItem>
                        <MenuItem key={'RickMortyList'} onClick={() => navigate(switchRoutes.rickmortyList)}>
                            <Typography textAlign="center">{'Rick & Morty Characters'}</Typography>
                        </MenuItem>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="">
                            <IconButton onClick={() => console.log('')} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )
}