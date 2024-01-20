function clk(val)
{
 document.getElementById("display").value=document.getElementById("display").value+val
}
function equalto()
{

}
 function clr(){
 document.getElementById("display").value=" "
 }
  function res()
  {
    
   var result = eval(document.getElementById("display").value)

document.getElementById("display").value=result
}