// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "RICHARD GUANG": "RICHARD GUANG",
      About: "About",
      Listing: "Listings",
      "Foreign Investor Guide": "Foreign Investor Guide",
      "Neighborhood Guide": "Neighborhood Guide",
      Contact: "Contact",
      "REAL ESTATE": "REAL ESTATE",
      ABOUT: "ABOUT",
      "Richard Guang is a graduate of the MIT Sloan School of Management where he studied Finance and Statistics. He has a fierce work ethic, tenacious drive to succeed, and an ability to establish rapport with all people. Born and raised in New York City, Richard's expertise and vast knowledge of the city ensures the highest caliber of service to his clients, whether it be buying, selling, investing, or renting a property.":
        "Richard Guang is a graduate of the MIT Sloan School of Management where he studied Finance and Statistics. He has a fierce work ethic, tenacious drive to succeed, and an ability to establish rapport with all people. Born and raised in New York City, Richard's expertise and vast knowledge of the city ensures the highest caliber of service to his clients, whether it be buying, selling, investing, or renting a property.",
      "He has previously worked at JP Morgan Private Bank, various asset management firms in New York, and is currently a member of the Real Estate Board of New York. He has also been helping his family manage various properties throughout the city from a young age. A lifelong athlete and competitor, Richard enjoys running, calisthenics, and biking.":
        "He has previously worked at JP Morgan Private Bank, various asset management firms in New York, and is currently a member of the Real Estate Board of New York. He has also been helping his family manage various properties throughout the city from a young age. A lifelong athlete and competitor, Richard enjoys running, calisthenics, and biking.",
      "Richard's ability to adapt quickly and to challenge the status quo makes him a dynamic player who can find the solution to any problem. He is passionate about luxury real estate and loves leading individuals, families, and investors to achieve their real estate aspirations.":
        "Richard's ability to adapt quickly and to challenge the status quo makes him a dynamic player who can find the solution to any problem. He is passionate about luxury real estate and loves leading individuals, families, and investors to achieve their real estate aspirations.",
    },
  },
  cn: {
    translation: {
      "RICHARD GUANG": "管赐盛",
      About: "关于管赐盛",
      Listing: "房源列表",
      "Foreign Investor Guide": "外国投资者指南",
      "Neighborhood Guide": "社区指南",
      Contact: "联系我们",
      "REAL ESTATE": "地产",
      ABOUT: "关于",
      "Richard Guang is a graduate of the MIT Sloan School of Management where he studied Finance and Statistics. He has a fierce work ethic, tenacious drive to succeed, and an ability to establish rapport with all people. Born and raised in New York City, Richard's expertise and vast knowledge of the city ensures the highest caliber of service to his clients, whether it be buying, selling, investing, or renting a property.":
        "管赐盛毕业于麻省理工学院斯隆管理学院，主修金融和统计学。他有强烈的职业道德、坚韧不拔的成功欲望，并且善于与所有人建立融洽的关系。管赐盛在纽约市出生和长大，他的专业知识和对这座城市的广泛了解确保他能为客户提供最高水准的服务，无论是购买、出售、投资还是租赁房产。",
      "He has previously worked at JP Morgan Private Bank, various asset management firms in New York, and is currently a member of the Real Estate Board of New York. He has also been helping his family manage various properties throughout the city from a young age. A lifelong athlete and competitor, Richard enjoys running, calisthenics, and biking.":
        "他曾在摩根大通私人银行、纽约多家资产管理公司工作，目前是纽约房地产委员会成员。他还从小就帮助家人管理遍布全市的各种房产。理查德一生都是运动员和竞争者，喜欢跑步、有氧运动和骑自行车。",
      "Richard's ability to adapt quickly and to challenge the status quo makes him a dynamic player who can find the solution to any problem. He is passionate about luxury real estate and loves leading individuals, families, and investors to achieve their real estate aspirations.":
        "管赐盛的快速适应能力和挑战现状的能力使他成为一名充满活力的玩家，能够找到解决任何问题的方法。他对豪华房地产充满热情，并热衷于带领个人、家庭和投资者实现他们的房地产梦想。",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Set the default language here
  fallbackLng: "en", // Default language if the specified language fails
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
