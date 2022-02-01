const $engine = document.querySelector('#engine')
const $tractiveEffort = document.querySelector('#tractive-effort')
const $engines = document.querySelector('#engine__list')
const $addEngine = document.querySelector('#add__engine')
let count = 0;

const addEngine = () =>{
    count++;
    if(count===1){
        $clearWorkspace.style.visibility = 'visible'
    }

    //Engine type
    //create label
    const label = document.createElement('label')
    label.textContent = "Engine" + count

    //create select
    const select = document.createElement('select')

    //create options
    engineList.forEach(({ engine }) => {
        const option = document.createElement('option')
        option.setAttribute('value', engine)
        option.textContent = engine
        select.append(option)
    })

    const subgroup1 = document.createElement('div')
    subgroup1.append(label)
    subgroup1.append(select)
    subgroup1.classList.add('display__engine')

    /************************************ */
    //tractive effort 
    const label2 = document.createElement('label')
    label2.textContent = "Tractive Effort"
    const input = document.createElement('input')
    input.value = 0
    input.setAttribute('disabled', 'disabled')
    input.classList.add('engine__teffort__input')

    const subgroup2 = document.createElement('div')
    subgroup2.append(label2)
    subgroup2.append(input)
    subgroup2.classList.add('display__engine')

    //Engine Weight
    const label3 = document.createElement('label')
    label3.textContent = "Engine Weight"
    const input3 = document.createElement('input')
    input3.value = 0
    input3.setAttribute('disabled', 'disabled')
    input3.classList.add('engine__teffort__input')

    const subgroup3 = document.createElement('div')
    subgroup3.append(label3)
    subgroup3.append(input3)
    subgroup3.classList.add('display__engine')

    //Tender Weight
    const label4 = document.createElement('label')
    label4.textContent = "Tender Weight"
    const input4 = document.createElement('input')
    input4.value = 0
    input4.setAttribute('disabled', 'disabled')
    input4.classList.add('engine__teffort__input')

    const subgroup4 = document.createElement('div')
    subgroup4.append(label4)
    subgroup4.append(input4)
    subgroup4.classList.add('display__engine')
    subgroup4.classList.add('display__tender')


    const group = document.createElement('div')
    group.classList.add('engine__container')
    group.append(subgroup1)
    group.append(subgroup2)
    group.append(subgroup3)
    group.append(subgroup4)
    group.style.display = "flex"
    group.style.gap = "15px"

    $engines.insertAdjacentElement('beforeend', group)
}

const onEngineSelect = (e) => {
    const parentElement = e.target.parentElement.parentElement
    const subgroup4 = parentElement.lastChild
    subgroup4.style.visibility = 'hidden'

    const engine = engineList.find((engineData) => {
        return engineData.engine === e.target.value
    })

    e.target.parentElement.parentElement.childNodes[1].childNodes[1].value = engine.teffort
    e.target.parentElement.parentElement.childNodes[2].childNodes[1].value = engine.engineWeight
  
    if(engine.tenderAvailable){
        
        subgroup4.style.visibility = 'visible'
        subgroup4.childNodes[1].value = engine.tenderWeight
    }
    
}