const menu = {
    _courses: {
        appetizers: [], 
        mains: [], 
        desserts: []
    },
    get courses(){
        return this._courses
    },
    get appetizers(){return this._courses.appetizers}, 
    get mains(){return this._courses.mains}, 
    get desserts(){return this._courses.desserts},
    set appetizers(appertizer){
        return typeof appertizer === 'string'? this._courses.appetizers.push(appertizer) :'appetizer must be a string'
    }, 
    set mains(main){
        return typeof main === 'string' ? this._courses.mains.push(main) : 'main must be a string'
    }, 
    set desserts(dessert){
        return typeof dessert === 'string' ? this._courses.desserts.push(dessert) :'dessert must be a string'
    },
    addDishToCourse(courseName, dishName , dishPrice){
        const dish = {
            name: dishName,
            price: dishPrice
        }
        this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName){
        const dishes = this._courses[courseName]
        return dishes[Math.floor(Math.random() * dishes.length)]
    },
    generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizers'),       
        main = this.getRandomDishFromCourse('mains'),
        dessert = this.getRandomDishFromCourse('desserts'),
        total = appetizer.price + main.price + dessert.price

        return `The total cost of your meal is £${total.toFixed(2)}.`
    }
}

menu.addDishToCourse('appetizers', 'bean soup', 5.35)
menu.addDishToCourse('mains', 'fish and chips', 15.75)
menu.addDishToCourse('desserts', 'chocolate crumble', 8.35)

console.log(menu.generateRandomMeal())
