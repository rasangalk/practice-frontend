const {saveStudent, getAllStudents, getOneStudent, updateOneStudent, deleteOneStudent} = require('../dal/student.dao');

const addStudent = async({firstName, lastName, email, age, gender})=>{
    return await saveStudent({firstName, lastName, email, age, gender});
}

const getStudents = async()=>{
    return await getAllStudents();
}

const getStudent = async(id)=>{
    return await getOneStudent(id);
}

const updateStudent = async(id, {firstName, lastName, email, age, gender})=>{
    return await updateOneStudent(id, {firstName, lastName, email, age, gender});
}

const deleteStudent = async(id)=>{
    return await deleteOneStudent(id);
}

module.exports = {addStudent, getStudents, getStudent, updateStudent, deleteStudent};