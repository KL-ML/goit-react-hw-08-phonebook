import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';

import { publicApi } from 'http/http';
import { authLoginThunk } from '../redux/auth/auth.thunk';

const year = new Date().getFullYear();
const initialState = {
  email: '',
  first_name: '',
  last_name: '',
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await publicApi.post('/users/create', values);
      // await publicApi.post('/users/signup', values);
      await dispatch(authLoginThunk({ email: values.email, password: values.password })).unwrap();
      setIsLoading(false);
      console.log('Success!');
    } catch (e) {
      console.log(e);
      console.log('Some error');
    } finally {
      setValues({
        email: '',
        // name: '',
        first_name: '',
        last_name: '',
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
            id="first_name"
            name="first_name"
            type="first_name"
            autoComplete="off"
            value={values.first_name}
            onChange={handleChange}
          />
          <label htmlFor="first_name">First Name</label>
        </div>

        <div>
          <input
            id="last_name"
            name="last_name"
            type="last_name"
            autoComplete="off"
            value={values.last_name}
            onChange={handleChange}
            />
          <label htmlFor="last_name">Last Name</label>
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