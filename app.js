//elements
const $addCargo = document.querySelector('#add__cargo')
const $clearWorkspace = document.querySelector('#clear__workspace')
let countCargo = 0;

//function for clear workspace
const clearWorkSpace = () => {
    $engines.innerHTML = ""
    $clearWorkspace.style.visibility = 'hidden'
    count = 0
}

//eventlisteners
$addEngine.addEventListener('click', addEngine)

$engines.addEventListener('change', onEngineSelect)

$clearWorkspace.addEventListener('click', clearWorkSpace)


// Cargo list

const $cargoList = document.querySelector('#cargo__list')
$addCargo.addEventListener('click', () =>{
    countCargo++;

    console.log(countCargo)
    //Cargo type
    //create label
    const cargoLabel = document.createElement('label')
    cargoLabel.textContent = "Cargo" + countCargo

    //create select
    const cargoSelect = document.createElement('select')

    //create options
    cargoList.forEach(({ cargoType }) => {
        const option = document.createElement('option')
        option.setAttribute('value', cargoType)
        option.textContent = cargoType
        cargoSelect.append(option)
    })

    const subgroupCargo1 = document.createElement('div')
    subgroupCargo1.append(cargoLabel)
    subgroupCargo1.append(cargoSelect)
    subgroupCargo1.classList.add('display__cargo')

    const cargoGroup = document.createElement('div')
    cargoGroup.append(subgroupCargo1)
    cargoGroup.style.display = "flex"
    cargoGroup.style.gap = "15px"
    cargoGroup.classList.add('cargo__container')

    $cargoList.append(cargoGroup)
})

