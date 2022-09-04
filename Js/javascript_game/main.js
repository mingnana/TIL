// 캔버스 셋팅
let canvas;
let ctx;
canvas = document.createElement('canvas');
ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);

let backgroundImage, spaceshipImage, bulletImage, enemyImage, gameOverImage;

// 우주선 좌표()
let spaceshipX = canvas.width / 2 - 32;
let spaceshipY = canvas.height - 64;

function loadImage() {
    backgroundImage = new Image();
    backgroundImage.src = './resource/background.png';

    spaceshipImage = new Image();
    spaceshipImage.src = './resource/space.png';

    bulletImage = new Image();
    bulletImage.src = './resource/bullet.png';

    enemyImage = new Image();
    enemyImage.src = './resource/enemy.png';

    gameOverImage = new Image();
    gameOverImage.src = './resource/gameover.jpg';
}

let keysDown = {};
function setupKeyboardListner() {
    document.addEventListener('keydown', function (event) {
        keysDown[event.keyCode] = true;
        console.log('키다운객체에 들어간 값은?', keysDown);
    });
    document.addEventListener('keyup', function (event) {
        delete keysDown[event.keyCode];
        console.log('버튼 클릭후', keysDown);
    });
}
function update() {
    // 오른쪽 버튼이 눌렸을 경우
    if (39 in keysDown) {
        spaceshipX += 5;
    }
    if(37 in keysDown){
        spaceshipX -= 3;
    }
    if(spaceshipX <= 0){
        spaceshipX=0
    }
    if(spaceshipX >= canvas.width - 64){
        spaceshipX=canvas.width - 64;
    }
    
    // 우주선의 좌표값이 무한대로 업데이트가 되는게 아닌 경기장 안에서만 있게 하려면?

}

function render() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
}
function main() {
    update(); // 좌표값을 업데이트
    render(); // 그려주는 함수 호출
    requestAnimationFrame(main);
}
loadImage();
setupKeyboardListner();
main();
// 방향키를 누르면
