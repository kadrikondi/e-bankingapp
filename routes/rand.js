const rand = Math.floor(Math.random() * 1000000000) + 0000000000
const con = '9' + rand
if(con.length === 9){
    console.log('9 length')
    let added = Math.floor(Math.random() *10)
    console.log(con + added)
}else if(con.length < 9){
    console.log('Account number is less than 10')
}
else if(con.length > 10){
    console.log('Account number is greater than 10')
}
else{
    console.log(con)
    console.log(con.length)
}
