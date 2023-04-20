function showMenu() {
  const menu = document.querySelector('.second-header').style.display = 'block';
}

function cancelMenu() {
  const menu = document.querySelector('.second-header').style.display = 'none';
}

const speakers = [
  {
    id: '1',
    name: 'Minister Dusin Oyekan',
    desc: 'Power minster of God in worship ministration',
    moreDesc: "Dunsin's life is dedicated to bringing the God dimension into the world through sounds imparted to him by the Holy Spirit. His passion is worshipping Jesus and leading others closer to Him through music",
    img: './images/dusin.jpeg',
    imgAlt: 'dusin oyekan',
  },
  {
    id: '2',
    name: 'Minister Tim Godfrey',
    desc: 'Power minster of God in songs ministration',
    moreDesc: 'Tim Godfrey is a Nigerian gospel singer. He is best known for his song Nara in collaboration with Travis Greene.He is the founder and owner of the record label Rox Nation and also the Founder of Xtreme Crew',
    img: './images/godfrey.jpg',
    imgAlt: 'Tim godfrey',
  },
  {
    id: '3',
    name: 'Minister Mercy Chinwo',
    desc: 'Power minster of God in songs ministration',
    moreDesc: 'Mercy Chinwo is a Nigerian gospel singer. He is best known for his song Nara in collaboration with Travis Greene.He is the founder and owner of the record label Rox Nation and also the Founder of Xtreme Crew.',
    img: './images/mercy.jfif',
    imgAlt: 'Mercy chinwo',
  },
  {
    id: '4',
    name: 'Minister Nathaniel Bassey',
    desc: 'Power minster of God in songs ministration',
    moreDesc: 'Nathaniel Bassey is a Nigerian gospel singer. He is best known for his song Nara in collaboration with Travis Greene.He is the founder and owner of the record label Rox Nation and also the Founder of Xtreme Crew.',
    img: './images/nath_profile.jpg',
    imgAlt: 'Nathaniel Bassey',
  },
  {
    id: '5',
    name: 'Minister Victoria Orenze',
    desc: 'Power minster of God in songs ministration',
    moreDesc: 'Victoria Orenze is a Nigerian gospel singer. He is best known for his song Nara in collaboration with Travis Greene.He is the founder and owner of the record label Rox Nation and also the Founder of Xtreme Crew.',
    img: './images/Victoria-Orenze-Picture.jpg',
    imgAlt: 'Victoria Orenze',
  },
  {
    id: '6',
    name: 'Minister Sinach Kalu',
    desc: 'Power minster of God in songs ministration',
    moreDesc: 'Sinach Kalu is a Nigerian gospel singer. He is best known for his song Nara in collaboration with Travis Greene.He is the founder and owner of the record label Rox Nation and also the Founder of Xtreme Crew.',
    img: './images/Sinach.jpg',
    imgAlt: 'Sinach Kalu',
  },
];

const speakerContainer = document.querySelector('.speaker-holder');
const showSpeakers = speakers.map((speaker, index) => `
    <div class="speakers">
      <div class="img-holder">
        <img class="bg" src="./images/chessboard-mobile.jpg" alt="background">
        <img src=${speaker.img} alt=${speaker.imgAlt}>
      </div>
      <div class="text-holder">
        <div class="name">
          <h3>${speaker.name}</h3>
          <i>${speaker.desc}</i>
        </div>
        <hr>
        <div class="description">
          ${speaker.moreDesc}  
        </div>
      </div>
    </div>
    `).join('');

speakerContainer.innerHTML = showSpeakers;
