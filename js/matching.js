var audio = new Audio("assets/audio/Carefree.mp3")
function start() {
  audio.play()
  audio.volume(0.8)
}
const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let matchedCard = 0;
let disableDeck = false;

function flipCard(e) {
  let clickedCard = e.target;
  if (clickedCard !== cardOne && !disableDeck) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector("#image").src,
      cardTwoImg = cardTwo.querySelector("#image").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  if (img1 === img2) {
    matchedCard++;
    if (matchedCard == 6) {
    //   setTimeout(() => {
        
        window.close();
        window.open("finishmatchinggame.html", "_self");
    //   }, 1000);
    }
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    return (disableDeck = false);
  }
  setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 1200);
}

function shuffleCard() {
  matchedCard = 0;
  cardOne = cardTwo = "";
  let arr = [1,2,3,1,2,3,1,2,3,1,2,3]
  arr.sort(() => Math.random() > 0.5 ? 1 : -1); //sorting array randomly

  cards.forEach((card,i) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector("#image");
    imgTag.src = `assets/img/img-${arr[i]}.png`
    card.addEventListener("click", flipCard);
  });
}

shuffleCard()

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
