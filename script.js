const element = document.querySelector('.box-animation')


const deg = 20
const color_start = '#00cc99'
const color_end  = 'transparent'
let procent_width_line = 0
const max_procent_width_line = 100;
const step_procent_width_line = 30
let str = ''

let i = 0

for (;procent_width_line <= max_procent_width_line;i++){
 const a = `${color_start} ${procent_width_line}%`
 const b = `${color_end} ${procent_width_line}%`
 const compon_str = (i % 2 == 0) ? a +','+ b : b + ',' + a;
  
  str += compon_str +','
  procent_width_line += step_procent_width_line;
}

let final_str

final_str = `linear-gradient(${deg}deg,${str}`
final_str = final_str.slice(0,final_str.length-1)+')'

element.style.background = final_str


    let nIntervId;
    

    function animation_rotate_interval() {
      nIntervId = setInterval(calc_animation_rotate,100);
    }

    let int_1 = 0
    let int_2 = 0

    function calc_animation_rotate(){
      final_str = `linear-gradient(${deg}deg,${str}`
      final_str = final_str.slice(0,final_str.length-1)+')'

      element.style.background = final_str

      int_2 = int_1 + 0.1
      element.style.transform = element.style.transform == `rotate(${int_1}deg)` ? `rotate(${int_2}deg)` : `rotate(${int_1}deg)`;
      
      if(int_2 > 360 || int_1 > 360){
        int_1 = 0
      }
      int_1 += 0.001

      if(deg > 340){
        deg = 20
      }
      if (deg > 50 && deg < 130){
           deg = 130
      }
      if (deg < 310 && deg > 230 ){
        deg = 340
      }
      deg += 1
  }


  

 