const formDiv = document.querySelector(".form");

const addtask = document.querySelector('.addtask')

const closebtn = document.querySelector('.top')

const form = document.querySelector('form')
const taskdiv = document.querySelector('.task')

const taskcoll = []

addtask.addEventListener('click',() =>{
    formDiv.style.display = "flex";
})

closebtn.addEventListener('click',()=>{
    formDiv.style.display = "none";
})

form.addEventListener('submit',()=>{
    event.preventDefault();

    let taskname = event.target[0].value
    let desc = event.target[1].value
    

    let obj ={
        taskname,
        desc,
    }

    taskcoll.push(obj)
    ui()
    form.reset();
    formDiv.style.display ="none";

})


let ui = () => {
    taskdiv.innerHTML= "";

    taskcoll.forEach((elem,index)=> {
        taskdiv.innerHTML +=`<div class="taskbox">
        <div class="text">
            <h1>${elem.taskname}</h1>
            <h3>${elem.desc}</h3>
        </div>
        <div class="btn">
            <button id = "Comp">Completed</button>
            <button id = "Del">Delete</button>
        </div>    
        </div>`
    });

}
