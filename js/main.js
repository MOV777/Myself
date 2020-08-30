$(function () {
	$(window).scroll(function() {
	    $('#ability .marker-time').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__zoomInLeft");
	        }
	    });
    });
    $(window).scroll(function() {
	    $('#ability .marker-trip').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__zoomIn");
	        }
	    });
    });
    $(window).scroll(function() {
	    $('#ability .marker-values').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__zoomInRight");
	        }
	    });
    });
    $(window).scroll(function() {
	    $('#forms .forward').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__flip");
	        }
	    });
    });
    $(window).scroll(function() {
	    $('#forms .btn-form').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__wobble");
	        }
	    });
    });
})
var btn = document.getElementById('btn');
btn.onclick = function(){
    alert("Давайте идти к мечте вместе!)")
}