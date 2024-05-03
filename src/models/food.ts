class Food {
  description: string
  image: string
  title: string
  id: number

  constructor(description: string, image: string, title: string, id: number) {
    this.description = description
    this.image = image
    this.title = title
    this.id = id
  }
}

export class FoodHome extends Food {
  infos: string[]
  rank: number

  constructor(
    infos: string[],
    rank: number,
    description: string,
    image: string,
    title: string,
    id: number
  ) {
    super(description, image, title, id)
    this.infos = infos
    this.rank = rank
  }
}

export default Food
