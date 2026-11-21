// Curated production seed extracted from Jadeer United database (sanitized — no credentials, sessions, employee PII, or spam).
export const REAL_SITE_CONTENT = {
  "hero_tagline_en": "Drive Your Business Forward",
  "hero_tagline_ar": "انطلق بأعمالك نحو المستقبل",
  "about_headline_en": "Built for, Saudi Business, Driven by Trust",
  "about_headline_ar": "بُني من أجل، الأعمال السعودية، مدفوع بالثقة",
  "about_p1_en": "Founded in 2009, Jadeer United stands as a premier transportation solution provider across Bahrain, Saudi Arabia, and Oman. we specialize in delivering high-quality, sustainable, and innovative transportation services tailored to the needs of both businesses and individual clients. Our management team brings more than 25 years of industry experience, ensuring excellence and reliability in all we do.",
  "about_p1_ar": "تأسست شركة جدير المتحدة عام 2009، وهي شركة رائدة في توفير حلول النقل في البحرين والمملكة العربية السعودية وسلطنة عُمان. نتخصص في تقديم خدمات نقل عالية الجودة ومستدامة ومبتكرة، مصممة خصيصًا لتلبية احتياجات الشركات والأفراد. يتمتع فريقنا الإداري بخبرة تزيد عن 25 عامًا في هذا المجال، مما يضمن التميز والموثوقية في كل ما نقدمه",
  "about_p2_en": "Over the next decade, we evolved to become the leading provider of operational leasing services among businesses in Saudi Arabia, expanding to five branches across the Kingdom, building a fleet of over 3,000 vehicles, and establishing long-term partnerships with more than 100 corporate clients across sectors ranging from construction and logistics to hospitality, government, and beyond.",
  "about_p2_ar": "على مدى العقد التالي، تطورنا لنصبح المزود الرائد لخدمات التأجير التشغيلي بين الشركات في المملكة العربية السعودية، وتوسعنا إلى خمسة فروع في جميع أنحاء المملكة، وقمنا ببناء أسطول يضم أكثر من 3000 مركبة، وأقمنا شراكات طويلة الأجل مع أكثر من 100 عميل من الشركات في قطاعات تتراوح من البناء والخدمات اللوجستية إلى الضيافة والحكومة وما وراء ذلك.",
  "about_quote_en": "We didn't just want to sell cars. We wanted to liberate companies from the burden of ownership - so they could focus entirely on what they do best.",
  "about_quote_ar": "لم نكن نريد بيع السيارات فحسب. أردنا تحرير الشركات من عبء الملكية - حتى تتمكن من التركيز كلياً على ما تجيده.",
  "vision_en": "To be a leader in providing innovative and efficient transportation solutions in Bahrain, Saudi Arabia and Oman, enhancing business success and sustainability for our business partners.",
  "vision_ar": "أن نكون روادًا في توفير حلول نقل مبتكرة وفعالة في البحرين والمملكة العربية السعودية وسلطنة عمان، مما يعزز نجاح الأعمال واستدامتها لشركائنا التجاريين",
  "mission_en": "Empowering businesses with superior transportation solutions, prioritizing quality, reliability, and sustainability.",
  "mission_ar": "تمكين الشركات من خلال حلول نقل فائقة الجودة، مع إعطاء الأولوية للجودة والموثوقية والاستدامة"
} as const;

export const REAL_BRANCHES = [
  {
    "name": "Bahrain — Amwaj HQ",
    "name_ar": "البحرين — المقر الرئيسي أمواج",
    "country": "Bahrain",
    "city": "Amwaj",
    "phone": "+973 6666 6064",
    "is_hq": 1
  },
  {
    "name": "Eastern Region - Khobar",
    "name_ar": "المنطقة الشرقية - الخبر",
    "country": "Saudi Arabia",
    "city": "Khobar",
    "phone": "+966 56 887 7769",
    "is_hq": 1
  },
  {
    "name": "Riyadh",
    "name_ar": "الرياض",
    "country": "Saudi Arabia",
    "city": "Riyadh",
    "phone": "+966 54 316 8080",
    "is_hq": 0
  },
  {
    "name": "Western Region",
    "name_ar": "المنطقة الغربية",
    "country": "Saudi Arabia",
    "city": "Western",
    "phone": "+966 54 316 8080",
    "is_hq": 0
  },
  {
    "name": "Neom Region",
    "name_ar": "نيوم",
    "country": "Saudi Arabia",
    "city": "Neom",
    "phone": "+966 54 316 8080",
    "is_hq": 0
  },
  {
    "name": "Jizan Region",
    "name_ar": "جيزان",
    "country": "Saudi Arabia",
    "city": "Jizan",
    "phone": "+966 54 316 8080",
    "is_hq": 0
  },
  {
    "name": "Eastern Province - Khafji",
    "name_ar": "المنطقة الشرقية - الخفجي",
    "country": "Saudi Arabia",
    "city": "Khafji",
    "phone": "+966 54 316 8080",
    "is_hq": 0
  },
  {
    "name": "Turaif",
    "name_ar": "طريف",
    "country": "Saudi Arabia",
    "city": "Turaif",
    "phone": "+966 54 316 8080",
    "is_hq": 0
  },
  {
    "name": "Oman — Muscat Branch",
    "name_ar": "عُمان — فرع مسقط",
    "country": "Oman",
    "city": "Muscat",
    "phone": "+968 7745 9000",
    "is_hq": 0
  }
] as const;

export const REAL_WORKSHOPS = [
  {
    "name": "Jadeer United Workshop",
    "name_ar": "ورشة جدير المتحدة",
    "branch_name": "Eastern Region - Khobar",
    "city": "Khobar",
    "country": "Saudi Arabia",
    "phone": "+966 57 000 6378",
    "hours": "Sun–Thu · 8:00 AM – 6:00 PM · 24/7 Mobile Crew"
  },
  {
    "name": "Four Lines Workshop",
    "name_ar": "ورشة فور لاينز",
    "branch_name": "Eastern Region - Khobar",
    "city": "Khobar",
    "country": "Saudi Arabia",
    "phone": "+966 54 307 4915",
    "hours": "Sun–Sat · 8:00 AM – 6:00 PM"
  }
] as const;

