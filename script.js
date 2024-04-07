import { projects, announcements, trendings } from "./import-this.js";

const projectCards = document.querySelector(".projects");
const announcementCards = document.querySelector(".announcements");
const trendingCards = document.querySelector(".trending");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.innerHTML = `<h3>${project.name}</h3>
  <p>${project.description}</p>
  <div class="icons">
    ${project.icons
      .map((icon) => {
        return icon;
      })
      .join("")}
  </div>`;
  projectCards.appendChild(card);
});

announcements.forEach((announcement) => {
  const card = document.createElement("div");
  card.classList.add("announcement-card");
  card.innerHTML = `<h3>${announcement.name}</h3>
  <p>${announcement.description}</p>`;
  announcementCards.appendChild(card);
});

trendings.forEach((trend) => {
  const card = document.createElement("div");
  card.classList.add("trending-card");
  card.innerHTML = `<img class="active-user" src="${trend.pfp}"/>
  <div>
    <h3>${trend.name}</h3>
    <p>${trend.description}</p>
  </div>`;
  trendingCards.appendChild(card);
})

