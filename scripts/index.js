$(document).ready(()=>{

    const rimuru = $('.rimuru')
    const milim = $('.milim')
    const guy = $('.guy')
    const ramiris = $('.ramiris')
    const valentine = $('.valentine')
    const leon = $('.leon')
    const dagruel = $('.dagruel')
    const dino = $('.dino')


    function disabled(){
        rimuru.removeClass('active').addClass('disabled')
        milim.removeClass('active').addClass('disabled')
        guy.removeClass('active').addClass('disabled')
        ramiris.removeClass('active').addClass('disabled')
        valentine.removeClass('active').addClass('disabled')
        leon.removeClass('active').addClass('disabled')
        dagruel.removeClass('active').addClass('disabled')
        dino.removeClass('active').addClass('disabled')
    }

    $('#rimuru').click(()=>{
        disabled()

        rimuru.removeClass('disabled').addClass('active')

        $('body').css('background-color', '#1A79D1')
        
    })

    $('#milim').click(()=>{
        disabled()

        milim.removeClass('disabled').addClass('active')

        $('body').css('background-color', '#ec04aa')
    })

    $('#guy').click(()=>{
        disabled()

        guy.removeClass('disabled').addClass('active')

        $('body').css('background-color', '#ff0000')
    })

    $('#ramiris').click(()=>{
        disabled()

        ramiris.removeClass('disabled').addClass('active')

        $('body').css('background-color', '#bb9f00')
    })

    $('#valentine').click(()=>{
        disabled()

        valentine.removeClass('disabled').addClass('active')

        $('body').css('background-color', '#7f7f7f')
    })

    $('#leon').click(()=>{
        disabled()

        leon.removeClass('disabled').addClass('active')

        $('body').css('background-color', '#e0c900')
    })

    $('#dagruel').click(()=>{
        disabled()

        dagruel.removeClass('disabled').addClass('active')

        $('body').css('background-color', '#000539')
    })

    $('#dino').click(()=>{
        disabled()

        dino.removeClass('disabled').addClass('active')

        $('body').css('background-color', '#009dff')
    })

})