export default function variance(mean, arr) {
    let sumSquared = 0;
    arr.forEach(num => {
        sumSquared += Math.pow((num - mean), 2)
    })
    return sumSquared / (arr.length - 1)

}