export const REAL_VEHICLES = [
  {
    "source_id": 5,
    "make": "Toyota",
    "model": "Land Cruiser",
    "year": 2026,
    "category": "SUV",
    "sub_type": "Full-size",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol / Diesel",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 252770,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 1,
    "status": "available",
    "image_url": "/assets/jadeer/land-cruiser-studio.jpg",
    "description": "2026 Toyota Land Cruiser available for corporate operational leasing and direct fleet acquisition across Saudi Arabia, Bahrain, and Oman with full Jadeer United maintenance, 24/7 mobile support, and GCC comprehensive insurance.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "USA-Standard Roll Bar & Internal Roll Cage Ready"
    ],
    "trims": [
      {
        "trim": "GXR-1",
        "price": 258000
      },
      {
        "trim": "GXR-3",
        "price": 304635
      },
      {
        "trim": "GXR-4",
        "price": 316710
      },
      {
        "trim": "VX",
        "price": 381110
      },
      {
        "trim": "VX-R",
        "price": 418025
      }
    ],
    "specs": {
      "engine_capacity": "Petrol 3.5 / Diesel 3.3L",
      "horsepower": "Petrol 403 / Diesel 302 HP",
      "cylinders": "6 Cylinders",
      "fuel_consumption": "10.1 / 13.3 / 12.6 km/L",
      "fuel_capacity": "110L",
      "doors": "5 Doors",
      "speeds": "10-Speed",
      "dimensions": "511 cm L × 194 cm H"
    },
    "colors": [
      "White",
      "Silver",
      "Black",
      "Red",
      "Gray"
    ]
  },
  {
    "source_id": 6,
    "make": "Toyota",
    "model": "Hilux DC",
    "year": 2026,
    "category": "Pick-Up",
    "sub_type": "Rugged",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol / Diesel",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 116030,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/hilux-studio.jpg",
    "description": "The Toyota Hilux 2026 GLX 4X2 is a robust and reliable pickup truck, popular for both urban and off-road driving. Here's a quick overview:\n1.Engine & Performance: It features a 2.7-liter 4-cylinder petrol engine, delivering 164 horsepower and 245 Nm of torque. It has a manual transmission and rear-wheel drive.\n2.Fuel Efficiency: The fuel economy is approximately 11.1 liters per 100 km, with an 80-liter fuel tank capacity.\n3.Safety Features: Equipped with ABS, Brake Assist (BA), Electronic Brakeforce Distribution (EBD), Hill Assist, and Vehicle Stability Control (VSC). It also includes parking sensors and a knee airbag for the driver.\n4.Interior Comfort: The cabin offers fabric seats, manual seat adjustments, a glove box cooling system, and a multi-information display. It also has a manual air conditioning system and audio controls on the steering wheel.\nExterior Features: Includes halogen headlamps, fog lamps, electric door mirrors, and alloy wheels. The truck has a spacious trunk with a capacity of 900 liters.\n5.Dimensions: It measures 5.335 meters in length, 1.815 meters in width, and 1.815 meters in height, with a wheelbase of 3.090 meters.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "USA-Standard Roll Bar & Internal Roll Cage Ready"
    ],
    "trims": [
      {
        "trim": "GLX-1 2.7 4x2 AT",
        "price": 116030
      },
      {
        "trim": "GLX-2 2.7 4x2 MT",
        "price": 118450
      },
      {
        "trim": "SGLX 2.7 4x4 MT",
        "price": 137310
      },
      {
        "trim": "SGLX 2.7 4x4 AT",
        "price": 142715
      },
      {
        "trim": "ADVENTURE 4.0 4x4 AT",
        "price": 174455
      },
      {
        "trim": "GR-S 4.0 4x4 AT",
        "price": 183885
      },
      {
        "trim": "GL 2.4 DSL 4x2 MT",
        "price": 109020
      },
      {
        "trim": "GL2 2.4 DSL 4x4 MT",
        "price": 126845
      },
      {
        "trim": "SGLX 2.4 DSL 4x4 AT",
        "price": 159850
      },
      {
        "trim": "SGLX 2.8 DSL 4x4 AT",
        "price": 169050
      }
    ],
    "specs": {
      "engine_capacity": "Diesel 2.4 / Petrol 2.7L",
      "horsepower": "Petrol 164 / Diesel 147 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "9.9 / 10.1 / 14.1 / 14.9 / 15.9 km/L",
      "fuel_capacity": "80L",
      "doors": "4 Doors",
      "speeds": "5 Manual / 6 Automatic-Speed",
      "dimensions": "532 cm L × 180 cm H"
    },
    "colors": [
      "Super White",
      "Pearl White"
    ]
  },
  {
    "source_id": 7,
    "make": "Toyota",
    "model": "Yaris",
    "year": 2026,
    "category": "Sedan",
    "sub_type": "Compact",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 63825,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/corolla-studio.jpg",
    "description": "The Toyota Yaris Y 2026 is a compact car that blends modern design, advanced technology, and reliable performance. It boasts a sleek exterior, a tech-enhanced interior with features like Apple CarPlay and Android Auto, and advanced safety systems such as adaptive cruise control. With efficient engines, a smooth driving experience, and Toyota's trusted reliability, it offers great value for drivers seeking style, innovation, and practicality.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee"
    ],
    "trims": [
      {
        "trim": "Y",
        "price": 63825
      },
      {
        "trim": "Y Limited",
        "price": 66700
      },
      {
        "trim": "Y Plus",
        "price": 69690
      },
      {
        "trim": "YX",
        "price": 75670
      }
    ],
    "specs": {
      "engine_capacity": "1.3L",
      "horsepower": "97 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "22.4 km/L",
      "fuel_capacity": "40L",
      "doors": "4 Doors",
      "speeds": "10-Speed",
      "dimensions": "442 cm L × 148 cm H"
    },
    "colors": [
      "White",
      "Silver",
      "Red",
      "Black",
      "Gray",
      "Scarlet"
    ]
  },
  {
    "source_id": 8,
    "make": "Toyota",
    "model": "Corolla",
    "year": 2026,
    "category": "Sedan",
    "sub_type": "Compact",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 79350,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/corolla-studio.jpg",
    "description": "The 2026 Toyota Corolla combines modern design, advanced technology, and exceptional reliability. Highlights include a refreshed exterior, a 10.5-inch touchscreen with wireless connectivity, efficient powertrain options (including hybrid models), enhanced safety features with Toyota Safety Sense™ 3.0, and a spacious, comfortable interior. It's a perfect blend of innovation and practicality for every journey.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee"
    ],
    "trims": [
      {
        "trim": "1.5 XLI",
        "price": 79350
      },
      {
        "trim": "1.5 XLI Executive",
        "price": 83030
      },
      {
        "trim": "2.0 XLI",
        "price": 83605
      },
      {
        "trim": "2.0 XLI Executive",
        "price": 87055
      },
      {
        "trim": "2.0 XLE Executive MR",
        "price": 94300
      }
    ],
    "specs": {
      "engine_capacity": "1.5 / 2.0L",
      "horsepower": "1.5L 119 / 2.0L 168 HP",
      "cylinders": "3 Cylinders 1.5L / 4 Cylinders 2.0L Cylinders",
      "fuel_consumption": "19.3 km/L",
      "fuel_capacity": "47L",
      "doors": "4 Doors",
      "speeds": "10-Speed",
      "dimensions": "463 cm L × 143 cm H"
    },
    "colors": [
      "White",
      "Black",
      "Red",
      "Gray"
    ]
  },
  {
    "source_id": 9,
    "make": "Toyota",
    "model": "Camry",
    "year": 2026,
    "category": "Sedan",
    "sub_type": "Mid-size",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 106030,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 1,
    "status": "available",
    "image_url": "/assets/jadeer/camry-studio.jpg",
    "description": "Camry delivers more than just beautiful, enjoyable driving and a safety system via an advanced technology. It resonates with the five senses with an appeal that can't be expressed in numbers, but must be seen, felt and experienced... for a stimulating driving experience",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee"
    ],
    "trims": [
      {
        "trim": "E",
        "price": 106030
      },
      {
        "trim": "LE",
        "price": 117760
      },
      {
        "trim": "Grande",
        "price": 141680
      }
    ],
    "specs": {
      "engine_capacity": "2.5L",
      "horsepower": "201 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "17.2 km/L",
      "fuel_capacity": "60L",
      "doors": "4 Doors",
      "speeds": "8-Speed",
      "dimensions": "492 cm L × 144 cm H"
    },
    "colors": [
      "White",
      "Black",
      "Red",
      "Blue"
    ]
  },
  {
    "source_id": 10,
    "make": "Toyota",
    "model": "Crown",
    "year": 2026,
    "category": "Sedan",
    "sub_type": "Luxury",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 154330,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/sonata-studio.jpg",
    "description": "The 2026 Toyota Crown is a luxurious sedan that blends innovation, elegance, and performance. It features a bold design, advanced hybrid powertrains, and cutting-edge technology. Highlights include:\nThe Crown represents Toyota's legacy of innovation and luxury, offering a refined driving experience. Let me know if you'd like more details!",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee"
    ],
    "trims": [
      {
        "trim": "Prestige",
        "price": 154330
      },
      {
        "trim": "Premium",
        "price": 166290
      },
      {
        "trim": "Majestic",
        "price": 202170
      }
    ],
    "specs": {
      "engine_capacity": "2.5L",
      "horsepower": "218 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "26.1 km/L",
      "fuel_capacity": "60L",
      "doors": "4 Doors",
      "speeds": "6-Speed",
      "dimensions": "498 cm L × 154 cm H"
    },
    "colors": [
      "White",
      "Black",
      "Red",
      "Grey"
    ]
  },
  {
    "source_id": 11,
    "make": "Toyota",
    "model": "Veloz",
    "year": 2026,
    "category": "SUV",
    "sub_type": "Subcompact",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 81995,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/urban-cruiser-studio.jpg",
    "description": "The Toyota Veloz is a stylish and practical seven-seater subcompact crossover SUV. It offers a bold design, advanced technology, and efficient performance, making it ideal for families and young professionals. Key features include:\nThe Veloz combines comfort, technology, and reliability, making it a great choice for urban and highway adventures. Let me know if you'd like more details!",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "USA-Standard Roll Bar & Internal Roll Cage Ready"
    ],
    "trims": [
      {
        "trim": "GLX",
        "price": 82915
      }
    ],
    "specs": {
      "engine_capacity": "1.5L",
      "horsepower": "104 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "18.6 km/L",
      "fuel_capacity": "43L",
      "doors": "5 Doors",
      "speeds": "7-Speed",
      "dimensions": "447 cm L × 170 cm H"
    },
    "colors": [
      "White",
      "Black",
      "Grey",
      "Red"
    ]
  },
  {
    "source_id": 12,
    "make": "Toyota",
    "model": "Raize",
    "year": 2026,
    "category": "SUV",
    "sub_type": "Compact",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 67045,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/urban-cruiser-studio.jpg",
    "description": "The Toyota Raize is a compact SUV offering style, versatility, and efficiency. It comes with two engine options: a 1.0-liter turbocharged engine (97 HP) or a 1.2-liter engine (87 HP), both delivering impressive fuel economy up to 21.7 km/l. Its spacious interior features a nine-inch touchscreen with Apple CarPlay and Android Auto. The sporty exterior design is complemented by advanced safety systems, making it an ideal choice for urban drivers seeking practicality and modern features.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "USA-Standard Roll Bar & Internal Roll Cage Ready"
    ],
    "trims": [
      {
        "trim": "XLE",
        "price": 67045
      },
      {
        "trim": "LIMITED",
        "price": 73715
      }
    ],
    "specs": {
      "engine_capacity": "1.2 / 1.0L",
      "horsepower": "1.2L 87 / 1.0L Turbo 97 HP",
      "cylinders": "3 Cylinders",
      "fuel_consumption": "21.7 km/L",
      "fuel_capacity": "36L",
      "doors": "5 Doors",
      "speeds": "10-Speed",
      "dimensions": "403 cm L × 163 cm H"
    },
    "colors": [
      "Black",
      "Grey",
      "Red",
      "Silver"
    ]
  },
  {
    "source_id": 13,
    "make": "Toyota",
    "model": "Urban Cruiser",
    "year": 2026,
    "category": "SUV",
    "sub_type": "Compact",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 82915,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 1,
    "status": "available",
    "image_url": "/assets/jadeer/urban-cruiser-studio.jpg",
    "description": "The 2026 Toyota Urban Cruiser is a stylish and efficient compact SUV tailored for city driving. It features a 1.5-liter engine with 101 HP, a spacious and comfortable interior with premium materials, modern infotainment options, advanced safety systems, and a dynamic two-tone exterior design. It's the perfect urban companion for navigating city streets with ease and flair.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "USA-Standard Roll Bar & Internal Roll Cage Ready"
    ],
    "trims": [
      {
        "trim": "GL",
        "price": 82915
      },
      {
        "trim": "GLX",
        "price": 92115
      }
    ],
    "specs": {
      "engine_capacity": "1.5L",
      "horsepower": "101 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "19.8 km/L",
      "fuel_capacity": "45L",
      "doors": "5 Doors",
      "speeds": "6-Speed",
      "dimensions": "436 cm L × 164 cm H"
    },
    "colors": [
      "Red",
      "Silver",
      "White",
      "Blue",
      "Black",
      "Grey",
      "Brown"
    ]
  },
  {
    "source_id": 14,
    "make": "Toyota",
    "model": "Corolla Cross Hybrid",
    "year": 2026,
    "category": "Hybrid",
    "sub_type": "Cross-Over",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Hybrid",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 103845,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/corolla-cross-hybrid.jpg",
    "description": "The Toyota Corolla Cross HEV is an eco-friendly and versatile compact SUV with a 1.8-liter hybrid engine delivering 122 HP. It boasts excellent fuel efficiency at 4.5 L/100 km, a spacious and modern interior with flexible seating, advanced safety features, and a sleek exterior design. Perfect for drivers seeking comfort, style, and sustainability.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "Vision 2030 Low-Emission Self-Charging Hybrid Fleet Spec"
    ],
    "trims": [
      {
        "trim": "LE HEV",
        "price": 103845
      },
      {
        "trim": "XLE HEV",
        "price": 113505
      },
      {
        "trim": "LIMITED HEV",
        "price": 129260
      },
      {
        "trim": "LIMITED PLUS",
        "price": 130410
      }
    ],
    "specs": {
      "engine_capacity": "1.8L",
      "horsepower": "121 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "25.8 km/L",
      "fuel_capacity": "36L",
      "doors": "5 Doors",
      "speeds": "10-Speed",
      "dimensions": "446 cm L × 162 cm H"
    },
    "colors": [
      "White",
      "Silver",
      "Gray",
      "Black",
      "Red"
    ]
  },
  {
    "source_id": 15,
    "make": "Toyota",
    "model": "RAV4",
    "year": 2026,
    "category": "SUV",
    "sub_type": "Compact",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 102350,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/rav4-studio.jpg",
    "description": "The 2026 Toyota RAV4 is a versatile and efficient compact SUV, exclusively featuring hybrid powertrains. It offers a 2.5-liter hybrid engine with up to 219 HP, excellent fuel economy, a spacious interior with advanced connectivity options like wireless Apple CarPlay and Android Auto, and cutting-edge safety features with Toyota Safety Sense 2.5. Its stylish design and practicality make it an excellent choice for families and urban drivers alike.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "USA-Standard Roll Bar & Internal Roll Cage Ready"
    ],
    "trims": [
      {
        "trim": "LE",
        "price": 102350
      },
      {
        "trim": "LE 4x4",
        "price": 108330
      },
      {
        "trim": "XLE 4x4",
        "price": 125003
      }
    ],
    "specs": {
      "engine_capacity": "2L",
      "horsepower": "170 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "16.8 km/L",
      "fuel_capacity": "55L",
      "doors": "5 Doors",
      "speeds": "8-Speed",
      "dimensions": "460 cm L × 170 cm H"
    },
    "colors": [
      "Black",
      "Blue",
      "Silver",
      "Red",
      "Gray",
      "White"
    ]
  },
  {
    "source_id": 16,
    "make": "Toyota",
    "model": "Fortuner",
    "year": 2026,
    "category": "SUV",
    "sub_type": "Mid-size",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol / Diesel",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 123855,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/fortuner-studio.jpg",
    "description": "The 2026 Toyota Fortuner is a versatile and reliable mid-sized SUV designed for both urban and off-road adventures. It offers powerful engine options, including a 2.7-liter 4-cylinder engine with 164 HP and a 4.0-liter V6 engine with 235 HP. The Fortuner features a spacious interior with seating for up to seven, advanced safety systems like Vehicle Stability Control and Hill-Start Assist, and a bold exterior design with LED lighting and alloy wheels. Perfect for families and adventurers alike, the Fortuner combines comfort, performance, and durability.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "USA-Standard Roll Bar & Internal Roll Cage Ready"
    ],
    "trims": [
      {
        "trim": "GX-2",
        "price": 123855
      },
      {
        "trim": "GX-2 4x4",
        "price": 134665
      },
      {
        "trim": "GX-2 4x4 Dsl",
        "price": 147685
      },
      {
        "trim": "VX-1",
        "price": 158010
      },
      {
        "trim": "VX3-S",
        "price": 182159
      }
    ],
    "specs": {
      "engine_capacity": "Petrol 2.7 / Petrol 4.0 / Diesel 2.4L",
      "horsepower": "Petrol 164 / Petrol 4.0 / Diesel 147 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "Petrol 10.3 / Petrol 4.0 9.6 / Diesel 14.2 km/L",
      "fuel_capacity": "80L",
      "doors": "5 Doors",
      "speeds": "6-Speed",
      "dimensions": "479 cm L × 183 cm H"
    },
    "colors": [
      "Black",
      "Silver",
      "White",
      "Gray"
    ]
  },
  {
    "source_id": 17,
    "make": "Toyota",
    "model": "Land Cruiser Prado",
    "year": 2026,
    "category": "SUV",
    "sub_type": "Mid-size",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol / Diesel",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 193775,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/prado-studio.jpg",
    "description": "The 2026 Toyota Prado is a robust and versatile SUV designed for both urban and off-road adventures. It offers powerful engine options, including a 2.4-liter turbocharged gasoline engine with 267 HP and a 2.8-liter turbo diesel engine with 201 HP. The Prado features advanced off-road capabilities like Crawl Control and selectable driving modes, a spacious interior with a 12.3-inch touchscreen, and cutting-edge safety systems such as collision detection and dynamic stability control. Built on the GA-F platform, it combines strength, stability, and modern technology for an exceptional driving experience",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "USA-Standard Roll Bar & Internal Roll Cage Ready"
    ],
    "trims": [
      {
        "trim": "TX-2",
        "price": 193775
      },
      {
        "trim": "TXL-1",
        "price": 208150
      },
      {
        "trim": "TXL-3",
        "price": 232300
      },
      {
        "trim": "ADV-2",
        "price": 273815
      },
      {
        "trim": "ADV-2 2T",
        "price": 273815
      },
      {
        "trim": "VXL-3",
        "price": 288305
      },
      {
        "trim": "TX-2 DSL",
        "price": 201251
      },
      {
        "trim": "TXL-2 DSL",
        "price": 224250
      },
      {
        "trim": "ADV-1 DSL",
        "price": 249550
      }
    ],
    "specs": {
      "engine_capacity": "2.4 / 2.8L",
      "horsepower": "267 / 201 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "10.6 / 14.1 km/L",
      "fuel_capacity": "110L",
      "doors": "5 Doors",
      "speeds": "8-Speed",
      "dimensions": "499 cm L × 198 cm H"
    },
    "colors": [
      "Black",
      "White",
      "Gray",
      "Blue"
    ]
  },
  {
    "source_id": 18,
    "make": "Toyota",
    "model": "Hiace Bus",
    "year": 2026,
    "category": "Bus",
    "sub_type": "Light-Commercial",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol / Diesel",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 148925,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/hiace-studio.jpg",
    "description": "The Toyota HiAce 2026 is a versatile and reliable vehicle designed to meet the needs of businesses, families, and transport services. It offers powerful performance with engine options like a 3.5L V6 petrol engine and a 2.8L turbo-diesel engine, ensuring smooth acceleration and efficiency. The spacious interior provides flexible seating configurations, smart storage solutions, and enhanced comfort for passengers and drivers. Advanced safety features, including adaptive cruise control and lane departure warning, make it a secure choice. The HiAce 2025 continues to be a trusted option for heavy-duty needs, combining practicality, durability, and modern technology.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee"
    ],
    "trims": [
      {
        "trim": "Gasoline MT",
        "price": 148925
      },
      {
        "trim": "DSL MT",
        "price": 158355
      },
      {
        "trim": "DSL AT",
        "price": 163185
      }
    ],
    "specs": {
      "engine_capacity": "3.5L",
      "horsepower": "277 HP",
      "cylinders": "6 Cylinders",
      "fuel_consumption": "1.3 km/L",
      "fuel_capacity": "70L",
      "doors": "5 Doors",
      "speeds": "6-Speed",
      "dimensions": "5915 cm L × 2280 cm H"
    },
    "colors": [
      "White"
    ]
  },
  {
    "source_id": 19,
    "make": "Toyota",
    "model": "HiAce Van",
    "year": 2026,
    "category": "Bus",
    "sub_type": "Light-Commercial",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol / Diesel",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 117068,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/hiace-studio.jpg",
    "description": "The Toyota HiAce van with a low roof is designed for practicality and efficiency, making it ideal for urban environments and businesses. It offers a compact profile that allows for easier maneuverability in tight spaces while still providing ample cargo capacity. The low roof design is particularly beneficial for parking in areas with height restrictions, such as garages or multi-level parking lots.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee"
    ],
    "trims": [
      {
        "trim": "STD GAS MT",
        "price": 117068
      },
      {
        "trim": "STD DSL MT",
        "price": 125925
      },
      {
        "trim": "Highroof Gas MT",
        "price": 131675
      },
      {
        "trim": "STD DSL AT",
        "price": 132825
      },
      {
        "trim": "Highroof DSL MT",
        "price": 142025
      },
      {
        "trim": "Highroof DSL AT",
        "price": 149500
      }
    ],
    "specs": {
      "engine_capacity": "3.5 / 2.8L",
      "horsepower": "277 HP",
      "cylinders": "6 Cylinders",
      "fuel_consumption": "9.1 km/L",
      "fuel_capacity": "70L",
      "doors": "5 Doors",
      "speeds": "6-Speed",
      "dimensions": "526 cm L × 199 cm H"
    },
    "colors": [
      "White"
    ]
  },
  {
    "source_id": 20,
    "make": "Toyota",
    "model": "Coaster",
    "year": 2026,
    "category": "Bus",
    "sub_type": "Light-Commercial",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol / Diesel",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 238510,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/coaster-studio.jpg",
    "description": "The Toyota Coaster 2026is a durable and spacious commercial bus designed for comfort and reliability. It features a robust 2.8L turbo-diesel engine with a maximum output of 147 HP and 420 Nm of torque, ensuring efficient performance for long trips. The interior is thoughtfully designed with ample space and climate control to enhance passenger comfort during extended journeys. Its tough exterior and advanced functionality make it a dependable choice for transporting groups with ease.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee"
    ],
    "trims": [
      {
        "trim": "Gasoline MT",
        "price": 238510
      },
      {
        "trim": "Diesel AT",
        "price": 248400
      }
    ],
    "specs": {
      "engine_capacity": "2.7L",
      "horsepower": "154 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "12.5 km/L",
      "fuel_capacity": "92L",
      "doors": "3 Doors",
      "speeds": "6-Speed",
      "dimensions": "699 cm L × 263 cm H"
    },
    "colors": [
      "White"
    ]
  },
  {
    "source_id": 21,
    "make": "Toyota",
    "model": "Camry Hybrid",
    "year": 2026,
    "category": "Hybrid",
    "sub_type": "Sedan",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Hybrid",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 107295,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/camry-studio.jpg",
    "description": "The Toyota Camry Hybrid is a standout in the sedan market, blending performance, efficiency, and style. The 2026 model offers a hybrid powertrain with up to 51 combined estimated MPG and 232 net combined horsepower. It features advanced technology, including rain-sensing wipers, heated and ventilated seats, and a wireless charging pad. In Saudi Arabia, the Camry Hybrid is available in various trims, with prices starting at SAR 106,605. It boasts a 2.5L 4-cylinder engine, delivering 176 horsepower and 221 Nm of torque, ensuring smooth and efficient driving.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "Vision 2030 Low-Emission Self-Charging Hybrid Fleet Spec"
    ],
    "trims": [
      {
        "trim": "E HEV",
        "price": 107295
      },
      {
        "trim": "E Plus HEV",
        "price": 112240
      },
      {
        "trim": "LE HEV",
        "price": 120750
      },
      {
        "trim": "Lumiere HEV",
        "price": 150190
      }
    ],
    "specs": {
      "engine_capacity": "2.5L",
      "horsepower": "226 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "27.7 km/L",
      "fuel_capacity": "50L",
      "doors": "4 Doors",
      "speeds": "8-Speed",
      "dimensions": "492 cm L × 144 cm H"
    },
    "colors": [
      "Black",
      "Blue",
      "Red",
      "Bronze",
      "Silver",
      "White"
    ]
  },
  {
    "source_id": 22,
    "make": "Toyota",
    "model": "RAV4 Hybrid",
    "year": 2026,
    "category": "Hybrid",
    "sub_type": "Mid-size",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Hybrid",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 107065,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/rav4-studio.jpg",
    "description": "The 2026 Toyota RAV4 Hybrid is a versatile and efficient SUV, perfect for both city driving and off-road adventures. It features a 2.5L 4-cylinder engine paired with front and rear electric drive motors, delivering 219 net combined horsepower. With an estimated 41 MPG in the city and 38 MPG on the highway, it offers impressive fuel efficiency.\nThe RAV4 Hybrid comes with Electronic On-Demand All-Wheel Drive (AWD), ensuring better traction and stability. It also boasts a spacious interior with modern design elements, including an available 10.5-inch multimedia display and 12.3-inch digital gauge cluster. For rugged adventures, the Woodland Edition offers trail-friendly features like sport-tuned suspension and sturdy roof rails.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "Vision 2030 Low-Emission Self-Charging Hybrid Fleet Spec"
    ],
    "trims": [
      {
        "trim": "LE 4x2 HEV",
        "price": 107065
      },
      {
        "trim": "LE 4x4 HEV",
        "price": 113045
      },
      {
        "trim": "XLE 4x4 HEV",
        "price": 133550
      },
      {
        "trim": "XSE 4x4 HEV",
        "price": 157665
      },
      {
        "trim": "LTD 4x4 HEV",
        "price": 161230
      }
    ],
    "specs": {
      "engine_capacity": "2.5L",
      "horsepower": "214 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "23 km/L",
      "fuel_capacity": "55L",
      "doors": "5 Doors",
      "speeds": "10-Speed",
      "dimensions": "460 cm L × 170 cm H"
    },
    "colors": [
      "Black",
      "Blue",
      "Gray",
      "Red",
      "Silver",
      "White"
    ]
  },
  {
    "source_id": 23,
    "make": "Toyota",
    "model": "Highlander Hybrid",
    "year": 2026,
    "category": "Hybrid",
    "sub_type": "Cross-over",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Hybrid",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 151455,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 1,
    "status": "available",
    "image_url": "/assets/jadeer/highlander-studio.jpg",
    "description": "The 2026 Toyota Highlander Hybrid is a spacious and efficient SUV, perfect for families and adventurers alike. It features a 2.5L 4-cylinder hybrid engine with a combined output of 243 horsepower and an estimated 35 MPG combined fuel efficiency. With seating for up to eight passengers and a maximum towing capacity of 3,500 lbs, it offers both comfort and utility.\nThe Highlander Hybrid comes equipped with Electronic On-Demand All-Wheel Drive (AWD) for enhanced traction and stability. Inside, you'll find modern amenities like an available 12.3-inch multimedia display, smartphone integration, and premium materials. For added style, the Nightshade Edition offers unique black accents and bold design elements.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "Vision 2030 Low-Emission Self-Charging Hybrid Fleet Spec"
    ],
    "trims": [
      {
        "trim": "LE HEV 4x2",
        "price": 151455
      },
      {
        "trim": "GLE HEV 4x4",
        "price": 168360
      },
      {
        "trim": "LIMITED HEV 4x4",
        "price": 207460
      }
    ],
    "specs": {
      "engine_capacity": "2.5L",
      "horsepower": "240 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "20.1 / 19.3 / 20.1 km/L",
      "fuel_capacity": "65L",
      "doors": "5 Doors",
      "speeds": "8-Speed",
      "dimensions": "495 cm L × 173 cm H"
    },
    "colors": [
      "Black",
      "Blue",
      "Gray",
      "Red",
      "Silver",
      "White",
      "Green"
    ]
  },
  {
    "source_id": 24,
    "make": "Hyundai",
    "model": "Accent",
    "year": 2026,
    "category": "Sedan",
    "sub_type": "Compact",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 70936,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/sonata-studio.jpg",
    "description": "Introducing the Hyundai Accent 2026 . Where style meets efficiency. Designed for modern drivers, this sleek sedan boasts a refined exterior, advanced technology, and an impressive 1.5L MPi engine, delivering both power and fuel economy. With multiple trims to suit every lifestyle, including Smart, Comfort, and Premium, the Accent offers a driving experience that’s as smooth as it is stylish. Choose from a range of eight stunning colors and enjoy superior comfort with an intuitive infotainment system and spacious interior. Elevate your drive with the Hyundai Accent 2025—crafted for excellence.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee"
    ],
    "trims": [
      {
        "trim": "L",
        "price": 70936
      },
      {
        "trim": "L 2 Tone",
        "price": 71436
      },
      {
        "trim": "GL",
        "price": 74788
      },
      {
        "trim": "GL 2 Tone",
        "price": 75289
      },
      {
        "trim": "GLS",
        "price": 84612
      },
      {
        "trim": "GLS 2 Tone",
        "price": 85129
      }
    ],
    "specs": {
      "engine_capacity": "1.5L",
      "horsepower": "113 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "18.9 km/L",
      "fuel_capacity": "45L",
      "doors": "4 Doors",
      "speeds": "6-Speed",
      "dimensions": "438 cm L × 145 cm H"
    },
    "colors": [
      "White",
      "Black",
      "Blue",
      "Grey",
      "Silver",
      "Brown",
      "Red"
    ]
  },
  {
    "source_id": 25,
    "make": "Hyundai",
    "model": "Elantra",
    "year": 2026,
    "category": "Sedan",
    "sub_type": "Compact",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 76667,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/sonata-studio.jpg",
    "description": "The Hyundai Elantra 2026 is a sleek and modern compact sedan that combines style, efficiency, and advanced technology. With its bold exterior design, featuring sharp lines and a distinctive front grille, the Elantra stands out on the road. Inside, the cabin offers a driver-centric layout with premium materials, an intuitive infotainment system, and spacious seating for both front and rear passengers. The Elantra is available with multiple engine options, including a fuel-efficient hybrid variant and a sporty turbocharged model, catering to different driving preferences. Safety is a priority, with advanced driver-assistance features such as lane-keeping assist, blind-spot monitoring, and forward collision warning. Whether you're looking for a reliable daily commuter or a stylish sedan with cutting-edge features, the Hyundai Elantra 2025 delivers a well-rounded driving experienc",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee"
    ],
    "trims": [
      {
        "trim": "2.0 GL",
        "price": 76667
      },
      {
        "trim": "1.5 GL+",
        "price": 77611
      },
      {
        "trim": "2.0 GL+",
        "price": 79028
      },
      {
        "trim": "2.0 GLS",
        "price": 83137
      }
    ],
    "specs": {
      "engine_capacity": "2.0L",
      "horsepower": "147 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "6.5 km/L",
      "fuel_capacity": "50L",
      "doors": "4 Doors",
      "speeds": "6-Speed",
      "dimensions": "471 cm L × 141 cm H"
    },
    "colors": [
      "White",
      "Gray",
      "Black",
      "Blue",
      "Red"
    ]
  },
  {
    "source_id": 26,
    "make": "Hyundai",
    "model": "Sonata",
    "year": 2026,
    "category": "Sedan",
    "sub_type": "Mid-size",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 104880,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/sonata-studio.jpg",
    "description": "The Hyundai Sonata 2026 is a stylish and sophisticated midsize sedan that blends performance, comfort, and advanced technology. With its sleek exterior design, featuring bold lines and a distinctive front grille, the Sonata exudes a modern and sporty appeal. Inside, the cabin offers a spacious and driver-focused layout, equipped with premium materials, an intuitive infotainment system, and advanced connectivity features. The Sonata comes with multiple engine options, including a fuel-efficient hybrid variant and a turbocharged performance model, catering to different driving preferences. Safety is a priority, with cutting-edge driver-assistance features such as lane-keeping assist, blind-spot monitoring, and adaptive cruise control. Whether you're looking for a reliable daily commuter or a stylish sedan with innovative features, the Hyundai Sonata 2025 delivers a well-rounded driving experience.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee"
    ],
    "trims": [
      {
        "trim": "L",
        "price": 104880
      },
      {
        "trim": "GL",
        "price": 113612
      },
      {
        "trim": "GLS",
        "price": 121394
      },
      {
        "trim": "LTD",
        "price": 145130
      }
    ],
    "specs": {
      "engine_capacity": "2.5 / 2.0L",
      "horsepower": "192 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "14.5 km/L",
      "fuel_capacity": "50L",
      "doors": "4 Doors",
      "speeds": "8-Speed",
      "dimensions": "491 cm L × 144 cm H"
    },
    "colors": [
      "White",
      "Gray",
      "Black"
    ]
  },
  {
    "source_id": 27,
    "make": "Hyundai",
    "model": "Azera",
    "year": 2026,
    "category": "Sedan",
    "sub_type": "Luxury",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 157010,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/sonata-studio.jpg",
    "description": "The 2026 Hyundai Azera is a stylish and sophisticated sedan that offers a blend of luxury, technology, and performance. With a 3.5-liter V6 engine delivering up to 300 horsepower, it ensures a smooth and powerful driving experience, complemented by an 8-speed automatic transmission. The fuel efficiency ranges between 9.6 to 10.4 liters per 100 km, supported by a fuel tank capacity of 60–70 liters, depending on the trim level. The car’s exterior is available in a variety of elegant colors, including white, gray, black, blue, bronze, and silver, adding to its refined aesthetic. In terms of pricing, the Azera starts at SAR 144,325, with higher trims like the Calligraphy edition reaching up to SAR 201,250. With its advanced safety features, premium interiors, and cutting-edge technology, the 2025 Azera is an excellent choice for drivers seeking both comfort and performance.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee"
    ],
    "trims": [
      {
        "trim": "GL",
        "price": 157010
      },
      {
        "trim": "GLS",
        "price": 175950
      },
      {
        "trim": "LTD",
        "price": 188163
      },
      {
        "trim": "Calligraphy",
        "price": 211244
      }
    ],
    "specs": {
      "engine_capacity": "3.5L",
      "horsepower": "396 HP",
      "cylinders": "6 Cylinders",
      "fuel_consumption": "12.6 km/L",
      "fuel_capacity": "60L",
      "doors": "4 Doors",
      "speeds": "8-Speed",
      "dimensions": "499 cm L × 146 cm H"
    },
    "colors": [
      "White",
      "Gray",
      "Black",
      "Blue",
      "Bronze",
      "Silver"
    ]
  },
  {
    "source_id": 28,
    "make": "Hyundai",
    "model": "Palisade",
    "year": 2026,
    "category": "SUV",
    "sub_type": "Mid-size",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 174139,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/palisade-studio.jpg",
    "description": "The 2026 Hyundai Palisade is a spacious and stylish SUV designed for both comfort and performance. It offers a choice of two powerful engines: a 3.8L V6 producing 291 horsepower and a 2.5L Turbo Hybrid generating 329 horsepower, catering to those who prioritize efficiency without sacrificing power. The Palisade boasts a striking exterior with LED headlights, bold alloy wheels, and a range of colors, including Black, Burgundy, Silver, Blue, Gray, White, and Green. Inside, it features premium materials, an advanced infotainment system, and seating for up to eight passengers. With fuel efficiency ranging from 10.0 km/L to 12.8 km/L, a generous 71.2-liter fuel tank, and a starting price of SAR 165,025 in Saudi Arabia, the Palisade delivers a balance of luxury, practicality, and cutting-edge safety features to enhance every journey.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "USA-Standard Roll Bar & Internal Roll Cage Ready"
    ],
    "trims": [
      {
        "trim": "GL",
        "price": 174139
      },
      {
        "trim": "GLS",
        "price": 194839
      },
      {
        "trim": "Calligraphy",
        "price": 237015
      }
    ],
    "specs": {
      "engine_capacity": "3.5L",
      "horsepower": "291 / 329 HP",
      "cylinders": "6 / 4 Cylinders",
      "fuel_consumption": "10.6 km/L",
      "fuel_capacity": "71L",
      "doors": "4 Doors",
      "speeds": "8-Speed",
      "dimensions": "499 cm L × 175 cm H"
    },
    "colors": [
      "Black",
      "Burgundy",
      "Silver",
      "Blue",
      "Gray",
      "White",
      "Green"
    ]
  },
  {
    "source_id": 33,
    "make": "Hyundai",
    "model": "Staria",
    "year": 2026,
    "category": "Bus",
    "sub_type": "Passenger",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol / Diesel",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 148500,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/hiace-studio.jpg",
    "description": "The 2026 Hyundai Staria is a futuristic and spacious people mover, designed for families and businesses alike. With a bold, van-like exterior and a premium interior, it offers multiple seating configurations, ranging from 3-seater cargo vans to luxurious 7-seater models. The Staria is powered by a 3.5L V6 petrol engine, delivering 272 hp, and comes with an 8-speed automatic transmission for smooth driving. It features advanced safety technologies, including adaptive cruise control, lane-keeping assist, and blind-spot monitoring, ensuring a secure ride. The interior is equipped with wireless charging, a 10.25-inch digital cluster, and ambient lighting, creating a comfortable and tech-savvy environment. With a fuel tank capacity of 75 liters and a fuel consumption rate of 10.5L/100km, the Staria balances performance with efficiency. Available in Saudi Arabia, it starts at SAR 105,900 for the 3-Seater Van and goes up to SAR 179,900 for the 7-Seater Luxury trim.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee"
    ],
    "trims": [
      {
        "trim": "SRD",
        "price": 0
      }
    ],
    "specs": {
      "engine_capacity": "3.5L",
      "horsepower": "113 HP",
      "cylinders": "6 Cylinders",
      "fuel_consumption": "10.5 / 8.2 km/L",
      "fuel_capacity": "75L",
      "doors": "5 Doors",
      "speeds": "8-Speed",
      "dimensions": "525 cm L × 199 cm H"
    },
    "colors": [
      "Black",
      "Brown",
      "Gray",
      "Silver",
      "Blue",
      "White"
    ]
  },
  {
    "source_id": 34,
    "make": "Nissan",
    "model": "Kicks",
    "year": 2026,
    "category": "SUV",
    "sub_type": "Subcompact",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 89599,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/urban-cruiser-studio.jpg",
    "description": "The 2026 Nissan Kicks is a compact SUV with a 2.0L 4-cylinder engine producing 141 hp. It has a fuel efficiency of 15.1 km/L and a fuel tank capacity of 44.7 liters. Inside, it features a 12.3-inch touchscreen, wireless Apple CarPlay & Android Auto, and advanced safety features like ProPILOT Assist and Automatic Emergency Braking. In Saudi Arabia",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "USA-Standard Roll Bar & Internal Roll Cage Ready"
    ],
    "trims": [
      {
        "trim": "S",
        "price": 89599
      },
      {
        "trim": "SV+",
        "price": 101399
      },
      {
        "trim": "SL",
        "price": 111399
      }
    ],
    "specs": {
      "engine_capacity": "2.0L",
      "horsepower": "141 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "13.2 km/L",
      "fuel_capacity": "45L",
      "doors": "5 Doors",
      "speeds": null,
      "dimensions": "437 cm L × 163 cm H"
    },
    "colors": [
      "Black",
      "Blue",
      "Gray",
      "Red",
      "Silver",
      "White",
      "Yellow"
    ]
  },
  {
    "source_id": 35,
    "make": "Nissan",
    "model": "Patrol",
    "year": 2026,
    "category": "SUV",
    "sub_type": "Full-size",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 270999,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 1,
    "status": "available",
    "image_url": "/assets/jadeer/patrol-studio.jpg",
    "description": "The 2026 Nissan Patrol is a full-size SUV known for its rugged capability and luxurious comfort. It features a bold design, advanced technology, and powerful engine options, making it a popular choice for both off-road adventures and urban driving. The interior is spacious, offering premium materials and modern connectivity features. With strong safety systems and intelligent driving aids, the Patrol ensures a secure and smooth ride. Available in multiple trims, it caters to different preferences, from practical utility to high-performance luxury",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "USA-Standard Roll Bar & Internal Roll Cage Ready"
    ],
    "trims": [
      {
        "trim": "SE T2",
        "price": 270999
      },
      {
        "trim": "SE TITANIUM",
        "price": 316999
      },
      {
        "trim": "SE PLATINUM CITY",
        "price": 338999
      },
      {
        "trim": "LE T1",
        "price": 307999
      },
      {
        "trim": "LE T2",
        "price": 332999
      },
      {
        "trim": "LE TITANIUM",
        "price": 380999
      },
      {
        "trim": "LE PLATINUM CITY",
        "price": 422999
      }
    ],
    "specs": {
      "engine_capacity": "3.5 / 3.8L",
      "horsepower": "316 HP",
      "cylinders": "6 Cylinders",
      "fuel_consumption": "7.8 km/L",
      "fuel_capacity": "140L",
      "doors": "5 Doors",
      "speeds": "9-Speed",
      "dimensions": "530 cm L × 195 cm H"
    },
    "colors": [
      "Green",
      "Blue",
      "Gray",
      "Black",
      "White",
      "Silver"
    ]
  },
  {
    "source_id": 36,
    "make": "Nissan",
    "model": "X-Trail",
    "year": 2026,
    "category": "SUV",
    "sub_type": "Compact",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 104999,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/xtrail-studio.jpg",
    "description": "The 2026 Nissan X-Trail is a compact crossover SUV designed for versatility, comfort, and efficiency. It features a modern exterior design, a spacious interior, and advanced technology to enhance the driving experience. The X-Trail is available in multiple trims, offering both front-wheel drive (FWD) and all-wheel drive (AWD) configurations. It is powered by a 2.5L 4-cylinder engine or a 1.5L turbocharged hybrid option, delivering a balance of performance and fuel efficiency. The SUV comes in a variety of colors, has a 55-liter fuel tank, and is equipped with a Continuously Variable Transmission (CVT) for smooth acceleration.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "USA-Standard Roll Bar & Internal Roll Cage Ready"
    ],
    "trims": [
      {
        "trim": "S 2WD 5 SEATS",
        "price": 104999
      },
      {
        "trim": "S 2WD 7 SEATS",
        "price": 107999
      },
      {
        "trim": "S 4WD 5 SEATS",
        "price": 109999
      },
      {
        "trim": "S 4WD 7 SEATS",
        "price": 116499
      },
      {
        "trim": "SV 4WD 7 SEATS",
        "price": 130999
      },
      {
        "trim": "SV+ 4WD 7 SEATS",
        "price": 144999
      },
      {
        "trim": "N-TREK",
        "price": 150999
      },
      {
        "trim": "SL 4WD 7 SEATS",
        "price": 156999
      }
    ],
    "specs": {
      "engine_capacity": "2.5L",
      "horsepower": "181 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "12.8 km/L",
      "fuel_capacity": "55L",
      "doors": "5 Doors",
      "speeds": "8-Speed",
      "dimensions": "468 cm L × 172 cm H"
    },
    "colors": [
      "White",
      "Silver",
      "Grey",
      "Black",
      "Blue",
      "Red",
      "Green",
      "Orange",
      "Beige",
      "Brown"
    ]
  },
  {
    "source_id": 37,
    "make": "Nissan",
    "model": "Pathfinder",
    "year": 2026,
    "category": "SUV",
    "sub_type": "Mid-size",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 164999,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/xtrail-studio.jpg",
    "description": "The 2025 Nissan Pathfinder is a midsize SUV designed for versatility, comfort, and adventure. It features a spacious interior, modern technology, and capable performance for both urban driving and off-road exploration.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "USA-Standard Roll Bar & Internal Roll Cage Ready"
    ],
    "trims": [
      {
        "trim": "S 2WD",
        "price": 164999
      },
      {
        "trim": "S 4WD",
        "price": 179999
      },
      {
        "trim": "SV 2WD",
        "price": 192999
      },
      {
        "trim": "SV 4WD",
        "price": 206999
      },
      {
        "trim": "SL 4WD",
        "price": 227999
      }
    ],
    "specs": {
      "engine_capacity": "3.5L",
      "horsepower": "271 HP",
      "cylinders": "6 Cylinders",
      "fuel_consumption": "10.2 km/L",
      "fuel_capacity": "70L",
      "doors": "5 Doors",
      "speeds": "9-Speed",
      "dimensions": "500 cm L × 180 cm H"
    },
    "colors": [
      "White",
      "Silver",
      "Grey",
      "Black",
      "Red",
      "Blue",
      "Green",
      "Beige",
      "Brown"
    ]
  },
  {
    "source_id": 42,
    "make": "Toyota",
    "model": "Corolla Hybrid",
    "year": 2026,
    "category": "Hybrid",
    "sub_type": "Compact",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Hybrid",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 88780,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 1,
    "status": "available",
    "image_url": "/assets/jadeer/corolla-studio.jpg",
    "description": "The 2026 Toyota Corolla combines modern design, advanced technology, and exceptional reliability. Highlights include a refreshed exterior, a 10.5-inch touchscreen with wireless connectivity, efficient powertrain options (including hybrid models), enhanced safety features with Toyota Safety Sense™ 3.0, and a spacious, comfortable interior. It's a perfect blend of innovation and practicality for every journey.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "Vision 2030 Low-Emission Self-Charging Hybrid Fleet Spec"
    ],
    "trims": [
      {
        "trim": "1.8 XLI HYBRID",
        "price": 88780
      },
      {
        "trim": "1.8 XLI Executive HYBRID MR",
        "price": 98555
      }
    ],
    "specs": {
      "engine_capacity": "1.8L",
      "horsepower": "121 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "30.3 km/L",
      "fuel_capacity": "47L",
      "doors": "4 Doors",
      "speeds": "10-Speed",
      "dimensions": "463 cm L × 145 cm H"
    },
    "colors": [
      "White",
      "Black",
      "Red",
      "Gray"
    ]
  },
  {
    "source_id": 45,
    "make": "Toyota",
    "model": "Innova",
"year": 2026,
    "category": "SUV",
    "sub_type": "SUV",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 123740,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/highlander-studio.jpg",
    "description": "The 2026 Toyota Innova combines versatile 7-to-8 passenger corporate transport with Toyota reliability, spacious cabin comfort, and efficient 2.0L performance across GCC highways and urban commutes.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "USA-Standard Roll Bar & Internal Roll Cage Ready"
    ],
    "trims": [
      {
        "trim": "GL",
        "price": 123740
      },
      {
        "trim": "VIP",
        "price": 145475
      }
    ],
    "specs": {
      "engine_capacity": "2.0L",
      "horsepower": "172 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "15.9 km/L",
      "fuel_capacity": "52L",
      "doors": "5 Doors",
      "speeds": "10-Speed",
      "dimensions": "476 cm L × 178 cm H"
    },
    "colors": [
      "Red",
      "Black",
      "White",
      "Silver",
      "Gray",
      "Blue"
]
  },
  {
    "source_id": 46,
    "make": "Toyota",
    "model": "Innova Hybrid",
"year": 2026,
    "category": "Hybrid",
    "sub_type": "SUV",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Hybrid",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 133400,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/highlander-studio.jpg",
    "description": "The 2026 Toyota Innova Hybrid pairs a 184 HP self-charging 2.0L HEV powertrain delivering 23.7 km/L efficiency with spacious executive multi-passenger versatility aligned with GCC Vision 2030 sustainability targets.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "Vision 2030 Low-Emission Self-Charging Hybrid Fleet Spec"
    ],
    "trims": [
      {
        "trim": "GL HEV",
        "price": 133400
      }
    ],
    "specs": {
      "engine_capacity": "2.0L",
      "horsepower": "184 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "23.7 km/L",
      "fuel_capacity": "52L",
      "doors": "5 Doors",
      "speeds": "10-Speed",
      "dimensions": "476 cm L × 179 cm H"
    },
    "colors": [
      "Red",
      "Black",
      "White",
      "Silver",
      "Gray",
      "Blue"
]
  },
  {
    "source_id": 62,
    "make": "Chevrolet",
    "model": "Tahoe",
    "year": 2025,
    "category": "SUV",
    "sub_type": "Full-Size",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 248900,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/tahoe-studio.jpg",
    "description": "Discover a wide selection of high-quality vehicles designed to suit every lifestyle and budget. Our curated lineup features the latest models from leading automotive brands, offering exceptional performance, advanced safety technologies, and modern comfort. Whether you're searching for a reliable family SUV, an efficient sedan, or a powerful work-ready pickup, we make it easy to compare, choose, and drive home the perfect car. With transparent pricing, trusted service, and a seamless buying experience, we ensure you enjoy confidence and convenience at every step.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "USA-Standard Roll Bar & Internal Roll Cage Ready"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "5.3 / 6.2L",
      "horsepower": "355 HP",
      "cylinders": "8 Cylinders",
      "fuel_consumption": "5.9 km/L",
      "fuel_capacity": "91L",
      "doors": "5 Doors",
      "speeds": "10-Speed",
      "dimensions": "536 cm L × 192 cm H"
    },
    "colors": [
      "Black",
      "White",
      "Red",
      "Gray"
    ]
  },
  {
    "source_id": 63,
    "make": "GMC",
    "model": "Yukon",
    "year": 2025,
    "category": "SUV",
    "sub_type": "SUV",
    "service_type": "leasing",
    "listing_type": "showroom",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 0,
    "price_or_monthly_rate": 263800,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/tahoe-studio.jpg",
    "description": "Experience the bold and commanding presence of the GMC Yukon, a full-size SUV that combines premium luxury with rugged capability. Available with two powerful V8 engines — a 5.3 L and an available 6.2 L — the Yukon delivers up to 420 hp and is paired with a smooth 10-speed automatic transmission. Its expansive dimensions (533 cm length, 206 cm width, 194 cm height) provide generous space for passengers and cargo, while the 91 L fuel tank ensures long-range confidence for everyday drives or weekend adventures. With advanced safety features, upscale interior touches, and a choice of sophisticated exterior colors tailored for the Saudi market, the Yukon stands out as a top-tier SUV for families who refuse to compromise on power or elegance.",
    "safety_telematics_specs": [
      "Manufacturer-Schedule Maintenance & Genuine Spare Parts",
      "700+ B2B Quick Service Facilities Across KSA, Bahrain & Oman",
      "GPS Vehicle Tracking & Blue Key Access Control",
      "Comprehensive GCC Insurance & Replacement Vehicle Guarantee",
      "USA-Standard Roll Bar & Internal Roll Cage Ready"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "5.3 / 6.2L",
      "horsepower": "355 HP",
      "cylinders": "8 Cylinders",
      "fuel_consumption": "7.9 km/L",
      "fuel_capacity": "91L",
      "doors": "5 Doors",
      "speeds": "10-Speed",
      "dimensions": "533 cm L × 194 cm H"
    },
    "colors": [
      "Black",
      "White",
      "Red",
      "Gray",
      "Blue"
    ]
  },
  {
    "source_id": 69,
    "make": "Mitsubishi",
    "model": "Outlander",
    "year": 2023,
    "category": "SUV",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 136000,
    "price_or_monthly_rate": 75000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/highlander-studio.jpg",
    "description": "يوجد رش في الشنطة والباب الخلفي يسار",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "2.5L",
      "horsepower": "181 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": null,
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": "8-Speed",
      "dimensions": null
    },
    "colors": [
      "Blue"
    ]
  },
  {
    "source_id": 74,
    "make": "Toyota",
    "model": "Land Cruiser Prado",
    "year": 2024,
    "category": "SUV",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Diesel",
    "transmission": "Automatic",
    "mileage_km": 50000,
    "price_or_monthly_rate": 185000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/prado-studio.jpg",
    "description": "Jadeer United Motors certified pre-owned 2024 Toyota Land Cruiser Prado. Ex-corporate fleet unit maintained strictly on manufacturer schedule with verified 50,000 km odometer reading and full GCC technical inspection.",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "2.4L",
      "horsepower": "201 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "14.1 km/L",
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": "6-Speed",
      "dimensions": null
    },
    "colors": [
      "White"
    ]
  },
  {
    "source_id": 92,
    "make": "Toyota",
    "model": "Corolla",
    "year": 2020,
    "category": "Sedan",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 170000,
    "price_or_monthly_rate": 43000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/corolla-studio.jpg",
    "description": "يوجد صبغ متفرق",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "1.6L",
      "horsepower": null,
      "cylinders": "4 Cylinders",
      "fuel_consumption": null,
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": "6-Speed",
      "dimensions": null
    },
    "colors": [
      "White"
    ]
  },
  {
    "source_id": 98,
    "make": "Nissan",
    "model": "Patrol",
    "year": 2022,
    "category": "SUV",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 108000,
    "price_or_monthly_rate": 115000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 1,
    "status": "available",
    "image_url": "/assets/jadeer/patrol-studio.jpg",
    "description": "رش رفرف امامي يسار / رش رفرف امامي يمين / رش جزء صغير من الكبوت",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "4.0L",
      "horsepower": "275 HP",
      "cylinders": "6 Cylinders",
      "fuel_consumption": "8.5 km/L",
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": "6-Speed",
      "dimensions": null
    },
    "colors": [
      "White"
    ]
  },
  {
    "source_id": 99,
    "make": "Toyota",
    "model": "Fortuner",
    "year": 2023,
    "category": "SUV",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Diesel",
    "transmission": "Automatic",
    "mileage_km": 191000,
    "price_or_monthly_rate": 95000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "sold",
    "image_url": "/assets/jadeer/fortuner-studio.jpg",
    "description": "يوجد رش رفرف وباب امامي يسار / رش رفرف خلفي يسار / شنطة",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "2.4L",
      "horsepower": "147 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "14.7 km/L",
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": "6-Speed",
      "dimensions": null
    },
    "colors": [
      "Black"
    ]
  },
  {
    "source_id": 100,
    "make": "Mitsubishi",
    "model": "Pajero",
    "year": 2020,
    "category": "SUV",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 236000,
    "price_or_monthly_rate": 50000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "sold",
    "image_url": "/assets/jadeer/fortuner-studio.jpg",
    "description": "بدي وكالة",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "3.5L",
      "horsepower": "186 HP",
      "cylinders": "6 Cylinders",
      "fuel_consumption": "10.5 km/L",
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": "6-Speed",
      "dimensions": null
    },
    "colors": [
      "Brown"
    ]
  },
  {
    "source_id": 105,
    "make": "Toyota",
    "model": "Hilux",
    "year": 2021,
    "category": "Pick-Up",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Diesel",
    "transmission": "Manual",
    "mileage_km": 222800,
    "price_or_monthly_rate": 75000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "sold",
    "image_url": "/assets/jadeer/hilux-studio.jpg",
    "description": "بدي وكالة",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "2.4L",
      "horsepower": "148 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "14.9 km/L",
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": "6-Speed",
      "dimensions": null
    },
    "colors": [
      "White"
    ]
  },
  {
    "source_id": 107,
    "make": "Toyota",
    "model": "Corolla",
    "year": 2021,
    "category": "Sedan",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 256000,
    "price_or_monthly_rate": 44000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/corolla-studio.jpg",
    "description": "يوجد رش بالشنطة الخلفية",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "1.5L",
      "horsepower": "119 HP",
      "cylinders": "3 Cylinders",
      "fuel_consumption": "19.6 km/L",
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": "6-Speed",
      "dimensions": null
    },
    "colors": [
      "White"
    ]
  },
  {
    "source_id": 109,
    "make": "Toyota",
    "model": "Prado",
    "year": 2024,
    "category": "SUV",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 100000,
    "price_or_monthly_rate": 155000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 1,
    "status": "available",
    "image_url": "/assets/jadeer/prado-studio.jpg",
    "description": "بدي وكالة",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "2.4L",
      "horsepower": "201 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "14.1 km/L",
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": "6-Speed",
      "dimensions": null
    },
    "colors": [
      "White"
    ]
  },
  {
    "source_id": 110,
    "make": "Toyota",
    "model": "Hiace Highroof",
    "year": 2022,
    "category": "Bus",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Diesel",
    "transmission": "Manual",
    "mileage_km": 388000,
    "price_or_monthly_rate": 118000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "sold",
    "image_url": "/assets/jadeer/hiace-studio.jpg",
    "description": "بدي وكالة",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "2.8L",
      "horsepower": "161 HP",
      "cylinders": "4 Cylinders",
      "fuel_consumption": "11.5 km/L",
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": "6-Speed",
      "dimensions": null
    },
    "colors": [
      "White"
    ]
  },
  {
    "source_id": 120,
    "make": "Toyota",
    "model": "RAV4 STD 4X4",
    "year": 2023,
    "category": "SUV",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 136000,
    "price_or_monthly_rate": 83000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/rav4-studio.jpg",
    "description": "Jadeer United Motors certified pre-owned 2023 Toyota RAV4 STD 4X4. Ex-corporate fleet unit maintained strictly on manufacturer schedule with verified 136,000 km odometer reading and full GCC technical inspection.",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "2.0L",
      "horsepower": null,
      "cylinders": null,
      "fuel_consumption": null,
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": null,
      "dimensions": null
    },
    "colors": [
      "Metallic Grey"
    ]
  },
  {
    "source_id": 121,
    "make": "Toyota",
    "model": "Corolla XLI 1.5",
    "year": 2022,
    "category": "Sedan",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 119000,
    "price_or_monthly_rate": 42000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 1,
    "status": "available",
    "image_url": "/assets/jadeer/corolla-studio.jpg",
    "description": "Jadeer United Motors certified pre-owned 2022 Toyota Corolla XLI 1.5. Ex-corporate fleet unit maintained strictly on manufacturer schedule with verified 119,000 km odometer reading and full GCC technical inspection.",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "1.5L",
      "horsepower": null,
      "cylinders": null,
      "fuel_consumption": null,
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": null,
      "dimensions": null
    },
    "colors": [
      "Pearl White"
    ]
  },
  {
    "source_id": 127,
    "make": "Chevrolet",
    "model": "Tahoe LS 4X2",
    "year": 2023,
    "category": "SUV",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 157000,
    "price_or_monthly_rate": 135000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 1,
    "status": "available",
    "image_url": "/assets/jadeer/tahoe-studio.jpg",
    "description": "Jadeer United Motors certified pre-owned 2023 Chevrolet Tahoe LS 4X2. Ex-corporate fleet unit maintained strictly on manufacturer schedule with verified 157,000 km odometer reading and full GCC technical inspection.",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "5.3L",
      "horsepower": null,
      "cylinders": null,
      "fuel_consumption": null,
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": null,
      "dimensions": null
    },
    "colors": [
      "Black"
    ]
  },
  {
    "source_id": 128,
    "make": "Toyota",
    "model": "FJ Cruiser 4X4 Type 1",
    "year": 2023,
    "category": "SUV",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 127000,
    "price_or_monthly_rate": 160000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/fortuner-studio.jpg",
    "description": "Jadeer United Motors certified pre-owned 2023 Toyota FJ Cruiser 4X4 Type 1. Ex-corporate fleet unit maintained strictly on manufacturer schedule with verified 127,000 km odometer reading and full GCC technical inspection.",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "3.5L",
      "horsepower": null,
      "cylinders": null,
      "fuel_consumption": null,
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": null,
      "dimensions": null
    },
    "colors": [
      "White"
    ]
  },
  {
    "source_id": 130,
    "make": "Nissan",
    "model": "X-Trail 4X4",
    "year": 2021,
    "category": "SUV",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 80000,
    "price_or_monthly_rate": 58000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/xtrail-studio.jpg",
    "description": "وكالة",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "2.5L",
      "horsepower": null,
      "cylinders": null,
      "fuel_consumption": null,
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": null,
      "dimensions": null
    },
    "colors": [
      "White"
    ]
  },
  {
    "source_id": 132,
    "make": "Toyota",
    "model": "Coaster 23 seater",
    "year": 2020,
    "category": "Bus",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Diesel",
    "transmission": "Manual",
    "mileage_km": 277000,
    "price_or_monthly_rate": 185000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "sold",
    "image_url": "/assets/jadeer/coaster-studio.jpg",
    "description": "Jadeer United Motors certified pre-owned 2020 Toyota Coaster 23 seater. Ex-corporate fleet unit maintained strictly on manufacturer schedule with verified 277,000 km odometer reading and full GCC technical inspection.",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "4.2L",
      "horsepower": null,
      "cylinders": null,
      "fuel_consumption": null,
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": null,
      "dimensions": null
    },
    "colors": [
      "Obsidian Black"
    ]
  },
  {
    "source_id": 133,
    "make": "Toyota",
    "model": "Corolla 1.5 XLI",
    "year": 2022,
    "category": "Sedan",
    "sub_type": "Certified Used",
    "service_type": "selling",
    "listing_type": "used",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "mileage_km": 146666,
    "price_or_monthly_rate": 44000,
    "currency": "SAR",
    "country_availability": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "is_featured": 0,
    "status": "available",
    "image_url": "/assets/jadeer/corolla-studio.jpg",
    "description": "رفرف",
    "safety_telematics_specs": [
      "120-Point Jadeer Motors Technical Certification",
      "Complete Manufacturer-Schedule Maintenance History",
      "Verified Mileage & Clean GCC Chassis Report",
      "Immediate Ownership Transfer & Export Documentation"
    ],
    "trims": [],
    "specs": {
      "engine_capacity": "1.5L",
      "horsepower": null,
      "cylinders": null,
      "fuel_consumption": null,
      "fuel_capacity": null,
      "doors": "4 Doors",
      "speeds": null,
      "dimensions": null
    },
    "colors": [
      "Pearl White"
    ]
  }
] as const;

