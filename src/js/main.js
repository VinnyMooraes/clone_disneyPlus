document.addEventListener('DOMContentLoaded', function(){ //observa o carregamento do DOM
    const buttons = document.querySelectorAll( '[data-tab-button]') //pegando os buttons do atributo "x" 

    for (let i = 0; i< buttons.length; i++){ //iterando butoes
        buttons[i].addEventListener('click', function(botao){    //pegando butão atual
            const abaAlvo =  botao.target.dataset.tabButton; //recupera o conteudo do botão
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas(); //executando função no clique do button
            aba.classList.add('shows__list--is--active') //adcionando classe a lista
            removeButtonActive();
            botao.target.classList.add('shows__tabs__button--is--active') //adicionando classe ao botao
        })
    }
})

function removeButtonActive(){
    const buttons = document.querySelectorAll( '[data-tab-button]'); //pegando os buttons do atributo "x" 

    for(let i = 0;i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is--active')
    }

}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll( '[data-tab-id]')   //pegando as abas do atributo "x"

    for(let i = 0; i< tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is--active'); //removendo a classe da ul clicada
    }
}