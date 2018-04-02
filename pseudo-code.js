/* eslint func-names: 0,  no-unused-vars: 0, no-alert: 0, class-methods-use-this: 0 , no-plusplus: 0 , indend: 0 , no-restricted-syntax: 0 , no-use-before-define: 0 , no-loop-func: 0, func-names: 0, space-before-blocks: 0, indent: 0, max-len: 0 */

// Maiya's code-scratch for making classes:

window.onload = function (evt) {
  console.log('js loaded');
  // TRAINER CLASS

  // GLOBAL DOM OBJECTS:
  const scoreBoxOne = document.getElementById('scoreBoxOne');
  const scoreBoxTwo = document.getElementById('scoreBoxTwo');

  // CHARACTER CLASS - THESE ARE OUR POKEMON OBJECTS:
  class Character {
    constructor(characterName) {
      this.name = characternName;
    }
    getCharacterPromise(characterName) {
      const endpoint = characterName;
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.baseUrl}/${characterName}/`);
        xhr.send();
        xhr.onload = function () {
          resolve(JSON.parse(xhr.responseText));
        };
        xhr.onerror = function () {
          reject(xhr.statusText);
        };
      });
    }
  }
  // PLAYER CLASS - REPRESENTS OUR TRAINERS
  class Player {
    constructor(playerName) {
      this.name = playerName;
      this.gym = {};
    }
    fetchCharacters(characterArray) {}
  }
  const professorGrim = new Player('professorGrim');
  const chuck = new Player('chuck');

  // DISPLAY CLASS - REPRESENTS EACH BOX WHERE OUR GYMS WILL BE DISPLAYED:
  class Display {
    constructor(playerOne, PlayerTwo) {}
    renderFloatingDisplay(playerName, characterName) {
      // side is the name of the wrapper panel for the floating display:
      // displayElement = document.getElementById(side);
      // setTimeout time ONE:
      Display.prototype.renderFloatingCharacterName(characterName);
      // setTimeout time TWO:
      Display.prototype.renderGif(characterName);
      // setTimeout time Three:
      Display.prototype.renderStats(characterName);
    }
    renderFloatingCharacterName() {} // #Jamie's type-writer code
    renderStats() {} // #Maiya's render stats code
    renderGif() {} // #Maiya's render gif code
    // for rendering a match between the pokemon:
    renderMatch(playerOne, characterOne, playerTwo, characterTwo) {
      // cycle through both character's stats
      // update the player's score
    }
  }
};
