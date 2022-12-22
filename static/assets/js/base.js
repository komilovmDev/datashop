const liArray = document.querySelectorAll('.link')

let currentPage = ''

liArray.forEach(li => {
    li.onclick = (event) => {
        const target = li.getAttribute('data-target')
        showPage(target)
    }
})

function showPage(target) {
    console.log(target);
    document.getElementById(currentPage)?.classList.remove('visible')
    document.getElementById(target).classList.add('visible')
    currentPage = target
}

showPage('Elektronika')

