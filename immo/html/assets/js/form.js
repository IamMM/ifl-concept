function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

$( '#frmContact').submit( function() {
    var formControl = true;

    $( '#frmGrpVorname' ).removeClass( 'has-error' );
    $( '#frmGrpNachname' ).removeClass( 'has-error' );
    $( '#frmGrpEmail' ).removeClass( 'has-error' );
    $( '#frmGrpNachricht' ).removeClass( 'has-error' );

    var vorname = $( '#vorname' );
    var nachname = $( '#nachname' );
    var email = $( '#email' );
    var nachricht = $( '#nachricht' );
  
    if(vorname.val() == '') {
        formControl = false;
        $( '#frmGrpVorname' ).addClass( 'has-error' );
    }

    if(nachname.val() == '') {
        formControl = false;
        $( '#frmGrpNachname' ).addClass( 'has-error' );
    }

    if(nachricht.val() == '') {
        formControl = false;
        $( '#frmGrpNachricht' ).addClass( 'has-error' );
    }

    if(validateEmail(email.val()) == false) {
        formControl = false;
        $( '#frmGrpEmail' ).addClass( 'has-error' );
    }

    if(formControl) {
        $.ajax({
            type: "POST",
            url: "assets/php/senden.php",
            data: { keyword:vorname }
        }).done(function(msg) {
            $( '#message' ).addClass( 'alert' );
            $( '#message' ).addClass( 'alert-success' );
            $( '#message').html( msg );
        });
    }

    return false;
} );