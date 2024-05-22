$(document).ready(function() {
    $("#logo").hover(function(){
        const element = document.querySelector("#logo");
        element.style.setProperty("--animate-duration", "1.5s");
        element.classList.add("animate__animated", "animate__heartBeat");
    },
    function() {
        const element = document.querySelector("#logo");
        element.classList.remove("animate__animated", "animate__heartBeat");
    });

    $("#title").hover(function(){
        const element = document.querySelector("#title");
        element.style.setProperty("--animate-duration", "2.5s");
        element.classList.add("animate__animated", "animate__bounce");
    },
    function() {
        const element = document.querySelector("#title");
        element.classList.remove("animate__animated", "animate__bounce");
    });

    $("#magnifying-glass").hover(function(){
        const element = document.querySelector("#magnifying-glass");
        element.style.setProperty("--animate-duration", "1.5s");
        element.classList.add("animate__animated", "animate__heartBeat");
    },
    function() {
        const element = document.querySelector("#magnifying-glass");
        element.classList.remove("animate__animated", "animate__heartBeat");
    });

    $("#title_news").hover(function(){
        const element = document.querySelector("#title_news");
        element.style.setProperty("--animate-duration", "2.0s");
        element.classList.add("animate__animated", "animate__heartBeat");
    },
    function() {
        const element = document.querySelector("#title_news");
        element.classList.remove("animate__animated", "animate__heartBeat");
    });

    $("#title_gallery").hover(function(){
        const element = document.querySelector("#title_gallery");
        element.style.setProperty("--animate-duration", "2.0s");
        element.classList.add("animate__animated", "animate__wobble");
    },
    function() {
        const element = document.querySelector("#title_gallery");
        element.classList.remove("animate__animated", "animate__wobble");
    });

    $("#title_history").hover(function(){
        const element = document.querySelector("#title_history");
        element.style.setProperty("--animate-duration", "2.0s");
        element.classList.add("animate__animated", "animate__rubberBand");
    },
    function() {
        const element = document.querySelector("#title_history");
        element.classList.remove("animate__animated", "animate__rubberBand");
    });

    $("#history1").hover(function(){
        const element = document.querySelector("#history1");
        element.style.setProperty("--animate-duration", "2.0s");
        element.classList.add("animate__animated", "animate__heartBeat");
    },
    function() {
        const element = document.querySelector("#history1");
        element.classList.remove("animate__animated", "animate__heartBeat");
    });

    $("#history2").hover(function(){
        const element = document.querySelector("#history2");
        element.style.setProperty("--animate-duration", "2.0s");
        element.classList.add("animate__animated", "animate__heartBeat");
    },
    function() {
        const element = document.querySelector("#history2");
        element.classList.remove("animate__animated", "animate__heartBeat");
    });

    $("#history3").hover(function(){
        const element = document.querySelector("#history3");
        element.style.setProperty("--animate-duration", "2.0s");
        element.classList.add("animate__animated", "animate__heartBeat");
    },
    function() {
        const element = document.querySelector("#history3");
        element.classList.remove("animate__animated", "animate__heartBeat");
    });

});


