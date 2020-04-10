/** cloud_server_options */
const CPU_VALUE = [1, 2, 3, 4, 6, 8, 12, 16, 24]
const RAM_VALUE = [1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64]
const ROOT_DISK_SIZE_VALUE = [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 760, 770, 780, 790, 800, 810, 820, 830, 840, 850, 860, 870, 880, 890, 900, 910, 920, 930, 940, 950, 960, 970, 980, 990, 1000, 1010, 1020, 1030, 1040, 1050, 1060, 1070, 1080, 1090, 1100, 1110, 1120, 1130, 1140, 1150, 1160, 1170, 1180, 1190, 1200, 1210, 1220, 1230, 1240, 1250, 1260, 1270, 1280, 1290, 1300, 1310, 1320, 1330, 1340, 1350, 1360, 1370, 1380, 1390, 1400, 1410, 1420, 1430, 1440, 1450, 1460, 1470, 1480, 1490, 1500, 1510, 1520, 1530, 1540, 1550, 1560, 1570, 1580, 1590, 1600, 1610, 1620, 1630, 1640, 1650, 1660, 1670, 1680, 1690, 1700, 1710, 1720, 1730, 1740, 1750, 1760, 1770, 1780, 1790, 1800, 1810, 1820, 1830, 1840, 1850, 1860, 1870, 1880, 1890, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000]

const OPTIONS_CONFIG_RAM_CPU = {
1: [1, 2],
2: [1, 2, 3, 4],
3: [1, 2, 3, 4, 6, 8],
4: [1, 2, 3, 4, 6, 8],
6: [2, 3, 4, 6, 8, 12],
8: [2, 3, 4, 6, 8, 12, 16],
12: [3, 4, 6, 8, 12, 16, 24],
16: [4, 6, 8, 12, 16, 24],
24: [6, 8, 12, 16, 24],
32: [8, 12, 16, 24],
48: [12, 16, 24],
64: [16, 24]
}

const OPTIONS_CONFIG_CPU_RAM = {
1: [1, 2, 3, 4],
2: [1, 2, 3, 4, 6, 8],
3: [2, 3, 4, 6, 8, 12],
4: [2, 3, 4, 6, 8, 12, 16],
6: [3, 4, 6, 8, 12, 16, 24],
8: [3, 4, 6, 8, 12, 16, 24, 32],
12: [6, 8, 12, 16, 24, 32, 48],
16: [8, 12, 16, 24, 32, 48, 64],
24: [12, 16, 24, 32, 48, 64],
32: [64]
}

window.slider = {
    updatedBy :'CPU'
}
window.optionConfig = {
    RAM: 1,
    CPU: 1,
    ROOT_DISK_TYPE: 'HDD',
    DATA_DISK_SIZE: 60
}

const event = document.createEvent('Event')
event.initEvent('server_config_change', true, true)

function updateCPU(key, value) {
    const currentRAMValue = RAM_VALUE[parseInt(value)]
    const rangCPUValue =  OPTIONS_CONFIG_RAM_CPU[currentRAMValue]
    console.log('currentRAMValue', currentRAMValue, OPTIONS_CONFIG_RAM_CPU, OPTIONS_CONFIG_RAM_CPU[currentRAMValue])
    if (currentRAMValue && rangCPUValue) {
        console.log('optionConfigCPU', optionConfig.CPU, rangCPUValue.indexOf(optionConfig.CPU))
        window.optionConfig.CPU = rangCPUValue.indexOf(optionConfig.CPU) !== -1 ? optionConfig.CPU : rangCPUValue[0]
        if (rangCPUValue.indexOf(optionConfig.CPU) !== -1) window.slider.CPU.set(CPU_VALUE.indexOf(window.optionConfig.CPU));
    }
}

