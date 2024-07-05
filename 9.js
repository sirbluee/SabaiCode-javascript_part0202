function findMedian(arr) {  
    arr.sort((a, b) => a - b);  
    const middleIndex = Math.floor(arr.length / 2);  
  
    if (arr.length % 2 === 0) {  
        return (arr[middleIndex - 1] + arr[middleIndex]) / 2;  
    } else {  
        return arr[middleIndex];  
    }  
}

let arr = [1,10,4,23,45];
console.log(findMedian(arr)); 