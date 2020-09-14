const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
// const logBtn = document.getElementById('log-btn');

function monsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

function playerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

function healPlayer(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function playerHealth(health) {
  playerHealthBar.value = health;
}

function ffGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}
