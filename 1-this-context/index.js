function tripTo(planet) {
    return `Trip to ${this.name ? planet.name : 'Moon'}`;
}

let planet = {
    name: "mars",
    gravity: "3.7m/s"
}

console.log(tripTo(planet));