export const REAL_OFFERS = [
  {
    "title": "Smart Leasing Selection: Toyota Prado & Nissan Patrol",
    "title_ar": "خيارات التأجير الذكي: تويوتا برادو 2024 ونيسان باترول",
    "slug": "smart-leasing-selection-toyota-prado-nissan-patrol-19",
    "subtitle": "Smart Leasing Selection: Toyota Prado & Nissan Patrol",
    "subtitle_ar": "خيارات التأجير الذكي: تويوتا برادو 2024 ونيسان باترول",
    "category": "Operational Leasing",
    "monthly_rate_from": 4395,
    "currency": "SAR",
    "countries": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "valid_until": "2026-12-31",
    "is_active": 1,
    "highlights": [
      "Comprehensive GCC insurance & manufacturer maintenance included",
      "Access to 700+ B2B quick service centers & 24/7 mobile support",
      "Replacement vehicle guarantee with zero downtime",
      "GPS tracking, Blue Key control & flexible 24–48 month terms"
    ],
    "description": "",
    "description_ar": "",
    "image_url": "/assets/jadeer/prado-studio.jpg",
    "source_car_id": 17
  },
  {
    "title": "Exceptional Value: 2025 Toyota Urban Cruiser Lease",
    "title_ar": "قيمة استثنائية: عرض تأجير تويوتا أوربان كروزر 2025",
    "slug": "exceptional-value-2025-toyota-urban-cruiser-lease-20",
    "subtitle": "Exceptional Value: 2025 Toyota Urban Cruiser Lease",
    "subtitle_ar": "قيمة استثنائية: عرض تأجير تويوتا أوربان كروزر 2025",
    "category": "Operational Leasing",
    "monthly_rate_from": 1995,
    "currency": "SAR",
    "countries": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "valid_until": "2026-12-31",
    "is_active": 1,
    "highlights": [
      "Comprehensive GCC insurance & manufacturer maintenance included",
      "Access to 700+ B2B quick service centers & 24/7 mobile support",
      "Replacement vehicle guarantee with zero downtime",
      "GPS tracking, Blue Key control & flexible 24–48 month terms"
    ],
    "description": "",
    "description_ar": "",
    "image_url": "/assets/jadeer/urban-cruiser-studio.jpg",
    "source_car_id": 13
  },
  {
    "title": "Smart Leasing: 2024 Toyota Prado TXL Diesel",
    "title_ar": "تأجير ذكي: تويوتا برادو TXL ديزل 2024",
    "slug": "smart-leasing-2024-toyota-prado-txl-diesel-21",
    "subtitle": "Smart Leasing: 2024 Toyota Prado TXL Diesel",
    "subtitle_ar": "تأجير ذكي: تويوتا برادو TXL ديزل 2024",
    "category": "Operational Leasing",
    "monthly_rate_from": 4395,
    "currency": "SAR",
    "countries": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "valid_until": "2026-12-31",
    "is_active": 1,
    "highlights": [
      "Comprehensive GCC insurance & manufacturer maintenance included",
      "Access to 700+ B2B quick service centers & 24/7 mobile support",
      "Replacement vehicle guarantee with zero downtime",
      "GPS tracking, Blue Key control & flexible 24–48 month terms"
    ],
    "description": "",
    "description_ar": "",
    "image_url": "/assets/jadeer/prado-studio.jpg",
    "source_car_id": 17
  },
  {
    "title": "Luxury Leasing: 2026 Nissan Patrol Executive Package",
    "title_ar": "تأجير الفخامة: نيسان باترول 2026 | حلول تنقل تنفيذية",
    "slug": "luxury-leasing-2026-nissan-patrol-executive-package-22",
    "subtitle": "Luxury Leasing: 2026 Nissan Patrol Executive Package",
    "subtitle_ar": "تأجير الفخامة: نيسان باترول 2026 | حلول تنقل تنفيذية",
    "category": "Executive Leasing",
    "monthly_rate_from": 5895,
    "currency": "SAR",
    "countries": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "valid_until": "2026-12-31",
    "is_active": 1,
    "highlights": [
      "Comprehensive GCC insurance & manufacturer maintenance included",
      "Access to 700+ B2B quick service centers & 24/7 mobile support",
      "Replacement vehicle guarantee with zero downtime",
      "GPS tracking, Blue Key control & flexible 24–48 month terms"
    ],
    "description": "",
    "description_ar": "",
    "image_url": "/assets/jadeer/patrol-studio.jpg",
    "source_car_id": 35
  },
  {
    "title": "Reliable Business Partner: 2025 Toyota HiAce Fleet Sale",
    "title_ar": "شريك الأعمال الموثوق: تويوتا هايس 2025 للبيع المباشر",
    "slug": "reliable-business-partner-2025-toyota-hiace-fleet-sale-23",
    "subtitle": "Reliable Business Partner: 2025 Toyota HiAce Fleet Sale",
    "subtitle_ar": "شريك الأعمال الموثوق: تويوتا هايس 2025 للبيع المباشر",
    "category": "Used Car Sales",
    "monthly_rate_from": 89500,
    "currency": "SAR",
    "countries": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "valid_until": "2026-12-31",
    "is_active": 1,
    "highlights": [
      "Direct Jadeer United Motors certified sale (excl. VAT)",
      "Complete maintenance ledger & 120-point inspection",
      "Direct Sales Desk: +966 56 281 2000",
      "Immediate ownership transfer across Saudi Arabia & GCC"
    ],
    "description": "",
    "description_ar": "",
    "image_url": "/assets/jadeer/hiace-studio.jpg",
    "source_car_id": 19
  },
  {
    "title": "Drive Smart: 2025 Toyota Veloz GLX Cash Special",
    "title_ar": "انطلق بذكاء مع تويوتا فيلوز GLX 2025 – أناقة واعتمادية",
    "slug": "drive-smart-2025-toyota-veloz-glx-cash-special-24",
    "subtitle": "Drive Smart: 2025 Toyota Veloz GLX Cash Special",
    "subtitle_ar": "انطلق بذكاء مع تويوتا فيلوز GLX 2025 – أناقة واعتمادية",
    "category": "Used Car Sales",
    "monthly_rate_from": 76000,
    "currency": "SAR",
    "countries": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "valid_until": "2026-12-31",
    "is_active": 1,
    "highlights": [
      "Direct Jadeer United Motors certified sale (excl. VAT)",
      "Complete maintenance ledger & 120-point inspection",
      "Direct Sales Desk: +966 56 281 2000",
      "Immediate ownership transfer across Saudi Arabia & GCC"
    ],
    "description": "",
    "description_ar": "",
    "image_url": "/assets/jadeer/urban-cruiser-studio.jpg",
    "source_car_id": 11
  },
  {
    "title": "Drive More, Pay Less: 2026 Chery Arrizo 5 Offer",
    "title_ar": "سُق أكثر وادفع أقل مع شيري أريزو 5 موديل 2026",
    "slug": "drive-more-pay-less-2026-chery-arrizo-5-offer-25",
    "subtitle": "Drive More, Pay Less: 2026 Chery Arrizo 5 Offer",
    "subtitle_ar": "سُق أكثر وادفع أقل مع شيري أريزو 5 موديل 2026",
    "category": "Used Car Sales",
    "monthly_rate_from": 39500,
    "currency": "SAR",
    "countries": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "valid_until": "2026-12-31",
    "is_active": 1,
    "highlights": [
      "Direct Jadeer United Motors certified sale (excl. VAT)",
      "Complete maintenance ledger & 120-point inspection",
      "Direct Sales Desk: +966 56 281 2000",
      "Immediate ownership transfer across Saudi Arabia & GCC"
    ],
    "description": "",
    "description_ar": "",
    "image_url": "/assets/jadeer/sonata-studio.jpg",
    "source_car_id": 7
  },
  {
    "title": "Conquer Every Road: 2025 Renault Duster SUV Offer",
    "title_ar": "سيطر على كل الطرق مع رينو داستر 2025",
    "slug": "conquer-every-road-2025-renault-duster-suv-offer-26",
    "subtitle": "Conquer Every Road: 2025 Renault Duster SUV Offer",
    "subtitle_ar": "سيطر على كل الطرق مع رينو داستر 2025",
    "category": "Used Car Sales",
    "monthly_rate_from": 49500,
    "currency": "SAR",
    "countries": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "valid_until": "2026-12-31",
    "is_active": 1,
    "highlights": [
      "Direct Jadeer United Motors certified sale (excl. VAT)",
      "Complete maintenance ledger & 120-point inspection",
      "Direct Sales Desk: +966 56 281 2000",
      "Immediate ownership transfer across Saudi Arabia & GCC"
    ],
    "description": "",
    "description_ar": "",
    "image_url": "/assets/jadeer/highlander-studio.jpg",
    "source_car_id": 15
  },
  {
    "title": "Special Offer: 2026 Chevrolet Captiva LT Pre-Owned",
    "title_ar": "عرض خاص: شيفروليه كابتيفا LT موديل 2026",
    "slug": "special-offer-2026-chevrolet-captiva-lt-pre-owned-27",
    "subtitle": "Special Offer: 2026 Chevrolet Captiva LT Pre-Owned",
    "subtitle_ar": "عرض خاص: شيفروليه كابتيفا LT موديل 2026",
    "category": "Used Car Sales",
    "monthly_rate_from": 64490,
    "currency": "SAR",
    "countries": [
      "Saudi Arabia",
      "Bahrain",
      "Oman"
    ],
    "valid_until": "2026-12-31",
    "is_active": 1,
    "highlights": [
      "Direct Jadeer United Motors certified sale (excl. VAT)",
      "Complete maintenance ledger & 120-point inspection",
      "Direct Sales Desk: +966 56 281 2000",
      "Immediate ownership transfer across Saudi Arabia & GCC"
    ],
    "description": "",
    "description_ar": "",
    "image_url": "/assets/jadeer/highlander-studio.jpg",
    "source_car_id": 16
  }
] as const;

