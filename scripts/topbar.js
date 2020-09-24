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