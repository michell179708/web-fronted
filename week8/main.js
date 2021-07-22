// async function renderStarshipPage() {
//     let 
// }

// async function getStarshipData() {
//     let url = `https://swapi.dev/api/starships/${id}`;

//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         return data;
//     } catch (e) {
//         console.error(err)
//     }
// }

// async function renderStarship(ship) {
//     return
// }

function getPerson(id) {
    let url = `https://swapi.dev/api/people/${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err)
                //Render the error to the screen
        })
}

function getPeople(page = 1) {
    let url = `https://swapi.dev/api/people/?page=${page}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            renderPage(data, renderPeople, getPeople);
            console.log(data);
        })
        .catch(err => {
            console.error(err)
                //Render the error to the screen
        })
}

// function getStarship(id) {
//     let url = `https://swapi.dev/api/people/${id}`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
//         .catch(err => {
//             console.error(err)
//                 //Render the error to the screen
//         })
// }

function getStarships(page = 1) {
    let url = `https://swapi.dev/api/starships/?page=${page}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            renderPage(data, renderStarships, getStarships);
            console.log(data);
        })
        .catch(err => {
            console.error(err)
                //Render the error to the screen
        })
}

// function renderStarshipPage(data) {
//     let currPage = getCurrPage(data);
//     let navHTML = renderNav(currPage, data);
//     let starshipHTML = renderStarships(data);
//     document.getElementById("results").innerHTML = `${starshipHTML}${navHTML}`;
//     if (currPage > 1) {
//         document.getElementsByClassName("Previous")[0].addEventListener('mouseup', (event) => {
//             getPeople(currPage - 1);
//         })
//     }
//     if (currPage <= 2) {
//         document.getElementsByClassName("Next")[0].addEventListener('mouseup', (event) => {
//             getPeople(currPage + 1);
//         })
//     }
// }

function renderStarships(data) {
    return `<div class="Starships">
    ${data.map(starship => {
        return `<div class="Starship">
            <h1>${starship.name}</h1>
            ${renderElement("Model:", starship.model, "StarshipAttribute")}
            ${renderElement("Manufacturer:", starship.manufacturer, "StarshipAttribute")}
            ${renderElement("Cost in Credits:", starship.cost_in_credits, "StarshipAttribute")}
            ${renderElement("Length:", starship.nlengthame, "StarshipAttribute")}
            ${renderElement("Crew:", starship.crew, "StarshipAttribute")}
            ${renderElement("Passengers:", starship.passengers, "StarshipAttribute")}
            ${renderElement("Cargo Capacity:", starship.cargo_capacity, "StarshipAttribute")}
            ${renderElement("Consumables:", starship.consumables, "StarshipAttribute")}
            ${renderElement("Hyperdrive Rating:", starship.hyperdrive_rating, "StarshipAttribute")}
            ${renderElement("MGLT:", starship.MGLT, "StarshipAttribute")}
            ${renderElement("Starship Class:", starship.starship_class, "StarshipAttribute")}
            ${starship.pilots.map(i => {
                
                /*peopleHTML = '<div class="Person">';
                peopleHTML += renderElement("Name: ", person.name, "PersonAttribute")
                peopleHTML += renderElement("Height: ", person.height, "PersonAttribute")
                peopleHTML += renderElement("Mass: ", person.mass, "PersonAttribute")
                peopleHTML += renderElement("Hair Color: ", person.hair_color, "PersonAttribute")
                peopleHTML += renderElement("Skin Color: ", person.skin_color, "PersonAttribute")
                peopleHTML += renderElement("Eye Color: ", person.eye_color, "PersonAttribute")
                peopleHTML += renderElement("Birth Year: ", person.birth_year, "PersonAttribute")
                peopleHTML += renderElement("Gender: ", person.gender, "PersonAttribute")
                peopleHTML += `</div>`;
                return peopleHTML; */
            }).join('')}
        </div>`
    }).join('')}</div>`
}

function parseNextUrl(data) {
    return data.next
}

function parsePeople(data) {
    return data.results
}

function RenderPerson(person){
    let peopleHTML = '<div class="Person">';
    peopleHTML += renderElement("Name: ", person.name, "PersonAttribute")
    peopleHTML += renderElement("Height: ", person.height, "PersonAttribute")
    peopleHTML += renderElement("Mass: ", person.mass, "PersonAttribute")
    peopleHTML += renderElement("Hair Color: ", person.hair_color, "PersonAttribute")
    peopleHTML += renderElement("Skin Color: ", person.skin_color, "PersonAttribute")
    peopleHTML += renderElement("Eye Color: ", person.eye_color, "PersonAttribute")
    peopleHTML += renderElement("Birth Year: ", person.birth_year, "PersonAttribute")
    peopleHTML += renderElement("Gender: ", person.gender, "PersonAttribute")
    peopleHTML += `</div>`;
    return peopleHTML;
}

function renderPeople(people) {
    let peopleHTML = '<div class="People">';
    people.forEach(person => {
        // peopleHTML += `<div class ="attribute">Name: ${person.name}</div>, Height: ${person.height}, Mass: ${person.mass}</li>`;
        // peopleHTML += `Hair Color: ${person.hair_color}, Height: ${person.skin_color}, Mass: ${person.eye_color}</li>`;
        // peopleHTML += `Birth Year: ${person.birth_year}, Height: ${person.gender}</div>`;
        
        // peopleHTML += '<div class="Person">';
        // peopleHTML += renderElement("Name: ", person.name, "PersonAttribute")
        // peopleHTML += renderElement("Height: ", person.height, "PersonAttribute")
        // peopleHTML += renderElement("Mass: ", person.mass, "PersonAttribute")
        // peopleHTML += renderElement("Hair Color: ", person.hair_color, "PersonAttribute")
        // peopleHTML += renderElement("Skin Color: ", person.skin_color, "PersonAttribute")
        // peopleHTML += renderElement("Eye Color: ", person.eye_color, "PersonAttribute")
        // peopleHTML += renderElement("Birth Year: ", person.birth_year, "PersonAttribute")
        // peopleHTML += renderElement("Gender: ", person.gender, "PersonAttribute")
        // peopleHTML += `</div>`;

        peopleHTML += RenderPerson(person);

        // peopleHTML += '<li class="TwoColumn">'
        // peopleHTML += Object.entries(person).map(([key, value]) => {
        //     if (value.includes("http")) {
        //         // return value.split(',').map(e => {
        //         //     return `<a href="${e}">Link</a>`;
        //         // }).join('');
        //         //return `<a href="${value}">${key}</a>`

        //     } else {
        //         return `<div>${key}: </div><div> ${value}</div>`
        //     }
        // }).join('');
        // peopleHTML += "</li>"
    });

    peopleHTML += "</div>"
    console.log(peopleHTML)

    return peopleHTML;
}

function renderElement(key, value, c) {
    return `<div class="${c}">${key}: ${value}</div>`;
}
/*
for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
*/

// async function getStarships(starshipUrls) {
//     starshipUrls.forEach(starshipUrl => {

//     });
// }

// async function getStarship() {

// }

// function getStarships() {
//     return 0;
// }

function choseStarships() {
    getStarships()
}

function chosePeople() {
    getPeople(1);
}

function renderNav(pageNum, data) {
    let numberOfPages = parseInt(Math.ceil(data.count / 10));
    
    let container = document.createElement('div');
    container.setAttribute("class", "NavContainer")

    let nav = document.createElement('div');
    nav.setAttribute("class", "Nav")

    let page = document.createElement('div');
    page.setAttribute("class", "PageButtons")
    
 
    let navHTML = '<div class="NavContainer">'
    let prevButton = '<button class="NavButton Previous"> Previous </button>';
    let homeButton = '<button class="NavButton Home"> Home </button>';
    let nextButton = '<button class="NavButton Next"> Next </button>';
    
    for(let i=1; i < numberOfPages+1; i++){
        let pageButton = document.createElement('button');
        pageButton.setAttribute("class", "PageButton")
        pageButton.innerHTML = i;
        pageButton.setAttribute("page", i);
        page.appendChild(pageButton);
    }

    if (data.next == null) {
        nav.innerHTML = `${prevButton} ${homeButton}`
    }

    if (pageNum >= 2) {
        nav.innerHTML = `${prevButton} ${homeButton} ${nextButton}`
    }
    if (pageNum <= 1) {
        nav.innerHTML = `${homeButton} ${nextButton} `
    }

    container.appendChild(nav)
    container.appendChild(page)
    
    return container;
}

//http://swapi.dev/api/people/?page=1
function getCurrPage(data) {
    let pageNumber = 0;

    if (data.next !== null) {
        let next = data.next.split('=')
        pageNumber = parseInt(next[1]) - 1;

    } else if (data.previous !== null) {
        let prev = data.previous.split('=')
        pageNumber = parseInt(prev[1]) + 1;

    }
    return pageNumber
}

function renderWelcome() {
    let welcomePage = '<div class="Nav"><button class="NavButton Next" onclick="choseStarships()">Starships</button> <button class="NavButton Previous" onclick="chosePeople()">People</button></div>'
    document.getElementById("results").innerHTML = welcomePage;
}

function renderPage(data, renderFunction, getData) {
    let currPage = getCurrPage(data);
    let navElement = renderNav(currPage, data);
    let peopleHTML = renderFunction(data.results);
    document.getElementById("results").innerHTML = `${peopleHTML}`;
    document.getElementById("results").appendChild(navElement);

    if (currPage > 1) {
        document.getElementsByClassName("Previous")[0].addEventListener('mouseup', (event) => {
            getData(currPage - 1);
        })
    }
    if (currPage <= 2) {
        document.getElementsByClassName("Next")[0].addEventListener('mouseup', (event) => {
            getData(currPage + 1);
        })
    }
    document.getElementsByClassName("Home")[0].addEventListener('mouseup', (event) => {
        if (currPage <= 2) {
            renderWelcome();
        }
    })

    document.querySelectorAll(".PageButton").forEach(button => {
        button.addEventListener('mouseup', (event) => {
            let page = parseInt(button.getAttribute("page"));
            getData(page);
        })
    })
}
//getPerson(1)
// getPeople()
renderWelcome()