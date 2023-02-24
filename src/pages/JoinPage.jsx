import { Box } from 'components/Box';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { authLoginThunk, authRegisterThunk } from '../redux/auth/auth.thunk';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const JoinPage = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
      await dispatch(authRegisterThunk(values)).unwrap();
      await dispatch(authLoginThunk({ email: values.email, password: values.password })).unwrap();
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
        <h1>Please Sign In</h1>
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
            id="email"
            name="email"
            type="email"
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
          Name
          <Box
            as="input"
            mt={3}
            p={2}
            border="none"
            boxShadow="shadowStats"
            borderRadius="normal"
            fontFamily="body"
            color="text"
            id="name"
            name="name"
            type="name"
            autoComplete="username"
            value={values.name}
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
            name="password"
            type="password"
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
          Sign In
        </Box>
      </Box>
    </>
  );
};

export default JoinPage;