
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

  if(i % 2 == 0){
    compon_str = a +','+ b ;
  } else{
    compon_str = b + ',' + a;
  }
  
  str += compon_str +','
  procent += 5
}

let final_str

final_str = `linear-gradient(${deg}deg,${str}`
final_str = final_str.slice(0,final_str.length-1)+')'

element.style.background = final_str
console.log(final_str)

