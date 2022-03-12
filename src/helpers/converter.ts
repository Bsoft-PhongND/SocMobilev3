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
}
export default new Converter;