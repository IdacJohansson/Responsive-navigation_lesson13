function openNav() {
    document.getElementById("sid-bar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
  }

  function closeNav() {
    document.getElementById("sid-bar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


// function toggleIcon() {
//     const sideNav = document.getElementById("sid-bar");
//     const menuIcon = document.getElementById("menu-icon");
  
//     if (sideNav.style.width === "250px") {
//       sideNav.style.width = "0";
//       menuIcon.classList.remove("fa-xmark");
//       menuIcon.classList.add("fa-bars");
//     } else {
//       sideNav.style.width = "250px";
//       menuIcon.classList.remove("fa-bars");
//       menuIcon.classList.add("fa-xmark");
//     }
//   }