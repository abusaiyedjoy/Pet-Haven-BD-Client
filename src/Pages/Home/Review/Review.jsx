import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Header from '../../Header/Header';

const Review = () => {
    return (
        <>
            <Header
                Heading={"🐕Reviews from Our Happy Pet Parents🐕"}
            ></Header>
            <AwesomeSlider className='h-[400px] border-2'>
                <div className='text-6xl font-bold text-center bg-white text-black h-full w-full'>1vgbhjnkml</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </AwesomeSlider>
        </>
    );
};

export default Review;