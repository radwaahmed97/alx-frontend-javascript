export default function getStudentsByLocation(students, city) {
  const specificCity = students.filter((student) => student.location === city);
  return specificCity;
}
