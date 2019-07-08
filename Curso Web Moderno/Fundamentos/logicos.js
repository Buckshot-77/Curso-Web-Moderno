// é realizada a operação lógica proposta e seu valor é atribuído à variável
function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    const comprarTV32 = trabalho1 != trabalho2
    const manterSAudavel = !comprarSorvete //operador unitário

    return{comprarSorvete, comprarTV50, comprarTV32, manterSAudavel}
    
}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false, true))
console.log(compras(false, false))