var userOne = {
    email: 'kenmayis@gmail.com',
    name:  'Kenny',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};


console.log(userOne.name);