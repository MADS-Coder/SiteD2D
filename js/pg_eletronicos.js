var x = (document.querySelectorAll('#menufunc li').length) + 1

function mudaFuncionalidade(id) {
    for (i = 1; i < x; i++) {
        document.getElementById('func' + i).className = "item-menu-func";
    }
    document.getElementById(id).className = "item-menu-ativo";
}
function mudaConteudo(id) {
    for (i = 1; i < x; i++) {
        document.getElementById('cont' + i).className = "sist-display-none";
    }
    document.getElementById(id).className = "sist-display";
}

function toggle(obj) {
    var el = document.getElementById(obj);
    if (el.style.display != 'none') {
        el.style.display = 'none';
    }
    else {
        el.style.display = 'contents';
    }
}
function setinha(obj) {
    var el = document.getElementById(obj);
    if (el.className != 'fa fa-angle-down') {
        el.className = 'fa fa-angle-down';
    }
    else {
        el.className = 'fa fa-angle-up';
    }
}