import '../style/app.css'
import uzbFlag from '../media/uzb.svg'
import DataLogo from '../media/datalogo 1.png'
function Navbar() {

    return (
        <nav>
            <div className="navTop">
                <div className="container">
                <div className="navTopLeft">
                    <span className='adresNav'>Адрес: Urganch, Darital, 2-этаж</span>
                </div>
                <div className="navTopRight">
                    <span className='adresNav'>Телефон поддержки: (99) 900 10 10</span>
                    <div className="til">
                        <img src={uzbFlag} alt="" />
                        <select name="Til" id="" className='navSec'>
                            <option value="uzb">
                                UZB
                            </option>
                            <option value="rus">
                                RUS
                            </option>
                        </select>
                    </div>
                </div>
                </div>
            </div>
            <div className="navBottom">
            <img src={DataLogo} />
            
            </div>
        </nav>
    )
}

export default Navbar