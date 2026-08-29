let tasks = JSON.parse(localStorage.getItem("todoTaskss")) || [];

let idCounter = 0;

const save = () => {
  localStorage.setItem("todoTaskss", JSON.stringify(tasks));
};

const genId = () => ++idCounter;

let containers = {
  "not-started": document.querySelector(".not-started .cards-sec-body"),

  "in-progress": document.querySelector(".in-progress .cards-sec-body"),

  completed: document.querySelector(".completed .cards-sec-body"),
};

if (tasks.length > 0) {
  idCounter = Math.max(...tasks.map((task) => task.id));
}

save();

function createCard(task) {
  let card = document.createElement("div");

  card.classList.add("card");

  card.setAttribute("data-index", task.id);

  let completedStages = task.stages.filter((stage) => stage.done).length;

  let percentage = 0;

  if (task.stages.length > 0) {
    percentage = Math.round((completedStages / task.stages.length) * 100);
  }

  let cardbody = "";

  task.stages.forEach((stage, index) => {
    cardbody += `

      <div
        class="stage ${stage.done ? "completed-stage" : ""}"
        data-stageid="${index}"
      >

        <span>
          ${stage.name}
        </span>

        <div class="stage-control">

          <button class="done btn">
            ${stage.done ? "↩" : "✓"}
          </button>

          <button class="up btn">
            ↑
          </button>

          <button class="down btn">
            ↓
          </button>

          <button class="del btn">
            x
          </button>

        </div>

      </div>

    `;
  });

  card.innerHTML = `

    <div class="task-card-header">

      <h3>
        ${task.title}
      </h3>

      <span class="progress">
        ${percentage}%
      </span>

    </div>


    <div class="task-card-body">

      ${cardbody}

    </div>


    <div class="task-card-footer">

      <button class="edit-task-btn btn">
        Edit Task
      </button>

      <button class="add-stage-btn btn">
        Add Stage
      </button>

    </div>

  `;

  containers[task.status].appendChild(card);
}

function addTask(title, stages) {
  let task = {
    title: title,

    stages: stages.map((stage) => {
      return {
        name: stage,
        done: false,
      };
    }),

    id: genId(),

    status: "not-started",
  };

  tasks.push(task);

  save();

  createCard(task);

  updateTasksNum();
}

function updateTaskStatus(task) {
  let completedStages = task.stages.filter((stage) => stage.done).length;

  if (completedStages === 0) {
    task.status = "not-started";
  } else if (completedStages === task.stages.length) {
    task.status = "completed";
  } else {
    task.status = "in-progress";
  }
}

function renderTasks() {
  Object.values(containers).forEach((container) => {
    container.innerHTML = "";
  });

  tasks.forEach((task) => {
    createCard(task);
  });

  updateTasksNum();
}

function updateTasksNum() {
  Object.values(containers).forEach((container) => {
    let tasksNum = container.querySelectorAll(".card").length;

    container.parentElement.querySelector(".tasks-count").textContent =
      tasksNum;
  });
}

document.querySelector(".open-add-task").addEventListener("click", () => {
  document.querySelector(".add-task-modal").classList.add("show");
});

document.querySelectorAll(".close-modal").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".modal").classList.remove("show");
  });
});

document.querySelector(".add-stage-input").addEventListener("click", () => {
  let input = document.createElement("input");

  input.type = "text";

  input.classList.add("stage-name");

  input.placeholder = "Stage";

  document.querySelector(".add-task-stages").appendChild(input);
});

document.querySelector(".create-task").addEventListener("click", () => {
  let taskTitle = document.querySelector(".task-title").value.trim();

  let taskStages = [];

  document.querySelectorAll(".add-task-stages .stage-name").forEach((input) => {
    let value = input.value.trim();

    if (value !== "") {
      taskStages.push(value);
    }
  });

  if (taskTitle === "" || taskStages.length === 0) {
    alert("please type the inputs");
    return;
  }

  addTask(taskTitle, taskStages);

  document.querySelector(".task-title").value = "";

  document.querySelector(".add-task-stages").innerHTML = `

        <input
          class="stage-name"
          type="text"
          placeholder="Stage"
        />

      `;

  document.querySelector(".add-task-modal").classList.remove("show");
});

document.addEventListener("click", (e) => {
  let button = e.target;

  if (!button.matches(".done, .up, .down, .del")) {
    return;
  }

  let card = button.closest(".card");

  let taskId = Number(card.dataset.index);

  let task = tasks.find((task) => task.id === taskId);

  let stageElement = button.closest(".stage");

  let stageId = Number(stageElement.dataset.stageid);

  if (button.classList.contains("done")) {
    task.stages[stageId].done = !task.stages[stageId].done;
  }

  if (button.classList.contains("del")) {
    task.stages.splice(stageId, 1);
  }

  if (button.classList.contains("up")) {
    if (stageId > 0) {
      [task.stages[stageId], task.stages[stageId - 1]] = [
        task.stages[stageId - 1],
        task.stages[stageId],
      ];
    }
  }

  if (button.classList.contains("down")) {
    if (stageId < task.stages.length - 1) {
      [task.stages[stageId], task.stages[stageId + 1]] = [
        task.stages[stageId + 1],
        task.stages[stageId],
      ];
    }
  }

  updateTaskStatus(task);

  save();

  renderTasks();
});

let editingTaskId = null;

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("edit-task-btn")) {
    return;
  }

  let card = e.target.closest(".card");

  editingTaskId = Number(card.dataset.index);

  let task = tasks.find((task) => task.id === editingTaskId);

  document.querySelector(".edit-task-title").value = task.title;

  document.querySelector(".edit-task-modal").classList.add("show");
});

document.querySelector(".save-edit-task").addEventListener("click", () => {
  let task = tasks.find((task) => task.id === editingTaskId);

  let newTitle = document.querySelector(".edit-task-title").value.trim();

  if (newTitle === "") {
    alert("please type the new title");
    return;
  }

  task.title = newTitle;

  save();

  renderTasks();

  document.querySelector(".edit-task-modal").classList.remove("show");

  editingTaskId = null;
});

let addingStageTaskId = null;

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("add-stage-btn")) {
    return;
  }

  let card = e.target.closest(".card");

  addingStageTaskId = Number(card.dataset.index);

  document.querySelector(".new-stage-name").value = "";

  document.querySelector(".add-stage-modal").classList.add("show");
});

document.querySelector(".save-new-stage").addEventListener("click", () => {
  let task = tasks.find((task) => task.id === addingStageTaskId);

  let stageName = document.querySelector(".new-stage-name").value.trim();

  if (stageName === "") {
    alert("please type the stage name");
    return;
  }

  task.stages.push({
    name: stageName,
    done: false,
  });

  updateTaskStatus(task);

  save();

  renderTasks();

  document.querySelector(".add-stage-modal").classList.remove("show");

  addingStageTaskId = null;
});

document.querySelector(".search-input").addEventListener("input", () => {
  filterTasks();
});

document.querySelector("#filterSelect").addEventListener("change", () => {
  filterTasks();
});

function filterTasks() {
  let searchValue = document
    .querySelector(".search-input")
    .value.toLowerCase()
    .trim();

  let filterValue = document.querySelector("#filterSelect").value;

  Object.values(containers).forEach((container) => {
    container.innerHTML = "";
  });

  tasks.forEach((task) => {
    let matchesSearch = task.title.toLowerCase().includes(searchValue);

    let matchesFilter = filterValue === "all" || task.status === filterValue;

    if (matchesSearch && matchesFilter) {
      createCard(task);
    }
  });
}

renderTasks();
