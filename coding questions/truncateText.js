function truncateText(str, k) {
    return str.length > k ? str.slice(0, k) + "..." : str

}
console.log(truncateText("subscribe to mujtaba khan", 11))