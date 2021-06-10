let date = new Date
let day = date.getDate()
let month = date.getMonth()
let leftImg = "./img/hangg.jpg"
let rightImg = "./img/hangg.jpg"
let title = document.querySelector("h1")
let propose = document.getElementById("propose")
month +=1
let year = date.getFullYear()
let sayNo = document.getElementById("sayNo")
let sayYes = document.getElementById("sayYes")
let body = document.querySelector("body")
body.style.display ="none"



let code = prompt("!!!Nhập vào mã bí mật!!!")



if(code === "yêu Hằng nhiều"){
    body.style.display = "block"
}

let changeTitle = (text) => {
    title.innerHTML = `<i class="fal fa-kiss-wink-heart"></i> ${text}  <i class="fal fa-kiss-wink-heart"></i>`
}

let leftImage = (link) => {
    Swal.fire({
        title: 'Cái đẹp không thể nào ghi hình, mà chỉ tồn tại trong đôi mắt kẻ si tình <3',
        text: `Ngày tình yêu bắt đầu: ${day} tháng ${month} năm ${year}` ,
        imageUrl: './img/hoahong.jpg',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        background: ' rgb(255, 158, 158)',
        backdrop: `
          rgba(241, 237, 237,0.4)
           url(${link})
          left top
           no-repeat
        `
    })
}

let rightImage = (link) => {
    Swal.fire({
        title: 'Vậy là, em làm vợ anh nhé!' ,
        text: `Ngày rước nàng về dinh: ${day} tháng ${month} năm ${year}` ,
        imageUrl: './img/hoahong.jpg',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        background: ' rgb(255, 144, 144)',
        backdrop: `
          rgba(241, 237, 237,0.4)
           url(${link})
          right top
           no-repeat
        `
    })
}

sayYes.addEventListener("click", () => {
    leftImage(leftImg)
})

sayNo.addEventListener("click", () => {
    rightImage(rightImg)
})

