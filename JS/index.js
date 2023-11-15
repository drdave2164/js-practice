// let name = "Alex",
//   age = 10;

// const price = 100;

// // let age = 10;
// // let name = "Alex";

// age = 20;
// age = 30;

// age = name = "Ivan";

// // price = 200;

// var color = "#fff";
// var color = "#000";
// console.log("Log:", age, name, price, color);

//lesson2====================================================

// let n = 109999999999999999999999n;

// let b = NaN;

// let c = Infinity;

// // console.log(n, b);
// // console.log(1 / 0);
// console.log(109999999999999999999999 > Infinity);

// const t = "hello";
// const p = "'hello'";
// const l = `hello ${t} ${2 + 2}`;

// console.log(l);

// let yes = true;
// let no = false;

// let none = null;

// console.log(typeof n);

//lesson3========================================

// const a = 1 - 4 - 45 - 3 - 2 - 7 - 8 - 3;
// //const b = a + "" + "test"; old!!!
// const b = `${a} Hello 10`; //new!!!
// const c = 1 - "10";
// const d = -(-10) / 1;
// const e = a * c;
// let f = "5" ** 4;
// let g = 6 % 7;

// // console.log(f, g);

// // f = g-- + 1;

// console.log(f);

// f *= 6;

// console.log(f);

//lesson4===========================

// const personAge = 10;
// const dogAge = "10";

// console.log(personAge === dogAge);

//lesson5============================

// const userRole = 1;
// const adminRole = 2;

// const productStokePrice = 99;
// const defaultStokePrice = 150;
// const adminPrice = 0;

// const productPrice =
//   adminPrice ?? defaultStokePrice ?? defaultStokePrice ?? 100;

// console.log("productPrice", productPrice);

// const ivanRole = userRole;
// const ivanBalance = 300;

// const defaultUserName = null;
// const ivanName = null;

// const isAdmin = ivanRole === adminRole;
// const canBuy = ivanBalance >= productPrice;

// const result1 = isAdmin === true;
// const result2 = canBuy === true;

// const result = result1 === result2;

// const result = ivanRole === adminRole && ivanBalance >= productPrice;

// console.log(result);

// const authorName = ivanRole === adminRole || "Admin";

// console.log(authorName);

// lesson 8 if

// const CUSTOM_NAME = "My robot";
// const MODE = 0;
// const ROOM = "Вітальня";

// const COMAND = "change name";

// if (COMAND === "change name" && MODE !== 0) {
//   const name = CUSTOM_NAME || "Robot v134t1";
//   console.log(`Start ${name}`);
// }
// if (MODE === 0) {
//   console.log("Robot is offline");
// }

// if (COMAND === "work") {
//   const room = ROOM;
//   const mode = MODE;

//   console.log(`Mode: ${mode}; Прибираю кімнату: ${room}`);
// }

// const login = "user";
// const password = "12345qwe54321";
// const isAdmin = true;
// const isLoggeddIn = true;

// if (isLoggeddIn) {
//   if (isAdmin) {
//     console.log("Переходимо на сторінку  /admin");
//   } else if (login === "demo") {
//     console.log("Переходимо на сторінку  /demo");
//   } else {
//     console.log("Переходимо на сторінку  /home");
//   }
// } else {
//   if (login && password) {
//     console.log("Token:", 124237894658732456);

//     if (isAdmin) {
//       console.log("Переходимо на сторінку  /admin");
//     } else {
//       console.log("Переходимо на сторінку  /home");
//     }
//   }
// }

// lesson 9 цикли

// let count = 0;
// let isFast = true;

// while (count < 5) {
//   console.log("Hello world!", count);

//   if (isFast && count >= 3) {
//     count = 5;
//   } else {
//     count++;
//   }
// }

// const PRODUCT_AMOUNT = 6;
// const DISCIONT_ADDITIONAL = 2;

// let discountAmount = 0;
// let productCount = 0;
// while (
//   productCount < PRODUCT_AMOUNT &&
//   DISCIONT_ADDITIONAL <= 10 &&
//   discountAmount <= 10
// ) {
//   productCount++;

