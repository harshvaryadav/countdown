function counttime()
{
     var d1=new Date();
     var d2="2021/09/05";
     d1=Date.parse(d1);
     d2=Date.parse(d2);
     var d=d2-d1;
     d=d/1000;
     if(d==0)
     {
        clearInterval(a); 
     }
     else
     {
        var Days=Math.floor(d/(3600*24));
        d=d%(24*3600);
        var Hours=Math.floor(d/3600);
        d=d%3600;
        var Mins=Math.floor(d/60);
        d=d%(60);
        var Secs=d;
        document.getElementById("days").innerHTML=formate(Days);
        document.getElementById("hours").innerHTML=formate(Hours);
        document.getElementById("mins").innerHTML=formate(Mins);
        document.getElementById("secs").innerHTML=formate(Secs);
     }
     
}       
function formate(time)
{
    return (time<10)?"0"+time:time;
}
var a=setInterval(counttime,1000);