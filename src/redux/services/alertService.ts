import converter from "../../helpers/converter";
import alertActions from "../actions/alertActions";
import request, { api } from "../apiService";

class AlertService {
    async ruleSeverity(dispatch: any, setInvalidToken?: any, timer?: any) {
        try {
            const response = await request(api.alert.ruleSeverity);
            console.log(response.status);
            if (response.status === 200 && response.data) {
                const dataConverted = converter.alertSeverity(response.data?.aggregations['2']?.buckets || []);
                const action = alertActions.getRuleSeverity(dataConverted);
                dispatch(action);
                return response.data;
            } else if (response.status === 401 && setInvalidToken) {
                setInvalidToken(true);
                clearInterval(timer);
            }
        } catch (error) {
            const action = alertActions.getRuleSeverity(null);
            dispatch(action);
            throw error;
        }
    }
    async alertOverTime(dispatch: any) {
        try {
            const response = await request(api.alert.alertOverTime);
            console.log(response.status);
            if (response.status === 200 && response.data) {
                const dataConverted = converter.alertOverTime(response.data?.aggregations['2']?.buckets || []);
                const action = alertActions.getAlertOverTime(dataConverted);
                dispatch(action);
                return response.data;
            }
        } catch (error) {
            const action = alertActions.getAlertOverTime(null);
            dispatch(action);
            throw error;
        }
    }
    async ruleNameQuality(dispatch: any) {
        try {
            const response = await request(api.alert.ruleNameQuality);
            console.log(response.status);
            if (response.status === 200 && response.data) {
                const dataConverted = converter.getRuleNameQuality(response.data?.aggregations['2']?.buckets || []);
                const action = alertActions.getRuleNameQuality(dataConverted);
                dispatch(action);
                return response.data;
            }
        } catch (error) {
            const action = alertActions.getRuleNameQuality(null);
            dispatch(action);
            throw error;
        }
    }
    async logsBySensor(dispatch: any) {
        try {
            const response = await request(api.alert.logsBySensor);
            console.log(response.status);
            if (response.status === 200 && response.data) {
                const dataConverted = converter.logsBySensor(response.data?.aggregations['2']?.buckets || []);
                const action = alertActions.getLogsBySensor(dataConverted);
                dispatch(action);
                return response.data;
            }
        } catch (error) {
            const action = alertActions.getLogsBySensor(null);
            dispatch(action);
            throw error;
        }
    }
    async ruleCategory(dispatch: any) {
        try {
            const response = await request(api.alert.ruleCategory);
            console.log(response.status);
            if (response.status === 200 && response.data) {
                const dataConverted = converter.getRuleCategory(response.data?.aggregations['2']?.buckets || []);
                const action = alertActions.getRuleCategory(dataConverted);
                dispatch(action);
                return response.data;
            }
        } catch (error) {
            const action = alertActions.getRuleCategory(null);
            dispatch(action);
            throw error;
        }
    }
    async alertSent(dispatch: any) {
        try {
            const response = await request(api.alert.alertSent, "GET", null, { offset: 0, limit: 20 });
            console.log(response.status);
            if (response.status === 200 && response.data) {
                const dataConverted = converter.alertsSent(response.data || []);
                const action = alertActions.alertsSent(dataConverted);
                dispatch(action);
                return response.data;
            }
        } catch (error) {
            const action = alertActions.alertsSent(null);
            dispatch(action);
            throw error;
        }
    }
    async loadMore(dispatch: any, offset: number) {
        const params = {
            offset: offset,
            limit: 20
        }
        try {
            const response = await request(api.alert.alertSent, "GET", null, params);
            console.log(response.status);
            if (response.status === 200 && response.data) {
                const dataMore = converter.alertsSent(response.data || []);
                const action = alertActions.loadMore(dataMore);
                // dispatch(action);
                return dataMore;
            }
        } catch (error) {
            const action = alertActions.alertsSent(null);
            // dispatch(action);
            throw error;
        }
    }
}
export default new AlertService;