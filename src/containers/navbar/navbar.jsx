import React from 'react';
import {
    alpha,
    AppBar,
    Box,
    IconButton,
    InputBase,
    Menu,
    styled,
    ThemeProvider,
    Toolbar,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {createTheme} from "@mui/material/styles";
import {AccountCircle} from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import "./navbar.css";
import {useNavigate} from "react-router-dom";

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Navbar = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();

    const logout = async () => {
            localStorage.removeItem('token');
            navigate('/login');
    };
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleInputChange = (event) => {
        props.dashboardInput(event.target.value);
    };

    const isMenuOpen = Boolean(anchorEl);

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
    );

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1}} className={"navbar-container"}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                            onClick={handleProfileMenuOpen}
                        >
                            <AccountCircle />
                        </IconButton>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search..."
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={handleInputChange}
                            />
                        </Search>

                    </Toolbar>
                </AppBar>
                {renderMenu}
            </Box>
           </ThemeProvider>
    );
};

export default Navbar;