var select=document.querySelectorAll(".currency")
var convert=document.getElementById("btn")
var input=document.getElementById("input")
var msg=document.getElementById("msg")
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayDropDown(res))
function displayDropDown(res)
{
   let curr = Object.entries(res)
 for(let i=0;i<curr.length;i++)
 {
// console.log(curr[i][0])
 var opt1=`<option value="${curr[i][0]}">${curr[i][0]}</option>`;
 select[0].innerHTML+=opt1;
 select[1].innerHTML+=opt1;
 }
}
convert.addEventListener("click",()=>{
   let giveninput=input.value;
   var curr1=select[0].value;
   var curr2=select[1].value;
 if(curr1===curr2)
 {
msg.style.display="block";
//  alert("select different")
 }
else
{
   msg.style.display="none";
   display(giveninput,curr1,curr2)
}
})
function display(giveninput,curr1,curr2)
{
   const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${giveninput}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
   document.getElementById("result").value=Object.values(data.rates)[0]

   //  alert(`10 GBP = ${data.rates.USD} USD`);
  });
   

}