// Opens side-bar and hides burger-icon

function openNav() {
  document.getElementById("sid-bar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";

  document.getElementById("burger").style.display = "none";
}

// Closes side-bar and displays burger-icon

function closeNav() {
  document.getElementById("sid-bar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

  document.getElementById("burger").style.display = "block";
}

// Toggles the burger-icon so dropdown shows

function toggleIcon() {
  const dropDownContent = document.getElementById("dropdownContent");
  const menuIcon = document.getElementById("burger-icon");

  dropDownContent.classList.toggle("show");

  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
}

// Adds new links in dropdown and removes links over screen width of 768px

function addLinksTabletandMobile() {
  const screenWidth = window.innerWidth;
  const dropdownList = document.getElementById("dropdownContent");

  if (screenWidth < 768 && !document.getElementById("aboutLink")) {
    const li1 = document.createElement("li");
    li1.className = "dropdown-content_li";
    li1.id = "aboutLink";
    const a1 = document.createElement("a");
    a1.className = "dropdown-content__link";
    a1.href = "/index.html"; // for test
    a1.textContent = "ABOUT";
    li1.appendChild(a1);
    dropdownList.appendChild(li1);

    const li2 = document.createElement("li");
    li2.className = "dropdown-content__li";
    li2.id = "documentationLink";
    const a2 = document.createElement("a");
    a2.className = "dropdown-content__link";
    a2.href = "#";
    a2.textContent = "DOCUMENTATION";
    li2.appendChild(a2);
    dropdownList.appendChild(li2);

    const li3 = document.createElement("li");
    li3.className = "dropdown-content__li";
    li3.id = "contactLink";
    const a3 = document.createElement("a");
    a3.className = "dropdown-content__link";
    a3.href = "#";
    a3.textContent = "CONTACT";
    li3.appendChild(a3);
    dropdownList.appendChild(li3);
  } else {
    const newLinks = ["aboutLink", "documentationLink", "contactLink"];
    newLinks.forEach((id) => {
      const newLinkElements = document.getElementById(id);
      if (newLinkElements) {
        dropdownList.removeChild(newLinkElements);
      }
    });
  }
}
window.addEventListener("resize", addLinksTabletandMobile);
window.addEventListener("load", addLinksTabletandMobile);