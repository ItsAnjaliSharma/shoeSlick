const cardsContainer = document.querySelector('.cards');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let cardIndex = 0;

    function scrollCards(direction) {
        const cardWidth = document.querySelector('.card').offsetWidth + 20; // Including margin
        const maxScroll = (cardsContainer.scrollWidth - cardsContainer.clientWidth);

        cardIndex += direction;
        if (cardIndex < 0) {
            cardIndex = 0;
        } else if (cardIndex * cardWidth > maxScroll) {
            cardIndex = Math.floor(maxScroll / cardWidth);
        }

        cardsContainer.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
    }

function toggleMenu() {
    var x = document.getElementsByTagName("ul")[0];
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}