//배열 접근
console.log(items[0].name);
console.log(items[0]['name']);
console.log(items[0].id);
console.log(items[0]['id']);

//백틱
console.log(`${items[1]['name']}`); // '랫풀다운' ✅
console.log(`${items[1]['count']}`); // '3' ✅

console.log(`운동이름: ${items[1]['name']}, ${items[1]['count']}세트`);
// 결과: 운동이름:랫풀다운, 3세트 ✅
