import Card from '../../components/Card'
import { ListCardContainer } from './styles'

import sushi from '../../assets/images/sushi.png'
import pasta from '../../assets/images/pasta.png'

const ListCard = () => {
  return (
    <ListCardContainer>
      <Card
        infos={['Destaque da semana', 'japonesa']}
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
        image={sushi}
        rank={4.9}
        title="Hioki Sushi"
      />
      <Card
        infos={['italiana']}
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image={pasta}
        rank={4.6}
        title="La Dolce Vita Trattoria"
      />
      <Card
        infos={['italiana']}
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image={pasta}
        rank={4.6}
        title="La Dolce Vita Trattoria"
      />
      <Card
        infos={['italiana']}
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image={pasta}
        rank={4.6}
        title="La Dolce Vita Trattoria"
      />
      <Card
        infos={['italiana']}
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image={pasta}
        rank={4.6}
        title="La Dolce Vita Trattoria"
      />
      <Card
        infos={['italiana']}
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image={pasta}
        rank={4.6}
        title="La Dolce Vita Trattoria"
      />
    </ListCardContainer>
  )
}

export default ListCard
