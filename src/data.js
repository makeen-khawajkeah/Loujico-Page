// src/data.jsx

// الروابط الأساسية في الناف بار
export const NavLinks = [
    {
        id: "1",
        path: "#home",
        title: "nav.home"
    },
    {
        id: "2",
        path: "#portfolio",
        title: "nav.portfolio"
    },
    {
        id: "3",
        path: "#why-us",
        title: "nav.whyUs"
    },
    {
        id: "4",
        path: "#goals",
        title: "nav.goals"
    },
    {
        id: "5",
        path: "#follow-us",
        title: "nav.followUs"
    }
];

// روابط القائمة المنسدلة الخاصة بالـ Portfolio
export const PortfolioDropdownLinks = [
    {
        id: "1",
        path: "#founding-business",
        title: "portfolio.foundingBusiness"
    },
    {
        id: "2",
        path: "#development-consulting",
        title: "portfolio.developmentConsulting"
    },
    {
        id: "3",
        path: "#management-consulting",
        title: "portfolio.managementConsulting"
    },
    {
        id: "4",
        path: "#project-consulting",
        title: "portfolio.projectConsulting"
    },
];

export const FoundingBusiness = [
    {
        id: "1",
        customer: "portfolio.customers.spearingsFactory",
        location: "cities.jeddah",
        activity: "activities.foodIndustry"
    },
    {
        id: "2",
        customer: "portfolio.customers.perferHeart",
        location: "locations.websiteTurkey",
        activity: "activities.industrialCraftsman"
    },
    {
        id: "3",
        customer: "portfolio.customers.hubris",
        location: "locations.sahabiRestaurant",
        activity: "activities.foodDrinks"
    },
    {
        id: "4",
        customer: "portfolio.customers.visionGenerationSchool",
        location: "locations.saudiArabia",
        activity: "activities.educational"
    },
    {
        id: "5",
        customer: "portfolio.customers.tourismCompany",
        location: "locations.malaysiaKuwaitTurkey",
        activity: "activities.tourist"
    },
    {
        id: "6",
        customer: "portfolio.customers.alSafaRestaurant",
        location: "locations.malaysiaKuwaitTurkey",
        activity: "activities.foodDrinks"
    },
    {
        id: "7",
        customer: "portfolio.customers.silkRoad",
        location: "cities.malaysia",
        activity: "activities.carRental"
    },
    {
        id: "8",
        customer: "portfolio.customers.youAtYou",
        location: "cities.malaysia",
        activity: "activities.marketing"
    },
    {
        id: "9",
        customer: "portfolio.customers.easyFly",
        location: "locations.malaysiaRussia",
        activity: "activities.tourist"
    }
];

export const ProjectConsulting = [
    {
        id: "1",
        customer: "portfolio.customers.princessNourahUniversity",
        location: "cities.riyadh",
        activity: "activities.bookFair"
    },
    {
        id: "2",
        customer: "portfolio.customers.roshnExpo",
        location: "cities.riyadh",
        activity: "activities.bookFair"
    },
    {
        id: "3",
        customer: "portfolio.customers.arqaHospital",
        location: "cities.riyadh",
        activity: "activities.graffitiExhibition"
    },
    {
        id: "4",
        customer: "portfolio.customers.diriyahGate",
        location: "cities.riyadh",
        activity: "activities.noorRiyad"
    },
    {
        id: "5",
        customer: "portfolio.customers.riyadhCity",
        location: "cities.riyadh",
        activity: "activities.boulevardWorld"
    },
    {
        id: "6",
        customer: "portfolio.customers.roshnExpo2",
        location: "cities.riyadh",
        activity: "activities.blackHat"
    },
    {
        id: "7",
        customer: "portfolio.customers.roshnExpo3",
        location: "cities.riyadh",
        activity: "activities.perfumeExhibition"
    },
    {
        id: "8",
        customer: "portfolio.customers.riyadhCity2",
        location: "cities.riyadh",
        activity: "activities.saudiChineseConference"
    },
    {
        id: "9",
        customer: "portfolio.customers.ritsCarlton",
        location: "cities.riyadh",
        activity: "activities.joyAwards"
    },
    {
        id: "10",
        customer: "portfolio.customers.roshnExpo4",
        location: "cities.riyadh",
        activity: "activities.lip"
    },
    {
        id: "11",
        customer: "portfolio.customers.waterfront",
        location: "cities.jeddah",
        activity: "activities.formula1"
    }
];

export const ManagementConsulting = [
    {
        id: "1",
        customer: "portfolio.customers.pic",
        location: "locations.websiteMalaysia",
        activity: "activities.training"
    },
    {
        id: "2",
        customer: "portfolio.customers.taysirFactory",
        location: "cities.yanbu",
        activity: "activities.petrochemicals"
    },
    {
        id: "3",
        customer: "portfolio.customers.baqshanDental",
        location: "cities.jeddah",
        activity: "activities.medicalCommercial"
    },
    {
        id: "4",
        customer: "portfolio.customers.modernOceans",
        location: "locations.jeddahMedina",
        activity: "activities.industrial"
    },
    {
        id: "5",
        customer: "portfolio.customers.adminFinancialCenter",
        location: "cities.jeddah",
        activity: "activities.training"
    },
    {
        id: "6",
        customer: "portfolio.customers.inshaaEngineering",
        location: "cities.jeddah",
        activity: "activities.contracting"
    },
    {
        id: "7",
        customer: "portfolio.customers.skyPark",
        location: "cities.malaysia",
        activity: "activities.realEstate"
    },
    {
        id: "8",
        customer: "portfolio.customers.balubaid",
        location: "cities.jeddah",
        activity: "activities.privateProperties"
    },
    {
        id: "9",
        customer: "portfolio.customers.alFurqanCenter",
        location: "cities.jeddah",
        activity: "activities.educational"
    },
    {
        id: "10",
        customer: "portfolio.customers.sunway",
        location: "cities.malaysia",
        activity: "activities.entertainment"
    }
];

