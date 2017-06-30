var User = (function () {
    function User(email, password, fName, lName, phno) {
        this.email = email;
        this.password = password;
        this.fName = fName;
        this.lName = lName;
        this.phno = phno;
    }
    return User;
}());
export { User };
