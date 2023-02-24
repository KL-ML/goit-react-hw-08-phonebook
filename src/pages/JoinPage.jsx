import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';

// import { publicApi } from 'http/http';
import { authLoginThunk, authRegisterThunk } from '../redux/auth/auth.thunk';

const year = new Date().getFullYear();
const initialState = {
  name: '',
  email: '',
  password: '',
};

const JoinPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState(initialState);

  const [isPass, setIsPass] = useState(true);

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setIsLoading(true);
      // await publicApi.post('/users/signup', values);
      await dispatch(authRegisterThunk(values)).unwrap();
      await dispatch(authLoginThunk({ email: values.email, password: values.password })).unwrap();
      setIsLoading(false);
      console.log('Success!');
    } catch (e) {
      console.log('Some error:', e);
    } finally {
      setValues({
        name: '',
        email: '',
        password: '',
      });
    }
  };

  return (
    <>
      {isLoading && <p>Loading ...</p>}

      <form action="#" onSubmit={handleSubmit}>
        <h1>Please Sign In</h1>

        <div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            value={values.email}
            onChange={handleChange}
            />
          <label htmlFor="email">Email address</label>
        </div>

        <div>
          <input
            id="name"
            name="name"
            type="name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
        </div>

        <div>
          <input
            id="password"
            name="password"
            type={isPass ? 'password' : 'text'}
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            />
          <label htmlFor="password">Password</label>
        </div>

        <button type="button" onClick={() => setIsPass(prev => !prev)}>
          toggle
        </button>

        <Link to="/login">
          Already has account?
        </Link>

        <button type="submit">
          Sign In
        </button>
        <p>© {year}</p>
      </form>
    </>
  );
};

export default JoinPage;