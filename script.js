const toggleBtn = document.getElementsByClassName('icon')[0];
const jump_links = document.getElementsByClassName('jump-links')[0];

toggleBtn.addEventListener('click',()=>{
    jump_links.classList.toggle('active');
})