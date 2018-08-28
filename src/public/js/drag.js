/* 
 * 提供拖拽窗口的能力
*/
// import {ipcRenderer} from 'electron';

let dragging = false,   // 表示是否在拖拽中
    mouseX = 0,         // 表示鼠标x轴位置
    mouseY = 0,         // 表示鼠标y轴位置
    ipcRenderer = window.electron.ipcRenderer;
// let aa = require('electron');
    ipcRenderer.send('somemsg', 'aaaa');

window.addEventListener('mousedown', function(e) {
    dragging = true;
    mouseX = e.pageX;
    mouseY = e.pageY;

    console.log(mouseX, mouseY);
});

// window.addEventListener('mouseup', function(e) {
//     dragging = false;
// });

// window.addEventListener('mousemove', function(e) {
//     if (dragging) {
//         let pos = mainWindow.getPosition();

//         pos[0] = pos[0] + mouseX
//     }
// });