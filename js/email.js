$(document).ready(function(){
    $('.send_form').on('click', function(){
        var name = $('input[name = name]').val();
        var sorname = $('input[name = sorname]').val();
        var target = $('input[name = target]').val();
        var illnes = $('input[name = illnes]').val();
        var studies = $('input[name = studies]').val();
        var mail = $('input[name = mail]').val();
        var information = $('textarea[name = information]').val();
        if(name == ''){
            $('input[name = name]').css('border-color','rgb(226, 0, 26)');
            $('input[name = name]').focus(function(){
                $(this).css('border-color', 'rgb(220, 220, 220)');
            })
            return false;
        }
        if(sorname == ''){
            $('input[name = sorname]').css('border-color','rgb(226, 0, 26)');
            $('input[name = sorname]').focus(function(){
                $(this).css('border-color', 'rgb(220, 220, 220)');
            })
            return false;
        }
        if(target == ''){
            $('input[name = target]').css('border-color','rgb(226, 0, 26)');
            $('input[name = target]').focus(function(){
                $(this).css('border-color', 'rgb(220, 220, 220)');
            })
            return false;
        }
        if(mail == ''){
            $('input[name = mail]').css('border-color','rgb(226, 0, 26)');
            $('input[name = mail]').focus(function(){
                $(this).css('border-color', 'rgb(220, 220, 220)');
            })
            return false;
        }
        var data_form = 'imie=' + name + '$sor=' + sorname + '$target=' + target + '$illnes=' + illnes + '$studies=' + studies + '$mail=' + mail + '$information' + information;
        $('.server_answer').css('display', 'block');
        $.ajax({
            type: "POST",
            url: "data.php",
            data: data_form,
            success: function(){
            },
            error: function(){
                $('.server_answer').html("<p class='error'>Wystąpiły problemy techniczne. Proszę sprobować póżniej</p>");
                $('.server_answer').delay(3000).slideUp(500);
            }
        });
    });
});