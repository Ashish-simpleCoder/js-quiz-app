await import('./darkMode.js')
home_page_link.addEventListener('click',()=>history.back())


let questions_arr = []

// const l = location.toString()
// if(l.includes('medium')){
//    questions_arr = (await import('../public/api/medium_level_questions.js')).default
//    console.log('medium')
//    console.log(questions_arr)
// }else if(l.includes('basic')){
//    questions_arr = (await import('../public/api/basic_level_questions.js')).default
//    console.log('basic')
//    console.log(questions_arr)
// }else{
//    questions_arr = (await import('../public/api/hard_level_questions.js')).default
//    console.log('hard')
//    console.log(questions_arr)
// }

// window.q_index = questions_arr.length-1
// window.q_index = 0
// window.clicked = false
// window.marks = 0



window.q_index = 0
window.clicked = false
window.marks = 0


   const l = location.toString()
   console.log(location)
   if(l.includes('medium')){
      import('../public/api/medium_level_questions.js').then(data=>questions_arr=data.default)
   }
   else if(l.includes('basic')){
      questions_arr = import('../public/api/basic_level_questions.js').then(data=>questions_arr=data.default)
   }
   else{
      questions_arr = import('../public/api/hard_level_questions.js').then(data=>questions_arr=data.default)
   }
  import('./questionRenderer.js').then(f=>f.default(questions_arr,marks))


