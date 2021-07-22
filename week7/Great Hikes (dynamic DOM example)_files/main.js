import { hikes } from './hikes.js';
import { Comment } from './comment.js';
//https: //stackoverflow.com/questions/5873624/parse-json-string-into-a-particular-object-prototype-in-javascript

const saveToLocalStorage = ( hikeNameId ) => {
    let comment = document.getElementById(hikeNameId + "commentArea").value;
    let commentObj = new Comment(comment, "hike", getHikeNameFromId(hikeNameId));
    //Get current data from localStorage

    let jsonCommentsObj = localStorage.getItem('comments');

    let commentsObj = {};
    try{
        //Try to create an object from the data stored in localStorage
        commentsObj = JSON.parse(jsonCommentsObj); 

        //Check if the hikes key already exist       
        if(commentsObj[commentObj.type] != undefined){
            commentsObj[commentObj.type].push(commentObj);
        }
        else{
            commentsObj[commentObj.type] = [commentObj];
        }
    }
    catch(e){
        console.log(e)
        commentsObj = {
            hike : [commentObj]
        }
    }

    jsonCommentsObj = JSON.stringify(commentsObj);
    localStorage.setItem("comments", jsonCommentsObj);
    window.location.reload()

 
}

function getFromLocalStorage(){
    let jsonCommentObj = localStorage.getItem('comments');
    let commentsObj = {};
    let hikeComments = [];
    try{
        commentsObj = JSON.parse(jsonCommentObj);

        console.log("This is line 45");
        console.log(commentsObj);
        if(commentsObj["hike"] != undefined){
            hikeComments = commentsObj["hike"];
        }
    }
    catch(e){
        console.log("Unable to parse the data in localStorage");
    }
    
    hikeComments.forEach( comment=> {
        console.log(comment.commentBody)
    })
    console.log(hikeComments)
    return hikeComments;
}


const imgBasePath = "//byui-cit.github.io/cit261/examples/";
//on load grab the array and insert it into the page
window.addEventListener("load", () => {
    showHikeList();
});

function showHikeList() {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    renderHikeList(hikes, hikeListElement);
    renderCommentList(getFromLocalStorage());
    renderCommentForms(hikes)
    
}

function getHikebyComment(comment) {
    const hikeElement = document.getElementById(idFromName(comment.contentName))
    return hikeElement
}


function renderSingleComment(comment){
    let item = document.createElement('div');
    item.classList.add('comment')
    
    item.innerHTML= `
    <div class="hikeComment">
        <div class="commentBody">
            <p>
            ${comment.commentBody}
            </p>
        </div>
        <div class="commentDate">
            <p>
            ${comment.date}
            </p>
        </div>
    </div>`;
    return item;
}

function renderCommentList(comments){
    comments.forEach(comment => {
        try{
        let parent = getHikebyComment(comment)
        parent.appendChild(renderSingleComment(comment))}
        catch(e){
            console.log(e)
            console.log("No comments")
        }
    })

}

function idFromName(name){
    let dashed = name.replace(" ", "-");
    return dashed;
}

function getHikeNameFromId(hike){
    let undashed = hike.replace("-", " ");
    return undashed;
}
function renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
        parent.appendChild(renderOneHike(hike));
    });
}

function renderCommentForms(hikes){
    hikes.forEach(hike => {
        let hikeNameId = idFromName(hike.name)
        let buttonId = idFromName(hike.name) + "submit"
        console.log(buttonId)
        let parent = document.getElementById(hikeNameId)
        let item = singleCommentForm(hike)
        parent.appendChild(item)
        document.getElementById(buttonId).addEventListener("click", () => {
            saveToLocalStorage( hikeNameId);
        });
        
    })
}

function singleCommentForm(hike){
    let item = document.createElement('div');
    let hikeNameId = idFromName(hike.name);
    let commentAreaId = hikeNameId + "commentArea";
    let inputButtonId = hikeNameId + "submit";

    item.innerHTML = 
    `<label>Insert your comment</label>
    <textarea id="${commentAreaId}" row="4" cols="50"></textarea>
    <input id="${inputButtonId}" type="button" value="Send your comment"></input>`
    return item
}

function renderOneHike(hike) {
    const item = document.createElement("li");
    item.classList.add('hike')
    let hikeId = idFromName(hike.name);
    item.innerHTML = ` <h2>${hike.name}</h2>
    <div id=${hikeId} class="hikeContent">
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

let navList = document.getElementById("gx-nav-list")
let featListRaw = navList.children
let featureList = []

for (var i = 0, len = featListRaw.length; i < len; i++ ) {
    featureList.push(featListRaw[i].getAttribute("data-section"))
}
let stringifiedFeatList = featureList.join("\n")