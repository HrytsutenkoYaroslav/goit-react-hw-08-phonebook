import { useDispatch } from 'react-redux';
import {
  Button,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { logIn } from 'redux/auth/operations';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  width: 150px;
  color: #95b095;
  background-color: #302727;

  &:hover {
    color: #302727;
    background-color: #95b095;
  }
`;

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <InputLabel htmlFor="user-email">Email</InputLabel>
          <OutlinedInput id="user-email" type="email" name="email" label="Email" />
        </FormControl>
        <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <InputLabel htmlFor="user-password">Password</InputLabel>
          <OutlinedInput
            id="user-password"
            type="password"
            name="password"
            label="Password"
          />
        </FormControl>
        <StyledButton type="submit" variant="contained">
          Log In
        </StyledButton>
      </form>
    </Box>
  );
};
