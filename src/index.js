// write your code here

//making components lobally accessible 
const ramenMenu = document.querySelector(`#ramen-menu`);
const ramenNameBox = document.querySelector(`.name`);
const restaurauntNameBox = document.querySelector(`.restaurant`);
const detailImage = document.querySelector(`.detail-image`);
const ratingBox = document.querySelector(`#rating-display`);
const commentBox = document.querySelector(`#comment-display`);
const ramenForm = document.querySelector(`#new-ramen`);
const newNameBox = document.querySelector(`#new-name`);
const newRestaurantBox = document.querySelector(`#new-restaurant`);
const newImgBox = document.querySelector(`#new-image`); 
const newRatingBox = document.querySelector(`#new-rating`);
const newCommentBox = document.querySelector(`#new-comment`);

//requesting ramen objects from server
fetch(`http://localhost:3000/ramens`)
.then((ramens) => ramens.json())
.then(ramenData => renderRamen(ramenData));

//renderRamen inside ramen-menu
function renderRamen(ramenData){
  //console.log(ramenData);
  ramenData.forEach(bowl => {  //rendering each bowl
    const ramenImg = document.createElement(`img`)
    ramenImg.src = bowl.image;
    ramenImg.details = { //adding  details  to it so they are accessible 
      name:bowl.name, 
      restaurant: bowl.restaurant,
      comment: bowl.comment,
      rating: bowl.rating,
      id: bowl.id,
    }
    ramenImg.addEventListener(`click`, event => renderDetail(event)); // adding event listener to the remen
    ramenMenu.appendChild(ramenImg)
  });
};

// making ramen details vesible 
function renderDetail(event){
  //console.log(`${e.target.details.name} has been clicked`);
  detailImage.src= event.target.src;
  ratingBox.innerText = event.target.details.rating;
  commentBox.innerText = event.target.details.comment;
  restaurauntNameBox.innerText = event.target.details.restaurant;
  ramenNameBox.innerText = event.target.details.name;
};


ramenForm.addEventListener(`submit`,event => createRamen(event));

function createRamen(event){
  event.preventDefault();
  const newBowl = {
    name:newNameBox.value,
    restaurant: newRestaurantBox.value,
    image:newImgBox.value,
    rating:newRatingBox.value,
    comment:newCommentBox.value,
  }
  newBowlArray = [newBowl]; //making an array for renderRamen
  renderRamen(newBowlArray)
}

