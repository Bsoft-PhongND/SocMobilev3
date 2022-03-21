class Validate {
    validateLogin = (username: string, password: string) =>{
        if(!username || username.length <6 ){
            throw new Error('Username must be at least 6 characters long');
        }
        if(!password || password.length <6 ){
            throw new Error('Password must be at least 6 characters long');
        }
    }
}
export default new Validate;