
function Connect() {
    
    
var cityname =document.getElementById("city").value;
var statecode =document.getElementById("statecode").value;
//  document.write(cityname)
//link = "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&units=metric&apikey=bc2d326277000875fef5e5e1da10bddf";
link1="https://api.weatherbit.io/v2.0/current?city="+cityname+","+statecode+"&key=8d5832dad26f47649bbf63967843869a";
//link="https://api.weatherbit.io/v2.0/forecast/hourly?city="+cityname+"&key=8d5832dad26f47649bbf63967843869a&hours=5";
var request1 = new XMLHttpRequest();
request1.open('GET',link1,true);
request1.onload = function(){
    var obj1 = JSON.parse(this.response);
    if (request1.status >= 200 && request1.status < 400) {
       // document.getElementById("g").innerHTML=obj1.data[0].datetime+"";
        document.getElementById("c").innerHTML=obj1.data[0].temp+""+"degcel";
        document.getElementById("d").innerHTML=obj1.data[0].wind_spd+""+"m/s";
        document.getElementById("e").innerHTML=obj1.data[0].pres+""+"mb" ;
        document.getElementById("f").innerHTML=obj1.data[0].rh+""+"%" ;
     }
    else{
        console.log("The city doesn't exist! Kindly check");
    }
}
request1.send(); 


var cityname =document.getElementById("city").value;
link="https://api.weatherbit.io/v2.0/forecast/hourly?city="+cityname+","+statecode+"&key=8d5832dad26f47649bbf63967843869a&hours=5";
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
 var obj = JSON.parse(this.response);
 if (request.status >= 200 && request.status < 400) {
     
     var str1="",str2="",str3="",str4="",str5="";
     for(var i=0;i<obj.data.length;i++)
     {
str5+=obj.data[i].timestamp_local+"<br>";
str1+=obj.data[i].temp+""+"degcel"+"<br>";
 str2+=obj.data[i].wind_spd+""+"m/s"+ "<br>";
 str3+=obj.data[i].pres+""+"mb" +"<br>";
 str4+=obj.data[i].rh+""+"%" + "<br>";

     }
 var arr=["b","x","y","z","a"];
     var arr1=[str5,str1,str2,str3,str4];
     for(var j=0;j<arr.length;j++)
     {
document.getElementById(arr[j]).innerHTML=arr1[j];
     }

     
 }
    else{
        console.log("The city doesn't exist! Kindly check");
       }
    }

request.send();
}