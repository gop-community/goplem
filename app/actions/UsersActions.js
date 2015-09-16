import alt from '../alt';

class UsersActions {
  createUser(user) {
    this.dispatch(user);
  }
}

export default alt.createActions(UsersActions);
