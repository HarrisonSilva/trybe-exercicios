const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (students, grades) => {
    const studentAverage = []

    for (let i = 0; i < students.length; i += 1) {
        const average = grades[i].reduce((acc, curr) => acc + curr, 0) / grades[i].length
        studentAverage.push({
            name: students[i],
            average: average,
        })
    }
    return studentAverage
    
  }
console.log(studentAverage(students, grades));