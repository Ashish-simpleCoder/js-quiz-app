export default function darkMode(){
   let dark_theme = (localStorage.getItem('dark_theme')) || false
   console.log(dark_theme)


   dark_theme === 'true' ?
   document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme')


   theme_btn.addEventListener('click',()=>{
      if(dark_theme === 'true'){
         dark_theme = false
      }else{
         dark_theme = true
      }
      localStorage.setItem('dark_theme',JSON.stringify(dark_theme))
      document.body.classList.toggle('dark-theme')
   })
}
darkMode()