function Pessoa() {
    this.idade = 0

    const self = this // substitui o bind(this)
    console.log(self.idade)
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*bind(this)*/, 1000)

}

new Pessoa