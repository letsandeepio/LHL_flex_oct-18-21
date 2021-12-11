const rocketsArr = [
  {
    name: 'Falcon 1',
    engines: '1',
    launch_date: '2006-03-24',
    emoji: '🦅'
  },
  {
    name: 'Falcon 9',
    engines: '27',
    launch_date: '2010-06-04',
    emoji: '🚀'
  },
  {
    name: 'Falcon Heavy',
    engines: '27',
    launch_date: '2018-02-06',
    emoji: '👩🏼‍🚀'
  },
  {
    name: 'Starship',
    engines: '6',
    launch_date: '2021-12-01',
    emoji: '👾'
  }
];

// First of all to loop through all rockets
// Get single rocket obbject
// create an html element for that rocket from the hard coded
// append to my container

const createElement = (rocket) => {
  const html = `<article>
    <header>
      <h2> ${rocket.emoji} ${rocket.name}</h2>
    </header>
    <div class='content'>
      <ul>
        <li>
          <span>Engines(s): </span> ${rocket.engines}
        </li>
        <li>
          <span>Launch Date: </span>${rocket.launch_date}
        </li>
      </ul>
    </div>
    <footer>
      Space X Rocket <em>${rocket.name}</em> was launched on ${rocket.launch_date} and was
      equipped with  ${rocket.engines}1 Engine(s)
    </footer>
  </article>`;

 return html;
}

const renderElements = () => {
  for(const rocket of rocketsArr){
    const rocketElement = createElement(rocket);
    const container = $('#rockets-container');
    container.append(rocketElement);
  }
}

$(document).ready(function () {
  renderElements();
});