export const REAL_ARTICLES = [
  {
    "title": "Jadeer United – Driving Excellence in Saudi Arabia",
    "title_ar": "جدير المتحدة – قيادة التميز في المملكة العربية السعودية",
    "slug": "jadeer-united-driving-excellence-in-saudi-arabia-4",
    "category": "Company News",
    "author": "Jadeer United",
    "author_ar": "جدير المتحدة",
    "read_time_minutes": 2,
    "excerpt": "Jadeer United is redefining the automotive experience in Saudi Arabia. With a diverse range of vehicles and unmatched after-sales service, we deliver quality, trust, and innovation. Our commitment is to meet cu",
    "excerpt_ar": "تُعيد شركة جدير المتحدة تعريف تجربة السيارات في المملكة العربية السعودية. مع تشكيلة متنوعة من السيارات وخدمة ما بعد البيع لا مثيل لها، نُقدم الجودة والثقة والابتكار. نلتزم بتلبية احتياجات عملائنا مع رسم ملامح م",
    "body": "Jadeer United is redefining the automotive experience in Saudi Arabia. With a diverse range of vehicles and unmatched after-sales service, we deliver quality, trust, and innovation. Our commitment is to meet customer needs while shaping the future of mobility in the Kingdom. Excellence is our road, and you are our destination.",
    "body_ar": "تُعيد شركة جدير المتحدة تعريف تجربة السيارات في المملكة العربية السعودية. مع تشكيلة متنوعة من السيارات وخدمة ما بعد البيع لا مثيل لها، نُقدم الجودة والثقة والابتكار. نلتزم بتلبية احتياجات عملائنا مع رسم ملامح مستقبل قطاع التنقل في المملكة. التميز طريقنا، وأنتم وجهتنا.",
    "image_url": "/assets/jadeer/jadeer-hq.jpg",
    "published_at": "2025-08-18"
  },
  {
    "title": "Jadeer & Hybrid Cars – Sustainable Mobility for the Future",
    "title_ar": "السيارات الهجينة وجدير – تنقل مستدام للمستقبل",
    "slug": "jadeer-hybrid-cars-sustainable-mobility-for-the-future-5",
    "category": "Sustainability & EV",
    "author": "Jadeer United",
    "author_ar": "جدير المتحدة",
    "read_time_minutes": 2,
    "excerpt": "Jadeer United proudly supports Saudi Arabia’s green vision by offering advanced hybrid vehicles. Combining fuel efficiency with exceptional performance, our hybrids help drivers reduce emissions without comprom",
    "excerpt_ar": "تفخر شركة جدير المتحدة بدعم الرؤية الخضراء للمملكة العربية السعودية من خلال توفير سيارات هجينة متطورة. تجمع سياراتنا الهجينة بين كفاءة استهلاك الوقود والأداء الاستثنائي، مما يساعد السائقين على تقليل الانبعاثات ",
    "body": "Jadeer United proudly supports Saudi Arabia’s green vision by offering advanced hybrid vehicles. Combining fuel efficiency with exceptional performance, our hybrids help drivers reduce emissions without compromising comfort. We aim to make sustainable driving accessible, helping customers embrace a cleaner, smarter future on the roads of the Kingdom.",
    "body_ar": "تفخر شركة جدير المتحدة بدعم الرؤية الخضراء للمملكة العربية السعودية من خلال توفير سيارات هجينة متطورة. تجمع سياراتنا الهجينة بين كفاءة استهلاك الوقود والأداء الاستثنائي، مما يساعد السائقين على تقليل الانبعاثات دون المساس براحتهم. نهدف إلى جعل القيادة المستدامة في متناول الجميع، ومساعدة عملائنا على احتضان مستقبل أكثر نظافةً وذكاءً على طرق المملكة.",
    "image_url": "/assets/jadeer/corolla-cross-hybrid.jpg",
    "published_at": "2025-08-18"
  },
  {
    "title": "Jadeer & Electric Cars – Powering a Greener Tomorrow",
    "title_ar": "السيارات الكهربائية وجدير – نحو مستقبل أكثر اخضرارًا",
    "slug": "jadeer-electric-cars-powering-a-greener-tomorrow-6",
    "category": "Sustainability & EV",
    "author": "Jadeer United",
    "author_ar": "جدير المتحدة",
    "read_time_minutes": 2,
    "excerpt": "At Jadeer United, we believe electric vehicles are the key to a sustainable future. Our growing EV lineup offers zero emissions, cutting-edge technology, and exceptional driving experiences. By promoting electr",
    "excerpt_ar": "في جدير المتحدة، نؤمن بأن المركبات الكهربائية هي مفتاح مستقبل مستدام. تقدم مجموعتنا المتنامية من المركبات الكهربائية انبعاثات صفرية، وتقنيات متطورة، وتجارب قيادة استثنائية. من خلال تعزيز التنقل الكهربائي، نساهم",
    "body": "At Jadeer United, we believe electric vehicles are the key to a sustainable future. Our growing EV lineup offers zero emissions, cutting-edge technology, and exceptional driving experiences. By promoting electric mobility, we contribute to Saudi Arabia’s environmental goals while empowering customers to embrace innovation and eco-conscious transportation.",
    "body_ar": "في جدير المتحدة، نؤمن بأن المركبات الكهربائية هي مفتاح مستقبل مستدام. تقدم مجموعتنا المتنامية من المركبات الكهربائية انبعاثات صفرية، وتقنيات متطورة، وتجارب قيادة استثنائية. من خلال تعزيز التنقل الكهربائي، نساهم في تحقيق الأهداف البيئية للمملكة العربية السعودية، ونمكّن عملائنا من تبني الابتكار ووسائل النقل الصديقة للبيئة.",
    "image_url": "/assets/jadeer/corolla-cross-hybrid.jpg",
    "published_at": "2025-08-18"
  },
  {
    "title": "Jadeer United Motors Celebrates KSA's 95th National Day",
    "title_ar": "شركة جدير المتحدة للسيارات تحتفل باليوم الوطني الخامس والتسعين للمملكة العربية السعودية",
    "slug": "jadeer-united-motors-celebrates-ksa-s-95th-national-day-7",
    "category": "Company News",
    "author": "Jadeer United",
    "author_ar": "جدير المتحدة",
    "read_time_minutes": 2,
    "excerpt": "Jadeer United proudly celebrates Saudi Arabia’s 95th National Day on September 23, 2025. The occasion highlights unity, progress, and the Kingdom’s Vision 2030 goals. Through automotive trading, leasing, and mo",
    "excerpt_ar": "تفتخر شركة جدير المتحدة بالاحتفال باليوم الوطني السعودي الـ95 في 23 سبتمبر 2025. ويجسد هذا اليوم معاني الوحدة والتقدم وأهداف رؤية المملكة 2030. ومن خلال أنشطتها في تجارة السيارات، التأجير، وحلول التنقل، تواصل ج",
    "body": "Jadeer United proudly celebrates Saudi Arabia’s 95th National Day on September 23, 2025. The occasion highlights unity, progress, and the Kingdom’s Vision 2030 goals. Through automotive trading, leasing, and mobility solutions, Jadeer United supports the nation’s transformation journey by fostering innovation and empowering communities. The company expresses gratitude for past achievements, optimism for the future, and extends congratulations to King Salman and Crown Prince Mohammed bin Salman, reaffirming its commitment to the Kingdom’s continued prosperity.",
    "body_ar": "تفتخر شركة جدير المتحدة بالاحتفال باليوم الوطني السعودي الـ95 في 23 سبتمبر 2025. ويجسد هذا اليوم معاني الوحدة والتقدم وأهداف رؤية المملكة 2030. ومن خلال أنشطتها في تجارة السيارات، التأجير، وحلول التنقل، تواصل جدير المتحدة دعم مسيرة التحول الوطني عبر تعزيز الابتكار وتمكين المجتمعات. وتؤكد الشركة امتنانها للإنجازات الماضية وتفاؤلها بالمستقبل، مهنئة خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز آل سعود وسمو ولي العهد الأمير محمد بن سلمان، ومجددة التزامها بمسيرة المملكة نحو الازدهار المستمر.",
    "image_url": "/assets/jadeer/jadeer-hq.jpg",
    "published_at": "2025-09-01"
  },
  {
    "title": "Toyota to revive the Land Cruiser FJ in 2026",
    "title_ar": "تويوتا تُعيد إحياء لاندكروزر FJ في 2026",
    "slug": "toyota-to-revive-the-land-cruiser-fj-in-2026-8",
    "category": "Sustainability & EV",
    "author": "Amani Abahra : Sayarah.com",
    "author_ar": "أماني عباهرة : موقع سيارة",
    "read_time_minutes": 2,
    "excerpt": "The global and local automotive sector is anticipating the debut of an all-new generation of the Toyota Land Cruiser FJ sooner than expected. Japanese reports have revealed the vehicle's launch date is set for ",
    "excerpt_ar": "يترقب قطاع السيارات العالمي والمحلي ظهور جيل جديد كلياً من تويوتا لاندكروزر FJ في وقت أقرب مما كان متوقعاً، حيث كشفت تقارير يابانية عن موعد إطلاق السيارة المرتقبة خلال الربع الثاني من 2026 في اليابان، مع وصولها",
    "body": "The global and local automotive sector is anticipating the debut of an all-new generation of the Toyota Land Cruiser FJ sooner than expected. Japanese reports have revealed the vehicle's launch date is set for the second quarter of 2026 in Japan, with global markets arriving later. Experts expect this version to feature a modern design while retaining the legendary off-road performance and classic identity that previously distinguished the FJ, amid fierce competition in the small SUV segment \".",
    "body_ar": "يترقب قطاع السيارات العالمي والمحلي ظهور جيل جديد كلياً من تويوتا لاندكروزر FJ في وقت أقرب مما كان متوقعاً، حيث كشفت تقارير يابانية عن موعد إطلاق السيارة المرتقبة خلال الربع الثاني من 2026 في اليابان، مع وصولها لاحقاً إلى الأسواق العالمية. ويتوقع الخبراء بأن تقدم هذه النسخة تصميماً عصرياً مع الاحتفاظ بأسطورة الأداء في الطرق الوعرة والهوية الكلاسيكية التي ميزت FJ سابقاً، وسط منافسة شرسة في فئة السيارات الرياضية متعددة الاستخدامات الصغيرة.",
    "image_url": "/assets/jadeer/corolla-cross-hybrid.jpg",
    "published_at": "2025-10-12"
  },
  {
    "title": "Hyundai's New Factory Launching in Saudi Arabia",
    "title_ar": "مصنع هيونداي الجديد ينطلق من السعودية",
    "slug": "hyundai-s-new-factory-launching-in-saudi-arabia-9",
    "category": "Market & Vision 2030",
    "author": "Alaa' Alezza - Sayarah.com",
    "author_ar": "آلاء العزة - موقع سيارة",
    "read_time_minutes": 2,
    "excerpt": "In a historic move reflecting the industrial transformation underway in Saudi Arabia, the South Korean Hyundai Motor Group inaugurated its new factory at the King Salman Automotive Complex, marking a new phase ",
    "excerpt_ar": "في خطوة تاريخية تعكس التحول الصناعي الذي تشهده المملكة العربية السعودية، دشنت مجموعة هيونداي موتور الكورية مصنعها الجديد في مجمع الملك سلمان للسيارات، معلنة بذلك انطلاق مرحلة جديدة في قطاع صناعة السيارات المحلي",
    "body": "In a historic move reflecting the industrial transformation underway in Saudi Arabia, the South Korean Hyundai Motor Group inaugurated its new factory at the King Salman Automotive Complex, marking a new phase in the local automotive industry. The official visit of the group's CEO, Euisun Chung, included high-level discussions with His Royal Highness Prince Mohammed bin Salman bin Abdulaziz Al Saud, Crown Prince and Prime Minister, aimed at establishing a joint strategy to support the goals of Vision 2030 and strengthen industrial and technological partnerships in the Saudi market.",
    "body_ar": "في خطوة تاريخية تعكس التحول الصناعي الذي تشهده المملكة العربية السعودية، دشنت مجموعة هيونداي موتور الكورية مصنعها الجديد في مجمع الملك سلمان للسيارات، معلنة بذلك انطلاق مرحلة جديدة في قطاع صناعة السيارات المحلي. شهدت الزيارة الرسمية للرئيس التنفيذي للمجموعة، أويسون تشونغ، مناقشات رفيعة مع صاحب السمو الملكي الأمير محمد بن سلمان بن عبد العزيز آل سعود، ولي العهد ورئيس مجلس الوزراء، بهدف وضع أسس استراتيجية مشتركة تدعم أهداف رؤية المملكة 2030 وتعزز الشراكات الصناعية والتقنية في السوق السعودي.",
    "image_url": "/assets/jadeer/palisade-studio.jpg",
    "published_at": "2025-11-02"
  },
  {
    "title": "The Supra 2026 is Here",
    "title_ar": "سوبرا 2026 هنا",
    "slug": "the-supra-2026-is-here-10",
    "category": "Model Launches",
    "author": "Jadeer United",
    "author_ar": "جدير المتحدة",
    "read_time_minutes": 2,
    "excerpt": "The 2026 Toyota Supra has officially arrived in Saudi Arabia through Abdul Latif Jameel Motors, bringing with it a perfect blend of performance, style, and heritage. Powered by a 3.0-liter inline six-cylinder t",
    "excerpt_ar": "وصلت تويوتا سوبرا 2026 رسميًا إلى المملكة العربية السعودية عبر شركة عبد اللطيف جميل للسيارات، لتجمع بين الأداء والأناقة والتراث العريق. مزودة بمحرك توربو مزدوج التمرير سداسي الأسطوانات سعة 3.0 لتر، بقوة 382 حصا",
    "body": "The 2026 Toyota Supra has officially arrived in Saudi Arabia through Abdul Latif Jameel Motors, bringing with it a perfect blend of performance, style, and heritage. Powered by a 3.0-liter inline six-cylinder twin-scroll turbo engine producing 382 horsepower and 500 Nm of torque, the new Supra offers both 6-speed manual and 8-speed automatic options for driving enthusiasts. Its bold design, aerodynamic body, and 19-inch alloy wheels create an unmistakable sports presence, while a driver-focused cabin, premium materials, and modern infotainment features ensure a refined yet exhilarating experience.\n\nPriced from around SAR 276,000 (including VAT), the 2026 Supra combines cutting-edge technology with Toyota’s legendary reliability. It includes advanced safety systems like ABS, Vehicle Stability Control, and multiple airbags, making it as secure as it is powerful. Available in a range of eye-catching colors — including Matte Avalanche White, Volcanic Ash Gray, and Prominence Red — the Supra continues its legacy as Toyota’s ultimate performance coupe, designed for those who crave excitement on Saudi Arabia’s roads.",
    "body_ar": "وصلت تويوتا سوبرا 2026 رسميًا إلى المملكة العربية السعودية عبر شركة عبد اللطيف جميل للسيارات، لتجمع بين الأداء والأناقة والتراث العريق. مزودة بمحرك توربو مزدوج التمرير سداسي الأسطوانات سعة 3.0 لتر، بقوة 382 حصانًا وعزم دوران يبلغ 500 نيوتن متر، توفر سوبرا الجديدة خياري ناقل حركة يدوي بست سرعات وناقل حركة أوتوماتيكي بثماني سرعات لعشاق القيادة. تصميمها الجريء، وهيكلها الانسيابي، وعجلاتها المعدنية قياس 19 بوصة، تمنحها حضورًا رياضيًا لا يُضاهى، بينما تضمن مقصورتها المصممة خصيصًا للسائق، وموادها الفاخرة، وأنظمة المعلومات والترفيه الحديثة تجربة قيادة راقية وممتعة.\n\n\nيبدأ سعر سوبرا 2026 من حوالي 276,000 ريال سعودي (شامل ضريبة القيمة المضافة)، وهي تجمع بين أحدث التقنيات وموثوقية تويوتا الأسطورية. تتضمن أنظمة أمان متطورة مثل نظام المكابح المانعة للانغلاق (ABS)، ونظام التحكم في ثبات السيارة، ووسائد هوائية متعددة، مما يجعلها قوية وآمنة على حد سواء. تتوفر سيارة Supra بمجموعة من الألوان الجذابة، بما في ذلك اللون الأبيض غير اللامع، والرمادي البركاني، والأحمر البارز، وتواصل إرثها كسيارة الكوبيه عالية الأداء المثالية من تويوتا، والمصممة لأولئك الذين يتوقون إلى الإثارة على طرق المملكة العربية السعودية.",
    "image_url": "/assets/jadeer/camry-studio.jpg",
    "published_at": "2025-11-02"
  },
  {
    "title": "The Kingdom accelerates automotive sector localization",
    "title_ar": "المملكة العربية السعودية تسرع وتيرة توطين قطاع السيارات",
    "slug": "the-kingdom-accelerates-automotive-sector-localization-11",
    "category": "Market & Vision 2030",
    "author": "Arab News",
    "author_ar": "العربية نيوز",
    "read_time_minutes": 2,
    "excerpt": "Saudi Arabia’s automotive sector localization is fast on track as part of the government’s efforts to achieve its Vision 2030 targets, according to a senior official.  ",
    "excerpt_ar": "يسير توطين قطاع السيارات في المملكة العربية السعودية بخطى سريعة في إطار جهود الحكومة لتحقيق أهداف رؤية 2030، وفقًا لمسؤول رفيع المستوى.",
    "body": "Saudi Arabia’s automotive sector localization is fast on track as part of the government’s efforts to achieve its Vision 2030 targets, according to a senior official.  \n\nAt the Saudi-American Business Council seminar, Aftab Ahmed, a senior adviser to the Kingdom’s National Center for Industrial Development in the automotive sector, underscored the rapid transition toward domestic production of passenger vehicles and parts.  \n\nHe stated that this effort aligns with the ambitious objectives outlined in the National Industrial Strategy under Saudi Vision 2030, the Saudi Press Agency reported.   \n\nThe council, in collaboration with the NCID, recently hosted a virtual seminar on the future of the Kingdom’s automotive sector.   \n\nOver 100 industry leaders from Saudi Arabia and the US convened to discuss various aspects of the sector, including government initiatives, investment standards, and operational experiences within the Kingdom.  \n\nThe event facilitated the exchange of insights and opportunities in this rapidly evolving field.",
    "body_ar": "يسير توطين قطاع السيارات في المملكة العربية السعودية بخطى سريعة في إطار جهود الحكومة لتحقيق أهداف رؤية 2030، وفقًا لمسؤول رفيع المستوى.\n\nفي ندوة مجلس الأعمال السعودي الأمريكي، أكد أفتاب أحمد، كبير مستشاري المركز الوطني لتطوير الصناعة في قطاع السيارات بالمملكة، على التحول السريع نحو الإنتاج المحلي لسيارات الركاب وقطع الغيار.\n\nوأفاد بأن هذا الجهد يتماشى مع الأهداف الطموحة المحددة في الاستراتيجية الصناعية الوطنية ضمن رؤية السعودية 2030، وفقًا لوكالة الأنباء السعودية.\n\nاستضاف المجلس، بالتعاون مع المركز الوطني لتطوير الصناعة، مؤخرًا ندوة افتراضية حول مستقبل قطاع السيارات في المملكة.\n\nاجتمع أكثر من 100 من قادة الصناعة من المملكة العربية السعودية والولايات المتحدة لمناقشة جوانب مختلفة من هذا القطاع، بما في ذلك المبادرات الحكومية، ومعايير الاستثمار، والتجارب التشغيلية داخل المملكة.\n\nسهّل هذا الحدث تبادل الأفكار والفرص في هذا المجال سريع التطور.",
    "image_url": "/assets/jadeer/sonata-studio.jpg",
    "published_at": "2025-11-10"
  },
  {
    "title": "Next generation REEV hybrid cars debut at Riyadh’s EV Auto Show",
    "title_ar": "سيارات REEV الهجينة من الجيل القادم تظهر لأول مرة في معرض الرياض للسيارات الكهربائية",
    "slug": "next-generation-reev-hybrid-cars-debut-at-riyadh-s-ev-auto-show-12",
    "category": "Sustainability & EV",
    "author": "Arab News",
    "author_ar": "عرب نيوز",
    "read_time_minutes": 2,
    "excerpt": "The Saudi automotive market is welcoming a new generation of hybrid vehicles equipped with advanced Range-Extended Electric Vehicle technology. ",
    "excerpt_ar": "يستقبل سوق السيارات السعودي جيلاً جديداً من السيارات الهجينة المجهزة بتقنية المركبات الكهربائية ذات المدى الموسع المتقدمة.",
    "body": "The Saudi automotive market is welcoming a new generation of hybrid vehicles equipped with advanced Range-Extended Electric Vehicle technology. \n\nAlthough this technology has previously been introduced in the Kingdom, the latest models showcased at the EV Auto Show Riyadh 2025 feature significant upgrades in efficiency, performance, and driving range.\n\nAmong the standout participants was Rox Motors, a fast-growing Chinese automaker that unveiled its latest hybrid model — the Adamas — featuring an evolved version of REEV technology.\n\nAhmed Al-Obaidi, CEO of Rox KSA,  explained that the system combines the practicality of traditional fuel with the efficiency of electric power.\n\n“Our REEV technology allows gasoline to generate electricity directly,” Al-Obaidi said. “Part of the fuel powers a generator that charges the battery, while another portion goes into the extender, which increases the electric output and provides power to the car. \n\n“This hybrid approach is a fast way to combine electric and gas technology — ideal for the Saudi market.”",
    "body_ar": "يستقبل سوق السيارات السعودي جيلاً جديداً من السيارات الهجينة المجهزة بتقنية المركبات الكهربائية ذات المدى الموسع المتقدمة.\n\nعلى الرغم من طرح هذه التقنية سابقاً في المملكة، إلا أن أحدث الطرازات المعروضة في معرض السيارات الكهربائية الرياض 2025 تتميز بتحسينات كبيرة في الكفاءة والأداء ومدى القيادة.\n\nومن بين أبرز المشاركين شركة روكس موتورز، وهي شركة صناعة سيارات صينية سريعة النمو، كشفت عن أحدث طراز هجين لها - أداماس - المزود بنسخة متطورة من تقنية REEV.\n\nوأوضح أحمد العبيدي، الرئيس التنفيذي لشركة روكس السعودية، أن النظام يجمع بين العملية التي يوفرها الوقود التقليدي وكفاءة الطاقة الكهربائية.\n\nوقال العبيدي: \"تتيح تقنية REEV الخاصة بنا للبنزين توليد الكهرباء مباشرةً. يُشغّل جزء من الوقود مولداً يشحن البطارية، بينما يدخل جزء آخر إلى مُوسّع الطاقة، مما يزيد من الناتج الكهربائي ويوفر الطاقة للسيارة.\n\nويُعدّ هذا النهج الهجين طريقة سريعة للجمع بين تقنيتي الكهرباء والغاز - وهو مثالي للسوق السعودية\".",
    "image_url": "/assets/jadeer/corolla-cross-hybrid.jpg",
    "published_at": "2025-11-19"
  },
  {
    "title": "A New Era for Ford in the Kingdom",
    "title_ar": "عهد جديد لشركة فورد في المملكة",
    "slug": "a-new-era-for-ford-in-the-kingdom-13",
    "category": "Market & Vision 2030",
    "author": "abd alqadeer",
    "author_ar": "عبد القدير",
    "read_time_minutes": 2,
    "excerpt": "Ford Saudi Arabia 2025 marks a pivotal moment for the brand. With double-digit sales growth, exciting new product launches, and connected technologies on the way, Ford is doubling down on its commitment to Saud",
    "excerpt_ar": "تُمثل رؤية فورد السعودية 2025 نقطة تحول في مسيرة فورد. فمع نمو مبيعاتها بنسبة تفوق 10%، وإطلاق منتجات جديدة ومميزة، وتقنيات الاتصال المتطورة، تُعزز فورد التزامها تجاه العملاء السعوديين ودورها في رسم ملامح مستقب",
    "body": "Ford Saudi Arabia 2025 marks a pivotal moment for the brand. With double-digit sales growth, exciting new product launches, and connected technologies on the way, Ford is doubling down on its commitment to Saudi customers and its role in shaping the country’s automotive future.\n\nIn the first eight months of 2025, Ford achieved a 16% increase in year-to-date sales compared to the same period in 2024, making this its strongest August since 2016. This milestone cements Ford’s status as a key player in Saudi Arabia’s rapidly evolving market.\nFord’s sales performance in Saudi Arabia has been nothing short of exceptional.\n\n    Year-to-date sales are up 16% compared to August 2024.\n\n    August 2025 was the strongest August since 2016.\n\n    Ford now ranks fifth overall by sales volume in the Kingdom.\n\nThe Taurus, Territory, and Everest remain Ford’s top-selling models, demonstrating the strength and breadth of the lineup. Ravi Ravichandran, President of Ford Middle East and North Africa, emphasized:\n\n    “Saudi Arabia is our largest market in MENA, and we’ve consolidated our position among the top five automakers despite increased competition. This success reflects the dedication of our teams and distributor partners, and the trust customers place in Ford.”\n\nThis impressive performance is part of a multi-year growth trajectory, with nearly 140% regional growth recorded over the past three years.",
    "body_ar": "تُمثل رؤية فورد السعودية 2025 نقطة تحول في مسيرة فورد. فمع نمو مبيعاتها بنسبة تفوق 10%، وإطلاق منتجات جديدة ومميزة، وتقنيات الاتصال المتطورة، تُعزز فورد التزامها تجاه العملاء السعوديين ودورها في رسم ملامح مستقبل قطاع السيارات في المملكة.\n\nفي الأشهر الثمانية الأولى من عام 2025، حققت فورد زيادة بنسبة 16% في مبيعاتها السنوية حتى تاريخه مقارنةً بالفترة نفسها من عام 2024، مما يجعل شهر أغسطس هذا هو الأقوى لها منذ عام 2016. ويُرسخ هذا الإنجاز مكانة فورد كلاعب رئيسي في سوق المملكة العربية السعودية سريع التطور.\n\nكان أداء مبيعات فورد في المملكة العربية السعودية استثنائيًا بكل المقاييس.\n\nارتفعت مبيعاتها السنوية حتى تاريخه بنسبة 16% مقارنةً بشهر أغسطس 2024.\n\nكان شهر أغسطس 2025 هو الأقوى لشهر أغسطس منذ عام 2016.\n\nتحتل فورد الآن المرتبة الخامسة من حيث حجم المبيعات في المملكة.\n\nلا تزال طرازات توروس وتيريتور وإيفرست الأكثر مبيعًا لدى فورد، مما يُظهر قوة وتنوع تشكيلة سياراتها. وأكد رافي رافيشاندران، رئيس فورد الشرق الأوسط وشمال أفريقيا، قائلاً:\n\n\"تُعدّ المملكة العربية السعودية أكبر أسواقنا في منطقة الشرق الأوسط وشمال أفريقيا، وقد رسّخنا مكانتنا بين أفضل خمس شركات تصنيع سيارات رغم المنافسة الشديدة. يعكس هذا النجاح تفاني فرق عملنا وشركائنا من الموزعين، والثقة التي يضعها عملاؤنا في فورد.\"\n\nيُعدّ هذا الأداء المتميز جزءًا من مسار نموّ متواصل على مدار سنوات، حيث سُجّل نموّ إقليمي بنسبة تقارب 140% خلال السنوات الثلاث الماضية.",
    "image_url": "/assets/jadeer/sonata-studio.jpg",
    "published_at": "2025-11-25"
  },
  {
    "title": "Škoda Auto enters Saudi Arabian market, strengthening its presence in the Middle East",
    "title_ar": "سكودا أوتو تدخل سوق المملكة العربية السعودية، مما يعزز وجودها في الشرق الأوسط",
    "slug": "koda-auto-enters-saudi-arabian-market-strengthening-its-presence-in-the--14",
    "category": "Market & Vision 2030",
    "author": "Mladá Boleslav",
    "author_ar": "Mladá Boleslav",
    "read_time_minutes": 3,
    "excerpt": "Škoda Auto is advancing its internationalisation strategy by entering the fast-growing Saudi Arabian market in partnership with SAMACO Motors, which has represented other Volkswagen Group brands in the country ",
    "excerpt_ar": "تعمل سكودا أوتو على تطوير استراتيجيتها للتدويل من خلال دخول سوق المملكة العربية السعودية سريع النمو بالشراكة مع ساماكو موتورز، التي مثلت العلامات التجارية الأخرى لمجموعة فولكس فاجن في البلاد لأكثر من 15 عامًا. ",
    "body": "Škoda Auto is advancing its internationalisation strategy by entering the fast-growing Saudi Arabian market in partnership with SAMACO Motors, which has represented other Volkswagen Group brands in the country for more than 15 years. The portfolio includes the Octavia hatchback and the Kushaq, Karoq and Kodiaq SUVs. The Superb hatchback and Combi estate will follow soon. Looking ahead to 2026, Škoda will also introduce the Slavia compact saloon to meet strong demand in the segment in the Saudi Arabian market. The first two state-of-the-art retail sites will open by the end of the year in Jeddah and Al Khobar, with a flagship outlet in Riyadh scheduled for 2026.\nŠkoda Auto intends to target primarily young drivers and families in larger cities in Saudi Arabia. To maximise synergies and capture growth potential – given the current level of only 156 vehicles per 1,000 inhabitants – Škoda Auto has established a Škoda Middle East office as part of Volkswagen Group Middle East (VWGME), which leads Škoda’s growth plans and coordinates the brand’s activities in the region.\nŠkoda Auto’s entry into Saudi Arabia marks the next strategic step in the Middle East. In the first half of 2025, the car manufacturer entered the Omani market, restarted operations in Qatar and opened two new state-of-the-art showrooms in the United Arab Emirates. With Saudi Arabia now joining this rapidly growing network, Škoda Auto continues to strengthen its presence across the region, introducing a comprehensive model line-up that includes the Octavia, Superb, Karoq and Kodiaq, along with the Kushaq SUV and the Slavia saloon.\nTo achieve its ambitious goals in the region, Škoda is entering a strategic partnership with SAMACO Motors, a member of the Al Nahla Group. The two showrooms, covering more than 1,200 m², will open in Jeddah and Al Khobar by the end of 2025. A flagship outlet in the capital, Riyadh, will follow in 2026.\n\nFounded in 1930, the Al Nahla Group is one of the longest-established trading companies in the Kingdom. SAMACO Motors, established in 1978, is a leading car importer and distributor in Saudi Arabia. For more than 15 years, it has served as the exclusive representative for Audi, Volkswagen and Porsche, and has recently added Bentley and Lamborghini to its portfolio.",
    "body_ar": "تعمل سكودا أوتو على تطوير استراتيجيتها للتدويل من خلال دخول سوق المملكة العربية السعودية سريع النمو بالشراكة مع ساماكو موتورز، التي مثلت العلامات التجارية الأخرى لمجموعة فولكس فاجن في البلاد لأكثر من 15 عامًا. وتشمل المحفظة سيارة أوكتافيا هاتشباك وسيارات الدفع الرباعي كوشاك وكاروك وكودياق. ستتبعها هاتشباك الرائعة وكومبي إستيت قريبًا. وبالنظر إلى عام 2026، ستقدم سكودا أيضًا سيارة الصالون المدمجة سلافيا لتلبية الطلب القوي في هذا القطاع في سوق المملكة العربية السعودية. وسيتم افتتاح أول موقعين حديثين للبيع بالتجزئة بحلول نهاية العام في جدة والخبر، ومن المقرر افتتاح منفذ رئيسي في الرياض في عام 2026.\nتعتزم سكودا أوتو استهداف السائقين الشباب والعائلات في المقام الأول في المدن الكبرى في المملكة العربية السعودية. ولتحقيق أقصى قدر من التآزر والاستفادة من إمكانات النمو - بالنظر إلى المستوى الحالي الذي يبلغ 156 سيارة فقط لكل 1000 نسمة - أنشأت سكودا أوتو مكتب سكودا في الشرق الأوسط كجزء من مجموعة فولكس فاجن الشرق الأوسط (VWGME)، الذي يقود خطط نمو سكودا وينسق أنشطة العلامة التجارية في المنطقة.\nيمثل دخول سكودا أوتو إلى المملكة العربية السعودية الخطوة الإستراتيجية التالية في الشرق الأوسط. وفي النصف الأول من عام 2025، دخلت الشركة المصنعة للسيارات السوق العماني، واستأنفت عملياتها في قطر وافتتحت صالتين عرض جديدتين على أحدث طراز في دولة الإمارات العربية المتحدة. ومع انضمام المملكة العربية السعودية الآن إلى هذه الشبكة سريعة النمو، تواصل سكودا أوتو تعزيز حضورها في جميع أنحاء المنطقة، حيث تقدم مجموعة طرازات شاملة تشمل أوكتافيا، وسوبرب، وكاروك، وكودياق، إلى جانب سيارة الدفع الرباعي Kushaq وصالون سلافيا.\nولتحقيق أهدافها الطموحة في المنطقة، تدخل سكودا في شراكة استراتيجية مع شركة ساماكو موتورز، عضو مجموعة النهلة. وسيتم افتتاح صالتي العرض، اللتين تغطيان أكثر من 1200 متر مربع، في جدة والخبر بحلول نهاية عام 2025. وسيتبعهما منفذ رئيسي في العاصمة الرياض في عام 2026.\n\nتأسست مجموعة النهلة عام 1930، وهي واحدة من أقدم الشركات التجارية في المملكة. تأسست شركة ساماكو للسيارات عام 1978، وهي إحدى الشركات الرائدة في مجال استيراد وتوزيع السيارات في المملكة العربية السعودية. لأكثر من 15 عامًا، عملت كممثل حصري لأودي وفولكس واجن وبورش، وقد أضافت مؤخرًا بنتلي ولامبورجيني إلى محفظتها.",
    "image_url": "/assets/jadeer/sonata-studio.jpg",
    "published_at": "2025-12-14"
  },
  {
    "title": "Saudis account for 70% of Lucid’s workforce in Saudi Arabia, official says",
    "title_ar": "إن السعوديين يشكلون 70% من القوى العاملة لشركة لوسيد في المملكة العربية السعودية.",
    "slug": "saudis-account-for-70-of-lucid-s-workforce-in-saudi-arabia-official-says-15",
    "category": "Sustainability & EV",
    "author": "ABDULAZIZ AL-FAKI - Arab News",
    "author_ar": "عبد العزيز الفكي – عرب نيوز",
    "read_time_minutes": 3,
    "excerpt": "DAMMAM: Saudis make up 70 percent of Lucid Motors’ workforce in Riyadh and King Abdullah Economic City, Faisal Sultan, the company’s Middle East president, told Al-Eqtisadiah. ",
    "excerpt_ar": "الدمام: صرّح فيصل سلطان، رئيس شركة لوسيد موتورز في الشرق الأوسط، لصحيفة الاقتصادية، بأن السعوديين يشكلون 70% من القوى العاملة في الشركة بالرياض ومدينة الملك عبد الله الاقتصادية.",
    "body": "DAMMAM: Saudis make up 70 percent of Lucid Motors’ workforce in Riyadh and King Abdullah Economic City, Faisal Sultan, the company’s Middle East president, told Al-Eqtisadiah. \n\nSultan explained that the company runs an annual program to develop local talent, sending Saudi employees to the US to gain advanced manufacturing skills and expertise before returning to apply and transfer that knowledge in Saudi Arabia, strengthening local capabilities and industrial value chains. \n\nHe further said that the Saudization rate is expected to rise in the coming years, alongside the planned expansion of production at the AMP-2 plant, which will create thousands of new job opportunities, adding that the company anticipates hiring an increasing number of Saudis as production ramps up. \n\nSultan highlighted Lucid’s leadership in advanced manufacturing in Saudi Arabia, noting that the company has established a strong industrial presence through its AMP-2 plant at the King Salman Automotive Cluster in King Abdullah Economic City. \n\nSpanning 1.3 million sq. meters, the facility is a central pillar of the company’s plans to boost production capacity and expand local industrial operations. \n\nLast week, Lucid CEO Marc Winterhoff told Al-Eqtisadiah that the company attracted new institutional investors over the past six months, including a $300 million investment from Uber, adding that talks are ongoing with other investment institutions and players for additional funding in the near future. \n\nHe highlighted that the company is working to double production capacity, noting that Lucid doubled its output in the US this year, with further increases planned for next year. \n\nThe new Saudi plant, Winterhoff added, is expected to begin operations by the end of next year and continue into 2026, forming a key part of Lucid’s expansion plans for 2027 with the launch of its new mid-size platform, emphasizing that this will result in a significant jump in production compared with current levels. \n\nRegarding competition in the EV market, the CEO said Lucid is not targeting the low-price segment locally or globally and will maintain its position in the premium category. \n\nHe added that the new platform will deliver a mid-size vehicle priced at $50,000, describing it as a broadly accessible segment. However, he stressed that the company will not compete with low-priced Chinese imports, given the level of support those vehicles receive. \n\nWinterhoff previously projected that Saudi Arabia’s EV market will grow at an annual rate of six percent through 2030, reaching sales of between 210,000 and 250,000 vehicles per year.",
    "body_ar": "الدمام: صرّح فيصل سلطان، رئيس شركة لوسيد موتورز في الشرق الأوسط، لصحيفة الاقتصادية، بأن السعوديين يشكلون 70% من القوى العاملة في الشركة بالرياض ومدينة الملك عبد الله الاقتصادية.\n\nوأوضح سلطان أن الشركة تُدير برنامجًا سنويًا لتطوير الكفاءات المحلية، حيث تُرسل موظفين سعوديين إلى الولايات المتحدة لاكتساب مهارات وخبرات متقدمة في مجال التصنيع، قبل عودتهم لتطبيق هذه المعرفة ونقلها إلى المملكة العربية السعودية، مما يُعزز القدرات المحلية وسلاسل القيمة الصناعية.\n\nوأضاف أن نسبة التوطين من المتوقع أن ترتفع في السنوات المقبلة، بالتزامن مع التوسع المُخطط له في إنتاج مصنع AMP-2، والذي سيُوفر آلاف فرص العمل الجديدة، مُشيرًا إلى أن الشركة تتوقع توظيف عدد متزايد من السعوديين مع زيادة الإنتاج.\n\nوسلّط سلطان الضوء على ريادة لوسيد في مجال التصنيع المتقدم في المملكة العربية السعودية، مُشيرًا إلى أن الشركة رسّخت وجودًا صناعيًا قويًا من خلال مصنعها AMP-2 في مُجمّع الملك سلمان للسيارات بمدينة الملك عبد الله الاقتصادية.\n\nيمتد المصنع الجديد على مساحة 1.3 مليون متر مربع، ويُعدّ ركيزة أساسية في خطط الشركة لتعزيز طاقتها الإنتاجية وتوسيع عملياتها الصناعية المحلية.\n\nفي الأسبوع الماضي، صرّح مارك وينترهوف، الرئيس التنفيذي لشركة لوسيد، لصحيفة الاقتصادية، بأن الشركة استقطبت مستثمرين مؤسسيين جدد خلال الأشهر الستة الماضية، بما في ذلك استثمار بقيمة 300 مليون دولار من شركة أوبر، مضيفًا أن المحادثات جارية مع مؤسسات استثمارية أخرى وجهات فاعلة للحصول على تمويل إضافي في المستقبل القريب.\n\nوأكد وينترهوف أن الشركة تعمل على مضاعفة طاقتها الإنتاجية، مشيرًا إلى أن لوسيد ضاعفت إنتاجها في الولايات المتحدة هذا العام، مع خطط لزيادة الإنتاج بشكل أكبر في العام المقبل.\n\nوأضاف وينترهوف أن المصنع السعودي الجديد من المتوقع أن يبدأ عملياته بحلول نهاية العام المقبل ويستمر حتى عام 2026، ليشكل جزءًا رئيسيًا من خطط لوسيد التوسعية لعام 2027 مع إطلاق منصتها الجديدة متوسطة الحجم، مؤكدًا أن ذلك سيؤدي إلى قفزة كبيرة في الإنتاج مقارنة بالمستويات الحالية.\n\nفيما يتعلق بالمنافسة في سوق السيارات الكهربائية، صرّح الرئيس التنفيذي لشركة لوسيد بأن الشركة لا تستهدف شريحة السيارات منخفضة السعر محليًا أو عالميًا، وستحافظ على مكانتها في فئة السيارات الفاخرة.\n\nوأضاف أن المنصة الجديدة ستُنتج سيارة متوسطة الحجم بسعر 50,000 دولار أمريكي، واصفًا إياها بأنها شريحة متاحة على نطاق واسع. ومع ذلك، أكد أن الشركة لن تُنافس السيارات الصينية المستوردة منخفضة السعر، نظرًا لمستوى الدعم الذي تحظى به هذه السيارات.\n\nوكان وينترهوف قد توقع سابقًا أن ينمو سوق السيارات الكهربائية في المملكة العربية السعودية بمعدل سنوي قدره 6% حتى عام 2030، ليصل حجم المبيعات إلى ما بين 210,000 و250,000 سيارة سنويًا.",
    "image_url": "/assets/jadeer/corolla-cross-hybrid.jpg",
    "published_at": "2025-12-17"
  },
  {
    "title": "Toyota announced the sixth generation of the 2026 RAV4 Hybrid",
    "title_ar": "تويوتا تكشف عن الجيل السادس من 2026 RAV4 hybrid",
    "slug": "toyota-announced-the-sixth-generation-of-the-2026-rav4-hybrid-16",
    "category": "Sustainability & EV",
    "author": "الوئام",
    "author_ar": "WEAM NEWS",
    "read_time_minutes": 2,
    "excerpt": "Toyota has unveiled the all-new 2026 RAV4, the sixth generation of one of the world’s best-selling SUVs, with total sales exceeding 15 million units since its launch in 1994.",
    "excerpt_ar": "كشفت شركة تويوتا اليابانية عن سيارة RAV4 2026 الجديدة كليًا، والتي تمثل الجيل السادس من واحدة من أكثر سيارات الدفع الرباعي مبيعًا عالميًا، بإجمالي مبيعات تجاوز 15 مليون سيارة منذ إطلاقها عام 1994.",
    "body": "Toyota has unveiled the all-new 2026 RAV4, the sixth generation of one of the world’s best-selling SUVs, with total sales exceeding 15 million units since its launch in 1994.\n\nThe 2026 RAV4 features comprehensive updates encompassing design, performance, digital technologies, and advanced safety systems.\n\nA new exterior design reflects the RAV4’s strong identity.\n\nThe 2026 RAV4 boasts a robust and stylish exterior design that reflects its sporty character and off-road capabilities, while maintaining similar dimensions to the previous generation.\n\nThe design features a powerful front end and a new badge, while the interior enhances the feeling of spaciousness and luxury, supported by high-quality materials and a more comfortable and intelligent driving experience.\n\nPlug-in hybrid technology.\n\nThe new RAV4 will be available in Europe in only two versions: conventional hybrid and plug-in hybrid (PHEV), as part of Toyota’s multi-path strategy to achieve carbon neutrality.\n\nThe PHEV version is equipped with a high-capacity lithium-ion battery (22.7 kWh), providing an electric driving range of up to 100 km according to the WLTP cycle, which is among the longest in the plug-in hybrid SUV category.",
    "body_ar": "كشفت شركة تويوتا اليابانية عن سيارة RAV4 2026 الجديدة كليًا، والتي تمثل الجيل السادس من واحدة من أكثر سيارات الدفع الرباعي مبيعًا عالميًا، بإجمالي مبيعات تجاوز 15 مليون سيارة منذ إطلاقها عام 1994.\n\nوتأتي RAV4 2026 بتحديثات شاملة تشمل التصميم، والأداء، والتقنيات الرقمية، إلى جانب أنظمة السلامة المتطورة.\n\nتصميم خارجي جديد يعكس هوية RAV4 القوية\nتعتمد RAV4 2026 تصميمًا خارجيًا متينًا وأنيقًا يعكس طابعها الرياضي وقدرتها على الطرق الوعرة، مع الحفاظ على أبعاد مماثلة للجيل السابق.\nيتميز التصميم بمقدمة قوية وشعار جديد، بينما تعزز المقصورة الداخلية شعورًا بالرحابة والفخامة، مدعومة بتجهيزات عالية الجودة وتجربة قيادة أكثر راحة وذكاء.\n\nتقنيات هجينة قابلة للشحن\nتتوفر RAV4 الجديدة في أوروبا بإصدارين فقط: الهجينة التقليدية والهجينة القابلة للشحن (PHEV)، في إطار استراتيجية تويوتا متعددة المسارات لتحقيق الحياد الكربوني.\n\nتم تزويد نسخة PHEV ببطارية ليثيوم-أيون عالية السعة (22.7 كيلوواط/ساعة)، توفّر مدى قيادة كهربائي يصل إلى 100 كم وفق دورة WLTP، وهي من بين الأطول في فئة سيارات الدفع الرباعي الهجينة القابلة للشحن.",
    "image_url": "/assets/jadeer/rav4-studio.jpg",
    "published_at": "2026-02-24"
  },
  {
    "title": "Nissan Unveils Two New Models: The Juke EV & X-Trail Hybrid",
    "title_ar": "نيسان تكشف النقاب عن طرازين جديدين: جوك الكهربائية وإكس-تريل الهجينة",
    "slug": "nissan-unveils-two-new-models-the-juke-ev-x-trail-hybrid-17",
    "category": "Sustainability & EV",
    "author": "Hassan Al-Shehri - Gogomotor.com",
    "author_ar": "حسن الشهري - منصة قوقو موتور",
    "read_time_minutes": 2,
    "excerpt": "Nissan has recently revealed two new SUVs called the Juke EV and the X-Trail hybrid at the 2026 Vision Global Business Outlook Event held by Nissan. The Juke EV is now in its third generation, and it looks fres",
    "excerpt_ar": "كشفت نيسان مؤخرًا عن سيارتين رياضيتين متعددتي الاستخدامات جديدتين، هما جوك الكهربائية وإكس-تريل الهجينة، خلال فعالية \"رؤية 2026 العالمية لتوقعات الأعمال\" التي نظمتها الشركة. تُعدّ جوك الكهربائية الآن في جيلها ا",
    "body": "Nissan has recently revealed two new SUVs called the Juke EV and the X-Trail hybrid at the 2026 Vision Global Business Outlook Event held by Nissan. The Juke EV is now in its third generation, and it looks fresher than ever before. Similarly, the fourth-gen X-Trail with a hybrid powertrain is currently the first time this model has gotten a hybrid powertrain. Overall, the models are designed to reflect a youthful energy and practical drivability.\n\nThe Juke has always been known for its funky styling, and Nissan has taken that trope to the next level with this third-generation model. The car sports an unconventional design that’s both modern and futuristic. The blacked-out bonnet and roof do add a genuine contrast to the neon green paint job of the car. Other exterior design highlights include a split-headlight setup and asymmetrically styled alloy wheels.\n\nThe car is supposed to use the same platform as the Nissan LEAF, which is a globally recognised, award-winning car. The powertrain details of the Nissan Juke EV have not been revealed yet. However, the Juke EV could see the LEAF’s 52kWh and 75kWh battery options offered. Both these options are paired with a front-mounted motor.\n\nThe X-Trail is known as the Rogue in some markets; it is a much more conventional car compared to the new-generation Juke EV. The sleek and fashionable design of the X-Trail is certainly misleading, considering the name suggests a rugged off-road SUV. Nonetheless, the hexagonal DRLs and the large blacked-out housing that holds the headlights are modern and stylish. \n\nThe powertrain details of the new X-Trail are known, and it will come with a Nissan e-POWER series hybrid setup. The wheels will be primarily powered by the electric motors, and the combustion engine will serve as a generator. Further details are not known currently.",
    "body_ar": "كشفت نيسان مؤخرًا عن سيارتين رياضيتين متعددتي الاستخدامات جديدتين، هما جوك الكهربائية وإكس-تريل الهجينة، خلال فعالية \"رؤية 2026 العالمية لتوقعات الأعمال\" التي نظمتها الشركة. تُعدّ جوك الكهربائية الآن في جيلها الثالث، وتتميز بتصميم أكثر حداثة من أي وقت مضى. وبالمثل، تُعتبر إكس-تريل من الجيل الرابع، المزودة بمحرك هجين، أول سيارة من هذا الطراز تُطرح بمحرك هجين. بشكل عام، صُممت السيارتان لتعكسا حيوية الشباب وسهولة القيادة العملية.\n\nلطالما اشتهرت جوك بتصميمها الجريء والمميز، وقد ارتقى نيسان بهذا التصميم إلى مستوى جديد مع هذا الجيل الثالث. تتميز السيارة بتصميم غير تقليدي يجمع بين الحداثة والتطلع للمستقبل. يُضفي غطاء المحرك والسقف باللون الأسود تباينًا لافتًا مع لونها الأخضر النيون. تشمل أبرز ملامح التصميم الخارجي الأخرى المصابيح الأمامية المنقسمة والعجلات المعدنية غير المتماثلة.\n\nمن المفترض أن تستخدم السيارة نفس قاعدة نيسان ليف، وهي سيارة عالمية حائزة على جوائز مرموقة. لم تُكشف بعد تفاصيل نظام الدفع في نيسان جوك الكهربائية. مع ذلك، من المتوقع أن تُطرح جوك الكهربائية بخياري بطارية 52 كيلوواط/ساعة و75 كيلوواط/ساعة، وهما نفس خياري بطارية نيسان ليف. ويُقترن كلا الخيارين بمحرك أمامي.\n\nتُعرف نيسان إكس-تريل باسم روغ في بعض الأسواق؛ وهي سيارة أكثر تقليدية مقارنةً بجيل جوك الكهربائية الجديد. قد يكون تصميم إكس-تريل الأنيق والعصري مُضللاً بعض الشيء، إذ يوحي اسمها بأنها سيارة دفع رباعي قوية مُخصصة للطرق الوعرة. ومع ذلك، فإن مصابيح الإضاءة النهارية سداسية الشكل والغطاء الأسود الكبير الذي يضم المصابيح الأمامية يُضفيان عليها لمسة عصرية وأنيقة.\n\nأما تفاصيل نظام الدفع في إكس-تريل الجديدة فهي معروفة، وستأتي بنظام هجين من سلسلة نيسان e-POWER. وستُغذى العجلات بشكل أساسي بالمحركات الكهربائية، بينما سيعمل محرك الاحتراق الداخلي كمولد كهربائي. ولا تتوفر حاليًا أي تفاصيل أخرى.",
    "image_url": "/assets/jadeer/xtrail-studio.jpg",
    "published_at": "2026-04-19"
  },
  {
    "title": "2026 Mitsubishi Triton Officially Revealed To Debut Next Month",
    "title_ar": "تم الكشف رسمياً عن سيارة ميتسوبيشي تريتون 2026، ومن المقرر طرحها لأول مرة الشهر المقبل.",
    "slug": "2026-mitsubishi-triton-officially-revealed-to-debut-next-month-18",
    "category": "Sustainability & EV",
    "author": "Hassan Al-Shehri - gogomotor.com",
    "author_ar": "حسن الشهري - gogomotor.com",
    "read_time_minutes": 2,
    "excerpt": "Mitsubishi teased the new Triton Raider model just a few days ago. Now the model has been officially revealed, and it has a quick debut timeline of just a month from now. There are some exciting new revelations",
    "excerpt_ar": "شوّقت ميتسوبيشي قبل أيام قليلة لطراز تريتون رايدر الجديد. والآن، تم الكشف عنه رسميًا، ومن المقرر إطلاقه قريبًا خلال شهر واحد فقط. يحمل هذا الطراز الجديد بعض المعلومات المثيرة التي تجعله أكثر جاذبية. أولًا، خضعت",
    "body": "Mitsubishi teased the new Triton Raider model just a few days ago. Now the model has been officially revealed, and it has a quick debut timeline of just a month from now. There are some exciting new revelations about the model, and it certainly makes the car more enticing. Firstly, the car has been modified by Premcar, the company that also modifies the Nissan Navara and Patrol Warriors. The team at Mitsubishi has said that this new flagship Triton has focused on enhancements, where it matters the most.\nOne of the biggest changes made to the car by Premcar is the suspension change. The new model will get a new front and rear damper package that’s aimed at improving ride comfort and vehicle control. The suspension is also aimed at improving the vehicle’s driveability across a wide variety of surfaces.\nTo ensure the model is truly tested and ready, it has undergone testing in the Australian outback of around 7,000 km in 18 months. The model will feature Bridgestone Dueler A/T 002 tyres. There are not many design changes specifically on this model to ensure it can appeal to a wide range of audience. A clean car also lets buyers customise their rides as they please.\n\n​\n\nOne of the more interesting features of the Triton Raider is its Telstra 4G mobile data connectivity. This will allow the car to make SOS calls in emergencies, track the vehicle, impose curfews, set geofences, and even trigger overspeed alerts. These security features certainly make the car better for off-road and adventure riding.\n\n​\n\nLastly, Mitsubishi will offer a five-year or 100,000 km warranty, whichever comes first. You can increase it to 10 years or 200,000 km when you service the car exclusively through the brand’s dealership network.",
    "body_ar": "شوّقت ميتسوبيشي قبل أيام قليلة لطراز تريتون رايدر الجديد. والآن، تم الكشف عنه رسميًا، ومن المقرر إطلاقه قريبًا خلال شهر واحد فقط. يحمل هذا الطراز الجديد بعض المعلومات المثيرة التي تجعله أكثر جاذبية. أولًا، خضعت السيارة لتعديلات من شركة بريمكار، الشركة التي تُعدّل أيضًا نيسان نافارا وباترول واريورز. وقد صرّح فريق ميتسوبيشي بأن تريتون الجديدة الرائدة ركّزت على التحسينات في الجوانب الأكثر أهمية.\n\nمن أبرز التغييرات التي أجرتها بريمكار على السيارة هو نظام التعليق. سيحصل الطراز الجديد على حزمة جديدة من المخمدات الأمامية والخلفية تهدف إلى تحسين راحة الركوب والتحكم بالسيارة. كما يهدف نظام التعليق إلى تحسين أداء السيارة على مختلف أنواع الطرق.\n\nولضمان جاهزية الطراز واختباره بدقة، خضع لاختبارات في المناطق النائية الأسترالية لمسافة تقارب 7000 كيلومتر على مدار 18 شهرًا. وسيُزوّد ​​الطراز بإطارات بريدجستون ديولر A/T 002. لم تُجرَ تغييرات تصميمية كثيرة على هذا الطراز تحديدًا لضمان جاذبيته لشريحة واسعة من المستهلكين. كما تتيح السيارة النظيفة للمشترين تخصيص سياراتهم حسب رغبتهم.\n\n\nمن أبرز ميزات تريتون رايدر اتصالها بشبكة بيانات الجيل الرابع (4G) من شركة تيلسترا. يُمكّن هذا الاتصال السيارة من إجراء مكالمات استغاثة في حالات الطوارئ، وتتبع موقعها، وفرض حظر تجول، وتحديد مناطق جغرافية، وحتى إطلاق تنبيهات تجاوز السرعة. تُعزز هذه الميزات الأمنية من قدرات السيارة في القيادة على الطرق الوعرة والمغامرات.\n\n\n\nأخيرًا، تُقدم ميتسوبيشي ضمانًا لمدة خمس سنوات أو 100,000 كيلومتر، أيهما أقرب. يُمكن تمديد الضمان إلى عشر سنوات أو 200,000 كيلومتر عند إجراء الصيانة حصريًا لدى شبكة وكلاء العلامة التجارية.",
    "image_url": "/assets/jadeer/corolla-cross-hybrid.jpg",
    "published_at": "2026-04-21"
  },
  {
    "title": "Toyota Fleet Safety – Tested Beyond Limits",
    "title_ar": "سلامة أسطول تويوتا - تم اختبارها بما يتجاوز الحدود",
    "slug": "toyota-fleet-safety-tested-beyond-limits-19",
    "category": "Safety & HSE",
    "author": "Jadeer United",
    "author_ar": "جدير المتحدة لتأجير السيارات",
    "read_time_minutes": 3,
    "excerpt": "Toyota has built a global reputation for safety—especially in fleet vehicles used by corporations, leasing companies, and government sectors. Through rigorous testing programs and advanced safety technologies, ",
    "excerpt_ar": "اختبارات السلامة لأسطول تويوتا: نظرة شاملة",
    "body": "Toyota has built a global reputation for safety—especially in fleet vehicles used by corporations, leasing companies, and government sectors. Through rigorous testing programs and advanced safety technologies, Toyota ensures its vehicles meet some of the world’s most demanding safety standards. This article explores how Toyota fleet vehicles are tested, what those tests involve, and why they matter for businesses.\n\n1. Global Safety Testing Programs\n\nToyota vehicles undergo independent testing by major global safety organizations. These programs simulate real-world accident scenarios and evaluate both passive safety (crash protection) and active safety (accident prevention).\n\nKey Testing Authorities\nEuro NCAP (Europe)\nJNCAP (Japan)\nASEAN NCAP (Southeast Asia)\nNHTSA (United States)\n\nThese organizations assess vehicles across multiple categories including:\n\nFrontal crash tests\nSide-impact tests\nRollover resistance\nPedestrian protection\nAdvanced driver assistance systems (ADAS)\n\nFor example, the Toyota Corolla and RAV4 achieved 5-star Euro NCAP ratings, scoring highly in adult and child occupant protection as well as safety assist systems .\n\n2. Crash Safety (Passive Safety Testing)\n\nCrash tests evaluate how well a vehicle protects occupants during an accident.\n\nCommon Crash Tests:\nFrontal Impact Test: Simulates head-on collisions\nSide Impact Test: Measures protection during side crashes\nPole Test: Evaluates impact with narrow objects like poles\nRollover Test: Assesses vehicle stability\n\nToyota vehicles consistently perform well due to:\n\nReinforced body structures (TNGA platform)\nStrategic use of high-strength steel\nEnergy absorption zones\n\nThese design elements help redirect crash forces away from passengers, maintaining cabin integrity .\n\n3. Preventive Safety (Active Safety Testing)\n\nModern fleet safety is not just about surviving crashes—it’s about avoiding them entirely.\n\nToyota’s Toyota Safety Sense (TSS) plays a key role in preventive safety testing. It includes:\n\nPre-Collision System (PCS)\nLane Departure Alert (LDA)\nAdaptive Cruise Control (ACC)\nAutomatic High Beam (AHB)\n\nTesting agencies evaluate how these systems perform in real-world scenarios like:\n\nDetecting pedestrians (including nighttime detection)\nAvoiding rear-end collisions\nMaintaining lane discipline\n\nStudies show Toyota Safety Sense can reduce rear-end collisions by up to 70% .\n\n4. Pedestrian & Vulnerable Road User Testing\n\nFleet vehicles often operate in urban environments, making pedestrian safety critical.\n\nTests include:\n\nPedestrian impact simulations\nCyclist detection systems\nEmergency braking performance\n\nToyota vehicles have demonstrated strong results, with systems capable of avoiding collisions entirely at low speeds in testing scenarios .\n\n5. Continuous Improvement Through Real-World Data\n\nToyota continuously updates its safety systems using:\n\nGlobal accident data\nReal-world driving behavior\nAdvanced simulation technologies\n\nPrograms like JNCAP even update testing criteria annually to reflect changing traffic conditions and risks, ensuring vehicles remain compliant with modern safety expectations .\n\n6. Why This Matters for Fleet Buyers\n\nFor businesses operating fleets, safety testing directly impacts:\n\nDriver safety and liability\nInsurance costs\nVehicle downtime\nBrand reputation\n\nToyota’s strong performance across global safety programs makes it a preferred choice for:\n\nCorporate fleets\nLeasing companies\nGovernment vehicles\n\nHigh safety ratings and proven accident prevention systems help reduce operational risks while improving overall efficiency.\n\n7. Conclusion\n\nToyota’s fleet vehicles are engineered with a holistic safety approach—combining crash protection, accident prevention, and continuous innovation. Through rigorous testing by global authorities and advanced technologies like Toyota Safety Sense, Toyota ensures its vehicles meet the highest safety standards.\n\nFor fleet operators, this translates into safer drivers, lower costs, and greater peace of mind.",
    "body_ar": "اختبارات السلامة لأسطول تويوتا: نظرة شاملة\n\nبنت تويوتا سمعة عالمية مرموقة في مجال السلامة، لا سيما في مركبات الأساطيل المستخدمة من قبل الشركات، وشركات التأجير، والقطاعات الحكومية. ومن خلال برامج اختبار صارمة وتقنيات سلامة متطورة، تضمن تويوتا أن مركباتها تلبي بعضًا من أكثر معايير السلامة صرامة في العالم. تستكشف هذه المقالة كيفية اختبار مركبات أسطول تويوتا، وما تتضمنه هذه الاختبارات، وأهميتها للشركات.\n\n1. برامج اختبار السلامة العالمية\n\nتخضع مركبات تويوتا لاختبارات مستقلة من قبل منظمات السلامة العالمية الكبرى. تحاكي هذه البرامج سيناريوهات حوادث واقعية، وتقيّم كلاً من السلامة السلبية (الحماية من التصادم) والسلامة النشطة (منع الحوادث).\n\n\nجهات الاختبار الرئيسية\nيورو NCAP (أوروبا)\nJNCAP (اليابان)\nASEAN NCAP (جنوب شرق آسيا)\nNHTSA (الولايات المتحدة)\n\nتقيّم هذه المنظمات المركبات عبر فئات متعددة، تشمل:\n\nاختبارات التصادم الأمامي\nاختبارات التصادم الجانبي\nمقاومة الانقلاب\nحماية المشاة\nأنظمة مساعدة السائق المتقدمة (ADAS)\n\nعلى سبيل المثال، حصلت سيارتا تويوتا كورولا وراف فور على تصنيف 5 نجوم من يورو NCAP، محققتين درجات عالية في حماية الركاب البالغين والأطفال، بالإضافة إلى أنظمة مساعدة السلامة.\n\n2. سلامة التصادم (اختبارات السلامة السلبية)\n\nتقيّم اختبارات التصادم مدى فعالية المركبة في حماية الركاب أثناء وقوع حادث.\n\n\nاختبارات التصادم الشائعة:\n\nاختبار التصادم الأمامي: يحاكي التصادمات وجهاً لوجه.\n\nاختبار التصادم الجانبي: يقيس مستوى الحماية أثناء التصادمات الجانبية.\n\nاختبار الاصطدام بالأعمدة: يقيم قوة الاصطدام بأجسام ضيقة كالأعمدة.\n\nاختبار الانقلاب: يقيم ثبات المركبة.\n\nتتميز مركبات تويوتا بأداءٍ عالٍ باستمرار بفضل:\n\nهياكل مُعززة (منصة TNGA).\n\nاستخدام استراتيجي للفولاذ عالي المقاومة.\n\nمناطق امتصاص الطاقة.\n\nتساعد عناصر التصميم هذه على توجيه قوى التصادم بعيداً عن الركاب، مما يحافظ على سلامة المقصورة.\n\n\n3. السلامة الوقائية (اختبارات السلامة النشطة)\n\nلا تقتصر سلامة أساطيل المركبات الحديثة على النجاة من التصادمات فحسب، بل تتعداها إلى تجنبها تماماً.\n\nيلعب نظام Toyota Safety Sense (TSS) من تويوتا دوراً محورياً في اختبارات السلامة الوقائية. يشمل ذلك:\n\nنظام ما قبل الاصطدام (PCS)\nنظام التنبيه عند مغادرة المسار (LDA)\nنظام تثبيت السرعة التكيفي (ACC)\nنظام الإضاءة العالية التلقائي (AHB)\n\nتقوم جهات الاختبار بتقييم أداء هذه الأنظمة في سيناريوهات واقعية، مثل:\n\nاكتشاف المشاة (بما في ذلك الاكتشاف الليلي)\nتجنب الاصطدامات الخلفية\nالحفاظ على الالتزام بالمسار\n\nتشير الدراسات إلى أن نظام Toyota Safety Sense يُمكنه تقليل الاصطدامات الخلفية بنسبة تصل إلى 70%.\n\n4. اختبارات المشاة ومستخدمي الطريق الأكثر عرضة للخطر\n\nغالبًا ما تعمل مركبات الأسطول في بيئات حضرية، مما يجعل سلامة المشاة أمرًا بالغ الأهمية.\n\nتشمل الاختبارات:\n\nمحاكاة اصطدام المشاة\nأنظمة اكتشاف راكبي الدراجات\nأداء الكبح الطارئ\n\nأظهرت مركبات تويوتا نتائج ممتازة، حيث تتميز أنظمتها بقدرتها على تجنب الاصطدامات تمامًا عند السرعات المنخفضة في سيناريوهات الاختبار.\n\n٥. التحسين المستمر من خلال بيانات العالم الواقعي\n\nتُحدّث تويوتا أنظمة السلامة لديها باستمرار باستخدام:\n\nبيانات الحوادث العالمية\nسلوك القيادة في العالم الواقعي\nتقنيات المحاكاة المتقدمة\n\nحتى أن برامج مثل JNCAP تُحدّث معايير الاختبار سنويًا لمواكبة تغيرات ظروف المرور والمخاطر، مما يضمن امتثال المركبات لمعايير السلامة الحديثة.\n\n٦. أهمية ذلك لمشتري أساطيل المركبات\n\nبالنسبة للشركات التي تُشغّل أساطيل مركبات، يؤثر اختبار السلامة بشكل مباشر على:\n\nسلامة السائقين ومسؤوليتهم القانونية\nتكاليف التأمين\nوقت تعطل المركبات\nسمعة العلامة التجارية\n\nيُعدّ أداء تويوتا المتميز في برامج السلامة العالمية خيارًا مفضلًا لـ:\n\nأسطول الشركات\nشركات التأجير\nالمركبات الحكومية\n\nتُساهم تصنيفات السلامة العالية وأنظمة منع الحوادث المُثبتة في تقليل المخاطر التشغيلية مع تحسين الكفاءة العامة.\n\n٧. الخلاصة\n\nصُممت مركبات أسطول تويوتا وفقًا لنهج شامل للسلامة، يجمع بين الحماية من التصادم ومنع الحوادث والابتكار المستمر. من خلال اختبارات صارمة تجريها هيئات عالمية وتقنيات متطورة مثل نظام Toyota Safety Sense، تضمن تويوتا أن سياراتها تلبي أعلى معايير السلامة.\n\nبالنسبة لمشغلي أساطيل المركبات، يُترجم هذا إلى سائقين أكثر أمانًا، وتكاليف أقل، وراحة بال أكبر.",
    "image_url": "/assets/jadeer/land-cruiser-gr.jpg",
    "published_at": "2026-04-26"
  },
  {
    "title": "A clear history... guaranteed quality... and an exceptional opportunity",
    "title_ar": "تاريخ واضح... وجودة مضمونة... وفرصة استثنائية",
    "slug": "a-clear-history-guaranteed-quality-and-an-exceptional-opportunity-20",
    "category": "Company News",
    "author": "Jadeer United",
    "author_ar": "Jadeer United",
    "read_time_minutes": 2,
    "excerpt": "Because your trust is the foundation of every step we take, we are pleased to offer you the opportunity to own well-maintained vehicles from our own fleet.",
    "excerpt_ar": "لأن ثقتكم هي أساس كل خطوة نخطوها، يسعدنا أن نطرح لكم مجموعة من سيارات أسطولنا الخاص، والتي انتقلت مباشرة من الوكالة إلى مستخدم واحد فقط، لتكونوا أنتم المالك الثاني بسجل ملكية واضح وموثوق. ",
    "body": "Because your trust is the foundation of every step we take, we are pleased to offer you the opportunity to own well-maintained vehicles from our own fleet.\n\nEach vehicle has had only one previous owner/user since leaving the dealership, giving you the chance to become the second owner with a clear and transparent ownership history. ✨\n\n The auction is open for 24 hours only — don't miss your chance!\n\n You are welcome to inspect the vehicles at our premises. To arrange a viewing, please contact Nebras:\n +966 59 493 0000\n\n Join the online auction now through Mobasher Auctions:\n https://mobasher.sa/auctions/t-container-details/4791?cat=motors\n\nWe look forward to your participation and wish you the best of luck!",
    "body_ar": "لأن ثقتكم هي أساس كل خطوة نخطوها، يسعدنا أن نطرح لكم مجموعة من سيارات أسطولنا الخاص، والتي انتقلت مباشرة من الوكالة إلى مستخدم واحد فقط، لتكونوا أنتم المالك الثاني بسجل ملكية واضح وموثوق. \n\n المزاد متاح لمدة 24 ساعة فقط، فلا تفوتوا الفرصة!\n\n يمكنكم معاينة السيارات في مقر الشركة بالتنسيق مع الزميل نبراس:\n 0594930000\n\n للمشاركة في المزاد الإلكتروني عبر منصة مباشر للمزادات:\n https://mobasher.sa/auctions/t-container-details/4791?cat=motors\n\nنتمنى لكم التوفيق في اقتناص أفضل العروض.",
    "image_url": "/assets/jadeer/jadeer-hq.jpg",
    "published_at": "2026-07-21"
  },
  {
    "title": "Will EVs have a Promising Future in the Kingdom?",
    "title_ar": "هل سيكون للسيارات الكهربائية مستقبل واعد في المملكة؟",
    "slug": "will-evs-have-a-promising-future-in-the-kingdom-21",
    "category": "Sustainability & EV",
    "author": "Haya Dahbour - motory.com",
    "author_ar": "هيا دحبور - motory.com",
    "read_time_minutes": 5,
    "excerpt": "The Kingdom of Saudi Arabia has started groping for a way to spread the use of electric cars and encourage its citizens to gradually abandon cars that run on gasoline and diesel, in line with the Kingdom's Visi",
    "excerpt_ar": "بدأت المملكة العربية السعودية في البحث عن سبل لتوسيع نطاق استخدام السيارات الكهربائية وتشجيع مواطنيها على التخلي تدريجياً عن السيارات التي تعمل بالبنزين والديزل، وذلك تماشياً مع رؤية المملكة 2030 التي تركز على ",
    "body": "The Kingdom of Saudi Arabia has started groping for a way to spread the use of electric cars and encourage its citizens to gradually abandon cars that run on gasoline and diesel, in line with the Kingdom's Vision 2030, which focuses on the use of renewable energy and artificial intelligence represented in autonomous driving.\n\nAccordingly, Motory team has conducted another local survey about electric cars, with more than 700 respondents participating. This time, the survey revealed a high demand for electric cars in the Kingdom, as a number of participants expressed their desire to own an electric car due to several reasons, where the most important are:\n\nElectric vehicles don’t need maintenance continuously as the fuel vehicles\n\nThe survey showed that about 45% of opinions want to own an electric vehicle because the cost of maintaining it is considered lower compared to the cost of maintaining an internal combustion vehicle. The electric vehicle engine has fewer moving parts, therefore it does not require continuous maintenance. Electric vehicles also don’t need to change engine oil, nor do valves suffer from blockage as the engine is not powered by internal combustion.\n\nThe financial cost of an electric vehicle \n\nAmong those looking to buy an electric vehicle, 56% indicated that their interest in EVs is due to the desire to save fuel costs. Electric vehicles gain their full power by charging them with electricity rather than using any type of fuel.\n\nEVs Protect the Environment and Preserve Its future\n\nAbout 45% of those surveyed expressed their desire to replace fuel vehicles with electric ones in order to preserve the environment. EVs play an important role in preserving the environment from pollution, due to the low percentage of their harmful emissions to the environment such as carbon monoxide, which makes them a better option compared to other vehicles.\n\nThe survey also revealed that 39% of opinions would like to use electric vehicles in line with the Kingdom's vision of electric transformation, while 37% said they would like to keep pace with the development in the world.\n\nWhich Category of EV will be the most in-demand in Saudi Arabia?\n\nAccording to the survey respondents, the electric sedan category will be the most in-demand at 50%, followed by the SUV at 43%.\n\nThe survey also showed that more than 65% of its participants will choose Japanese vehicles; such as Toyota, Lexus, Nissan, Honda, and others. Whereas more than 30% of them expressed their desire to buy American, German, or Korean electric vehicles. On the other hand, only 15% of the respondents expressed their desire to buy Chinese electric vehicles.\n\nIs there anything that affects the range of an electric vehicle battery?\n\nAccording to the results, 55% of the respondents do not know what conditions affect the electric battery's range (the average distance an EV travel on one charge). There are many factors that affect the battery life, which all users of electric vehicles must be aware of:\n\nFast charging increases the temperature of the internal components significantly\nThe temperature of the weather has a notable impact on the capacity of the electric vehicle battery, for example; the low temperature negatively affects the driving range due to the need to turn on the heating system.\nMileage: There is no doubt that the total mileage of the vehicle also affects the battery capacity\nCharging Electric Vehicles: Stations or Home?\n\nThe respondents were also asked if they prefer charging their EVs at stations or at home, as 70% of them say they prefer charging electric vehicles at home rather than going to charging stations.\n\nEVs are considered a viable option, but are they practical?\n\nAbout 65% of respondents agreed that electric vehicles are practical, but despite that; 73% of them said that they would keep a fuel vehicle if they purchased an electric one. This high percentage of those who want to keep a fuel vehicle when buying an EV,  reminds us of the result we obtained in the previous survey which indicated 79% of respondents are not ready yet for electric vehicles.\n\nWhat issues do ICE vehicle owners hope EVs won't have?\n\nAt the end of the survey, we asked the participants about the issues in which they had difficulty with fuel cars, and they hoped to completely disappear from electric cars. Most of the which included the following:\n\nPeriodic maintenance; Including changing oil, filters, and coils\nFrequent mechanical failures\nHigh petrol cost\nRisk of ignition from the gasoline\nHigh prices of spare parts",
    "body_ar": "بدأت المملكة العربية السعودية في البحث عن سبل لتوسيع نطاق استخدام السيارات الكهربائية وتشجيع مواطنيها على التخلي تدريجياً عن السيارات التي تعمل بالبنزين والديزل، وذلك تماشياً مع رؤية المملكة 2030 التي تركز على استخدام الطاقة المتجددة والذكاء الاصطناعي، لا سيما في مجال القيادة الذاتية.\n\nوفي هذا السياق، أجرى فريق \"موتوري\" استطلاعاً محلياً جديداً حول السيارات الكهربائية، شارك فيه أكثر من 700 شخص. وكشف الاستطلاع هذه المرة عن طلب كبير على السيارات الكهربائية في المملكة، حيث أعرب عدد من المشاركين عن رغبتهم في امتلاك سيارة كهربائية لعدة أسباب، أهمها:\n\nلا تحتاج السيارات الكهربائية إلى صيانة دورية كما هو الحال مع سيارات الوقود.\n\nوأظهر الاستطلاع أن حوالي 45% من المشاركين يرغبون في امتلاك سيارة كهربائية لأن تكلفة صيانتها تُعتبر أقل مقارنةً بتكلفة صيانة سيارات الاحتراق الداخلي. يحتوي محرك السيارة الكهربائية على عدد أقل من الأجزاء المتحركة، وبالتالي لا يتطلب صيانة دورية. كما لا تحتاج السيارات الكهربائية إلى تغيير زيت المحرك، ولا تعاني صماماتها من الانسداد لأن محركها لا يعمل بالاحتراق الداخلي.\n\nالجانب المالي تكلفة السيارة الكهربائية\n\nأشار 56% من الراغبين في شراء سيارة كهربائية إلى أن دافعهم هو توفير تكاليف الوقود. تستمد السيارات الكهربائية طاقتها بالكامل من شحنها بالكهرباء بدلاً من استخدام أي نوع من أنواع الوقود.\n\nالسيارات الكهربائية تحمي البيئة وتحافظ على مستقبلها\n\nأعرب نحو 45% من المشاركين في الاستطلاع عن رغبتهم في استبدال سيارات الوقود بسيارات كهربائية حفاظاً على البيئة. تلعب السيارات الكهربائية دوراً هاماً في حماية البيئة من التلوث، نظراً لانخفاض نسبة انبعاثاتها الضارة، مثل أول أكسيد الكربون، مما يجعلها خياراً أفضل مقارنةً بالسيارات الأخرى.\n\nكما كشف الاستطلاع أن 39% من المشاركين يرغبون في استخدام السيارات الكهربائية تماشياً مع رؤية المملكة للتحول الكهربائي، بينما قال 37% إنهم يرغبون في مواكبة التطورات العالمية في هذا المجال.\n\nما هي فئة السيارات الكهربائية الأكثر طلباً في المملكة العربية السعودية؟\n\nوفقاً لآراء المشاركين في الاستطلاع، ستكون فئة سيارات السيدان الكهربائية الأكثر طلباً في المملكة العربية السعودية. ٥٠٪، تليها سيارات الدفع الرباعي بنسبة ٤٣٪.\n\nوأظهر الاستطلاع أيضًا أن أكثر من ٦٥٪ من المشاركين سيختارون سيارات يابانية، مثل تويوتا، ولكزس، ونيسان، وهوندا، وغيرها. بينما أعرب أكثر من ٣٠٪ منهم عن رغبتهم في شراء سيارات كهربائية أمريكية أو ألمانية أو كورية. في المقابل، أعرب ١٥٪ فقط من المشاركين عن رغبتهم في شراء سيارات كهربائية صينية.\n\nهل هناك أي عوامل تؤثر على مدى بطارية السيارة الكهربائية؟\n\nوفقًا للنتائج، فإن ٥٥٪ من المشاركين لا يعرفون الظروف التي تؤثر على مدى بطارية السيارة الكهربائية (متوسط ​​المسافة التي تقطعها السيارة الكهربائية بشحنة واحدة). هناك العديد من العوامل التي تؤثر على عمر البطارية، والتي يجب على جميع مستخدمي السيارات الكهربائية معرفتها:\n\nالشحن السريع يزيد من درجة حرارة المكونات الداخلية بشكل ملحوظ.\nدرجة حرارة الطقس لها تأثير كبير على سعة بطارية السيارة الكهربائية، على سبيل المثال؛ انخفاض درجة الحرارة يؤثر سلبًا على مدى القيادة بسبب الحاجة إلى تشغيل نظام التدفئة.\nالمسافة المقطوعة: لا شك أن إجمالي المسافة المقطوعة يؤثر نوع السيارة أيضًا على سعة البطارية.\nشحن السيارات الكهربائية: محطات الشحن أم المنزل؟\n\nسُئل المشاركون في الاستطلاع عما إذا كانوا يفضلون شحن سياراتهم الكهربائية في محطات الشحن أم في المنزل، فأجاب 70% منهم بأنهم يفضلون الشحن في المنزل.\n\nتُعتبر السيارات الكهربائية خيارًا عمليًا، ولكن هل هي عملية؟\n\nوافق حوالي 65% من المشاركين على أن السيارات الكهربائية عملية، ومع ذلك، قال 73% منهم إنهم سيحتفظون بسيارة تعمل بالوقود إذا اشتروا سيارة كهربائية. هذه النسبة المرتفعة ممن يرغبون في الاحتفاظ بسيارة تعمل بالوقود عند شراء سيارة كهربائية، تُذكرنا بالنتيجة التي توصلنا إليها في الاستطلاع السابق والتي أشارت إلى أن 79% من المشاركين ليسوا مستعدين بعد للسيارات الكهربائية.\n\nما المشاكل التي يأمل مالكو سيارات الاحتراق الداخلي ألا تواجههم السيارات الكهربائية؟\n\nفي نهاية الاستطلاع، سألنا المشاركين عن المشاكل التي واجهوها مع سيارات الوقود، والتي يأملون في التخلص منها تمامًا من السيارات الكهربائية. تضمنت معظم الإجابات ما يلي:\n\nالصيانة الدورية، بما في ذلك تغيير الزيت، الفلاتر والملفات\nأعطال ميكانيكية متكررة\nارتفاع تكلفة البنزين\nخطر الاشتعال من البنزين\nارتفاع أسعار قطع الغيار",
    "image_url": "/assets/jadeer/corolla-cross-hybrid.jpg",
    "published_at": "2026-08-05"
  },
  {
    "title": "Jadeer Celebrates Saudi Arabia's 96th National Day",
    "title_ar": "جدير المتدة تحتفل بالعيد ال96 للمملكة العربية السعودية",
    "slug": "jadeer-celebrates-saudi-arabia-s-96th-national-day-22",
    "category": "Company News",
    "author": "Jadeer United",
    "author_ar": "جدير المتحدة",
    "read_time_minutes": 2,
    "excerpt": "Land of glory, and the splendor of the present and future!",
    "excerpt_ar": "أرض العز، ومجدِ الحاضر والمستقبل!",
    "body": "Land of glory, and the splendor of the present and future!\n\nOn Saudi National Day, we renew our pledge of allegiance to this pure land, and celebrate achievements that reach for the horizon and ambitions that know no bounds.\n\nMay you remain ever dear and proud, our Saudi Arabia, and may our leadership and our great people continue in perpetual glory and leadership. ✨\n\nHappy National Day to our beloved homeland!\n\n#SaudiNationalDay #WeDreamAndWeAchieve #SaudiArabia #Worthy",
    "body_ar": "أرض العز، ومجدِ الحاضر والمستقبل!\n\nفي اليوم الوطني السعودي، نجدد العهد والولاء لتراب هذا الوطن الطهور، ونحتفل بإنجازات تلبي الأفق وطموحات لا توقفها حدود.\n\nدمتِ يا سعوديتنا عزيزة شامخة، ودام قيادتنا وشعبنا العظيم في ريادة ومجد دائم. ✨\n\nكل عام ووطننا الغالي بألف خير!\n\n#اليوم_الوطني_السعودي #نحلم_ونحقق #السعودية #جدير",
    "image_url": "/assets/jadeer/jadeer-hq.jpg",
    "published_at": "2026-09-24"
  }
] as const;

