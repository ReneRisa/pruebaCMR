
    let fun = $(function () {
      $(document).scroll(function () {
        let $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() >=1 );
        //console.log(`scrollTop : ${$(this).scrollTop()} y scrollNav : ${$nav.height()}`)
    })
    return false;
  })
    
    
  let span = document.querySelector('.navbar-toggler');
  span.addEventListener("click", () => {
      console.log(fun())
  })
 
  
  
  
  let btn = document.querySelector('.btnTest');
  btn.addEventListener("click", (e) =>{
    alert("Click")
  })