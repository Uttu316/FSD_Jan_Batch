function User(name, age, eyeColor) {
  this.name = name;
  this.age = age;
  this.eyeColor = eyeColor;
}

const u1 = new User("Vipul", 22, "black");

console.log(u1);

function Student(rollNo, std, name, age, eyeColor) {
  this.rollNo = rollNo;
  this.id = parseInt(Math.random() * 1000) + 100;
  this.std = std;
  User.call(this, name, age, eyeColor);
}

const s1 = new Student(123, 8, "Utkarsh", 25, "black");
console.log(s1);
