home_page_link.addEventListener('click',()=>history.back())


let questions_arr = []
if(location == 'http://127.0.0.1:5500/pages/medium_level.html'){
   questions_arr = (await import('../public/api/medium_level_questions.js')).default
}else{
   questions_arr = (await import('../public/api/basic_level_questions.js')).default
}

window.q_index = questions_arr.length-1
window.q_index = 0
window.clicked = false
window.marks = 0






addEventListener('load',async()=>{
   (await import('./questionRenderer.js')).default(questions_arr,marks)
   await import('./darkMode.js')
})

