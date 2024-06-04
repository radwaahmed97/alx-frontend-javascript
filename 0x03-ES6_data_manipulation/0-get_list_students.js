export default function get_list_students() {
    class Student {
        constructor(id, firstName, location) {
            this.id = id;
            this.firstName = firstName;
            this.location = location;
        }
    }
    const students = [];
    students.push(new Student(1, "Guillaume", "San Francisco"));
    students.push(new Student(2, "James", "Columbia"));
    students.push(new Student(3, "Serena", "San Francisco"));
    return students;
}