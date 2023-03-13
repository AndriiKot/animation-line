
let element = document.querySelector('.box-animation')


// let str =  'linear-gradient(45deg, red 10%,transparent 10%)'

// element.style.background = `${str}`

let deg,color_start,color_end,procent,str

deg = 45
color_start = '#00cc99'
color_end  = 'transparent'
procent = 0
str = ''

procent += 1

// element.style.background = `linear-gradient(${deg}deg, ${color_start} ${procent}%, ${color_end} ${procent}%)`

 let i = 0

 let a,b,x,y

for ( ;procent <= 100 ; i++){
  // str += `linear-gradient(${deg}deg, ${color_start} ${procent}%, ${color_end} ${procent}%)`
// element.style.background = `linear-gradient(${deg}deg, ${color_start} ${procent}%, ${color_end} ${procent}%)`
 a = ` ${color_start} ${procent}%`
 b = `${color_end} ${procent}%`
let compon_str
if(i % 2 == 0){
  compon_str = a +','+ b ;
} else{
  compon_str = b + ',' + a;
}

str += compon_str +','

  procent += 5

}

let final_str_end
let final_str

final_str = `linear-gradient(${deg}deg,${str}`
final_str = final_str.slice(0,final_str.length-1)+')'

element.style.background = final_str

// console.log(procent)
// console.log(str)
console.log(final_str)

