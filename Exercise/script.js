// ให้เพิ่มคำสั่งที่ทำให้สามารถแสดงชื่อของทุกคนในกลุ่ม
// โดยมีเงื่อนไขดังนี้
// ใช้คำสั่ง console.log() 
// ใน 1 commit สามารถเพิ่ม log ได้ทีละคน
// ต้องทำให้เกิด conflict และ แก้ conflict นั้นด้วยการ merge

function say_hello() {
    // CODE HERE!!!
    console.log("What is your name?")
<<<<<<< HEAD
    console.log("Pitchaporn Pongkham")
    
=======
    console.log("Tharachon Warintaweewat")
>>>>>>> d95a0a6fcb6a6bbd80951fc39d72c053314a192e
}

// Don’t change the code under this comment!
say_hello()