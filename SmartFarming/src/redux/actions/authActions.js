// redux/actions/authActions.js
export const login = (credentials) => {
    // You can perform authentication logic here
    return {
      type: 'LOGIN',
      payload: credentials.username, // You might want to store user information
    };
  };
  
  export const logout = () => {
    // You can perform logout logic here
    return {
      type: 'LOGOUT',
    };
  };
  