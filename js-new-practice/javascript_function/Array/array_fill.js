//fill()可修改陣列值, 需要三參數, 值、開始索引、結束索引, 其中開始與結束索引屬於默認值, 會直接修改原陣列

//只給一個值, 將所有值改成指定value
arr = [1, 2, 3, 4];
console.log(arr.fill(5)); //[ 5, 5, 5, 5 ] 


//只給兩個值, 指定值, 開始索引
arr1 = [1, 2, 3, 4];
console.log(arr1.fill(5,1)); //[ 1, 5, 5, 5 ]

//三個值, 指定值, 開始索引, 結束索引
arr1 = [1, 2, 3, 4];
console.log(arr1.fill(5,1,2)); //[ 1, 5, 3, 4 ]