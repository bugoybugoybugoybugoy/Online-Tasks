document.addEventListener("DOMContentLoaded", function () {
    const openAddTask = document.getElementById("openAddTask");
    const modal = document.getElementById("addTaskModal");
    const closeModal = document.querySelector(".close");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskContainer = document.getElementById("taskContainer");

    openAddTask.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    addTaskBtn.addEventListener("click", function () {
        const title = document.getElementById("taskTitle").value;
        const subject = document.getElementById("taskSubject").value;
        const deadline = document.getElementById("taskDeadline").value;

        if (title === "" || subject === "" || deadline === "") {
            alert("Please fill in all fields!");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `<strong>${title}</strong><br>${subject} <span>${deadline}</span>`;

        taskContainer.appendChild(li);
        modal.style.display = "none"; // Close Modal
        document.getElementById("taskTitle").value = "";
        document.getElementById("taskSubject").value = "";
        document.getElementById("taskDeadline").value = "";
    });

    document.getElementById("sortByDeadline").addEventListener("click", function () {
        let tasks = Array.from(taskContainer.children);
        tasks.sort((a, b) => {
            let dateA = new Date(a.querySelector("span").textContent);
            let dateB = new Date(b.querySelector("span").textContent);
            return dateA - dateB;
        });

        taskContainer.innerHTML = "";
        tasks.forEach(task => taskContainer.appendChild(task));
    });

    document.getElementById("uploadTask").addEventListener("click", function () {
        alert("Upload feature coming soon!");
    });
});
