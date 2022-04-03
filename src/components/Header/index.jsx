import { makeStyles } from '@material-ui/core';
import CodeIcon from '@mui/icons-material/Code';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';

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
  link: {
    color: '#fff',
    textDecoration: 'none',
  }
})
)

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={classes.link} to="/">Chuong</Link>
          </Typography>

          <NavLink className={classes.link} to="/todo">
            <Button color="inherit">Todo</Button>
          </NavLink>

          <NavLink className={classes.link} to="/album">
            <Button color="inherit">Album</Button>
          </NavLink>
          
          <Button color="inherit" onClick={handleClickOpen}>Register</Button>
        </Toolbar>
      </AppBar>

      <Dialog
        disableEscapeKeyDown
        open={open} 
        // onClose={handleClose}
       >
        <DialogContent>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
    </div>
    
  );
}
