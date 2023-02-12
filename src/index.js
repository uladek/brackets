module.exports = function check(str, bracketsConfig) {
//   if(str.length%2 !== 0) {
//     return false;
// }

let target = bracketsConfig.map(el => el.join(''))
for(let i in str) {
// for(let i =-1; i < str.length; i++){
    // console.log(str[i])
// 
    // for (let k=0; k< target.length; k++){
        for(let t of target) {
        while(str.includes(t)) {
        str = str.replace(t ,'');
    }
 }
}
return str.length===0;
// иначе false
 
 }


