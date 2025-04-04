function customSort(arr: number[]): number[] {
  const freqMap = new Map<number, number>();

  arr.forEach((num) => freqMap.set(num, (freqMap.get(num) || 0) + 1));

  return arr.sort((a, b) => {
    const freqA = freqMap.get(a)!;
    const freqB = freqMap.get(b)!;

    if (freqA === freqB) return a - b;

    return freqA - freqB;
  });
}

const input = [2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8];
console.log(customSort(input));
