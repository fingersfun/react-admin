import db from './db.json';
import Mock from 'mockjs';

export const login = (email, password) => {
  for (const user of db) {
    if (email === user.email && password === user.password) {
      delete user.password;
      return Promise.resolve(user);
    }
    else {
      return Promise.reject('Username or password may be incorrect.');
    }
  }
}

export const getUsers = () => {
  const data = db.map((user) => {
    delete user.password;
    user.image = Mock.Random.image('100x100', Mock.Random.color(), '#FFF', 'png', user.firstName.substr(0, 1));
    user.fullName = `${user.firstName} ${user.lastName}`
    return user;
  });
  return new Promise((resolve) => setTimeout(() => resolve(data), 1000))
}