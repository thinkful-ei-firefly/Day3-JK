const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];

  function findOne(arr, query){
      let match = false;
    for (let i = 0; i < arr.length; i++){
        for (const key in query){
            match = false;
            console.log(query[key]);
            console.log(arr[i][key]);
            if (query[key] === arr[i][key]){
                match = true;
            } else {
                break;
            }
            console.log(match);
            console.log('break line \n\n');
        }
        if (match === true)
            return arr[i];
    }
    return null;
  }
  //console.log(findOne(HEROES, {id: 1}));
  //console.log(findOne(HEROES, { id: 10 }));
  //console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
  //console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
  //console.log(findOne(HEROES, { squad: 'Justice League' }));

  /**
   * check each key in query
   * if it exists in heroes
   *    check if it matches
   *        stop if it doesnt
   * 
   * 
   */