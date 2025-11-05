//flatten array
//input = [[1,2],[3,4],[5,6]]
//output = [1,2,3,4,5,6]

console.log([1,2,3].concat([4,5,6]));
function flattenArray(arr){
    //method 1: using reduce and concat
    const result = arr.reduce((acc,next)=>{
        return acc.concat(Array.isArray(next) ? flattenArray(next) : next);
    },[]);
    return result;
}
const arr = [[1,2],[3,4,[5,6]]];
console.log(flattenArray(arr));