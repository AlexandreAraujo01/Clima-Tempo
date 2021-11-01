import { useClimate } from '../../Data/store'
import './SearchingSide.css'


export default function CitysDemonstrations(){
    const {setCity} = useClimate()
    return(
        <div>
            <div className="citysDemonstrations1">
                <p className='citys' onClick={ () => setCity('London')}>London</p>
                <p className='citys' onClick={ () => setCity('São Paulo')}>São Paulo</p>
                <p className='citys' onClick={ () => setCity('Long Beach')}>Long Beach</p>
                <p className='citys' onClick={ () => setCity('San Francisco')}>San Francisco</p>
                <p className='citys' onClick={ () => setCity('Rio de Janeiro')}>Rio de Janeiro</p>
            </div>
        </div>
    )
}