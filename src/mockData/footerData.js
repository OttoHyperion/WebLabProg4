import Logo from "../assets/img/logo.svg";

const header=
    "Хотите Шагнуть в Будущее Раньше Других?";

const fotButton =
    {
        type: "button",
        title: "Запросить ранний доступ",
    };

const footerLogo={
    src: Logo,
    alt:"gpt-3",
}

const gpt3=[
    {
        text:<p>ул. Профессора Поздеева, 13, к.Г, <br/>Пермь, Пермский край, 614013 </p>
    },
    {
        text:<p>Все права защищены</p>
    },
]

const links=[
    {
        href: "/links",
        title: "Овероны",
    },
    {
        href: "/links",
        title: "Соц.сети",
    },
    {
        href: "/links",
        title: "Счётчики",
    },
    {
        href: "/links",
        title: "Контакты",
    },
]

const company=[
    {
        href: "/company",
        title: "Условия использования",
    },
    {
        href: "/company",
        title: "Перс.данные",
    },
    {
        href: "/company",
        title: "Контакты",
    },
]

const contacts=[
    {
        text:<p>ул. Профессора <br/> Поздеева, 13, к.Г, Пермь</p>
    },
    {
        text: <p>+7 (342) 2-198-520</p>
    },
    {
        text: <p>info@pstu.ru</p>
    },
]

const copyrightText=
    "© 2023 GPT-3. Все права защищены.";

const footerData={
    header,
    fotButton,
    footerLogo,
    gpt3,
    links,
    company,
    contacts,
    copyrightText,
}

export default footerData