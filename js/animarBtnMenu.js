function menu(btn_menu) {
    btn_menu.classList.toggle("animarBtnMenu");

    var menu_conteudo = document.getElementById("menu-conteudo");

    if (menu_conteudo.style.display === "block") {
      menu_conteudo.style.display = "none";
    }else {
      menu_conteudo.style.display = "block";
    }
}