//   if (productCount <= 0) {
//     break;
//   }

//   if (productCount <= 3) {
//     discountAmount += 1;
//   } else if (productCount > 3 && productCount <= 5) {
//     discountAmount += 1.5;
//   } else if (productCount > 5 && productCount <= 8) {
//     discountAmount += 2;
//   } else if (productCount > 8) {
//     discountAmount += 2.5;
//   }

//   if (DISCIONT_ADDITIONAL) {
//     discountAmount += DISCIONT_ADDITIONAL;
//   }

//   console.log(productCount, discountAmount);
// }
// if (discountAmount > 10) {
//   discountAmount = 10;
// }
// console.log("Знижка:", discountAmount, "%");
// console.log("Знижка для товарів:", productCount);
// console.log("Товарів не мають знижки:", PRODUCT_AMOUNT - productCount);

// let container = 5;
// let storage = 20;

// let car = 3;

// do {
//   car++;

//   storage -= container;
//   console.log(car, storage);
// } while (car < 3);

// if (car > 3) {
//   console.log("Нам потрібна нова машина");
// }

// let start = 40;
// let goal = 100;

// let step = 0;
// let set = 8;
// let rest = 10;

// do {
//   if (step === 0) {
//     console.log("Початок тренування");
//   }

//   start++;
//   step++;

//   if (step === goal || start === goal) {
//     console.log("Кінець тренування");
//     break;
//   }

//   if (step % rest === 0) {
//     console.log(`Зробіть перерву`);
//     continue;
//   }

//   if (step % set === 0) {
//     console.log(`Ви зробили ${step / set} сет(ів)`);
//   }
//   if (step === goal / 2) {
//     console.log(`Ви зробили половину тренувань`);
//   }

//   console.log("Поточний прогрес", step);
// } while (step < goal && start < goal);

// let age = 25;
// let hasExp = true;
// let hasEdu = false;

// form: {
//   if (age >= 18) {
//     if (hasExp) {
//       if (hasEdu) {
//         console.log("Ви підходите!");
//       }
//       if (!hasEdu) {
//         console.log("Ви не підходите. Немає освіти");
//       }
//     }
//     if (!hasExp) {
//       console.log("Ви не підходите. Немає досвіду");
//     }
//   }

//   if (age < 18) {
//     console.log("Ви не підходите. Маленький вік");
//   }
// }

// table: for (let i = 1; i < 10; i++) {
//   if (i === 1) {
//     continue;
//   }

//   console.log(`Число ${i} ========================`);
//   for (let j = 1; j < 10; j++) {
//     if (i === 1) {
//       continue;
//     }

//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

//lesson function

// function calcSpace(amount, unit = "px") {
//   return `${amount * 4}${unit}`;
// }

// console.log(calcSpace(5, "cm"));

// function playTrackById(trackId) {
//   /// отримати файл пісні і запустити її
// }

// function stopTrackById(trackId) {
//   /// отримати файл пісні і поставити її на паузу
//   console.log(`отримати файл пісні з ID ${trackId} і поставити її на паузу`);
// }

// function play(trackName, trackId) {
//   console.log(`Запускаємо ${trackName}`);

//   playTrackById(trackId);
// }

// function end(oldTrackName, newTrackName) {
//   console.log(`Завершили грати ${oldTrackName}`);
//   console.log(`Наступний трек ${newTrackName}`);
// }

// function pausePlay(currentTrackName) {
//   console.log(`Tрек ${currentTrackName} на паузі`);

//   reloadDataTrack();

//   play();
// }

// // function reloadDataTrack(amount) {
// //   if (amount <= 0) {
// //     console.log("Данні оновленні вказану кількість разів");
// //   } else {
// //     console.log("Поторне оновлення");
// //     /// Певний код для оновлення данних
// //     reloadDataTrack(amount - 1);
// //   }
// // }
// // reloadDataTrack(5);

// // function pauseStopByTrack(trackName, trackId) {
// //   let originTrackName = trackName;
// //   let originTrackId = trackId;

