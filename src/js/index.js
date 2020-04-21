import '../css/main.scss';
import '../css/font.scss';
import '../css/button.scss';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/esm/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/scss/bootstrap.scss';

import '../img/kast-logo.svg'
import '../img/kast-logo-white.svg'
import '../img/contact-active.svg'
import '../img/contact-icn.svg'
import '../img/dashboard-active.svg'
import '../img/dashboard-icn.svg'
import '../img/help-active.svg'
import '../img/help-icn.svg'
import '../img/inbox-active.svg'
import '../img/inbox-icn.svg'
import '../img/user-active.svg'
import '../img/user-icn.svg'
import '../img/kast-logo.png'
import '../img/kast-logo-white.png'



import '../favicons/favicon-16x16.png'


$(document).ready(function () {
    $('.navbar-toggler').click(function (e) {
        $(this).toggleClass('change');
        $('.nav-sidebar').toggleClass('show-sidebar');
    })

})