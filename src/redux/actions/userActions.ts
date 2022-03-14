import { actionTypesUser } from "../constants";

class UserActions {
    login(user:any){
        return {
            type: actionTypesUser.login,
            payload: user
        }
    }
}
export default new UserActions;