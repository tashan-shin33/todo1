const createIncompleteTodo = (todo1, todo2) => {
  const li = document.createElement("li");
  li.classList.add("text-item");

  const p1 = document.createElement("p");
  p1.classList.add("text-no");
  p1.innerText = todo1;

  const p2 = document.createElement("p");
  p2.classList.add("add-item");
  p2.innerText = todo2;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener('click', () => {
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    const backButton = document.createElement("button");
    backButton.innerText = "戻る";
    backButton.addEventListener('click', () => {
      const todoText = backButton.previousElementSibling.innerText;
      const todoNum = backButton.parentElement.querySelector('.text-no').innerText;
      createIncompleteTodo(todoNum, todoText);
      backButton.closest("li").remove();
    });

    moveTarget.appendChild(backButton);

    document.getElementById('complete-list').appendChild(moveTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener('click', () => {
    const deleteTarget = deleteButton.closest("li");
    deleteTarget.remove();
  });

  li.appendChild(p1);
  li.appendChild(p2);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

window.addEventListener('DOMContentLoaded', function () {
  document.getElementById('add-button').addEventListener('click', onClickAdd);
});

const onClickAdd = () => {
  const todoRebel = document.getElementById('rabel-num').value;
  const addTodo = document.getElementById('add-text').value;
  document.getElementById('rabel-num').value = "";
  document.getElementById('add-text').value = "";
  createIncompleteTodo(todoRebel, addTodo);
};
