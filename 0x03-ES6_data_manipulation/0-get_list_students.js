export default function get_list_students() {
    const students = [];
    students.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
    students.push({ id: 2, firstName: 'James', location: 'Columbia' });
    students.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });
    return students;
}
