function getStudyHours () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        },2000)
    })
}

console.log("เริ่มโหลดข้อมูล...")

getStudyHours().then((hours) => {
      console.log(`เรียนสัปดาห์ละ ${hours} ชั่วโมง`);
})

console.log("ทำงานอื่นต่อ")
