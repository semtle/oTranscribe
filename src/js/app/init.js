/******************************************
             Initialisation
******************************************/

const $ = require('jquery');

import { watchFormatting, watchWordCount, toggleAbout } from './texteditor';
import googleDriveSetup from './google';
import inputSetup from './input';
import oldBrowserCheck from './old-browsers';

export default function init(){
    // oT.backup.init();
    watchWordCount();
    watchFormatting();
    // oT.timestamp.activate();
    googleDriveSetup();
}

window.addEventListener('localized', function() {
    inputSetup({
        create: function(file) {
            oT.media.create( { file: file } );
        }
    });
    
    var startText = document.webL10n.get('start-ready');
    $('.start')
        .text(startText)
        .addClass('ready')
        .click(toggleAbout);
    
    oldBrowserCheck();
    // oT.input.loadPreviousFileDetails();
    // $('#curr-lang').text( oT.lang.langs[document.webL10n.getLanguage()] );

}, false);


$(document).ready(function(){
    init();
    // oT.lang.bide();
    if ( localStorageManager.getItem("lastfile") ) {
        toggleAbout();
    }
});

$(window).resize(function() {
    if (document.getElementById('media') ) {
        document.getElementById('media').style.width = oT.media.videoWidth();
    }
});


