class UserGroup {

    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.users = [];
    }

    addUser = function(user) {
        this.users.add(user);
    }
}
