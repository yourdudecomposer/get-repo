export default function makeCard(uname, owner, stars, href) {
    function checkLength(str) {
        if (str.length > 23) {
            str = str.substring(0, 23) + '...'
        } return str;
    }

    let pName = document.createElement('p'),
        pOwner = document.createElement('p'),
        pStars = document.createElement('p');
    pName.classList.add('list-item-text__par');
    pOwner.classList.add('list-item-text__par');
    pStars.classList.add('list-item-text__par');
    pName.textContent = `Name:\u00A0\u00A0${checkLength(uname)}`;
    pOwner.textContent = `Owner: ${checkLength(owner)}`;
    pStars.textContent = `Stars:\u00A0\u00A0\u00A0${stars}`;
    let a = document.createElement('a');
    a.href = href;
    a.target = '_blank'
    a.classList.add('list-item-text')
    a.append(pName, pOwner, pStars);


    let line1 = document.createElement('div'),
        line2 = document.createElement('div');
    line1.classList.add('list-item-close-btn__line')
    line2.classList.add('list-item-close-btn__line')
    let btn = document.createElement('button');
    btn.classList.add('list-item-close-btn');
    btn.append(line1, line2)


    let card = document.createElement('li');
    card.classList.add('list-item')
    card.append(a, btn)
    return card;
}