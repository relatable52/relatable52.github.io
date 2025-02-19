---
layout: post
title: "Một bài post nhân dịp Valentine"
author: "Chính D. Trần"
categories: journal
tag: [code, p5.js, valentine]
image: assets\img\hustkkk.jpg
---
> Theo Wikipedia: Ngày lễ Tình nhân, hay còn gọi ngày Thánh Valentine hay Bữa tiệc của Thánh Valentine, diễn ra vào ngày 14 tháng 2 hàng năm. Ngày lễ này bắt nguồn là một ngày lễ trong Kitô giáo để vinh danh thánh Valentine, và về sau đã trở thành một ngày lễ để vinh danh tình yêu tại nhiều nơi trên thế giới.

Hôm này là lễ Tình nhân, và mặc dù mình không có ai để đón Valentine cùng nhưng vẫn muốn viết một cái gì đó để gọi là có không khí. Đây sẽ là một bài viết ngắn thôi, chủ yếu là để làm vơi đi cái cảm giác FA ấy mà.

Có lẽ là nhiều bạn vẫn nhớ cái trend **Trái tim thủ khoa Lý** mà rầm rộ hồi năm ngoái (cũng lâu rồi mình không nhớ rõ khi nào). Còn nếu mà các bạn không nhớ thì về cơ bản là đợt đấy có một bộ phim khá hot đó là **[Chiếc bật lửa và Váy công chúa](https://www.netflix.com/vn/title/81666107)**. Mình cũng không phải fan của phim tình cảm cũng như là phim Trung Quốc nên mình cũng chẳng biết nội dung nó là gì đâu. Mình chỉ biết là có một cảnh là nam 9 Lý Tuân (thủ khoa Lý) code linh tinh gì đó ra hình trái tim để tỏ tình nữ 9 (mình không nhớ tên). Cảnh này cũng trở thành hot trend lúc đó luôn, gọi là **Trái tim thủ khoa Lý**.

Hôm nay thì là Valentine mình cũng sực nhớ lại là hồi đó mình cũng nhái lại một cái **Trái tim thủ khoa Lý** theo kiểu của mình. Sau đây thì cho các bạn chiêm ngưỡng luôn.

<div id="traitimthukhoaly" style="height: 30rem; width: 60%; max-height: 70%; min-width: 30rem;">
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/addons/p5.sound.min.js"></script>
<script>
var t = 0;
function setup() {
  pixelDensity(1);
  var W = document.getElementById('traitimthukhoaly').offsetWidth*0.95;
  var H = document.getElementById('traitimthukhoaly').offsetHeight*0.95;
  var canvas = createCanvas(W, H);
  canvas.parent('traitimthukhoaly');
}
function windowResized() {
  var W = document.getElementById('traitimthukhoaly').offsetWidth*0.95;
  var H = document.getElementById('traitimthukhoaly').offsetHeight*0.95;
  resizeCanvas(W, H);
}
function draw() {
  t += 0.1
  background(250, 200, 200);
  stroke(255, 100, 100);
  strokeWeight(10)
  var r0 = min(width, height)*0.07*(1+0.1*cos(t));
  translate(width/2, height/3);
   for(let i = 1; i <= 50; i++){
    index = (i+t*5) - floor((i+t*5)/50)*50;
    co = exp(-index*index*0.001-0.05);
    strokeWeight(r0*co*0.5);
    stroke(255, 100, 100, 200*co);
    for(let j = 0; j <= 20; j++){
      let the = 6*PI*noise(j*0.1 + t*0.005 + i*5);
      let r = co*r0*(3.6 -(cos(2*the) + 3*sin(the))/(0.8 + abs(cos(the))) + 1.5*cos(2*the));
      let x = r*(1-0*noise(t*0.005 + the))*cos(the);
      let y = -r*(1+0*noise(t*0.005 + the))*sin(the);
      point(x,y);
    }
  }
}
</script>

Lý Tuân thì code bằng `C++` (không hiểu sao code được), còn mình gà hơn thì dùng `HTML`, `CSS` với `JavaScript` thôi. Mình có dùng một thư viện là `p5.js` (vì nó nhanh và tiện). Nếu các bạn search trên mạng thì nó cũng sẽ ra cả nghìn cái code trái tim, và thực sự nhiều cái còn đẹp hơn thế này nhiều. Nhưng mà, tự làm thì có ý nghĩa hơn là `Ctrl C Ctrl V` chứ nhỉ.

Bạn nào cần code thì xem ở link dưới nhá.  https://editor.p5js.org/cheesysausages/sketches/pliOcFJIA

Chúc các bạn một ngày lễ Tình nhân thật là ấm áp 🥰🥰

