import footerData from "../mockData/footerData";

export const Header = ({ header }) => (
    <h1>{header}</h1>
);

export const FooterButtons = ({ type, title }) => {
    switch (type) {
        case "button":
            return (
                <button className="btn_last">{title}</button>
            );
        default:
            return null;
    }
};

export const FooterLogo = ({ image: { alt, src } }) => (
    <img src={src} alt={alt} />
);

export const Gpt3 = ({item}) => {
    const {text}=item
    return (
    <div className="text_2"> 
        {text}
    </div>
    );
};

export const Links=({item})=>{
    const {href, title}=item
    return (
    <div className="text_1">
        <a href={href}>{title}</a>
    </div>
);
}

export const Company=({item})=>{
    const {href, title}=item
    return (
        <div className="text_1">
            <a href={href}>{title}</a>
        </div>
    );
}

export const Contacts = ({item}) => {
    const {text}=item
    return (
        <div className="text_1">
            {text}
        </div>
    );
};

export const FinalGpt3 = ({ gpt3 }) => {
    return gpt3.map((item, index) => (
        <Gpt3 key={index} item={item} />
    ));
};

export const FinalLinks = ({ links }) => {
    return links.map((item, index) => (
        <Links key={index} item={item} />
    ));
};

export const FinalCompany = ({ company }) => {
    return company.map((item, index) => (
        <Company key={index} item={item} />
    ));
};

export const FinalContacts = ({ contacts }) => {
    return contacts.map((item, index) => (
        <Contacts key={index} item={item} />
    ));
};

export const Copyright = ({copyrightText}) => (
    <div className="bottom_text">
        {copyrightText}
    </div>
);

const Footer = () => {
    const {header,fotButton,footerLogo,gpt3,links,company,contacts,copyrightText} = footerData;

    return (
        <>
            <div className="footer_header">
                <div className="header_text">
                    <Header header={header}/>
                </div>
                <div className="btn_box">
                    <FooterButtons type ={fotButton.type} title={fotButton.title} />
                </div>
            </div>
            <div className="gpt_box">
                <div className="logo">
                    <div className="gpt_icon">
                        <FooterLogo image={footerLogo}/>
                    </div>
                    <FinalGpt3 gpt3={gpt3}/>
                </div>
                <div className="links">
                    <div className="text_1">
                        Ссылки
                    </div>
                    <FinalLinks links={links}/>
                </div>
                <div className="company">
                    <div className="text_1">
                        Компания
                    </div>
                    <FinalCompany company={company}/>
                </div>
                <div className="get_in_touch">
                    <div className="text_1">
                        Контакты
                    </div>
                    <FinalContacts contacts={contacts}/>
                </div>
            </div>
            <Copyright copyrightText={copyrightText}/>
        </>
    );
};

export default Footer;