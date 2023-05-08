const reassignmodalBtn = document.getElementById('assigntaskbutton');
const reassignmodal = document.getElementById('modal');
const reassigncloseBtn = document.getElementById('close-btn');

reassignmodalBtn .addEventListener('click', openModal);
reassigncloseBtn.addEventListener('click', closeModal);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}