// //   return () => {
// //     stopTrackById(originTrackId);
// //     console.log(`Tрек ${originTrackName} на паузі`);
// //   };
// // }

// // const pauseStop123 = function pauseStop(originTrackId, originTrackName) {
// //   stopTrackById(originTrackId);
// //   console.log(`Tрек ${originTrackName} на паузі`);
// // };

// // pauseStop123();

// // function pauseStopByTrack(trackName, trackId) {
// //   return () => {
// //     stopTrackById(trackId);
// //     console.log(`Tрек ${trackName} на паузі`);
// //   };
// // }

// // const pauseStop456 = pauseStopByTrack("La-la-la");

// // pauseStop456();
// // pauseStop456();
// // pauseStop456();

// function pauseStopByTrack(trackName, trackId) {
//   let isPause = null;
//   return () => {
//     if (isPause == true) {
//       return;
//     }

//     stopTrackById(trackId);
//     console.log(`Tрек ${trackName} на паузі`);
//     isPause = true;
//   };
// }

// const pauseStop456 = pauseStopByTrack("La-la-la", 10);

// pauseStop456();
// pauseStop456();
// pauseStop456();

// // const runCommand = function (command, errorFn) {
// //   const result = command();

// //   if (!result) {
// //     return errorFn();
// //   }
// // };

// // runCommand(
// //   () => {
// //     console.log("Запуск команди");
// //     return 1 - 1;
// //   },
// //   //   function () {
// //   //     console.log("Помилка");
// //   //   }
// //   () => console.log("Помилка")
// // );

// //мемоізація
// const memoCalcSpace = (oldAmount = null, oldUnit = null, oldResult = null) => {
//   return (amount, unit = "px") => {
//     if (oldAmount === amount && unit === oldUnit) {
//       console.log("Memo");
//       return oldResult;
//     }

//     oldResult = `${amount * 4}${unit}`;
//     oldAmount = amount;
//     oldUnit = unit;

//     return oldResult;
//   };
// };

// const calcSpace = memoCalcSpace();

// console.log(calcSpace(4));
// console.log(calcSpace(4));

// // композиція функції

// const restartTrac = (trackName, trackId) => {
//   return play();
// };

//lesson 11
// const code = `console.log('Hello')`;

// eval(code);

// function calcScreenRotation(w, h) {
//   return w / h;
// }
// console.log(calcScreenRotation(1920, 1080));
// console.log(calcScreenRotation(1920, 0));
// console.log(calcScreenRotation(1920, "asdergf"));

// function calcScreenRotation(w, h) {
//   w = parseInt(w);
//   h = parseInt(h);

//   let result = w / h;

//   if (isNaN(result)) {
//     return "Error";
//   } else if (!isFinite(result)) {
//     return "is Infinity";
//   } else {
//     return result;
//   }
//   // isFinite(result) ? result : null;
// }
// console.log(calcScreenRotation("1920px", "1000px"));

// const num = parseInt("0101", 2);
// console.log(num);
// const num1 = parseFloat("12.567");
// console.log(num1);

// const domain = "it-brains.com.ua";

// function redirectToPath(path) {
//   const link = encodeURI(`https://${domain}/${path}`);
//   //робимо перехід на сторінку
//   console.log(link);
//   return link;
// }
// const URI =
//   "https://it-brains.com.ua/product/%D0%9C%D1%96%D0%BA%D1%80%D0%BE%D1%84%D0%BE%D0%BD%202000/info";

// function getUrl(urlInURI) {
//   urlInURI = decodeURI(urlInURI);
//   console.log(urlInURI);

//   return urlInURI;
// }
// const path = "product/Мікрофон 2000/info";

// const link = `https://${domain}/${path}`;

// const link1 = redirectToPath(path);

// const link2 = getUrl(link1);

// console.log(link === link2);

//lesson12

const a = 0.1;
const b = 0.2;
const c = 0.3;

const d = a + b

console.log(d - c);
console.log(c - d);
console.log(d - c < Number.EPSILON && c - d < Number.EPSILON);

console.log(a)