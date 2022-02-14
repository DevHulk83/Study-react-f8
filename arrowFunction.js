
var setName = (id, name, age) => (
    {
        id: id,
        name: name,
        age: age
    }
);

console.log(setName(4, "KonanDev", 20)) //object literals syntax

 // bat su kien click btn se chuyen bg sang mau vang
const btn = document.querySelector('#pushy');

    btn.addEventListener('click', function() {
    console.log(this);
    this.classList.toggle('on');
}); // end Code

// truong hop dung this de rang buoc va khong dung duoc arrow function.
const person = {
    points: 23,
    age: 20,
    score: function() {
        this.points++;
        this.age--;
    }
}
for(i = 1; i < 5; i++) {
    person.score();
} // test cho method score chay 4 lan de xem su thay doi cua gia tri points, age.
person.score(); // moi lan goi se tang points va age len +1 
console.log(person);
// end Code
