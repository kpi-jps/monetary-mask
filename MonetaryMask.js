class MonetaryMask {
    #htmlInputId
    #decimalSeparator
    #decimalPlaces = 2
    #input
    #oldValue = ""

    constructor(htmlInputId, decimalSeparator) {
        this.#htmlInputId = htmlInputId
        this.#decimalSeparator = decimalSeparator
        this.#input = document.getElementById(this.#htmlInputId)
        try {
            if (this.#input === null || this.#input === undefined)
                throw new Error("The html element got by id is null or undefined")
            if (this.#input.tagName !== "INPUT")
                throw new Error("The html element got by id don't correspond to html input!")
            if (this.#input.type !== "text")
                throw new Error("The input got by id don't correspond a text type input!")
            this.#input.addEventListener("focus", () => this.#storeOldValue())
            this.#input.addEventListener("input", () => this.#mask())
        } catch (error) {
            console.error(error.message);
        }
    }

    #delLastChar() {
        this.#input.value = this.#input.value.slice(0, this.#input.value.length - 1)
    }
    #storeOldValue() {
        this.#oldValue = this.#input.value
    }
    #getInputValueLength() {
        return this.#input.value.length
    }
    #getOldValueLength() {
        return this.#oldValue.length
    }
    #getInputValueAsNumber() {
        return this.#decimalSeparator === "." ?  
            Number(this.#input.value) :
            Number(this.#input.value.replace(this.#decimalSeparator, '.'))
    }
    #getLastChar() {
        return this.#input.value.charCodeAt(
            this.#input.value.length - 1
        )
    }
    #numberToStr(number) {
        let numberStr = number.toFixed(this.#decimalPlaces)
        return this.#decimalSeparator === "." ? 
            numberStr :
            numberStr.replace('.', this.#decimalSeparator)
    }
    #mask() {
        let newValue
        let newInputValue
        let lastChar = this.#getLastChar()
        if (lastChar < 48 || lastChar > 57) {
            this.#delLastChar()
            this.#storeOldValue()
            return
        }
        if (this.#getInputValueLength() === 1) {
            newValue = (this.#getInputValueAsNumber() / Math.pow(10, this.#decimalPlaces))
            newInputValue = this.#numberToStr(newValue)
            this.#input.value = newInputValue
            this.#storeOldValue()
            return
        }
        if (this.#getOldValueLength() > this.#getInputValueLength()) {
            newValue = (this.#getInputValueAsNumber() / 10)
            newInputValue = this.#numberToStr(newValue)
            this.#input.value = newInputValue
            this.#storeOldValue()
            return
        }
        newValue = (this.#getInputValueAsNumber() * 10)
        newInputValue = this.#numberToStr(newValue)
        this.#input.value = newInputValue
        this.#storeOldValue()
    }
}
