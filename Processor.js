

class Processor{

    static Process(data){
        let a = data.split("\r\n") 
        var rows = []
        a.forEach(element => {
           var arr = element.split(',') 
           rows.push(arr) 
        });
        return rows
    }
}


module.exports = Processor