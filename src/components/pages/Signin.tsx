import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppDispatch } from '../../redux/hooks';
import { authenticateUser } from '../../redux/SigninSlice';
import Copyright from '../molecules/Copyright';
import { ButtonSubmit } from '../atoms/Buttons';
import  TextFields  from '../atoms/TextFields';
import TypographyComponent from '../atoms/Typography';
import AvatarComponent from '../molecules/Avatar';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {

  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data) {
        const username: string = String(data.get('email'))
        const password: string = String(data.get('password'))
        const userPayload = {
            username: username,
            password:  password
        }
        dispatch(authenticateUser(userPayload));
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <AvatarComponent icon={<LockOutlinedIcon />}/>       
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}

          <TypographyComponent variant="header" text='Sign in'/>
         
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <TextFields  
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type='email'
                autoComplete="email"
                autoFocus={true}/>

            <TextFields  
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              type='password'
              autoComplete="current-password"
              autoFocus={false}
              />
            
            <ButtonSubmit text='Sign In' fullWidth={true} variant='contained'/>
          </Box>
        </Box>
        <Copyright textLink='Nilton Amaral' link='https://www.delliv.me/' text='Challenge delliv' />
      </Container>
    </ThemeProvider>
  );
}