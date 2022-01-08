await import('./darkMode.js')
home_page_link.addEventListener('click',()=>history.back())

let questions_arr = []

window.q_index = 0
window.clicked = false
window.marks = 0

// getting the level name from query string
const level_name = location.search.slice(location.search.indexOf('=')+1)

// rendering the page dynamically from query string
pageRenderer(import(`../public/api/${level_name}_level_questions.js`))
function pageRenderer(instruction){
   instruction.then(({default:question_arr})=>{
      console.log(question_arr.length)
      import('./questionRenderer.js').then(({default:func})=>{
         func(question_arr,marks, q_index)
      })
   })
}

// insrting the level name in the span tag with id=level
level.textContent = level_name

