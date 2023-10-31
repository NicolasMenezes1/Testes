function showPopup(){
    let element = document.getElementById('pop_up') //Obtém o elemento com o ID 'pop_up' do documento HTML.
    element.classList.add('show-popup') //Adiciona a classe 'show-popup' ao elemento, tornando-o visível.
}

function hidePopup(){ 
    let element = document.getElementById('pop_up') //Obtém o elemento com o ID 'pop_up' do documento HTML.
    element.classList.remove('show-popup') //Remove a classe 'show-popup' do elemento, tornando-o invisível.
}