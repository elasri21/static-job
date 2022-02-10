const selected = document.querySelector(".selected");
const jobs = Array.from(document.querySelectorAll(".jobs span"));

jobs.forEach(job => {
    job.addEventListener("click", function(){
        selected.style.display = "block";
        let container = document.createElement("div");
        container.setAttribute("class", "container");
        selected.appendChild(container);
        let clickedJob = job.cloneNode(true);
        container.appendChild(clickedJob);
        let closeBtn = document.createElement("span");
        let eks = document.createTextNode("X");
        closeBtn.appendChild(eks);
        closeBtn.setAttribute("class", "close");
        container.appendChild(closeBtn);
        container.style.display = "inline-block";
        closeBtn.addEventListener("click",function(){
            this.parentNode.remove();
            if(!document.querySelector(".container")){
                selected.style.display = "none"
            }
        }) 
         

    })
})




