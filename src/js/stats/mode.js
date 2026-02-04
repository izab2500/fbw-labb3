export default function mode(arr) {
    const frequency = new Map();
    //skapa frekvenstabell
    arr.forEach(num => {
        const increasedBy1 = (frequency.get(num) || 0) + 1;
        frequency.set(num, increasedBy1)
    })
    //kan vara unik maxfrekvens
    const maxFreq = Math.max(...frequency.values());
    //potentiella typvärden
    const modes = [];
    frequency.forEach((value, key) => {
        if (value === maxFreq) modes.push(key);
    })

    return modes.length < frequency.size ? modes : false;
}