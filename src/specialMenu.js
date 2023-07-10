import Dessert1 from "./components/assets/salad.jpg"
import Dessert2 from "./components/assets/bruschetta1.jpg"
import Dessert3 from "./components/assets/creme.jpg"

const specials =  [
    {   
        id: 1,
        image: Dessert1,
        title: "Greek Salad",
        price: "$12.99",
        description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
        order: "Order a delivery"
    },
    {
        id: 2,
        image: Dessert2,
        title: "Bruschetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
        order: "Order a delivery"
    },
    {
        id: 3,
        image: Dessert3,
        title: "Lemon Dessert",
        price: "$5.00",
        description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
        order: "Order a delivery"
    }
]

export default specials;