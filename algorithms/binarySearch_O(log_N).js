const arr = [8, 87, 3, 0, -12, 88, 4351, 0.7];

/*
function bs(arr, val){
    let minIdx = 0,
        maxIdx = arr.length - 1,
        guessIdx;
    while(minIdx < maxIdx){
        guessIdx = Math.floor((minIdx+maxIdx)/2)
        if(arr[guessIdx]===val){
            return guessIdx
        }else if(arr[minIdx]<arr[guessIdx]){
            minIdx = guessIdx + 1
        }else{
            maxIdx = guessIdx - 1
        }
    }
    return -1
};
*/

function bs(arr, val){
    let guess,
        min = 0,
        max = arr.length-1;
    while(min < max){
        guess = Math.floor((min+max)/2)
        if(arr[guess]===val){
            return guess
        }else if(arr[min] < arr[guess]){
            min = guess + 1
        }else{
            max = guess - 1
        }
    }
    return -1
}

import { test } from 'ava';

test('index of 0 is 3', t => t.is(bs(arr, 0), 3))
