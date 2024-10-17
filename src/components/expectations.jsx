import expectationsData from "../mockData/expectationsData";

export const Image = ({ image: {alt, src} }) => (
    <img src={src} alt={alt} />
);

export const Firsttext = ({ text }) => (
    <p className="first_text">{text}</p>
);
export const Expectationstext = ({ expectations_text }) => (
    <h2 className="expectations_text">{expectations_text}</h2>
);

export const Maintext = ({ main_text }) => (
    <p className="main_text">{main_text}</p>
);


const Expectations = () => {
    const {image, text, expectationstext, maintext} = expectationsData;

    return (
        <>
            <div className="expectations_left">
                <Image image={image} />
            </div>
            <div className="expectations_right">
                <Firsttext text={text}/>
                <Expectationstext expectations_text={expectationstext}/>
                <Maintext main_text={maintext}/>
                <a href="/expectations" class="request_early_access">Запросить ранний доступ</a>
            </div>
        </>
    );
};

export default Expectations;
