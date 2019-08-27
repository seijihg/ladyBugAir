const user_json = (obj) => {
    const user = obj
    const userObject = user.toObject()
 
    delete userObject.password
 
    return userObject
}

module.exports = user_json