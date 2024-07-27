const guidesContainer = document.querySelector('.container');

const guidesData = [{
    number: '1',
    img: 'img/butch/butch1.png',
    guide: 'in arrivo...',
}, {
    number: '2',
    img: 'img/butch/butch2.png',
    guide: 'in arrivo...',
}, {
    number: '3',
    img: 'img/butch/butch3.png',
    guide: 'in arrivo...',
}, {
    number: '4',
    img: 'img/butch/butch4.png',
    guide: 'in arrivo...',
}, {
    number: '5',
    img: 'img/butch/butch5.png',
    guide: 'in arrivo...',
}, {
    number: '6',
    img: 'img/butch/butch6.png',
    guide: 'in arrivo...',
}];

const guidesString = guidesData.map(({ number, img, guide }) => `
<div class="mar">
<div class="border">
    <div class="step">
        <div class="border">
            <div class="number">
                ${number}
            </div>
        </div>
        <img src="${img}" alt="">
        <div class="guide">
           ${guide}
        </div>
    </div>
</div>
</div>
`).join('');

guidesContainer.innerHTML = guidesString