const users = [];

class User {
  addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const userExists = users.find((u) => u.name === name && u.room === room);

    if (userExists) return { error: "username is taken" };

    const user = { id, name, room };
    users.push(user);

    return { user };
  };
  removeUser = ({ id }) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      return users.splice(index, 1)[0];
    }
  };

  getUser = (id) => users.find((user) => user.id === id);

  getUsersInRoom = (room) => users.filter((user) => user.room === romm);
}
export default new User();
