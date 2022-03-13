import { ItemProps } from "../components/cards/cardGroupPie";
import { theme } from "../theme/theme";
import wordApp from "../utils/word";

class Converter {
    alertSeverity(data:Array<any>):Array<any> {
        return data.map(item => {
            const rt = {
                title: item.key || "key",
                value: item.value || item.doc_count,
                color: theme.colors.blue
            };
            if(item.key === 'medium') rt.color = theme.colors.medium;
            if(item.key === 'high') rt.color = theme.colors.hight; 
            if(item.key === 'low') rt.color = theme.colors.low; 
            return rt;
        })
    }
    alertOverTime(data:Array<any>):Array<any> {
        const startTime = new Date(new Date().setHours(0)).getTime();
        const filter = data.filter(item => item.key >= startTime);
        return filter.map(item => {
            const time = new Date(item.key || new Date().getTime());
        return {
            // x: `${time.getHours()}/${time.getDate()}/${time.getMonth()}`,
            x: `${time.toLocaleTimeString().split(":")[0]}-${time.toLocaleDateString().split("/")[0]}`,
            y: item.value || item.doc_count
        }
        })
    }
    getAggregations2Buckets(data:Array<any>):Array<any>{
        return data.map((item,index) => {
            return {
                id: index,
                title: item.key || item.title,
                value: item.value || item.doc_count
            }
        })
    }
    getRuleNameQuality(data:Array<any>):Array<any> {
        return data.map((item,index) => {
            // id: number;
            // alert: string;
            // status: string;
            // description?:string;
            // time: number;
            // number: number;
            // priority: boolean;
            // info?: any;
            return {
                id: index,
                alert: item.key || item.title,
                number: item.value || item.doc_count,
                time: new Date().getTime(),
                status: index%2===0?wordApp.wait:wordApp.done,
                description:item.key || item.title,
                priority: index%2===0
            }
        })
    }

}
export default new Converter;