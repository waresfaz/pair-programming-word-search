const wordSearch = (letters, word) => { 
    const rows = letters[0].length;
    const horizontalJoin = letters.map(ls => ls.join(''))
    
    for (let col = 0; col < rows; col++) {
        let column = letters.map((value) => { 
            return cvalue[col];
        });
       const verticalJoin = column.join("");
       if (verticalJoin.includes(word)) {
           return true;
       }
       
    }
    for (l of horizontalJoin) {
        
        if (l.includes(word)) {
            return true; 
             
        }
    }
    return false;
}

// pair programmed with Jacob

console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK'));


module.exports = wordSearch