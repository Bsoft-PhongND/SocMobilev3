import converter from "../../helpers/converter";
import alertActions from "../actions/alertActions";
import request, { api } from "../apiService";

class AlertService {
    async ruleSeverity(dispatch:any){
        try {
            const response = await request(api.alert.ruleSeverity);
            console.log(response.status);
            if(response.status === 200 && response.data) {
                const dataConverted = converter.alertSeverity(response.data?.aggregations['2']?.buckets || []);
                const action = alertActions.getRuleSeverity(dataConverted);
                dispatch(action);
                return response.data;
            }
        } catch (error) {
            const action = alertActions.getRuleSeverity(null);
            dispatch(action);
            throw error;
        }
    }
}
export default new AlertService;