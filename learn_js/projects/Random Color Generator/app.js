const getcolor = () => {
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomCode = "#"+ randomNumber.toString(16)
    document.body.style.backgroundColor = randomCode
    document.getElementById("color-code").innerText = randomCode
    
    navigator.clipboard.writeText(randomCode)
    alert("Color Code Copied to the clipboard")
}   

// Event Call
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)


// Initial Call
getcolor()