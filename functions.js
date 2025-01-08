//impede o refresh da página com a URL default
if (window.location.hash) {
    const cleanUrl = window.location.href.split('#')[0]
    window.location.replace(cleanUrl)
}

//adiciona efeito na navbar quando scrolla a tela
window.addEventListener("scroll", function() {
    let headerScroll = document.getElementById('headerscroll')
    headerScroll.classList.toggle('headerscroll', window.scrollY > 0)
})

//permite a funcionalidade do menu hambúrguer
let menuHeader = document.querySelector('#headerscroll #menu')

menuHeader.addEventListener('click', function() {
    let navbar = document.getElementById("navbar")

    navbar.classList.toggle('on')
    menuHeader.classList.toggle('ativo')
})

//permite a funcionalidade do FAQ
let faqPerguntas = document.querySelectorAll('#question')
let faqRespostas = document.querySelectorAll('#answer')

faqPerguntas.forEach(pergunta => {

    pergunta.addEventListener('click', function() {
        if(!this.classList.contains('this')) {
            
            this.classList.add('this')
        } 
        else {

            this.classList.remove('this')
            this.nextElementSibling.classList.remove('active')
        }

        let thisQuestion = Array.from(document.querySelectorAll('.this'))

        if (thisQuestion.length == 1) {

            let thisAnswer = thisQuestion[0].nextElementSibling

            thisAnswer.classList.toggle('active')
        }

        else if (!thisQuestion.length) {
            faqPerguntas.forEach(pergunta=> {
                pergunta.classList = 'question'
            })
            
            faqRespostas.forEach(resposta=> {
                resposta.classList = 'inactive'
            }) 
        }

        else {
            faqPerguntas.forEach(pergunta=> {
                pergunta.classList = 'question'
            })
            
            faqRespostas.forEach(resposta=> {
                resposta.classList = 'inactive'
            })
            
            this.classList.add('this')
            thisAnswer = this.nextElementSibling
            thisAnswer.classList.add('active')
        }
    })
})