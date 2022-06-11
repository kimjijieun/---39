$(document).ready(function(){

/////////// 메뉴판////////////

    $('.menu_right, .pan').hover(function(){
        $('.pan').stop(true).slideDown(500);
        $('.sub_menu').stop(true).slideDown(500);
        
    }, function(){
        $('.pan').stop(true).slideUp(500)
        $('.sub_menu').stop(true).slideUp(500);
    })


// ////////배너 슬라이드//////////

    //메인베너

    $('.banner').eq(0).css({
        left: 0
    });
    //인디삽입
    let count = $('.banner').length; 
    for(let i=0; i<count; i++) {
        $('.indicator').append('<div class="indi"></div>');
    }
    $('.indi').eq(0).addClass('indi_active');

    $('.indi').click(function(){

        if($('.indi_active').index() < $(this).index()) {

            slide($(this).index(), '100%', $('.indi_active').index(), '-100%');
            console.log("오른쪽")
        }

        else if($('.indi_active').index() > $(this).index()) {

            slide($(this).index(), '-100%', $('.indi_active').index(), '100%'); 
            console.log("왼쪽")
        }
        bang=$(this).index() + 1;

    });

    let bang = 1;
    let timer = 1000;
    
    $('.btn_R').click(function(){ 
        slide(bang % count, '100%', (bang - 1) % count, '-100%');
        bang+=1; 
    });
    $('.btn_L').click(function(){
        bang-=1; 
        slide((bang - 1) % count, '-100%', bang % count, '100%') 
    });

    function slide(c_bang, c_pos, o_bang, o_pos) { 
        btn_init();

        console.log("c_bang:" +c_bang)

        // 들어오는판
        $('.banner').eq(c_bang).css({
            left: c_pos
        }).animate({
            left: 0
        }, timer);

        // 나가는판
        $('.banner').eq(o_bang).animate({
            left: o_pos
        }, timer);

        $('.indi').eq(o_bang).removeClass('indi_active');
        $('.indi').eq(c_bang).addClass('indi_active');
    }
//////// 버튼박기

    // function btn_init() {
    //     $('.btn').attr('disabled', true)

    //     setTimeout(() => {
    //         $('.btn').attr('disabled', false)
    //     }, timer);
    // }

    function btn_init() {
        $('.btn').css({pointerEvents: 'none'});

        setTimeout(() => {
            $('.btn').css({pointerEvents: 'auto'})
        }, timer);
    }
    


    // /////preview_menu_c 체크해서 바뀌기////////
    $('.dessert').click(function(){
        $(this).css({
            color: 'cadetblue'
        })
        $('.beverage').css({
            color: '#000'
        })

        $('.preview_menu_in1').css({
            display: 'block'
        })
        $('.preview_menu_in2').css({
            display: 'none'
        })

        // $(this).css({
        //     color: 'cadetblue'
        // })
        // $('.beverage').css({
        //     color: '#000'
        // })
        
        // $('.preview_menu_m1').css({
        //     display: 'block'
        // })
        // $('.preview_menu_m2').css({
        //     display: 'none'
        // })
    })



    $('.beverage').click(function(){
        $(this).css({
            color: 'cadetblue'
        })
        $('.dessert').css({
            color: '#000'
        })

        $('.preview_menu_in2').css({
            display: 'block'
        })
        $('.preview_menu_in1').css({
            display: 'none'
        })
    })

    /////////////////////////////////////
    ///////store_L 버튼클릭시 같이 사라지기//////

    $('.inner_img').eq(0).css({
        left: 0
    });

    let bang1 = 1;
    let timer1 = 1000;
    
    $('.S_BTN_R').click(function(){ 
        slide(bang1 % count, '100%', (bang1 - 1) % count, '-100%');
        bang1+=1; 
    });
    $('.S_BTN_L').click(function(){
        bang1-=1; 
        slide((bang1 - 1) % count, '-100%', bang1 % count, '100%') 
    });

    function slide(a_bang, d_pos, b_bang, e_pos) { 
        btn_init();

        console.log("a_bang:" +a_bang)
        // console.log("inner_img-"+inner_img)
        

        // 들어오는판
        $('.inner_img').eq(a_bang).css({
            left: d_pos
        }).animate({
            left: 0
        }, timer1);

        $('.store_L').eq(a_bang).css({
            left: d_pos
        }).animate({
            left: 0
        }, timer1);

        // 나가는판
        $('.inner_img').eq(b_bang).animate({
            left: e_pos
        }, timer);

        $('.store_L').eq(b_bang).animate({
            left: e_pos
        }, timer);
    }

    ////////////store_L/////////////
    /////////////////////////
    // function slide(f_bang, h_pos, g_bang, i_pos) { 
    //     btn_init();

    //     console.log("f_bang:" +f_bang)

    //     // 들어오는판
    //     $('.inner_img').eq(f_bang).css({
    //         left: h_pos
    //     }).animate({
    //         left: 0
    //     }, timer1);

    //     // 나가는판
    //     $('.inner_img').eq(g_bang).animate({
    //         left: i_pos
    //     }, timer);
    // }

    /////////////////////////////////////////
    // /////////////brand_box 색이 가렸다 나타났다/////////

    setTimeout(()=> {
        $('.red ').animate({
            right: '0'
        }, 400).delay(200).animate({
            right: '100%'
        }, 400);
        $('.img1').delay(800).fadeIn(400)
 
        $('.box_gray ').delay(200).animate({
            left: '0'
        }, 400)

        $('.b_co').delay(600).animate({
            right: '0',
            opacity: 1
        }, 400)

    }, 500)
});