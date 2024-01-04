var qwerty = 1.4;

const workers = [
    {
        name: "Grandma",
        defaultCost: 100,
        timesBought: 0,
        id: 0,
        imagePath: "img/grandma.png",
        getCost: function(){return getWorkerCost(this);},

    }
]
function getWorkerCost(worker){
    return (worker.defaultCost)*(qwerty^worker.timesBought);
}

// const achievements = [
//     {
//         name: "Off to a great start",
//         description: "Die for the first time",
//         id: 0,
//         path: "images/skull.png",
//         image: new Image(),
//         render: function() {
//             ctx.drawImage(this.image, 360 + this.id * 180, 250, 150, 150)
//         },
//         display: function(offset = 0) {
//             defaultDisplay(offset, this.name)
//             ctx.drawImage(this.image, 20 - offset, 20, 100, 100)
//         },
//     },
//     {
//         name: "The Beginning",
//         description: "Beat the first level",
//         id: 1,
//         render: function() {
//             ctx.fillStyle = "green"
//             ctx.beginPath()
//             ctx.moveTo(400 + this.id * 180, 270)
//             ctx.lineTo(400 + this.id * 180, 380)
//             ctx.lineTo(410 + this.id * 180, 380)
//             ctx.lineTo(410 + this.id * 180, 330)
//             ctx.lineTo(480 + this.id * 180, 295)
//             ctx.lineTo(400 + this.id * 180, 270)
//             ctx.fill()
//         },
//         display: function(offset = 0) {
//             defaultDisplay(offset, this.name)
//             ctx.fillStyle = "green"
//             ctx.beginPath()
//             ctx.moveTo(40 - offset, 30)
//             ctx.lineTo(40 - offset, 100)
//             ctx.lineTo(50 - offset, 100)
//             ctx.lineTo(50 - offset, 70)
//             ctx.lineTo(90 - offset, 45)
//             ctx.lineTo(40 - offset, 30)
//             ctx.fill()
//         },
//     },
//     {
//         name: "Gravity God",
//         description: "Beat level 3",
//         id: 2,
//         render: function() {
//             ctx.fillStyle = "green"
//             ctx.beginPath()
//             ctx.moveTo(400 + this.id * 180, 270)
//             ctx.lineTo(400 + this.id * 180, 340)
//             ctx.lineTo(380 + this.id * 180, 340)
//             ctx.lineTo(410 + this.id * 180, 370)
//             ctx.lineTo(440 + this.id * 180, 340)
//             ctx.lineTo(420 + this.id * 180, 340)
//             ctx.lineTo(420 + this.id * 180, 270)
//             ctx.fill()
//             ctx.fillStyle = "red"
//             ctx.beginPath()
//             ctx.moveTo(450 + this.id * 180, 370)
//             ctx.lineTo(450 + this.id * 180, 300)
//             ctx.lineTo(430 + this.id * 180, 300)
//             ctx.lineTo(460 + this.id * 180, 270)
//             ctx.lineTo(490 + this.id * 180, 300)
//             ctx.lineTo(470 + this.id * 180, 300)
//             ctx.lineTo(470 + this.id * 180, 370)
//             ctx.fill()
//         },
//         display: function(offset = 0) {
//             defaultDisplay(offset, this.name)
//             ctx.fillStyle = "green"
//             ctx.beginPath()
//             ctx.moveTo(45 - offset, 35)
//             ctx.lineTo(45 - offset, 75)
//             ctx.lineTo(30 - offset, 75)
//             ctx.lineTo(50 - offset, 105)
//             ctx.lineTo(70 - offset, 75)
//             ctx.lineTo(55 - offset, 75)
//             ctx.lineTo(55 - offset, 35)
//             ctx.fill()
//             ctx.fillStyle = "red"
//             ctx.beginPath()
//             ctx.moveTo(85 - offset, 105)
//             ctx.lineTo(85 - offset, 65)
//             ctx.lineTo(70 - offset, 65)
//             ctx.lineTo(90 - offset, 35)
//             ctx.lineTo(110 - offset, 65)
//             ctx.lineTo(95 - offset, 65)
//             ctx.lineTo(95 - offset, 105)
//             ctx.fill()
//         },
//     },
//     {
//         name: "Skill Issue",
//         description: "Die in the last part of a level",
//         id: 3,
//         render: function() {
//             ctx.fillStyle = "black"
//             ctx.textAlign = "center"
//             ctx.font = "122px Source Sans Pro"
//             ctx.fillText("L", 430 + this.id * 180, 365)
//         },
//         display: function(offset = 0) {
//             defaultDisplay(offset, this.name)
//             ctx.fillStyle = "black"
//             ctx.textAlign = "center"
//             ctx.font = "98px Source Sans Pro"
//             ctx.fillText("L", 65 - offset, 100)
//         },
//     },
// ];



export {workers}