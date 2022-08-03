class Monster {
  constructor(name, image, hp, points) {
    this.name = name;
    this.image = image;
    this.hp = hp;
    this.points = points;
  }

  renderMob() {
    this.img = document.createElement('img');
    this.img.classList.add('monster-img');
    this.img.src = this.image;

    this.bar = document.createElement('div');
    this.bar.classList.add('hp-bar');
    this.bar.textContent = this.hp;

    document.querySelector('.monster').append(this.bar, this.img)
  }

  renderHpBar(currentHp, damage) {
    this.bar.style.width = 100 - 100 / (this.hp / damage) + '%'; 
    this.bar.textContent = currentHp;
  }

  remove() {
    this.img.remove();
  }
}
