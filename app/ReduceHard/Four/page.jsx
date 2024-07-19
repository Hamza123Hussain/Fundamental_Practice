'use client'
import React, { useState } from 'react'

const ManageStudentGradesComponent = () => {
  const students = [
    { name: 'Alice', grades: [85, 90, 92] },
    { name: 'Bob', grades: [78, 81, 79] },
    { name: 'Charlie', grades: [88, 87, 91] },
    { name: 'David', grades: [92, 95, 94] },
  ]

  const [averageGrades, setAverageGrades] = useState({})
  const [highestAverageStudent, setHighestAverageStudent] = useState('')

  const calculateGrades = () => {
    const StudentARRAY = students.reduce(
      (acc, student) => {
        const totalGrade = student.grades.reduce((sum, grade) => sum + grade, 0)
        const averageGrade = totalGrade / student.grades.length
        acc.St.push({
          Name: student.name,
          Total: totalGrade,
          Avg: averageGrade,
        })

        return acc
      },
      { St: [] }
    )

    setAverageGrades(StudentARRAY.St)
    const highest = StudentARRAY.St.reduce(
      (max, student) => (student.Avg > max.Avg ? student : max),
      { Name: '', Avg: 0 }
    )

    setHighestAverageStudent(highest.Name)
  }

  return (
    <div>
      <h1>Manage Student Grades</h1>
      <p>Student Records: {JSON.stringify(students)}</p>
      <p>Average Grades: {JSON.stringify(averageGrades)}</p>
      <p>Student with Highest Average: {highestAverageStudent}</p>
      <button onClick={calculateGrades}>Calculate Grades</button>
    </div>
  )
}

export default ManageStudentGradesComponent
