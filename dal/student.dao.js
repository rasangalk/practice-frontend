const students = require('./index').db('ClassRoom').collection('students');
const ObjectId = require('mongodb').ObjectId;

const saveStudent = async({firstName, lastName, email, age, gender})=>{
    const result = await students.insertOne({firstName, lastName, email, age, gender});
    return result;
}

const getAllStudents = async()=>{
    return await students.find().toArray();
}

const getOneStudent = async(id)=>{
    return await students.findOne({_id:ObjectId(id)});
}

const updateOneStudent = async(id,{firstName, lastName, email, age, gender})=>{
    const update = {firstName, lastName, email, age, gender};
    const result = await students.updateOne({_id: ObjectId(id)}, {$set: update});
    return result;
}

const deleteOneStudent = async(id)=>{
    return await students.deleteOne({_id: ObjectId(id)});
}

module.exports = {saveStudent, getAllStudents, getOneStudent, updateOneStudent, deleteOneStudent}