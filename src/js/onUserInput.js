
import { input, searchOffer } from "./constants";
import debounce from "./debounce";


function searchData(request) {
    return fetch(`https://api.github.com/search/repositories?q=${request}&per_page=5`)
        .then(data => data.json())
}
function showData(data) {
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
}


function onUserInput() {
    let request = input.value;
    searchData(request)
        .then(data => showData(data))
        .catch(err => console.log(err))
}

export default onUserInput = debounce(onUserInput, 1000)
