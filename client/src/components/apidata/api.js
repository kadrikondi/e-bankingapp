const axios = require('axios')

//get transaction
export async function getTransaction(id){
    try {
        const info = await axios.get(`/user/transact/${id}`)
        return info.data
    } catch (error) {
        return error.message
    }
}

//get single user
export async function getSingleUser(id){
    try {
        const info = await axios.get(`/user/transact/${id}`)
        return info.data
    } catch (error) {
        return error.message
    }
}
//get account balance
export async function getBalance(id){
    try {
        const info = await axios.get(`/user/acct/${id}`)
        console.log(info)
        return info.data
    } catch (error) {
       return error.message 
    }
}

//search for a doctor api
export async function searchDoctor(search) {
    try {
        const { acct_no } = search
        const searchEngine = await axios.post('/search', {acct_no})
        //console.log(searchEngine.data)
        return searchEngine.data
        
    } catch (error) {
        return error.message
    }
}

////get all transactions
export async function getAllTransaction(){
    try {
        const info = await axios.get('/alltrans')
        return info.data
    } catch (error) {
        return error.message
    }
}

//get registered users
export async function getRegistered(){
    try {
        const info = await axios.get('/users')
        return info.data
    } catch (error) {
        return error.message
    }
}

//generate account number
export async function generateAccountNumber(){
    try {
        const info = await axios('/generate')
        return info.data
    } catch (error) {
       return error.message 
    }
}

//all complains
export async function getAllComplains(){
    try {
        const info = await axios.get('/complains')
        return info.data
    } catch (error) {
        
    }
}