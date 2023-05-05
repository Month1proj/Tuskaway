const modalBtn = document.getElementById('addnewuserbutton');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}
