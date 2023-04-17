function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age,
  this.marks = []
}

let student1 = new Student ('Alex', 'male', 21);
let student2 = new Student ('Edward', 'male', 20);
let student3 = new Student('Kris', 'female', 19);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMarks = function(...marks) {
    if (this.marks ===  undefined) {
        return;
        }else {
    this.marks.push(...marks)}
  }


Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        return 0;
    } else {
        let avg = this.marks.reduce((acc, current) => {
            return acc += current;
         }, 0)

        return avg / this.marks.length
    } 
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason; 
}
