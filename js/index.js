
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  CLASES Y OBJETOS                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Persona{
    constructor(name,numero){
        this.nombre= name;
        this.dni=numero;
    }
    mostrarse(){
        return ("Nombre: "+this.nombre+ "  -   DNI: "+this.dni);
    }
}
class sector{
    constructor(nombre,precio){
        this.name=nombre;
        this.price=precio;
    }
    mostrarse(){
        return ("Sector: "+this.name+" Precio:  $"+this.price+" + IVA");
    }
}
class compraTicket{
    constructor(){
        this.personas=[ ];
        this.sector=null;
        this.subtotal=0;
        this.total=0;
        
    }
    agregarPersona(persona){
        this.personas.push(persona);
    }
    calcularCosto(){
        this.subtotal= this.sector.price*(this.personas.length)

    }
    calcularCostoConIva(){
        this.total=this.subtotal*iva+this.subtotal        
    }
    getPersonas(){
        return this.personas;
    }
    getSector(){
        return this.sector.name;
    }
    getPrecioSector(){
        return this.sector.price
    }
    getSubtotal(){
        return this.subtotal;
    }
    getTotal(){
        return this.total
    }
    
}

// FUNCIONES QUE USA EL PROGRAMA PRINCIPAL/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const imprimirEvento = (ID,evento) =>{
    let boton=document.getElementById(ID)
    let select=document.getElementById('precios')
    boton.onclick=()=>{
            select.innerHTML="Seleccione el sector"
            evento.map((value,index)=>{
                let option=document.createElement('option')
                option.innerHTML=`${index+1} - ${value.mostrarse()}`
                select.append(option) 
            })

            

                
        }
    }
const seleccionarSector=(ID)=>{
    let div=document.getElementById(ID)
    div.onclick=()=>{
        for (const elemento of hijos) {
            elemento.className="bordeRojo"   
        }
    }
}



function mostrarCompra(ticket){
    let personas=ticket.getPersonas()
    let cantPersonas=personas.length
    let sector=ticket.getSector()
    let precioSector=ticket.getPrecioSector()
    let subtotal=ticket.getSubtotal()
    let total=ticket.getTotal()
    let caja=document.getElementById("cajaCompra")
    let titulo=document.createElement("h2")
    titulo.className="cont"
    titulo.innerHTML=`Se ha generado una compra por ${cantPersonas} entradas, que corresponden a:`
    caja.append(titulo)
    personas.map((persona,index)=>{
        let elemento=document.createElement("h3")
        let textoPersona=persona.mostrarse()
        elemento.className='contChico'
        elemento.innerHTML=`${textoPersona} `
        caja.append(elemento)
        let subelemento=document.createElement('h4')
        subelemento.className="contMasChico"
        subelemento.innerHTML=`${sector} -  Valor: $ ${precioSector}  + IVA`       
        caja.append(subelemento)
    })
    let subFinal=document.createElement('h3')
    subFinal.className="contChico"
    let final=document.createElement('h2')
    final.className="cont"
    subFinal.innerHTML=`Subtotal: $  ${subtotal}`
    caja.append(subFinal)
    final.innerHTML=`TOTAL A PAGAR: $ ${total}`
    caja.append(final)
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                  P  R  O  G  R  A  M  A         P  R  I  N  C  I  P  A  L                                            //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let iva=0.21;
// Creo un EVENTO 1//
let campo1= new sector ('Campo', 7000);
let superPulman1= new sector ('Super Pullman', 5000)
let pullmanLateral1= new sector ('Pullman Lateral', 3500)
let cabecera1= new sector ('Cabecera', 3000)
let evento1=[ campo1, superPulman1, pullmanLateral1, cabecera1 ]
// Creo un EVENTO 2//
let campo2= new sector ('Campo', 10000);
let superPulman2= new sector ('Super Pullman', 9000)
let pullmanLateral2= new sector ('Pullman Lateral', 6000)
let cabecera2= new sector ('Cabecera', 4000)
let evento2=[ campo2, superPulman2, pullmanLateral2, cabecera2 ]
// Creo un EVENTO 3//
let campo3= new sector ('Campo', 5000);
let superPulman3= new sector ('Super Pullman', 3000)
let pullmanLateral3= new sector ('Pullman Lateral', 2000)
let cabecera3= new sector ('Cabecera', 1000)
let evento3=[ campo3, superPulman3, pullmanLateral3, cabecera3 ]
let compra= new compraTicket()

imprimirEvento("evento1", evento1);
imprimirEvento("evento2", evento2);
imprimirEvento("evento3", evento3);

seleccionarSector("cabecera1")
seleccionarSector("cabecera2")
seleccionarSector("pullmanLateral1")
seleccionarSector("pullmanLateral2")
seleccionarSector("superPullman")
seleccionarSector("campo")


// alert("Comencemos con el proceso de reserva de entradas");
// let nombre=prompt("Ingrese su nombre y apellido: ");
// let dni=prompt("ingrese su numero de DNI: ");
// let individuo= new Persona(nombre,dni);
// let lugar=(validarSector(lunaPark));
// let compra= new compraTicket(individuo,lugar);
// let cantEntradas=validarCantEntradas();

// if (cantEntradas===1){
//     compra.calcularCosto();
//     compra.calcularCostoConIva();
//     mostrarCompra(compra)
// }else{
//     for(let i=1;i<cantEntradas;i++){
//         let personita= new Persona()
//         personita.nombre=prompt("Ingrese el nombre de la siguiente persona que lo acompañará: ");
//         personita.dni=prompt("Ingrese el DNI de esa persona:");
//         compra.agregarPersona(personita);
        
//     }
//     compra.calcularCosto();
//     compra.calcularCostoConIva();
//     mostrarCompra(compra);
// }


