const selected = document.querySelector(".selected");
const boxes = Array.from(document.querySelectorAll(".box"));
const jobs = Array.from(document.querySelectorAll(".info-job span"));

jobs.forEach(job => {
    job.addEventListener("click", function(){
        selected.style.display = "flex";
        let container = document.createElement("div");
        container.setAttribute("class", "container");
        let clickedJob = job.cloneNode(true);
        container.setAttribute("id", clickedJob.textContent.toLowerCase());
        container.appendChild(clickedJob);
        let closeBtn = document.createElement("span");
        let eks = document.createTextNode("X");
        closeBtn.appendChild(eks);
        closeBtn.setAttribute("class", "close");
        container.appendChild(closeBtn);
        if (!document.getElementById(container.getAttribute("id"))) {
            selected.appendChild(container);
            //
            boxes.forEach(box => {
                if(this.textContent.toLowerCase() == box.dataset.role ||
                this.textContent.toLowerCase() == box.dataset.level || 
                box.dataset.lang.split(" ").indexOf(this.textContent.toLowerCase()) != -1 ||
                box.dataset.tool.split(" ").indexOf(this.textContent.toLowerCase()) != -1) {
                    box.style.display = "flex";
                } else {
                    box.style.display = "none";
                }
            });
            //
        }
        closeBtn.addEventListener("click",function(){
            this.parentNode.remove();
            if(Array.from(document.querySelectorAll(".container")).length == 0){
                selected.style.display = "none";
                boxes.forEach(b => b.style.display = "flex");
            }
        });

        /*
        boxes.forEach(box => {
            if(this.textContent.toLowerCase() == box.dataset.role ||
            this.textContent.toLowerCase() == box.dataset.level || 
            box.dataset.lang.split(" ").indexOf(this.textContent.toLowerCase()) != -1 ||
            box.dataset.tool.split(" ").indexOf(this.textContent.toLowerCase()) != -1) {
                box.style.display = "flex";
            } else {
                box.style.display = "none";
            }
        });
        */
    });
});

