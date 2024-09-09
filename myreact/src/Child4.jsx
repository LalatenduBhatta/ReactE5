
function Child4() {
    let student = {
        name: "Rocky",
        age: 24,
        address: "KGF",
        email: "rockybhai@gmail.com"
    }
    let displayStudent = []
    for (let key in student) {
        // console.log(key);
        // console.log(student[key]);
        displayStudent.push(<h1>{key}: {student[key]}</h1>)
    }
    return (
        <div>
            {/* <h1>Name: {student.name}</h1>
            <h1>age: {student.age}</h1>
            <h1>address: {student.address}</h1>
            <h1>email: {student.email}</h1> */}
            {displayStudent}
            --------------------------------
            {
                Object.keys(student).map(key => {
                    return <h1>{key} : {student[key]}</h1>
                })
            }
        </div>
    )
}

export default Child4