export const DevelopmentConsulting = [
    {
        id: "1",
        customer: "portfolio.customers.awafiIceCream",
        location: "cities.mecca",
        activity: "activities.foodIndustry"
    },
    {
        id: "2",
        customer: "portfolio.customers.alFuratWater",
        location: "cities.yemen",
        activity: "activities.industrial"
    },
    {
        id: "3",
        customer: "portfolio.customers.abuDanMedical",
        location: "locations.websiteSaudi",
        activity: "activities.medical"
    },
    {
        id: "4",
        customer: "portfolio.customers.alNawalHotel",
        location: "cities.mecca",
        activity: "activities.serviceHajj"
    },
    {
        id: "5",
        customer: "portfolio.customers.akadGoods",
        location: "cities.riyadh",
        activity: "activities.commercial"
    },
    {
        id: "6",
        customer: "portfolio.customers.alHimamEntertainment",
        location: "locations.saudiArabia",
        activity: "activities.eventManagement"
    },
    {
        id: "7",
        customer: "portfolio.customers.hijrahRoad",
        location: "locations.saudiEgypt",
        activity: "activities.logistics"
    },
    {
        id: "8",
        customer: "portfolio.customers.abuKanonShawarma",
        location: "cities.malaysia",
        activity: "activities.food"
    },
    {
        id: "9",
        customer: "portfolio.customers.pillar",
        location: "locations.riyadhJeddah",
        activity: "activities.marineServices"
    }
];

export const WhyUsFeatures = [
    {
        id: 1,
        title: "whyUs.features.globalExpertise.title",
        description: "whyUs.features.globalExpertise.description"
    },
    {
        id: 2,
        title: "whyUs.features.innovativeSolutions.title",
        description: "whyUs.features.innovativeSolutions.description"
    },
    {
        id: 3,
        title: "whyUs.features.truePartnership.title",
        description: "whyUs.features.truePartnership.description"
    }
];

export const GoalsData = [
    {
        id: 1,
        title: "goals.employees",
        target: 1000,
        icon: "FaUsers"
    },
    {
        id: 2,
        title: "goals.products",
        target: 200,
        icon: "FaCube"
    },
    {
        id: 3,
        title: "goals.customers",
        target: 500,
        icon: "FaHandshake"
    },
    {
        id: 4,
        title: "goals.partners",
        target: 20,
        icon: "FaAward"
    },
];

// Footer data
export const FooterData = {
    mainInfo: {
        title: "company.name",
        description: "footer.description",
    },
    contactInfo: {
        title: "footer.contactTitle",
        address: "footer.address",
        email: "info@loujico.com",
        phone: "+963 996 320 963"
    },
    socialLinks: [
        {
            id: 1,
            name: "Linkedin",
            url: "https://wa.me/963996320963",
            icon: "FaLinkedin"
        },
        {
            id: 2,
            name: "Twitter",
            url: "https://wa.me/963996320963",
            icon: "FaTwitter"
        },
        {
            id: 3,
            name: "Facebook",
            url: "https://wa.me/963996320963",
            icon: "FaFacebook"
        },
        {
            id: 4,
            name: "Instagram",
            url: "https://wa.me/963996320963",
            icon: "FaInstagram"
        },
        {
            id: 5,
            name: "Youtube",
            url: "https://wa.me/963996320963",
            icon: "FaYoutube"
        },
        {
            id: 6,
            name: "Tiktok",
            url: "https://wa.me/963996320963",
            icon: "FaTiktok"
        },
        {
            id: 7,
            name: "Whatsapp",
            url: "https://wa.me/963996320963",
            icon: "FaWhatsapp"
        },
        {
            id: 8,
            name: "Pinterest",
            url: "https://wa.me/963996320963",
            icon: "FaPinterest"
        },
        {
            id: 9,
            name: "Snapchat",
            url: "https://wa.me/963996320963",
            icon: "FaSnapchat"
        },
        {
            id: 10,
            name: "Telegram",
            url: "https://wa.me/963996320963",
            icon: "FaTelegram"
        }
    ],
    quickLinks: [
        {
            id: 1,
            title: "nav.home",
            url: "#home"
        },
        {
            id: 2,
            title: "nav.portfolio",
            url: "#portfolio"
        },
        {
            id: 3,
            title: "nav.whyUs",
            url: "#why-us"
        },
        {
            id: 4,
            title: "nav.goals",
            url: "#goals"
        },
        {
            id: 5,
            title: "nav.contact",
            url: "#contact"
        }
    ]
};