export const REAL_REVIEWS = [
  {
    "company": "Snamprogetti S.A Ltd.",
    "employee": "MOHAMMAD MAHFOOZ AHMED",
    "position": "General Services Coordinator",
    "date_of_service": "2025-12-07",
    "vehicle_condition": 4,
    "price_satisfaction": 3,
    "staff_behavior": 2,
    "pickup_process": 2,
    "dropoff_process": 4,
    "cleanliness": 3,
    "value_for_money": 3,
    "overall": 3,
    "would_recommend": 1,
    "comment": "Dear Team, I wanted to take a moment to address an important area where we can improve our services and better meet the needs of our customers. Recently, we've received a significant number of complaints regarding the service of old vehicles. This is a matter that needs our immediate attention to ensure customer satisfaction and maintain our reputation.\n\nTo address this, I propose we implement a detailed service checklist for old vehicles. This checklist will help ensure that no steps are skipped during servicing, thereby reducing the likelihood of repeat complaints. \nAdditionally, we need to review and adjust our pricing strategy to ensure it aligns with the value we provide. Competitive and fair"
  },
  {
    "company": "Nesma United industries LTD",
    "employee": "Abdulaziz Alsufyani",
    "position": "Lease unit supervisor",
    "date_of_service": "2025-08-12",
    "vehicle_condition": 5,
    "price_satisfaction": 3,
    "staff_behavior": 4,
    "pickup_process": 3,
    "dropoff_process": 3,
    "cleanliness": 4,
    "value_for_money": 3,
    "overall": 4,
    "would_recommend": 1,
    "comment": "reduce tires change intervals to 45,000 km instead of 60,000 km"
  },
  {
    "company": "Pietro Fiorentini",
    "employee": "Ayman",
    "position": "Project Manager",
    "date_of_service": "2025-12-10",
    "vehicle_condition": 5,
    "price_satisfaction": 2,
    "staff_behavior": 5,
    "pickup_process": 5,
    "dropoff_process": 5,
    "cleanliness": 5,
    "value_for_money": 3,
    "overall": 3,
    "would_recommend": 1,
    "comment": "over all the cars rented from Jadeer are new cars. total 3 new cars and 1 used car.\nhowever still the prices comparing with other competitors are higher.\n\nwe are looking to have better prices to have more relation and long period agreement with Jadeer .\n\nthank you\nAyman"
  },
  {
    "company": "Naseem Energy Company",
    "employee": "Mohammed Saud Alharbi",
    "position": "GRO",
    "date_of_service": "2025-12-07",
    "vehicle_condition": 5,
    "price_satisfaction": 4,
    "staff_behavior": 5,
    "pickup_process": 4,
    "dropoff_process": 4,
    "cleanliness": 5,
    "value_for_money": 4,
    "overall": 5,
    "would_recommend": 1,
    "comment": "Consistent 5-star vehicle condition, staff professionalism, and reliable fleet operations."
  },
  {
    "company": "Worley",
    "employee": "Shawaz",
    "position": "Fleet Operations",
    "date_of_service": "2025-12-11",
    "vehicle_condition": 4,
    "price_satisfaction": 4,
    "staff_behavior": 5,
    "pickup_process": 5,
    "dropoff_process": 5,
    "cleanliness": 3,
    "value_for_money": 4,
    "overall": 4,
    "would_recommend": 1,
    "comment": "Excellent in -house and vehicle servicing team . Quality work and maintenance schedule is done professionally."
  }
] as const;
