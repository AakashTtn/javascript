let greetings = document.getElementsByClassName('greetings')[0]
let time = document.getElementsByClassName('time')[0]
let date = document.getElementsByClassName('date')[0]

setInterval(()=>{

    let monthArr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]

    let month = monthArr[new Date().getMonth()]
    let todaysDate = new Date().getDate()
    let year = new Date().getFullYear()

    let hours = new Date().getHours()
    let min = new Date().getMinutes()
    let sec = new Date().getUTCSeconds()
    let hr = hours

    
    sec<10 ? sec = `0${sec}` : null
    min<10 ? min = `0${min}` : null
    todaysDate<10 ? todaysDate = `0${todaysDate}` : null

    if(hours<10 || (hours-12)<10){
        if(hours>12){
            hr = hr-12
        }
        hr<10? hr = `0${hr}` : null
    }
    if(hours>12){
        greetings.innerHTML = "Good Evening"
        time.innerHTML = `${hr}:${min}:${sec} PM`
    }
    else{
        greetings.innerHTML = "Good Morning"
        time.innerHTML = `${hr}:${min}:${sec} AM`
    }
    date.innerHTML = `${todaysDate +" "+month+" "+year}`
},1000)
