class Validate {
    validateLogin = (username: string, password: string) =>{
        if(username != 'bkav' && password != 'Bkav@2022'){
            throw new Error('Username or Password is incorrect !');
        }
    }
}
export default new Validate;