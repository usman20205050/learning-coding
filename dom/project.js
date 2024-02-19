let friend = document.querySelector("#friend")
let remove = document.querySelector("#remove")

let text = document.querySelector("#text")

friend.addEventListener("click",()=>{
    text.innerHTML="Friends";
    text.style.color="red";
});
remove.addEventListener("click",()=>{
    text.innerHTML="Stanger";
    text.style.color="white";
});