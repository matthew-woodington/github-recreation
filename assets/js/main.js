import { GITHUB_TOKEN } from "./token.js";

function generateUser(data) {
  const source = document.querySelector("#user-sidebar-template").innerHTML;
  const template = Handlebars.compile(source);
  const html = template(data);
  document.querySelector(".sidebar").insertAdjacentHTML("afterbegin", html);
}

function generateRepoNum(data) {
  const numSource = document.querySelector("#repo-num-template").innerHTML;
  const numTemplate = Handlebars.compile(numSource);
  const numHtml = numTemplate(data);
  document.querySelector(".repo-page").insertAdjacentHTML("beforeend", numHtml);
}

fetch("https://api.github.com/users/matthew-woodington")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    generateUser(data);
    generateRepoNum(data);
  });

function generateOrgs(data) {
  const source = document.querySelector("#organizations-template").innerHTML;
  const template = Handlebars.compile(source);
  const html = template({ orgs: data });
  document.querySelector(".organizations").insertAdjacentHTML("afterbegin", html);
}

fetch("https://api.github.com/users/matthew-woodington/orgs")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    generateOrgs(data);
  });

function generateRepos(data) {
  const source = document.querySelector("#repo-list-template").innerHTML;
  const template = Handlebars.compile(source);
  const html = template({ repos: data });
  document.querySelector(".repository-list").insertAdjacentHTML("afterbegin", html);
}

fetch("https://api.github.com/users/matthew-woodington/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    generateRepos(data);
  });

function changeDateFormat(data) {
  let repoList = data.map((object) => (object.updated_at = object.updated_at.toLocaleString()));
  return repoList;
}
