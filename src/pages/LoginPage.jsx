import { STATUS } from 'constants/status.constants';
import { useState } from 'react';

import {
    useDispatch,
    useSelector
} from 'react-redux';
import { selectAuthStatus } from 'redux/auth/auth.selector';
import { authLoginThunk } from 'redux/auth/auth.thunk';

const initialState = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectAuthStatus);

  // const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await dispatch(authLoginThunk(values)).unwrap();
      console.log('Success');
      //toast, або ще що завгодно
    } catch(e) {
      console.log('Error: ', e);
    }
  };

  return (
    <>
      {status === STATUS.loading && <p>Loading ...</p>}

      <form action="#" onSubmit={handleSubmit}>
        <h1>Login page</h1>

        <div>
          <input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            />
          <label htmlFor="email">Email address</label>
        </div>

        <div>
          <input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            />
          <label htmlFor="password">Password</label>
        </div>

        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginPage;