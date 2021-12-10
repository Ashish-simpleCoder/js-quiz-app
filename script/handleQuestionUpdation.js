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
      import('../public/api/medium_level_questions.js').then(data=>{
         import('./questionRenderer.js').then(f=>f.default(data.default,marks))
      })
   }
   else if(l.includes('basic')){
      import('../public/api/basic_level_questions.js').then(data=>{
         import('./questionRenderer.js').then(f=>f.default(data.default,marks))
      })
   }
   else{
      import('../public/api/hard_level_questions.js').then(data=>{
         import('./questionRenderer.js').then(f=>f.default(data.default,marks))
      })
   }

