function rotateFunc() {
  // تعریف آیتم‌ها با زوایاشون و توضیحات
  const items = [
    { angle: 30, id: "2-3-0", message: "شما برنده 100 هزار تومن تخفیف شدید!" },
    { angle: 65, id: "2-3-1", message: "شما برنده 100 هزار تومن تخفیف شدید!" },
    { angle: 70, id: "1-4-0", message: "شما برنده آیتم فوری شدید!" },
    { angle: 109, id: "1-4-1", message: "شما برنده آیتم فوری شدید!" },
    { angle: 115, id: "2-2-0", message: "شما برنده آیتم 100 امتیاز شدید!" },
    // { angle: 160, id: "1-1-1", message: "شما برنده آیتم 500 هزار تومن تخفیف شدید!" },
    // { angle: 195, id: "1-1-1", message: "شما برنده 500 هزار تومن تخفیف شدید!" },
    { angle: 205, id: "2-4-0", message: "شما برنده  200 هزارتومن تخفیف شدید!" },
    { angle: 250, id: "1-3-0", message: "شما برنده امتیاز شدید!" },
    { angle: 300, id: "2-1-0", message: "شما برنده  50 امتیاز شدید!" },
    // { angle: 340, id: "1-2-0", message: "شما برنده  3 میلیون اعتبار شدید!" },
    // { angle: 375, id: "1-2-1", message: "شما برنده  3 میلیون اعتبار شدید!" }
  ];

  // انتخاب رندوم یک آیتم
  const selectedItem = items[Math.floor(Math.random() * items.length)];
  
  // ضرب زاویه در 10 برای چرخش بیشتر + اضافه کردن چرخش اولیه
  const baseRotations = 3600; // 10 دور کامل
  const finalAngle = baseRotations + selectedItem.angle;

  console.info('selected item:', selectedItem.id);
  console.info('final angle:', finalAngle);

  // اعمال چرخش
  const box = document.getElementById('box');
  box.style.transition = "transform 5s ease-out";
  box.style.transform = `rotate(${finalAngle}deg)`;

  var elem = document.getElementById('container');
  elem.classList.remove('animate');

  // نمایش پیام موفقیت بعد از اتمام چرخش
  setTimeout(() => {
    elem.classList.add('animate');
    alert(selectedItem.message); // یا هر روش دیگری برای نمایش پیام
    console.log(selectedItem.message);
  }, 5000); // 5 ثانیه با توجه به مدت زمان انیمیشن
}


