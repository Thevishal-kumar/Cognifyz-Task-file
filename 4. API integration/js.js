let url="https://catfact.ninja/fact";

fetch(url)
.then((response)=>{
    return (response.json());
})
.then((data)=>{
    let result=data.fact;
    let p=document.querySelector(".fact");
    p.innerText=result;
    
})
.catch((error)=>{
    console.log(error);
})





 
    
    
    

