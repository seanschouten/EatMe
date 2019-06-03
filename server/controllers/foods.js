let id=1

let foods = [
    {
        id: id++,
        food: 'Spaghetti & Meatballs',
        calories: 800,
        category: 'meal'
    },
    {
        id: id++,
        food: 'Cake',
        calories: 130,
        category: 'snack' 
    }
]

module.exports = {
    create:(req, res) => {
        let { calories, food, category } = req.body
        let newFood = {
            id: id++,
            calories,
            food,
            category
        }
        foods.push(newFood)
        res.send(foods)
    },
    read:(req, res) => res.send(foods),


    update:(req,res) => {
        // console.log('hit update')

        let { id } = req.params
        let updatedFood = req.body
        updatedFood.id = id
        console.log(updatedFood)
        let index = foods.findIndex(item => +item.id === +id)

        foods.splice(index, 1, updatedFood)
        console.log(foods)
        res.send(foods)
    },


    delete:(req, res) => {
        let { id } = req.params
        let index = foods.findIndex(item => +item.id === +id) 
        foods.splice(index, 1)
        res.send(foods)
    }
}