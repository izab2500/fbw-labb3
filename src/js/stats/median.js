export default function median(arr) {
    if (arr.length % 2 === 0) {
        return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
    }
    return arr[Math.floor(arr.length / 2)];
}