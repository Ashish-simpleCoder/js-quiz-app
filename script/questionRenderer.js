export default async function questionRenderer( question_arr, marks ){
   // loader.style.display = 'flex'
   const arr_question = question_arr[window.q_index]
   window.clicked = false

   options.innerHTML = ''
   question.innerHTML = arr_question.q

   imgUpdater(arr_question.img)    //updating the img

   q_number.textContent = 'Q. '+parseInt(window.q_index+1)      //updating the question

   arr_question.options.forEach(option=> {
      const li = document.createElement('li')
      li.id = option
      if(option.length > 50) li.style.maxWidth = '100%'
      li.textContent = option

      li.addEventListener('click',()=>{
         if(window.clicked) return
         window.clicked = true
         li.id !== arr_question.true_ans && (li.style.background = 'red')
         if(li.id === arr_question.true_ans){
            li.style.background = 'green'
            marks++
         }
         setTimeout(async()=>{
            window.q_index<question_arr.length-1 && (
               window.q_index++,
               // (await import('./question_renderer.js')).default(question_arr,marks)
               questionRenderer(question_arr,marks)
            )
         },1000)
      })

      options.appendChild(li)
      loader.style.display = 'none'
   } )
}


function imgUpdater(img){
   const question_img = document.querySelector('#question_img')
   if(img){
      question_img.classList.add('question_img')
      question_img.src = img  //updating question img
   }else{
      question_img.src =  '../public/imgs/js_256.png' //updating question img
      if(question_img.src === '../public/imgs/js_256.png' ) return
      question_img.classList.remove('question_img')
   }
}