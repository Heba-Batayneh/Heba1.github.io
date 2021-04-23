
// شيفرة الشرط الخاصة بتشغيل الفيديو
var myVideo = document.getElementById("video1");
function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

// والتي تظهر رسالة خطأ عندما يقوم المستخدم بإدخال معلومات خاطئة او لا يدخل المعلومات في الحقل الاجباري validate() شيفرة التابع

$(document).ready(function () {
    $(function () {
        $("#commentForm").validate();
    });
});