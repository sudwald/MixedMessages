/* template:
MY _____ IS LIKE A ______
LOOKING FOR _______
*/ 

let Array1=["heart", "life", "soul"]
let Array2=["butterfly","bird","tortoise"]
let Array3=["love", "romance", "truth"]

const GenerateMessage = () => {
    let Rand1=Math.floor(Math.random()*3)
    let Rand2=Math.floor(Math.random()*3)
    let Rand3=Math.floor(Math.random()*3)
    let GeneratedMessage = `My ${Array1[Rand1]} is like a ${Array2[Rand2]} looking for ${Array3[Rand3]}.`
    return GeneratedMessage
}

console.log(GenerateMessage())