module.exports = function transform(arr) {
    if (arr.length === undefined) {
        throw Error;
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-next') {
            i++;
        } else if (arr[i] == '--discard-prev') {
            newArr.pop();
        } else if (arr[i] == '--double-next') {
            if (arr.length - 1 > i) {
                newArr.push(arr[i + 1]);
            }
        } else if (arr[i] == '--double-prev') {
            if (i > 0) {
                newArr.push(arr[i - 1]);
            }
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};