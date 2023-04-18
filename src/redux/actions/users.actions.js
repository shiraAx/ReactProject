export const SET_USERS='@users/SET_USERS'
export const SET_NEW_USER='@users/SET_NEW_USER'



export const setUsers = (users) =>( {
    type: SET_USERS,
    payload: {
      users
    }
  })
  export const setNewUser = (user) => ({
    type: SET_NEW_USER,
    payload: {
      user
    },
  });

