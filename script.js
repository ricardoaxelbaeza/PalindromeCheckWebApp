
const checkAction = ()=>{

clearResult();
const boxText = document.getElementById("text-input").value;

const empty = isEmpty(boxText);

if(!empty){
  isPalindrome(boxText);
}

}

const isEmpty = (boxText)=>{
  if(boxText===""){
    alert("Please input a value");
    return true;
  }
}

const isPalindrome = (boxText)=>{
  const paragraph = document.getElementById("result");

  const new_string = boxText.toLowerCase().toString().replace(/[.,_`(``)``/` `:``\\``\-`]+/g,'').trim();

  const reverseString = new_string.split("").reverse().join("")

  console.log("OG: " + new_string);
  console.log("Reverse: " + reverseString);


  




  if(reverseString===new_string){
    const resultText = document.createTextNode(boxText + " is a palindrome");
    paragraph.appendChild(resultText);
  }else{
    const resultText = document.createTextNode(boxText + " is not a palindrome");
    paragraph.appendChild(resultText);
  }

}

const clearResult =()=>{
  document.getElementById("result").innerHTML="";



}
