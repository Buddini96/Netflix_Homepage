const accordianHeader = document.querySelectorAll('.accordian-header')

accordianHeader.forEach(accordianHeader => {
    accordianHeader.addEventListener("click", event => {
        accordianHeader.classList.toggle("active")
        const accordianBody = accordianHeader.nextElementSibling
        if(accordianHeader.classList.contains("active")) {
            accordianBody.style.maxHeight = accordianBody.scrollHeight + "px"
        }
        else {
            accordianBody.style.maxHeight = 0
        }
    })
}) 