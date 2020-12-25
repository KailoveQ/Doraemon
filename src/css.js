const string = `
/*  */
.head {
  height: 268px;
  width: 280px;
  top: 35px;
  margin-left: -140px;
}
.face {
  width: 246px;
  height: 232px;
  top: 70px;
  margin-left: -123px;
}
.eye {
  width: 56px;
  height: 64px;
  top: 42px;
}
.smallEye {
  width: 16px;
  height: 24px;
  top: 20px;
  margin-left: -8px;
  background: black;
  transform-origin: 50% 100%;
}

.smallEye::before {
  width: 10px;
  height: 14px;
  position: relative;
  top: 0px;
}

.eye.left > .smallEye {
  left: 70%;
}

.eye.right > .smallEye {
  left: 30%;
}

.eye.left > .smallEye::before {
  left: 3px;
}
.eye.right > .smallEye::before {
  left: -1px;
}
.nose {
  width: 36px;
  height: 36px;
  top: 94px;
  margin-left: -18px;
  background: rgb(212, 3, 41);
}
.nose::after {
  width: 11px;
  height: 11px;
  top: 22%;
  left: 10%;
}

.lip.left {
  width: 120px;
  height: 40px;
  border-bottom-left-radius: 33px 30px;
  transform: rotate(-8deg);
  top: 124px;
  margin-left: -120px;
}
.lip.right {
  width: 120px;
  height: 40px;
  border-bottom-right-radius: 33px 30px;
  transform: rotate(8deg);
  top: 124px;
  margin-right: -120px;
}

.lip.left::after {
  border-top-left-radius: 20px 20px;
  transform: rotate(0deg);
  top: -51%;
  right: 69.4%;
}
.lip.right::after {
  top: -51%;
  left: 69.4%;
  border-top-right-radius: 20px 20px;
  transform: rotate(0deg);
}

.upperLip {
  height: 24px;
  width: 0;
  background: #000;
  border-radius: 25%;
  top: 130px;
}

.beard {
  height: 1px;
  width: 57px;
  background: black;
}

.beard.left1 {
  margin-left: -80px;
  transform: rotate(16deg);
}
.beard.right1 {
  margin-right: -80px;
  transform: rotate(-16deg);
}
.beard.left2 {
  margin-left: -105px;
}
.beard.right2 {
  margin-right: -105px;
}
.beard.left3 {
  margin-left: -90px;
  transform: rotate(-10deg);
}
.beard.right3 {
  margin-right: -90px;
  transform: rotate(10deg);
}
.mouse-wrapper {
  height: 140px;
  width: 230px;
  overflow: hidden;
  top: 155px;
  margin-left: -115px;
}

.mouse {
  height: 700px;
  width: 200px;
  border-radius: 270px/378px;
  top: -576px;
  margin-left: -100px;
  background: rgb(209, 5, 44);
  overflow: hidden;
}
.mouse > .tongue {
  width: 90px;
  height: 40px;
  z-index: 2;
  border-radius: 0 0 100px 100px;
  background: rgb(244, 83, 2);
  bottom: -10px;
  margin-left: -45px;
}

.mouse > .tongue::before {
  height: 30px;
  width: 40px;
  border-top-left-radius: 80px 50px;
  transform: rotate(45deg);
  background: rgb(244, 83, 2);
  top: -16px;
  right: 3%;
}

.mouse > .tongue::after {
  height: 30px;
  width: 40px;
  border-top-right-radius: 90px 50px;
  transform: rotate(-45deg);
  background: rgb(244, 83, 2);
  top: -16px;
  left: 3%;
}

/* 这里是铃铛 */
.neck {
  width: 170px;
  height: 20px;
  background-color: rgb(182, 0, 23);
  border-radius: 10px;
  top: 282px;
  margin-left: -85px;
  z-index: 4;
}
.neck > .bell {
  height: 40px;
  width: 40px;
  background-color: #f9f12a;
  top: 4px;
  margin-left: -20px;
}
.neck > .bell > .bellTongue {
  width: 12px;
  height: 10px;
  top: 20px;
  margin-left: -6px;
}
.neck > .bell ::after {
  width: 36px;
  height: 2px;
  background-color: #f9f12a;
  top: -8px;
  margin-left: -18px;
}
.neck > .bell ::before {
  width: 3px;
  height: 15px;
  top: 3px;
  margin-left: -1.5px;
}

/* 这是圣体 */
.body {
  width: 200px;
  height: 165px;
  top: 290px;
  margin-left: -100px;
}
.body .pocket {
  width: 170px;
  height: 140px;
  top: -4px;
  margin-left: -85px;
}

.body .pocket::after {
  width: 130px;
  height: 100px;
  top: 20px;
  margin-left: -65px;
}

.body .pocket::before {
  width: 130px;
  height: 54px;
  border-radius: 50% 50% 10% 10%;
  top: 0px;
  margin-left: -65px;
  margin-top: 20px;
  z-index: 2;
}

/* 手 */
.body .hand {
  width: 100px;
  height: 100px;
  top: 0px;
}

.body .hand.left .arm {
  width: 120px;
  height: 40px;
  z-index: -1;
  left: -20px;
  transform: rotate(220deg);
  top: -50px;
}

.body .hand.right .arm {
  width: 80px;
  height: 40px;
  z-index: -1;
  top: 0px;
  transform: rotate(25deg);
}

.body .hand .arm::after {
  width: 50px;
  height: 50px;
}

.body .hand .write {
  width: 20px;
  height: 36px;
  border-radius: 2px;
}

.body .hand.left .arm::after {
  left: 100px;
  bottom: -5px;
}

.body .hand.right .arm::after {
  right: -33px;
  bottom: -7px;
}

.body .hand.left .write {
  top: -5px;
  left: 64px;
}

.body .hand.right .write {
  top: -3px;
  right: 60px;
}
.footer .foot {
  width: 125px;
  height: 30px;
  border-radius: 80px 60px 60px 40px;
  top: 163px;
}
.footer .left {
  margin-left: -40px;
}

.footer .right {
  right: 50%;
  margin-right: -240px;
}

.footer .write {
  width: 28px;
  height: 20px;
  border-radius: 60px 60px 0 0;
  border-bottom: none;
  top: 144px;
  margin-left: 86px;
}
/* 加个动画 */
.smallEye {
  animation: move 3s linear infinite;
}

`
export default string;
