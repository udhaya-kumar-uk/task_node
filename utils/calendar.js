function getfilename(date=new Date()){
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}.txt`
}


module.exports={
    getfilename
}