// PAGE FOR ROUGH DRAFT CODE/ CODE THAT DON'T WANT TO DELETE YET:

//   Pokemon names: Oddish, Gloom and Weezing

// Original code for removing display from the DOM:

// pokemonObjects will be the Character instance that was created and put in the gyms:
// professorDoom.gym.oddish;
// professorDoom.gym.gloom;
// professorDoom.gym.weezing;

// chuck.gym.dragonair;
// chuck.gym.butterfree;
// chuck.gym.charmeleon;

// #to-do:  add setTimeouts to this and fade the images away, etc
function removeCharacterFromDisplay() {
  // remove the gif image:
  const floatingImage = document.getElementById('floatingGifImage');
  if (floatingImage) {
    const floatingImageParent = floatingImage.parentNode;
    floatingImageParent.removeChild(floatingImage);
  }
  // remove the stats:
  // get the statsWrap and set its innerHTML to an empty string:
  const statsWrap = document.getElementById('statsWrap');
  console.log('** statsWrap: ', statsWrap);
  statsWrap.innerHTML = '';
}

function renderCharacterToPage(pokemonObject) {
  // remove current pokemon from screen:
  removePokemonFromDisplay();

  // put the code here to render the typed name of the pokemon:

  // render gif to floating display
  const floatingDisplay = document.getElementById('floatingDisplay');
  const img = document.createElement('img');
  img.setAttribute('id', 'floatingGifImage');
  img.setAttribute('src', pokemonObject.gif);
  img.classList.add('pokemonAppear');

  floatingDisplay.appendChild(img);
  const { stats } = pokemonObject;
  renderStats(stats, pokemonName);

  // RENDER STATS:
  function renderStats(stats, pokemonName) {
    // to do: this element might nnot be necessary:
    const container = document.getElementById('floatingStats');

    // GET THE STATS WRAP DIV FROM THE DOM
    const statsWrap = document.querySelector('#statsWrap');
    const statNames = Object.keys(stats);

    // loop over statNames and create html for each stat:
    statNames.forEach((stat) => {
      console.log(stat);
      // make a statWrap for each stat and add everything to it:
      const statWrap = document.createElement('div');
      statWrap.classList.add('statWrap');
      // statWrap.setAttribute('id', `${stat}Wrap`);
      statWrap.setAttribute('id', 'statTitle');

      const statLabel = document.createElement('div');
      statLabel.setAttribute('id', 'statLabel');
      statLabel.innerHTML = `${stat}:  `;
      statWrap.appendChild(statLabel);

      const statBarWrap = document.createElement('div');
      statBarWrap.classList.add('statBarWrap');
      // add boxes inside of the statBarWrap:
      console.log('statBarWrap: ', statBarWrap);
      for (let i = 0; i < stats[stat]; i++) {
        // if (i < simpleStats[stat]) {
        setTimeout(() => {
          const statBox = document.createElement('div');
          statBox.classList.add('statBox');
          statBarWrap.appendChild(statBox);
          if (i === stats[stat] - 1) {
            setTimeout(() => {
              const statNumberBox = document.createElement('div');
              statNumberBox.classList.add('statNumberBox');
              statNumberBox.innerHTML = stats[stat];
              statBarWrap.appendChild(statNumberBox);
            }, 20);
          }
        }, i * 20);
        // }
        statWrap.appendChild(statBarWrap);
      }
      // and end of loop:
      statsWrap.appendChild(statWrap);
    });
  }
}



CSS CODE:
@import url("reset.css");
@import url("animate.css");

body {
  font-family: sans-serif;
}

.statWrap {
  width: 100%;
  /* border: dotted green 5px; */
  display: grid;
  grid-template-columns: 100px 10fr 0.5rem;
}

.statBarWrap {
  /* border: rgba(255, 0, 255, 0.189) dotted 5px; */
  /* background-color: rgba(255, 0, 255, 0.189); */
  /* border: violet dotted 5px; */
  width: 100%;
  height: 40px;

  display: grid;
  grid-template-columns: repeat(100, 1fr);
  margin-bottom: 1rem;
  /* grid-column-gap: 5px; */
}

.statBox {
  background-color: magenta;
  border-radius: 3px;
  border: solid magenta 1px;
  animation-name: statFadeIn;
  animation-duration: 1000ms;
  animation-direction: forwards;
  animation-fill-mode: both;
  animation-delay: 500ms;
  /*  */
}

.statNumberBox {
  color: white;
  padding-top: 10px;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 1rem;
  height: 1rem;
  font-weight: bold;
  transform: scale(300%);
  animation-name: rubberBand;
  animation-duration: 1000ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.73),
    /* inner white */ 20px 0 80px rgba(255, 0, 255, 0.593),
    /* inner left magenta short */ -20px 0 80px rgba(0, 255, 255, 0.661),
    /* inner right cyan short */ 20px 0 300px rgba(0, 234, 255, 0.579),
    /* inner left magenta broad */ -20px 0 300px rgba(0, 255, 255, 0.703),
    /* inner right cyan broad */ 0 0 50px #fff,
    /* outer white */ -10px 0 80px rgba(0, 200, 255, 0.579),
    /* outer left magenta */ 10px 0 80px rgba(0, 255, 255, 0.62);
}

#statLabel {
  font-weight: 400;
  font-size: 1.5rem;
  color: rgba(117, 230, 138, 0.887);
  /* text-shadow: -5px 0 white, 0 1px white, 1px 0 white, 0 -1px white; */
  /* color: white; */

  /* font-size: 2rem; */
  /* border: orange dotted 5px; */
  /* border-radius: 10px; */
  /* background-color: white; */

  z-index: 2;
  padding: 0px;
  border-radius: 5px;
}

@keyframes statFadeIn {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
