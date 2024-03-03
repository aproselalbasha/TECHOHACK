var start=document.getElementById("start")
var stop=document.getElementById("stop")
var reset=document.getElementById("reset")
var hour=document.getElementById("hour")
var min=document.getElementById("min")
var sec=document.getElementById("sec")
var starttimer=null;
function timer()
{
    if(hour.value==0 && min.value==0 && sec.value==0)
    {
        hour.value=0;
        min.value=0;
        sec.value=0;

    }
    else if(sec.value!=0)
    {
        sec.value--;

    }
    else if (min.value!=0 && sec.value==0)
    {
        sec.value=59;
        min.value--;

    }
    else if(hour.value!=0 && min.value==0 && sec.value==0)
    {
        min.value=59;
        hour.value--;
    }
    

}

reset.addEventListener("click",()=>{
    stop.classList.remove('stop-active')
    start.classList.remove('start-active')
    hour.value=0;
    min.value=0;
    sec.value=0;
    clearInterval(starttimer)
})
start.addEventListener("click",()=>{
    stop.classList.remove('stop-active')

    start.classList.add('start-active')
  
    starttimer=setInterval(()=>{
        
        timer()
    },1000)
})

stop.addEventListener("click",()=>{
    stop.classList.add('stop-active')
    start.classList.remove('start-active')
    clearInterval(starttimer)

})