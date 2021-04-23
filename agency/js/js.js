// لتغير خصائص القائمة عند النزول إلى الأسفل noTransparrent إضافة الخاصية 
$(window).scroll(function(){
    if($(this).scrollTop()>=500){
       $("#navBar").addClass("noTransparrent");
     }
     else{
       $("#navBar").removeClass("noTransparrent");
     }
 });

 // تحرك الصفحة بين عناصر القائمة ضمن فترة زمنية محددة
$(document).ready(function(){
    $("a.scroll").on('click', function(event) {
 
         var hash = this.hash;
 
         $('html, body').animate({scrollTop: $(hash).offset().top - 100}, 800, function(){}); 
         // تم تحديد مدة الانتقال للموقع المراد من الصفحة بمدة 800
     
     });

     $(".timer").countTo(); // لوضع عداد

     $("#commentForm").validate(); //للتحقق من المدخلات او من الحقول المطلوب ملؤها 
 });   