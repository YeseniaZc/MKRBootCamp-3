/* 4. Votos a favor vs votos en contra
Escribir una función que tome un objeto como argumento. El objeto contiene dos
propiedades, upvotes y downvotes. Devuelve el número de votos a favor menos el
número de votos en contra.
function getVoteCount(obj) {
return
}
Test Case Expecte
d
getVoteCount({upvotes:13, downvotes:0}) 13
getVoteCount({upvotes:2, downvotes:33}) -31
getVoteCount({upvotes:132, downvotes:132})  */

function getVoteCount(obj) {
    let votes = obj.upvotes = obj.downvotes
    return votes
    }


console.log({upvotes:13, downvotes:0});
console.log({upvotes:2, downvotes:33});
console.log({upvotes:132, downvotes:132});
