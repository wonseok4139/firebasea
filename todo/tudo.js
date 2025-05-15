//우리는 전역변수로 선언하기로 하였다.
const sampleTodos = [
  { id: 1, text: '학교가기', completed: true },
  { id: 2, text: '친구만나기', completed: false },
  { id: 3, text: '과제제출하기', completed: false }, //ES5
];
//요구사항이 무엇인지 적어본다.
//작업순서를 적어본다.
const loadSampleBtn = document.querySelector('.load_sample_button');
/*
loadSampleBtn.addEventListener('click', ()=> {
  console.log("샘플 데이터 로드 버튼 클릭");
  //현재 있는 목록을 지우기 - removeChild

  //샘플 데이터 로드 하기 - createItem

})
*/
//아래는 버튼을 클릭했을 때 호출할 콜백함수 이다.
//이번 코드에서는 콜백함수의 재사용성을 위해 분리하여 구현해 본다.
const getTodoList = () => {
  console.log('콜백함수');
  //while문 괄호안에는 참이나 거짓, 또는 참인지 거짓인지 판별하는 식이옴
  //0은 false
  //현재 ul태그 아래 li태그가 몇 개인지 알수가 없다.
  //그래서 for문 대신 while문을 사용함
  while (items.firstChild) {
    items.removeChild(items.firstChild);
  }
  sampleTodos.forEach((todo) => {
    const item = createItem(todo.text);
    items.appendChild(item);
  });

  // 리셋 버튼 요소 선택
  const resetBtn = document.querySelector('.reset_button');

  // 클릭 이벤트 등록
  resetBtn.addEventListener('click', () => {
    // 목록 전체를 비움
    items.innerHTML = '';
    console.log('할 일 목록이 초기화되었습니다.');
  });

  //end of while
};

//end of getTodoList

loadSampleBtn.addEventListener('click', getTodoList);

//사용자가 입력하는 콤포넌트 -> input 태그
const items = document.querySelector('.items'); //ul태그야

const input = document.querySelector('.footer_input'); //input태그

const addBtn = document.querySelector('.footer_button'); //홈버튼 플러스야
//input태그에서 엔터를 쳤을 때 또는 plus버튼을 클릭했을 때
//재사용을 위해서 함수로 설계 하였다.
const onAdd = () => {
  //사용자가 입력한 친구만나기를 읽어와서 createItem함수를 호출할 때
  //파라미터로 넘긴다.
  const itemName = input.value;
  console.log('사용자가 입력한 오늘의 할 일 : ' + itemName);
  //혹시 아무것도 입력하지 않고서 엔터나 버튼을 클릭한 거야?
  //if문 괄호안에는 참 또는 거짓을 판별할 수 있는 조건문이 와야 한다.
  //==나 === 모두 같아? 다른점은 세 개일 때는 타입도 같아가 포함됨.
  //if(1==1){}true
  //if(1=='1'){}true
  //if(1===1){}true
  //if(1==='1'){}flase
  //if(0) false, 0이 아닌건 true이다.
  //if(500)
  //조건문은 우리 프로그램의 흐름을 바꾼다-
  if (itemName === '') {
    input.focus();
    //if문 아래쪽에 있는 코드는 실행 기회를 갖지 못한다.
    return; //if문 안에서 return을 만나면 해당 함수를 빠져 나간다.
  } //end of if

  const item = createItem(itemName);
  items.appendChild(item);
  //새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}; //end of onAdd
//onAdd 즉 이벤트가 발동되었을 때 인터셉트 하여서 사용자가 입력한 itemName을
//ul(.items)태그 아래 li태그에 삽입한다.
const createItem = (itemName) => {
  console.log(itemName); //사용자가 엔터치거나 plus버튼을 눌렀을 결정된다.
  const itemRow = document.createElement('li');
  itemRow.innerHTML = `
    <div class="item">
      <span class="item_name">${itemName}</span>
      <button class="item-delete">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    <div class="item_divider"></div>
  `;
  const deleteBtn = itemRow.querySelector('.item-delete');
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });
  //return은 함수의 가장 맨 끝에 작성합니다.
  return itemRow;
}; //end of createItem

addBtn.addEventListener('click', () => {
  console.log('plus버튼 클릭');
  onAdd();
});
input.addEventListener('keypress', (event) => {
  //console.log("key ===> "+event.key);//13
  if (event.key === 'Enter') {
    // 엔터키를 눌렀을 때 수행할 동작
    console.log('엔터키를 눌렀습니다.');
    onAdd();
  }
});
