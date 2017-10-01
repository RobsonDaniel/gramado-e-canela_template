var btn_menu = document.getElementsByClassName("btn-menu")[0],
    menu_conteudo = document.getElementById("menu-conteudo");

function animarBtnMenu() {
  btn_menu.classList.toggle("animarBtnMenu");
}

function menu() {
    animarBtnMenu();

    if (menu_conteudo.style.maxHeight) {
      menu_conteudo.style.maxHeight = null;
    }else {
      menu_conteudo.style.maxHeight = menu_conteudo.scrollHeight + "px";
    }

}
