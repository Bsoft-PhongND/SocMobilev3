import { theme } from "../theme/theme";
import { logger } from "react-native-logs";
class Helpers{
   log = logger.createLogger();
 
    divideLevelWarning = (number: number) =>{
        if(number >0&& number <10000) return  theme.colors.low;
        if(number >1000&& number <15000) return theme.colors.medium;
        return theme.colors.hight;
        
     }
    waited = (time:number) =>{
        const myPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(true);
          }, time);
        })
        return myPromise;
      };
    numFormatter(num:number) {
        if(num > 999 && num < 1000000){
            return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
        }else if(num > 1000000){
            return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
        }else if(num < 900){
            return num; // if value < 1000, nothing to do
        }
    }
    randomColorNotDuplicate(length: number) {
      var result = [];
      const colors = Object.values(theme.colors);
      const arrcolors =[...colors,...colors,...colors];
      for (var i = 0; i < length; i++) {
        result.push(arrcolors[i]);
      }
      return result;
    }
}

export default new Helpers;