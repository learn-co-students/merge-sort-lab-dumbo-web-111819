let unsortedArray = [23,34,53,23]
function mergeSort(array){
  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  let sorted;
  if(array.length < 2){
    return array
  }else{
    // console.log(firstHalf)
    // console.log("mergeSort")
    sorted = merge(mergeSort(firstHalf),mergeSort(secondHalf))
  }
  return sorted
}
console.log(mergeSort(unsortedArray))
function merge(oneArr,twoArr){
  let arr = []
  console.log(oneArr)
  console.log(twoArr)
 while(oneArr.length != 0 && twoArr.length != 0){
   if(oneArr[0] < twoArr[0]){
      arr.push(findMinAndRemoveSorted(oneArr))
   }else{
      arr.push(findMinAndRemoveSorted(twoArr))
   }
 }
 return [...arr,...oneArr,...twoArr]
}
function findMinAndRemoveSorted(array){
  return array.shift()
}