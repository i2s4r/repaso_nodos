function comprobarNombre () {
    const inputNombre = document.querySelector('#nombre').value.trim()
    const regExNombre = /^[a-zA-Z\s]+[0-9]*$/
    let Error = ""

    if (inputNombre.length > 0){
        if(regExNombre.test(inputNombre)) return inputNombre
        else {
            Error = 'El valor introducido no es válido'
            return Error
        }
    }
    else {
        Error = 'Debes introducir un valor'
        return Error
    }
}

function comprobarPrecio () {
    const inputPrecio = document.querySelector('#precio').value.trim()
    const regExPrecio = /\d+(?:\.\d+)?\€/
    let Error = ""

    if (inputPrecio.length > 0){
        if(regExPrecio.test(inputPrecio)) return inputPrecio
        else {
            Error = 'El valor introducido no es válido'
            return Error
        }
    }
    else {
        Error = 'Debes introducir un valor'
        return Error
    }
}

document.querySelector('#cargar').addEventListener('submit', (e) => {
    e.preventDefault()
    const nombreProducto = comprobarNombre()
    const precioProducto = comprobarPrecio()

    const tBody = document.querySelector('#tbody')
    tBody.innerHTML += `
    <tbody id="tbody">
         <tr>
         <td>${nombreProducto}</td>
         <td>${precioProducto}</td>
         </tr>
    </tbody>
    `
})