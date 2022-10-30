const showBtn = document.querySelector('#show-btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const overlay = document.querySelector('.overlay')


showBtn.addEventListener('click',()=>{
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

closeBtn.addEventListener('click',()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})