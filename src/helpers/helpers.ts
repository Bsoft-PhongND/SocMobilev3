import { theme } from "../theme/theme";

class Helpers{
    divideLevelWarning = (number: number) =>{
        if(number >0&& number <30) return  theme.colors.low;
        if(number >30&& number <70) return theme.colors.medium;
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

}

export default new Helpers;