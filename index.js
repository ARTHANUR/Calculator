let str = "";
let allbutton = document.querySelectorAll("button");
Array.from(allbutton).forEach((btns)=>{
 
    btns.addEventListener("click",function(event){
        console.log(event)
        if(event.target.innerText!="="&&event.target.innerText!="CLR"){
            str = str+event.target.innerText;
            document.querySelector("#target").value = str;
            document.querySelector("input").style.backgroundColor="skyblue";


        }
        else if (event.target.innerText=="="){
            document.querySelector("#target").value = eval(str);
            document.querySelector("input").style.backgroundColor="lightgreen";

        }
        else if(event.target.innerText=="CLR"){
            document.querySelector("#target").value="";
            document.querySelector("input").style.backgroundColor="white";
            str="";
        }
    });
});

