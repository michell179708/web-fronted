import { hikes } from './hikes.js';
//https: //stackoverflow.com/questions/5873624/parse-json-string-into-a-particular-object-prototype-in-javascript



const imgBasePath = "//byui-cit.github.io/cit261/examples/";
//on load grab the array and insert it into the page
window.addEventListener("load", () => {
    showHikeList();
});

function showHikeList() {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    renderHikeList(hikes, hikeListElement);
}

function renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
        parent.appendChild(renderOneHike(hike));
    });
}

function renderOneHike(hike) {
    const item = document.createElement("li");
    item.classList.add('hike')

    item.innerHTML = ` <h2>${hike.name}</h2>
    <div class="hikeContent">
        <div class="image hikeImage"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
        <div class="hikeText">
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
        </div>
    </div>`;

    return item;
}