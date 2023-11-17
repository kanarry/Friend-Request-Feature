let add = document.querySelector("#add")
let istatus = document.querySelector(".str")
let remove = document.querySelector("#remove")

let flag = 0
add.addEventListener("click", () => {
    if (flag == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        add.innerHTML = "Remove Friend"
        add.style.backgroundColor = "red"
        flag = 1
    } else {
        istatus.innerHTML = "Strangers"
        istatus.style.color = "red"
        add.innerHTML = "Add Friend"
        add.style.backgroundColor = "#0165E1"
        flag = 0
    }
  
})



