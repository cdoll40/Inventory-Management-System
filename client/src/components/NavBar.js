import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Link } from 'react-router-dom'

// const pages = ['Signin', 'Signup'];
const settings = ['Add User', 'Settings', 'Signout'];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <InventoryIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                Inventory Management System
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                {/* <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                        <Link style={{textDecoration: "none", color: "black"}} to={`/${page}`}>{page}</Link>
                    </Typography>
                    </MenuItem>
                ))}
                </Menu> */}
            </Box>
            <InventoryIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href=""
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                Inventory Management System
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {/* {pages.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <Link style={{textDecoration: "none", color: "white"}} to={`/${page}`}>{page}</Link>
                </Button>
                ))} */}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="S" src="/static/images/avatar/2.jpg" />
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                    <MenuItem key={settings[0]} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">
                            <Link style={{textDecoration: "none", color: "black"}} to={'/SignUp'}>{settings[0]}</Link>
                        </Typography>
                    </MenuItem>
                    <MenuItem key={settings[1]} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">
                            <Link style={{textDecoration: "none", color: "black"}} to={'Settings'}>{settings[1]}</Link>
                        </Typography>
                    </MenuItem>
                    <MenuItem key={settings[2]} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">
                            <Link style={{textDecoration: "none", color: "black"}} to={'/SignIn'}>{settings[2]}</Link>
                        </Typography>
                    </MenuItem>
                {/* <Typography textAlign="center">User Name</Typography>   {/* name based on current user 
                <Typography textAlign="center">Role</Typography>        {/* role based on current user 
                 */}
                {/* {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                        <Link style={{textDecoration: "none", color: "black"}} to={`/${setting}`}>{setting}</Link>
                    </Typography>
                    </MenuItem>
                ))} */}
                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    );
};

export default NavBar;