document.addEventListener('click', e => {

    if(e.target.matches('.data__questions')){

        if(e.target.nextElementSibling.classList.contains('view--questions')){

            e.target.nextElementSibling.classList.remove('view--questions')
            document.querySelectorAll('.data__answers').forEach(element => {
                element.classList.remove('view--questions')
                element.previousElementSibling.style.setProperty('font-weight',400)
            })
            
        }else{

            document.querySelectorAll('.data__answers').forEach(element => {
                element.classList.remove('view--questions')
                element.previousElementSibling.style.setProperty('font-weight',400)
            })

            e.target.nextElementSibling.classList.add('view--questions')
            e.target.style.setProperty('font-weight', 700)
        }
    }

})