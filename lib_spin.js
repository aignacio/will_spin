var five = require("johnny-five");
var keypress = require("keypress");
var board = new five.Board();
var spin,
    default_spin_pin = 9,
    inc_time = 100,
    spin_speed = 0;

function call_ramp(){
  if (spin_speed < 180)
    spin_speed = spin_speed + 1;
  else
    spin_speed = 0;

  spin.to(spin_speed);
  console.log('Velocidade:'+spin_speed);
  setTimeout(call_ramp,inc_time)
}

function init_board(){
  var led = new five.Led(13);
  spin = new five.Servo(default_spin_pin);
  spin.to(0);
  console.log("Iniciando ESC...");
  setTimeout(call_ramp,3000)
  led.blink(150);
}

board.on("ready", init_board);
