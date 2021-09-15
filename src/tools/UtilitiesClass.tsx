export function getRandomNumber(max: number){
    return Math.floor(Math.random() * (max + 1));

  };
  export function getIndex  (arr:any[],id: number)  {
    for (let i = 0; i < arr.length; i++) {
      if (id === arr[i].id) {
        return i;
      }
    }
    return -1;
  };