function displayresult(){
    var city=document.getElementById("city").value;
    var apikey='3046ba6e15d0b6e947f610dcbd2d02ba';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric')
    .then(response=>response.json())
    .then(data=>{
        var t=data['main']['temp']
        document.getElementById("output").innerHTML=t;
        var s=data['main']['pressure']
        document.getElementById("v").innerHTML=s;
        var h=data['main']['humidity']
        document.getElementById("s").innerHTML=h;
        console.log(t,h,s);
    })
}