const skillsImg = document.getElementById("skills_shema");
const projectsImg = document.getElementById("projects");
// const project1 = document.getElementById("project_1");
// const project2 = document.getElementById("project_2");
// const title1 = document.querySelectorAll(".tittle_project_1");
// const title2 = document.querySelectorAll(".tittle_project_2");
// const des1 = document.querySelector(".des_project_1");
// const des2 = document.querySelector(".des_project_2");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 900) {
    skillsImg.style.opacity = "1";
  }
  if (window.scrollY > 2100) {
    //projectsImg.style.marginLeft = "9%";
    projectsImg.style.opacity = "1";
    // project1.style.opacity = "1";
    // project2.style.opacity = "1";
    // title1.style.opacity = "1";
    // title2.style.opacity = "1";
    // des1.style.opacity = "1";
    // des2.style.opacity = "1";
  }
});
