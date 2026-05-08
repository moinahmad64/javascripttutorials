

const course = {
    languageName: "english",
    price: 1099,
    courseInstructor: "ali"
}

//console.log(course.courseInstructor)

const {courseInstructor: instructor} = course
console.log(instructor)
