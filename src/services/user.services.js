import { replace } from 'react-router-redux';
import { openNotificationWithIcon } from 'utils/notification';
import { setUser, setAllUsers } from 'actions/user.action';
import { login, getUsers } from 'mockApi/user/controller';

// performs user authentication.
export const userLogin = (data, resolve, reject) => {
  return (dispatch) => {
    return login(data.email, data.password)
      .then((data) => {
        dispatch(setUser(data));
        localStorage.setItem('user', JSON.stringify(data));
        dispatch(replace('/dashboard'));
        resolve();
      }).catch((error) => {
        openNotificationWithIcon('error', 'Error!', error);
        reject();
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('user');
    dispatch(setUser(null));
    setTimeout(() => {
      window.location = '/';
    }, 500);
  }
}

// Fetch users from db.
export const getAllUsers = (resolve, reject) => {
  return ((dispatch) => {
    return getUsers().
      then((data) => {
        dispatch(setAllUsers(data));
        console.log(data);
        resolve();
      }).
      catch(() => {
        openNotificationWithIcon('error', 'Error!', 'Something went wrong.');
        reject();
      })
  })
}