import Dessert1 from "./components/assets/salad.jpg"
import Dessert2 from "./components/assets/bruschetta1.jpg"
import Dessert3 from "./components/assets/creme.jpg"
import item1 from "./components/assets/item-1.jpeg"
import item2 from "./components/assets/item-2.jpeg"
import item3 from "./components/assets/item-3.jpeg"
import item4 from "./components/assets/item-4.jpeg"

const specials =  [
    {   
        id: 1,
        image: Dessert1,
        title: "Greek Salad",
        category: 'Monday',
        price: "$12.99",
        description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
        order: "Order a delivery"
    },
    {
        id: 2,
        image: Dessert2,
        title: "Bruschetta",
        category: 'Teusday',
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
        order: "Order a delivery"
    },
    {
        id: 3,
        image: Dessert3,
        title: "Lemon Dessert",
        category: 'Wednesday',
        price: "$5.00",
        description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
        order: "Order a delivery"
    },
    {
        id: 4,
        title: 'buttermilk pancakes',
        category: 'Thursday',
        price: 15.99,
        image: item1,
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
        order: "Order a delivery"   
      },
      {
        id: 5,
        title: 'diner double',
        category: 'Friday',
        price: 13.99,
        image: item2,
        description: " vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
        order: "Order a delivery"
      },
      {
        id: 6,
        title: 'godzilla milkshake',
        category: 'Saturday',
        price: 6.99,
        image:item3,
        description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        order: "Order a delivery"
      },
      {
        id: 7,
        title: 'country delight',
        category: 'Sunday',
        price: 20.99,
        image:item4,
        description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, ",
        order: "Order a delivery"
      }
]

export default specials;