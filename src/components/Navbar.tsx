import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartDrawer from '../components/CartDrawer';

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;

export function Navbar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [value, setValue] = useState(0)
    const [invisible, setInvisible] = useState(false)


    const navigate = useNavigate()
    const location = useLocation()
    const { openCart, cartQuantity, isDrawerOpen } = useShoppingCart()

    useEffect(() => {
        // check which tab user is on
        const pathMatchRoute = (route: string): boolean => {
            if (route === location.pathname)
                return true
            else {
                return false
            }
        }
        const checkTab = (): void => {
            if (pathMatchRoute('/')) {
                setValue(0)
            } else if (pathMatchRoute('/Store')) {
                setValue(1)
            } else if (pathMatchRoute('/about')) {
                setValue(2)
            }
        }
        checkTab()
    }, [location.pathname])

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle}
            sx={{ textAlign: 'center' }}>
            <Typography variant="h6"
                sx={{ my: 2 }}
                className='text-brand'>
                Outly
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{ textAlign: 'center' }}
                        onClick={() => navigate('/')}>
                        <ListItemText primary='Home' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{ textAlign: 'center' }}
                        onClick={() => navigate('/store')}>
                        <ListItemText primary='Store' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{ textAlign: 'center' }}
                        onClick={() => navigate('/about')}>
                        <ListItemText primary='About' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };

    return (
        <div className="mx-2 mt-3 bg-white overflow-hidden rounded-xl">
            <Box sx={{ display: 'flex' }}>
                <AppBar
                    component="nav"
                    elevation={1}
                    color='inherit'
                    position="static"
                    className='w-full rounded-lg overflow-hidden'>
                    <div className="flex mr-3 items-center">
                        <Toolbar className='flex-grow'>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Box
                                className='flex-grow'
                                sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <Link to='./' className='!text-inherit !no-underline inline-block w-fit'>
                                    <p className='tracking-wider font-bold uppercase text-brand'>
                                        Outly
                                    </p>
                                </Link>
                            </Box>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <div className='flex gap-5 w-fit'>
                                    <div className='navBtnDiv'>
                                        <Link to='/'
                                            className={
                                                value === 0 ? 'navBtn active' : 'navBtn'
                                            }>
                                            Home
                                        </Link>
                                    </div>
                                    <div className='navBtnDiv'>
                                        <Link to='/store'
                                            className={
                                                value === 1 ? 'navBtn active' : 'navBtn'
                                            }>
                                            Store
                                        </Link>
                                    </div>
                                    <div className='navBtnDiv'>
                                        <Link to='/about'
                                            className={
                                                value === 2 ? 'navBtn active' : 'navBtn'
                                            }>
                                            About
                                        </Link>
                                    </div>
                                </div>
                            </Box>
                        </Toolbar>

                        <IconButton
                            aria-label="add to shopping cart"
                            onClick={openCart}>
                            <Badge
                                badgeContent={cartQuantity}
                                color="secondary"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                            >
                                <ShoppingCartIcon color='secondary' />
                            </Badge>
                        </IconButton>
                    </div>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
            <CartDrawer isOpen={isDrawerOpen} />
        </div>
    );
}

