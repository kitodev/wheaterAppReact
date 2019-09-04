import React from 'react';
import './Country.css';
import sun from '../../img/sun.svg';
import snow from '../../img/snowflake.svg';
import ca from '../../img/pic-bg-1.jpg';
import ru from '../../img/pic-bg-2.jpg';

const Country = (props) => {
    let currentTemp = 0;

    if (props.cities) {
        let fahrenheit = parseInt(props.cities.main.temp);
        let celsius = parseInt((fahrenheit - 32) * (5 / 9));
        if(props.temSymbol === 'F') {
            currentTemp = fahrenheit;
        } else {
            currentTemp = celsius;
        }
    }

    return(
        <section>
            <div className="main">
                <div className="icon-temp">
                    {props.cities && props.cities.name === 'Los Angeles' ?
                        <img src={sun} alt='Sun' />
                        :
                        <img src={snow} alt='Snow' />
                    }
                    <p id='temp'>{props.cities ? currentTemp : ''}</p>
                </div>
                <p>{props.cities ? props.cities.weather[0].main.toUpperCase(): ''}</p>
            </div>
            { props.cities && props.cities.name === 'Los Angeles' ? 
                <img src={ca} alt="wint" id="country-img" />
                :
                <img src={ru} alt="wint" id="country-img" />
            }
            <div className="country">
            <img src={ca} alt="wint" id="country-img" />
            { props.cities && props.cities.name === 'Los Angeles' ? 
                <div>
                    <p>Los Angeles</p>
                    <p>CALIFORNIA</p>
                </div>
                :
                <div>
                    <p>Moscow</p>
                    <p>Russia</p>
                </div>
            }
            </div>
        </section>
    );
}

export default Country;