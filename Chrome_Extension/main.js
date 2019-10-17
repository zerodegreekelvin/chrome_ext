chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    
    document.getElementById("output").innerHTML = selection[0];
    
    document.getElementById("button").addEventListener("click", function() {
        let salary = document.getElementById('salary').value;
        if(typeof parseInt(salary) != "number") {
            document.getElementById("output").innerHTML = "salary not valid";
        } else {
            let hourly = parseInt(salary) / 52 / 40;
            let time = selection[0] / hourly;
            let interval;
            if(time >8750){
                interval = "year(s)";
                time = time/8750;
            }
            else if(time > 730){
                interval = "month(s)";
                time = time/730;
            }
            else if(time > 168){
                interval = "week(s)";
                time = time/168;
            }
            else if(time >24){
                interval = "day(s)";
                time = time/24;

            }
            else{
                interval = "hour(s)";

            }

            document.getElementById("output").innerHTML = `You will need to work at least ${(time.toFixed(1))} ${interval} to buy this`;
            
        }
    })
    
    
    

}); 
