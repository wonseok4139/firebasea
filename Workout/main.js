const items = [
  { id: 10, name: '벤치프레스', count: 5 },
  { id: 20, name: '렛풀다운', count: 3 },
  { id: 30, name: '스쿼트', count: 7 },
];
let workouts = [];
//운동 제목 추가하기
const handleAdd = (myName, count) => {
  console.log('handleAdd : ' + myName, count);
  workouts = [
    ...items,
    { id: items.length + 1, name: myName, count: count + 1 },
  ];
  return workouts;
};

//운동 제목 삭제하기
const handleDelete = (id) => {
  30;
};
const imsi = workouts.filter((item) => item.id != id);
console.log('론지');
printItems();
handleDelete(30);
//자바스크립트에서는 어떤 이름에 싱글 또는 더블 퀘테이션이 없으면 변수 취급
handleAdd('론지', 5);
printItems();
//추가한 다음에도 추가된 내용을 확인하고 싶고,
//또 삭제한 다음에도 삭제가 잘 되었는지 확인하고 싶다.
//함수 설계
//사용자 정의 함수 구현하기
function printItems() {
  for (let i = 0; i < workouts.length; i++) {
    console.log(`${workouts[i].name}, ${workouts[i]['count']}`);
  }
} //end of printItems
