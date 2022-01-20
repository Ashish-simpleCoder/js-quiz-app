const showResult = async(marks,length) =>{
    if(marks === length){
        alert('congratulations, you have got rank in top 100%')
    }
    else if(marks > length - 3){
        alert('congratulations, you have got rank in top 15%')
    }
    else if(marks > length - 7 && marks < length -3){
        alert('congratulations, you have passed the test,\nalthough all questions were not right')
    }
    else if(marks > length/2 && marks < length -7){
        alert('you barely passed the test. Next Time try hard.\nGO ahead and learn more about Javascript')
    }
    else{
        alert('you failed the test, you are just too weak')
    }
}
export default showResult