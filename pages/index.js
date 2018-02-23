import Header from '../components/Header'
import { Carousel, List } from 'antd-mobile'
import service from '../services'
import assets from '../utils/assets.js'

const Item = List.Item

export default class Index extends React.Component {
  static async getInitialProps() {
    const res = await service.getDogBreedsList()
    const breeds = (await res.json()).message
    return { data: { breeds } }
  }

  state = {
    banner: [1, 2, 3]
  }

  render() {
    const { breeds } = this.props.data
    return (
      <div>
        <Header />
        <style jsx>{`
          .carouselWrapper {
            height: auto;
          }
          .carouselImg {
            width: 100%;
          }
        `}</style>
        <div>
          <Carousel selectedIndex={0} autoplay={true} infinite dots={false}>
            {this.state.banner.map(id => (
              <div key={id} className="carouselWrapper">
                <img src={assets[`banner${id}`]} className="carouselImg" />
              </div>
            ))}
          </Carousel>
        </div>
        <div>
          <List renderHeader={() => 'Remote Server Data'}>
            {breeds.map((breed, index) => <Item key={index}>{breed}</Item>)}
          </List>
        </div>
      </div>
    )
  }
}
