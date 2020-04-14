document.addEventListener('DOMContentLoaded', function(ev) {

    /** cloud_server_options */
    const CPU_VALUE = [1, 2, 3, 4, 6, 8, 12, 16, 24]
    const RAM_VALUE = [1, 2, 3, 4, 6, 8, 10, 12, 16, 24, 32, 48, 64]
    const ROOT_DISK_SIZE_VALUE = [
        0, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160,
        170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280,
        290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400,
        410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520,
        530, 540, 550, 560, 570, 580, 590, 600, 610, 620, 630, 640,
        650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 760,
        770, 780, 790, 800, 810, 820, 830, 840, 850, 860, 870, 880,
        890, 900, 910, 920, 930, 940, 950, 960, 970, 980, 990, 1000,
        1010, 1020, 1030, 1040, 1050, 1060, 1070, 1080, 1090, 1100,
        1110, 1120, 1130, 1140, 1150, 1160, 1170, 1180, 1190, 1200,
        1210, 1220, 1230, 1240, 1250, 1260, 1270, 1280, 1290, 1300,
        1310, 1320, 1330, 1340, 1350, 1360, 1370, 1380, 1390, 1400,
        1410, 1420, 1430, 1440, 1450, 1460, 1470, 1480, 1490, 1500,
        1510, 1520, 1530, 1540, 1550, 1560, 1570, 1580, 1590, 1600,
        1610, 1620, 1630, 1640, 1650, 1660, 1670, 1680, 1690, 1700,
        1710, 1720, 1730, 1740, 1750, 1760, 1770, 1780, 1790, 1800,
        1810, 1820, 1830, 1840, 1850, 1860, 1870, 1880, 1890, 1900,
        1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000
    ]
    const DATA_DISK_SIZE_VALUE = [0, ...ROOT_DISK_SIZE_VALUE]

    const OPTIONS_CONFIG_RAM_CPU = {
    1: [1, 2],
    2: [1, 2, 3, 4],
    3: [1, 2, 3, 4, 6, 8],
    4: [1, 2, 3, 4, 6, 8],
    6: [2, 3, 4, 6, 8, 12],
    8: [2, 3, 4, 6, 8, 12, 16],
    10: [4],
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
    4: [10],
    // 4: [2, 3, 4, 6, 8, 10, 12, 16],
    6: [3, 4, 6, 8, 12, 16, 24],
    8: [3, 4, 6, 8, 12, 16, 24, 32],
    12: [6, 8, 12, 16, 24, 32, 48],
    16: [8, 12, 16, 24, 32, 48, 64],
    24: [12, 16, 24, 32, 48, 64],
    32: [64]
    }

    const slider = {
        updatedBy :'CPU'
    }
    const optionConfig = {
        RAM: 1,
        CPU: 1,
        ROOT_DISK_TYPE: 'HDD',
        ROOT_DISK_SIZE: 100,
        DATA_DISK_TYPE: 'SSD',
        DATA_DISK_SIZE: 60
    }

    /** Custom Event */
    const cloud_server_options = document.querySelector('.cloud_server_options')
    const event = new CustomEvent('change', { detail: optionConfig })
    event.initEvent('change', true, true, optionConfig)
    if (cloud_server_options) cloud_server_options.addEventListener('change', function (e) {
        showInfoData(optionConfig)
    }, false)

    /** Show data config */
    function showInfoData(config) {    
        const showPanel = document.querySelectorAll('.option-config-data')
        const PrintData = (showPanel, config) => {        
            const cpu = showPanel.querySelector('.cpu-value')    
            const ram = showPanel.querySelector('.ram-value')  
            const rootDisk = showPanel.querySelector('.root-disk-value')
            const rootType = showPanel.querySelector('.root-disk-type')
            const dataDisk = showPanel.querySelector('.data-disk-value')
            const dataType = showPanel.querySelector('.data-disk-type')
            if (cpu) cpu.textContent = config.CPU
            if (ram) ram.textContent = config.RAM
            if (rootDisk) rootDisk.textContent = config.ROOT_DISK_SIZE
            if (rootType) rootType.textContent = config.ROOT_DISK_TYPE
            if (dataDisk) dataDisk.textContent = config.DATA_DISK_SIZE
            if (dataType) dataType.textContent = config.DATA_DISK_TYPE
        }
        showPanel.forEach(element => {
            PrintData(element, config)            
        })
    }

    function updateCPU(key, value) {
        const currentRAMValue = RAM_VALUE[parseInt(value)]
        const rangCPUValue =  OPTIONS_CONFIG_RAM_CPU[currentRAMValue]
        if (currentRAMValue && rangCPUValue) {
            optionConfig.CPU = rangCPUValue.indexOf(optionConfig.CPU) !== -1 ? optionConfig.CPU : rangCPUValue[0]        
            if (rangCPUValue.indexOf(optionConfig.CPU) !== -1) slider.CPU.set(CPU_VALUE.indexOf(optionConfig.CPU));
        }
    }

    function updateRAM(key, value) {
        const currentCPUValue = CPU_VALUE[parseInt(value)]
        const rangRAMValue =  OPTIONS_CONFIG_CPU_RAM[currentCPUValue]
        if (currentCPUValue && rangRAMValue) {
            optionConfig.RAM = rangRAMValue.indexOf(optionConfig.RAM) !== -1 ? optionConfig.RAM : rangRAMValue[0]
            if (slider && slider.RAM && rangRAMValue.indexOf(optionConfig.RAM) !== -1) slider.RAM.set(RAM_VALUE.indexOf(optionConfig.RAM));
        }
    }

    function updateData(key, value) {
        switch (key) {
            case 'RAM':
                if (slider.updatedBy && slider.updatedBy == 'RAM')
                    updateCPU(key, value)
                break;    
            case 'CPU':
                if (slider.updatedBy && slider.updatedBy == 'CPU')
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
                const unit = CPU_VALUE[parseInt(value)] > 1 ? 'CORES' : ' CORE'
                return { value: CPU_VALUE[parseInt(value)], unit }
                break;
            case 'RAM':
                return { value: RAM_VALUE[parseInt(value)], unit: ' GB' }
                break;
            case 'ROOT_DISK_SIZE':
                return { value: ROOT_DISK_SIZE_VALUE[parseInt(value)], unit: ' GB' }
                break;
            case 'DATA_DISK_SIZE':
                return { value: DATA_DISK_SIZE_VALUE[parseInt(value)], unit: ' GB' }
            case 'DATA_DISK':
                return { value: DATA_DISK_SIZE_VALUE[parseInt(value)], unit: ' GB' }
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
        const sliderElement = document.getElementById(id)
        const field = document.getElementById(id  + '_value')
        if (!sliderElement) return false
        slider[key] = noUiSlider.create(sliderElement, options)
        sliderElement.noUiSlider.on('update', (value) => {
            const nextValue = setValue(key, value)
            field.innerHTML = nextValue ? nextValue.value + ' ' + nextValue.unit : '-'
            if (key == 'DATA_DISK') optionConfig[key] = updateDataDiskValue({ nextValue, id }, optionConfig[key])
            else optionConfig[key] = nextValue.value
            cloud_server_options.dispatchEvent(event)
        })

        if (['RAM', 'CPU'].indexOf(key) !== -1) {
            const changeUpdateBy = (e) => {
                slider.updatedBy = key
            }
            sliderElement.addEventListener('mouseenter', changeUpdateBy)
            sliderElement.addEventListener('touchmove', changeUpdateBy)
        }
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
        start: [5],
        step: 1,
        connect: [true, false],
        range: {
            'min': 0,
            'max': DATA_DISK_SIZE_VALUE.length - 1
        }
    })

    /** ROOT DISK TYPE */
    const rootDiskType = document.getElementById('frootdisktype')
    if (rootDiskType) rootDiskType.addEventListener('change', onChangeRootDiskType)
    const frootdiskLabel = document. querySelector('.frootdisk_label')
    if (frootdiskLabel) frootdiskLabel.addEventListener('click', () => {
        rootDiskType.checked = !rootDiskType.checked
        onChangeRootDiskType()
    })
    function onChangeRootDiskType() {
        optionConfig.ROOT_DISK_TYPE = rootDiskType.checked ? 'SSD': 'HDD'
        cloud_server_options.dispatchEvent(event)
        document.querySelector('.frootdisk_label').textContent = optionConfig.ROOT_DISK_TYPE
    }
    /** DATA DISK TYPE */
    const dataDiskType = document.getElementById('fdatadisktype')
    if (dataDiskType) dataDiskType.addEventListener('click', () => {
        optionConfig.DATA_DISK_TYPE = optionConfig.DATA_DISK_TYPE &&  optionConfig.DATA_DISK_TYPE =='HDD' ? 'SSD': 'HDD'
        cloud_server_options.dispatchEvent(event)
        document.querySelector('#fdatadisktype').textContent = optionConfig.DATA_DISK_TYPE
    })
    /** ADD DATA DISK */
    const addDisks = document.querySelectorAll('.addDataDisk')
    addDisks.forEach(element => {
        if (!element) return false
        element.addEventListener('click', addDataDisk)
                    
    })
    function addDataDisk(e) {
        const dataType = this.getAttribute('data-type')
        const type = dataType || 'HDD'
        optionConfig.DATA_DISK = toggleDataDisk(type)

        const panels = document.querySelectorAll('.data-disk-panel')
        panels.forEach(panel => {
            renderDataDisk(panel)
        })
    }
    function toggleDataDisk(type) {
        const prefix = 'data_disk_'
        const newDisk = { type: type, size: 60 }
        if (optionConfig.DATA_DISK && optionConfig.DATA_DISK.length > 0) {
            newDisk.id = getNextId(optionConfig.DATA_DISK, prefix)
            optionConfig.DATA_DISK.push(newDisk)
            return optionConfig.DATA_DISK
        } else {
            return optionConfig.DATA_DISK = [{ ...newDisk, id: prefix + '1' }]
        }
    }
    function getNextId (arrayItem, prefix) {
        const blackList = arrayItem.map(item => parseInt(item.id.replace(prefix, '')))
        for (let i = 1; i <= (arrayItem.length + 1) || 100; i++)
            if (blackList.indexOf(i) === -1) return prefix + i
        return prefix + arrayItem.length
    }
    function renderDataDisk(panel) {
        const diskArray = optionConfig.DATA_DISK
        panel.innerHTML = '<center type="padding: 15px">Loadding disks</center>'
        let stringHTML = ''
        const diskIds = []
        const addInput = (p, item) => {            
            let dom = '<div class="form-group"><div class="row"><div class="col-auto col-input"><div class="input-range">'
            dom += '<div class="slider-range-valude" id="' + item.id + '_value">' + item.size +'  GB</div>' 
            dom += '<div class="slider-range"  id="' + item.id + '"></div>'
            dom += '<span class="label_disk_type" id="' + item.id + 'type">' + item.type + '</span>'
            dom += '<span class="label_disk_remove" id="' + item.id + 'remove">' + 'Xóa' + '</span>'
            dom += '</div></div></div></div><!-- end input-range -->'
            return dom
        }
        if (diskArray && diskArray.length > 0) {
            diskArray.forEach( item => {
                diskIds.push(item)
                stringHTML += addInput(panel, item)
            })
        }
        panel.innerHTML = stringHTML
        diskArray.forEach(disk => {
            createSlider(disk.id, 'DATA_DISK', {
                start: [DATA_DISK_SIZE_VALUE.indexOf(disk.size)],
                step: 1,
                connect: [true, false],
                range: {
                    'min': 0,
                    'max': DATA_DISK_SIZE_VALUE.length - 1
                }
            })
            const dataDiskType = document.getElementById(disk.id + 'type')
            if (dataDiskType) dataDiskType.addEventListener('click', () => {
                const element = document.getElementById(disk.id + 'type')
                const nextType = element.textContent === 'HDD' ? 'SSD': 'HDD'
                optionConfig.DATA_DISK = optionConfig.DATA_DISK.map(item => {
                    if (item.id === disk.id) item.type = nextType
                    return item
                })
                cloud_server_options.dispatchEvent(event)
                element.innerHTML = nextType
            })
            const dataDiskRemove = document.getElementById(disk.id + 'remove')
            if (dataDiskRemove) dataDiskRemove.addEventListener('click', () => {
                const element = document.getElementById(disk.id + 'remove')
                optionConfig.DATA_DISK = optionConfig.DATA_DISK.filter(item => item.id !== disk.id)
                cloud_server_options.dispatchEvent(event)
                renderDataDisk(panel)
            })
        })
    }
    function updateDataDiskValue(payload, data) {
        if (!data) return
        nextData = data.map(item => {
            if (item.id === payload.id)
                return item.size = payload.nextValue.value
            return item
        })
        return data
    }


}) /** end DOMContentLoaded */
