// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardsAttach = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {

        response.data.articles.javascript.forEach((item) => {
           cardsAttach.append(cardMaker(item))
       })
       response.data.articles.bootstrap.forEach((item) => {
        cardsAttach.append(cardMaker(item))
    })
    response.data.articles.jquery.forEach((item) => {
        cardsAttach.append(cardMaker(item))
    })
    response.data.articles.node.forEach((item) => {
        cardsAttach.append(cardMaker(item))
    })
    response.data.articles.technology.forEach((item) => {
        cardsAttach.append(cardMaker(item))
    })
        
    console.log(response)
}).catch(error => {
    console.log({error})
    console.log({error: "there was and error"})
})


function cardMaker(obj) {

    const card = document.createElement('div')
    const headLine = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorName = document.createElement('span')

    card.className = ('card')
    headLine.className = ('headline')
    author.className = ('author')
    imgContainer.className = ('img-container')

    headLine.textContent = obj.headline
    author.textContent = obj.authorName
    img.src = obj.authorPhoto

    card.appendChild(headLine)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authorName)

    card.addEventListener('click', (event) => {
        console.log(headLine)
    })

return  card
}
cardsAttach.appendChild(cardMaker())