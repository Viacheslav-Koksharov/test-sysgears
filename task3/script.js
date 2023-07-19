import { getRandomCoordinates, getDistance} from './helper.js';

function findAsteroid() {
  const asteroidCoordinates = getRandomCoordinates();
  let probes = [];
  const counter = 44;

  for (let i = 0; i < counter; i++) {
    const probeCoordinates = getRandomCoordinates();
    const distance = getDistance(probeCoordinates, asteroidCoordinates);

    probes.push({
      coordinates: probeCoordinates,
      distance: distance
    });
  }

  probes.sort((a, b) => a.distance - b.distance);

  return {
    result: {
      location: asteroidCoordinates,
      probes: {
        count: counter,
        coordinates: probes.map(probe => probe.coordinates)
      }
    }
  };
}

const result = findAsteroid();
console.log('Task-3');
console.log(result);
