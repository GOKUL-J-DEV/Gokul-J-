// Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]

function getTotalCount(arr: number[]) {
  let multiplesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let countObj: { [key: number]: number } = {};

  for (const number of multiplesArr) {
    countObj[number] = 0;
  }

  for (const number of arr) {
    multiplesArr.map((item: number) => {
      if (number % item === 0) {
        countObj[item]++;
      }
    });
  }
  //Output
  console.log(countObj);
}

//Input
getTotalCount([1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]);
