function dataAtual(){
    data = new Date;
    if (data.getMonth() < 10){
        return `${data.getDate()}/0${data.getMonth()}/${data.getFullYear()}`
    }
        return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`

}
