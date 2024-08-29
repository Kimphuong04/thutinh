// Thay đổi nội dung búc thư ở đây
var letterContent =" Cảm ơn Minh Thư đã dành thời gian để đọc lá thư của Kim Phương gửi đến emmmmm có những điều chồng muốn gửi gắm đến emmmmm để béeee đợi đến hôm nay mới có thiệt có lỗi với béeeee.Chồng muốn nói cảm ơn vợ đã đến bên chồng có vợ cuộc sống chồng có ý nghĩa hơn hỗm rày vợ làm việc nhiềuuuu quá chắc cănggg thẳngggg mõi mệc nhiềuuu lắmmmm ngày mai chồng sẽ giúp vợ hết đau hồi trước vợ có hỏi chồng là quen vợ chồng thấy thay đổi gì hemmmmm thì chồng thấy vợ giúp chồng rất nhiềuuuuuu và chồng có một người yêuuuu tuyệt vời và chồng sẽ thay đổi nhiều nhiềuuuuu Cảm ơn em yêuuuu nhiềuuuuu. Yêuuuuu emmmm 💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
