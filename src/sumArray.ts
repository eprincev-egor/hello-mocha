export function sumArray(array: number[]): number {
    let totalSum = 0;

    for (const next of array) {
        totalSum += next;
    }

    return totalSum;
}