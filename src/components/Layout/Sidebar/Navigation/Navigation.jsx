import { Box } from 'components/Box';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/auth.selector';
import { authLogoutThunk } from 'redux/auth/auth.thunk';
import { selectProfileData } from 'redux/profile/profile.selector';
import { getProfileThunk } from 'redux/profile/profile.thunk';

const getActiveClassName = ({ isActive }) => {
  return isActive ? '' : '';
};

export const Navigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const token = useSelector(selectAuthToken);
  const profile = useSelector(selectProfileData);

  useEffect(() => {
    if (token) {
      dispatch(getProfileThunk());
    }
  }, [token, dispatch]);

  return (
    <>
      <NavLink to="" className={getActiveClassName}>
        Home page
      </NavLink>
      {token && profile && (
        <Box
          display="flex"
          justifyContent="center"
          // flexDirection="column"
          alignItems="baseline"
        >
          <small>{profile.email}</small>
          <Box
            as="button"
            border="none"
            boxShadow="buttonShadow"
            borderRadius="normal"
            bg="secondary"
            color="light"
            fontFamily="body"
            fontSize={0}
            p={2}
            mt={3}
            type="button"
            onClick={() => dispatch(authLogoutThunk())}
          >
            Log Out
          </Box>
        </Box>
      )}
      <div>
        
        {token ? (
          <Box
            as="ul"
            // display="flex"
            // alignItems="baseline"
          >
            <li>
              <NavLink to="contacts" end className={getActiveClassName}>
                Contacts list
              </NavLink>
            </li>
            
          </Box>
        ) : (
          <Box
            as="ul"
            display="flex"
          >
            <Box
              as="li"
              pr={5}
            >
              <NavLink
                to="login"
                state={{ from: location }}
                className={getActiveClassName}
              >
                Login
              </NavLink>
            </Box>
            <li>
              <NavLink
                to="join"
              // className={getActiveClassName}
              >
                Join
              </NavLink>
            </li>

          </Box>
        )}
      </div>
    </>
  );
};