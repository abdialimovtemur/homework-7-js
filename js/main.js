// 1. nums = [4,5,6,7,0,1,2], target = 0 => mana shu nums array ichida target teng bo'lgan qiymatning nechinchi indexda turganini aniqlang rasult=>[ index ]




// nums = [4,5,6,7,0,1,2]
// function NUmberIndex(params) {
//   let result = [];
//   for (let i = 0; i < params.length; i++) {
//     console.log(params[i]);
//     if (params[i] === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(NUmberIndex(nums))






// 2. nums = [1,3,2,4,5,6,99,102], target = 5, o'sish va kamayish tartibli array ichida target qiymati array ichida nechinchi qiymatda turganini aniqlang

// function arrayNumber(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] === target) {
//         return i;
//       }
//     }
//     return -1;
//   }
  
//   const nums = [1, 3, 2, 4, 5, 6, 99, 102];
//   const target = 5;
//   const index = arrayNumber(nums, target);
  
//   console.log(index);
  



// 3.ixtiyoriy object yaratilsin va key va valuesi kamida 4 ta bo'lsin 1. key larini ro'yxati chiqarilsin 2. value larining ro'yxati chiqarilsin







// const about = {
//     FirstName: 'Temurbek',
//     LastName: 'Abdialimov',
//     age: 20,
//     country: 'uzbekistan'
//   };
  
//   const keys = Object.keys(about);
//   console.log('Keys:', keys);
  
//   const values = Object.values(about);
//   console.log('Values:', values);







  

// 4. 2 ta 4 tadan element dan mavjud bo'lgan object yaratilsin 1. ularning birlashmasi topilsin 2. birlashmasining keyi topilsin 3. birlashmasining valuesi topilsin 4. birlashmasining valuelarining yig'indisi topilsin

// const object1 = {
//     a: 30,
//     b: 42,
//     c: 12,
//     d: 23 
//   };
  
//   const object2 = {
//     e: 50,
//     f: 60,
//     g: 70,
//     h: 80
//   };
  
//   const combinedObj = { ...object1, ...object2 };
//   console.log('Combined Object:', combinedObj);
  
//   const combinedKeys = Object.keys(combinedObj);
//   console.log('Combined Keys:', combinedKeys);
  
//   const combinedValues = Object.values(combinedObj);
//   console.log('Combined Values:', combinedValues);
  
//   const sumOfValues = combinedValues.reduce((sum, value) => sum + value, 0);
//   console.log('Sum of Combined Values:', sumOfValues);
  


  