function updateRAM(key, value) {
    const currentCPUValue = CPU_VALUE[parseInt(value)]
    const rangRAMValue =  OPTIONS_CONFIG_CPU_RAM[currentCPUValue]
    console.log('currentCPUValue', currentCPUValue, OPTIONS_CONFIG_CPU_RAM, OPTIONS_CONFIG_CPU_RAM[currentCPUValue])
    if (currentCPUValue && rangRAMValue) {
        console.log('optionConfigRAM', optionConfig.RAM, rangRAMValue.indexOf(optionConfig.RAM))
        window.optionConfig.RAM = rangRAMValue.indexOf(optionConfig.RAM) !== -1 ? optionConfig.RAM : rangRAMValue[0]
        if (rangRAMValue.indexOf(optionConfig.RAM) !== -1) window.slider.RAM.set(RAM_VALUE.indexOf(window.optionConfig.RAM));
    }
}

function updateData(key, value) {
    if (window.slider.updatedBy === key)
        console.log(window.slider.updatedBy)
    switch (key) {
        case 'RAM':
            if (window.slider.updatedBy && window.slider.updatedBy == 'RAM')
                updateCPU(key, value)
            break;    
        case 'CPU':
            if (window.slider.updatedBy && window.slider.updatedBy == 'CPU')
                updateRAM(key, value)
            break;   
        default:
            break;
    }
}

function setValue(key, value) {
    if (!key) return null
    try {
        updateData(key, value)
    } catch (error) {
        console.warn(error)
    }
    switch (key) {
        case 'CPU':
            return { value: CPU_VALUE[parseInt(value)], unit: ' GB' }
            break;
        case 'RAM':
            return { value: RAM_VALUE[parseInt(value)], unit: ' GB' }
            break;
        case 'ROOT_DISK_SIZE':
            return { value: ROOT_DISK_SIZE_VALUE[parseInt(value)], unit: ' GB' }
            break;
        case 'DATA_DISK_SIZE':
            return { value: ROOT_DISK_SIZE_VALUE[parseInt(value)], unit: ' GB' }
            break;
        default:
            break;
    }
}

function createSlider(id = 'slider', key = 'ROOT', options = {
    start: [1],
    step: 1,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 10
    }
}) {
    const slider = document.getElementById(id)
    const field = document.getElementById(id  + '_value')
    if (!slider) return false
    window.slider[key] = noUiSlider.create(slider, options)
    slider.noUiSlider.on('update', (value) => {
        console.log(key, value)
        const nextValue = setValue(key, value)
        field.innerHTML = nextValue ? nextValue.value + ' ' + nextValue.unit : '-'
        window.optionConfig[key] = nextValue.value
    })
    if (['RAM', 'CPU'].indexOf(key) !== -1)
        slider.addEventListener('mouseenter', e => {
            window.slider.updatedBy = key
        })
}
createSlider('fcpu', 'CPU', {
    start: [1],
    step: 1,
    connect: [true, false],
    range: {
        'min': 0,
        'max': CPU_VALUE.length - 1
    }
})

createSlider('fram', 'RAM', {
    start: [1],
    step: 1,
    connect: [true, false],
    range: {
        'min': 0,
        'max': RAM_VALUE.length - 1
    }
})
createSlider('frootdisksize', 'ROOT_DISK_SIZE', {
    start: [8],
    step: 1,
    connect: [true, false],
    range: {
        'min': 0,
        'max': ROOT_DISK_SIZE_VALUE.length - 1
    }
})
createSlider('fdatadisk', 'DATA_DISK_SIZE', {
    start: [4],
    step: 1,
    connect: [true, false],
    range: {
        'min': 0,
        'max': ROOT_DISK_SIZE_VALUE.length - 1
    }
})

/** Select type */
const rootDiskType = document.getElementById('frootdisktype')
rootDiskType.addEventListener('change', () => {
    optionConfig.ROOT_DISK_TYPE = rootDiskType.checked ? 'SSD': 'HDD'
    document.querySelector('.frootdisk_label').textContent = optionConfig.ROOT_DISK_TYPE
})

console.log('optionConfig', optionConfig)