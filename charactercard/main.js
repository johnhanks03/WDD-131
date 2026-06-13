const character = {
  name: "John Hanks",
  class: "Ranger",
  level: 1,
  health: 100,
  image: "images/character.png",

  attacked: function () {
    this.health -= 20;

    if (this.health <= 0) {
      this.health = 0;
      document.querySelector("#message").textContent = `${this.name} has died.`;
    } else {
      document.querySelector("#message").textContent = `${this.name} was attacked!`;
    }

    renderCharacter();
  },

  levelUp: function () {
    this.level += 1;
    document.querySelector("#message").textContent = `${this.name} leveled up!`;
    renderCharacter();
  }
};

function renderCharacter() {
  document.querySelector("#characterName").textContent = character.name;
  document.querySelector("#characterClass").textContent = character.class;
  document.querySelector("#characterLevel").textContent = character.level;
  document.querySelector("#characterHealth").textContent = character.health;
  document.querySelector("#characterImage").src = character.image;
}

document.querySelector("#attackBtn").addEventListener("click", function () {
  character.attacked();
});

document.querySelector("#levelUpBtn").addEventListener("click", function () {
  character.levelUp();
});

renderCharacter();