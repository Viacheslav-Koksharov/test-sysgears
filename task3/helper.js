 function getRandomCoordinates() {
    const x = Math.floor(Math.random() * (100 - 1) + 1);
    const y = Math.floor(Math.random() * (100 - 1) + 1);
    const z = Math.floor(Math.random() * (100 - 1) + 1);
    return { x, y, z };
  }

function getDistance(probeCoordinates, asteroidCoordinates) {
    const dx = probeCoordinates.x - asteroidCoordinates.x;
    const dy = probeCoordinates.y - asteroidCoordinates.y;
    const dz = probeCoordinates.z - asteroidCoordinates.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

export {getRandomCoordinates,getDistance}
