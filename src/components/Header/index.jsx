import { makeStyles } from '@material-ui/core';
import { AccountCircle } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import { Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register/index';
import { logout } from 'features/Auth/components/userSlice';
import { cartItemCountSelector } from 'features/Cart/selectors';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Badge, IconButton } from '../../../node_modules/@material-ui/core/index';
import { Close, ShoppingCart } from '../../../node_modules/@material-ui/icons/index';
import { useHistory } from '../../../node_modules/react-router-dom/cjs/react-router-dom.min';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  title2: {
    paddingLeft: theme.spacing(2),
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },

  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  }
})
)

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
}
export default function Header() {
  const dispatch = useDispatch()
  const cartItemsCount = useSelector(cartItemCountSelector)
  const history = useHistory()
  const loggedInUser = useSelector(state => state.user.current)
  const isLoggedIn = !!loggedInUser.id
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleCartClick = () => {
    history.push('/cart')
  }

  const handleLogOutClick = () => {
    const action = logout()
    dispatch(action)
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={classes.title2}>
            SHOPPING CART
          </Typography>

          {/* <NavLink className={classes.link} to="/todo">
            <Button color="inherit">Todo</Button>
          </NavLink>

          <NavLink className={classes.link} to="/album">
            <Button color="inherit">Album</Button>
          </NavLink> */}
          {!isLoggedIn && (
            <Button color="inherit" onClick={handleClickOpen}>Log In</Button>
          )}

          {isLoggedIn && (
            <IconButton color="inherit" onClick={handleUserClick}>
              <AccountCircle/>
            </IconButton>
          )}
          

          <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={handleCartClick}>
            <Badge badgeContent={cartItemsCount} color="error">
              <ShoppingCart />
            </Badge>
        </IconButton>

        </Toolbar>
      </AppBar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogOutClick}>Logout</MenuItem>
      </Menu>

      <Dialog
        disableEscapeKeyDown
        open={open} 
        // onClose={handleClose}
       >
        <IconButton  className={classes.closeButton} onClick={handleClose}>
          <Close  />
        </IconButton>

        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose}/>

              <Box textAlign='center'>
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account. Login here
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose}/>

              <Box textAlign='center'>
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Don't have an account. Register here
                </Button>
              </Box>
            </>
          )}
            

            
        </DialogContent>

      </Dialog>
    </Box>
    </div>
    
  );
}
