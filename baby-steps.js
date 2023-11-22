const sum = (arr)=>{
    let sumNo = 0;
    for(let i=2; i<arr.length; i++ ){
        sumNo += Number(arr[i])
    }
    return sumNo;
};

// console.log(process.argv)

console.log(sum(process.argv))