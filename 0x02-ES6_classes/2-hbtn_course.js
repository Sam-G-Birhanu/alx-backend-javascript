export default HolbertonCourse {
  Constructor(name, length, students){
    if (typeof(name) === string)
      this._name = name;
    if (typeof(length) === number)
      this._length = length;
    if (typeof(students) === object)
      this._students = students;
}
}
