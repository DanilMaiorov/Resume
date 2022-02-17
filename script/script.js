const langPage = document.querySelectorAll('.lang-page')
const swithcer = document.querySelectorAll('.input-checkbox')

swithcer.forEach(item => {
    item.addEventListener('click', () => {
        if(!item.checked) {
            item.removeAttribute('checked')
            langPage.forEach(page => {
                if(!item.checked) {
                    page.classList.toggle('hide')
                    page.classList.toggle('visible')
                }
            })
        } else {
            item.setAttribute('checked', '')
            if(item.checked) {
                langPage.forEach(page => {
                    page.classList.toggle('hide')
                    page.classList.toggle('visible')
                })
            }
        }
    })
})