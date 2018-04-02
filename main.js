/* eslint func-names: 0,  no-unused-vars: 0, no-alert: 0, class-methods-use-this: 0 , no-plusplus: 0 , indend: 0 , no-restricted-syntax: 0 , no-use-before-define: 0 , no-loop-func: 0, func-names: 0, space-before-blocks: 0, indent: 0, max-len: 0 */

window.onload = function (evt) {
  console.log('js loaded');
  // TRAINER CLASS

  class Character {
    constructor(characterName) {
      this.name = characterName;
    }
    getCharacterPromise() {
      const endpoint = this.name;
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.apiURL}/${endpoint}/`);
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
  Character.prototype.apiURL = 'https://pokeapi.co/api/v2/pokemon';

  //   Pokemon names: Oddish, Gloom and Weezing
  const dragonair = new Character('dragonair');
  const getDragonair = dragonair.getCharacterPromise();
  getDragonair.then((character) => {
    console.log(character);
  });

  const butterfree = new Character('butterfree');
  const getButterfree = butterfree.getCharacterPromise();
  getButterfree.then((character) => {
    console.log(character);
  });

  const charmeleon = new Character('charmeleon');
  const getCharmeleon = charmeleon.getCharacterPromise();
  getCharmeleon.then((character) => {
    console.log(character);
  });

  const oddish = new Character('oddish');
  getOddish = oddish.getCharacterPromise();
  getOddish.then((character) => {
    console.log(character);
  });

  const weezing = new Character('weezing');
  getWeezing = weezing.getCharacterPromise();
  getWeezing.then((character) => {
    console.log(character);
  });

  const gloom = new Character('gloom');
  getGloom = gloom.getCharacterPromise();
  getGloom.then((character) => {
    console.log(character);
  });

  class Player {
    constructor(playerName) {
      this.name = playerName;
      this.gym = {};
    }
    loadCharactersToGym(characterArray) {}
  }

  const professorDoom = new Player('Professor Doom');
  const chuck = new Player('Chuck');

  //   const dragonairPromise = Character.prototype.getCharacterPromise('dragonair');
  //   dragonairPromise.then((character) => {
  //     console.log(character);
  //   })
  //   .catch(function(err) => {
  //       console.log(err);
  //   });
};
