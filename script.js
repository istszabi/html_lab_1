// ==========================================
// 1. Feladat: Két szám összeadása
// ==========================================
function add(a, b) {
    return a + b;
}
console.log("1. Feladat (Összeg 3 + 4):", add(3, 4)); // 7


// ==========================================
// 2. Feladat: Páros vagy páratlan?
// ==========================================
function isEven(num) {
    return num % 2 === 0;
}
console.log("2. Feladat (4 páros?):", isEven(4)); // true
console.log("2. Feladat (5 páros?):", isEven(5)); // false


// ==========================================
// 3. Feladat: Számláló gombnyomásra
// ==========================================
let count = 0;
function incrementCounter() {
    count++;
    document.getElementById('counter').innerText = count;
}


// ==========================================
// 4. Feladat: Adat bekérése prompttal
// ==========================================
function askName() {
    let name = prompt('Mi a neved?');
    if (name) {
        document.getElementById('name').innerText = 'Üdvözöllek, ' + name + '!';
    }
}


// ==========================================
// 5. Feladat: Visszaszámláló 10-től 0-ig
// ==========================================
function startCountdown() {
    let timeLeft = 10;
    document.getElementById('countdown').innerText = timeLeft;

    let timer = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerText = 'Idő lejárt!';
        } else {
            document.getElementById('countdown').innerText = timeLeft;
        }
    }, 1000);
}


// ==========================================
// 6. Feladat: Tömb elemeinek kiírása listába
// ==========================================
let fruits = ['Alma', 'Banán', 'Narancs'];
let fruitList = document.getElementById('fruitList');

if (fruitList) {
    fruits.forEach(function (fruit) {
        fruitList.innerHTML += '<li>' + fruit + '</li>';
    });
}


// ==========================================
// 7. Feladat: Tömb elemeinek szorzása (map)
// ==========================================
function multiplyArray(arr, multiplier) {
    return arr.map(num => num * multiplier);
}
let numbers = [1, 2, 3, 4];
console.log("7. Feladat (Szorzás 2-vel):", multiplyArray(numbers, 2)); // [2, 4, 6, 8]


// ==========================================
// 8. Feladat: Objektum tulajdonságainak kiírása
// ==========================================
let person = { name: 'Szabolcs', age: 20, city: 'Marosvásárhely' };
let personList = document.getElementById('personInfo');

if (personList) {
    for (let key in person) {
        personList.innerHTML += '<li><strong>' + key + ':</strong> ' + person[key] + '</li>';
    }
}


// ==========================================
// 9. Feladat: Háttérszín módosítása kattintásra
// ==========================================
function changeBg() {
    document.body.style.backgroundColor = '#ffe4e1';
}


// ==========================================
// 10. Feladat: Időzített üdvözlő üzenet (5 mp után)
// ==========================================
window.onload = function () {
    setTimeout(function () {
        alert('Üdvözöllek az oldalon!');
    }, 5000);
};