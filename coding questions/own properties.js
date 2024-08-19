// print arrays own properties only
Array.prototype.extraProperty = "abdul khan"

const arr = [1, 'mujju', 5, 78, 'hitesh', true]
for (let i in arr) {
    console.log(arr[i])
}

//this will print arr with abdul khan but we only want the original ie arr

for(let v in arr){
    if(arr.hasOwnProperty(v)){
        // console.log(arr[v])
    }
}
