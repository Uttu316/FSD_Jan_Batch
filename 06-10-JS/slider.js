// javascript code goes here



function updateSliderValue(containerId,valueId){
    const range  = document.querySelector(`#${containerId} input[type='range']`)
    const rangeValue  = range.value
    
    
    const rangeValueEl = document.getElementById(valueId)
    
    rangeValueEl.innerText = rangeValue
    
    range.addEventListener('change',function(){
           rangeValueEl.innerText= this.value
            
            if(containerId==='range-b-holder'){
                const rangeA  = document.querySelector('#range-a-holder input[type="range"]')
                const maxEl = document.querySelector('#max-sum-holder input')
                rangeA.max =  Number(maxEl.value) - Number(this.value);
            }else{
                const rangeB  = document.querySelector('#range-b-holder input[type="range"]')
                const maxEl = document.querySelector('#max-sum-holder input')
                rangeB.max =  Number(maxEl.value) - Number(this.value);
            }
            updateSumValue()
    })
    
    }
    
    function updateSumValue(){
        const rangeA  = document.querySelector('#range-a-holder input[type="range"]')
        const rangeB  = document.querySelector('#range-b-holder input[type="range"]')
        const sumEl = document.getElementById('sum')
        sumEl.innerText = Number(rangeA.value)+Number(rangeB.value)
    }
    
     updateSliderValue('range-a-holder','range-a-value')
    
     updateSliderValue('range-b-holder','range-b-value')
    
    updateSumValue()
    
    
     const maxEl = document.querySelector('#max-sum-holder input');
     maxEl.addEventListener('change',function(){
          const rangeA  = document.querySelector('#range-a-holder input[type="range"]')
          const rangeB  = document.querySelector('#range-b-holder input[type="range"]')
    
            rangeB.max = Number(this.value) -  Number(rangeA.value)
            rangeA.max = Number(this.value) -  Number(rangeB.value)
        
     })

    //_______________________solution______________________________

    const selectors = {
        input: {
            a: '#range-a-holder input',
            b: '#range-b-holder input',
            max: '#max-sum-holder input'
        },
        value: {
            a: '#range-a-value',
            b: '#range-b-value',
            sum:'#sum'
        }
    }
    function maxSumChange(e){
        setMax(selectors.input.b,getMax()-getRangeAValue())
        setMax(selectors.input.a,getMax()-getRangeBValue())
    }
    function getInputValue(selector) {
        return document.querySelector(selector).value
    }
    function getMax() {
        return getInputValue(selectors.input.max)
    }
    function getRangeAValue() {
        return getInputValue(selectors.input.a)
    }
    function getRangeBValue() {
        return getInputValue(selectors.input.b)
    }
    function setSum(){
        document.querySelector(selectors.value.sum).innerText = parseInt(getRangeAValue()) +parseInt(getRangeBValue())
    }
    function setMax(selector, val) {
        document.querySelector(selector).max = val
    }
    function rangeAChange(e) {
        const vd = document.querySelector(selectors.value.a)
        vd.innerText = e.target.value
        setMax(selectors.input.b,getMax()-getRangeAValue())
        setSum()
    }
    function rangeBChange(e) {
        const vd = document.querySelector(selectors.value.b)
        vd.innerText = e.target.value
        console.log(getRangeBValue());
        setMax(selectors.input.a,getMax()-getRangeBValue())
        setSum()
    }