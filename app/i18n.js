// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "RICHARD GUANG": "RICHARD GUANG",
      About: "About",
      Listing: "Listings",
      "Foreign Investor Guide": "FOREIGN INVESTOR GUIDE",
      "Neighborhood Guide": "Neighborhood Guide",
      Contact: "CONTACT",
      "REAL ESTATE": "REAL ESTATE",
      ABOUT: "ABOUT",
      "Richard Guang is a graduate of the MIT Sloan School of Management where he studied Finance and Statistics. He has a fierce work ethic, tenacious drive to succeed, and an ability to establish rapport with all people. Born and raised in New York City, Richard's expertise and vast knowledge of the city ensures the highest caliber of service to his clients, whether it be buying, selling, investing, or renting a property.":
        "Richard Guang is a graduate of the MIT Sloan School of Management where he studied Finance and Statistics. He has a fierce work ethic, tenacious drive to succeed, and an ability to establish rapport with all people. Born and raised in New York City, Richard's expertise and vast knowledge of the city ensures the highest caliber of service to his clients, whether it be buying, selling, investing, or renting a property.",
      "He has previously worked at JP Morgan Private Bank, various asset management firms in New York, and is currently a member of the Real Estate Board of New York. He has also been helping his family manage various properties throughout the city from a young age. A lifelong athlete and competitor, Richard enjoys running, calisthenics, and biking.":
        "He has previously worked at JP Morgan Private Bank, various asset management firms in New York, and is currently a member of the Real Estate Board of New York. He has also been helping his family manage various properties throughout the city from a young age. A lifelong athlete and competitor, Richard enjoys running, calisthenics, and biking.",
      "Richard's ability to adapt quickly and to challenge the status quo makes him a dynamic player who can find the solution to any problem. He is passionate about luxury real estate and loves leading individuals, families, and investors to achieve their real estate aspirations.":
        "Richard's ability to adapt quickly and to challenge the status quo makes him a dynamic player who can find the solution to any problem. He is passionate about luxury real estate and loves leading individuals, families, and investors to achieve their real estate aspirations.",
      "NEIGHBORHOOD GUIDE": "NEIGHBORHOOD GUIDE",
      "Upper East Side": "Upper East Side",
      "The Upper East Side (UES) is known for its historic architecture, luxurious residences, and cultural landmarks. Stretching from Central Park to the East River, it’s one of the wealthiest neighborhoods in NYC, with a mix of upscale townhouses, pre-war buildings, and modern high-rises.":
        "The Upper East Side (UES) is known for its historic architecture, luxurious residences, and cultural landmarks. Stretching from Central Park to the East River, it’s one of the wealthiest neighborhoods in NYC, with a mix of upscale townhouses, pre-war buildings, and modern high-rises.",
      "The UES is home to the Museum Mile, which includes renowned institutions like the Metropolitan Museum of Art, Guggenheim, and Frick Collection. The area exudes a more traditional and sophisticated atmosphere compared to downtown.":
        "The UES is home to the Museum Mile, which includes renowned institutions like the Metropolitan Museum of Art, Guggenheim, and Frick Collection. The area exudes a more traditional and sophisticated atmosphere compared to downtown.",
      "Life on the UES is refined and quiet, with high-end boutiques, designer stores on Madison Avenue, and Michelin-starred restaurants. The neighborhood attracts families and professionals looking for a mix of luxury and convenience.":
        "Life on the UES is refined and quiet, with high-end boutiques, designer stores on Madison Avenue, and Michelin-starred restaurants. The neighborhood attracts families and professionals looking for a mix of luxury and convenience.",
      "The 4, 5, 6 subway lines run along Lexington Avenue, with the newer Q line running down Second Avenue. Several bus lines and easy access to Central Park make getting around convenient.":
        "The 4, 5, 6 subway lines run along Lexington Avenue, with the newer Q line running down Second Avenue. Several bus lines and easy access to Central Park make getting around convenient.",
      "Upper West Side": "Upper West Side",
      "The Upper West Side (UWS) is a family-friendly neighborhood nestled between Central Park and the Hudson River. It boasts wide, tree-lined streets, beautiful pre-war buildings, and a quieter, residential feel compared to other parts of Manhattan.":
        "The Upper West Side (UWS) is a family-friendly neighborhood nestled between Central Park and the Hudson River. It boasts wide, tree-lined streets, beautiful pre-war buildings, and a quieter, residential feel compared to other parts of Manhattan.",
      "The UWS is home to Lincoln Center, which houses the Metropolitan Opera, New York City Ballet, and the New York Philharmonic. It’s also home to the American Museum of Natural History and Beacon Theatre.":
        "The UWS is home to Lincoln Center, which houses the Metropolitan Opera, New York City Ballet, and the New York Philharmonic. It’s also home to the American Museum of Natural History and Beacon Theatre.",
      "This area is laid-back, with plenty of green spaces (including Riverside Park and Central Park), cozy cafes, and casual dining. The UWS is ideal for families and academics, with a relaxed yet refined lifestyle.":
        "This area is laid-back, with plenty of green spaces (including Riverside Park and Central Park), cozy cafes, and casual dining. The UWS is ideal for families and academics, with a relaxed yet refined lifestyle.",
      "The 1, 2, 3 subway lines run along Broadway, while the B and C lines serve the western edge near Central Park West. It’s easy to get to other parts of the city from here.":
        "The 1, 2, 3 subway lines run along Broadway, while the B and C lines serve the western edge near Central Park West. It’s easy to get to other parts of the city from here.",
      Midtown: "Midtown",
      "Midtown Manhattan is the bustling commercial heart of NYC, known for landmarks like Times Square, the Empire State Building, and Rockefeller Center. It’s the city’s primary business district with towering skyscrapers and world-class hotels.":
        "Midtown Manhattan is the bustling commercial heart of NYC, known for landmarks like Times Square, the Empire State Building, and Rockefeller Center. It’s the city’s primary business district with towering skyscrapers and world-class hotels.",
      "Midtown is home to Broadway, where you’ll find some of the most famous theaters in the world. It’s also close to iconic museums like MoMA (Museum of Modern Art).":
        "Midtown is home to Broadway, where you’ll find some of the most famous theaters in the world. It’s also close to iconic museums like MoMA (Museum of Modern Art).",
      "Life in Midtown is fast-paced, with tourists and professionals bustling through its streets. It’s perfect for those who love the energy of the city, with easy access to restaurants, bars, shopping, and major attractions.":
        "Life in Midtown is fast-paced, with tourists and professionals bustling through its streets. It’s perfect for those who love the energy of the city, with easy access to restaurants, bars, shopping, and major attractions.",
      "Midtown is a major transportation hub. Grand Central Station and Penn Station connect you to the entire city and beyond, with multiple subway lines converging here, including the N, Q, R, W, B, D, F, M, 1, 2, 3, A, C, E lines.":
        "Midtown is a major transportation hub. Grand Central Station and Penn Station connect you to the entire city and beyond, with multiple subway lines converging here, including the N, Q, R, W, B, D, F, M, 1, 2, 3, A, C, E lines.",
      Chelsea: "Chelsea",
      "Chelsea is a vibrant, trendy neighborhood known for its art galleries, the High Line Park, and Chelsea Market. It's home to a creative community, with a mix of old warehouses, luxury condos, and brownstones.":
        "Chelsea is a vibrant, trendy neighborhood known for its art galleries, the High Line Park, and Chelsea Market. It's home to a creative community, with a mix of old warehouses, luxury condos, and brownstones.",
      "The neighborhood is a hub for contemporary art, with numerous galleries located in converted warehouses, particularly around 20th to 29th Streets. It also has a strong LGBTQ+ presence and nightlife.":
        "The neighborhood is a hub for contemporary art, with numerous galleries located in converted warehouses, particularly around 20th to 29th Streets. It also has a strong LGBTQ+ presence and nightlife.",
      "Chelsea offers a dynamic mix of creative, upscale living. The High Line brings a unique outdoor space, and Chelsea Piers offers recreational activities. There are plenty of cafes, restaurants, and boutique shopping options.":
        "Chelsea offers a dynamic mix of creative, upscale living. The High Line brings a unique outdoor space, and Chelsea Piers offers recreational activities. There are plenty of cafes, restaurants, and boutique shopping options.",
      "The C, E lines serve Eighth Avenue, while the 1 line runs along Seventh Avenue, making it easy to commute to different parts of Manhattan.":
        "The C, E lines serve Eighth Avenue, while the 1 line runs along Seventh Avenue, making it easy to commute to different parts of Manhattan.",
      "Greenwhich Village": "Greenwhich Village",
      "Greenwich Village is one of NYC’s most historic and iconic neighborhoods, famous for its bohemian vibe, tree-lined streets, and charming townhouses. It has long been a center for artists, writers, and musicians.":
        "Greenwich Village is one of NYC’s most historic and iconic neighborhoods, famous for its bohemian vibe, tree-lined streets, and charming townhouses. It has long been a center for artists, writers, and musicians.",
      "The neighborhood has a rich cultural history, once home to the beat generation and later a hub for the LGBTQ+ movement. It’s also the location of Washington Square Park and NYU.":
        "The neighborhood has a rich cultural history, once home to the beat generation and later a hub for the LGBTQ+ movement. It’s also the location of Washington Square Park and NYU.",
      "Greenwich Village offers a laid-back, artistic lifestyle with an emphasis on local cafes, bookstores, music venues, and boutique shops. It has a close-knit, community feel.":
        "Greenwich Village offers a laid-back, artistic lifestyle with an emphasis on local cafes, bookstores, music venues, and boutique shops. It has a close-knit, community feel.",
      "The A, C, E, B, D, F, M lines, as well as the 1, 2, 3 lines, serve Greenwich Village, offering easy access to other parts of Manhattan and beyond.":
        "The A, C, E, B, D, F, M lines, as well as the 1, 2, 3 lines, serve Greenwich Village, offering easy access to other parts of Manhattan and beyond.",
      "Financial District (FiDi)": "Financial District (FiDi)",
      "The Financial District (FiDi) is home to Wall Street and the New York Stock Exchange, making it a hub for business and finance. In recent years, it has also become a desirable residential neighborhood, with many luxury condos rising.":
        "The Financial District (FiDi) is home to Wall Street and the New York Stock Exchange, making it a hub for business and finance. In recent years, it has also become a desirable residential neighborhood, with many luxury condos rising.",
      "FiDi’s history as a financial hub is visible in landmarks like the New York Stock Exchange, Federal Hall, and One World Trade Center. The area is rich in history, blending the old with the new.":
        "FiDi’s history as a financial hub is visible in landmarks like the New York Stock Exchange, Federal Hall, and One World Trade Center. The area is rich in history, blending the old with the new.",
      "Living in FiDi offers a mix of high-powered, fast-paced weekdays and quieter weekends. It’s known for luxury high-rises, dining options, and proximity to Battery Park and the waterfront.":
        "Living in FiDi offers a mix of high-powered, fast-paced weekdays and quieter weekends. It’s known for luxury high-rises, dining options, and proximity to Battery Park and the waterfront.",
      "FiDi is extremely well-connected with numerous subway lines converging here, including the 2, 3, 4, 5, A, C, J, Z, R lines. The nearby PATH train also connects to New Jersey.":
        "FiDi is extremely well-connected with numerous subway lines converging here, including the 2, 3, 4, 5, A, C, J, Z, R lines. The nearby PATH train also connects to New Jersey.",
      Tribeca: "Tribeca",
      "Tribeca, short for Triangle Below Canal Street, is one of Manhattan’s most exclusive and expensive neighborhoods, known for its luxury lofts and cobblestone streets. Originally an industrial area, it has transformed into a hotspot for wealthy professionals, celebrities, and families.":
        "Tribeca, short for Triangle Below Canal Street, is one of Manhattan’s most exclusive and expensive neighborhoods, known for its luxury lofts and cobblestone streets. Originally an industrial area, it has transformed into a hotspot for wealthy professionals, celebrities, and families.",
      "Tribeca is home to the Tribeca Film Festival and is known for its thriving arts scene and top-tier restaurants. Its galleries, cultural events, and festivals give it a dynamic and creative edge.":
        "Tribeca is home to the Tribeca Film Festival and is known for its thriving arts scene and top-tier restaurants. Its galleries, cultural events, and festivals give it a dynamic and creative edge.",
      "Tribeca offers a blend of quiet, upscale living with proximity to lower Manhattan’s business districts. It's a favorite among families looking for spacious, converted lofts and townhouses, while also attracting celebrities for its privacy.":
        "Tribeca offers a blend of quiet, upscale living with proximity to lower Manhattan’s business districts. It's a favorite among families looking for spacious, converted lofts and townhouses, while also attracting celebrities for its privacy.",
      "The 1, 2, 3, A, C, E subway lines make Tribeca easily accessible to other parts of Manhattan, while its location near the Hudson River offers scenic walking paths.":
        "The 1, 2, 3, A, C, E subway lines make Tribeca easily accessible to other parts of Manhattan, while its location near the Hudson River offers scenic walking paths.",
      SoHo: "SoHo",
      "SoHo (South of Houston Street) is famous for its cast-iron buildings and upscale boutiques. Once a hub for artists, it’s now known for luxury lofts, high-end shopping, and art galleries.":
        "SoHo (South of Houston Street) is famous for its cast-iron buildings and upscale boutiques. Once a hub for artists, it’s now known for luxury lofts, high-end shopping, and art galleries.",
      "SoHo’s artistic roots are still visible through its galleries, museums, and unique shops. The neighborhood is also a major fashion destination, with designer boutiques and flagship stores along its iconic cobblestone streets.":
        "SoHo’s artistic roots are still visible through its galleries, museums, and unique shops. The neighborhood is also a major fashion destination, with designer boutiques and flagship stores along its iconic cobblestone streets.",
      "Living in SoHo means being surrounded by creativity and luxury. Residents enjoy chic loft living, with quick access to high-end dining, shopping, and art. It’s popular with fashion enthusiasts, artists, and affluent professionals.":
        "Living in SoHo means being surrounded by creativity and luxury. Residents enjoy chic loft living, with quick access to high-end dining, shopping, and art. It’s popular with fashion enthusiasts, artists, and affluent professionals.",
      "SoHo is well-served by the C, E, R, W, N, 6 subway lines, offering easy access to Midtown, the Financial District, and Brooklyn.":
        "SoHo is well-served by the C, E, R, W, N, 6 subway lines, offering easy access to Midtown, the Financial District, and Brooklyn.",
      "East Village": "East Village",
      "The East Village has a storied history as a hub for counterculture, art, and music. It’s known for its vibrant nightlife, eclectic dining scene, and artistic community, offering a more bohemian vibe compared to its neighboring areas.":
        "The East Village has a storied history as a hub for counterculture, art, and music. It’s known for its vibrant nightlife, eclectic dining scene, and artistic community, offering a more bohemian vibe compared to its neighboring areas.",
      "The East Village was once the epicenter of the punk rock movement and continues to be a cultural hotspot with music venues, art galleries, and independent theaters. The area has a rich immigrant history, particularly from Eastern European and Latin American communities.":
        "The East Village was once the epicenter of the punk rock movement and continues to be a cultural hotspot with music venues, art galleries, and independent theaters. The area has a rich immigrant history, particularly from Eastern European and Latin American communities.",
      "The East Village offers a lively, youthful atmosphere, with countless bars, restaurants, and coffee shops. The neighborhood appeals to creatives, students, and young professionals who enjoy its laid-back and quirky character.":
        "The East Village offers a lively, youthful atmosphere, with countless bars, restaurants, and coffee shops. The neighborhood appeals to creatives, students, and young professionals who enjoy its laid-back and quirky character.",
      "The L, 6, N, R subway lines connect the East Village to other parts of Manhattan and Brooklyn, while numerous bus routes make transportation easy.":
        "The L, 6, N, R subway lines connect the East Village to other parts of Manhattan and Brooklyn, while numerous bus routes make transportation easy.",
      "Lower East Side": "Lower East Side",
      "The Lower East Side (LES) is one of Manhattan’s trendiest neighborhoods, with a mix of new developments and historic tenement buildings. Known for its immigrant roots, the LES has transformed into a hotspot for nightlife and dining.":
        "The Lower East Side (LES) is one of Manhattan’s trendiest neighborhoods, with a mix of new developments and historic tenement buildings. Known for its immigrant roots, the LES has transformed into a hotspot for nightlife and dining.",
      "LES is famous for its immigrant history, particularly Jewish, Italian, and Chinese communities. It’s also home to some of the city’s best nightlife, with bars, live music venues, and art galleries.":
        "LES is famous for its immigrant history, particularly Jewish, Italian, and Chinese communities. It’s also home to some of the city’s best nightlife, with bars, live music venues, and art galleries.",
      "Residents of the LES enjoy a mix of old and new, with luxury condos rising alongside older, more affordable buildings. The nightlife scene is one of the most active in the city, and the food scene features everything from street food to Michelin-starred restaurants.":
        "Residents of the LES enjoy a mix of old and new, with luxury condos rising alongside older, more affordable buildings. The nightlife scene is one of the most active in the city, and the food scene features everything from street food to Michelin-starred restaurants.",
      "The F, M, J, Z subway lines make it easy to travel from LES to other parts of the city.":
        "The F, M, J, Z subway lines make it easy to travel from LES to other parts of the city.",
      "Flatiron District": "Flatiron District",
      "The Flatiron District is named after the iconic Flatiron Building and is known for its combination of historic architecture and modern amenities. It’s a central Manhattan neighborhood that offers a mix of commercial and residential living.":
        "The Flatiron District is named after the iconic Flatiron Building and is known for its combination of historic architecture and modern amenities. It’s a central Manhattan neighborhood that offers a mix of commercial and residential living.",
      "Flatiron is home to the Museum of Sex, a hub for foodies with the Eataly food hall, and nearby Madison Square Park. The area’s rich history and central location make it a cultural and business hub.":
        "Flatiron is home to the Museum of Sex, a hub for foodies with the Eataly food hall, and nearby Madison Square Park. The area’s rich history and central location make it a cultural and business hub.",
      "Living in the Flatiron District offers a vibrant, cosmopolitan lifestyle with upscale dining, shopping, and easy access to the rest of the city. It’s ideal for professionals and young families who want the convenience of Midtown but with more character.":
        "Living in the Flatiron District offers a vibrant, cosmopolitan lifestyle with upscale dining, shopping, and easy access to the rest of the city. It’s ideal for professionals and young families who want the convenience of Midtown but with more character.",
      "Flatiron is well-connected by the N, R, W, 6 subway lines, making it a great central hub for commuting.":
        "Flatiron is well-connected by the N, R, W, 6 subway lines, making it a great central hub for commuting.",
      Overview: "Overview",
      Culture: "Culture",
      Lifestyle: "Lifestyle",
      Transportation: "Transportation",
      "Your Trusted Partner in Finding your Dream Home":
        "Your Trusted Partner in Finding your Dream Home",
      "Expert knowledge of NYC neighborhoods":
        "Expert knowledge of NYC neighborhoods",
      "Personalized service for both local and international clients":
        "Personalized service for both local and international clients",
      "Specializing in luxury properties and investment opportunities":
        "Specializing in luxury properties and investment opportunities",
      "With years of experience in the New York City real estate market, I specialize in helping clients find their perfect property, whether it's for investment or a place to call home.":
        "With years of experience in the New York City real estate market, I specialize in helping clients find their perfect property, whether it's for investment or a place to call home.",
      "Welcome to Richard's real estate guide for foreign investors! As a seasoned NYC real estate broker, I've had the privilege of assisting many Chinese families in securing the perfect home for their children studying in the United States. With experience helping parents whose children attend prestigious universities like NYU, Columbia, Princeton, Harvard, and MIT, I understand the unique needs and concerns you may have as you embark on this important journey.":
        "Welcome to Richard's real estate guide for foreign investors! As a seasoned NYC real estate broker, I've had the privilege of assisting many Chinese families in securing the perfect home for their children studying in the United States. With experience helping parents whose children attend prestigious universities like NYU, Columbia, Princeton, Harvard, and MIT, I understand the unique needs and concerns you may have as you embark on this important journey.",
      "Why Invest in NYC Real Estate?": "Why Invest in NYC Real Estate?",
      "New York City offers a unique opportunity for real estate investment, combining stability, high appreciation potential, and proximity to some of the world's best universities. For parents, owning a property here not only provides a safe and convenient home for your child but also represents a smart financial investment. The NYC market is known for its resilience and long-term value, making it an ideal choice for international buyers.":
        "New York City offers a unique opportunity for real estate investment, combining stability, high appreciation potential, and proximity to some of the world's best universities. For parents, owning a property here not only provides a safe and convenient home for your child but also represents a smart financial investment. The NYC market is known for its resilience and long-term value, making it an ideal choice for international buyers.",
      "Understanding the NYC Real Estate Market":
        "Understanding the NYC Real Estate Market",
      "The NYC real estate market is vast and varied, with neighborhoods offering different lifestyles and investment potentials. Whether you're looking for a quiet residential area near Columbia University or a vibrant, bustling location close to NYU, I can guide you through the options. Typical property types range from modern condos in high-rise buildings to classic brownstones in historic districts. I will help you navigate this complex market to find the perfect home that meets both your child's needs and your investment goals.":
        "The NYC real estate market is vast and varied, with neighborhoods offering different lifestyles and investment potentials. Whether you're looking for a quiet residential area near Columbia University or a vibrant, bustling location close to NYU, I can guide you through the options. Typical property types range from modern condos in high-rise buildings to classic brownstones in historic districts. I will help you navigate this complex market to find the perfect home that meets both your child's needs and your investment goals.",
      "Personalized Guidance Through the Buying Process":
        "Personalized Guidance Through the Buying Process",
      "When you visit New York City, I will arrange a series of property tours over 2-5 days, carefully planned around your schedule. During these tours, I will provide detailed insights into each property, highlighting both the benefits and any potential drawbacks. My priority is to ensure you have all the information you need to make an informed decision.":
        "When you visit New York City, I will arrange a series of property tours over 2-5 days, carefully planned around your schedule. During these tours, I will provide detailed insights into each property, highlighting both the benefits and any potential drawbacks. My priority is to ensure you have all the information you need to make an informed decision.",
      "Financial Analysis and Investment Potential":
        "Financial Analysis and Investment Potential",
      "Investing in real estate is not just about finding a home; it's about securing a valuable asset for the future. I will conduct a thorough financial analysis of each property you are interested in, assessing factors such as potential rental income, appreciation forecasts, and overall return on investment (ROI). This analysis will help you understand which properties offer the best financial benefits.":
        "Investing in real estate is not just about finding a home; it's about securing a valuable asset for the future. I will conduct a thorough financial analysis of each property you are interested in, assessing factors such as potential rental income, appreciation forecasts, and overall return on investment (ROI). This analysis will help you understand which properties offer the best financial benefits.",
      "Offer Submission and Negotiation": "Offer Submission and Negotiation",
      "Once you've chosen the ideal property, I will guide you in making a competitive offer. My extensive knowledge of the NYC market allows me to advise you on what price to offer based on current market conditions and the property's true value. My goal is to help you secure the property at the best possible price.":
        "Once you've chosen the ideal property, I will guide you in making a competitive offer. My extensive knowledge of the NYC market allows me to advise you on what price to offer based on current market conditions and the property's true value. My goal is to help you secure the property at the best possible price.",
      "Seamless Closing Process": "Seamless Closing Process",
      "Closing on a property in NYC involves multiple steps, from finalizing contracts to ensuring all legal and financial obligations are met. I will coordinate closely with your legal and financial advisors to handle every detail. If you need to return to China before the transaction is complete, don't worry. I have experience managing remote closings and will ensure everything is taken care of on your behalf. Whether it's signing documents or coordinating with local authorities, I will act as your trusted representative in New York.":
        "Closing on a property in NYC involves multiple steps, from finalizing contracts to ensuring all legal and financial obligations are met. I will coordinate closely with your legal and financial advisors to handle every detail. If you need to return to China before the transaction is complete, don't worry. I have experience managing remote closings and will ensure everything is taken care of on your behalf. Whether it's signing documents or coordinating with local authorities, I will act as your trusted representative in New York.",
      Name: "Name",
      Email: "Email",
      Phone: "Phone",
      Message: "Message",
      Send: "Send",
      WECHAT: "WECHAT",
    },
  },
  cn: {
    translation: {
      "RICHARD GUANG": "管赐盛",
      About: "关于管赐盛",
      Listing: "房源列表",
      "Foreign Investor Guide": "外国投资者指南",
      "Neighborhood Guide": "社区指南",
      Contact: "联系我",
      "REAL ESTATE": "地产",
      ABOUT: "关于",
      "Richard Guang is a graduate of the MIT Sloan School of Management where he studied Finance and Statistics. He has a fierce work ethic, tenacious drive to succeed, and an ability to establish rapport with all people. Born and raised in New York City, Richard's expertise and vast knowledge of the city ensures the highest caliber of service to his clients, whether it be buying, selling, investing, or renting a property.":
        "管赐盛毕业于麻省理工学院斯隆管理学院，主修金融和统计学。他有强烈的职业道德、坚韧不拔的成功欲望，并且善于与所有人建立融洽的关系。管赐盛在纽约市出生和长大，他的专业知识和对这座城市的广泛了解确保他能为客户提供最高水准的服务，无论是购买、出售、投资还是租赁房产。",
      "He has previously worked at JP Morgan Private Bank, various asset management firms in New York, and is currently a member of the Real Estate Board of New York. He has also been helping his family manage various properties throughout the city from a young age. A lifelong athlete and competitor, Richard enjoys running, calisthenics, and biking.":
        "他曾在摩根大通私人银行、纽约多家资产管理公司工作，目前是纽约房地产委员会成员。他还从小就帮助家人管理遍布全市的各种房产。理查德一生都是运动员和竞争者，喜欢跑步、有氧运动和骑自行车。",
      "Richard's ability to adapt quickly and to challenge the status quo makes him a dynamic player who can find the solution to any problem. He is passionate about luxury real estate and loves leading individuals, families, and investors to achieve their real estate aspirations.":
        "管赐盛的快速适应能力和挑战现状的能力使他成为一名充满活力的玩家，能够找到解决任何问题的方法。他对豪华房地产充满热情，并热衷于带领个人、家庭和投资者实现他们的房地产梦想。",
      "NEIGHBORHOOD GUIDE": "街区指南",
      "Upper East Side": "上东区",
      "The Upper East Side (UES) is known for its historic architecture, luxurious residences, and cultural landmarks. Stretching from Central Park to the East River, it’s one of the wealthiest neighborhoods in NYC, with a mix of upscale townhouses, pre-war buildings, and modern high-rises.":
        "上东区 (UES) 以其历史建筑、豪华住宅和文化地标而闻名。它从中央公园延伸到东河，是纽约市最富裕的街区之一，拥有高档联排别墅、战前建筑和现代高层建筑。",
      "The UES is home to the Museum Mile, which includes renowned institutions like the Metropolitan Museum of Art, Guggenheim, and Frick Collection. The area exudes a more traditional and sophisticated atmosphere compared to downtown.":
        "上东区是博物馆大道的所在地，其中包括大都会艺术博物馆、古根海姆博物馆和弗里克收藏馆等知名机构。与市中心相比，该地区散发着更传统和精致的氛围。",
      "Life on the UES is refined and quiet, with high-end boutiques, designer stores on Madison Avenue, and Michelin-starred restaurants. The neighborhood attracts families and professionals looking for a mix of luxury and convenience.":
        "上东区的生活精致而安静，麦迪逊大道上有高端精品店、设计师商店和米其林星级餐厅。该社区吸引了寻求奢华与便利相结合的家庭和专业人士。",
      "The 4, 5, 6 subway lines run along Lexington Avenue, with the newer Q line running down Second Avenue. Several bus lines and easy access to Central Park make getting around convenient.":
        "4、5、6号地铁线沿莱克星顿大道行驶，较新的Q线沿第二大道行驶。多条公交线路和前往中央公园的便捷交通使出行十分便捷。",
      "Upper West Side": "上西区",
      "The Upper West Side (UWS) is a family-friendly neighborhood nestled between Central Park and the Hudson River. It boasts wide, tree-lined streets, beautiful pre-war buildings, and a quieter, residential feel compared to other parts of Manhattan.":
        "上西区 (UWS) 是一个适合家庭居住的社区，坐落在中央公园和哈德逊河之间。这里拥有宽阔的绿树成荫的街道、美丽的战前建筑，与曼哈顿其他地区相比，这里给人一种更安静的居住氛围。",
      "The UWS is home to Lincoln Center, which houses the Metropolitan Opera, New York City Ballet, and the New York Philharmonic. It’s also home to the American Museum of Natural History and Beacon Theatre.":
        "西悉尼大学是林肯中心的所在地，这里是大都会歌剧院、纽约市芭蕾舞团和纽约爱乐乐团的所在地。这里也是美国自然历史博物馆和灯塔剧院的所在地。",
      "This area is laid-back, with plenty of green spaces (including Riverside Park and Central Park), cozy cafes, and casual dining. The UWS is ideal for families and academics, with a relaxed yet refined lifestyle.":
        "该地区环境悠闲，拥有大量绿地（包括河滨公园和中央公园）、舒适的咖啡馆和休闲餐厅。西苏格兰大学是家庭和学者的理想之地，拥有轻松而精致的生活方式。",
      "The 1, 2, 3 subway lines run along Broadway, while the B and C lines serve the western edge near Central Park West. It’s easy to get to other parts of the city from here.":
        "1、2、3号地铁线沿百老汇大街行驶，B和C线则服务于中央公园西附近的西边。从这里可以轻松到达城市的其他地方。",
      Midtown: "市中心",
      "Midtown Manhattan is the bustling commercial heart of NYC, known for landmarks like Times Square, the Empire State Building, and Rockefeller Center. It’s the city’s primary business district with towering skyscrapers and world-class hotels.":
        "曼哈顿中城是纽约市繁华的商业中心，以时代广场、帝国大厦和洛克菲勒中心等地标而闻名。它是纽约市的主要商业区，拥有高耸的摩天大楼和世界一流的酒店。",
      "Midtown is home to Broadway, where you’ll find some of the most famous theaters in the world. It’s also close to iconic museums like MoMA (Museum of Modern Art).":
        "中城是百老汇的所在地，这里有一些世界上最著名的剧院。这里也靠近 MoMA（现代艺术博物馆）等标志性博物馆。",
      "Life in Midtown is fast-paced, with tourists and professionals bustling through its streets. It’s perfect for those who love the energy of the city, with easy access to restaurants, bars, shopping, and major attractions.":
        "中城的生活节奏很快，街道上熙熙攘攘，游客和专业人士络绎不绝。这里非常适合热爱城市活力的人士，可轻松前往餐厅、酒吧、购物中心和主要景点。",
      "Midtown is a major transportation hub. Grand Central Station and Penn Station connect you to the entire city and beyond, with multiple subway lines converging here, including the N, Q, R, W, B, D, F, M, 1, 2, 3, A, C, E lines.":
        "中城是主要的交通枢纽。中央车站和宾夕法尼亚车站将带您前往整个城市及周边地区，多条地铁线路在此汇聚，包括 N、Q、R、W、B、D、F、M、1、2、3、A、C、E 线。",
      Chelsea: "切尔西",
      "Chelsea is a vibrant, trendy neighborhood known for its art galleries, the High Line Park, and Chelsea Market. It's home to a creative community, with a mix of old warehouses, luxury condos, and brownstones.":
        "切尔西是一个充满活力的时尚街区，以艺术画廊、高线公园和切尔西市场而闻名。这里是一个创意社区，有旧仓库、豪华公寓和褐砂石建筑。",
      "The neighborhood is a hub for contemporary art, with numerous galleries located in converted warehouses, particularly around 20th to 29th Streets. It also has a strong LGBTQ+ presence and nightlife.":
        "该街区是当代艺术的中心，众多画廊都位于改建的仓库中，尤其是在第 20 街至第 29 街附近。该街区还拥有强大的 LGBTQ+ 文化和夜生活。",
      "Chelsea offers a dynamic mix of creative, upscale living. The High Line brings a unique outdoor space, and Chelsea Piers offers recreational activities. There are plenty of cafes, restaurants, and boutique shopping options.":
        "切尔西提供充满活力的创意高档生活。高线公园带来独特的户外空间，切尔西码头提供休闲活动。这里有许多咖啡馆、餐厅和精品购物场所。",
      "The C, E lines serve Eighth Avenue, while the 1 line runs along Seventh Avenue, making it easy to commute to different parts of Manhattan.":
        "C、E线服务第八大道，1线沿第七大道行驶，方便通勤至曼哈顿不同地区。",
      "Greenwhich Village": "格林威治村",
      "Greenwich Village is one of NYC’s most historic and iconic neighborhoods, famous for its bohemian vibe, tree-lined streets, and charming townhouses. It has long been a center for artists, writers, and musicians.":
        "格林威治村是纽约市最具历史意义和标志性的街区之一，以波西米亚风情、绿树成荫的街道和迷人的联排别墅而闻名。长期以来，这里一直是艺术家、作家和音乐家的中心。",
      "The neighborhood has a rich cultural history, once home to the beat generation and later a hub for the LGBTQ+ movement. It’s also the location of Washington Square Park and NYU.":
        "该社区有着丰富的文化历史，曾是垮掉的一代的家园，后来成为 LGBTQ+ 运动的中心。华盛顿广场公园和纽约大学也位于此地。",
      "Greenwich Village offers a laid-back, artistic lifestyle with an emphasis on local cafes, bookstores, music venues, and boutique shops. It has a close-knit, community feel.":
        "格林威治村提供悠闲、充满艺术气息的生活方式，以当地咖啡馆、书店、音乐场所和精品店为主。它具有紧密联系的社区氛围。",
      "The A, C, E, B, D, F, M lines, as well as the 1, 2, 3 lines, serve Greenwich Village, offering easy access to other parts of Manhattan and beyond.":
        "A、C、E、B、D、F、M 线以及 1、2、3 线服务格林威治村，方便前往曼哈顿其他地区及其他地区。",
      "Financial District (FiDi)": "金融区 (FiDi)",
      "The Financial District (FiDi) is home to Wall Street and the New York Stock Exchange, making it a hub for business and finance. In recent years, it has also become a desirable residential neighborhood, with many luxury condos rising.":
        "金融区 (FiDi) 是华尔街和纽约证券交易所的所在地，是商业和金融中心。近年来，它也成为一个令人向往的住宅区，许多豪华公寓拔地而起。",
      "FiDi’s history as a financial hub is visible in landmarks like the New York Stock Exchange, Federal Hall, and One World Trade Center. The area is rich in history, blending the old with the new.":
        "纽约证券交易所、联邦大厅和世界贸易中心一号楼等地标建筑见证了 FiDi 作为金融中心的历史。该地区历史悠久，新旧交融。",
      "Living in FiDi offers a mix of high-powered, fast-paced weekdays and quieter weekends. It’s known for luxury high-rises, dining options, and proximity to Battery Park and the waterfront.":
        "住在 FiDi 可以体验到工作日的忙碌和快节奏，周末的宁静。这里以豪华高层建筑、餐饮选择多多以及靠近巴特里公园和海滨而闻名。",
      "FiDi is extremely well-connected with numerous subway lines converging here, including the 2, 3, 4, 5, A, C, J, Z, R lines. The nearby PATH train also connects to New Jersey.":
        "FiDi 交通十分便利，多条地铁线路在此汇聚，包括 2、3、4、5、A、C、J、Z、R 线。附近的 PATH 火车也连接新泽西州。",
      Tribeca: "翠贝卡",
      "Tribeca, short for Triangle Below Canal Street, is one of Manhattan’s most exclusive and expensive neighborhoods, known for its luxury lofts and cobblestone streets. Originally an industrial area, it has transformed into a hotspot for wealthy professionals, celebrities, and families.":
        "翠贝卡是运河街下三角区的简称，是曼哈顿最独特、最昂贵的街区之一，以豪华阁楼和鹅卵石街道而闻名。翠贝卡最初是一个工业区，现已成为富有的专业人士、名人和家庭的热门聚集地。",
      "Tribeca is home to the Tribeca Film Festival and is known for its thriving arts scene and top-tier restaurants. Its galleries, cultural events, and festivals give it a dynamic and creative edge.":
        "翠贝卡是翠贝卡电影节的举办地，以其蓬勃发展的艺术氛围和顶级餐厅而闻名。这里的画廊、文化活动和节日为这里增添了活力和创意。",
      "Tribeca offers a blend of quiet, upscale living with proximity to lower Manhattan’s business districts. It's a favorite among families looking for spacious, converted lofts and townhouses, while also attracting celebrities for its privacy.":
        "翠贝卡区集安静、高档生活和靠近曼哈顿下城商业区于一体。这里是那些寻找宽敞的改建阁楼和联排别墅的家庭的最爱，同时也因其私密性而吸引了众多名人。",
      "The 1, 2, 3, A, C, E subway lines make Tribeca easily accessible to other parts of Manhattan, while its location near the Hudson River offers scenic walking paths.":
        "1、2、3、A、C、E 地铁线路让翠贝卡区可以方便地前往曼哈顿的其他地区，而其靠近哈德逊河的位置则提供风景优美的步行道。",
      SoHo: "苏荷区",
      "SoHo (South of Houston Street) is famous for its cast-iron buildings and upscale boutiques. Once a hub for artists, it’s now known for luxury lofts, high-end shopping, and art galleries.":
        "苏荷区（休斯顿街以南）以其铸铁建筑和高档精品店而闻名。这里曾是艺术家聚集地，现在以豪华阁楼、高端购物和艺术画廊而闻名。",
      "SoHo’s artistic roots are still visible through its galleries, museums, and unique shops. The neighborhood is also a major fashion destination, with designer boutiques and flagship stores along its iconic cobblestone streets.":
        "苏荷区的艺术根源仍可通过这里的画廊、博物馆和独特的商店看到。该街区也是主要的时尚胜地，标志性的鹅卵石街道上遍布设计师精品店和旗舰店。",
      "Living in SoHo means being surrounded by creativity and luxury. Residents enjoy chic loft living, with quick access to high-end dining, shopping, and art. It’s popular with fashion enthusiasts, artists, and affluent professionals.":
        "住在 SoHo 意味着被创意和奢华包围。居民享受别致的阁楼生活，可快速前往高档餐厅、购物中心和艺术场所。这里深受时尚爱好者、艺术家和富裕专业人士的欢迎。",
      "SoHo is well-served by the C, E, R, W, N, 6 subway lines, offering easy access to Midtown, the Financial District, and Brooklyn.":
        "苏荷区交通便利，拥有 C、E、R、W、N 6 条地铁线路，可轻松前往中城、金融区和布鲁克林。",
      "East Village": "东村",
      "The East Village has a storied history as a hub for counterculture, art, and music. It’s known for its vibrant nightlife, eclectic dining scene, and artistic community, offering a more bohemian vibe compared to its neighboring areas.":
        "东村有着悠久的历史，是反主流文化、艺术和音乐的中心。它以充满活力的夜生活、不拘一格的餐饮场所和艺术社区而闻名，与周边地区相比，这里的氛围更加波西米亚风情。",
      "The East Village was once the epicenter of the punk rock movement and continues to be a cultural hotspot with music venues, art galleries, and independent theaters. The area has a rich immigrant history, particularly from Eastern European and Latin American communities.":
        "东村曾是朋克摇滚运动的中心，如今仍然是一个文化热点，拥有音乐场所、艺术画廊和独立剧院。该地区有着丰富的移民历史，尤其是来自东欧和拉丁美洲社区的移民。",
      "The East Village offers a lively, youthful atmosphere, with countless bars, restaurants, and coffee shops. The neighborhood appeals to creatives, students, and young professionals who enjoy its laid-back and quirky character.":
        "东村拥有充满活力的年轻氛围，拥有无数的酒吧、餐厅和咖啡馆。这个街区吸引了创意人士、学生和年轻的专业人​​士，他们喜欢这里悠闲而又古怪的氛围。",
      "The L, 6, N, R subway lines connect the East Village to other parts of Manhattan and Brooklyn, while numerous bus routes make transportation easy.":
        "L、6、N、R地铁线路将东村与曼哈顿和布鲁克林的其他地区连接起来，而众多的公交线路也使交通变得便捷。",
      "Lower East Side": "下东区",
      "The Lower East Side (LES) is one of Manhattan’s trendiest neighborhoods, with a mix of new developments and historic tenement buildings. Known for its immigrant roots, the LES has transformed into a hotspot for nightlife and dining.":
        "下东区 (LES) 是曼哈顿最时尚的街区之一，既有新开发项目，也有历史悠久的公寓楼。下东区以其移民根源而闻名，现已成为夜生活和餐饮的热门场所。",
      "LES is famous for its immigrant history, particularly Jewish, Italian, and Chinese communities. It’s also home to some of the city’s best nightlife, with bars, live music venues, and art galleries.":
        "下东区以其移民历史而闻名，尤其是犹太人、意大利人和中国人聚居区。这里也是这座城市最好的夜生活场所，有酒吧、现场音乐表演场所和艺术画廊。",
      "Residents of the LES enjoy a mix of old and new, with luxury condos rising alongside older, more affordable buildings. The nightlife scene is one of the most active in the city, and the food scene features everything from street food to Michelin-starred restaurants.":
        "下城区的居民可以享受到新旧混合的氛围，豪华公寓与价格更便宜的老建筑并排而立。这里的夜生活是这座城市最活跃的场所之一，美食场所应有尽有，从街头小吃到米其林星级餐厅，应有尽有。",
      "The F, M, J, Z subway lines make it easy to travel from LES to other parts of the city.":
        "F、M、J、Z 地铁线路让您可以轻松从 LES 前往城市的其他地方。",
      "Flatiron District": "熨斗区",
      "The Flatiron District is named after the iconic Flatiron Building and is known for its combination of historic architecture and modern amenities. It’s a central Manhattan neighborhood that offers a mix of commercial and residential living.":
        "熨斗区以标志性的熨斗大厦命名，以其历史建筑和现代设施的结合而闻名。它是曼哈顿中心的一个街区，提供商业和住宅混合生活。",
      "Flatiron is home to the Museum of Sex, a hub for foodies with the Eataly food hall, and nearby Madison Square Park. The area’s rich history and central location make it a cultural and business hub.":
        "熨斗区是性博物馆所在地，也是美食爱好者的聚集地，拥有 Eataly 美食大厅，附近还有麦迪逊广场公园。该地区历史悠久，地理位置优越，是文化和商业中心。",
      "Living in the Flatiron District offers a vibrant, cosmopolitan lifestyle with upscale dining, shopping, and easy access to the rest of the city. It’s ideal for professionals and young families who want the convenience of Midtown but with more character.":
        "住在熨斗区可以享受充满活力的国际化生活方式，这里有高档餐​​厅、购物中心，而且交通便利，可轻松前往城市的其他地区。这里是专业人士和年轻家庭的理想选择，他们既想享受中城的便利，又想拥有更多特色。",
      "Flatiron is well-connected by the N, R, W, 6 subway lines, making it a great central hub for commuting.":
        "Flatiron 与 N、R、W、6 号地铁线路交通便利，是通勤的重要枢纽。",
      Overview: "概述",
      Culture: "文化",
      Lifestyle: "生活方式",
      Transportation: "交通",
      "Your Trusted Partner in Finding your Dream Home":
        "您的可信赖伙伴，助您找到梦想之家",
      "Expert knowledge of NYC neighborhoods": "精通纽约市各个社区的专业知识",
      "Personalized service for both local and international clients":
        "为本地和国际客户提供个性化服务",
      "Specializing in luxury properties and investment opportunities":
        "专注于豪华房产和投资机会",
      "With years of experience in the New York City real estate market, I specialize in helping clients find their perfect property, whether it's for investment or a place to call home.":
        "凭借多年纽约市房地产市场的经验，我专注于帮助客户找到他们理想的房产，无论是投资还是作为家园",
      "Welcome to Richard's real estate guide for foreign investors! As a seasoned NYC real estate broker, I've had the privilege of assisting many Chinese families in securing the perfect home for their children studying in the United States. With experience helping parents whose children attend prestigious universities like NYU, Columbia, Princeton, Harvard, and MIT, I understand the unique needs and concerns you may have as you embark on this important journey.":
        "欢迎来到管赐盛的外国投资者房地产指南！作为一位经验丰富的纽约市房地产经纪人，我很荣幸帮助过许多中国家庭为他们在美国留学的子女找到理想的家园。我有丰富的经验，曾帮助孩子就读于纽约大学、哥伦比亚大学、普林斯顿大学、哈佛大学和麻省理工学院等顶尖学府的父母。我理解您在这段重要旅程中可能面临的独特需求和顾虑。",
      "Why Invest in NYC Real Estate?": "为什么投资纽约市房地产？",
      "New York City offers a unique opportunity for real estate investment, combining stability, high appreciation potential, and proximity to some of the world's best universities. For parents, owning a property here not only provides a safe and convenient home for your child but also represents a smart financial investment. The NYC market is known for its resilience and long-term value, making it an ideal choice for international buyers.":
        "纽约市提供了独特的房地产投资机会，兼具稳定性、高增值潜力以及毗邻世界顶尖大学的优势。对于家长来说，在这里拥有一处房产不仅为您的孩子提供了安全、便利的住所，同时也是一项明智的财务投资。纽约市的房地产市场以其韧性和长期价值著称，是国际买家的理想选择。",
      "Understanding the NYC Real Estate Market": "了解纽约市房地产市场",
      "The NYC real estate market is vast and varied, with neighborhoods offering different lifestyles and investment potentials. Whether you're looking for a quiet residential area near Columbia University or a vibrant, bustling location close to NYU, I can guide you through the options. Typical property types range from modern condos in high-rise buildings to classic brownstones in historic districts. I will help you navigate this complex market to find the perfect home that meets both your child's needs and your investment goals.":
        "纽约市房地产市场广阔而多样，不同的社区提供不同的生活方式和投资潜力。无论您是寻找哥伦比亚大学附近安静的住宅区，还是纽约大学周边充满活力的繁华地段，我都可以为您提供指导。典型的房产类型从高层建筑中的现代公寓到历史街区中的经典棕石建筑应有尽有。我将帮助您驾驭这个复杂的市场，找到既能满足您孩子需求又符合您投资目标的理想之家。",
      "Personalized Guidance Through the Buying Process":
        "购房过程中的个性化指导",
      "When you visit New York City, I will arrange a series of property tours over 2-5 days, carefully planned around your schedule. During these tours, I will provide detailed insights into each property, highlighting both the benefits and any potential drawbacks. My priority is to ensure you have all the information you need to make an informed decision.":
        "当您来到纽约市时，我将根据您的时间安排为期2到5天的房产参观行程。在这些参观过程中，我会为您详细介绍每一处房产，强调其优势和可能存在的潜在缺点。我的首要任务是确保您拥有所有必要的信息，以便做出明智的决策。",
      "Financial Analysis and Investment Potential": "财务分析与投资潜力",
      "Investing in real estate is not just about finding a home; it's about securing a valuable asset for the future. I will conduct a thorough financial analysis of each property you are interested in, assessing factors such as potential rental income, appreciation forecasts, and overall return on investment (ROI). This analysis will help you understand which properties offer the best financial benefits.":
        "投资房地产不仅仅是找到一个住所；更是为未来获取一项有价值的资产。我将对您感兴趣的每一处房产进行全面的财务分析，评估诸如潜在租金收入、升值预期以及整体投资回报率（ROI）等因素。通过这项分析，您将更清楚地了解哪些房产能够带来最佳的财务收益。",
      "Offer Submission and Negotiation": "提交报价与谈判",
      "Once you've chosen the ideal property, I will guide you in making a competitive offer. My extensive knowledge of the NYC market allows me to advise you on what price to offer based on current market conditions and the property's true value. My goal is to help you secure the property at the best possible price.":
        "一旦您选定了理想的房产，我将指导您提交具有竞争力的报价。凭借我对纽约市市场的深刻了解，我会根据当前的市场状况和房产的真实价值，为您提供合理的出价建议。我的目标是帮助您以最优的价格成功购得房产。",
      "Seamless Closing Process": "无缝的成交过程",
      "Closing on a property in NYC involves multiple steps, from finalizing contracts to ensuring all legal and financial obligations are met. I will coordinate closely with your legal and financial advisors to handle every detail. If you need to return to China before the transaction is complete, don't worry. I have experience managing remote closings and will ensure everything is taken care of on your behalf. Whether it's signing documents or coordinating with local authorities, I will act as your trusted representative in New York.":
        "在纽约市购房的成交过程涉及多个步骤，从签订合同到确保所有法律和财务义务得到履行。我将与您的法律和财务顾问紧密合作，处理每一个细节。如果您在交易完成前需要返回中国，不必担心。我有管理远程成交的经验，会确保所有事务在您的授权下顺利进行。无论是签署文件还是与当地政府协调，我都会作为您在纽约的可信赖代表，处理好一切事务。",
      Name: "姓名",
      Email: "邮件",
      Phone: "手机",
      Message: "讯息",
      Send: "发送",
      WECHAT: "微信",
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
