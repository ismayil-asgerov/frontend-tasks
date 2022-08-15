
 let outputName = document.getElementById("outputName")
 let outputMail = document.getElementById("outputMail")
 let outputTextArea = document.getElementById("outputTextArea")


let data={name:"",email:"",note:""}


function myFunction(val) {
    data.name=inputName.value.toUpperCase();
    data.email=inputEmail.value.toUpperCase();
    data.note=inputTextArea.value.toUpperCase();
  }

 document.getElementById("inputName").addEventListener("input",myFunction)
 document.getElementById("inputEmail").addEventListener("input",myFunction)
 document.getElementById("inputTextArea").addEventListener("input",myFunction)


const submitFunc =()=>{
    outputName.innerText = "Ad :" + data.name;
    outputMail.innerText = "Mail :" +data.email;
    outputTextArea.innerText = "Qeyd :" +data.note;
}

let btn = document.getElementById("btn")

btn.addEventListener("click",submitFunc)

document.getElementById("visibleCheck").addEventListener("input",setVisible)
let visibleDiv = document.getElementById("visibleDiv")
function setVisible(val) {
     console.log(visibleCheck.checked)
     if(visibleCheck.checked){
        visibleDiv.style.display ="none"
     }else{
        visibleDiv.style.display ="initial"
     }
  }



