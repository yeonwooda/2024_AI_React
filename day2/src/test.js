// 배열일 때
// 1. spread 연산자
//  1) 문자열
const spreadArray = [..."coffee"];

//  2) rest
const fruits = ["apple", "orange", "kiwi", "grape"];
const [first, second] = fruits; // apple, orange
const [a, ...b] = fruits; // apple, ["orange", "kiwi","grape"]

// ice_americaon - > i a 만 빼고싶으면
const [ice, coffee] = "ice_americaon".split("_");
const i = [...ice][0];
const a1 = [...coffee][0];

const [first1] = [...ice]; // i
const [first2] = [...coffee]; // a

// 오브젝트일 때
const person = { name: "차은우", age: 28, agency: "판타지오" };
// const char = person.name 이렇게 안하고

const { name, ...other } = person; // name: 차은우 other {age:28, agency: 판타지오}

const son = { name: "손", position: "윙" };
const tottham = { club: "토트넘", number: 7 };
const korea = { nation: "대한민국", number: 10 };

const a0 = { son, tottham }; // {{name: "손", position: "윙"},{ club: "토트넘", number: 7 }}
const a2 = { ...son, ...tottham }; // { name: "손", position: "윙", nation: "대한민국", number: 10  }
const a3 = { ...son, ...korea }; //{ name: "손", position: "윙", nation: "대한민국", number: 10  }

const coffeeName = "아메리카노";
const coffeeShots = 2;

// k값과 v값이 같으면 한 단어 가능
const cofee1 = {
  coffeeName,
  coffeeShots,
};
