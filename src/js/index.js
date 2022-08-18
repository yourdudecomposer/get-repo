import '../css/style.css';
import 'normalize.css'

let store;
let input = document.querySelector('.input');
let searchOffer = document.querySelector('.search-offer');

searchOffer.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target)
    console.log(store)
})


window.addEventListener('load', () => {
    input.focus()
})


input.addEventListener('input', () => {
    if (input.value === '') {
        console.log('empyt')
        searchOffer.innerHTML = '';
        return
    }
    let request = input.value;
    let queryString = `${request}&per_page=5`;

    fetch(`https://api.github.com/search/repositories?q=${queryString}`)
        .then(data => data.json())
        .then(data => {
            let fragment = document.createDocumentFragment();
            store = data.items;
            for (const el of store) {
                let li = document.createElement('li');
                let a = document.createElement('a');
                a.textContent = el.name;
                a.href = el.html_url;
                li.append(a)
                fragment.append(li);
            }
            searchOffer.innerHTML = ''
            searchOffer.append(fragment)
        })
        .catch(err => console.log(err))


})


