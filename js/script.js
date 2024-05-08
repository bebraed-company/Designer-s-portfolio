document.getElementById("slider1").addEventListener("click", function() {
    document.getElementById("MJ").classList.remove("off")
    document.getElementById("JsSth").classList.add("off")
    document.getElementById("Shreck").classList.add("off")
    document.getElementById("AdHit").classList.add("off")
    document.getElementById("Masunya").classList.add("off")
    document.getElementById("Sanboy").classList.add("off")
    document.getElementById("slider1").classList.add("on")
    document.getElementById("slider2").classList.remove("on")
    document.getElementById("slider3").classList.remove("on")
    document.getElementById("slider4").classList.remove("on")
    document.getElementById("slider5").classList.remove("on")
    document.getElementById("slider6").classList.remove("on")
})
document.getElementById("slider2").addEventListener("click", function() {
    document.getElementById("MJ").classList.add("off")
    document.getElementById("JsSth").classList.remove("off")
    document.getElementById("Shreck").classList.add("off")
    document.getElementById("AdHit").classList.add("off")
    document.getElementById("Masunya").classList.add("off")
    document.getElementById("Sanboy").classList.add("off")
    document.getElementById("slider1").classList.add("on")
    document.getElementById("slider2").classList.add("on")
    document.getElementById("slider1").classList.remove("on")
    document.getElementById("slider3").classList.remove("on")
    document.getElementById("slider4").classList.remove("on")
    document.getElementById("slider5").classList.remove("on")
    document.getElementById("slider6").classList.remove("on")
})

document.getElementById("slider3").addEventListener("click", function() {
    document.getElementById("MJ").classList.add("off")
    document.getElementById("JsSth").classList.add("off")
    document.getElementById("Shreck").classList.remove("off")
    document.getElementById("AdHit").classList.add("off")
    document.getElementById("Masunya").classList.add("off")
    document.getElementById("Sanboy").classList.add("off")
    document.getElementById("slider3").classList.add("on")
    document.getElementById("slider1").classList.remove("on")
    document.getElementById("slider2").classList.remove("on")
    document.getElementById("slider4").classList.remove("on")
    document.getElementById("slider5").classList.remove("on")
    document.getElementById("slider6").classList.remove("on")
})

document.getElementById("slider4").addEventListener("click", function() {
    document.getElementById("MJ").classList.add("off")
    document.getElementById("JsSth").classList.add("off")
    document.getElementById("Shreck").classList.add("off")
    document.getElementById("AdHit").classList.remove("off")
    document.getElementById("Masunya").classList.add("off")
    document.getElementById("Sanboy").classList.add("off")
    document.getElementById("slider4").classList.add("on")
    document.getElementById("slider1").classList.remove("on")
    document.getElementById("slider2").classList.remove("on")
    document.getElementById("slider3").classList.remove("on")
    document.getElementById("slider5").classList.remove("on")
    document.getElementById("slider6").classList.remove("on")
})

document.getElementById("slider5").addEventListener("click", function() {
    document.getElementById("MJ").classList.add("off")
    document.getElementById("JsSth").classList.add("off")
    document.getElementById("Shreck").classList.add("off")
    document.getElementById("AdHit").classList.add("off")
    document.getElementById("Masunya").classList.remove("off")
    document.getElementById("Sanboy").classList.add("off")
    document.getElementById("slider5").classList.add("on")
    document.getElementById("slider1").classList.remove("on")
    document.getElementById("slider2").classList.remove("on")
    document.getElementById("slider3").classList.remove("on")
    document.getElementById("slider4").classList.remove("on")
    document.getElementById("slider6").classList.remove("on")
})

document.getElementById("slider6").addEventListener("click", function() {
    document.getElementById("MJ").classList.add("off")
    document.getElementById("JsSth").classList.add("off")
    document.getElementById("Shreck").classList.add("off")
    document.getElementById("AdHit").classList.add("off")
    document.getElementById("Masunya").classList.add("off")
    document.getElementById("Sanboy").classList.remove("off")
    document.getElementById("slider6").classList.add("on")
    document.getElementById("slider1").classList.remove("on")
    document.getElementById("slider2").classList.remove("on")
    document.getElementById("slider3").classList.remove("on")
    document.getElementById("slider4").classList.remove("on")
    document.getElementById("slider5").classList.remove("on")
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

document.getElementById('quote').addEventListener('click', function() {
    alert("https://media.discordapp.net/attachments/984112629050130522/1237086952659091638/image.png?ex=663a5e81&is=66390d01&hm=e7bda83606b6fc344517cb62bfc0f142008bd2ab5d63aeabc61897f4b886e41b&=&format=webp&quality=lossless")
})

document.getElementById("exp_more").addEventListener("click", function() {
    document.getElementById("modal").classList.add("open")
})

document.getElementById("close_md_bx").addEventListener("click", function() {
    document.getElementById("modal").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal").classList.remove("open")
    }
})

document.getElementById("Menu").addEventListener("click", function() {
    alert("Я не знаю чё сюда добавить")
})