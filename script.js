
let element = document.querySelector('.box-animation')
let deg,color_start,color_end,procent,str

deg = 45
color_start = '#00cc99'
color_end  = 'transparent'
procent = 0
str = ''

let i = 0,a,b,x,y

for (;procent <= 100;i++){
  let compon_str
  a = `${color_start} ${procent}%`
  b = `${color_end} ${procent}%`

  compon_str = (i % 2 == 0) ? a +','+ b : b + ',' + a;
  
  str += compon_str +','
  procent += 5
}

let final_str

final_str = `linear-gradient(${deg}deg,${str}`
final_str = final_str.slice(0,final_str.length-1)+')'

// element.style.transform = 'rotate(90deg)'
element.style.background = final_str


    let nIntervId;
    

    function ch() {
      nIntervId = setInterval(m,40);
    }
      let int_1 = 0
      let int_2 = 0
    function m(){
      
      int_2 = int_1 + 1
      element.style.transform = element.style.transform == `rotate(${int_1}deg)` ? `rotate(${int_2}deg)` : `rotate(${int_1}deg)`;
      if(int_2 > 360 || int_1 > 360){
        int_1 = 0
      }
      int_1 += 1
      console.log(int_1)
      console.log(int_2)
  }


  

 