// CSS IMPORT 
import '../css/style.css';
import 'normalize.css';
// JS IMPORT
import { input,searchOffer,res } from './constants';
import onUserInput from './onUserInput';
import makeCard from './makeCard';


// LOAD
window.addEventListener('load', () => {
    document.querySelector('.input').focus()
})

// SEARCH
input.addEventListener('input', () => {
    if (!input.value) {
        searchOffer.innerHTML = '';
        return;
    }
    onUserInput()
})
// ADD
searchOffer.addEventListener('click', (e) => {
    e.preventDefault()
    let res = document.querySelector('.res-field');
    let a = e.target;
    let card = makeCard(a.textContent, a.dataset.owner, a.dataset.stars, a.href);
    res.append(card)
    input.value = '';
    searchOffer.innerHTML = ''
})

// DELETE
res.addEventListener('click', (e) => {
    if (!e.target.closest('button')) {
        return;
    }
    e.target.closest('button').parentNode.remove()
})









