import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styled from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#a9c144',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },


}));

const theme = createMuiTheme({
  palette: {
    primary: {
    	main:'#a9c144',
    }
  },

});

const theme2 = createMuiTheme();

theme.typography.h4 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
    fontWeight: "bold",
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};


const LoginButton = styled(Button)`

  color: white;
  height: 40px;
  
  &.MuiButton-containedPrimary{
    background-color: #1589EE;
    margin-top:10px;
    &:hover{
      background-color: #1589EE;
      }
  }
  
`;

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <ThemeProvider theme={theme2}>
        <Typography component="h1" variant="h4">
          Sign in
        </Typography>
        </ThemeProvider>
        <form className={classes.form} noValidate>
         <ThemeProvider theme={theme}>
          <TextField
          	className={classes.margin}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          </ThemeProvider>
        <LoginButton fullWidth variant="contained" color="primary">
            LOGIN
        </LoginButton>

        </form>
      </div>

    </Container>
  );
}