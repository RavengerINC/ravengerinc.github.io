import data from '../../data.json';
import { useParams } from 'react-router-dom';
import FeatureImage from '../FeatureImage/FeatureImage';
import ExpandedWriteup from '../ExpandedWriteup/ExpandedWriteup';
import './Feature.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Feature(props){
    let { id } = useParams();
    const { description, position, writeup, images, software, project } = data[id]
    const featureImages = images.map(({ high, low, alt }, i) => {
        return (
            <FeatureImage
                id={i}
                high={high}
                low={low}
                alt={alt}
            />
        )
    })
    const softwareIcons = software.map(({ icon, alt }, i) => {
        return (
            <img src={`${process.env.PUBLIC_URL}/images/${icon}`} alt={alt}></img>
        )
    })
    

    return (
        <div className="Feature">
            <h2>{ description }</h2>
            <Carousel>
                {featureImages}
            </Carousel>
            <div className="Title">
                <h1>{ position }</h1>
            </div>
            <div className="SoftwareIcons">
                { softwareIcons }
            </div>
            <div className="Writeup">
                <p>{ writeup }</p>
            </div>
            <div className="ExpandedWriteup">
                <ExpandedWriteup project={project} />
            </div>

        </div>
    )
}

export default Feature;