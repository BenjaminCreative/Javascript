/**
 * Convert ISO date to Danish
 */
function convertdate(data) {
    
    var weekdays = ['Søndag','Mandag','Tirsdag','Onsdag','Torsdag','Fredag','Lørdag'];
    
    var months=new Array(13);
    months[1]="januar";
    months[2]="februar";
    months[3]="marts";
    months[4]="april";
    months[5]="maj";
    months[6]="juni";
    months[7]="juli";
    months[8]="august";
    months[9]="september";
    months[10]="oktober";
    months[11]="november";
    months[12]="december";
    
    var time=new Date(data);
    var lmonth=months[time.getMonth() + 1];
    var date=time.getDate();
    var year=time.getFullYear();
    var hours=time.getHours();
    var min=time.getMinutes();
    
    if (min < 10) {
        min = '0' + min;
    } else {
        min = min + '';
    }
    
    return date + ". " + lmonth + " " + year + " - " + hours + ":" + min; // weekdays[time.getDay()] + " d. " +
    
};
