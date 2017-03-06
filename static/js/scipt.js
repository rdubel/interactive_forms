$(document).ready(function() {
    $("#inputPassword").keydown(function(event) {
        var result = zxcvbn($("#inputPassword").val())
        var pwLength = $(this).val().length;
        if (result.score == 0) {
            $("#pwstrength").css({
                width: '10%',
                backgroundColor: 'red'
            });
            $("#strengthIndex").html("Very weak")
        }
        if (result.score == 1) {
            $("#pwstrength").css({
                width: '20%',
                backgroundColor: 'orange'
            });
            $("#strengthIndex").html("Weak")
        }
        if (result.score == 2) {
            $("#pwstrength").css({
                width: '30%',
                backgroundColor: 'rgb(255, 199, 0)'
            });
            $("#strengthIndex").html("Good")
        }
        if (result.score == 3) {
            $("#pwstrength").css({
                width: '40%',
                backgroundColor: 'rgb(198, 208, 17)'
            });
            $("#strengthIndex").html("Strong")
        }
        if (result.score == 4) {
            $("#pwstrength").css({
                width: '50%',
                backgroundColor: 'rgb(17, 208, 30)'
            });
            $("#strengthIndex").html("Very strong")
        }
        console.log(result.score);
    });

});
