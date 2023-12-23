// ToDo App
// 1)list - to show all toDos
// 2)add-to add a toDos
// 3)delete-to delete a task
// 4)quit-to exit the todo
// Implemented in the form of array
let todo=[];

let req=prompt("please enter your request");
console.log(req);
// will be building each request, according to the request accepted


while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("------------");
        for(let i=0;i<todo.length ;i++){
            console.log(i,todo[i]);
        }
        console.log("------------");
    }else if(req=="add"){
        let task=prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
        
    }else if(req=="delete"){
        let idx=prompt("please enter the task Index ");
        todo.splice(idx,1);
        console.log("task deleted");
    }else {
        console.log("wrong request");
    }
    req=prompt("please enter your request");

    
}
