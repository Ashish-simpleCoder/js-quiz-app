home_page_link.addEventListener('click',()=>history.back())


let questions_arr = []

const l = location.toString()
console.log(l)
if(l.includes('medium')){
   questions_arr = (await import('../public/api/medium_level_questions.js')).default
   console.log('medium')
   console.log(questions_arr)
}else if(l.includes('basic')){
   questions_arr = (await import('../public/api/basic_level_questions.js')).default
   console.log('basic')
   console.log(questions_arr)
}else{
   questions_arr = (await import('../public/api/hard_level_questions.js')).default
   console.log('hard')
   console.log(questions_arr)

}

window.q_index = questions_arr.length-1
window.q_index = 0
window.clicked = false
window.marks = 0






addEventListener('load',async()=>{
   (await import('./questionRenderer.js')).default(questions_arr,marks)
   await import('./darkMode.js')
})

