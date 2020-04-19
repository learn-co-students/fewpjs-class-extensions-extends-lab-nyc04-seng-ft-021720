// Your code here
class Polygon {
    constructor(sides) {
       this.sides = sides
       this.count = sides.length
    }

    get countSides() {
        return this.count
    }

    get perimeter() {
        return this.sides.reduce(function(a,b) {
            return a + b;
        }, 0)
    }
}

class Triangle extends Polygon {
    
    get isValid(){
        if(this.sides.length === 3){
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        }
        else{
            return false
        }
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.sides.length === 4) {
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            let side4 = this.sides[3]
            return ((side1 === side2) && (side1 === side3) && (side1 === side4))
        } else {
            return false
        }
    }

    get area() {
        return Math.pow(this.sides[0], 2)
    }

}