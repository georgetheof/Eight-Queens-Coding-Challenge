function EightQueens(strArr) { 
  let queenAttacksArr = [];
  for (let i = 0, l = strArr.length; i < l; i++) {
    queenAttacksArr.push(findQueenAttacks(strArr, i));
  }
  
  for (let i = 0, l = strArr.length; i < l; i++) {
    for (let j = 0; j < l; j++) {
      if (queenAttacksArr[j].indexOf(strArr[i]) !== -1) return strArr[i]
    }
  }
  
  return 'true'; 
}

function getPositionObj(arr, index) {
  let pos = {};
  
  pos.x = arr[index].charAt(arr[index].indexOf(',') - 1);
  pos.y = arr[index].charAt(arr[index].indexOf(',') + 1);
  
  return pos; //position of queen in format {x: 2, y:1}
}

function findQueenAttacks(arr, index) {
  let attackArr = [];
  let pos = getPositionObj(arr, index);
  
  for (let i = -7; i < 8; i++) {
    attackArr.push({ x: parseInt(pos.x) + i, y: parseInt(pos.y)}); //horizontal attacks
    attackArr.push({ x: parseInt(pos.x), y: parseInt(pos.y) + i}); //vertical attacks
    
    attackArr.push({ x: parseInt(pos.x) + i, y: parseInt(pos.y) + i}); //diagonal attacks - bottom left => top right
    attackArr.push({ x: parseInt(pos.x) - i, y: parseInt(pos.y) + i}); //diagonal attacks - bottom right => top left
  }
  
  return getStrAttacks(attackArr, pos);
}

function getStrAttacks(arr, pos) {
  let result = '';
  let filteredArr = arr.filter(item => {
        return (item.x > 0 && item.x < 9); //filter invalid X positions
      }).filter(item => {
        return (item.y > 0 && item.y < 9); //filter invalid Y positions
      }).filter(item => {
        return !(item.x == pos.x && item.y == pos.y); //filter own position
      }).forEach( item => {
        result += `(${item.x},${item.y})`; //convert to string with format '(2,1)(5,3)...'
      });
    
  return result;
}

// keep this function call here 
EightQueens(readline());
