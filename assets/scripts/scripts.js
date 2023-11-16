// GLOBALS -----------------------------------------------------------
const PAGE_LEFT = document.querySelector('.page-left');
const PAGE_RIGHT = document.querySelector('.page-right');
console.log(PAGE_LEFT);
console.log(PAGE_RIGHT);

const DEFAULT_STORY = {
    title: "'The Beginning'",
    author: "Ian Scott",
    type: "haiku",
    content: "Love never-ending,\nOne's and zero's create all,\nA gift for my world."
}
// NAVBAR FUNCTION DECLARATIONS --------------------------------------

// PLANNING
/**
 * Will write navbar search functions and 
 * onclick listeners at a later date when more stories are added
 */


// BOOK FUNCTION DECLARATIONS ----------------------------------------

// Assign default story
function assignDefault() {
    PAGE_LEFT.innerText = DEFAULT_STORY.title + "\n" + DEFAULT_STORY.author + "\nA " + DEFAULT_STORY.type;
    PAGE_RIGHT.innerText = DEFAULT_STORY.content;
}


// SEARCH FUNCTIONS --------------------------------------------------
// FUNCTION CALLS ----------------------------------------------------
assignDefault();
