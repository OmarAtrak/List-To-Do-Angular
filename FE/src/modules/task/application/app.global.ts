export function frenchDate(str: Date) {
    const date = str.toString().split('T')[0];
    return date.substring(8, 11) + '/' + date.substring(5, 7) + '/' + date.substring(0, 4);
}