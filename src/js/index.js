import '../css/style.css';
import 'normalize.css'

let input = document.querySelector('.input');

// LOAD
window.addEventListener('load', () => {
    input.focus()
})



// SEARCH
input.addEventListener('input', () => {
    if (!input.value) {
        searchOffer.innerHTML = '';
        return;
    }

    let request = input.value;
    let queryString = `${request}&per_page=5`;

    fetch(`https://api.github.com/search/repositories?q=${queryString}`)
        .then(data => {
            if (!data.ok) {
                alert('wait a few sec')
            } else return data
        })
        .then(data => data.json())
        .then(data => {
            let fragment = document.createDocumentFragment();
            for (const el of data.items) {
                let li = document.createElement('li');
                let a = document.createElement('a');
                a.textContent = el.name;
                a.href = el.html_url;
                a.dataset.stars = el.stargazers_count;
                a.dataset.owner = el.owner.login;
                li.append(a)
                fragment.append(li);
            }
            searchOffer.innerHTML = ''
            if (input.value) {
                searchOffer.append(fragment)
            }
        })
        .catch(err => console.log(err))
})

// ADD
function makeCard(uname, owner, stars) {
    let pName = document.createElement('p'),
        pOwner = document.createElement('p'),
        pStars = document.createElement('p');
    pName.classList.add('list-item-text__par');
    pOwner.classList.add('list-item-text__par');
    pStars.classList.add('list-item-text__par');
    pName.textContent = `Name: ${uname}`;
    pOwner.textContent = `Owner: ${owner}`;
    pStars.textContent = `Stars: ${stars}`;
    let div = document.createElement('div');
    div.classList.add('list-item-text')
    div.append(pName, pOwner, pStars);


    let line1 = document.createElement('div'),
        line2 = document.createElement('div');
    line1.classList.add('list-item-close-btn__line')
    line2.classList.add('list-item-close-btn__line')
    let btn = document.createElement('button');
    btn.classList.add('list-item-close-btn');
    btn.append(line1, line2)


    let card = document.createElement('li');
    card.classList.add('list-item')
    card.append(div, btn)
    return card;
}

{/* <div class="list-item-text">
    <p class="list-item-text__par">Name: react</p>
    <p class="list-item-text__par">Owner: facebook</p>
    <p class="list-item-text__par">Stars: 145231</p>
</div>
<button class="list-item-close-btn">
    <div class="list-item-close-btn__line"></div>
    <div class="list-item-close-btn__line"></div>
</button> */}
let searchOffer = document.querySelector('.search-offer');
searchOffer.addEventListener('click', (e) => {
    e.preventDefault()
    let res = document.querySelector('.res-field');
    let a = e.target;
    let card = makeCard(a.textContent, a.dataset.owner, a.dataset.stars);
    res.append(card)
})



// DELETE
let closeBtn = document.querySelector('.list-item-close-btn');










