//Comparador de motos
class moto {
  constructor(marca, modelo, motor, cilindrada, accesorios, frenos, vMax, ruedas, cTanque, peso) {
      this.marca = marca,
      this.modelo = modelo;
      this.motor = motor;
      this.cilindrada = cilindrada;
      this.accesorios = accesorios;
      this.frenos = frenos;
      this.vMax = vMax;
      this.ruedas = ruedas;
      this.cTanque = cTanque;
      this.peso = peso;
      this.caracteristica = `
      Marca: ${this.marca}.
      Modelo: ${this.nombre}.
      Motor: ${this.motor}.
      Cilindrada: ${this.cilindrada} cc.
      Frenos: ${this.frenos}.
      Vel. Max: ${this.vMax} Km/h.
      Cap. del tanque: ${this.cTanque}Lts.
      Peso: ${this.peso}
      `
  }
}

const motos = []
//ZANELLA
//const Zanella = [];
  motos.push(new moto("zanella", "Patagonian Eagle", "monocilindrico", "150", "parabrisa, parrilla, alarma", "disco ABS/ tambor", "100", "90/100", "13", "150"));
  motos.push(new moto("zanella", "Cecatto", "monocilindrico", "149", "USB/alarma", "disco/tambor", "130", "90/110", "12.5", "108"));
  motos.push(new moto("zanella", "Zapucai", "monocilindrico", "150", "USB/alarma", "Disco/tambor", "110", "80/90", "8.4", "107"));

//HONDA
//const honda =[];
  motos.push(new moto("honda", "CB 125 F Twister", "monocilindrico", "124.8", "-", "disco/tambor", "100", "80/90", "10.1", "117"))
  motos.push(new moto("honda", "Wave", "monocilindrico", "109.1", "alarma", "a tambor", "85", "D-70¨ T-80¨", "3.7", "101"))
  motos.push(new moto("honda", "CBR 300 R", "monocilindrico", "286", "alarma", "disco ABS/ disco ABS", "180", "110/140", "13", "164"))

//BENELLI
//const benelli = [];
  motos.push(new moto("benelli", "TNT 250", "monocilin/drico", "249.2", "alarma", "disco/disco", "150", "110¨/140¨", "17", "143"))
  motos.push(new moto("benelli", "Leoncino", "bicilindrico", "499.6", "alarma", "doble disco ABS/ disco ABS", "170", "120/160", "13.5", "186"))
  motos.push(new moto("benelli", "TRK 502 ABS", "bicilindrico", "499.6", "-", "doble disco ABS/ disco ABS", "180", "120/160", "20", "213"))

//YAMAHA
//const yamaha = [];
  motos.push(new moto("yamaha", "YBR 125 Z", "monocilindrico", "124", "-", "disco/tambor", "120", "80/90", "13", "121"))
  motos.push(new moto("yamaha", "XTZ 125", "monocilindrico", "124", "-", "disco/tambor", "90", "80/110", "10.6", "118"))
  motos.push(new moto("yamaha", "FZ Fi", "monocilindrico", "149", "-", "disco/tambor", "115", "100/140", "12", "132"))

//BAJAJ
//const bajaj = [];
  motos.push(new moto("bajaj", "Rouser NS 200 Fi", "monocilindrico", "195.5", "-", "disco ABS/ disco", "150", "100/130", "10", "145"))
  motos.push(new moto("bajaj", "Avanger Cruiser", "monocilindrica", "219.89", "-", "disco/tambor", "120", "90/130", "14", "154.5"))
  motos.push(new moto("bajaj", "Dominar D400", "monocilindrico", "373.3", "-", "disco ABS/ disco ABS", "160", "110/150", "13", "182"))

//JAWA
//const jawa = [];
  motos.push(new moto("jawa", "350-9", "bicilindrico", "320", "-", "doble disco ABS/ disco ABS", "160", "90/130", "15", "172"))
  motos.push(new moto("jawa", "Ruta 40 600cc", "monocilindrico", "590", "-", "doble disco ABS/ doble disco ABS", "125", "110/130", "25", "190"))
  motos.push(new moto("jawa", "CZ 250 TURISMO", "monocilindrico", "223", "-", "disco/disco", "150", "80/110", "7", "119"))

//KTM 
//const ktm = [];
  motos.push(new moto("ktm", "RC 390", "monocilindrico", "373.2", "-", "disco ABS/ disco ABS", "180", "90/100", "10", "147"))
  motos.push(new moto("ktm", "1290 Super Duke G", "bicilindrico en V", "1301", "-", "doble disco ABS/ disco ABS", "245", "100/110", "23", "205"))
  motos.push(new moto("ktm", "RC 200", "monocilindrico", "199.5", "-", "disco ABS/disco ABS", "160", "90/100", "10", "137.5"))


