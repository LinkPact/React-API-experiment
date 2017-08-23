class UserGroup {

    constructor(name) {
        this.name = name;
        this.users = [];
    }

    addUser = function(user) {
        this.users.add(user);
    }
}
