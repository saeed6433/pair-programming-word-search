const transpose = require("./transpose")

const wordSearch = (letters, word) => { 

    if(letters.length === 0){return 'Matrix is empty!'}

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
        
    } 
    
    let transLetters = transpose(letters)
    const verticalJoin = transLetters.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
        
    } 
    return false
}

module.exports = wordSearch