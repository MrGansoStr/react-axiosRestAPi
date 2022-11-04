import cosa from '../img/background.jpeg'
import { Pies } from '../pie/Pies'

export const Home = () => {
  return (
    <>
    <div className="container">
      <img src={cosa} className="img-flot img-fluid" />
      <div className="">
        <div className="text-in-img">Celen - Pays</div>
        <div className="text-in-img1 mb-2"> Una nueva forma de aprender :v </div>
      </div>
    </div>
    <Pies/>
    </>
  )
}