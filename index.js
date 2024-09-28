function show(nav, id){
    
    console.log(id);
    let obj = document.getElementById(id);
    console.log(obj)
    let obj2 = document.querySelector(".print");
    console.log(obj2)
    let obj3 = document.querySelector(".selected");

    obj3.classList.remove("selected")
    nav.classList.add("selected")
    obj2.classList.remove("print");
    obj.classList.add("print")
}