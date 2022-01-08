export default function darkMode(){
   let dark_theme = JSON.parse(localStorage.getItem('dark_theme')) || false
   document.body.classList.toggle('dark-theme',dark_theme)

   theme_btn.addEventListener('click',()=>{
      dark_theme = !dark_theme
      localStorage.setItem('dark_theme',JSON.stringify(dark_theme))
      document.body.classList.toggle('dark-theme')
   })
}
darkMode()