window.onscroll = function () {
    if (document.getElementsByClassName('main_start').length == 1) {
        if (document.getElementsByClassName('main_start')[0].offsetHeight <= window.scrollY) {
            document.getElementsByClassName('top_nav')[0].style.background = '#1d1d1d';
        } else {
            document.getElementsByClassName('top_nav')[0].style.background = 'none';
        }
    }
    if (document.getElementsByTagName('header').length == 1) {
        if (document.getElementsByTagName('header')[0].offsetHeight <= window.scrollY) {
            document.getElementsByClassName('top_nav')[0].style.background = '#1d1d1d';
        } else {
            document.getElementsByClassName('top_nav')[0].style.background = 'none';
        }
    }
}
function openMenu(){
    document.getElementsByClassName('main_bar')[0].style.display = 'none';
    document.getElementsByClassName('hamburger_bar')[0].style.display = 'grid';
    document.getElementsByClassName('list')[0].style.top = '60px';
}
function openSearch(){
    document.getElementsByClassName('main_bar')[0].style.display = 'none';
    document.getElementsByClassName('search_bar')[0].style.display = 'grid';
}
function closeMenu(){
    document.getElementsByClassName('main_bar')[0].style.display = 'grid';
    document.getElementsByClassName('hamburger_bar')[0].style.display = 'none';
    document.getElementsByClassName('list')[0].style.top = '-100%';
}
function closeSearch(){
    document.getElementsByClassName('main_bar')[0].style.display = 'grid';
    document.getElementsByClassName('search_bar')[0].style.display = 'none';
}
