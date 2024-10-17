import {buttontwoData} from "../mockData/buttontwoData";

export const Early = ({ earlytext }) => (
    <p className="early">{earlytext}</p>
);

export const Maintext = ({ main_text }) => (
    <h3 className="big__text">{main_text}</h3>
);

export const Button = ({ type, title }) => {
    switch (type) {
        case "button":
            return (
                <button className="main_botton_two">{title}</button>
            );
        default:
            return null;
    }
};

const Buttontwo = () => {
    const { earlytext, main_text, buttontwo } = buttontwoData;

    return (
        <>
            <div className="botton_two_left">
                <Early earlytext={earlytext}/>
                <Maintext main_text={main_text}/>
            </div>
            <div className="botton_two_right">
                <Button type={buttontwo.type} title={buttontwo.title} />
            </div>
        </>
    );
};

export default Buttontwo;