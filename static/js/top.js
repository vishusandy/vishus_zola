
// https://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript
//  https://stackoverflow.com/a/51698993
//  https://stackoverflow.com/a/30527650

const scroll_speed = 10;

function top_link(anim = true) {
    if (window.scrollY == 0) {
        hide_top_link();
    } else {
        show_top_link(anim);
    }
}

function hide_top_link() {
    var link = document.getElementById('top-link');

    if (link) {
        if (link.classList.contains('shown')) {
            link.classList.remove('shown');
        }

        if (link.classList.contains('show_anim')) {
            link.classList.remove('show_anim');
        }
    }
}

function show_top_link(anim) {
    var link = document.getElementById('top-link');

    if (link && !link.classList.contains('shown')) {
        link.classList.add('shown');

        if (anim && !link.classList.contains('show_anim')) {
            link.classList.add('show_anim');
        }
    }
}

function smoothscroll_top() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll_top);
        window.scrollTo(0, currentScroll - (currentScroll / scroll_speed));
    }
}

addEventListener('DOMContentLoaded', (e) => {
    top_link(false);

    var link = document.getElementById('top-link');

    if (link) {
        link.addEventListener('click', function buttonClicked(e) {
            e.preventDefault();
            smoothscroll_top();
        });

        link.addEventListener('transitionend', function () {
            link.classList.remove('top-link-transition');
        }, false);

        window.addEventListener("scroll", top_link, false);
    }
}, false);
