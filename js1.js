
    
// $(document).ready(function(){
//     $("#btn").click(function(){
//         let token="180109ec47be235b3eafc06e7e65682d"
// let wurl=`https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=${token}`

//         $.ajax({
//             type:"GET",
//             url:wurl,
//             success:function(data){
//                 console.log(data)
//                 data.forEach(ele=>{
//                     $("wdata").append(ele.name+"<br>")
//                 })
//             }
//         })   
//     })
// })   
    
let apikey="180109ec47be235b3eafc06e7e65682d";
let wurl="";
async function fcn(){

    //wurl=`https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=${apikey}`
    wurl=`https://api.openweathermap.org/data/2.5/forecast?q=hyderabad&appid=${apikey}`
    let res=await fetch(wurl)
    let data=await res.json()
    
    console.log(data)
    var arr =[]
    var k=0;
    for(let i=1;i<=5;i++)
    {
        s=0;
        for(let j=(i-1)*8;j<i*8;j++)
        {
            let t=data['list'][i]['main']['temp'];
            
            s=s+t;
        }
        console.log(s)
        arr[k++]=s/8;
    }
    
    console.log(arr)
    //let {list:0:main:{temp_min,temp_max}}=data
    // console.log(temp_max)
    // document.getElementById("wdata").innerHTML=`<h1> Name:</h1>${name} <br> <h2>tem max:<h2>${temp_max}`

    
}

    