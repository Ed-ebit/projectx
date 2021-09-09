
/* === Sidebar Nav. === */

$(document).ready(function(){
  var menu_btn = $("#menu-btn");
  var sidebar = $("#sidebar");
  var container = $(".my-container");
  menu_btn.click(function(){
    sidebar.toggleClass("active-nav");
    container.toggleClass("active-cont");
  });
});

/* menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
}); */

//  $('.carousel').carousel({
//    interval: 2000
//  })