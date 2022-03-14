import converter from '../../helpers/converter';
import userActions from '../actions/userActions';
import request, {api} from '../apiService';

class UserService {
  async login(dispatch: any, body: {username: string; password: string}) {
    try {
      const response = await request(api.user.login, 'POST', body);
      console.log(response.status);
      if (response.status === 200 && response.data) {
        const dataConverted = response.data;
        const action = userActions.login(dataConverted);
        dispatch(action);
        return response.data.token;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error:any) {
    console.log(`error`, error.message);
      throw new Error(error.message);
    }
  }
}
export default new UserService();
