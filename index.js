function findMinAndRemoveSorted(sortedArray){
    return sortedArray.shift()
}
//   function findMinAndRemoveSorted(array){
//     let min = array[0]
//     let minIndex = 0
//     for(let i = 0; i < array.length; i++){
//       let currentElement = array[i]
//       if(array[i] < min){
//         min = array[i]
//         minIndex = i
//       }
//     }
//     array.splice(minIndex, 1);
//     return min;
//   }
// function findMinAndRemoveSorted(firstHalf, secondHalf){
//   let minfirstHalf = firstHalf[0]
//   let minsecondHalf = secondHalf[0]
 
//   if(minfirstHalf < minsecondHalf){
//     return firstHalf.shift()
//   } else {
//     return secondHalf.shift()
//   }
// }
 function merge(firstHalf, secondHalf){
    let sorted = []
    let currentMin
    while(firstHalf.length != 0 && secondHalf.length != 0){
        //firstHalf and secondHalf are sorted
        let minFirstHalf = firstHalf[0]
        let minSecondHalf = secondHalf[0]
        if(minFirstHalf<minSecondHalf){
            console.log(minFirstHalf)
            currentMin=findMinAndRemoveSorted(firstHalf)
        }
        else{
            currentMin=findMinAndRemoveSorted(secondHalf)
        }

        sorted.push(currentMin)

     
    //   let currentMin = findMinAndRemoveSorted(firstHalf, secondHalf)
    //   sorted.push(currentMin)
    }
    return sorted.concat(firstHalf).concat(secondHalf)
  }
  
 

  function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    // let sorted;
  
    if(array.length < 2){
      return array
    } else {
      return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    // return sorted
  }
// function mergeSort(array){
//   let midpoint = Math.floor(array.length/2)
//   let firstHalf = array.slice(0, midpoint)
//   let secondHalf = array.slice(midpoint, array.length)
//   return merge(firstHalf, secondHalf)
// }

// //it mutates the original array. 
// function mergeSort(array){
//     if(array.length>1){
//         let midpoint = Math.floor(array.length/2)
//         let firstHalf = array.slice(0, midpoint)
//         let secondHalf = array.slice(midpoint, array.length)
//         // return merge(firstHalf, secondHalf)
//         mergeSort(firstHalf)
//         mergeSort(secondHalf)
//         console.log(array)

//         let m=0
//         let n=0
//         let o=0
//         while(firstHalf.length>m && secondHalf.length>n){
//             if (firstHalf[m]>secondHalf[n])
//             {
//                 array[o]=secondHalf[n]
//                 n+=1  //increment the pointer
//                 o+=1  //increment
//             }
//             else{
//                 array[o]=firstHalf[m]
//                 m+=1 //increment the pointer
//                 o+=1 //increment the pointer in the merged array
//             }

//         }
//         while(m<firstHalf.length){
//             dataset[o]=firstHalf[m]
//             m+=1  //increment the pointer
//             o+=1  //increment

//         }

//         while(n<secondHalf.length){
//             dataset[o]=secondHalf[n]
//             n+=1  //increment the pointer
//             o+=1  //increment

//         }

//     }
//   }
   