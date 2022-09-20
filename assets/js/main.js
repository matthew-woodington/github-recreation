import { userData } from "./user.js";
import { orgsData } from "./orgs.js";
import { repoData } from "./repo.js";

/// user ///
const sourceUser = document.querySelector("#user-sidebar-template").innerHTML;
const templateUser = Handlebars.compile(sourceUser);
const htmlUser = templateUser(userData);
document.querySelector(".sidebar").insertAdjacentHTML("afterbegin", htmlUser);

/// orgs ///
const sourceOrgs = document.querySelector("#organizations-template").innerHTML;
const templateOrgs = Handlebars.compile(sourceOrgs);
const htmlOrgs = templateOrgs(orgsData);
document.querySelector(".organizations").insertAdjacentHTML("afterbegin", htmlOrgs);

/// repo ///
const sourceRepo = document.querySelector("#repo-list-template").innerHTML;
const templateRepo = Handlebars.compile(sourceRepo);
const repos = {
  repoData,
};
const htmlRepo = templateRepo(repos);
document.querySelector(".repository-list").insertAdjacentHTML("afterbegin", htmlRepo);

/// change color ///
// const codeType = document.querySelector(".code-type");
// const codeColor = document.querySelector("code-color");

// function changeLanguageColor() {
//   if ((codeType.innerHTML = "HTML")) {
//     codeColor.style.color = "#D25735";
//   } else if ((codeType.innerHTML = "JavaScript")) {
//     codeColor.style.color = "#EEE170";
//   } else if ((codeType.innerHTML = "CSS")) {
//     codeColor.style.color = "#523E78";
//   }
// }

// changeLanguageColor();
