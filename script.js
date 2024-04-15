const nomes =[]
const numeros=[]
const form = document.getElementById('form')
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();


    atualizaLinha()
})

function atualizaLinha(){
    const inputNome= document.getElementById('tnome')
    const inputNumero=document.getElementById('telefone')

    const nome = inputNome.value
    const numero = inputNumero.value  
    
    
    if(nomes.includes(inputNome.value) || numeros.includes(Number(inputNumero.value) || numero.value.length<=7)){
        alert(`o nome ${inputNome.value} ou o numero ${inputNumero.value} ja foram digitados ou o número digitado é invalido.`)
        return false
    } else {
        nomes.push(inputNome.value)
        numeros.push(Number(inputNumero.value))
        return true

        let linha= '<tr>'
        linha += `<td> ${inputNome.value}</td>`
        linha += `<td class = "left"> ${inputNumero.value}</td>`
        linha += `</tr>`
        linhas+= linha

        const corpoTabela = document.querySelector('tbody')
        corpoTabela.innerHTML =linhas
    }
    inputNome.value=''
    inputNumero.value= ''
    inputNome.focus()
}
