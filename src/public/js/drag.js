/* 
 * 提供拖拽窗口的能力
*/
// import {ipcRenderer} from 'electron';

let dragging = false,   // 表示是否在拖拽中
    mouseX = 0,         // 表示鼠标x轴位置
    mouseY = 0,         // 表示鼠标y轴位置
    mainWindow = window.electron.remote.getCurrentWindow();

window.addEventListener('mousedown', function(e) {
    // 提前获得位置
    mouseX = e.pageX;
    mouseY = e.pageY;
    window.addEventListener('mousemove', mousemoveFn);
});

window.addEventListener('mouseup', function(e) {
    window.removeEventListener('mousemove', mousemoveFn);
});

function mousemoveFn(e) {
    let moveX = e.pageX - mouseX,
        moveY = e.pageY - mouseY,
        pos = mainWindow.getPosition();     // 当前窗口位置
    
    // 重新计算
    pos[0] = pos[0] + moveX;
    pos[1] = pos[1] + moveY;

    mainWindow.setPosition(pos[0], pos[1], true);   // 重新设置窗口的位置
    mouseX = e.pageX;
    mouseY = e.pageY;
}