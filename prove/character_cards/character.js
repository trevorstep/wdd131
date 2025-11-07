function createCharacter(name, level, health, attack, prefix) {
    return {
        name,
        level,
        health,
        attack,
        prefix,
        takeDamage(damage) {
            this.health -= damage;
            if (this.health < 0) this.health = 0;
            renderCharacter(this, this.prefix);
            checkHealth();
        },
        levelUp() {
            this.level++;
            this.attack += 5;
            renderCharacter(this, this.prefix);
        },
        attackEnemy(enemy) {
            enemy.takeDamage(this.attack);
        }

    };
}

const dave = createCharacter("Dave from HR", 5, 80, 10, "dave");
const noah = createCharacter("TA Noah, the Omnipotent", 20, 125, 15, "noah");


function renderCharacter(character, prefix) {
    console.log("Rendering:", prefix);
    console.log("Looking for:", `#${prefix}-name`);
    document.querySelector(`#${prefix}-name`).innerText = character.name;
    document.querySelector(`#${prefix}-level`).innerHTML = 'Level: ' + character.level;
    document.querySelector(`#${prefix}-health`).innerHTML = 'Health: ' + character.health;
    document.querySelector(`#${prefix}-attack`).innerHTML = 'Attack: ' + character.attack;
}

document.querySelector("#dave-attack-btn").addEventListener("click", function () {
    dave.attackEnemy(noah);
    renderCharacter(noah, "noah");
});


document.querySelector('#dave-levelup-btn').addEventListener('click', function () {
    dave.levelUp();
    renderCharacter(dave, "dave");
}
);

document.querySelector("#noah-attack-btn").addEventListener("click", function () {
    noah.attackEnemy(dave);
    renderCharacter(dave, "dave");
});


document.querySelector('#noah-levelup-btn').addEventListener('click', function () {
    noah.levelUp();
    renderCharacter(noah, "noah");
}
);


document.querySelector('#challenge-btn').addEventListener('click', function () {
    document.querySelector('#noah-card').style.display = 'block';
    document.querySelector('#challenge-btn').style.display = 'none';
});


if (noah.health <= 0) {
    alert("TA Noah, the Omnipotent! Has been defeated!");
    document.querySelector('body').style.backgroundColor = 'red';
}

else if (dave.health <= 0) {
    alert("Dave from HR has been defeated!");
    document.querySelector('body').style.backgroundColor = 'darkgreen';
}


function checkHealth() {
    if (noah.health <= 0) {
        alert("TA Noah, the Omnipotent! Has been defeated!");
        document.querySelector('body').style.backgroundColor = 'red';
    }

    else if (dave.health <= 0) {
        alert("Dave from HR has been defeated!");
        document.querySelector('body').style.backgroundColor = 'darkgreen';
    }
}