var User = (function () {
    function User(email, password, fName, lName, phno, cName, dept, year, degree) {
        this.email = email;
        this.password = password;
        this.fName = fName;
        this.lName = lName;
        this.phno = phno;
        this.cName = cName;
        this.dept = dept;
        this.year = year;
        this.degree = degree;
    }
    return User;
}());
export { User };