const saveStorage = localStorage.setItem('motosStorage', JSON.stringify(motos))
const returnStorage = JSON.parse(localStorage.getItem('motosStorage'))

for (modelo of returnStorage){
  motos.push(modelo)
  console.log(motos)
  break
}
let inicio = 1
const selectMarca = document.querySelector('#btn--marcas')
selectMarca.addEventListener('click', crearMarca)
const btnContador = document.querySelector('.btnContador')
btnContador.addEventListener('click', aumentar)

function aumentar(){
  let valor = document.getElementById('cantidad').value = inicio++
  btnContador.setAttribute('id', `marca${valor}`)
}

function crearMarca(){
  const padreMarca = document.querySelector('.tablas--motos')
  const motoMrc = document.createElement("select")
  motoMrc.innerHTML = `<option value="elige una marca"selected disabled>elige una marca</option>
                           <option value="honda">HONDA</option>
                           <option value="zanella">ZANELLA</option>
                           <option value="yamaha">YAMAHA</option>
                           <option value="bajaj">BAJAJ</option>
                           <option value="benelli">BENELLI</option>
                           <option value="jawa">JAWA</option>
                           <option value="ktm">KTM</option>
                          `
      motoMrc.setAttribute('id', 'slc__marcas')
      motoMrc.setAttribute('class', 'slc-dark')
      padreMarca.appendChild(motoMrc)

  const slcMarca = document.querySelector('#slc__marcas')

    slcMarca.addEventListener('change', elegirMarca)

      function elegirMarca(e){
        const marca = e.target.value
        const slcMarc = marca
        const marcaFiltro = motos.filter( ( marca ) => marca.marca === slcMarc)

        const listaMarcas = document.querySelector(".tablas--motos");
          const selectModelos = document.createElement("select");

          selectModelos.setAttribute('id', `slc__modelos`)
          selectModelos.setAttribute('class', 'slc-dark')

          for(modelos of marcaFiltro){
            selectModelos.innerHTML = ` 
            <option selected disabled>elige un modelo</option> 
            <option value="${marcaFiltro[0].modelo}">${marcaFiltro[0].modelo}</option>
            <option value="${marcaFiltro[1].modelo}">${marcaFiltro[1].modelo}</option>
            <option value="${marcaFiltro[2].modelo}">${marcaFiltro[2].modelo}</option>`;
          break
          }    
          listaMarcas.appendChild(selectModelos)
      

  const slcModelo = document.querySelector('#slc__modelos')
      slcModelo.addEventListener('change', elegirModelo)


      function elegirModelo(e){
        const model = e.target.value
        const modelo = model
        const modeloFiltro = marcaFiltro.find((vehiculo => vehiculo.modelo === modelo))
        const elegirPadre = document.querySelector('.tablas--motos')
        const divTable = document.createElement('div')
        const tableDiv = document.createElement('table')
        tableDiv.setAttribute('class', 'table table-hover table-dark')
        tableDiv.innerHTML = `<thead>
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>${modeloFiltro.marca}</th> 
            <th>${modeloFiltro.modelo}</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Motor</td> 
            <td>Cilindrada</td>
            <td>Frenos</td>
            <td>Vel. Max</td> 
            <td>Cap. del tanque</td>
            <td>Peso</td>
            <td></td>
        </tr>
        <tr>
            <td> ${modeloFiltro.motor} </td>
            <td> ${modeloFiltro.cilindrada} cc. </td>
            <td> ${modeloFiltro.frenos} </td>
            <td> ${modeloFiltro.vMax} Km/h </td>
            <td> ${modeloFiltro.cTanque}Lts </td>
            <td> ${modeloFiltro.peso} </td>
            <td><img class="img-table" src="../media/motoModelos/${modeloFiltro.modelo}.png" alt=""></td>
        </tr>
    </tbody>`
        elegirPadre.appendChild(divTable)
        divTable.appendChild(tableDiv)
        restar()
        //bloquearBtn()

        function restar() {
          elegirPadre.removeChild(slc__modelos)
          elegirPadre.removeChild(slc__marcas)   
          const cambiarTxt = document.querySelector('#marca1')
          cambiarTxt.innerText = 'elegi otro modelo'
        }
      return
      }
    return
    }
  return
}