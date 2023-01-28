class UserDto {
    _id;
    phone;
    activated;
    createdAt;

    constructor(user) {
        this._id = user._id;
        this.phone = user.phone;
        this.activated = user.activated;
        this.createdAt = user.createdAt;
    }
}

module.exports = UserDto;
