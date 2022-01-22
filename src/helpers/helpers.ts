class Helpers{
    divideLevelWarning = (number: number) =>{
        if(number >0&& number <30) return 'green';
        if(number >30&& number <70) return 'yellow';
        return 'red';
        
     }
}

export default new Helpers;