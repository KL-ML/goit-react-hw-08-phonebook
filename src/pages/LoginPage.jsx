import { Box } from 'components/Box';
import { useState } from 'react';

import {
    useDispatch,
} from 'react-redux';
import { authLoginThunk } from 'redux/auth/auth.thunk';

const initialState = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch();
 
  const [values, setValues] = useState(initialState);

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await dispatch(authLoginThunk(values)).unwrap();
      //toast, або ще що завгодно
    } catch(e) {
      console.log('Error: ', e);
    }
  };

  return (
    <>
      <Box
        as="form"
        p={4}
        display="flex"
        flexDirection="column"
        width="formWidth"
        action="#"
        onSubmit={handleSubmit}>
        <h1>Login page</h1>

        <Box
          as="label"
          display="flex"
          flexDirection="column"
          mb={3}
        >
          Email address
          <Box
            as="input"
            mt={3}
            p={2}
            border="none"
            boxShadow="shadowStats"
            borderRadius="normal"
            fontFamily="body"
            color="text"
            type="text"
            id="email"
            name="email"
            autoComplete="useremail"
            value={values.email}
            onChange={handleChange}
            />
        </Box>

        <Box
          as="label"
          display="flex"
          flexDirection="column"
          mb={3}
        >
          Password
          <Box
            as="input"
            mt={3}
            p={2}
            border="none"
            boxShadow="shadowStats"
            borderRadius="normal"
            fontFamily="body"
            color="text"
            id="password"
            type="password"
            name="password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            />
        </Box>

        <Box
          as="button"
          border="none"
          boxShadow="buttonShadow"
          borderRadius="normal"
          bg="secondary"
          color="light"
          fontFamily="body"
          p={2}
          mt={3}
          type="submit">
          Submit
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;