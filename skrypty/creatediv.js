const guidesContainer = document.querySelector('.poradniki');

const guidesData = [{
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: 'In arrivo...',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}, {
  title: 'In arrivo...',
  subtitle: '',
  img: '',
}];

const guidesString = guidesData.map(({ title, subtitle, img }) => `
  <div class="poradnik"> <img src="${img}" /> <div class="name"><h3>${title}</h3><i>${subtitle}</i></div></div>
`).join('');

guidesContainer.innerHTML = guidesString