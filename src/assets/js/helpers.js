export function chunk(arr, size) {
    const chunked = []
    for (let i = 0; i < arr.length; i += size) {
        chunked.push(arr.slice(i, i + size))
    }
    return chunked
}

export function rand(min=0, max=1) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

export function shuffle(arr) {
    let i = arr.length,
        j,
        temp
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1))
        temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
    }

    return arr;
}
