export default async function questionRenderer(question_arr, marks, q_index ){
   window.clicked = false
   const current_question = question_arr[q_index]
   options.innerHTML = ''
   question.innerHTML = current_question.q

   imgUpdater(current_question.img)    //updating the img
   q_number.textContent = 'Q. '+parseInt(q_index+1)      //updating the question number like 1,2,3, and so on

   current_question.options.forEach(option=> {
      const obj = {option,question_arr, q_index, current_question, marks}
      renderOptions(obj)
   })
}



function renderOptions(obj){
   let {option,question_arr, q_index, current_question, marks} = obj
   const li = document.createElement('li')
   li.id = option
   if(option.length > 50) li.style.maxWidth = '100%'
   li.innerHTML = option

   li.addEventListener('click',()=>{
      const listenerParams = {li, current_question, marks, q_index, question_arr}
      optionClickListener(listenerParams)
      // updateProgressBar(question_arr, q_index)
   })

   options.appendChild(li)
   loader.style.display = 'none'
}


function optionClickListener(listenerParams){
   let {li, current_question, marks, q_index, question_arr} = listenerParams
   if(window.clicked) return
   else{
      window.clicked = true
      if(li.id === current_question.true_ans){
         // li.style.background = 'green'
         marks++
      }
      // else{
      //    li.style.background = 'red'
      // }
   }

   // after selecting any option call the questionRenderer() function again after specified time
   setTimeout(async()=>{
      q_index<question_arr.length-1 && (
         q_index++,
         updateProgressBar(question_arr, q_index),
         questionRenderer(question_arr,marks, q_index)
         )
   },1000)
}


function imgUpdater(img){
   img_loader.style.display = 'flex'
   const question_img = document.querySelector('#question_img')
   if(img){
      question_img.classList.add('question_img', img)
      question_img.src = img  //updating question img
   }else{
      question_img.src =  '../public/imgs/js_256.png' //updating question img
      if(question_img.src === '../public/imgs/js_256.png' ) return
      question_img.classList.remove('question_img')
   }
   img_loader.style.display = 'none'
}

function updateProgressBar(question_arr, q_index){
   progress_bar.style.width = (((q_index+1)/question_arr.length)*100)+'%'   //increasing width
}