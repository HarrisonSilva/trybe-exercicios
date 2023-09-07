const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
  ];
  
  const shipLength = (ship) => {
    return `${ship.name} is ${ship.length} ${ship.measurementUnit} long`
  }
console.log(shipLength(ships[2]));
