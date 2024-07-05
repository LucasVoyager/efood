import Hero from '../../components/Hero'
import Banner from '../../components/Banner'
import ProdList from '../../containers/ProdList'
import pizzaImage from '../../assets/images/pizza.png'
import FoodPizza from '../../models/pizza'

const foodPizza: FoodPizza[] = [
  {
    id: 1,
    title: 'Pizza Marquerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    picture: pizzaImage,
    portion: 'de 2 a 3 pessoas',
    price: 60.9
  },
  {
    id: 2,
    title: 'PizzaImage Marquerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    picture: pizzaImage,
    portion: 'de 2 a 3 pessoas',
    price: 60.9
  },
  {
    id: 3,
    title: 'Pizza Marquerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    picture: pizzaImage,
    portion: 'de 2 a 3 pessoas',
    price: 60.9
  },
  {
    id: 4,
    title: 'Pizza Marquerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    picture: pizzaImage,
    portion: 'de 2 a 3 pessoas',
    price: 60.9
  },
  {
    id: 5,
    title: 'Pizza Marquerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    picture: pizzaImage,
    portion: 'de 2 a 3 pessoas',
    price: 60.9
  },
  {
    id: 6,
    title: 'Pizza Marquerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    picture: pizzaImage,
    portion: 'de 2 a 3 pessoas',
    price: 60.9
  }
]

const pizza = {
  type: 'italiana',
  name: 'La Dolce Vita Trattoria'
}

const Perfil = () => {
  return (
    <>
      <Hero />
      <Banner type={pizza.type} name={pizza.name} />
      <div className="container">
        <ProdList food={foodPizza} />
      </div>
    </>
  )
}

export default Perfil
