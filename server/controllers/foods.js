let id=1

let foods = [
    {
        id: id++,
        food: 'Apple',
        calories: 95,
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

    
    // update:,
    // delete:
}