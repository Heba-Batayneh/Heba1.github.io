//لجعل النسب المؤوية تعمل فقط عند الوصول إليها، يمكنك عمل التالي:
// أولًا إضافة الدالة التالية للكود، بحيث تقوم هذه الدالة من التحقق من أن عنصرًا معينًا يظهر في الصفحة أو لا.
function checkVisible(elm, eval) {
    eval = eval || "visible";
    var vpH = $(window).height(),
        st = $(window).scrollTop(),
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (eval == "above") return ((y < (vpH + st)));
}


$(window).scroll(function(){
    // على القائمة عند التمرير أكثر من 200 بكسل noTransparrent تطبيق صنف جديد 
    if($(this).scrollTop()>=200){
        $("#navBar").addClass("noTransparrent");
     }
    else{
        $("#navBar").removeClass("noTransparrent");
     }

});

// إضافة فترة زمنية مقدارها 800 ميلي ثانية عند التنقل بين عناصر القائمة
// تم إنقاص مقدار 90 بكسل من مكان التنقل حتى يتناسب مع مكان كل قسم 
$(document).ready(function(){
    $("a.scroll").on('click', function(event) {
/* العنصر الذي ياخذ ال href="#"*/
        var hash = this.hash; 

        $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 800, function(){});
    
    });
        //عند الوصول للجزء statistics سيتم تحميل النسب المئويه للدوائر 
    $('.circle').circleProgress({
        startAngle: -Math.PI / 2,
        fill: "#0575e6"
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        //ياخد النسبه من هنا ليتم تحميلها 
        $(this).find('span').html(Math.round(stepValue * 100) + '%');
    });
        // commentForm على النموذج validate تطبيق التابع
    $(function () {
        $("#commentForm").validate();
    });

});




