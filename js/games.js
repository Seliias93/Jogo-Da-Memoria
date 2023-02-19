const grid = document.querySelector('.grid');

const pesona =  [
  'Ajudante_de_papainoel1',
  'bart',
  'card01',
  'homer e flandes',
  'homer',
  'lisa',
  'maggie',
  'marge',
  'simpsons2',
  '480-4806621_homero-simpson-wallpaper-4k-hd-png-download',
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const createCard = (pesona) => {
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroudImage = `url('../imagens/${pesona}')`;

  card.appendChild(front);
  card.appendChild(back);

 return card;

}

const loadgame = () =>{

  pesona.forEach((pesona) => {

    const card = createCard(pesona);
    grid.appendChild(card);
  });

}

loadgame();