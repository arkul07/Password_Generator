let msg="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLXCVBNM1234567890!@#$%^&"
let genbtn=document.getElementById("generator")
let pass1=document.getElementById("option1")
let pass2=document.getElementById("option2")
let pass3=document.getElementById("option3")
let pass4=document.getElementById("option4")
function generatePassword() {
    clearPassword()
    // let x=prompt("Enter length of password required")
    console.log(msg.length)
    let count=0,count1=0,count2=0,count3=0
    for(let i=0;i<12;i++) {
        count=Math.floor(Math.random()*68)
        count1=Math.floor(Math.random()*68)
        count2=Math.floor(Math.random()*68)
        count3=Math.floor(Math.random()*68)
        pass1.textContent+=msg.charAt(count)
        pass2.textContent+=msg.charAt(count1)
        pass3.textContent+=msg.charAt(count2)
        pass4.textContent+=msg.charAt(count3)

        

    }


}
function clearPassword() {
    pass1.textContent="";
    pass2.textContent="";
    pass3.textContent="";
    pass4.textContent="";

}