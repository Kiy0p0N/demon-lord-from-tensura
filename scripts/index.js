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
    })

    $('#milim').click(()=>{
        disabled()

        milim.removeClass('disabled').addClass('active')
    })

    $('#guy').click(()=>{
        disabled()

        guy.removeClass('disabled').addClass('active')
    })

    $('#ramiris').click(()=>{
        disabled()

        ramiris.removeClass('disabled').addClass('active')
    })

    $('#valentine').click(()=>{
        disabled()

        valentine.removeClass('disabled').addClass('active')
    })

    $('#leon').click(()=>{
        disabled()

        leon.removeClass('disabled').addClass('active')
    })

    $('#dagruel').click(()=>{
        disabled()

        dagruel.removeClass('disabled').addClass('active')
    })

    $('#dino').click(()=>{
        disabled()

        dino.removeClass('disabled').addClass('active')
    })

})