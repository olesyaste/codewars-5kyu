function cakes(recipe, available) {
    const numbers = [];
     for (let ing in recipe){
     numbers.push(Math.floor(available[ing] / recipe[ing]))
     }
     return Math.min(...numbers) || 0
}