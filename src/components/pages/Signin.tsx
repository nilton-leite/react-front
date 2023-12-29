import { createTheme, ThemeProvider } from '@mui/material/styles';

import ContainerSignin from '../templates/container-signin';
import { ButtonSubmit } from '../atoms/Buttons';
import  TextFields  from '../atoms/TextFields';
import { useAppDispatch } from '../../redux/hooks';
import { authenticateUser } from '../../redux/SigninSlice';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider, useFormContext, FieldValues } from "react-hook-form";


const defaultTheme = createTheme();

export default function SignIn() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const methods = useForm({mode: 'all'});

  const onSubmit = (data: FieldValues) => {
    if (data) {
        const userPayload = {
            username: data.email,
            password:  data.password
        }
        dispatch(authenticateUser(userPayload));
        navigate("/dash")
    }
  }
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <ContainerSignin>
      <FormProvider {...methods} > 
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TextFields
                margin="normal"
                labelRegister="email"
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
              labelRegister="password"
              name="password"
              label="Password"
              id="password"
              type='password'
              autoComplete="current-password"
              autoFocus={false}
              />
            
            <ButtonSubmit text='Sign In' fullWidth={true} variant='contained'/>
        </form>
        </FormProvider>
      </ContainerSignin>
    </ThemeProvider>
  );
}