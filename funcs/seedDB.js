const userModel = require('../models/UserModel')

const seedDB = async () =>{
  try {
    const user1 = await userModel.create({
      email:"vmarie1997@gmail.com"
    })
    const user2 = await userModel.create({
      email:"clickjaw@outlook.com"
    })
    await user1.save()
    await user2.save()
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = seedDB