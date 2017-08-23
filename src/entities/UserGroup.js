class UserGroup {

    constructor(groupID, name) {
        this.groupID = groupID;
        this.name = name;
        this.users = [];
    }

    addUser = function(user) {
        this.users.add(user);
    }
}
