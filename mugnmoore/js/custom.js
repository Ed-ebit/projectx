/* Start Klassenänderung */
$(window).on('scroll', function(){
    if( $(window).scrollTop() > 50 ){
        //Navigation
        $('nav.navbar').addClass('bg-white');
        // Back to top button
        $('#backtotopbutton').addClass('d-inline');
    } 
    else {
        //Navigation back
        $('nav.navbar').removeClass('bg-white');
        // Back to top button entfernen
        $('#backtotopbutton').removeClass('d-inline');
    }
});
/* Ende Klassenänderung */

/* Start Smooth Scroll */
// Sicherstellen, dass alle DOM Elemente geladen sind
$(document).ready(function(){
    $('a.smooth').on('click', function(event) {
        if(this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
/* Ende Smooth Scroll */

/* Start aktuelle Jahreszahl */
var aktuellesJahr = (new Date).getFullYear();
$(document).ready(function(){
    $('#jahr').text(aktuellesJahr);
    $('#jahr > time').attr('datetime', aktuellesJahr);
});
/* Ende aktuelle Jahreszahl */