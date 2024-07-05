class FoodPizza {
  id: number
  title: string
  picture: string
  description: string
  portion: string
  price: number

  constructor(
    id: number,
    title: string,
    picture: string,
    description: string,
    portion: string,
    price: number
  ) {
    this.id = id
    this.title = title
    this.picture = picture
    this.description = description
    this.portion = portion
    this.price = price
  }
}

export default FoodPizza
