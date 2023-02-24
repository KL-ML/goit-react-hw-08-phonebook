// import { useEffect } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/auth.selector';
import { logoutAction } from 'redux/auth/auth.slice';
// import { selectProfileData } from 'redux/profile/profile.selector';
// import { getProfileThunk } from 'redux/profile/profile.thunk';

const getActiveClassName = ({ isActive }) => {
  return isActive ? 'btn nav-btn btn-light active' : 'btn nav-btn btn-light';
};

export const Navigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const token = useSelector(selectAuthToken);
  // const profile = useSelector(selectProfileData);

  useEffect(() => {
    if (token) {
      console.log('token at useEffect in Navigation:', token)
    // dispatch(getProfileThunk());
    }
  }, [token]);

  return (
    <div>
      <div>
              
        {!token && <h2>Please log in!</h2>}

        {/* {token && profile && (
          <>
            <h2>Welcome!</h2>
            <small>{profile.first_name} {profile.last_name}</small>
            <small>{profile.email}</small>
            <br />
            <br />
          </>
        )} */}

        <NavLink to="" className={getActiveClassName}>
          Home page
        </NavLink>

        {token ? (
          <>
            <NavLink to="contacts" end className={getActiveClassName}>
              Contacts list
            </NavLink>

            <NavLink to="new-contact" className={getActiveClassName}>
              Create new contact
            </NavLink>

            <button
              onClick={() => dispatch(logoutAction())}
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="login" state={{ from: location }} className={getActiveClassName}>
              Login
            </NavLink>

            <NavLink to="join" className={getActiveClassName}>
              Join
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};