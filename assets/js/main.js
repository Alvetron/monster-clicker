const monstersArr = 
[
  {
    name: 'vicious',
    imageSrc: `${imgMonsterFolder}vicious.png`,
    hp: 150,
    points: 25,
  },
  {
    name: 'five-eyed',
    imageSrc: `${imgMonsterFolder}five-eyed.png`,
    hp: 80,
    points: 15,
  },
  {
    name: 'scary-hairy',
    imageSrc: `${imgMonsterFolder}scary-hairy.png`,
    hp: 300,
    points: 75,
  }
];

const body = document.querySelector('body');
const gameScreen = document.querySelector('.game-screen');
const pointsEl = document.querySelector('.points');

const imgMonsterFolder = 'assets/images/monsters/';

function createRandomMonster() {
  const rand = Math.round(Math.random() * 2);
  const monster = new Monster(monstersArr[rand].name, monstersArr[rand].imageSrc, monstersArr[rand].hp,  monstersArr[rand].points);
  
  return monster;
}

let monster = createRandomMonster();
monster.renderMob();

let punchCount = 0;
let damage = 10;
let monsterHp = monster.hp;

gameScreen.addEventListener('click', e => {
  if(!e.target.classList.contains('monster')) return; 
  monsterHp -= damage;
  punchCount++;
  
  let totalDmg = damage * punchCount;
  monster.renderHpBar(monsterHp, totalDmg);

  if(monsterHp === 0 ) {
    let points = +pointsEl.textContent;
    pointsEl.textContent = points + monster.points;

    monster.remove();
    monster = createRandomMonster();
    monster.renderMob();

    monsterHp = monster.hp;
    punchCount = 0;
  }
})
