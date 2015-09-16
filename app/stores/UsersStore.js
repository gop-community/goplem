import alt from '../libs/alt';
import UsersActions from '../actions/UsersActions';

class UsersStore {
  constructor() {
    this.users = [];

    this.bindListeners({
      handleCreateUser: UsersActions.CREATE_USER
    });
  }

  handleCreateUser (user) {
    this.users.push(user);
  }

  fetchAll() {
    return this.users;
  }
}

export default alt.createStore(UsersStore, 'UsersStore');