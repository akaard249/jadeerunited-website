-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 21, 2026 at 01:28 AM
-- Server version: 10.11.19-MariaDB-cll-lve
-- PHP Version: 8.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `i10228867_i1g21`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_us`
--

CREATE TABLE `about_us` (
  `id` int(11) NOT NULL,
  `main_text_ar` text NOT NULL,
  `main_text_en` text NOT NULL,
  `article_p1_ar` text NOT NULL,
  `article_p1_en` text NOT NULL,
  `article_p2_ar` text NOT NULL,
  `article_p2_en` text NOT NULL,
  `quote_ar` text NOT NULL,
  `quote_en` text NOT NULL,
  `vision_ar` text NOT NULL,
  `vision_en` text NOT NULL,
  `mission_ar` text NOT NULL,
  `mission_en` text NOT NULL,
  `gallery` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `about_us`
--

INSERT INTO `about_us` (`id`, `main_text_ar`, `main_text_en`, `article_p1_ar`, `article_p1_en`, `article_p2_ar`, `article_p2_en`, `quote_ar`, `quote_en`, `vision_ar`, `vision_en`, `mission_ar`, `mission_en`, `gallery`) VALUES
(1, 'بُني من أجل , الأعمال السعودية , مدفوع بالثقة', 'Built for , Saudi Business, Driven by Trust', 'تأسست شركة جدير المتحدة عام 2009، وهي شركة رائدة في توفير حلول النقل في البحرين والمملكة العربية السعودية وسلطنة عُمان. نتخصص في تقديم خدمات نقل عالية الجودة ومستدامة ومبتكرة، مصممة خصيصًا لتلبية احتياجات الشركات والأفراد. يتمتع فريقنا الإداري بخبرة تزيد عن 25 عامًا في هذا المجال، مما يضمن التميز والموثوقية في كل ما نقدمه', 'Founded in 2009, Jadeer United stands as a premier transportation solution provider across Bahrain, Saudi Arabia, and Oman. we specialize in delivering high-quality, sustainable, and innovative transportation services tailored to the needs of both businesses and individual clients. Our management team brings more than 25 years of industry experience, ensuring excellence and reliability in all we do.', 'على مدى العقد التالي، تطورنا لنصبح المزود الرائد لخدمات التأجير التشغيلي بين الشركات في المملكة العربية السعودية، وتوسعنا إلى خمسة فروع في جميع أنحاء المملكة، وقمنا ببناء أسطول يضم أكثر من 3000 مركبة، وأقمنا شراكات طويلة الأجل مع أكثر من 100 عميل من الشركات في قطاعات تتراوح من البناء والخدمات اللوجستية إلى الضيافة والحكومة وما وراء ذلك.', 'Over the next decade, we evolved to become the leading provider of operational leasing services among businesses in Saudi Arabia, expanding to five branches across the Kingdom, building a fleet of over 3,000 vehicles, and establishing long-term partnerships with more than 100 corporate clients across sectors ranging from construction and logistics to hospitality, government, and beyond.', '\"لم نكن نريد بيع السيارات فحسب. أردنا تحرير الشركات من عبء الملكية - حتى تتمكن من التركيز كلياً على ما تجيده.\"', '\"\"We didn\'t just want to sell cars. We wanted to liberate companies from the burden of ownership - so they could focus entirely on what they do best.\"\"', '\"أن نكون روادًا في توفير حلول نقل مبتكرة وفعالة في البحرين والمملكة العربية السعودية وسلطنة عمان، مما يعزز نجاح الأعمال واستدامتها لشركائنا التجاريين\"', '\"To be a leader in providing innovative and efficient transportation solutions in Bahrain, Saudi Arabia and Oman, enhancing business success and sustainability for our business partners.\"', '\"تمكين الشركات من خلال حلول نقل فائقة الجودة، مع إعطاء الأولوية للجودة والموثوقية والاستدامة\"', '\"Empowering businesses with superior transportation solutions, prioritizing quality, reliability, and sustainability.\"', '[\"gallery\\/CJIBlQCiPGCC86JeYZUvInlCNODSD2g8k3i0ntWK.jpg\"]');

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(75) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `type` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `remember_token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `username`, `password`, `type`, `created_at`, `updated_at`, `remember_token`) VALUES
(2, 'Ahmed Ali', 'ahmed_ali', '$2y$12$R4zjvHrqgBWlB62UyDBbKuMsEHPrne/wcTRLoYIkd1KrktVJGM0zu', 5, '2025-09-17', '2025-09-17', ''),
(3, 'Mohammed Sabit', 'jadeer', '$2y$12$TgSNzoxoO5ClK23iwtVj9Oc/K.6m47Khx7549bwOXgG8UX/UyhMne', 1, '2025-09-23', '2025-09-23', ''),
(4, 'Nibras Jallad', 'nibras', '$2y$12$6p.L0kKTMoWHekv3u2MnWu6tpomL4f7Rw6xybnJ0gAybPgGVirV9a', 3, '2025-09-28', '2025-09-28', ''),
(5, 'Trading Department', 'trading', '$2y$12$7W5cOkDIWqFIHT447LX1eOcKYS3D7NasARKh/sTw0xuc1RMkz9wd2', 1, '2025-10-26', '2025-10-26', ''),
(7, 'Mohammed Sabit', 'sabit', '$2y$12$1IOfYW6ACtguL1eaCCbaq.m2OhesEYNu9mEC/hub09.z21J3XN0.y', 1, '2026-04-26', '2026-04-26', ''),
(9, 'Ahmed Ali', 'ahmed', '$2y$12$E0kAyCVMhzBme0/ZputuQu7zAkVL95R51Hkn4dFPcBk5VXR2dmRXK', 5, '2026-04-28', '2026-04-28', '');

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `title` mediumtext NOT NULL,
  `title_ar` mediumtext NOT NULL,
  `content` mediumtext NOT NULL,
  `content_ar` mediumtext NOT NULL,
  `img` mediumtext NOT NULL,
  `author` mediumtext NOT NULL,
  `author_ar` mediumtext NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `title_ar`, `content`, `content_ar`, `img`, `author`, `author_ar`, `created_at`, `updated_at`) VALUES
(4, 'Jadeer United – Driving Excellence in Saudi Arabia', 'جدير المتحدة – قيادة التميز في المملكة العربية السعودية', 'Jadeer United is redefining the automotive experience in Saudi Arabia. With a diverse range of vehicles and unmatched after-sales service, we deliver quality, trust, and innovation. Our commitment is to meet customer needs while shaping the future of mobility in the Kingdom. Excellence is our road, and you are our destination.', 'تُعيد شركة جدير المتحدة تعريف تجربة السيارات في المملكة العربية السعودية. مع تشكيلة متنوعة من السيارات وخدمة ما بعد البيع لا مثيل لها، نُقدم الجودة والثقة والابتكار. نلتزم بتلبية احتياجات عملائنا مع رسم ملامح مستقبل قطاع التنقل في المملكة. التميز طريقنا، وأنتم وجهتنا.', 'articles/SwpMAjMbjPOVEalXYkFJZ49VwkZY8mnuazk0Sjuk.jpg', 'Jadeer United', 'جدير المتحدة', '2025-08-18', '2025-08-18'),
(5, 'Jadeer & Hybrid Cars – Sustainable Mobility for the Future', 'السيارات الهجينة وجدير – تنقل مستدام للمستقبل', 'Jadeer United proudly supports Saudi Arabia’s green vision by offering advanced hybrid vehicles. Combining fuel efficiency with exceptional performance, our hybrids help drivers reduce emissions without compromising comfort. We aim to make sustainable driving accessible, helping customers embrace a cleaner, smarter future on the roads of the Kingdom.', 'تفخر شركة جدير المتحدة بدعم الرؤية الخضراء للمملكة العربية السعودية من خلال توفير سيارات هجينة متطورة. تجمع سياراتنا الهجينة بين كفاءة استهلاك الوقود والأداء الاستثنائي، مما يساعد السائقين على تقليل الانبعاثات دون المساس براحتهم. نهدف إلى جعل القيادة المستدامة في متناول الجميع، ومساعدة عملائنا على احتضان مستقبل أكثر نظافةً وذكاءً على طرق المملكة.', 'articles/6CSGJCqghzPLlgoiSjp9PWNB2EcRRGHtphiYuNG0.png', 'Jadeer United', 'جدير المتحدة', '2025-08-18', '2025-08-18'),
(6, 'Jadeer & Electric Cars – Powering a Greener Tomorrow', 'السيارات الكهربائية وجدير – نحو مستقبل أكثر اخضرارًا', 'At Jadeer United, we believe electric vehicles are the key to a sustainable future. Our growing EV lineup offers zero emissions, cutting-edge technology, and exceptional driving experiences. By promoting electric mobility, we contribute to Saudi Arabia’s environmental goals while empowering customers to embrace innovation and eco-conscious transportation.', 'في جدير المتحدة، نؤمن بأن المركبات الكهربائية هي مفتاح مستقبل مستدام. تقدم مجموعتنا المتنامية من المركبات الكهربائية انبعاثات صفرية، وتقنيات متطورة، وتجارب قيادة استثنائية. من خلال تعزيز التنقل الكهربائي، نساهم في تحقيق الأهداف البيئية للمملكة العربية السعودية، ونمكّن عملائنا من تبني الابتكار ووسائل النقل الصديقة للبيئة.', 'articles/XhNIryWmCw0SQS8kVcL33JGnnGaZxXGBUzRHJrhf.png', 'Jadeer United', 'جدير المتحدة', '2025-08-18', '2025-08-18'),
(7, 'Jadeer United Motors Celebrates KSA\'s 95th National Day', 'شركة جدير المتحدة للسيارات تحتفل باليوم الوطني الخامس والتسعين للمملكة العربية السعودية', 'Jadeer United proudly celebrates Saudi Arabia’s 95th National Day on September 23, 2025. The occasion highlights unity, progress, and the Kingdom’s Vision 2030 goals. Through automotive trading, leasing, and mobility solutions, Jadeer United supports the nation’s transformation journey by fostering innovation and empowering communities. The company expresses gratitude for past achievements, optimism for the future, and extends congratulations to King Salman and Crown Prince Mohammed bin Salman, reaffirming its commitment to the Kingdom’s continued prosperity.', 'تفتخر شركة جدير المتحدة بالاحتفال باليوم الوطني السعودي الـ95 في 23 سبتمبر 2025. ويجسد هذا اليوم معاني الوحدة والتقدم وأهداف رؤية المملكة 2030. ومن خلال أنشطتها في تجارة السيارات، التأجير، وحلول التنقل، تواصل جدير المتحدة دعم مسيرة التحول الوطني عبر تعزيز الابتكار وتمكين المجتمعات. وتؤكد الشركة امتنانها للإنجازات الماضية وتفاؤلها بالمستقبل، مهنئة خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز آل سعود وسمو ولي العهد الأمير محمد بن سلمان، ومجددة التزامها بمسيرة المملكة نحو الازدهار المستمر.', 'articles/qhwu9egWFMme342BwArrau6Ksy8p7bbuI1PdzSt1.png', 'Jadeer United', 'جدير المتحدة', '2025-09-01', '2025-09-01'),
(8, 'Toyota to revive the Land Cruiser FJ in 2026', 'تويوتا تُعيد إحياء لاندكروزر FJ في 2026', '\" The global and local automotive sector is anticipating the debut of an all-new generation of the Toyota Land Cruiser FJ sooner than expected. Japanese reports have revealed the vehicle\'s launch date is set for the second quarter of 2026 in Japan, with global markets arriving later. Experts expect this version to feature a modern design while retaining the legendary off-road performance and classic identity that previously distinguished the FJ, amid fierce competition in the small SUV segment \".', '\"يترقب قطاع السيارات العالمي والمحلي ظهور جيل جديد كلياً من تويوتا لاندكروزر FJ في وقت أقرب مما كان متوقعاً، حيث كشفت تقارير يابانية عن موعد إطلاق السيارة المرتقبة خلال الربع الثاني من 2026 في اليابان، مع وصولها لاحقاً إلى الأسواق العالمية. ويتوقع الخبراء بأن تقدم هذه النسخة تصميماً عصرياً مع الاحتفاظ بأسطورة الأداء في الطرق الوعرة والهوية الكلاسيكية التي ميزت FJ سابقاً، وسط منافسة شرسة في فئة السيارات الرياضية متعددة الاستخدامات الصغيرة. \"', 'articles/4POFsGuNUrzZL7X3H0Mn6OoFZKtQTvyNDZUhthiK.png', 'Amani Abahra : Sayarah.com', 'أماني عباهرة : موقع سيارة', '2025-10-12', '2025-10-12'),
(9, 'Hyundai\'s New Factory Launching in Saudi Arabia', 'مصنع هيونداي الجديد ينطلق من السعودية', 'In a historic move reflecting the industrial transformation underway in Saudi Arabia, the South Korean Hyundai Motor Group inaugurated its new factory at the King Salman Automotive Complex, marking a new phase in the local automotive industry. The official visit of the group\'s CEO, Euisun Chung, included high-level discussions with His Royal Highness Prince Mohammed bin Salman bin Abdulaziz Al Saud, Crown Prince and Prime Minister, aimed at establishing a joint strategy to support the goals of Vision 2030 and strengthen industrial and technological partnerships in the Saudi market.', 'في خطوة تاريخية تعكس التحول الصناعي الذي تشهده المملكة العربية السعودية، دشنت مجموعة هيونداي موتور الكورية مصنعها الجديد في مجمع الملك سلمان للسيارات، معلنة بذلك انطلاق مرحلة جديدة في قطاع صناعة السيارات المحلي. شهدت الزيارة الرسمية للرئيس التنفيذي للمجموعة، أويسون تشونغ، مناقشات رفيعة مع صاحب السمو الملكي الأمير محمد بن سلمان بن عبد العزيز آل سعود، ولي العهد ورئيس مجلس الوزراء، بهدف وضع أسس استراتيجية مشتركة تدعم أهداف رؤية المملكة 2030 وتعزز الشراكات الصناعية والتقنية في السوق السعودي.', 'articles/fw4VDAesCRADygzD2ywrz2J7iJVTW8WaHF6gX4Ja.png', 'Alaa\' Alezza - Sayarah.com  : https://syarah.com/carsguide/hyundai-new-plant-launches-saudi-arabia/', 'آلاء العزة - موقع سيارة : https://syarah.com/carsguide/hyundai-new-plant-launches-saudi-arabia/', '2025-11-02', '2025-11-02'),
(10, 'The Supra 2026 is Here', 'سوبرا 2026 هنا', 'The 2026 Toyota Supra has officially arrived in Saudi Arabia through Abdul Latif Jameel Motors, bringing with it a perfect blend of performance, style, and heritage. Powered by a 3.0-liter inline six-cylinder twin-scroll turbo engine producing 382 horsepower and 500 Nm of torque, the new Supra offers both 6-speed manual and 8-speed automatic options for driving enthusiasts. Its bold design, aerodynamic body, and 19-inch alloy wheels create an unmistakable sports presence, while a driver-focused cabin, premium materials, and modern infotainment features ensure a refined yet exhilarating experience.\r\n\r\nPriced from around SAR 276,000 (including VAT), the 2026 Supra combines cutting-edge technology with Toyota’s legendary reliability. It includes advanced safety systems like ABS, Vehicle Stability Control, and multiple airbags, making it as secure as it is powerful. Available in a range of eye-catching colors — including Matte Avalanche White, Volcanic Ash Gray, and Prominence Red — the Supra continues its legacy as Toyota’s ultimate performance coupe, designed for those who crave excitement on Saudi Arabia’s roads.', 'وصلت تويوتا سوبرا 2026 رسميًا إلى المملكة العربية السعودية عبر شركة عبد اللطيف جميل للسيارات، لتجمع بين الأداء والأناقة والتراث العريق. مزودة بمحرك توربو مزدوج التمرير سداسي الأسطوانات سعة 3.0 لتر، بقوة 382 حصانًا وعزم دوران يبلغ 500 نيوتن متر، توفر سوبرا الجديدة خياري ناقل حركة يدوي بست سرعات وناقل حركة أوتوماتيكي بثماني سرعات لعشاق القيادة. تصميمها الجريء، وهيكلها الانسيابي، وعجلاتها المعدنية قياس 19 بوصة، تمنحها حضورًا رياضيًا لا يُضاهى، بينما تضمن مقصورتها المصممة خصيصًا للسائق، وموادها الفاخرة، وأنظمة المعلومات والترفيه الحديثة تجربة قيادة راقية وممتعة.\r\n\r\n\r\nيبدأ سعر سوبرا 2026 من حوالي 276,000 ريال سعودي (شامل ضريبة القيمة المضافة)، وهي تجمع بين أحدث التقنيات وموثوقية تويوتا الأسطورية. تتضمن أنظمة أمان متطورة مثل نظام المكابح المانعة للانغلاق (ABS)، ونظام التحكم في ثبات السيارة، ووسائد هوائية متعددة، مما يجعلها قوية وآمنة على حد سواء. تتوفر سيارة Supra بمجموعة من الألوان الجذابة، بما في ذلك اللون الأبيض غير اللامع، والرمادي البركاني، والأحمر البارز، وتواصل إرثها كسيارة الكوبيه عالية الأداء المثالية من تويوتا، والمصممة لأولئك الذين يتوقون إلى الإثارة على طرق المملكة العربية السعودية.', 'articles/flT54A6ldg3KUs1KVFtuxIIkYwfzQm8sG05pkFU3.png', 'Jadeer United', 'جدير المتحدة', '2025-11-02', '2025-11-02'),
(11, 'The Kingdom accelerates automotive sector localization', 'المملكة العربية السعودية تسرع وتيرة توطين قطاع السيارات', 'Saudi Arabia’s automotive sector localization is fast on track as part of the government’s efforts to achieve its Vision 2030 targets, according to a senior official.  \r\n\r\nAt the Saudi-American Business Council seminar, Aftab Ahmed, a senior adviser to the Kingdom’s National Center for Industrial Development in the automotive sector, underscored the rapid transition toward domestic production of passenger vehicles and parts.  \r\n\r\nHe stated that this effort aligns with the ambitious objectives outlined in the National Industrial Strategy under Saudi Vision 2030, the Saudi Press Agency reported.   \r\n\r\nThe council, in collaboration with the NCID, recently hosted a virtual seminar on the future of the Kingdom’s automotive sector.   \r\n\r\nOver 100 industry leaders from Saudi Arabia and the US convened to discuss various aspects of the sector, including government initiatives, investment standards, and operational experiences within the Kingdom.  \r\n\r\nThe event facilitated the exchange of insights and opportunities in this rapidly evolving field.', 'يسير توطين قطاع السيارات في المملكة العربية السعودية بخطى سريعة في إطار جهود الحكومة لتحقيق أهداف رؤية 2030، وفقًا لمسؤول رفيع المستوى.\r\n\r\nفي ندوة مجلس الأعمال السعودي الأمريكي، أكد أفتاب أحمد، كبير مستشاري المركز الوطني لتطوير الصناعة في قطاع السيارات بالمملكة، على التحول السريع نحو الإنتاج المحلي لسيارات الركاب وقطع الغيار.\r\n\r\nوأفاد بأن هذا الجهد يتماشى مع الأهداف الطموحة المحددة في الاستراتيجية الصناعية الوطنية ضمن رؤية السعودية 2030، وفقًا لوكالة الأنباء السعودية.\r\n\r\nاستضاف المجلس، بالتعاون مع المركز الوطني لتطوير الصناعة، مؤخرًا ندوة افتراضية حول مستقبل قطاع السيارات في المملكة.\r\n\r\nاجتمع أكثر من 100 من قادة الصناعة من المملكة العربية السعودية والولايات المتحدة لمناقشة جوانب مختلفة من هذا القطاع، بما في ذلك المبادرات الحكومية، ومعايير الاستثمار، والتجارب التشغيلية داخل المملكة.\r\n\r\nسهّل هذا الحدث تبادل الأفكار والفرص في هذا المجال سريع التطور.', 'articles/CtEf1qS5FjRw20SSOJiewiL0Yzxycc8iiitUCMP8.jpg', 'Arab News : https://www.arabnews.com/node/2496626/business-economy', 'العربية نيوز : https://www.arabnews.com/node/2496626/business-economy', '2025-11-10', '2025-11-10'),
(12, 'Next generation REEV hybrid cars debut at Riyadh’s EV Auto Show', 'سيارات REEV الهجينة من الجيل القادم تظهر لأول مرة في معرض الرياض للسيارات الكهربائية', 'The Saudi automotive market is welcoming a new generation of hybrid vehicles equipped with advanced Range-Extended Electric Vehicle technology. \r\n\r\nAlthough this technology has previously been introduced in the Kingdom, the latest models showcased at the EV Auto Show Riyadh 2025 feature significant upgrades in efficiency, performance, and driving range.\r\n\r\nAmong the standout participants was Rox Motors, a fast-growing Chinese automaker that unveiled its latest hybrid model — the Adamas — featuring an evolved version of REEV technology.\r\n\r\nAhmed Al-Obaidi, CEO of Rox KSA,  explained that the system combines the practicality of traditional fuel with the efficiency of electric power.\r\n\r\n“Our REEV technology allows gasoline to generate electricity directly,” Al-Obaidi said. “Part of the fuel powers a generator that charges the battery, while another portion goes into the extender, which increases the electric output and provides power to the car. \r\n\r\n“This hybrid approach is a fast way to combine electric and gas technology — ideal for the Saudi market.”', 'يستقبل سوق السيارات السعودي جيلاً جديداً من السيارات الهجينة المجهزة بتقنية المركبات الكهربائية ذات المدى الموسع المتقدمة.\r\n\r\nعلى الرغم من طرح هذه التقنية سابقاً في المملكة، إلا أن أحدث الطرازات المعروضة في معرض السيارات الكهربائية الرياض 2025 تتميز بتحسينات كبيرة في الكفاءة والأداء ومدى القيادة.\r\n\r\nومن بين أبرز المشاركين شركة روكس موتورز، وهي شركة صناعة سيارات صينية سريعة النمو، كشفت عن أحدث طراز هجين لها - أداماس - المزود بنسخة متطورة من تقنية REEV.\r\n\r\nوأوضح أحمد العبيدي، الرئيس التنفيذي لشركة روكس السعودية، أن النظام يجمع بين العملية التي يوفرها الوقود التقليدي وكفاءة الطاقة الكهربائية.\r\n\r\nوقال العبيدي: \"تتيح تقنية REEV الخاصة بنا للبنزين توليد الكهرباء مباشرةً. يُشغّل جزء من الوقود مولداً يشحن البطارية، بينما يدخل جزء آخر إلى مُوسّع الطاقة، مما يزيد من الناتج الكهربائي ويوفر الطاقة للسيارة.\r\n\r\nويُعدّ هذا النهج الهجين طريقة سريعة للجمع بين تقنيتي الكهرباء والغاز - وهو مثالي للسوق السعودية\".', 'articles/N3NH1hsDcT0FYf3xK99EZMpCIIVLbnZxTM8I8Px2.jpg', 'Arab News : https://arab.news/zfw9f', 'عرب نيوز : https://arab.news/zfw9f', '2025-11-19', '2025-11-19'),
(13, 'A New Era for Ford in the Kingdom', 'عهد جديد لشركة فورد في المملكة', 'Ford Saudi Arabia 2025 marks a pivotal moment for the brand. With double-digit sales growth, exciting new product launches, and connected technologies on the way, Ford is doubling down on its commitment to Saudi customers and its role in shaping the country’s automotive future.\r\n\r\nIn the first eight months of 2025, Ford achieved a 16% increase in year-to-date sales compared to the same period in 2024, making this its strongest August since 2016. This milestone cements Ford’s status as a key player in Saudi Arabia’s rapidly evolving market.\r\nFord’s sales performance in Saudi Arabia has been nothing short of exceptional.\r\n\r\n    Year-to-date sales are up 16% compared to August 2024.\r\n\r\n    August 2025 was the strongest August since 2016.\r\n\r\n    Ford now ranks fifth overall by sales volume in the Kingdom.\r\n\r\nThe Taurus, Territory, and Everest remain Ford’s top-selling models, demonstrating the strength and breadth of the lineup. Ravi Ravichandran, President of Ford Middle East and North Africa, emphasized:\r\n\r\n    “Saudi Arabia is our largest market in MENA, and we’ve consolidated our position among the top five automakers despite increased competition. This success reflects the dedication of our teams and distributor partners, and the trust customers place in Ford.”\r\n\r\nThis impressive performance is part of a multi-year growth trajectory, with nearly 140% regional growth recorded over the past three years.', 'تُمثل رؤية فورد السعودية 2025 نقطة تحول في مسيرة فورد. فمع نمو مبيعاتها بنسبة تفوق 10%، وإطلاق منتجات جديدة ومميزة، وتقنيات الاتصال المتطورة، تُعزز فورد التزامها تجاه العملاء السعوديين ودورها في رسم ملامح مستقبل قطاع السيارات في المملكة.\r\n\r\nفي الأشهر الثمانية الأولى من عام 2025، حققت فورد زيادة بنسبة 16% في مبيعاتها السنوية حتى تاريخه مقارنةً بالفترة نفسها من عام 2024، مما يجعل شهر أغسطس هذا هو الأقوى لها منذ عام 2016. ويُرسخ هذا الإنجاز مكانة فورد كلاعب رئيسي في سوق المملكة العربية السعودية سريع التطور.\r\n\r\nكان أداء مبيعات فورد في المملكة العربية السعودية استثنائيًا بكل المقاييس.\r\n\r\nارتفعت مبيعاتها السنوية حتى تاريخه بنسبة 16% مقارنةً بشهر أغسطس 2024.\r\n\r\nكان شهر أغسطس 2025 هو الأقوى لشهر أغسطس منذ عام 2016.\r\n\r\nتحتل فورد الآن المرتبة الخامسة من حيث حجم المبيعات في المملكة.\r\n\r\nلا تزال طرازات توروس وتيريتور وإيفرست الأكثر مبيعًا لدى فورد، مما يُظهر قوة وتنوع تشكيلة سياراتها. وأكد رافي رافيشاندران، رئيس فورد الشرق الأوسط وشمال أفريقيا، قائلاً:\r\n\r\n\"تُعدّ المملكة العربية السعودية أكبر أسواقنا في منطقة الشرق الأوسط وشمال أفريقيا، وقد رسّخنا مكانتنا بين أفضل خمس شركات تصنيع سيارات رغم المنافسة الشديدة. يعكس هذا النجاح تفاني فرق عملنا وشركائنا من الموزعين، والثقة التي يضعها عملاؤنا في فورد.\"\r\n\r\nيُعدّ هذا الأداء المتميز جزءًا من مسار نموّ متواصل على مدار سنوات، حيث سُجّل نموّ إقليمي بنسبة تقارب 140% خلال السنوات الثلاث الماضية.', 'articles/9a6qEbo9TFGhSvvr1MtK0VTYj26ZkmnkTF9G5JxV.webp', 'abd alqadeer : https://saudiauto.com.sa/en/ford-saudi-arabia-2025', 'عبد القدير : https://saudiauto.com.sa/en/ford-saudi-arabia-2025', '2025-11-25', '2025-11-25'),
(14, 'Škoda Auto enters Saudi Arabian market, strengthening its presence in the Middle East', 'سكودا أوتو تدخل سوق المملكة العربية السعودية، مما يعزز وجودها في الشرق الأوسط', 'Škoda Auto is advancing its internationalisation strategy by entering the fast-growing Saudi Arabian market in partnership with SAMACO Motors, which has represented other Volkswagen Group brands in the country for more than 15 years. The portfolio includes the Octavia hatchback and the Kushaq, Karoq and Kodiaq SUVs. The Superb hatchback and Combi estate will follow soon. Looking ahead to 2026, Škoda will also introduce the Slavia compact saloon to meet strong demand in the segment in the Saudi Arabian market. The first two state-of-the-art retail sites will open by the end of the year in Jeddah and Al Khobar, with a flagship outlet in Riyadh scheduled for 2026.\r\nŠkoda Auto intends to target primarily young drivers and families in larger cities in Saudi Arabia. To maximise synergies and capture growth potential – given the current level of only 156 vehicles per 1,000 inhabitants – Škoda Auto has established a Škoda Middle East office as part of Volkswagen Group Middle East (VWGME), which leads Škoda’s growth plans and coordinates the brand’s activities in the region.\r\nŠkoda Auto’s entry into Saudi Arabia marks the next strategic step in the Middle East. In the first half of 2025, the car manufacturer entered the Omani market, restarted operations in Qatar and opened two new state-of-the-art showrooms in the United Arab Emirates. With Saudi Arabia now joining this rapidly growing network, Škoda Auto continues to strengthen its presence across the region, introducing a comprehensive model line-up that includes the Octavia, Superb, Karoq and Kodiaq, along with the Kushaq SUV and the Slavia saloon.\r\nTo achieve its ambitious goals in the region, Škoda is entering a strategic partnership with SAMACO Motors, a member of the Al Nahla Group. The two showrooms, covering more than 1,200 m², will open in Jeddah and Al Khobar by the end of 2025. A flagship outlet in the capital, Riyadh, will follow in 2026.\r\n\r\nFounded in 1930, the Al Nahla Group is one of the longest-established trading companies in the Kingdom. SAMACO Motors, established in 1978, is a leading car importer and distributor in Saudi Arabia. For more than 15 years, it has served as the exclusive representative for Audi, Volkswagen and Porsche, and has recently added Bentley and Lamborghini to its portfolio.', 'تعمل سكودا أوتو على تطوير استراتيجيتها للتدويل من خلال دخول سوق المملكة العربية السعودية سريع النمو بالشراكة مع ساماكو موتورز، التي مثلت العلامات التجارية الأخرى لمجموعة فولكس فاجن في البلاد لأكثر من 15 عامًا. وتشمل المحفظة سيارة أوكتافيا هاتشباك وسيارات الدفع الرباعي كوشاك وكاروك وكودياق. ستتبعها هاتشباك الرائعة وكومبي إستيت قريبًا. وبالنظر إلى عام 2026، ستقدم سكودا أيضًا سيارة الصالون المدمجة سلافيا لتلبية الطلب القوي في هذا القطاع في سوق المملكة العربية السعودية. وسيتم افتتاح أول موقعين حديثين للبيع بالتجزئة بحلول نهاية العام في جدة والخبر، ومن المقرر افتتاح منفذ رئيسي في الرياض في عام 2026.\r\nتعتزم سكودا أوتو استهداف السائقين الشباب والعائلات في المقام الأول في المدن الكبرى في المملكة العربية السعودية. ولتحقيق أقصى قدر من التآزر والاستفادة من إمكانات النمو - بالنظر إلى المستوى الحالي الذي يبلغ 156 سيارة فقط لكل 1000 نسمة - أنشأت سكودا أوتو مكتب سكودا في الشرق الأوسط كجزء من مجموعة فولكس فاجن الشرق الأوسط (VWGME)، الذي يقود خطط نمو سكودا وينسق أنشطة العلامة التجارية في المنطقة.\r\nيمثل دخول سكودا أوتو إلى المملكة العربية السعودية الخطوة الإستراتيجية التالية في الشرق الأوسط. وفي النصف الأول من عام 2025، دخلت الشركة المصنعة للسيارات السوق العماني، واستأنفت عملياتها في قطر وافتتحت صالتين عرض جديدتين على أحدث طراز في دولة الإمارات العربية المتحدة. ومع انضمام المملكة العربية السعودية الآن إلى هذه الشبكة سريعة النمو، تواصل سكودا أوتو تعزيز حضورها في جميع أنحاء المنطقة، حيث تقدم مجموعة طرازات شاملة تشمل أوكتافيا، وسوبرب، وكاروك، وكودياق، إلى جانب سيارة الدفع الرباعي Kushaq وصالون سلافيا.\r\nولتحقيق أهدافها الطموحة في المنطقة، تدخل سكودا في شراكة استراتيجية مع شركة ساماكو موتورز، عضو مجموعة النهلة. وسيتم افتتاح صالتي العرض، اللتين تغطيان أكثر من 1200 متر مربع، في جدة والخبر بحلول نهاية عام 2025. وسيتبعهما منفذ رئيسي في العاصمة الرياض في عام 2026.\r\n\r\nتأسست مجموعة النهلة عام 1930، وهي واحدة من أقدم الشركات التجارية في المملكة. تأسست شركة ساماكو للسيارات عام 1978، وهي إحدى الشركات الرائدة في مجال استيراد وتوزيع السيارات في المملكة العربية السعودية. لأكثر من 15 عامًا، عملت كممثل حصري لأودي وفولكس واجن وبورش، وقد أضافت مؤخرًا بنتلي ولامبورجيني إلى محفظتها.', 'articles/QQLEjJMTh2O80DX0S8AYkd3GyMHVQkaJiWXV1zfw.webp', 'Mladá Boleslav, https://www.skoda-storyboard.com/en/press-releases/skoda-auto-enters-saudi-arabian-market-strengthening-its-presence-in-the-middle-east/', 'Mladá Boleslav, https://www.skoda-storyboard.com/en/press-releases/skoda-auto-enters-saudi-arabian-market-strengthening-its-presence-in-the-middle-east/', '2025-12-14', '2025-12-14'),
(15, 'Saudis account for 70% of Lucid’s workforce in Saudi Arabia, official says', 'إن السعوديين يشكلون 70% من القوى العاملة لشركة لوسيد في المملكة العربية السعودية.', 'DAMMAM: Saudis make up 70 percent of Lucid Motors’ workforce in Riyadh and King Abdullah Economic City, Faisal Sultan, the company’s Middle East president, told Al-Eqtisadiah. \r\n\r\nSultan explained that the company runs an annual program to develop local talent, sending Saudi employees to the US to gain advanced manufacturing skills and expertise before returning to apply and transfer that knowledge in Saudi Arabia, strengthening local capabilities and industrial value chains. \r\n\r\nHe further said that the Saudization rate is expected to rise in the coming years, alongside the planned expansion of production at the AMP-2 plant, which will create thousands of new job opportunities, adding that the company anticipates hiring an increasing number of Saudis as production ramps up. \r\n\r\nSultan highlighted Lucid’s leadership in advanced manufacturing in Saudi Arabia, noting that the company has established a strong industrial presence through its AMP-2 plant at the King Salman Automotive Cluster in King Abdullah Economic City. \r\n\r\nSpanning 1.3 million sq. meters, the facility is a central pillar of the company’s plans to boost production capacity and expand local industrial operations. \r\n\r\nLast week, Lucid CEO Marc Winterhoff told Al-Eqtisadiah that the company attracted new institutional investors over the past six months, including a $300 million investment from Uber, adding that talks are ongoing with other investment institutions and players for additional funding in the near future. \r\n\r\nHe highlighted that the company is working to double production capacity, noting that Lucid doubled its output in the US this year, with further increases planned for next year. \r\n\r\nThe new Saudi plant, Winterhoff added, is expected to begin operations by the end of next year and continue into 2026, forming a key part of Lucid’s expansion plans for 2027 with the launch of its new mid-size platform, emphasizing that this will result in a significant jump in production compared with current levels. \r\n\r\nRegarding competition in the EV market, the CEO said Lucid is not targeting the low-price segment locally or globally and will maintain its position in the premium category. \r\n\r\nHe added that the new platform will deliver a mid-size vehicle priced at $50,000, describing it as a broadly accessible segment. However, he stressed that the company will not compete with low-priced Chinese imports, given the level of support those vehicles receive. \r\n\r\nWinterhoff previously projected that Saudi Arabia’s EV market will grow at an annual rate of six percent through 2030, reaching sales of between 210,000 and 250,000 vehicles per year.', 'الدمام: صرّح فيصل سلطان، رئيس شركة لوسيد موتورز في الشرق الأوسط، لصحيفة الاقتصادية، بأن السعوديين يشكلون 70% من القوى العاملة في الشركة بالرياض ومدينة الملك عبد الله الاقتصادية.\r\n\r\nوأوضح سلطان أن الشركة تُدير برنامجًا سنويًا لتطوير الكفاءات المحلية، حيث تُرسل موظفين سعوديين إلى الولايات المتحدة لاكتساب مهارات وخبرات متقدمة في مجال التصنيع، قبل عودتهم لتطبيق هذه المعرفة ونقلها إلى المملكة العربية السعودية، مما يُعزز القدرات المحلية وسلاسل القيمة الصناعية.\r\n\r\nوأضاف أن نسبة التوطين من المتوقع أن ترتفع في السنوات المقبلة، بالتزامن مع التوسع المُخطط له في إنتاج مصنع AMP-2، والذي سيُوفر آلاف فرص العمل الجديدة، مُشيرًا إلى أن الشركة تتوقع توظيف عدد متزايد من السعوديين مع زيادة الإنتاج.\r\n\r\nوسلّط سلطان الضوء على ريادة لوسيد في مجال التصنيع المتقدم في المملكة العربية السعودية، مُشيرًا إلى أن الشركة رسّخت وجودًا صناعيًا قويًا من خلال مصنعها AMP-2 في مُجمّع الملك سلمان للسيارات بمدينة الملك عبد الله الاقتصادية.\r\n\r\nيمتد المصنع الجديد على مساحة 1.3 مليون متر مربع، ويُعدّ ركيزة أساسية في خطط الشركة لتعزيز طاقتها الإنتاجية وتوسيع عملياتها الصناعية المحلية.\r\n\r\nفي الأسبوع الماضي، صرّح مارك وينترهوف، الرئيس التنفيذي لشركة لوسيد، لصحيفة الاقتصادية، بأن الشركة استقطبت مستثمرين مؤسسيين جدد خلال الأشهر الستة الماضية، بما في ذلك استثمار بقيمة 300 مليون دولار من شركة أوبر، مضيفًا أن المحادثات جارية مع مؤسسات استثمارية أخرى وجهات فاعلة للحصول على تمويل إضافي في المستقبل القريب.\r\n\r\nوأكد وينترهوف أن الشركة تعمل على مضاعفة طاقتها الإنتاجية، مشيرًا إلى أن لوسيد ضاعفت إنتاجها في الولايات المتحدة هذا العام، مع خطط لزيادة الإنتاج بشكل أكبر في العام المقبل.\r\n\r\nوأضاف وينترهوف أن المصنع السعودي الجديد من المتوقع أن يبدأ عملياته بحلول نهاية العام المقبل ويستمر حتى عام 2026، ليشكل جزءًا رئيسيًا من خطط لوسيد التوسعية لعام 2027 مع إطلاق منصتها الجديدة متوسطة الحجم، مؤكدًا أن ذلك سيؤدي إلى قفزة كبيرة في الإنتاج مقارنة بالمستويات الحالية.\r\n\r\nفيما يتعلق بالمنافسة في سوق السيارات الكهربائية، صرّح الرئيس التنفيذي لشركة لوسيد بأن الشركة لا تستهدف شريحة السيارات منخفضة السعر محليًا أو عالميًا، وستحافظ على مكانتها في فئة السيارات الفاخرة.\r\n\r\nوأضاف أن المنصة الجديدة ستُنتج سيارة متوسطة الحجم بسعر 50,000 دولار أمريكي، واصفًا إياها بأنها شريحة متاحة على نطاق واسع. ومع ذلك، أكد أن الشركة لن تُنافس السيارات الصينية المستوردة منخفضة السعر، نظرًا لمستوى الدعم الذي تحظى به هذه السيارات.\r\n\r\nوكان وينترهوف قد توقع سابقًا أن ينمو سوق السيارات الكهربائية في المملكة العربية السعودية بمعدل سنوي قدره 6% حتى عام 2030، ليصل حجم المبيعات إلى ما بين 210,000 و250,000 سيارة سنويًا.', 'articles/acE6zuVn8P9WqMA4ynsot1eW5RzsVELpx36zlQiU.jpg', 'ABDULAZIZ AL-FAKI - Arab News : https://arab.news/w3pz2', 'عبد العزيز الفكي – عرب نيوز : https://arab.news/w3pz2', '2025-12-17', '2025-12-17'),
(16, 'Toyota announced the sixth generation of the 2026 RAV4 Hybrid', 'تويوتا تكشف عن الجيل السادس من 2026 RAV4 hybrid', 'Toyota has unveiled the all-new 2026 RAV4, the sixth generation of one of the world’s best-selling SUVs, with total sales exceeding 15 million units since its launch in 1994.\r\n\r\nThe 2026 RAV4 features comprehensive updates encompassing design, performance, digital technologies, and advanced safety systems.\r\n\r\nA new exterior design reflects the RAV4’s strong identity.\r\n\r\nThe 2026 RAV4 boasts a robust and stylish exterior design that reflects its sporty character and off-road capabilities, while maintaining similar dimensions to the previous generation.\r\n\r\nThe design features a powerful front end and a new badge, while the interior enhances the feeling of spaciousness and luxury, supported by high-quality materials and a more comfortable and intelligent driving experience.\r\n\r\nPlug-in hybrid technology.\r\n\r\nThe new RAV4 will be available in Europe in only two versions: conventional hybrid and plug-in hybrid (PHEV), as part of Toyota’s multi-path strategy to achieve carbon neutrality.\r\n\r\nThe PHEV version is equipped with a high-capacity lithium-ion battery (22.7 kWh), providing an electric driving range of up to 100 km according to the WLTP cycle, which is among the longest in the plug-in hybrid SUV category.', 'كشفت شركة تويوتا اليابانية عن سيارة RAV4 2026 الجديدة كليًا، والتي تمثل الجيل السادس من واحدة من أكثر سيارات الدفع الرباعي مبيعًا عالميًا، بإجمالي مبيعات تجاوز 15 مليون سيارة منذ إطلاقها عام 1994.\r\n\r\nوتأتي RAV4 2026 بتحديثات شاملة تشمل التصميم، والأداء، والتقنيات الرقمية، إلى جانب أنظمة السلامة المتطورة.\r\n\r\nتصميم خارجي جديد يعكس هوية RAV4 القوية\r\nتعتمد RAV4 2026 تصميمًا خارجيًا متينًا وأنيقًا يعكس طابعها الرياضي وقدرتها على الطرق الوعرة، مع الحفاظ على أبعاد مماثلة للجيل السابق.\r\nيتميز التصميم بمقدمة قوية وشعار جديد، بينما تعزز المقصورة الداخلية شعورًا بالرحابة والفخامة، مدعومة بتجهيزات عالية الجودة وتجربة قيادة أكثر راحة وذكاء.\r\n\r\nتقنيات هجينة قابلة للشحن\r\nتتوفر RAV4 الجديدة في أوروبا بإصدارين فقط: الهجينة التقليدية والهجينة القابلة للشحن (PHEV)، في إطار استراتيجية تويوتا متعددة المسارات لتحقيق الحياد الكربوني.\r\n\r\nتم تزويد نسخة PHEV ببطارية ليثيوم-أيون عالية السعة (22.7 كيلوواط/ساعة)، توفّر مدى قيادة كهربائي يصل إلى 100 كم وفق دورة WLTP، وهي من بين الأطول في فئة سيارات الدفع الرباعي الهجينة القابلة للشحن.', 'articles/qYOpARhzDOjPg7SYFsUFKvJB60ZAr093DDaGxIJl.jpg', 'الوئام', 'WEAM NEWS', '2026-02-24', '2026-02-24'),
(17, 'Nissan Unveils Two New Models: The Juke EV & X-Trail Hybrid', 'نيسان تكشف النقاب عن طرازين جديدين: جوك الكهربائية وإكس-تريل الهجينة', 'Nissan has recently revealed two new SUVs called the Juke EV and the X-Trail hybrid at the 2026 Vision Global Business Outlook Event held by Nissan. The Juke EV is now in its third generation, and it looks fresher than ever before. Similarly, the fourth-gen X-Trail with a hybrid powertrain is currently the first time this model has gotten a hybrid powertrain. Overall, the models are designed to reflect a youthful energy and practical drivability.\r\n\r\nThe Juke has always been known for its funky styling, and Nissan has taken that trope to the next level with this third-generation model. The car sports an unconventional design that’s both modern and futuristic. The blacked-out bonnet and roof do add a genuine contrast to the neon green paint job of the car. Other exterior design highlights include a split-headlight setup and asymmetrically styled alloy wheels.\r\n\r\nThe car is supposed to use the same platform as the Nissan LEAF, which is a globally recognised, award-winning car. The powertrain details of the Nissan Juke EV have not been revealed yet. However, the Juke EV could see the LEAF’s 52kWh and 75kWh battery options offered. Both these options are paired with a front-mounted motor.\r\n\r\nThe X-Trail is known as the Rogue in some markets; it is a much more conventional car compared to the new-generation Juke EV. The sleek and fashionable design of the X-Trail is certainly misleading, considering the name suggests a rugged off-road SUV. Nonetheless, the hexagonal DRLs and the large blacked-out housing that holds the headlights are modern and stylish. \r\n\r\nThe powertrain details of the new X-Trail are known, and it will come with a Nissan e-POWER series hybrid setup. The wheels will be primarily powered by the electric motors, and the combustion engine will serve as a generator. Further details are not known currently.', 'كشفت نيسان مؤخرًا عن سيارتين رياضيتين متعددتي الاستخدامات جديدتين، هما جوك الكهربائية وإكس-تريل الهجينة، خلال فعالية \"رؤية 2026 العالمية لتوقعات الأعمال\" التي نظمتها الشركة. تُعدّ جوك الكهربائية الآن في جيلها الثالث، وتتميز بتصميم أكثر حداثة من أي وقت مضى. وبالمثل، تُعتبر إكس-تريل من الجيل الرابع، المزودة بمحرك هجين، أول سيارة من هذا الطراز تُطرح بمحرك هجين. بشكل عام، صُممت السيارتان لتعكسا حيوية الشباب وسهولة القيادة العملية.\r\n\r\nلطالما اشتهرت جوك بتصميمها الجريء والمميز، وقد ارتقى نيسان بهذا التصميم إلى مستوى جديد مع هذا الجيل الثالث. تتميز السيارة بتصميم غير تقليدي يجمع بين الحداثة والتطلع للمستقبل. يُضفي غطاء المحرك والسقف باللون الأسود تباينًا لافتًا مع لونها الأخضر النيون. تشمل أبرز ملامح التصميم الخارجي الأخرى المصابيح الأمامية المنقسمة والعجلات المعدنية غير المتماثلة.\r\n\r\nمن المفترض أن تستخدم السيارة نفس قاعدة نيسان ليف، وهي سيارة عالمية حائزة على جوائز مرموقة. لم تُكشف بعد تفاصيل نظام الدفع في نيسان جوك الكهربائية. مع ذلك، من المتوقع أن تُطرح جوك الكهربائية بخياري بطارية 52 كيلوواط/ساعة و75 كيلوواط/ساعة، وهما نفس خياري بطارية نيسان ليف. ويُقترن كلا الخيارين بمحرك أمامي.\r\n\r\nتُعرف نيسان إكس-تريل باسم روغ في بعض الأسواق؛ وهي سيارة أكثر تقليدية مقارنةً بجيل جوك الكهربائية الجديد. قد يكون تصميم إكس-تريل الأنيق والعصري مُضللاً بعض الشيء، إذ يوحي اسمها بأنها سيارة دفع رباعي قوية مُخصصة للطرق الوعرة. ومع ذلك، فإن مصابيح الإضاءة النهارية سداسية الشكل والغطاء الأسود الكبير الذي يضم المصابيح الأمامية يُضفيان عليها لمسة عصرية وأنيقة.\r\n\r\nأما تفاصيل نظام الدفع في إكس-تريل الجديدة فهي معروفة، وستأتي بنظام هجين من سلسلة نيسان e-POWER. وستُغذى العجلات بشكل أساسي بالمحركات الكهربائية، بينما سيعمل محرك الاحتراق الداخلي كمولد كهربائي. ولا تتوفر حاليًا أي تفاصيل أخرى.', 'articles/sE15vEiEmRrPCJKJotxUaSKAsvq3iqbx5MmUq2BN.png', 'Hassan Al-Shehri - Gogomotor.com', 'حسن الشهري - منصة قوقو موتور', '2026-04-19', '2026-04-19'),
(18, '2026 Mitsubishi Triton Officially Revealed To Debut Next Month', 'تم الكشف رسمياً عن سيارة ميتسوبيشي تريتون 2026، ومن المقرر طرحها لأول مرة الشهر المقبل.', 'Mitsubishi teased the new Triton Raider model just a few days ago. Now the model has been officially revealed, and it has a quick debut timeline of just a month from now. There are some exciting new revelations about the model, and it certainly makes the car more enticing. Firstly, the car has been modified by Premcar, the company that also modifies the Nissan Navara and Patrol Warriors. The team at Mitsubishi has said that this new flagship Triton has focused on enhancements, where it matters the most.\r\nOne of the biggest changes made to the car by Premcar is the suspension change. The new model will get a new front and rear damper package that’s aimed at improving ride comfort and vehicle control. The suspension is also aimed at improving the vehicle’s driveability across a wide variety of surfaces.\r\nTo ensure the model is truly tested and ready, it has undergone testing in the Australian outback of around 7,000 km in 18 months. The model will feature Bridgestone Dueler A/T 002 tyres. There are not many design changes specifically on this model to ensure it can appeal to a wide range of audience. A clean car also lets buyers customise their rides as they please.\r\n\r\n​\r\n\r\nOne of the more interesting features of the Triton Raider is its Telstra 4G mobile data connectivity. This will allow the car to make SOS calls in emergencies, track the vehicle, impose curfews, set geofences, and even trigger overspeed alerts. These security features certainly make the car better for off-road and adventure riding.\r\n\r\n​\r\n\r\nLastly, Mitsubishi will offer a five-year or 100,000 km warranty, whichever comes first. You can increase it to 10 years or 200,000 km when you service the car exclusively through the brand’s dealership network.', 'شوّقت ميتسوبيشي قبل أيام قليلة لطراز تريتون رايدر الجديد. والآن، تم الكشف عنه رسميًا، ومن المقرر إطلاقه قريبًا خلال شهر واحد فقط. يحمل هذا الطراز الجديد بعض المعلومات المثيرة التي تجعله أكثر جاذبية. أولًا، خضعت السيارة لتعديلات من شركة بريمكار، الشركة التي تُعدّل أيضًا نيسان نافارا وباترول واريورز. وقد صرّح فريق ميتسوبيشي بأن تريتون الجديدة الرائدة ركّزت على التحسينات في الجوانب الأكثر أهمية.\r\n\r\nمن أبرز التغييرات التي أجرتها بريمكار على السيارة هو نظام التعليق. سيحصل الطراز الجديد على حزمة جديدة من المخمدات الأمامية والخلفية تهدف إلى تحسين راحة الركوب والتحكم بالسيارة. كما يهدف نظام التعليق إلى تحسين أداء السيارة على مختلف أنواع الطرق.\r\n\r\nولضمان جاهزية الطراز واختباره بدقة، خضع لاختبارات في المناطق النائية الأسترالية لمسافة تقارب 7000 كيلومتر على مدار 18 شهرًا. وسيُزوّد ​​الطراز بإطارات بريدجستون ديولر A/T 002. لم تُجرَ تغييرات تصميمية كثيرة على هذا الطراز تحديدًا لضمان جاذبيته لشريحة واسعة من المستهلكين. كما تتيح السيارة النظيفة للمشترين تخصيص سياراتهم حسب رغبتهم.\r\n\r\n\r\nمن أبرز ميزات تريتون رايدر اتصالها بشبكة بيانات الجيل الرابع (4G) من شركة تيلسترا. يُمكّن هذا الاتصال السيارة من إجراء مكالمات استغاثة في حالات الطوارئ، وتتبع موقعها، وفرض حظر تجول، وتحديد مناطق جغرافية، وحتى إطلاق تنبيهات تجاوز السرعة. تُعزز هذه الميزات الأمنية من قدرات السيارة في القيادة على الطرق الوعرة والمغامرات.\r\n\r\n\r\n\r\nأخيرًا، تُقدم ميتسوبيشي ضمانًا لمدة خمس سنوات أو 100,000 كيلومتر، أيهما أقرب. يُمكن تمديد الضمان إلى عشر سنوات أو 200,000 كيلومتر عند إجراء الصيانة حصريًا لدى شبكة وكلاء العلامة التجارية.', 'articles/ayqpSeDeNWDhSytyPFGfhQ5Dcr7hk2bzJQcwv9Nw.png', 'Hassan Al-Shehri - gogomotor.com', 'حسن الشهري - gogomotor.com', '2026-04-21', '2026-04-21'),
(19, 'Toyota Fleet Safety – Tested Beyond Limits', 'سلامة أسطول تويوتا - تم اختبارها بما يتجاوز الحدود', 'Toyota has built a global reputation for safety—especially in fleet vehicles used by corporations, leasing companies, and government sectors. Through rigorous testing programs and advanced safety technologies, Toyota ensures its vehicles meet some of the world’s most demanding safety standards. This article explores how Toyota fleet vehicles are tested, what those tests involve, and why they matter for businesses.\n\n1. Global Safety Testing Programs\n\nToyota vehicles undergo independent testing by major global safety organizations. These programs simulate real-world accident scenarios and evaluate both passive safety (crash protection) and active safety (accident prevention).\n\nKey Testing Authorities\nEuro NCAP (Europe)\nJNCAP (Japan)\nASEAN NCAP (Southeast Asia)\nNHTSA (United States)\n\nThese organizations assess vehicles across multiple categories including:\n\nFrontal crash tests\nSide-impact tests\nRollover resistance\nPedestrian protection\nAdvanced driver assistance systems (ADAS)\n\nFor example, the Toyota Corolla and RAV4 achieved 5-star Euro NCAP ratings, scoring highly in adult and child occupant protection as well as safety assist systems .\n\n2. Crash Safety (Passive Safety Testing)\n\nCrash tests evaluate how well a vehicle protects occupants during an accident.\n\nCommon Crash Tests:\nFrontal Impact Test: Simulates head-on collisions\nSide Impact Test: Measures protection during side crashes\nPole Test: Evaluates impact with narrow objects like poles\nRollover Test: Assesses vehicle stability\n\nToyota vehicles consistently perform well due to:\n\nReinforced body structures (TNGA platform)\nStrategic use of high-strength steel\nEnergy absorption zones\n\nThese design elements help redirect crash forces away from passengers, maintaining cabin integrity .\n\n3. Preventive Safety (Active Safety Testing)\n\nModern fleet safety is not just about surviving crashes—it’s about avoiding them entirely.\n\nToyota’s Toyota Safety Sense (TSS) plays a key role in preventive safety testing. It includes:\n\nPre-Collision System (PCS)\nLane Departure Alert (LDA)\nAdaptive Cruise Control (ACC)\nAutomatic High Beam (AHB)\n\nTesting agencies evaluate how these systems perform in real-world scenarios like:\n\nDetecting pedestrians (including nighttime detection)\nAvoiding rear-end collisions\nMaintaining lane discipline\n\nStudies show Toyota Safety Sense can reduce rear-end collisions by up to 70% .\n\n4. Pedestrian & Vulnerable Road User Testing\n\nFleet vehicles often operate in urban environments, making pedestrian safety critical.\n\nTests include:\n\nPedestrian impact simulations\nCyclist detection systems\nEmergency braking performance\n\nToyota vehicles have demonstrated strong results, with systems capable of avoiding collisions entirely at low speeds in testing scenarios .\n\n5. Continuous Improvement Through Real-World Data\n\nToyota continuously updates its safety systems using:\n\nGlobal accident data\nReal-world driving behavior\nAdvanced simulation technologies\n\nPrograms like JNCAP even update testing criteria annually to reflect changing traffic conditions and risks, ensuring vehicles remain compliant with modern safety expectations .\n\n6. Why This Matters for Fleet Buyers\n\nFor businesses operating fleets, safety testing directly impacts:\n\nDriver safety and liability\nInsurance costs\nVehicle downtime\nBrand reputation\n\nToyota’s strong performance across global safety programs makes it a preferred choice for:\n\nCorporate fleets\nLeasing companies\nGovernment vehicles\n\nHigh safety ratings and proven accident prevention systems help reduce operational risks while improving overall efficiency.\n\n7. Conclusion\n\nToyota’s fleet vehicles are engineered with a holistic safety approach—combining crash protection, accident prevention, and continuous innovation. Through rigorous testing by global authorities and advanced technologies like Toyota Safety Sense, Toyota ensures its vehicles meet the highest safety standards.\n\nFor fleet operators, this translates into safer drivers, lower costs, and greater peace of mind.', 'اختبارات السلامة لأسطول تويوتا: نظرة شاملة\r\n\r\nبنت تويوتا سمعة عالمية مرموقة في مجال السلامة، لا سيما في مركبات الأساطيل المستخدمة من قبل الشركات، وشركات التأجير، والقطاعات الحكومية. ومن خلال برامج اختبار صارمة وتقنيات سلامة متطورة، تضمن تويوتا أن مركباتها تلبي بعضًا من أكثر معايير السلامة صرامة في العالم. تستكشف هذه المقالة كيفية اختبار مركبات أسطول تويوتا، وما تتضمنه هذه الاختبارات، وأهميتها للشركات.\r\n\r\n1. برامج اختبار السلامة العالمية\r\n\r\nتخضع مركبات تويوتا لاختبارات مستقلة من قبل منظمات السلامة العالمية الكبرى. تحاكي هذه البرامج سيناريوهات حوادث واقعية، وتقيّم كلاً من السلامة السلبية (الحماية من التصادم) والسلامة النشطة (منع الحوادث).\r\n\r\n\r\nجهات الاختبار الرئيسية\r\nيورو NCAP (أوروبا)\r\nJNCAP (اليابان)\r\nASEAN NCAP (جنوب شرق آسيا)\r\nNHTSA (الولايات المتحدة)\r\n\r\nتقيّم هذه المنظمات المركبات عبر فئات متعددة، تشمل:\r\n\r\nاختبارات التصادم الأمامي\r\nاختبارات التصادم الجانبي\r\nمقاومة الانقلاب\r\nحماية المشاة\r\nأنظمة مساعدة السائق المتقدمة (ADAS)\r\n\r\nعلى سبيل المثال، حصلت سيارتا تويوتا كورولا وراف فور على تصنيف 5 نجوم من يورو NCAP، محققتين درجات عالية في حماية الركاب البالغين والأطفال، بالإضافة إلى أنظمة مساعدة السلامة.\r\n\r\n2. سلامة التصادم (اختبارات السلامة السلبية)\r\n\r\nتقيّم اختبارات التصادم مدى فعالية المركبة في حماية الركاب أثناء وقوع حادث.\r\n\r\n\r\nاختبارات التصادم الشائعة:\r\n\r\nاختبار التصادم الأمامي: يحاكي التصادمات وجهاً لوجه.\r\n\r\nاختبار التصادم الجانبي: يقيس مستوى الحماية أثناء التصادمات الجانبية.\r\n\r\nاختبار الاصطدام بالأعمدة: يقيم قوة الاصطدام بأجسام ضيقة كالأعمدة.\r\n\r\nاختبار الانقلاب: يقيم ثبات المركبة.\r\n\r\nتتميز مركبات تويوتا بأداءٍ عالٍ باستمرار بفضل:\r\n\r\nهياكل مُعززة (منصة TNGA).\r\n\r\nاستخدام استراتيجي للفولاذ عالي المقاومة.\r\n\r\nمناطق امتصاص الطاقة.\r\n\r\nتساعد عناصر التصميم هذه على توجيه قوى التصادم بعيداً عن الركاب، مما يحافظ على سلامة المقصورة.\r\n\r\n\r\n3. السلامة الوقائية (اختبارات السلامة النشطة)\r\n\r\nلا تقتصر سلامة أساطيل المركبات الحديثة على النجاة من التصادمات فحسب، بل تتعداها إلى تجنبها تماماً.\r\n\r\nيلعب نظام Toyota Safety Sense (TSS) من تويوتا دوراً محورياً في اختبارات السلامة الوقائية. يشمل ذلك:\r\n\r\nنظام ما قبل الاصطدام (PCS)\r\nنظام التنبيه عند مغادرة المسار (LDA)\r\nنظام تثبيت السرعة التكيفي (ACC)\r\nنظام الإضاءة العالية التلقائي (AHB)\r\n\r\nتقوم جهات الاختبار بتقييم أداء هذه الأنظمة في سيناريوهات واقعية، مثل:\r\n\r\nاكتشاف المشاة (بما في ذلك الاكتشاف الليلي)\r\nتجنب الاصطدامات الخلفية\r\nالحفاظ على الالتزام بالمسار\r\n\r\nتشير الدراسات إلى أن نظام Toyota Safety Sense يُمكنه تقليل الاصطدامات الخلفية بنسبة تصل إلى 70%.\r\n\r\n4. اختبارات المشاة ومستخدمي الطريق الأكثر عرضة للخطر\r\n\r\nغالبًا ما تعمل مركبات الأسطول في بيئات حضرية، مما يجعل سلامة المشاة أمرًا بالغ الأهمية.\r\n\r\nتشمل الاختبارات:\r\n\r\nمحاكاة اصطدام المشاة\r\nأنظمة اكتشاف راكبي الدراجات\r\nأداء الكبح الطارئ\r\n\r\nأظهرت مركبات تويوتا نتائج ممتازة، حيث تتميز أنظمتها بقدرتها على تجنب الاصطدامات تمامًا عند السرعات المنخفضة في سيناريوهات الاختبار.\r\n\r\n٥. التحسين المستمر من خلال بيانات العالم الواقعي\r\n\r\nتُحدّث تويوتا أنظمة السلامة لديها باستمرار باستخدام:\r\n\r\nبيانات الحوادث العالمية\r\nسلوك القيادة في العالم الواقعي\r\nتقنيات المحاكاة المتقدمة\r\n\r\nحتى أن برامج مثل JNCAP تُحدّث معايير الاختبار سنويًا لمواكبة تغيرات ظروف المرور والمخاطر، مما يضمن امتثال المركبات لمعايير السلامة الحديثة.\r\n\r\n٦. أهمية ذلك لمشتري أساطيل المركبات\r\n\r\nبالنسبة للشركات التي تُشغّل أساطيل مركبات، يؤثر اختبار السلامة بشكل مباشر على:\r\n\r\nسلامة السائقين ومسؤوليتهم القانونية\r\nتكاليف التأمين\r\nوقت تعطل المركبات\r\nسمعة العلامة التجارية\r\n\r\nيُعدّ أداء تويوتا المتميز في برامج السلامة العالمية خيارًا مفضلًا لـ:\r\n\r\nأسطول الشركات\r\nشركات التأجير\r\nالمركبات الحكومية\r\n\r\nتُساهم تصنيفات السلامة العالية وأنظمة منع الحوادث المُثبتة في تقليل المخاطر التشغيلية مع تحسين الكفاءة العامة.\r\n\r\n٧. الخلاصة\r\n\r\nصُممت مركبات أسطول تويوتا وفقًا لنهج شامل للسلامة، يجمع بين الحماية من التصادم ومنع الحوادث والابتكار المستمر. من خلال اختبارات صارمة تجريها هيئات عالمية وتقنيات متطورة مثل نظام Toyota Safety Sense، تضمن تويوتا أن سياراتها تلبي أعلى معايير السلامة.\r\n\r\nبالنسبة لمشغلي أساطيل المركبات، يُترجم هذا إلى سائقين أكثر أمانًا، وتكاليف أقل، وراحة بال أكبر.', 'articles/3zQEBic4e43xv4VBcJOJEx8kI9LLvArHq35GmnXJ.jpg', 'Jadeer United', 'جدير المتحدة لتأجير السيارات', '2026-04-26', '2026-04-26'),
(20, 'A clear history... guaranteed quality... and an exceptional opportunity', 'تاريخ واضح... وجودة مضمونة... وفرصة استثنائية', 'Because your trust is the foundation of every step we take, we are pleased to offer you the opportunity to own well-maintained vehicles from our own fleet.\n\nEach vehicle has had only one previous owner/user since leaving the dealership, giving you the chance to become the second owner with a clear and transparent ownership history. ✨\n\n The auction is open for 24 hours only — don\'t miss your chance!\n\n You are welcome to inspect the vehicles at our premises. To arrange a viewing, please contact Nebras:\n +966 59 493 0000\n\n Join the online auction now through Mobasher Auctions:\n https://mobasher.sa/auctions/t-container-details/4791?cat=motors\n\nWe look forward to your participation and wish you the best of luck!', 'لأن ثقتكم هي أساس كل خطوة نخطوها، يسعدنا أن نطرح لكم مجموعة من سيارات أسطولنا الخاص، والتي انتقلت مباشرة من الوكالة إلى مستخدم واحد فقط، لتكونوا أنتم المالك الثاني بسجل ملكية واضح وموثوق. \n\n المزاد متاح لمدة 24 ساعة فقط، فلا تفوتوا الفرصة!\n\n يمكنكم معاينة السيارات في مقر الشركة بالتنسيق مع الزميل نبراس:\n 0594930000\n\n للمشاركة في المزاد الإلكتروني عبر منصة مباشر للمزادات:\n https://mobasher.sa/auctions/t-container-details/4791?cat=motors\n\nنتمنى لكم التوفيق في اقتناص أفضل العروض. ', 'articles/QhzrhOCE98lJLOpvvycTZSga7SSqMyKCiFMvpP5l.jpg', 'Jadeer United', 'Jadeer United', '2026-07-21', '2026-07-21');
INSERT INTO `articles` (`id`, `title`, `title_ar`, `content`, `content_ar`, `img`, `author`, `author_ar`, `created_at`, `updated_at`) VALUES
(21, 'Will EVs have a Promising Future in the Kingdom?', 'هل سيكون للسيارات الكهربائية مستقبل واعد في المملكة؟', '\"The Kingdom of Saudi Arabia has started groping for a way to spread the use of electric cars and encourage its citizens to gradually abandon cars that run on gasoline and diesel, in line with the Kingdom\'s Vision 2030, which focuses on the use of renewable energy and artificial intelligence represented in autonomous driving.\r\n\r\nAccordingly, Motory team has conducted another local survey about electric cars, with more than 700 respondents participating. This time, the survey revealed a high demand for electric cars in the Kingdom, as a number of participants expressed their desire to own an electric car due to several reasons, where the most important are:\r\n\r\nElectric vehicles don’t need maintenance continuously as the fuel vehicles\r\n\r\nThe survey showed that about 45% of opinions want to own an electric vehicle because the cost of maintaining it is considered lower compared to the cost of maintaining an internal combustion vehicle. The electric vehicle engine has fewer moving parts, therefore it does not require continuous maintenance. Electric vehicles also don’t need to change engine oil, nor do valves suffer from blockage as the engine is not powered by internal combustion.\r\n\r\nThe financial cost of an electric vehicle \r\n\r\nAmong those looking to buy an electric vehicle, 56% indicated that their interest in EVs is due to the desire to save fuel costs. Electric vehicles gain their full power by charging them with electricity rather than using any type of fuel.\r\n\r\nEVs Protect the Environment and Preserve Its future\r\n\r\nAbout 45% of those surveyed expressed their desire to replace fuel vehicles with electric ones in order to preserve the environment. EVs play an important role in preserving the environment from pollution, due to the low percentage of their harmful emissions to the environment such as carbon monoxide, which makes them a better option compared to other vehicles.\r\n\r\nThe survey also revealed that 39% of opinions would like to use electric vehicles in line with the Kingdom\'s vision of electric transformation, while 37% said they would like to keep pace with the development in the world.\r\n\r\nWhich Category of EV will be the most in-demand in Saudi Arabia?\r\n\r\nAccording to the survey respondents, the electric sedan category will be the most in-demand at 50%, followed by the SUV at 43%.\r\n\r\nThe survey also showed that more than 65% of its participants will choose Japanese vehicles; such as Toyota, Lexus, Nissan, Honda, and others. Whereas more than 30% of them expressed their desire to buy American, German, or Korean electric vehicles. On the other hand, only 15% of the respondents expressed their desire to buy Chinese electric vehicles.\r\n\r\nIs there anything that affects the range of an electric vehicle battery?\r\n\r\nAccording to the results, 55% of the respondents do not know what conditions affect the electric battery\'s range (the average distance an EV travel on one charge). There are many factors that affect the battery life, which all users of electric vehicles must be aware of:\r\n\r\nFast charging increases the temperature of the internal components significantly\r\nThe temperature of the weather has a notable impact on the capacity of the electric vehicle battery, for example; the low temperature negatively affects the driving range due to the need to turn on the heating system.\r\nMileage: There is no doubt that the total mileage of the vehicle also affects the battery capacity\r\nCharging Electric Vehicles: Stations or Home?\r\n\r\nThe respondents were also asked if they prefer charging their EVs at stations or at home, as 70% of them say they prefer charging electric vehicles at home rather than going to charging stations.\r\n\r\nEVs are considered a viable option, but are they practical?\r\n\r\nAbout 65% of respondents agreed that electric vehicles are practical, but despite that; 73% of them said that they would keep a fuel vehicle if they purchased an electric one. This high percentage of those who want to keep a fuel vehicle when buying an EV,  reminds us of the result we obtained in the previous survey which indicated 79% of respondents are not ready yet for electric vehicles.\r\n\r\nWhat issues do ICE vehicle owners hope EVs won\'t have?\r\n\r\nAt the end of the survey, we asked the participants about the issues in which they had difficulty with fuel cars, and they hoped to completely disappear from electric cars. Most of the which included the following:\r\n\r\nPeriodic maintenance; Including changing oil, filters, and coils\r\nFrequent mechanical failures\r\nHigh petrol cost\r\nRisk of ignition from the gasoline\r\nHigh prices of spare parts  \"', 'بدأت المملكة العربية السعودية في البحث عن سبل لتوسيع نطاق استخدام السيارات الكهربائية وتشجيع مواطنيها على التخلي تدريجياً عن السيارات التي تعمل بالبنزين والديزل، وذلك تماشياً مع رؤية المملكة 2030 التي تركز على استخدام الطاقة المتجددة والذكاء الاصطناعي، لا سيما في مجال القيادة الذاتية.\r\n\r\nوفي هذا السياق، أجرى فريق \"موتوري\" استطلاعاً محلياً جديداً حول السيارات الكهربائية، شارك فيه أكثر من 700 شخص. وكشف الاستطلاع هذه المرة عن طلب كبير على السيارات الكهربائية في المملكة، حيث أعرب عدد من المشاركين عن رغبتهم في امتلاك سيارة كهربائية لعدة أسباب، أهمها:\r\n\r\nلا تحتاج السيارات الكهربائية إلى صيانة دورية كما هو الحال مع سيارات الوقود.\r\n\r\nوأظهر الاستطلاع أن حوالي 45% من المشاركين يرغبون في امتلاك سيارة كهربائية لأن تكلفة صيانتها تُعتبر أقل مقارنةً بتكلفة صيانة سيارات الاحتراق الداخلي. يحتوي محرك السيارة الكهربائية على عدد أقل من الأجزاء المتحركة، وبالتالي لا يتطلب صيانة دورية. كما لا تحتاج السيارات الكهربائية إلى تغيير زيت المحرك، ولا تعاني صماماتها من الانسداد لأن محركها لا يعمل بالاحتراق الداخلي.\r\n\r\nالجانب المالي تكلفة السيارة الكهربائية\r\n\r\nأشار 56% من الراغبين في شراء سيارة كهربائية إلى أن دافعهم هو توفير تكاليف الوقود. تستمد السيارات الكهربائية طاقتها بالكامل من شحنها بالكهرباء بدلاً من استخدام أي نوع من أنواع الوقود.\r\n\r\nالسيارات الكهربائية تحمي البيئة وتحافظ على مستقبلها\r\n\r\nأعرب نحو 45% من المشاركين في الاستطلاع عن رغبتهم في استبدال سيارات الوقود بسيارات كهربائية حفاظاً على البيئة. تلعب السيارات الكهربائية دوراً هاماً في حماية البيئة من التلوث، نظراً لانخفاض نسبة انبعاثاتها الضارة، مثل أول أكسيد الكربون، مما يجعلها خياراً أفضل مقارنةً بالسيارات الأخرى.\r\n\r\nكما كشف الاستطلاع أن 39% من المشاركين يرغبون في استخدام السيارات الكهربائية تماشياً مع رؤية المملكة للتحول الكهربائي، بينما قال 37% إنهم يرغبون في مواكبة التطورات العالمية في هذا المجال.\r\n\r\nما هي فئة السيارات الكهربائية الأكثر طلباً في المملكة العربية السعودية؟\r\n\r\nوفقاً لآراء المشاركين في الاستطلاع، ستكون فئة سيارات السيدان الكهربائية الأكثر طلباً في المملكة العربية السعودية. ٥٠٪، تليها سيارات الدفع الرباعي بنسبة ٤٣٪.\r\n\r\nوأظهر الاستطلاع أيضًا أن أكثر من ٦٥٪ من المشاركين سيختارون سيارات يابانية، مثل تويوتا، ولكزس، ونيسان، وهوندا، وغيرها. بينما أعرب أكثر من ٣٠٪ منهم عن رغبتهم في شراء سيارات كهربائية أمريكية أو ألمانية أو كورية. في المقابل، أعرب ١٥٪ فقط من المشاركين عن رغبتهم في شراء سيارات كهربائية صينية.\r\n\r\nهل هناك أي عوامل تؤثر على مدى بطارية السيارة الكهربائية؟\r\n\r\nوفقًا للنتائج، فإن ٥٥٪ من المشاركين لا يعرفون الظروف التي تؤثر على مدى بطارية السيارة الكهربائية (متوسط ​​المسافة التي تقطعها السيارة الكهربائية بشحنة واحدة). هناك العديد من العوامل التي تؤثر على عمر البطارية، والتي يجب على جميع مستخدمي السيارات الكهربائية معرفتها:\r\n\r\nالشحن السريع يزيد من درجة حرارة المكونات الداخلية بشكل ملحوظ.\r\nدرجة حرارة الطقس لها تأثير كبير على سعة بطارية السيارة الكهربائية، على سبيل المثال؛ انخفاض درجة الحرارة يؤثر سلبًا على مدى القيادة بسبب الحاجة إلى تشغيل نظام التدفئة.\r\nالمسافة المقطوعة: لا شك أن إجمالي المسافة المقطوعة يؤثر نوع السيارة أيضًا على سعة البطارية.\r\nشحن السيارات الكهربائية: محطات الشحن أم المنزل؟\r\n\r\nسُئل المشاركون في الاستطلاع عما إذا كانوا يفضلون شحن سياراتهم الكهربائية في محطات الشحن أم في المنزل، فأجاب 70% منهم بأنهم يفضلون الشحن في المنزل.\r\n\r\nتُعتبر السيارات الكهربائية خيارًا عمليًا، ولكن هل هي عملية؟\r\n\r\nوافق حوالي 65% من المشاركين على أن السيارات الكهربائية عملية، ومع ذلك، قال 73% منهم إنهم سيحتفظون بسيارة تعمل بالوقود إذا اشتروا سيارة كهربائية. هذه النسبة المرتفعة ممن يرغبون في الاحتفاظ بسيارة تعمل بالوقود عند شراء سيارة كهربائية، تُذكرنا بالنتيجة التي توصلنا إليها في الاستطلاع السابق والتي أشارت إلى أن 79% من المشاركين ليسوا مستعدين بعد للسيارات الكهربائية.\r\n\r\nما المشاكل التي يأمل مالكو سيارات الاحتراق الداخلي ألا تواجههم السيارات الكهربائية؟\r\n\r\nفي نهاية الاستطلاع، سألنا المشاركين عن المشاكل التي واجهوها مع سيارات الوقود، والتي يأملون في التخلص منها تمامًا من السيارات الكهربائية. تضمنت معظم الإجابات ما يلي:\r\n\r\nالصيانة الدورية، بما في ذلك تغيير الزيت، الفلاتر والملفات\r\nأعطال ميكانيكية متكررة\r\nارتفاع تكلفة البنزين\r\nخطر الاشتعال من البنزين\r\nارتفاع أسعار قطع الغيار', 'articles/CxekajVIXGTJJmIEM9EOi7OcOQ5FXPAtmYzGnKa5.webp', 'Haya Dahbour - motory.com', 'هيا دحبور - motory.com', '2026-08-05', '2026-08-05'),
(22, 'Jadeer Celebrates Saudi Arabia\'s 96th National Day', 'جدير المتدة تحتفل بالعيد ال96 للمملكة العربية السعودية', 'Land of glory, and the splendor of the present and future! ???\r\n\r\nOn Saudi National Day, we renew our pledge of allegiance to this pure land, and celebrate achievements that reach for the horizon and ambitions that know no bounds.\r\n\r\nMay you remain ever dear and proud, our Saudi Arabia, and may our leadership and our great people continue in perpetual glory and leadership. ✨\r\n\r\nHappy National Day to our beloved homeland! ??\r\n\r\n#SaudiNationalDay #WeDreamAndWeAchieve #SaudiArabia #Worthy', 'أرض العز، ومجدِ الحاضر والمستقبل! ???\r\n\r\nفي اليوم الوطني السعودي، نجدد العهد والولاء لتراب هذا الوطن الطهور، ونحتفل بإنجازات تلبي الأفق وطموحات لا توقفها حدود.\r\n\r\nدمتِ يا سعوديتنا عزيزة شامخة، ودام قيادتنا وشعبنا العظيم في ريادة ومجد دائم. ✨\r\n\r\nكل عام ووطننا الغالي بألف خير! ??\r\n\r\n#اليوم_الوطني_السعودي #نحلم_ونحقق #السعودية #جدير', 'articles/QgW1LXAMlMHjk6QellnjHCuSsLidhdnT77wiqmqY.jpg', 'Jadeer United', 'جدير المتحدة', '2026-09-24', '2026-09-24');

-- --------------------------------------------------------

--
-- Table structure for table `attendances`
--

CREATE TABLE `attendances` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `employee_id` varchar(15) NOT NULL,
  `location` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `picture` text DEFAULT NULL,
  `type` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ;

--
-- Dumping data for table `attendances`
--

INSERT INTO `attendances` (`id`, `date`, `employee_id`, `location`, `picture`, `type`, `created_at`, `updated_at`) VALUES
(73, '2026-07-15 00:00:00', '333333333', '[\"26.36499882875536\",\"50.209147825608\"]', NULL, 0, '2026-07-15 14:12:12', '2026-07-15 14:12:12'),
(74, '2026-07-15 00:00:00', '333333333', '[\"26.36499882875536\",\"50.209147825608\"]', NULL, 1, '2026-07-15 14:12:23', '2026-07-15 14:12:23'),
(75, '2026-07-15 00:00:00', '444444444', '[\"27.347034728637666\",\"35.69020298644447\"]', NULL, 0, '2026-07-15 15:28:26', '2026-07-15 15:28:26'),
(76, '2026-07-15 00:00:00', '444444444', '[\"27.34702659779975\",\"35.69019878368295\"]', NULL, 1, '2026-07-15 15:28:56', '2026-07-15 15:28:56'),
(77, '2026-07-15 00:00:00', '5465465', '[\"28.409415432753594\",\"48.46602364629035\"]', NULL, 0, '2026-07-15 16:34:38', '2026-07-15 16:34:38'),
(78, '2026-07-15 00:00:00', '65465465465', '[\"17.3225755\",\"42.4066162\"]', NULL, 0, '2026-07-15 16:46:44', '2026-07-15 16:46:44'),
(79, '2026-07-15 00:00:00', '777777777', '[\"27.4840778\",\"35.5735102\"]', NULL, 0, '2026-07-15 16:47:52', '2026-07-15 16:47:52'),
(80, '2026-07-15 00:00:00', '65465498798', '[\"24.4676728\",\"39.6103527\"]', NULL, 0, '2026-07-15 19:57:26', '2026-07-15 19:57:26'),
(81, '2026-07-15 00:00:00', '444444444', '[\"27.34703694396219\",\"35.69020747460563\"]', NULL, 1, '2026-07-15 20:04:27', '2026-07-15 20:04:27'),
(82, '2026-07-15 00:00:00', '666666666', '[\"24.594594594594593\",\"46.7652853690558\"]', NULL, 0, '2026-07-15 20:18:50', '2026-07-15 20:18:50'),
(83, '2026-07-15 00:00:00', '666666666', '[\"24.594594594594593\",\"46.7652853690558\"]', NULL, 1, '2026-07-15 20:18:57', '2026-07-15 20:18:57'),
(84, '2026-07-15 00:00:00', '666666666', '[\"24.594594594594593\",\"46.7652853690558\"]', NULL, 1, '2026-07-15 20:19:09', '2026-07-15 20:19:09'),
(85, '2026-07-15 00:00:00', '111111111', '[\"17.3701331\",\"42.5042103\"]', NULL, 0, '2026-07-15 21:51:30', '2026-07-15 21:51:30'),
(86, '2026-07-16 00:00:00', '65465498798', '[\"21.5267016\",\"39.1872347\"]', NULL, 0, '2026-07-16 01:34:55', '2026-07-16 01:34:55'),
(87, '2026-07-16 00:00:00', '65465498798', '[\"21.5267886\",\"39.1865968\"]', NULL, 1, '2026-07-16 01:35:13', '2026-07-16 01:35:13'),
(88, '2026-07-16 00:00:00', '111111111', '[\"17.3615074\",\"42.5017102\"]', NULL, 0, '2026-07-16 07:44:06', '2026-07-16 07:44:06'),
(89, '2026-07-16 00:00:00', '65465465465', '[\"17.3231255\",\"42.4047469\"]', NULL, 0, '2026-07-16 07:49:36', '2026-07-16 07:49:36'),
(90, '2026-07-16 00:00:00', '556655665', '[\"26.365049\",\"50.2093074\"]', NULL, 0, '2026-07-16 08:50:43', '2026-07-16 08:50:43'),
(104, '2026-07-16 00:00:00', '65465465465', '[\"17.3226822\",\"42.4065908\"]', NULL, 1, '2026-07-16 16:43:24', '2026-07-16 16:43:24'),
(105, '2026-07-16 00:00:00', '111111111', '[\"17.322691\",\"42.4065928\"]', NULL, 1, '2026-07-16 16:44:00', '2026-07-16 16:44:00'),
(106, '2026-07-16 00:00:00', '2328805219', '[\"26.432\",\"50.1166\"]', NULL, 0, '2026-07-16 16:58:22', '2026-07-16 16:58:22'),
(107, '2026-07-16 00:00:00', '2328805219', '[\"26.432\",\"50.1166\"]', NULL, 1, '2026-07-16 16:58:29', '2026-07-16 16:58:29'),
(108, '2026-07-16 00:00:00', '2328805219', '[\"26.432\",\"50.1166\"]', NULL, 0, '2026-07-16 16:58:34', '2026-07-16 16:58:34'),
(109, '2026-07-16 00:00:00', '2328805219', '[\"26.432\",\"50.1166\"]', NULL, 1, '2026-07-16 16:58:40', '2026-07-16 16:58:40'),
(110, '2026-07-16 00:00:00', '2328805219', '[\"26.432\",\"50.1166\"]', NULL, 0, '2026-07-16 16:58:44', '2026-07-16 16:58:44'),
(111, '2026-07-16 00:00:00', '2328805219', '[\"26.432\",\"50.1166\"]', NULL, 1, '2026-07-16 16:58:50', '2026-07-16 16:58:50'),
(112, '2026-07-16 00:00:00', '990849664', '[\"26.364997801400946\",\"50.20914902061957\"]', NULL, 0, '2026-07-16 17:02:08', '2026-07-16 17:02:08'),
(113, '2026-07-16 00:00:00', '990849664', '[\"26.364997801400946\",\"50.20914902061957\"]', NULL, 1, '2026-07-16 17:02:31', '2026-07-16 17:02:31'),
(114, '2026-07-16 00:00:00', '444444444', '[\"27.361288709544418\",\"35.68986282970993\"]', NULL, 0, '2026-07-16 17:24:14', '2026-07-16 17:24:14'),
(115, '2026-07-16 00:00:00', '444444444', '[\"27.347162238080692\",\"35.69026562910244\"]', NULL, 1, '2026-07-16 19:15:06', '2026-07-16 19:15:06'),
(116, '2026-07-17 00:00:00', '444444444', '[\"27.34698098039706\",\"35.69018433928535\"]', NULL, 0, '2026-07-17 13:57:05', '2026-07-17 13:57:05'),
(117, '2026-07-15 00:00:00', '777777777', '[\"27.4840778\",\"35.5735102\"]', NULL, 1, '2026-07-15 19:00:52', '2026-07-15 19:00:52'),
(118, '2026-07-17 00:00:00', '777777777', '[\"27.3469531\",\"35.6902559\"]', NULL, 0, '2026-07-17 14:06:31', '2026-07-17 14:06:31'),
(119, '2026-07-17 00:00:00', '444444444', '[\"27.35037725699048\",\"35.69059804245203\"]', NULL, 1, '2026-07-17 19:28:46', '2026-07-17 19:28:46'),
(120, '2026-07-17 00:00:00', '777777777', '[\"27.3502473\",\"35.6903404\"]', NULL, 1, '2026-07-17 21:41:23', '2026-07-17 21:41:23'),
(121, '2026-07-18 00:00:00', '65465465465', '[\"17.3194226\",\"42.4053615\"]', NULL, 0, '2026-07-18 07:07:51', '2026-07-18 07:07:51'),
(122, '2026-07-18 00:00:00', '111111111', '[\"17.3739445\",\"42.5236362\"]', NULL, 0, '2026-07-18 07:53:44', '2026-07-18 07:53:44'),
(123, '2026-07-18 00:00:00', '666666666', '[\"24.61261261261261\",\"46.77202011329845\"]', NULL, 0, '2026-07-18 09:51:24', '2026-07-18 09:51:24'),
(124, '2026-07-18 00:00:00', '444444444', '[\"27.34694830640996\",\"35.69016649692087\"]', NULL, 0, '2026-07-18 13:31:16', '2026-07-18 13:31:16'),
(125, '2026-07-18 00:00:00', '666666666', '[\"24.61261261261261\",\"46.77202011329845\"]', NULL, 1, '2026-07-18 16:01:01', '2026-07-18 16:01:01'),
(126, '2026-07-18 00:00:00', '65465465465', '[\"17.3178428\",\"42.4068978\"]', NULL, 1, '2026-07-18 16:05:14', '2026-07-18 16:05:14'),
(127, '2026-07-18 00:00:00', '111111111', '[\"17.3804573\",\"42.442863\"]', NULL, 1, '2026-07-18 16:15:19', '2026-07-18 16:15:19'),
(128, '2026-07-18 00:00:00', '65465498798', '[\"21.56756756756757\",\"39.21405146451354\"]', NULL, 0, '2026-07-18 20:55:45', '2026-07-18 20:55:45'),
(129, '2026-07-18 00:00:00', '65465498798', '[\"21.56756756756757\",\"39.21405146451354\"]', NULL, 1, '2026-07-18 20:55:57', '2026-07-18 20:55:57'),
(130, '2026-07-19 00:00:00', '65465465465', '[\"17.3225493\",\"42.4066113\"]', NULL, 0, '2026-07-19 07:24:53', '2026-07-19 07:24:53'),
(131, '2026-07-19 00:00:00', '111111111', '[\"17.3624344\",\"42.4068978\"]', NULL, 0, '2026-07-19 07:56:04', '2026-07-19 07:56:04'),
(132, '2026-07-19 00:00:00', '65465498798', '[\"21.5266718\",\"39.1871424\"]', NULL, 0, '2026-07-19 08:44:48', '2026-07-19 08:44:48'),
(133, '2026-07-19 00:00:00', '666666666', '[\"24.594594594594593\",\"46.7652853690558\"]', NULL, 0, '2026-07-19 08:56:01', '2026-07-19 08:56:01'),
(134, '2026-07-19 00:00:00', '65465465465', '[\"17.3226713\",\"42.4066182\"]', NULL, 1, '2026-07-19 16:20:35', '2026-07-19 16:20:35'),
(135, '2026-07-19 00:00:00', '111111111', '[\"17.3651799\",\"42.5131865\"]', NULL, 1, '2026-07-19 17:57:31', '2026-07-19 17:57:31'),
(136, '2026-07-19 00:00:00', '65465498798', '[\"21.5603096\",\"39.2129661\"]', NULL, 1, '2026-07-19 20:23:17', '2026-07-19 20:23:17'),
(137, '2026-07-19 00:00:00', '666666666', '[\"24.594594594594593\",\"46.7652853690558\"]', NULL, 1, '2026-07-19 20:34:44', '2026-07-19 20:34:44'),
(138, '2026-07-20 00:00:00', '65465465465', '[\"17.3223375\",\"42.4064486\"]', NULL, 0, '2026-07-20 07:34:34', '2026-07-20 07:34:34'),
(139, '2026-07-20 00:00:00', '111111111', '[\"17.3708597\",\"42.5024928\"]', NULL, 0, '2026-07-20 07:50:06', '2026-07-20 07:50:06'),
(140, '2026-07-20 00:00:00', '65465498798', '[\"21.5267159\",\"39.1872093\"]', NULL, 0, '2026-07-20 08:31:19', '2026-07-20 08:31:19'),
(141, '2026-07-20 00:00:00', '666666666', '[\"24.594594594594593\",\"46.7652853690558\"]', NULL, 0, '2026-07-20 08:53:09', '2026-07-20 08:53:09'),
(142, '2026-07-20 00:00:00', '65465465465', '[\"17.3226805\",\"42.4066125\"]', NULL, 1, '2026-07-20 16:21:23', '2026-07-20 16:21:23'),
(143, '2026-07-20 00:00:00', '666666666', '[\"24.594594594594593\",\"46.7652853690558\"]', NULL, 1, '2026-07-20 17:53:10', '2026-07-20 17:53:10'),
(144, '2026-07-20 00:00:00', '111111111', '[\"17.3651799\",\"42.5131865\"]', NULL, 1, '2026-07-20 22:00:38', '2026-07-20 22:00:38'),
(145, '2026-07-21 00:00:00', '111111111', '[\"17.372718\",\"42.503742\"]', NULL, 0, '2026-07-21 07:40:02', '2026-07-21 07:40:02'),
(146, '2026-07-21 00:00:00', '65465465465', '[\"17.3227504\",\"42.4050542\"]', NULL, 0, '2026-07-21 07:41:35', '2026-07-21 07:41:35'),
(147, '2026-07-21 00:00:00', '666666666', '[\"24.594594594594593\",\"46.7652853690558\"]', NULL, 0, '2026-07-21 08:50:07', '2026-07-21 08:50:07'),
(148, '2026-07-21 00:00:00', '65465498798', '[\"21.5267024\",\"39.1871768\"]', NULL, 0, '2026-07-21 09:17:32', '2026-07-21 09:17:32'),
(149, '2026-07-21 00:00:00', '990849664', '[\"26.364992556196707\",\"50.209130584811334\"]', NULL, 0, '2026-07-21 09:36:08', '2026-07-21 09:36:08'),
(150, '2026-07-21 00:00:00', '990849664', '[\"26.364992556196707\",\"50.209130584811334\"]', NULL, 1, '2026-07-21 09:36:19', '2026-07-21 09:36:19'),
(151, '2026-07-21 00:00:00', '65465465465', '[\"17.3226593\",\"42.4066426\"]', NULL, 1, '2026-07-21 16:29:58', '2026-07-21 16:29:58'),
(152, '2026-07-21 00:00:00', '111111111', '[\"17.3226556\",\"42.4066448\"]', NULL, 1, '2026-07-21 16:43:55', '2026-07-21 16:43:55'),
(153, '2026-07-21 00:00:00', '666666666', '[\"24.594594594594593\",\"46.7652853690558\"]', NULL, 1, '2026-07-21 19:45:00', '2026-07-21 19:45:00'),
(154, '2026-07-21 00:00:00', '65465498798', '[\"21.5267534\",\"39.1871473\"]', NULL, 1, '2026-07-21 23:08:59', '2026-07-21 23:08:59'),
(155, '2026-07-22 00:00:00', '65465498798', '[\"21.513513513513512\",\"39.18008375438145\"]', NULL, 0, '2026-07-22 07:05:49', '2026-07-22 07:05:49'),
(156, '2026-07-22 00:00:00', '65465465465', '[\"17.3226795\",\"42.4067092\"]', NULL, 0, '2026-07-22 07:30:37', '2026-07-22 07:30:37'),
(157, '2026-07-22 00:00:00', '666666666', '[\"24.594594594594593\",\"46.7652853690558\"]', NULL, 0, '2026-07-22 08:00:55', '2026-07-22 08:00:55'),
(158, '2026-07-22 00:00:00', '444444444', '[\"27.346812296483865\",\"35.69010815080431\"]', NULL, 0, '2026-07-22 11:13:59', '2026-07-22 11:13:59'),
(159, '2026-07-22 00:00:00', '444444444', '[\"27.34696953524339\",\"35.69017530338634\"]', NULL, 0, '2026-07-22 11:14:13', '2026-07-22 11:14:13'),
(160, '2026-07-22 00:00:00', '65465465465', '[\"17.3228778\",\"42.4066937\"]', NULL, 1, '2026-07-22 16:33:37', '2026-07-22 16:33:37'),
(161, '2026-07-22 00:00:00', '666666666', '[\"24.594594594594593\",\"46.7652853690558\"]', NULL, 1, '2026-07-22 18:32:28', '2026-07-22 18:32:28'),
(162, '2026-07-22 00:00:00', '444444444', '[\"27.34693621863892\",\"35.69016628850068\"]', NULL, 0, '2026-07-22 19:50:24', '2026-07-22 19:50:24'),
(163, '2026-07-22 00:00:00', '444444444', '[\"27.34686317701356\",\"35.690136623456176\"]', NULL, 1, '2026-07-22 19:50:31', '2026-07-22 19:50:31'),
(164, '2026-07-23 00:00:00', '111111111', '[\"17.3712668\",\"42.5034244\"]', NULL, 0, '2026-07-23 07:39:33', '2026-07-23 07:39:33'),
(165, '2026-07-23 00:00:00', '65465465465', '[\"17.3226842\",\"42.4066245\"]', NULL, 0, '2026-07-23 07:43:34', '2026-07-23 07:43:34'),
(166, '2026-07-23 00:00:00', '666666666', '[\"24.7656983\",\"46.6588567\"]', NULL, 0, '2026-07-23 07:53:52', '2026-07-23 07:53:52'),
(167, '2026-07-23 00:00:00', '666666666', '[\"24.7715967\",\"46.672845\"]', NULL, 0, '2026-07-23 07:55:09', '2026-07-23 07:55:09'),
(168, '2026-07-23 00:00:00', '666666666', '[\"24.7764633\",\"46.684315\"]', NULL, 0, '2026-07-23 07:56:08', '2026-07-23 07:56:08'),
(169, '2026-07-23 00:00:00', '444444444', '[\"27.34665481231357\",\"35.69005212663321\"]', NULL, 0, '2026-07-23 08:21:13', '2026-07-23 08:21:13'),
(170, '2026-07-23 00:00:00', '111111111', '[\"17.3271559\",\"42.4062833\"]', NULL, 1, '2026-07-23 16:09:47', '2026-07-23 16:09:47'),
(171, '2026-07-23 00:00:00', '65465465465', '[\"17.3214098\",\"42.4056687\"]', NULL, 1, '2026-07-23 16:43:32', '2026-07-23 16:43:32'),
(172, '2026-07-23 00:00:00', '666666666', '[\"24.598809\",\"46.7669384\"]', NULL, 1, '2026-07-23 17:37:44', '2026-07-23 17:37:44'),
(173, '2026-07-23 00:00:00', '444444444', '[\"27.3486689\",\"35.6909418\"]', NULL, 1, '2026-07-23 21:49:05', '2026-07-23 21:49:05'),
(174, '2026-07-24 00:00:00', '111111111', '[\"17.3908482\",\"42.4832871\"]', NULL, 0, '2026-07-24 16:09:17', '2026-07-24 16:09:17'),
(175, '2026-07-25 00:00:00', '65465465465', '[\"17.371518\",\"42.5289746\"]', NULL, 0, '2026-07-25 07:07:39', '2026-07-25 07:07:39'),
(176, '2026-07-25 00:00:00', '111111111', '[\"17.3708912\",\"42.5024368\"]', NULL, 0, '2026-07-25 08:29:23', '2026-07-25 08:29:23'),
(177, '2026-07-25 00:00:00', '444444444', '[\"27.346984656840014\",\"35.69017728124808\"]', NULL, 0, '2026-07-25 09:11:28', '2026-07-25 09:11:28'),
(178, '2026-07-25 00:00:00', '111111111', '[\"17.3711467\",\"42.5028172\"]', NULL, 1, '2026-07-25 17:20:19', '2026-07-25 17:20:19'),
(179, '2026-07-25 00:00:00', '65465465465', '[\"17.3705527\",\"42.5298575\"]', NULL, 1, '2026-07-25 18:16:06', '2026-07-25 18:16:06'),
(180, '2026-07-25 00:00:00', '444444444', '[\"27.346670091684064\",\"35.69005605213017\"]', NULL, 1, '2026-07-25 18:34:25', '2026-07-25 18:34:25'),
(181, '2026-07-26 00:00:00', '111111111', '[\"17.3783746\",\"42.4850667\"]', NULL, 0, '2026-07-26 07:46:43', '2026-07-26 07:46:43'),
(182, '2026-07-26 00:00:00', '65465465465', '[\"17.3194226\",\"42.4053615\"]', NULL, 0, '2026-07-26 08:04:17', '2026-07-26 08:04:17'),
(183, '2026-07-26 00:00:00', '444444444', '[\"27.34667021976577\",\"35.69005545666289\"]', NULL, 0, '2026-07-26 09:25:59', '2026-07-26 09:25:59'),
(184, '2026-07-26 00:00:00', '666666666', '[\"24.6103026\",\"46.7669985\"]', NULL, 0, '2026-07-26 09:28:50', '2026-07-26 09:28:50'),
(185, '2026-07-26 00:00:00', '111111111', '[\"17.3710126\",\"42.5026074\"]', NULL, 1, '2026-07-26 16:16:27', '2026-07-26 16:16:27'),
(186, '2026-07-26 00:00:00', '65465465465', '[\"17.3705505\",\"42.5298587\"]', NULL, 1, '2026-07-26 16:34:25', '2026-07-26 16:34:25'),
(187, '2026-07-26 00:00:00', '444444444', '[\"27.346792736543552\",\"35.69007815383902\"]', NULL, 0, '2026-07-26 19:06:13', '2026-07-26 19:06:13'),
(188, '2026-07-26 00:00:00', '444444444', '[\"27.34679276345371\",\"35.6900779893011\"]', NULL, 1, '2026-07-26 19:06:20', '2026-07-26 19:06:20'),
(189, '2026-07-26 00:00:00', '444444444', '[\"27.350402657152106\",\"35.69042888195613\"]', NULL, 0, '2026-07-26 19:39:33', '2026-07-26 19:39:33'),
(190, '2026-07-26 00:00:00', '666666666', '[\"24.5994666\",\"46.7670306\"]', NULL, 1, '2026-07-26 20:41:07', '2026-07-26 20:41:07'),
(191, '2026-07-26 00:00:00', '444444444', '[\"27.34668583349866\",\"35.69002891973669\"]', NULL, 1, '2026-07-26 20:41:20', '2026-07-26 20:41:20'),
(192, '2026-07-27 00:00:00', '65465465465', '[\"17.3223286\",\"42.4064885\"]', NULL, 0, '2026-07-27 07:40:42', '2026-07-27 07:40:42'),
(193, '2026-07-27 00:00:00', '666666666', '[\"24.598857\",\"46.7669161\"]', NULL, 0, '2026-07-27 08:01:32', '2026-07-27 08:01:32'),
(194, '2026-07-27 00:00:00', '444444444', '[\"27.346683541473006\",\"35.69002891055081\"]', NULL, 0, '2026-07-27 08:23:02', '2026-07-27 08:23:02'),
(195, '2026-07-27 00:00:00', '111111111', '[\"17.3717431\",\"42.5048237\"]', NULL, 0, '2026-07-27 08:29:10', '2026-07-27 08:29:10'),
(196, '2026-07-27 00:00:00', '65465465465', '[\"17.3225912\",\"42.4066419\"]', NULL, 1, '2026-07-27 17:06:54', '2026-07-27 17:06:54'),
(197, '2026-07-27 00:00:00', '444444444', '[\"27.346755271782484\",\"35.69007377989695\"]', NULL, 1, '2026-07-27 20:44:21', '2026-07-27 20:44:21'),
(198, '2026-07-27 00:00:00', '654654213', '[\"29.5246355\",\"43.7033511\"]', NULL, 0, '2026-07-27 21:50:50', '2026-07-27 21:50:50'),
(199, '2026-07-27 00:00:00', '666666666', '[\"24.5988208\",\"46.7669181\"]', NULL, 1, '2026-07-27 22:07:05', '2026-07-27 22:07:05'),
(200, '2026-07-28 00:00:00', '111111111', '[\"17.3701331\",\"42.5042103\"]', NULL, 0, '2026-07-28 07:23:33', '2026-07-28 07:23:33'),
(201, '2026-07-28 00:00:00', '111111111', '[\"17.3701331\",\"42.5042103\"]', NULL, 0, '2026-07-28 07:24:04', '2026-07-28 07:24:04'),
(202, '2026-07-28 00:00:00', '65465465465', '[\"17.3230421\",\"42.4067314\"]', NULL, 0, '2026-07-28 08:14:56', '2026-07-28 08:14:56'),
(203, '2026-07-28 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.204312784501724\"]', NULL, 0, '2026-07-28 08:37:20', '2026-07-28 08:37:20'),
(204, '2026-07-28 00:00:00', '444444444', '[\"27.346710200000004\",\"35.690055839999985\"]', NULL, 0, '2026-07-28 08:39:39', '2026-07-28 08:39:39'),
(205, '2026-07-28 00:00:00', '666666666', '[\"24.5988468\",\"46.7669147\"]', NULL, 0, '2026-07-28 08:58:52', '2026-07-28 08:58:52'),
(206, '2026-07-28 00:00:00', '65465465465', '[\"17.3227104\",\"42.4066011\"]', NULL, 1, '2026-07-28 16:37:32', '2026-07-28 16:37:32'),
(207, '2026-07-28 00:00:00', '111111111', '[\"17.3711467\",\"42.5028172\"]', NULL, 1, '2026-07-28 18:08:40', '2026-07-28 18:08:40'),
(208, '2026-07-28 00:00:00', '666666666', '[\"24.5988731\",\"46.7669118\"]', NULL, 1, '2026-07-28 18:25:10', '2026-07-28 18:25:10'),
(209, '2026-07-28 00:00:00', '444444444', '[\"27.34671024474642\",\"35.690055533205886\"]', NULL, 1, '2026-07-28 20:45:46', '2026-07-28 20:45:46'),
(210, '2026-07-29 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-07-29 00:29:19', '2026-07-29 00:29:19'),
(211, '2026-07-29 00:00:00', '444444444', '[\"27.396353137716382\",\"35.72015426242292\"]', NULL, 0, '2026-07-29 00:39:49', '2026-07-29 00:39:49'),
(212, '2026-07-29 00:00:00', '444444444', '[\"27.346716191855776\",\"35.69006159639381\"]', NULL, 1, '2026-07-29 05:15:06', '2026-07-29 05:15:06'),
(213, '2026-07-29 00:00:00', '654654213', '[\"31.7545617\",\"39.0158802\"]', NULL, 0, '2026-07-29 05:48:21', '2026-07-29 05:48:21'),
(214, '2026-07-29 00:00:00', '111111111', '[\"17.3711467\",\"42.5028172\"]', NULL, 0, '2026-07-29 07:30:08', '2026-07-29 07:30:08'),
(215, '2026-07-29 00:00:00', '65465465465', '[\"17.3708624\",\"42.5300852\"]', NULL, 0, '2026-07-29 07:43:29', '2026-07-29 07:43:29'),
(216, '2026-07-29 00:00:00', '666666666', '[\"24.632412089708307\",\"46.73912481132777\"]', NULL, 0, '2026-07-29 08:09:37', '2026-07-29 08:09:37'),
(217, '2026-07-29 00:00:00', '666666666', '[\"24.632412089708307\",\"46.73912481132777\"]', NULL, 0, '2026-07-29 08:10:01', '2026-07-29 08:10:01'),
(218, '2026-07-29 00:00:00', '65465465465', '[\"17.3727125\",\"42.5327251\"]', NULL, 1, '2026-07-29 17:02:36', '2026-07-29 17:02:36'),
(219, '2026-07-29 00:00:00', '654654213', '[\"31.7548234\",\"39.0158038\"]', NULL, 1, '2026-07-29 18:12:23', '2026-07-29 18:12:23'),
(220, '2026-07-29 00:00:00', '666666666', '[\"24.5992883\",\"46.7673363\"]', NULL, 1, '2026-07-29 18:35:56', '2026-07-29 18:35:56'),
(221, '2026-07-29 00:00:00', '444444444', '[\"27.3604767\",\"35.6911116\"]', NULL, 0, '2026-07-29 21:22:48', '2026-07-29 21:22:48'),
(222, '2026-07-29 00:00:00', '444444444', '[\"27.3604614\",\"35.6911203\"]', NULL, 1, '2026-07-29 21:23:00', '2026-07-29 21:23:00'),
(223, '2026-07-29 00:00:00', '65465498798', '[\"17.333333333333332\",\"42.60129221547778\"]', NULL, 1, '2026-07-29 23:55:36', '2026-07-29 23:55:36'),
(224, '2026-07-30 00:00:00', '654654213', '[\"31.7554699\",\"39.0177492\"]', NULL, 0, '2026-07-30 05:05:39', '2026-07-30 05:05:39'),
(225, '2026-07-30 00:00:00', '111111111', '[\"17.3710141\",\"42.5024275\"]', NULL, 0, '2026-07-30 07:37:21', '2026-07-30 07:37:21'),
(226, '2026-07-30 00:00:00', '65465465465', '[\"17.3227504\",\"42.4050542\"]', NULL, 0, '2026-07-30 08:11:18', '2026-07-30 08:11:18'),
(227, '2026-07-30 00:00:00', '222222222', '[\"26.440598055990083\",\"50.07014814810884\"]', NULL, 0, '2026-07-30 08:23:42', '2026-07-30 08:23:42'),
(228, '2026-07-30 00:00:00', '444444444', '[\"27.3469522\",\"35.6902665\"]', NULL, 0, '2026-07-30 08:28:43', '2026-07-30 08:28:43'),
(229, '2026-07-30 00:00:00', '65465498798', '[\"17.333333333333332\",\"42.60129221547778\"]', NULL, 0, '2026-07-30 09:21:05', '2026-07-30 09:21:05'),
(230, '2026-07-30 00:00:00', '654654213', '[\"31.7554692\",\"39.0177505\"]', NULL, 1, '2026-07-30 18:12:41', '2026-07-30 18:12:41'),
(231, '2026-07-30 00:00:00', '65465465465', '[\"17.3224691\",\"42.4064906\"]', NULL, 1, '2026-07-30 18:36:42', '2026-07-30 18:36:42'),
(232, '2026-07-30 00:00:00', '111111111', '[\"17.3820682\",\"42.4573072\"]', NULL, 1, '2026-07-30 18:51:33', '2026-07-30 18:51:33'),
(233, '2026-07-30 00:00:00', '666666666', '[\"24.5989131\",\"46.7669206\"]', NULL, 0, '2026-07-30 21:30:15', '2026-07-30 21:30:15'),
(234, '2026-07-30 00:00:00', '666666666', '[\"24.598878\",\"46.7669164\"]', NULL, 1, '2026-07-30 21:30:22', '2026-07-30 21:30:22'),
(235, '2026-07-30 00:00:00', '65465498798', '[\"17.333333333333332\",\"42.60129221547778\"]', NULL, 1, '2026-07-30 21:30:23', '2026-07-30 21:30:23'),
(236, '2026-07-30 00:00:00', '444444444', '[\"27.8143946\",\"36.0512761\"]', NULL, 1, '2026-07-30 23:36:10', '2026-07-30 23:36:10'),
(237, '2026-07-30 00:00:00', '444444444', '[\"27.8139748\",\"36.0514077\"]', NULL, 0, '2026-07-30 23:37:00', '2026-07-30 23:37:00'),
(238, '2026-07-31 00:00:00', '65465498798', '[\"17.38738738738739\",\"42.538335613520395\"]', NULL, 0, '2026-07-31 07:09:57', '2026-07-31 07:09:57'),
(239, '2026-07-31 00:00:00', '222222222', '[\"26.251541715599767\",\"50.19880958806339\"]', NULL, 0, '2026-07-31 10:30:43', '2026-07-31 10:30:43'),
(240, '2026-07-31 00:00:00', '654654213', '[\"31.754881\",\"39.0159149\"]', NULL, 0, '2026-07-31 16:01:50', '2026-07-31 16:01:50'),
(241, '2026-07-31 00:00:00', '654654213', '[\"31.7554517\",\"39.0179775\"]', NULL, 1, '2026-07-31 19:44:26', '2026-07-31 19:44:26'),
(242, '2026-07-31 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 1, '2026-07-31 20:39:21', '2026-07-31 20:39:21'),
(243, '2026-08-01 00:00:00', '654654213', '[\"31.7554741\",\"39.0177461\"]', NULL, 0, '2026-08-01 05:31:50', '2026-08-01 05:31:50'),
(244, '2026-08-01 00:00:00', '65465465465', '[\"17.3708888\",\"42.5300361\"]', NULL, 0, '2026-08-01 07:31:48', '2026-08-01 07:31:48'),
(245, '2026-08-01 00:00:00', '111111111', '[\"17.3709391\",\"42.5025299\"]', NULL, 0, '2026-08-01 08:04:56', '2026-08-01 08:04:56'),
(246, '2026-08-01 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-01 08:39:29', '2026-08-01 08:39:29'),
(247, '2026-08-01 00:00:00', '666666666', '[\"24.5988717\",\"46.7669115\"]', NULL, 0, '2026-08-01 09:36:33', '2026-08-01 09:36:33'),
(248, '2026-08-01 00:00:00', '444444444', '[\"27.347039487289546\",\"35.690198167270104\"]', NULL, 0, '2026-08-01 10:06:16', '2026-08-01 10:06:16'),
(249, '2026-08-01 00:00:00', '222222222', '[\"26.364289474778168\",\"50.20909572210628\"]', NULL, 0, '2026-08-01 11:57:40', '2026-08-01 11:57:40'),
(250, '2026-08-01 00:00:00', '654654213', '[\"31.7554758\",\"39.0177495\"]', NULL, 1, '2026-08-01 16:32:12', '2026-08-01 16:32:12'),
(251, '2026-08-01 00:00:00', '111111111', '[\"17.3708283\",\"42.5023595\"]', NULL, 1, '2026-08-01 17:28:32', '2026-08-01 17:28:32'),
(252, '2026-08-01 00:00:00', '444444444', '[\"27.346601479999997\",\"35.69000625\"]', NULL, 1, '2026-08-01 18:17:18', '2026-08-01 18:17:18'),
(253, '2026-08-01 00:00:00', '65465465465', '[\"17.3750032\",\"42.5417094\"]', NULL, 1, '2026-08-01 19:21:55', '2026-08-01 19:21:55'),
(254, '2026-08-01 00:00:00', '666666666', '[\"24.6273252\",\"46.7908781\"]', NULL, 1, '2026-08-01 21:30:08', '2026-08-01 21:30:08'),
(255, '2026-08-01 00:00:00', '65465498798', '[\"21.47747747747748\",\"39.30591801540508\"]', NULL, 1, '2026-08-01 22:07:26', '2026-08-01 22:07:26'),
(256, '2026-08-02 00:00:00', '654654213', '[\"31.75547\",\"39.0177632\"]', NULL, 0, '2026-08-02 05:31:38', '2026-08-02 05:31:38'),
(257, '2026-08-02 00:00:00', '111111111', '[\"17.3728085\",\"42.5038265\"]', NULL, 0, '2026-08-02 07:16:24', '2026-08-02 07:16:24'),
(258, '2026-08-02 00:00:00', '666666666', '[\"24.5989034\",\"46.7670455\"]', NULL, 0, '2026-08-02 08:26:19', '2026-08-02 08:26:19'),
(259, '2026-08-02 00:00:00', '444444444', '[\"27.346601704460944\",\"35.69000483527744\"]', NULL, 0, '2026-08-02 09:19:27', '2026-08-02 09:19:27'),
(260, '2026-08-02 00:00:00', '65465498798', '[\"21.513513513513512\",\"39.18008375438145\"]', NULL, 0, '2026-08-02 09:41:41', '2026-08-02 09:41:41'),
(261, '2026-08-02 00:00:00', '65465465465', '[\"17.3224965\",\"42.4066162\"]', NULL, 0, '2026-08-02 16:43:59', '2026-08-02 16:43:59'),
(262, '2026-08-02 00:00:00', '111111111', '[\"17.3899591\",\"42.5413822\"]', NULL, 1, '2026-08-02 19:09:33', '2026-08-02 19:09:33'),
(263, '2026-08-02 00:00:00', '654654213', '[\"31.7551251\",\"39.0178274\"]', NULL, 1, '2026-08-02 20:16:46', '2026-08-02 20:16:46'),
(264, '2026-08-02 00:00:00', '666666666', '[\"24.6777203\",\"46.7481393\"]', NULL, 1, '2026-08-02 21:13:52', '2026-08-02 21:13:52'),
(265, '2026-08-02 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 1, '2026-08-02 22:50:19', '2026-08-02 22:50:19'),
(266, '2026-08-02 00:00:00', '444444444', '[\"27.3547969\",\"35.6855822\"]', NULL, 0, '2026-08-02 23:02:03', '2026-08-02 23:02:03'),
(267, '2026-08-02 00:00:00', '444444444', '[\"27.3547963\",\"35.6855807\"]', NULL, 1, '2026-08-02 23:02:12', '2026-08-02 23:02:12'),
(268, '2026-08-03 00:00:00', '654654213', '[\"31.7554648\",\"39.017763\"]', NULL, 0, '2026-08-03 05:45:42', '2026-08-03 05:45:42'),
(269, '2026-08-03 00:00:00', '111111111', '[\"17.3833782\",\"42.4621755\"]', NULL, 0, '2026-08-03 07:31:55', '2026-08-03 07:31:55'),
(270, '2026-08-03 00:00:00', '666666666', '[\"24.5988616\",\"46.7669096\"]', NULL, 0, '2026-08-03 08:27:53', '2026-08-03 08:27:53'),
(271, '2026-08-03 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-03 08:33:26', '2026-08-03 08:33:26'),
(272, '2026-08-03 00:00:00', '222222222', '[\"26.379568070906064\",\"50.17098014790203\"]', NULL, 0, '2026-08-03 08:33:58', '2026-08-03 08:33:58'),
(273, '2026-08-03 00:00:00', '65465465465', '[\"17.3232374\",\"42.4067564\"]', NULL, 0, '2026-08-03 08:34:29', '2026-08-03 08:34:29'),
(274, '2026-08-03 00:00:00', '111111111', '[\"17.3708283\",\"42.5023595\"]', NULL, 1, '2026-08-03 20:07:33', '2026-08-03 20:07:33'),
(275, '2026-08-03 00:00:00', '65465465465', '[\"17.3707642\",\"42.5299103\"]', NULL, 1, '2026-08-03 20:12:08', '2026-08-03 20:12:08'),
(276, '2026-08-03 00:00:00', '666666666', '[\"24.5991496\",\"46.7669014\"]', NULL, 1, '2026-08-03 21:52:48', '2026-08-03 21:52:48'),
(277, '2026-08-03 00:00:00', '65465498798', '[\"21.47747747747748\",\"39.28655549421522\"]', NULL, 1, '2026-08-03 22:07:49', '2026-08-03 22:07:49'),
(278, '2026-08-03 00:00:00', '654654213', '[\"28.9463938\",\"37.9961872\"]', NULL, 1, '2026-08-03 23:46:02', '2026-08-03 23:46:02'),
(279, '2026-08-04 00:00:00', '654654213', '[\"28.6479733\",\"37.7090988\"]', NULL, 0, '2026-08-04 00:09:05', '2026-08-04 00:09:05'),
(280, '2026-08-04 00:00:00', '654654213', '[\"27.3503514\",\"35.690935\"]', NULL, 1, '2026-08-04 03:36:11', '2026-08-04 03:36:11'),
(281, '2026-08-04 00:00:00', '111111111', '[\"17.3708283\",\"42.5023595\"]', NULL, 0, '2026-08-04 07:27:36', '2026-08-04 07:27:36'),
(282, '2026-08-04 00:00:00', '666666666', '[\"24.5987095\",\"46.7669806\"]', NULL, 0, '2026-08-04 07:56:32', '2026-08-04 07:56:32'),
(283, '2026-08-04 00:00:00', '65465465465', '[\"17.374289\",\"42.5029835\"]', NULL, 0, '2026-08-04 08:32:19', '2026-08-04 08:32:19'),
(284, '2026-08-04 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-04 08:32:40', '2026-08-04 08:32:40'),
(285, '2026-08-04 00:00:00', '444444444', '[\"27.34660221797932\",\"35.69000163857374\"]', NULL, 0, '2026-08-04 08:58:43', '2026-08-04 08:58:43'),
(286, '2026-08-04 00:00:00', '444444444', '[\"27.346977325195056\",\"35.6901758250623\"]', NULL, 1, '2026-08-04 18:18:22', '2026-08-04 18:18:22'),
(287, '2026-08-04 00:00:00', '111111111', '[\"17.3708283\",\"42.5023595\"]', NULL, 0, '2026-08-04 20:47:41', '2026-08-04 20:47:41'),
(288, '2026-08-04 00:00:00', '65465465465', '[\"17.3225567\",\"42.4067236\"]', NULL, 1, '2026-08-04 21:11:05', '2026-08-04 21:11:05'),
(289, '2026-08-04 00:00:00', '666666666', '[\"24.5988732\",\"46.7669404\"]', NULL, 1, '2026-08-04 22:52:40', '2026-08-04 22:52:40'),
(290, '2026-08-05 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-05 06:44:57', '2026-08-05 06:44:57'),
(291, '2026-08-05 00:00:00', '111111111', '[\"17.3739686\",\"42.5042103\"]', NULL, 0, '2026-08-05 07:25:05', '2026-08-05 07:25:05'),
(292, '2026-08-05 00:00:00', '654654213', '[\"27.3499071\",\"35.6902069\"]', NULL, 0, '2026-08-05 07:58:15', '2026-08-05 07:58:15'),
(293, '2026-08-05 00:00:00', '666666666', '[\"24.5984903\",\"46.7674815\"]', NULL, 0, '2026-08-05 07:58:23', '2026-08-05 07:58:23'),
(294, '2026-08-05 00:00:00', '444444444', '[\"27.34660156710797\",\"35.690005701071065\"]', NULL, 0, '2026-08-05 08:08:14', '2026-08-05 08:08:14'),
(295, '2026-08-05 00:00:00', '65465465465', '[\"17.3258152\",\"42.4068978\"]', NULL, 0, '2026-08-05 08:22:26', '2026-08-05 08:22:26'),
(296, '2026-08-05 00:00:00', '65465465465', '[\"17.3709623\",\"42.5301679\"]', NULL, 1, '2026-08-05 18:30:55', '2026-08-05 18:30:55'),
(297, '2026-08-05 00:00:00', '666666666', '[\"24.5985307\",\"46.7673437\"]', NULL, 1, '2026-08-05 19:52:40', '2026-08-05 19:52:40'),
(298, '2026-08-05 00:00:00', '654654213', '[\"27.3501502\",\"35.6903967\"]', NULL, 1, '2026-08-05 20:41:06', '2026-08-05 20:41:06'),
(299, '2026-08-05 00:00:00', '111111111', '[\"17.3717431\",\"42.5048237\"]', NULL, 1, '2026-08-05 20:58:23', '2026-08-05 20:58:23'),
(300, '2026-08-05 00:00:00', '654654213', '[\"27.3495558\",\"35.6893085\"]', NULL, 0, '2026-08-05 21:08:03', '2026-08-05 21:08:03'),
(301, '2026-08-05 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 1, '2026-08-05 21:56:38', '2026-08-05 21:56:38'),
(302, '2026-08-05 00:00:00', '444444444', '[\"31.7555636\",\"39.0174703\"]', NULL, 1, '2026-08-05 21:57:33', '2026-08-05 21:57:33'),
(303, '2026-08-05 00:00:00', '654654213', '[\"27.3499168\",\"35.689999\"]', NULL, 1, '2026-08-05 22:06:24', '2026-08-05 22:06:24'),
(304, '2026-08-06 00:00:00', '444444444', '[\"31.755463490948596\",\"39.01771043756984\"]', NULL, 0, '2026-08-06 06:06:26', '2026-08-06 06:06:26'),
(305, '2026-08-06 00:00:00', '111111111', '[\"17.3708301\",\"42.5023644\"]', NULL, 0, '2026-08-06 07:22:33', '2026-08-06 07:22:33'),
(306, '2026-08-06 00:00:00', '654654213', '[\"27.3503483\",\"35.6903255\"]', NULL, 0, '2026-08-06 07:34:58', '2026-08-06 07:34:58'),
(307, '2026-08-06 00:00:00', '65465465465', '[\"17.3465813\",\"42.4049308\"]', NULL, 0, '2026-08-06 08:00:01', '2026-08-06 08:00:01'),
(308, '2026-08-06 00:00:00', '666666666', '[\"24.5988673\",\"46.7669152\"]', NULL, 0, '2026-08-06 08:46:57', '2026-08-06 08:46:57'),
(309, '2026-08-06 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-06 09:30:04', '2026-08-06 09:30:04'),
(310, '2026-08-06 00:00:00', '65465465465', '[\"17.322673\",\"42.4066112\"]', NULL, 1, '2026-08-06 16:29:20', '2026-08-06 16:29:20'),
(311, '2026-08-06 00:00:00', '65465465465', '[\"17.3226779\",\"42.4066049\"]', NULL, 0, '2026-08-06 16:29:46', '2026-08-06 16:29:46'),
(312, '2026-08-06 00:00:00', '777777777', '[\"28.5461226\",\"36.6217251\"]', NULL, 0, '2026-08-06 17:45:20', '2026-08-06 17:45:20'),
(313, '2026-08-06 00:00:00', '444444444', '[\"31.7554816\",\"39.0178163\"]', NULL, 1, '2026-08-06 18:08:29', '2026-08-06 18:08:29'),
(314, '2026-08-06 00:00:00', '111111111', '[\"17.3708654\",\"42.5024905\"]', NULL, 1, '2026-08-06 20:14:35', '2026-08-06 20:14:35'),
(315, '2026-08-06 00:00:00', '654654213', '[\"27.350349\",\"35.6909381\"]', NULL, 1, '2026-08-06 21:12:25', '2026-08-06 21:12:25'),
(316, '2026-08-06 00:00:00', '666666666', '[\"24.5988684\",\"46.7669097\"]', NULL, 1, '2026-08-06 21:47:29', '2026-08-06 21:47:29'),
(317, '2026-08-06 00:00:00', '777777777', '[\"27.3502241\",\"35.6904188\"]', NULL, 1, '2026-08-06 22:31:11', '2026-08-06 22:31:11'),
(318, '2026-08-06 00:00:00', '65465498798', '[\"21.47747747747748\",\"39.22846793064566\"]', NULL, 0, '2026-08-06 23:41:59', '2026-08-06 23:41:59'),
(319, '2026-08-07 00:00:00', '666666666', '[\"24.5988751\",\"46.7669011\"]', NULL, 0, '2026-08-07 15:34:07', '2026-08-07 15:34:07'),
(320, '2026-08-07 00:00:00', '654654213', '[\"27.3499168\",\"35.689999\"]', NULL, 0, '2026-08-07 17:38:22', '2026-08-07 17:38:22'),
(321, '2026-08-07 00:00:00', '666666666', '[\"24.5990354\",\"46.7668965\"]', NULL, 1, '2026-08-07 22:23:31', '2026-08-07 22:23:31'),
(322, '2026-08-07 00:00:00', '654654213', '[\"27.3507908\",\"35.6913648\"]', NULL, 1, '2026-08-07 22:38:29', '2026-08-07 22:38:29'),
(323, '2026-08-08 00:00:00', '444444444', '[\"31.7553589\",\"39.0176985\"]', NULL, 0, '2026-08-08 05:58:02', '2026-08-08 05:58:02'),
(324, '2026-08-08 00:00:00', '654654213', '[\"27.3500169\",\"35.6896575\"]', NULL, 0, '2026-08-08 08:58:22', '2026-08-08 08:58:22'),
(325, '2026-08-08 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-08 09:04:23', '2026-08-08 09:04:23'),
(326, '2026-08-08 00:00:00', '111111111', '[\"17.370978\",\"42.5027186\"]', NULL, 0, '2026-08-08 09:11:46', '2026-08-08 09:11:46'),
(327, '2026-08-08 00:00:00', '65465465465', '[\"17.3225216\",\"42.4066201\"]', NULL, 0, '2026-08-08 16:15:13', '2026-08-08 16:15:13'),
(328, '2026-08-08 00:00:00', '65465465465', '[\"17.3225216\",\"42.4066201\"]', NULL, 1, '2026-08-08 16:15:43', '2026-08-08 16:15:43'),
(329, '2026-08-08 00:00:00', '444444444', '[\"31.7552001\",\"39.0179421\"]', NULL, 1, '2026-08-08 17:29:04', '2026-08-08 17:29:04'),
(330, '2026-08-08 00:00:00', '654654213', '[\"27.3503627\",\"35.6909279\"]', NULL, 1, '2026-08-08 21:14:46', '2026-08-08 21:14:46'),
(331, '2026-08-09 00:00:00', '444444444', '[\"31.755450667506192\",\"39.017698527830355\"]', NULL, 0, '2026-08-09 06:28:10', '2026-08-09 06:28:10'),
(332, '2026-08-09 00:00:00', '666666666', '[\"24.6058932\",\"46.7571538\"]', NULL, 0, '2026-08-09 07:20:50', '2026-08-09 07:20:50'),
(333, '2026-08-09 00:00:00', '111111111', '[\"17.3708284\",\"42.5023607\"]', NULL, 0, '2026-08-09 07:37:03', '2026-08-09 07:37:03'),
(334, '2026-08-09 00:00:00', '65465465465', '[\"17.3224783\",\"42.4066642\"]', NULL, 0, '2026-08-09 07:38:08', '2026-08-09 07:38:08'),
(335, '2026-08-09 00:00:00', '654654213', '[\"27.3499168\",\"35.689999\"]', NULL, 0, '2026-08-09 08:07:55', '2026-08-09 08:07:55'),
(336, '2026-08-09 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-09 08:35:14', '2026-08-09 08:35:14'),
(337, '2026-08-09 00:00:00', '65465465465', '[\"17.3141875\",\"42.4050542\"]', NULL, 1, '2026-08-09 16:35:13', '2026-08-09 16:35:13'),
(338, '2026-08-09 00:00:00', '111111111', '[\"17.3225415\",\"42.4066565\"]', NULL, 1, '2026-08-09 16:37:12', '2026-08-09 16:37:12'),
(339, '2026-08-09 00:00:00', '654654213', '[\"27.3500169\",\"35.6896575\"]', NULL, 1, '2026-08-09 18:34:15', '2026-08-09 18:34:15'),
(340, '2026-08-09 00:00:00', '666666666', '[\"24.5832881\",\"46.7899259\"]', NULL, 1, '2026-08-09 19:52:51', '2026-08-09 19:52:51'),
(341, '2026-08-09 00:00:00', '444444444', '[\"31.7548549\",\"39.0158809\"]', NULL, 1, '2026-08-09 20:33:28', '2026-08-09 20:33:28'),
(342, '2026-08-10 00:00:00', '444444444', '[\"31.75545073849373\",\"39.01769842892134\"]', NULL, 0, '2026-08-10 06:41:15', '2026-08-10 06:41:15'),
(343, '2026-08-10 00:00:00', '111111111', '[\"17.3708284\",\"42.5023607\"]', NULL, 0, '2026-08-10 07:38:24', '2026-08-10 07:38:24'),
(344, '2026-08-10 00:00:00', '666666666', '[\"24.5832432\",\"46.7899091\"]', NULL, 0, '2026-08-10 07:46:28', '2026-08-10 07:46:28'),
(345, '2026-08-10 00:00:00', '65465465465', '[\"17.3609264\",\"42.4047469\"]', NULL, 0, '2026-08-10 08:09:21', '2026-08-10 08:09:21'),
(346, '2026-08-10 00:00:00', '654654213', '[\"27.3502809\",\"35.6908512\"]', NULL, 0, '2026-08-10 08:48:23', '2026-08-10 08:48:23'),
(347, '2026-08-10 00:00:00', '65465498798', '[\"21.513513513513512\",\"39.19945107210482\"]', NULL, 0, '2026-08-10 09:00:47', '2026-08-10 09:00:47'),
(348, '2026-08-10 00:00:00', '65465465465', '[\"17.3223179\",\"42.4064274\"]', NULL, 1, '2026-08-10 16:43:21', '2026-08-10 16:43:21'),
(349, '2026-08-10 00:00:00', '444444444', '[\"31.7448853\",\"39.0445356\"]', NULL, 1, '2026-08-10 17:52:22', '2026-08-10 17:52:22'),
(350, '2026-08-10 00:00:00', '111111111', '[\"17.3712671\",\"42.5034158\"]', NULL, 1, '2026-08-10 18:48:23', '2026-08-10 18:48:23'),
(351, '2026-08-10 00:00:00', '666666666', '[\"24.5831988\",\"46.789956\"]', NULL, 0, '2026-08-10 21:05:53', '2026-08-10 21:05:53'),
(352, '2026-08-10 00:00:00', '666666666', '[\"24.5833547\",\"46.7898997\"]', NULL, 1, '2026-08-10 21:05:59', '2026-08-10 21:05:59'),
(353, '2026-08-10 00:00:00', '654654213', '[\"27.3502019\",\"35.6907489\"]', NULL, 1, '2026-08-10 21:40:13', '2026-08-10 21:40:13'),
(354, '2026-08-10 00:00:00', '65465498798', '[\"21.513513513513512\",\"39.19945107210482\"]', NULL, 1, '2026-08-10 23:09:41', '2026-08-10 23:09:41'),
(355, '2026-08-11 00:00:00', '444444444', '[\"31.75541738002398\",\"39.01760715276564\"]', NULL, 0, '2026-08-11 06:00:54', '2026-08-11 06:00:54'),
(356, '2026-08-11 00:00:00', '666666666', '[\"24.5832404\",\"46.7899338\"]', NULL, 0, '2026-08-11 07:45:53', '2026-08-11 07:45:53'),
(357, '2026-08-11 00:00:00', '654654213', '[\"27.3502152\",\"35.6903776\"]', NULL, 0, '2026-08-11 07:55:09', '2026-08-11 07:55:09'),
(358, '2026-08-11 00:00:00', '111111111', '[\"17.3708284\",\"42.5023607\"]', NULL, 0, '2026-08-11 07:55:46', '2026-08-11 07:55:46'),
(359, '2026-08-11 00:00:00', '65465465465', '[\"17.3230457\",\"42.4050542\"]', NULL, 0, '2026-08-11 08:22:36', '2026-08-11 08:22:36'),
(360, '2026-08-11 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-11 09:11:26', '2026-08-11 09:11:26'),
(361, '2026-08-11 00:00:00', '444444444', '[\"31.75540303402513\",\"39.017681512074304\"]', NULL, 1, '2026-08-11 17:58:04', '2026-08-11 17:58:04'),
(362, '2026-08-11 00:00:00', '666666666', '[\"24.5832552\",\"46.7899564\"]', NULL, 1, '2026-08-11 19:42:51', '2026-08-11 19:42:51'),
(363, '2026-08-11 00:00:00', '111111111', '[\"17.4316421\",\"42.5298495\"]', NULL, 0, '2026-08-11 19:44:36', '2026-08-11 19:44:36'),
(364, '2026-08-11 00:00:00', '111111111', '[\"17.4316421\",\"42.5298495\"]', NULL, 1, '2026-08-11 19:45:06', '2026-08-11 19:45:06'),
(365, '2026-08-11 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 1, '2026-08-11 22:51:17', '2026-08-11 22:51:17'),
(366, '2026-08-11 00:00:00', '654654213', '[\"27.3505357\",\"35.6889746\"]', NULL, 1, '2026-08-11 23:39:54', '2026-08-11 23:39:54'),
(367, '2026-08-12 00:00:00', '444444444', '[\"31.75545069708609\",\"39.0176984163861\"]', NULL, 0, '2026-08-12 06:01:39', '2026-08-12 06:01:39'),
(368, '2026-08-12 00:00:00', '654654213', '[\"27.3512094\",\"35.6910233\"]', NULL, 0, '2026-08-12 07:44:45', '2026-08-12 07:44:45'),
(369, '2026-08-12 00:00:00', '666666666', '[\"24.5832785\",\"46.7899535\"]', NULL, 0, '2026-08-12 07:53:59', '2026-08-12 07:53:59'),
(370, '2026-08-12 00:00:00', '111111111', '[\"17.3708284\",\"42.5023607\"]', NULL, 0, '2026-08-12 07:58:24', '2026-08-12 07:58:24'),
(371, '2026-08-12 00:00:00', '111111111', '[\"17.3708284\",\"42.5023607\"]', NULL, 0, '2026-08-12 07:58:55', '2026-08-12 07:58:55'),
(372, '2026-08-12 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-12 08:17:14', '2026-08-12 08:17:14'),
(373, '2026-08-12 00:00:00', '65465465465', '[\"17.3730989\",\"42.5177031\"]', NULL, 0, '2026-08-12 08:22:37', '2026-08-12 08:22:37'),
(374, '2026-08-12 00:00:00', '65465465465', '[\"17.3230457\",\"42.4050542\"]', NULL, 1, '2026-08-12 16:34:42', '2026-08-12 16:34:42'),
(375, '2026-08-12 00:00:00', '111111111', '[\"17.3708284\",\"42.5023607\"]', NULL, 1, '2026-08-12 17:23:16', '2026-08-12 17:23:16'),
(376, '2026-08-12 00:00:00', '111111111', '[\"17.3708284\",\"42.5023607\"]', NULL, 1, '2026-08-12 17:23:46', '2026-08-12 17:23:46'),
(377, '2026-08-12 00:00:00', '666666666', '[\"24.583223\",\"46.7900022\"]', NULL, 1, '2026-08-12 20:00:02', '2026-08-12 20:00:02'),
(378, '2026-08-12 00:00:00', '654654213', '[\"27.3504374\",\"35.6908744\"]', NULL, 1, '2026-08-12 20:24:42', '2026-08-12 20:24:42'),
(379, '2026-08-12 00:00:00', '444444444', '[\"29.43877945740145\",\"43.8464395513174\"]', NULL, 1, '2026-08-12 23:28:06', '2026-08-12 23:28:06'),
(380, '2026-08-13 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 1, '2026-08-13 00:14:26', '2026-08-13 00:14:26'),
(381, '2026-08-13 00:00:00', '444444444', '[\"29.2220452998561\",\"44.19366736446342\"]', NULL, 0, '2026-08-13 00:15:33', '2026-08-13 00:15:33'),
(382, '2026-08-13 00:00:00', '666666666', '[\"24.5836204\",\"46.7900798\"]', NULL, 0, '2026-08-13 07:09:04', '2026-08-13 07:09:04'),
(383, '2026-08-13 00:00:00', '111111111', '[\"17.3716167\",\"42.5029922\"]', NULL, 0, '2026-08-13 07:27:16', '2026-08-13 07:27:16'),
(384, '2026-08-13 00:00:00', '654654213', '[\"27.3502188\",\"35.690439\"]', NULL, 0, '2026-08-13 07:50:56', '2026-08-13 07:50:56'),
(385, '2026-08-13 00:00:00', '65465465465', '[\"17.3737653\",\"42.5140236\"]', NULL, 0, '2026-08-13 08:17:11', '2026-08-13 08:17:11'),
(386, '2026-08-13 00:00:00', '65465498798', '[\"21.513513513513512\",\"39.18008375438145\"]', NULL, 0, '2026-08-13 09:28:08', '2026-08-13 09:28:08'),
(387, '2026-08-13 00:00:00', '111111111', '[\"17.3708843\",\"42.5025529\"]', NULL, 1, '2026-08-13 17:57:25', '2026-08-13 17:57:25'),
(388, '2026-08-13 00:00:00', '65465465465', '[\"17.3207395\",\"42.405976\"]', NULL, 1, '2026-08-13 18:11:15', '2026-08-13 18:11:15'),
(389, '2026-08-13 00:00:00', '666666666', '[\"24.5832392\",\"46.7899461\"]', NULL, 1, '2026-08-13 21:23:26', '2026-08-13 21:23:26'),
(390, '2026-08-13 00:00:00', '654654213', '[\"27.3503573\",\"35.6906475\"]', NULL, 1, '2026-08-13 22:23:03', '2026-08-13 22:23:03'),
(391, '2026-08-14 00:00:00', '65465498798', '[\"21.62162162162162\",\"39.18993413023729\"]', NULL, 1, '2026-08-14 01:59:36', '2026-08-14 01:59:36'),
(392, '2026-08-14 00:00:00', '65465498798', '[\"21.47747747747748\",\"39.22846793064566\"]', NULL, 0, '2026-08-14 16:23:52', '2026-08-14 16:23:52'),
(393, '2026-08-14 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 1, '2026-08-14 21:57:27', '2026-08-14 21:57:27'),
(394, '2026-08-15 00:00:00', '65465465465', '[\"17.3709408\",\"42.5300366\"]', NULL, 0, '2026-08-15 07:22:21', '2026-08-15 07:22:21'),
(395, '2026-08-15 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-15 08:45:29', '2026-08-15 08:45:29'),
(396, '2026-08-15 00:00:00', '111111111', '[\"17.370913\",\"42.5025152\"]', NULL, 0, '2026-08-15 09:07:40', '2026-08-15 09:07:40'),
(397, '2026-08-15 00:00:00', '111111111', '[\"17.3708837\",\"42.5024887\"]', NULL, 0, '2026-08-15 09:08:02', '2026-08-15 09:08:02'),
(398, '2026-08-15 00:00:00', '654654213', '[\"27.3488794\",\"35.6913648\"]', NULL, 0, '2026-08-15 09:13:09', '2026-08-15 09:13:09'),
(399, '2026-08-15 00:00:00', '666666666', '[\"24.583214\",\"46.7899452\"]', NULL, 0, '2026-08-15 09:29:21', '2026-08-15 09:29:21'),
(400, '2026-08-15 00:00:00', '444444444', '[\"26.469055956191994\",\"49.79738379622707\"]', NULL, 0, '2026-08-15 11:06:02', '2026-08-15 11:06:02'),
(401, '2026-08-15 00:00:00', '111111111', '[\"17.3707843\",\"42.5023439\"]', NULL, 1, '2026-08-15 17:11:51', '2026-08-15 17:11:51'),
(402, '2026-08-15 00:00:00', '654654213', '[\"27.3508725\",\"35.689999\"]', NULL, 1, '2026-08-15 17:21:52', '2026-08-15 17:21:52'),
(403, '2026-08-15 00:00:00', '65465465465', '[\"17.3709421\",\"42.5300905\"]', NULL, 1, '2026-08-15 18:16:09', '2026-08-15 18:16:09'),
(404, '2026-08-15 00:00:00', '666666666', '[\"24.5832221\",\"46.7899805\"]', NULL, 1, '2026-08-15 20:42:49', '2026-08-15 20:42:49'),
(405, '2026-08-16 00:00:00', '111111111', '[\"17.3708278\",\"42.5025227\"]', NULL, 0, '2026-08-16 07:33:23', '2026-08-16 07:33:23'),
(406, '2026-08-16 00:00:00', '65465465465', '[\"17.322966\",\"42.4053615\"]', NULL, 0, '2026-08-16 07:45:53', '2026-08-16 07:45:53'),
(407, '2026-08-16 00:00:00', '654654213', '[\"27.3500169\",\"35.6896575\"]', NULL, 0, '2026-08-16 07:53:57', '2026-08-16 07:53:57'),
(408, '2026-08-16 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-16 08:04:01', '2026-08-16 08:04:01'),
(409, '2026-08-16 00:00:00', '666666666', '[\"24.5832381\",\"46.7900102\"]', NULL, 0, '2026-08-16 09:00:28', '2026-08-16 09:00:28'),
(410, '2026-08-16 00:00:00', '65465465465', '[\"17.3194226\",\"42.4053615\"]', NULL, 1, '2026-08-16 16:28:44', '2026-08-16 16:28:44'),
(411, '2026-08-16 00:00:00', '666666666', '[\"24.5832489\",\"46.7899403\"]', NULL, 1, '2026-08-16 20:16:28', '2026-08-16 20:16:28'),
(412, '2026-08-16 00:00:00', '65465498798', '[\"21.62162162162162\",\"39.18993413023729\"]', NULL, 1, '2026-08-16 21:26:24', '2026-08-16 21:26:24'),
(413, '2026-08-16 00:00:00', '654654213', '[\"27.3480237\",\"35.6910233\"]', NULL, 1, '2026-08-16 21:44:23', '2026-08-16 21:44:23'),
(414, '2026-08-16 00:00:00', '111111111', '[\"17.4166123\",\"42.5351772\"]', NULL, 0, '2026-08-16 22:03:25', '2026-08-16 22:03:25'),
(415, '2026-08-16 00:00:00', '111111111', '[\"17.4117539\",\"42.535237\"]', NULL, 0, '2026-08-16 22:03:39', '2026-08-16 22:03:39'),
(416, '2026-08-16 00:00:00', '111111111', '[\"17.4088983\",\"42.5355476\"]', NULL, 1, '2026-08-16 22:04:03', '2026-08-16 22:04:03'),
(417, '2026-08-17 00:00:00', '666666666', '[\"24.848664\",\"46.6033356\"]', NULL, 0, '2026-08-17 00:01:09', '2026-08-17 00:01:09'),
(418, '2026-08-17 00:00:00', '65465465465', '[\"17.3747874\",\"42.5131469\"]', NULL, 0, '2026-08-17 07:07:56', '2026-08-17 07:07:56'),
(419, '2026-08-17 00:00:00', '654654213', '[\"27.3514914\",\"35.6889746\"]', NULL, 0, '2026-08-17 07:40:09', '2026-08-17 07:40:09'),
(420, '2026-08-17 00:00:00', '111111111', '[\"17.3707843\",\"42.5023439\"]', NULL, 0, '2026-08-17 08:08:25', '2026-08-17 08:08:25'),
(421, '2026-08-17 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-17 08:13:21', '2026-08-17 08:13:21'),
(422, '2026-08-17 00:00:00', '65465465465', '[\"17.3706377\",\"42.5288584\"]', NULL, 1, '2026-08-17 17:16:14', '2026-08-17 17:16:14'),
(423, '2026-08-17 00:00:00', '111111111', '[\"17.3707843\",\"42.5023439\"]', NULL, 1, '2026-08-17 17:56:47', '2026-08-17 17:56:47'),
(424, '2026-08-17 00:00:00', '666666666', '[\"24.5962789\",\"46.7799216\"]', NULL, 1, '2026-08-17 20:26:56', '2026-08-17 20:26:56'),
(425, '2026-08-17 00:00:00', '65465498798', '[\"21.513513513513512\",\"39.18008375438145\"]', NULL, 1, '2026-08-17 20:46:17', '2026-08-17 20:46:17'),
(426, '2026-08-17 00:00:00', '654654213', '[\"27.3495983\",\"35.689999\"]', NULL, 1, '2026-08-17 23:00:22', '2026-08-17 23:00:22'),
(427, '2026-08-18 00:00:00', '65465465465', '[\"17.3708559\",\"42.5301608\"]', NULL, 0, '2026-08-18 07:19:34', '2026-08-18 07:19:34'),
(428, '2026-08-18 00:00:00', '111111111', '[\"17.370786\",\"42.5023476\"]', NULL, 0, '2026-08-18 07:57:37', '2026-08-18 07:57:37'),
(429, '2026-08-18 00:00:00', '666666666', '[\"24.5832168\",\"46.7899795\"]', NULL, 0, '2026-08-18 08:15:19', '2026-08-18 08:15:19'),
(430, '2026-08-18 00:00:00', '654654213', '[\"27.35028\",\"35.6902624\"]', NULL, 0, '2026-08-18 08:25:57', '2026-08-18 08:25:57'),
(431, '2026-08-18 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-18 09:09:22', '2026-08-18 09:09:22'),
(432, '2026-08-18 00:00:00', '444444444', '[\"27.6694454015123\",\"48.772996242776536\"]', NULL, 0, '2026-08-18 17:07:41', '2026-08-18 17:07:41'),
(433, '2026-08-18 00:00:00', '654654213', '[\"27.350117\",\"35.6893161\"]', NULL, 0, '2026-08-18 18:01:05', '2026-08-18 18:01:05'),
(434, '2026-08-18 00:00:00', '654654213', '[\"27.3501765\",\"35.6903807\"]', NULL, 1, '2026-08-18 18:01:17', '2026-08-18 18:01:17'),
(435, '2026-08-18 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 1, '2026-08-18 18:08:33', '2026-08-18 18:08:33'),
(436, '2026-08-18 00:00:00', '444444444', '[\"28.408585627355777\",\"48.47804683528833\"]', NULL, 1, '2026-08-18 18:45:25', '2026-08-18 18:45:25'),
(437, '2026-08-18 00:00:00', '666666666', '[\"24.6113583\",\"46.7674001\"]', NULL, 1, '2026-08-18 20:33:14', '2026-08-18 20:33:14'),
(438, '2026-08-19 00:00:00', '111111111', '[\"21.328673\",\"43.9175883\"]', NULL, 1, '2026-08-19 00:27:13', '2026-08-19 00:27:13'),
(439, '2026-08-19 00:00:00', '111111111', '[\"21.3337615\",\"43.9200754\"]', NULL, 0, '2026-08-19 00:27:32', '2026-08-19 00:27:32'),
(440, '2026-08-19 00:00:00', '65465465465', '[\"17.3714527\",\"42.5289555\"]', NULL, 1, '2026-08-19 00:27:57', '2026-08-19 00:27:57'),
(441, '2026-08-19 00:00:00', '666666666', '[\"24.5832555\",\"46.7898437\"]', NULL, 0, '2026-08-19 07:10:09', '2026-08-19 07:10:09'),
(442, '2026-08-19 00:00:00', '65465465465', '[\"17.3708345\",\"42.5299973\"]', NULL, 0, '2026-08-19 07:55:30', '2026-08-19 07:55:30'),
(443, '2026-08-19 00:00:00', '654654213', '[\"27.3495983\",\"35.689999\"]', NULL, 0, '2026-08-19 08:20:00', '2026-08-19 08:20:00'),
(444, '2026-08-19 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-19 08:51:40', '2026-08-19 08:51:40'),
(445, '2026-08-19 00:00:00', '111111111', '[\"26.4349919\",\"50.0566084\"]', NULL, 1, '2026-08-19 17:47:50', '2026-08-19 17:47:50'),
(446, '2026-08-19 00:00:00', '654654213', '[\"27.3502214\",\"35.6903319\"]', NULL, 1, '2026-08-19 20:49:25', '2026-08-19 20:49:25'),
(447, '2026-08-19 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 1, '2026-08-19 22:05:07', '2026-08-19 22:05:07'),
(448, '2026-08-19 00:00:00', '65465465465', '[\"17.3723696\",\"42.5385487\"]', NULL, 1, '2026-08-19 22:42:40', '2026-08-19 22:42:40'),
(449, '2026-08-19 00:00:00', '666666666', '[\"24.5868871\",\"46.7789721\"]', NULL, 1, '2026-08-19 22:54:15', '2026-08-19 22:54:15'),
(450, '2026-08-20 00:00:00', '65465465465', '[\"17.3207395\",\"42.405976\"]', NULL, 0, '2026-08-20 07:51:29', '2026-08-20 07:51:29'),
(451, '2026-08-20 00:00:00', '654654213', '[\"27.349298\",\"35.6910233\"]', NULL, 0, '2026-08-20 08:14:56', '2026-08-20 08:14:56'),
(452, '2026-08-20 00:00:00', '666666666', '[\"24.5832239\",\"46.7899552\"]', NULL, 0, '2026-08-20 08:36:39', '2026-08-20 08:36:39');
INSERT INTO `attendances` (`id`, `date`, `employee_id`, `location`, `picture`, `type`, `created_at`, `updated_at`) VALUES
(453, '2026-08-20 00:00:00', '111111111', '[\"26.4350036\",\"50.0566122\"]', NULL, 0, '2026-08-20 09:35:54', '2026-08-20 09:35:54'),
(454, '2026-08-20 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-20 09:44:58', '2026-08-20 09:44:58'),
(455, '2026-08-20 00:00:00', '654654213', '[\"27.3502046\",\"35.6903047\"]', NULL, 1, '2026-08-20 18:11:03', '2026-08-20 18:11:03'),
(456, '2026-08-20 00:00:00', '65465498798', '[\"21.54954954954955\",\"39.18980745672024\"]', NULL, 1, '2026-08-20 21:19:36', '2026-08-20 21:19:36'),
(457, '2026-08-20 00:00:00', '65465465465', '[\"17.3708273\",\"42.5299236\"]', NULL, 1, '2026-08-20 23:31:24', '2026-08-20 23:31:24'),
(458, '2026-08-21 00:00:00', '666666666', '[\"24.5833232\",\"46.7899006\"]', NULL, 1, '2026-08-21 00:27:16', '2026-08-21 00:27:16'),
(459, '2026-08-21 00:00:00', '666666666', '[\"24.583294\",\"46.7898194\"]', NULL, 0, '2026-08-21 00:27:32', '2026-08-21 00:27:32'),
(460, '2026-08-21 00:00:00', '65465465465', '[\"17.3708538\",\"42.5300608\"]', NULL, 0, '2026-08-21 14:23:58', '2026-08-21 14:23:58'),
(461, '2026-08-21 00:00:00', '111111111', '[\"26.0143416\",\"49.1406281\"]', NULL, 0, '2026-08-21 20:30:29', '2026-08-21 20:30:29'),
(462, '2026-08-21 00:00:00', '65465465465', '[\"17.374582\",\"42.5462872\"]', NULL, 1, '2026-08-21 22:12:17', '2026-08-21 22:12:17'),
(463, '2026-08-22 00:00:00', '666666666', '[\"26.3928505\",\"36.4072242\"]', NULL, 1, '2026-08-22 00:30:01', '2026-08-22 00:30:01'),
(464, '2026-08-22 00:00:00', '666666666', '[\"26.3950109\",\"36.4064851\"]', NULL, 0, '2026-08-22 00:30:12', '2026-08-22 00:30:12'),
(465, '2026-08-22 00:00:00', '65465465465', '[\"17.3709191\",\"42.5300426\"]', NULL, 0, '2026-08-22 07:22:04', '2026-08-22 07:22:04'),
(466, '2026-08-22 00:00:00', '654654213', '[\"27.350266\",\"35.6909538\"]', NULL, 0, '2026-08-22 08:36:13', '2026-08-22 08:36:13'),
(467, '2026-08-22 00:00:00', '65465498798', '[\"21.513513513513512\",\"39.18008375438145\"]', NULL, 0, '2026-08-22 08:51:17', '2026-08-22 08:51:17'),
(468, '2026-08-22 00:00:00', '65465465465', '[\"17.3708875\",\"42.5300602\"]', NULL, 1, '2026-08-22 16:50:04', '2026-08-22 16:50:04'),
(469, '2026-08-22 00:00:00', '654654213', '[\"27.3495983\",\"35.689999\"]', NULL, 1, '2026-08-22 17:56:51', '2026-08-22 17:56:51'),
(470, '2026-08-22 00:00:00', '65465498798', '[\"21.54954954954955\",\"39.20917958101916\"]', NULL, 1, '2026-08-22 19:15:51', '2026-08-22 19:15:51'),
(471, '2026-08-22 00:00:00', '111111111', '[\"17.3708503\",\"42.5024747\"]', NULL, 1, '2026-08-22 20:34:47', '2026-08-22 20:34:47'),
(472, '2026-08-23 00:00:00', '666666666', '[\"24.829576\",\"40.565992\"]', NULL, 0, '2026-08-23 00:00:34', '2026-08-23 00:00:34'),
(473, '2026-08-23 00:00:00', '654654213', '[\"27.3503538\",\"35.6906819\"]', NULL, 0, '2026-08-23 06:52:48', '2026-08-23 06:52:48'),
(474, '2026-08-23 00:00:00', '65465465465', '[\"17.3709486\",\"42.5300057\"]', NULL, 0, '2026-08-23 07:27:56', '2026-08-23 07:27:56'),
(475, '2026-08-23 00:00:00', '111111111', '[\"17.3872832\",\"42.5109872\"]', NULL, 0, '2026-08-23 07:41:51', '2026-08-23 07:41:51'),
(476, '2026-08-23 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-23 08:33:24', '2026-08-23 08:33:24'),
(477, '2026-08-23 00:00:00', '65465465465', '[\"17.3628546\",\"42.5173965\"]', NULL, 1, '2026-08-23 17:16:53', '2026-08-23 17:16:53'),
(478, '2026-08-23 00:00:00', '666666666', '[\"24.5866517\",\"46.7798011\"]', NULL, 1, '2026-08-23 19:37:25', '2026-08-23 19:37:25'),
(479, '2026-08-23 00:00:00', '111111111', '[\"17.3707958\",\"42.5024589\"]', NULL, 1, '2026-08-23 19:46:47', '2026-08-23 19:46:47'),
(480, '2026-08-23 00:00:00', '654654213', '[\"27.3502593\",\"35.6909556\"]', NULL, 1, '2026-08-23 21:50:24', '2026-08-23 21:50:24'),
(481, '2026-08-23 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 1, '2026-08-23 22:42:20', '2026-08-23 22:42:20'),
(482, '2026-08-24 00:00:00', '65465465465', '[\"17.3737653\",\"42.5140236\"]', NULL, 0, '2026-08-24 07:15:19', '2026-08-24 07:15:19'),
(483, '2026-08-24 00:00:00', '65465465465', '[\"17.3737653\",\"42.5140236\"]', NULL, 0, '2026-08-24 07:16:41', '2026-08-24 07:16:41'),
(484, '2026-08-24 00:00:00', '111111111', '[\"17.3708734\",\"42.5027803\"]', NULL, 0, '2026-08-24 08:00:44', '2026-08-24 08:00:44'),
(485, '2026-08-24 00:00:00', '654654213', '[\"27.350117\",\"35.6893161\"]', NULL, 0, '2026-08-24 08:10:48', '2026-08-24 08:10:48'),
(486, '2026-08-24 00:00:00', '666666666', '[\"24.6268653\",\"46.7879943\"]', NULL, 0, '2026-08-24 08:19:19', '2026-08-24 08:19:19'),
(487, '2026-08-24 00:00:00', '65465498798', '[\"21.513513513513512\",\"39.19945107210482\"]', NULL, 0, '2026-08-24 08:42:17', '2026-08-24 08:42:17'),
(488, '2026-08-24 00:00:00', '65465465465', '[\"17.3225571\",\"42.4066835\"]', NULL, 1, '2026-08-24 16:12:25', '2026-08-24 16:12:25'),
(489, '2026-08-24 00:00:00', '654654213', '[\"27.3505086\",\"35.6904869\"]', NULL, 1, '2026-08-24 19:34:26', '2026-08-24 19:34:26'),
(490, '2026-08-24 00:00:00', '666666666', '[\"24.6051969\",\"46.7773382\"]', NULL, 1, '2026-08-24 20:40:32', '2026-08-24 20:40:32'),
(491, '2026-08-24 00:00:00', '111111111', '[\"17.3596343\",\"42.5135539\"]', NULL, 1, '2026-08-24 22:00:00', '2026-08-24 22:00:00'),
(492, '2026-08-24 00:00:00', '65465498798', '[\"21.495495495495494\",\"39.291419031986145\"]', NULL, 1, '2026-08-24 23:51:58', '2026-08-24 23:51:58'),
(493, '2026-08-25 00:00:00', '65465465465', '[\"17.3708135\",\"42.530069\"]', NULL, 0, '2026-08-25 07:30:22', '2026-08-25 07:30:22'),
(494, '2026-08-25 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-25 07:42:02', '2026-08-25 07:42:02'),
(495, '2026-08-25 00:00:00', '666666666', '[\"24.5833802\",\"46.7900749\"]', NULL, 0, '2026-08-25 08:09:29', '2026-08-25 08:09:29'),
(496, '2026-08-25 00:00:00', '654654213', '[\"27.3502651\",\"35.6909519\"]', NULL, 0, '2026-08-25 08:19:22', '2026-08-25 08:19:22'),
(497, '2026-08-25 00:00:00', '111111111', '[\"17.3708503\",\"42.5024747\"]', NULL, 0, '2026-08-25 08:27:50', '2026-08-25 08:27:50'),
(498, '2026-08-25 00:00:00', '222222222', '[\"26.365000711678796\",\"50.20934364107582\"]', NULL, 0, '2026-08-25 08:35:10', '2026-08-25 08:35:10'),
(499, '2026-08-25 00:00:00', '333333333', '[\"26.36498722126851\",\"50.209333083837016\"]', NULL, 0, '2026-08-25 11:53:36', '2026-08-25 11:53:36'),
(500, '2026-08-25 00:00:00', '333333333', '[\"26.364985543754507\",\"50.20933338536547\"]', NULL, 1, '2026-08-25 11:59:20', '2026-08-25 11:59:20'),
(501, '2026-08-25 00:00:00', '65465465465', '[\"17.3224767\",\"42.4066052\"]', NULL, 1, '2026-08-25 17:06:54', '2026-08-25 17:06:54'),
(502, '2026-08-25 00:00:00', '111111111', '[\"17.3709166\",\"42.5024628\"]', NULL, 1, '2026-08-25 21:06:30', '2026-08-25 21:06:30'),
(503, '2026-08-25 00:00:00', '666666666', '[\"24.5979015\",\"46.7716994\"]', NULL, 1, '2026-08-25 21:14:17', '2026-08-25 21:14:17'),
(504, '2026-08-25 00:00:00', '654654213', '[\"27.3506425\",\"35.6901022\"]', NULL, 1, '2026-08-25 21:43:41', '2026-08-25 21:43:41'),
(505, '2026-08-26 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 1, '2026-08-26 02:42:34', '2026-08-26 02:42:34'),
(506, '2026-08-26 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 1, '2026-08-26 02:42:45', '2026-08-26 02:42:45'),
(507, '2026-08-26 00:00:00', '65465465465', '[\"17.376948\",\"42.4932832\"]', NULL, 0, '2026-08-26 07:56:32', '2026-08-26 07:56:32'),
(508, '2026-08-26 00:00:00', '654654213', '[\"27.3512094\",\"35.6910233\"]', NULL, 0, '2026-08-26 08:00:38', '2026-08-26 08:00:38'),
(509, '2026-08-26 00:00:00', '111111111', '[\"17.3751995\",\"42.4990861\"]', NULL, 0, '2026-08-26 08:11:22', '2026-08-26 08:11:22'),
(510, '2026-08-26 00:00:00', '666666666', '[\"24.5832636\",\"46.7898139\"]', NULL, 0, '2026-08-26 08:12:50', '2026-08-26 08:12:50'),
(511, '2026-08-26 00:00:00', '222222222', '[\"26.35751910583222\",\"50.14137267901167\"]', NULL, 0, '2026-08-26 08:29:20', '2026-08-26 08:29:20'),
(512, '2026-08-26 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-26 08:34:27', '2026-08-26 08:34:27'),
(513, '2026-08-26 00:00:00', '333333333', '[\"26.35844310383765\",\"50.1964265522049\"]', NULL, 0, '2026-08-26 09:26:33', '2026-08-26 09:26:33'),
(514, '2026-08-26 00:00:00', '333333333', '[\"26.358557696006397\",\"50.19635971871917\"]', NULL, 0, '2026-08-26 09:26:52', '2026-08-26 09:26:52'),
(515, '2026-08-26 00:00:00', '65465465465', '[\"17.3227504\",\"42.4050542\"]', NULL, 1, '2026-08-26 16:36:14', '2026-08-26 16:36:14'),
(516, '2026-08-26 00:00:00', '333333333', '[\"26.364910343623947\",\"50.20930266351985\"]', NULL, 1, '2026-08-26 18:23:05', '2026-08-26 18:23:05'),
(517, '2026-08-26 00:00:00', '666666666', '[\"24.7224815\",\"46.84391\"]', NULL, 0, '2026-08-26 18:30:34', '2026-08-26 18:30:34'),
(518, '2026-08-26 00:00:00', '666666666', '[\"24.7224111\",\"46.8438949\"]', NULL, 1, '2026-08-26 18:30:51', '2026-08-26 18:30:51'),
(519, '2026-08-26 00:00:00', '654654213', '[\"27.3502848\",\"35.6909661\"]', NULL, 1, '2026-08-26 19:18:01', '2026-08-26 19:18:01'),
(520, '2026-08-26 00:00:00', '111111111', '[\"17.3770042\",\"42.5459701\"]', NULL, 0, '2026-08-26 20:30:03', '2026-08-26 20:30:03'),
(521, '2026-08-26 00:00:00', '111111111', '[\"17.376945\",\"42.5459365\"]', NULL, 1, '2026-08-26 20:30:17', '2026-08-26 20:30:17'),
(522, '2026-08-26 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 1, '2026-08-26 22:01:17', '2026-08-26 22:01:17'),
(523, '2026-08-27 00:00:00', '65465465465', '[\"17.3733939\",\"42.5177031\"]', NULL, 0, '2026-08-27 07:14:55', '2026-08-27 07:14:55'),
(524, '2026-08-27 00:00:00', '654654213', '[\"27.3502829\",\"35.690968\"]', NULL, 0, '2026-08-27 07:52:49', '2026-08-27 07:52:49'),
(525, '2026-08-27 00:00:00', '111111111', '[\"17.370916\",\"42.5024177\"]', NULL, 0, '2026-08-27 08:12:17', '2026-08-27 08:12:17'),
(526, '2026-08-27 00:00:00', '666666666', '[\"24.5724117\",\"46.8836867\"]', NULL, 0, '2026-08-27 08:12:18', '2026-08-27 08:12:18'),
(527, '2026-08-27 00:00:00', '222222222', '[\"26.34631512437378\",\"50.12166020547605\"]', NULL, 0, '2026-08-27 08:28:29', '2026-08-27 08:28:29'),
(528, '2026-08-27 00:00:00', '65465498798', '[\"22.7027027027027\",\"39.10167430008604\"]', NULL, 0, '2026-08-27 14:09:04', '2026-08-27 14:09:04'),
(529, '2026-08-27 00:00:00', '65465465465', '[\"17.3773927\",\"42.4231803\"]', NULL, 1, '2026-08-27 17:02:26', '2026-08-27 17:02:26'),
(530, '2026-08-27 00:00:00', '111111111', '[\"17.3709539\",\"42.5025114\"]', NULL, 1, '2026-08-27 17:49:19', '2026-08-27 17:49:19'),
(531, '2026-08-27 00:00:00', '654654213', '[\"27.3502829\",\"35.690968\"]', NULL, 1, '2026-08-27 18:01:12', '2026-08-27 18:01:12'),
(532, '2026-08-27 00:00:00', '333333333', '[\"26.40225378167284\",\"50.12023954613389\"]', NULL, 1, '2026-08-27 18:36:42', '2026-08-27 18:36:42'),
(533, '2026-08-27 00:00:00', '666666666', '[\"24.5831616\",\"46.7898876\"]', NULL, 1, '2026-08-27 19:00:10', '2026-08-27 19:00:10'),
(534, '2026-08-27 00:00:00', '222222222', '[\"26.406724730411085\",\"50.014450199226374\"]', NULL, 1, '2026-08-27 19:20:50', '2026-08-27 19:20:50'),
(535, '2026-08-29 00:00:00', '65465465465', '[\"17.3726323\",\"42.5330316\"]', NULL, 0, '2026-08-29 07:01:12', '2026-08-29 07:01:12'),
(536, '2026-08-29 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.184943064746534\"]', NULL, 0, '2026-08-29 07:46:45', '2026-08-29 07:46:45'),
(537, '2026-08-29 00:00:00', '654654213', '[\"27.3512094\",\"35.6910233\"]', NULL, 0, '2026-08-29 08:28:11', '2026-08-29 08:28:11'),
(538, '2026-08-29 00:00:00', '111111111', '[\"17.3709952\",\"42.5025087\"]', NULL, 0, '2026-08-29 08:42:37', '2026-08-29 08:42:37'),
(539, '2026-08-29 00:00:00', '666666666', '[\"24.5952898\",\"46.7879048\"]', NULL, 0, '2026-08-29 09:48:22', '2026-08-29 09:48:22'),
(540, '2026-08-29 00:00:00', '222222222', '[\"26.40925470612852\",\"50.01398597558206\"]', NULL, 0, '2026-08-29 11:02:16', '2026-08-29 11:02:16'),
(541, '2026-08-29 00:00:00', '333333333', '[\"26.380654418965406\",\"50.08694010486328\"]', NULL, 0, '2026-08-29 16:06:08', '2026-08-29 16:06:08'),
(542, '2026-08-29 00:00:00', '65465465465', '[\"17.3724798\",\"42.5155567\"]', NULL, 1, '2026-08-29 16:49:02', '2026-08-29 16:49:02'),
(543, '2026-08-29 00:00:00', '654654213', '[\"27.3502817\",\"35.69097\"]', NULL, 1, '2026-08-29 17:25:13', '2026-08-29 17:25:13'),
(544, '2026-08-29 00:00:00', '111111111', '[\"17.3748623\",\"42.5461969\"]', NULL, 1, '2026-08-29 17:57:45', '2026-08-29 17:57:45'),
(545, '2026-08-29 00:00:00', '333333333', '[\"26.37542992242692\",\"50.111828779258545\"]', NULL, 1, '2026-08-29 20:06:08', '2026-08-29 20:06:08'),
(546, '2026-08-29 00:00:00', '222222222', '[\"26.42394877493932\",\"50.01862481278625\"]', NULL, 1, '2026-08-29 21:14:09', '2026-08-29 21:14:09'),
(547, '2026-08-29 00:00:00', '666666666', '[\"24.7967128\",\"46.8584456\"]', NULL, 1, '2026-08-29 21:43:36', '2026-08-29 21:43:36'),
(548, '2026-08-30 00:00:00', '222222222', '[\"26.424057658463084\",\"50.01890575194507\"]', NULL, 0, '2026-08-30 05:50:25', '2026-08-30 05:50:25'),
(549, '2026-08-30 00:00:00', '333333333', '[\"26.418763090277565\",\"50.080506338279065\"]', NULL, 0, '2026-08-30 06:06:57', '2026-08-30 06:06:57'),
(550, '2026-08-30 00:00:00', '65465465465', '[\"17.3709045\",\"42.5299649\"]', NULL, 0, '2026-08-30 07:41:08', '2026-08-30 07:41:08'),
(551, '2026-08-30 00:00:00', '654654213', '[\"27.3502855\",\"35.6903418\"]', NULL, 0, '2026-08-30 07:49:23', '2026-08-30 07:49:23'),
(552, '2026-08-30 00:00:00', '111111111', '[\"17.3710078\",\"42.5026116\"]', NULL, 0, '2026-08-30 08:09:30', '2026-08-30 08:09:30'),
(553, '2026-08-30 00:00:00', '666666666', '[\"24.5835433\",\"46.7903426\"]', NULL, 0, '2026-08-30 08:27:28', '2026-08-30 08:27:28'),
(554, '2026-08-30 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-08-30 08:48:17', '2026-08-30 08:48:17'),
(555, '2026-08-30 00:00:00', '65465465465', '[\"17.3776881\",\"42.4231803\"]', NULL, 1, '2026-08-30 16:31:49', '2026-08-30 16:31:49'),
(556, '2026-08-30 00:00:00', '333333333', '[\"26.418560010343942\",\"50.08045613365441\"]', NULL, 0, '2026-08-30 18:04:40', '2026-08-30 18:04:40'),
(557, '2026-08-30 00:00:00', '222222222', '[\"26.420309131638987\",\"50.01151663739816\"]', NULL, 1, '2026-08-30 18:11:26', '2026-08-30 18:11:26'),
(558, '2026-08-30 00:00:00', '666666666', '[\"24.5832192\",\"46.7899349\"]', NULL, 1, '2026-08-30 18:45:25', '2026-08-30 18:45:25'),
(559, '2026-08-30 00:00:00', '654654213', '[\"27.3502433\",\"35.6909066\"]', NULL, 1, '2026-08-30 20:15:10', '2026-08-30 20:15:10'),
(560, '2026-08-30 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-08-30 21:21:28', '2026-08-30 21:21:28'),
(561, '2026-08-31 00:00:00', '333333333', '[\"26.41871317864333\",\"50.08045247130666\"]', NULL, 0, '2026-08-31 06:21:00', '2026-08-31 06:21:00'),
(562, '2026-08-31 00:00:00', '222222222', '[\"26.406099451761552\",\"50.154669514718144\"]', NULL, 0, '2026-08-31 06:37:14', '2026-08-31 06:37:14'),
(563, '2026-08-31 00:00:00', '222222222', '[\"26.406099451761552\",\"50.154669514718144\"]', NULL, 0, '2026-08-31 06:37:23', '2026-08-31 06:37:23'),
(564, '2026-08-31 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-08-31 07:41:52', '2026-08-31 07:41:52'),
(565, '2026-08-31 00:00:00', '65465465465', '[\"17.3740603\",\"42.5140236\"]', NULL, 0, '2026-08-31 07:49:56', '2026-08-31 07:49:56'),
(566, '2026-08-31 00:00:00', '666666666', '[\"24.6041399\",\"46.7804128\"]', NULL, 0, '2026-08-31 08:07:07', '2026-08-31 08:07:07'),
(567, '2026-08-31 00:00:00', '654654213', '[\"27.3512094\",\"35.6910233\"]', NULL, 0, '2026-08-31 08:12:41', '2026-08-31 08:12:41'),
(568, '2026-08-31 00:00:00', '111111111', '[\"17.3710014\",\"42.5025077\"]', NULL, 0, '2026-08-31 08:38:36', '2026-08-31 08:38:36'),
(569, '2026-08-31 00:00:00', '65465465465', '[\"17.3230122\",\"42.406703\"]', NULL, 1, '2026-08-31 16:46:31', '2026-08-31 16:46:31'),
(570, '2026-08-31 00:00:00', '222222222', '[\"26.397079875975532\",\"50.01798138897662\"]', NULL, 1, '2026-08-31 18:06:37', '2026-08-31 18:06:37'),
(571, '2026-08-31 00:00:00', '333333333', '[\"26.416856779996326\",\"50.11390234112575\"]', NULL, 1, '2026-08-31 19:58:16', '2026-08-31 19:58:16'),
(572, '2026-08-31 00:00:00', '654654213', '[\"27.3512094\",\"35.6910233\"]', NULL, 1, '2026-08-31 21:04:00', '2026-08-31 21:04:00'),
(573, '2026-08-31 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-08-31 23:29:55', '2026-08-31 23:29:55'),
(574, '2026-09-01 00:00:00', '666666666', '[\"24.5833267\",\"46.7903409\"]', NULL, 1, '2026-09-01 03:54:24', '2026-09-01 03:54:24'),
(575, '2026-09-01 00:00:00', '65465465465', '[\"17.3709312\",\"42.530045\"]', NULL, 0, '2026-09-01 07:36:28', '2026-09-01 07:36:28'),
(576, '2026-09-01 00:00:00', '654654213', '[\"27.3495983\",\"35.689999\"]', NULL, 0, '2026-09-01 08:02:29', '2026-09-01 08:02:29'),
(577, '2026-09-01 00:00:00', '666666666', '[\"24.5832121\",\"46.7897712\"]', NULL, 0, '2026-09-01 08:03:18', '2026-09-01 08:03:18'),
(578, '2026-09-01 00:00:00', '111111111', '[\"17.3708106\",\"42.502571\"]', NULL, 0, '2026-09-01 08:07:45', '2026-09-01 08:07:45'),
(579, '2026-09-01 00:00:00', '333333333', '[\"26.418766566225646\",\"50.080568846565974\"]', NULL, 0, '2026-09-01 08:15:41', '2026-09-01 08:15:41'),
(580, '2026-09-01 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-09-01 08:19:41', '2026-09-01 08:19:41'),
(581, '2026-09-01 00:00:00', '222222222', '[\"26.39878684685983\",\"50.017491550941024\"]', NULL, 0, '2026-09-01 08:34:09', '2026-09-01 08:34:09'),
(582, '2026-09-01 00:00:00', '222222222', '[\"26.308983059584623\",\"50.043642851210144\"]', NULL, 1, '2026-09-01 18:51:10', '2026-09-01 18:51:10'),
(583, '2026-09-01 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-09-01 18:52:30', '2026-09-01 18:52:30'),
(584, '2026-09-01 00:00:00', '333333333', '[\"26.364308464819455\",\"50.20911766372394\"]', NULL, 1, '2026-09-01 19:26:21', '2026-09-01 19:26:21'),
(585, '2026-09-01 00:00:00', '666666666', '[\"24.5833855\",\"46.78964\"]', NULL, 1, '2026-09-01 20:12:30', '2026-09-01 20:12:30'),
(586, '2026-09-01 00:00:00', '111111111', '[\"17.3709583\",\"42.5026653\"]', NULL, 1, '2026-09-01 20:23:45', '2026-09-01 20:23:45'),
(587, '2026-09-01 00:00:00', '65465465465', '[\"17.3706784\",\"42.5297385\"]', NULL, 1, '2026-09-01 20:47:39', '2026-09-01 20:47:39'),
(588, '2026-09-01 00:00:00', '654654213', '[\"27.3501787\",\"35.6903559\"]', NULL, 1, '2026-09-01 21:51:50', '2026-09-01 21:51:50'),
(589, '2026-09-02 00:00:00', '222222222', '[\"26.424089534998192\",\"50.0192334087005\"]', NULL, 0, '2026-09-02 02:46:42', '2026-09-02 02:46:42'),
(590, '2026-09-02 00:00:00', '222222222', '[\"26.35197174717832\",\"50.03008417495436\"]', NULL, 1, '2026-09-02 05:26:32', '2026-09-02 05:26:32'),
(591, '2026-09-02 00:00:00', '65465465465', '[\"17.3731421\",\"42.5333381\"]', NULL, 0, '2026-09-02 07:31:21', '2026-09-02 07:31:21'),
(592, '2026-09-02 00:00:00', '111111111', '[\"17.3710276\",\"42.5026336\"]', NULL, 0, '2026-09-02 07:38:50', '2026-09-02 07:38:50'),
(593, '2026-09-02 00:00:00', '654654213', '[\"27.3498168\",\"35.6903404\"]', NULL, 0, '2026-09-02 08:11:23', '2026-09-02 08:11:23'),
(594, '2026-09-02 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-09-02 08:11:29', '2026-09-02 08:11:29'),
(595, '2026-09-02 00:00:00', '333333333', '[\"26.41877459965296\",\"50.08037871770351\"]', NULL, 0, '2026-09-02 08:24:16', '2026-09-02 08:24:16'),
(596, '2026-09-02 00:00:00', '222222222', '[\"26.356028288063936\",\"50.139844179640086\"]', NULL, 0, '2026-09-02 08:32:18', '2026-09-02 08:32:18'),
(597, '2026-09-02 00:00:00', '666666666', '[\"24.5833057\",\"46.789919\"]', NULL, 0, '2026-09-02 08:41:19', '2026-09-02 08:41:19'),
(598, '2026-09-02 00:00:00', '65465465465', '[\"17.3224811\",\"42.4066669\"]', NULL, 1, '2026-09-02 16:56:08', '2026-09-02 16:56:08'),
(599, '2026-09-02 00:00:00', '222222222', '[\"26.424089534998192\",\"50.0192334087005\"]', NULL, 1, '2026-09-02 17:50:12', '2026-09-02 17:50:12'),
(600, '2026-09-02 00:00:00', '222222222', '[\"26.366824691661545\",\"50.02788771500968\"]', NULL, 0, '2026-09-02 18:33:41', '2026-09-02 18:33:41'),
(601, '2026-09-02 00:00:00', '333333333', '[\"26.405040567090047\",\"50.17962146846515\"]', NULL, 1, '2026-09-02 20:00:14', '2026-09-02 20:00:14'),
(602, '2026-09-02 00:00:00', '111111111', '[\"17.3708848\",\"42.5024181\"]', NULL, 1, '2026-09-02 21:00:44', '2026-09-02 21:00:44'),
(603, '2026-09-02 00:00:00', '666666666', '[\"24.5832875\",\"46.7898336\"]', NULL, 1, '2026-09-02 21:46:03', '2026-09-02 21:46:03'),
(604, '2026-09-02 00:00:00', '654654213', '[\"27.3398062\",\"35.7125315\"]', NULL, 1, '2026-09-02 23:53:38', '2026-09-02 23:53:38'),
(605, '2026-09-03 00:00:00', '111111111', '[\"17.3709205\",\"42.5026701\"]', NULL, 0, '2026-09-03 07:54:11', '2026-09-03 07:54:11'),
(606, '2026-09-03 00:00:00', '666666666', '[\"24.5832092\",\"46.789937\"]', NULL, 0, '2026-09-03 08:00:00', '2026-09-03 08:00:00'),
(607, '2026-09-03 00:00:00', '222222222', '[\"24.87466334177489\",\"46.73028952118135\"]', NULL, 1, '2026-09-03 08:08:29', '2026-09-03 08:08:29'),
(608, '2026-09-03 00:00:00', '65465465465', '[\"17.37092\",\"42.530065\"]', NULL, 0, '2026-09-03 08:09:48', '2026-09-03 08:09:48'),
(609, '2026-09-03 00:00:00', '222222222', '[\"24.906669204984002\",\"46.703387017558235\"]', NULL, 0, '2026-09-03 08:18:30', '2026-09-03 08:18:30'),
(610, '2026-09-03 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 0, '2026-09-03 08:25:36', '2026-09-03 08:25:36'),
(611, '2026-09-03 00:00:00', '12345678', '[\"26.409944792206957\",\"50.000891839600264\"]', NULL, 0, '2026-09-03 08:30:05', '2026-09-03 08:30:05'),
(612, '2026-09-03 00:00:00', '333333333', '[\"26.418721189192734\",\"50.080414216989126\"]', NULL, 0, '2026-09-03 08:49:13', '2026-09-03 08:49:13'),
(613, '2026-09-03 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-09-03 08:58:30', '2026-09-03 08:58:30'),
(614, '2026-09-03 00:00:00', '111111111', '[\"17.3703678\",\"42.5024959\"]', NULL, 1, '2026-09-03 17:48:43', '2026-09-03 17:48:43'),
(615, '2026-09-03 00:00:00', '666666666', '[\"24.6318594\",\"46.7485837\"]', NULL, 1, '2026-09-03 21:43:50', '2026-09-03 21:43:50'),
(616, '2026-09-03 00:00:00', '654654213', '[\"27.3398062\",\"35.7125315\"]', NULL, 1, '2026-09-03 22:28:26', '2026-09-03 22:28:26'),
(617, '2026-09-03 00:00:00', '333333333', '[\"26.36867207285519\",\"50.203847761873526\"]', NULL, 1, '2026-09-03 22:36:04', '2026-09-03 22:36:04'),
(618, '2026-09-04 00:00:00', '65465465465', '[\"17.3727636\",\"42.5302728\"]', NULL, 0, '2026-09-04 16:30:05', '2026-09-04 16:30:05'),
(619, '2026-09-04 00:00:00', '65465465465', '[\"17.3740603\",\"42.5140236\"]', NULL, 1, '2026-09-04 21:15:53', '2026-09-04 21:15:53'),
(620, '2026-09-05 00:00:00', '65465465465', '[\"17.3708759\",\"42.5300026\"]', NULL, 0, '2026-09-05 07:38:53', '2026-09-05 07:38:53'),
(621, '2026-09-05 00:00:00', '654654213', '[\"27.3398062\",\"35.7125315\"]', NULL, 0, '2026-09-05 08:01:55', '2026-09-05 08:01:55'),
(622, '2026-09-05 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.23812821078864\"]', NULL, 0, '2026-09-05 08:46:45', '2026-09-05 08:46:45'),
(623, '2026-09-05 00:00:00', '111111111', '[\"17.3709982\",\"42.5026395\"]', NULL, 0, '2026-09-05 08:55:28', '2026-09-05 08:55:28'),
(624, '2026-09-05 00:00:00', '666666666', '[\"24.5833424\",\"46.7897373\"]', NULL, 0, '2026-09-05 10:17:37', '2026-09-05 10:17:37'),
(625, '2026-09-05 00:00:00', '111111111', '[\"17.3709604\",\"42.5026706\"]', NULL, 1, '2026-09-05 17:19:12', '2026-09-05 17:19:12'),
(626, '2026-09-05 00:00:00', '65465465465', '[\"17.3753859\",\"42.5247548\"]', NULL, 1, '2026-09-05 18:10:48', '2026-09-05 18:10:48'),
(627, '2026-09-05 00:00:00', '654654213', '[\"27.3398223\",\"35.7132144\"]', NULL, 1, '2026-09-05 19:46:13', '2026-09-05 19:46:13'),
(628, '2026-09-05 00:00:00', '65465498798', '[\"21.47747747747748\",\"39.30591801540508\"]', NULL, 1, '2026-09-05 20:02:56', '2026-09-05 20:02:56'),
(629, '2026-09-05 00:00:00', '666666666', '[\"24.5842376\",\"46.7898695\"]', NULL, 1, '2026-09-05 22:56:38', '2026-09-05 22:56:38'),
(630, '2026-09-06 00:00:00', '111111111', '[\"17.3709235\",\"42.5024561\"]', NULL, 0, '2026-09-06 07:46:48', '2026-09-06 07:46:48'),
(631, '2026-09-06 00:00:00', '65465465465', '[\"17.3709316\",\"42.5301126\"]', NULL, 0, '2026-09-06 07:59:11', '2026-09-06 07:59:11'),
(632, '2026-09-06 00:00:00', '222222222', '[\"26.399659517081883\",\"50.016885670755386\"]', NULL, 0, '2026-09-06 08:00:14', '2026-09-06 08:00:14'),
(633, '2026-09-06 00:00:00', '666666666', '[\"24.5943967\",\"46.7993521\"]', NULL, 0, '2026-09-06 08:25:59', '2026-09-06 08:25:59'),
(634, '2026-09-06 00:00:00', '12345678', '[\"26.409935664830524\",\"50.00088824779475\"]', NULL, 0, '2026-09-06 08:26:06', '2026-09-06 08:26:06'),
(635, '2026-09-06 00:00:00', '654654213', '[\"27.3397407\",\"35.713214\"]', NULL, 0, '2026-09-06 08:28:19', '2026-09-06 08:28:19'),
(636, '2026-09-06 00:00:00', '333333333', '[\"26.418608165498284\",\"50.08049325174801\"]', NULL, 0, '2026-09-06 08:39:10', '2026-09-06 08:39:10'),
(637, '2026-09-06 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-09-06 08:53:56', '2026-09-06 08:53:56'),
(638, '2026-09-06 00:00:00', '12345678', '[\"26.379364491273844\",\"50.058367760349434\"]', NULL, 1, '2026-09-06 17:31:18', '2026-09-06 17:31:18'),
(639, '2026-09-06 00:00:00', '333333333', '[\"26.40219735813507\",\"50.12023528403855\"]', NULL, 1, '2026-09-06 19:25:30', '2026-09-06 19:25:30'),
(640, '2026-09-06 00:00:00', '222222222', '[\"26.43992607869853\",\"50.06825655455227\"]', NULL, 1, '2026-09-06 19:31:57', '2026-09-06 19:31:57'),
(641, '2026-09-06 00:00:00', '654654213', '[\"27.340175\",\"35.7121273\"]', NULL, 1, '2026-09-06 20:27:26', '2026-09-06 20:27:26'),
(642, '2026-09-06 00:00:00', '666666666', '[\"24.5831886\",\"46.7899435\"]', NULL, 1, '2026-09-06 20:45:44', '2026-09-06 20:45:44'),
(643, '2026-09-06 00:00:00', '111111111', '[\"17.3709659\",\"42.5024972\"]', NULL, 1, '2026-09-06 21:08:27', '2026-09-06 21:08:27'),
(644, '2026-09-06 00:00:00', '65465465465', '[\"17.3708994\",\"42.5300295\"]', NULL, 1, '2026-09-06 21:41:07', '2026-09-06 21:41:07'),
(645, '2026-09-06 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-09-06 23:27:45', '2026-09-06 23:27:45'),
(646, '2026-09-07 00:00:00', '654654213', '[\"27.3395617\",\"35.7132504\"]', NULL, 1, '2026-09-07 07:11:06', '2026-09-07 07:11:06'),
(647, '2026-09-07 00:00:00', '65465465465', '[\"17.3709496\",\"42.5299853\"]', NULL, 0, '2026-09-07 07:24:11', '2026-09-07 07:24:11'),
(648, '2026-09-07 00:00:00', '111111111', '[\"17.3709815\",\"42.5026568\"]', NULL, 0, '2026-09-07 07:28:34', '2026-09-07 07:28:34'),
(649, '2026-09-07 00:00:00', '222222222', '[\"26.440758114520396\",\"50.06806977018817\"]', NULL, 0, '2026-09-07 08:09:08', '2026-09-07 08:09:08'),
(650, '2026-09-07 00:00:00', '12345678', '[\"26.409936126186192\",\"50.0008846600058\"]', NULL, 0, '2026-09-07 08:21:05', '2026-09-07 08:21:05'),
(651, '2026-09-07 00:00:00', '666666666', '[\"24.5835431\",\"46.7900791\"]', NULL, 0, '2026-09-07 08:39:49', '2026-09-07 08:39:49'),
(652, '2026-09-07 00:00:00', '333333333', '[\"26.418741794939937\",\"50.08035254058397\"]', NULL, 0, '2026-09-07 08:58:33', '2026-09-07 08:58:33'),
(653, '2026-09-07 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.23812821078864\"]', NULL, 0, '2026-09-07 09:11:33', '2026-09-07 09:11:33'),
(654, '2026-09-07 00:00:00', '65465465465', '[\"17.3735791\",\"42.526778\"]', NULL, 1, '2026-09-07 17:06:46', '2026-09-07 17:06:46'),
(655, '2026-09-07 00:00:00', '333333333', '[\"26.417238234356955\",\"50.167517063744725\"]', NULL, 1, '2026-09-07 18:14:19', '2026-09-07 18:14:19'),
(656, '2026-09-07 00:00:00', '222222222', '[\"26.3053634297644\",\"50.1602262964411\"]', NULL, 1, '2026-09-07 19:00:03', '2026-09-07 19:00:03'),
(657, '2026-09-07 00:00:00', '666666666', '[\"24.5832483\",\"46.789798\"]', NULL, 1, '2026-09-07 19:58:54', '2026-09-07 19:58:54'),
(658, '2026-09-07 00:00:00', '222222222', '[\"26.440695536033243\",\"50.06816773405549\"]', NULL, 0, '2026-09-07 20:52:21', '2026-09-07 20:52:21'),
(659, '2026-09-07 00:00:00', '111111111', '[\"17.3709933\",\"42.5025052\"]', NULL, 1, '2026-09-07 21:53:50', '2026-09-07 21:53:50'),
(660, '2026-09-07 00:00:00', '654654213', '[\"27.3398782\",\"35.7131929\"]', NULL, 1, '2026-09-07 22:46:27', '2026-09-07 22:46:27'),
(661, '2026-09-07 00:00:00', '222222222', '[\"26.424089534998192\",\"50.0192334087005\"]', NULL, 1, '2026-09-07 23:26:45', '2026-09-07 23:26:45'),
(662, '2026-09-08 00:00:00', '654654213', '[\"27.3398783\",\"35.7131908\"]', NULL, 0, '2026-09-08 07:48:18', '2026-09-08 07:48:18'),
(663, '2026-09-08 00:00:00', '65465465465', '[\"17.3749265\",\"42.5036953\"]', NULL, 0, '2026-09-08 08:00:17', '2026-09-08 08:00:17'),
(664, '2026-09-08 00:00:00', '666666666', '[\"24.5842865\",\"46.7898144\"]', NULL, 0, '2026-09-08 08:07:13', '2026-09-08 08:07:13'),
(665, '2026-09-08 00:00:00', '111111111', '[\"17.3708848\",\"42.5023829\"]', NULL, 0, '2026-09-08 08:21:28', '2026-09-08 08:21:28'),
(666, '2026-09-08 00:00:00', '12345678', '[\"26.409794151883023\",\"50.00072209740934\"]', NULL, 0, '2026-09-08 08:22:24', '2026-09-08 08:22:24'),
(667, '2026-09-08 00:00:00', '222222222', '[\"26.328491245821223\",\"50.035657984142475\"]', NULL, 0, '2026-09-08 08:28:52', '2026-09-08 08:28:52'),
(668, '2026-09-08 00:00:00', '333333333', '[\"26.41868859784732\",\"50.08039816864267\"]', NULL, 0, '2026-09-08 09:17:17', '2026-09-08 09:17:17'),
(669, '2026-09-08 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 0, '2026-09-08 09:18:51', '2026-09-08 09:18:51'),
(670, '2026-09-08 00:00:00', '65465465465', '[\"17.3727636\",\"42.5302728\"]', NULL, 1, '2026-09-08 17:16:48', '2026-09-08 17:16:48'),
(671, '2026-09-08 00:00:00', '444444444', '[\"27.9555539\",\"48.6793973\"]', NULL, 0, '2026-09-08 17:28:44', '2026-09-08 17:28:44'),
(672, '2026-09-08 00:00:00', '333333333', '[\"26.379406831634316\",\"50.19594855297115\"]', NULL, 1, '2026-09-08 18:22:07', '2026-09-08 18:22:07'),
(673, '2026-09-08 00:00:00', '666666666', '[\"24.5831981\",\"46.7899826\"]', NULL, 1, '2026-09-08 18:32:23', '2026-09-08 18:32:23'),
(674, '2026-09-08 00:00:00', '111111111', '[\"17.3709281\",\"42.5028319\"]', NULL, 1, '2026-09-08 19:04:10', '2026-09-08 19:04:10'),
(675, '2026-09-08 00:00:00', '12345678', '[\"25.419433179671596\",\"49.58645334565087\"]', NULL, 1, '2026-09-08 20:33:37', '2026-09-08 20:33:37'),
(676, '2026-09-08 00:00:00', '654654213', '[\"27.3406873\",\"35.7281529\"]', NULL, 1, '2026-09-08 20:43:33', '2026-09-08 20:43:33'),
(677, '2026-09-08 00:00:00', '222222222', '[\"26.42415128682479\",\"50.019038434067625\"]', NULL, 1, '2026-09-08 22:40:57', '2026-09-08 22:40:57'),
(678, '2026-09-09 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 1, '2026-09-09 00:12:36', '2026-09-09 00:12:36'),
(679, '2026-09-09 00:00:00', '654654213', '[\"27.3410621\",\"35.7115074\"]', NULL, 0, '2026-09-09 07:47:59', '2026-09-09 07:47:59'),
(680, '2026-09-09 00:00:00', '666666666', '[\"24.5832805\",\"46.7897653\"]', NULL, 0, '2026-09-09 07:57:32', '2026-09-09 07:57:32'),
(681, '2026-09-09 00:00:00', '111111111', '[\"17.3708564\",\"42.5024023\"]', NULL, 0, '2026-09-09 08:02:21', '2026-09-09 08:02:21'),
(682, '2026-09-09 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-09-09 08:27:56', '2026-09-09 08:27:56'),
(683, '2026-09-09 00:00:00', '12345678', '[\"25.40592520477807\",\"49.59197283948604\"]', NULL, 0, '2026-09-09 08:28:28', '2026-09-09 08:28:28'),
(684, '2026-09-09 00:00:00', '65465465465', '[\"17.3724798\",\"42.5155567\"]', NULL, 0, '2026-09-09 08:30:09', '2026-09-09 08:30:09'),
(685, '2026-09-09 00:00:00', '222222222', '[\"26.4305030448777\",\"50.01147671048292\"]', NULL, 0, '2026-09-09 08:40:02', '2026-09-09 08:40:02'),
(686, '2026-09-09 00:00:00', '333333333', '[\"26.41870437451431\",\"50.08052300168371\"]', NULL, 1, '2026-09-09 08:43:04', '2026-09-09 08:43:04'),
(687, '2026-09-09 00:00:00', '333333333', '[\"26.41870700294394\",\"50.080493984091895\"]', NULL, 0, '2026-09-09 08:43:16', '2026-09-09 08:43:16'),
(688, '2026-09-09 00:00:00', '222222222', '[\"26.380338617428933\",\"50.08720284149892\"]', NULL, 1, '2026-09-09 17:59:45', '2026-09-09 17:59:45'),
(689, '2026-09-09 00:00:00', '666666666', '[\"24.5832574\",\"46.7898915\"]', NULL, 1, '2026-09-09 19:00:35', '2026-09-09 19:00:35'),
(690, '2026-09-09 00:00:00', '65465465465', '[\"17.3708369\",\"42.5025395\"]', NULL, 1, '2026-09-09 19:04:09', '2026-09-09 19:04:09'),
(691, '2026-09-09 00:00:00', '111111111', '[\"17.3708771\",\"42.5025067\"]', NULL, 1, '2026-09-09 19:05:24', '2026-09-09 19:05:24'),
(692, '2026-09-09 00:00:00', '333333333', '[\"26.21708449718993\",\"50.13906259089099\"]', NULL, 1, '2026-09-09 19:23:23', '2026-09-09 19:23:23'),
(693, '2026-09-09 00:00:00', '12345678', '[\"26.40980042904263\",\"50.00053044430731\"]', NULL, 1, '2026-09-09 21:17:54', '2026-09-09 21:17:54'),
(694, '2026-09-09 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-09-09 21:45:03', '2026-09-09 21:45:03'),
(695, '2026-09-09 00:00:00', '654654213', '[\"27.3395603\",\"35.7130447\"]', NULL, 1, '2026-09-09 22:28:57', '2026-09-09 22:28:57'),
(696, '2026-09-10 00:00:00', '12345678', '[\"25.405912100891626\",\"49.591976987547184\"]', NULL, 0, '2026-09-10 07:14:18', '2026-09-10 07:14:18'),
(697, '2026-09-10 00:00:00', '12345678', '[\"25.405912070961897\",\"49.59197710156093\"]', NULL, 0, '2026-09-10 07:14:38', '2026-09-10 07:14:38'),
(698, '2026-09-10 00:00:00', '111111111', '[\"17.3707931\",\"42.5024205\"]', NULL, 0, '2026-09-10 07:41:19', '2026-09-10 07:41:19'),
(699, '2026-09-10 00:00:00', '666666666', '[\"24.5832784\",\"46.7899551\"]', NULL, 0, '2026-09-10 07:57:01', '2026-09-10 07:57:01'),
(700, '2026-09-10 00:00:00', '654654213', '[\"27.3412806\",\"35.7118488\"]', NULL, 0, '2026-09-10 08:02:38', '2026-09-10 08:02:38'),
(701, '2026-09-10 00:00:00', '65465465465', '[\"17.3731421\",\"42.5333381\"]', NULL, 0, '2026-09-10 08:10:02', '2026-09-10 08:10:02'),
(702, '2026-09-10 00:00:00', '12345678', '[\"25.40592669612516\",\"49.59197415097325\"]', NULL, 0, '2026-09-10 08:24:42', '2026-09-10 08:24:42'),
(703, '2026-09-10 00:00:00', '222222222', '[\"26.36983004712811\",\"50.02699760901957\"]', NULL, 0, '2026-09-10 08:30:11', '2026-09-10 08:30:11'),
(704, '2026-09-10 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-09-10 08:33:40', '2026-09-10 08:33:40'),
(705, '2026-09-10 00:00:00', '333333333', '[\"26.40070874619912\",\"50.08643392250757\"]', NULL, 0, '2026-09-10 08:56:33', '2026-09-10 08:56:33'),
(706, '2026-09-10 00:00:00', '222222222', '[\"26.424089534998192\",\"50.0192334087005\"]', NULL, 0, '2026-09-10 17:36:10', '2026-09-10 17:36:10'),
(707, '2026-09-10 00:00:00', '222222222', '[\"26.424195544558756\",\"50.01931869179606\"]', NULL, 1, '2026-09-10 17:36:16', '2026-09-10 17:36:16'),
(708, '2026-09-10 00:00:00', '12345678', '[\"25.405925549319704\",\"49.591973543906285\"]', NULL, 1, '2026-09-10 18:04:40', '2026-09-10 18:04:40'),
(709, '2026-09-10 00:00:00', '111111111', '[\"17.3708836\",\"42.5024878\"]', NULL, 1, '2026-09-10 18:33:16', '2026-09-10 18:33:16'),
(710, '2026-09-10 00:00:00', '333333333', '[\"26.39658177551008\",\"50.184842913180894\"]', NULL, 1, '2026-09-10 18:45:59', '2026-09-10 18:45:59'),
(711, '2026-09-10 00:00:00', '654654213', '[\"27.3396232\",\"35.713044\"]', NULL, 1, '2026-09-10 20:24:25', '2026-09-10 20:24:25'),
(712, '2026-09-10 00:00:00', '666666666', '[\"24.5869286\",\"46.7789\"]', NULL, 1, '2026-09-10 22:13:52', '2026-09-10 22:13:52'),
(713, '2026-09-10 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-09-10 23:34:48', '2026-09-10 23:34:48'),
(714, '2026-09-11 00:00:00', '222222222', '[\"26.41883731092499\",\"50.012854434561824\"]', NULL, 0, '2026-09-11 11:12:04', '2026-09-11 11:12:04'),
(715, '2026-09-11 00:00:00', '333333333', '[\"26.418736184642313\",\"50.08041966441906\"]', NULL, 0, '2026-09-11 11:14:41', '2026-09-11 11:14:41'),
(716, '2026-09-11 00:00:00', '222222222', '[\"26.40324537133931\",\"50.07462392136606\"]', NULL, 1, '2026-09-11 16:51:21', '2026-09-11 16:51:21'),
(717, '2026-09-11 00:00:00', '333333333', '[\"26.421943114278164\",\"50.0732695421113\"]', NULL, 1, '2026-09-11 16:53:15', '2026-09-11 16:53:15'),
(718, '2026-09-12 00:00:00', '222222222', '[\"26.424089534998192\",\"50.0192334087005\"]', NULL, 0, '2026-09-12 04:53:51', '2026-09-12 04:53:51'),
(719, '2026-09-12 00:00:00', '65465465465', '[\"17.368689\",\"42.5311924\"]', NULL, 0, '2026-09-12 07:26:51', '2026-09-12 07:26:51'),
(720, '2026-09-12 00:00:00', '654654213', '[\"27.3415991\",\"35.7118488\"]', NULL, 0, '2026-09-12 07:51:50', '2026-09-12 07:51:50'),
(721, '2026-09-12 00:00:00', '111111111', '[\"17.3708535\",\"42.5025247\"]', NULL, 0, '2026-09-12 09:40:41', '2026-09-12 09:40:41'),
(722, '2026-09-12 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-09-12 09:43:22', '2026-09-12 09:43:22'),
(723, '2026-09-12 00:00:00', '111111111', '[\"16.8906773\",\"42.5564461\"]', NULL, 1, '2026-09-12 17:56:58', '2026-09-12 17:56:58'),
(724, '2026-09-12 00:00:00', '654654213', '[\"27.3397407\",\"35.7129374\"]', NULL, 1, '2026-09-12 19:47:57', '2026-09-12 19:47:57'),
(725, '2026-09-12 00:00:00', '222222222', '[\"26.420492491750554\",\"50.08837830926477\"]', NULL, 1, '2026-09-12 19:48:08', '2026-09-12 19:48:08'),
(726, '2026-09-12 00:00:00', '65465465465', '[\"17.3732592\",\"42.5170899\"]', NULL, 1, '2026-09-12 19:54:15', '2026-09-12 19:54:15'),
(727, '2026-09-12 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 1, '2026-09-12 22:49:33', '2026-09-12 22:49:33'),
(728, '2026-09-13 00:00:00', '666666666', '[\"24.5836205\",\"46.7900943\"]', NULL, 0, '2026-09-13 07:02:54', '2026-09-13 07:02:54'),
(729, '2026-09-13 00:00:00', '654654213', '[\"27.339862\",\"35.7131871\"]', NULL, 0, '2026-09-13 07:46:14', '2026-09-13 07:46:14'),
(730, '2026-09-13 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-09-13 08:30:50', '2026-09-13 08:30:50'),
(731, '2026-09-13 00:00:00', '12345678', '[\"26.409838390418194\",\"50.00073976813408\"]', NULL, 0, '2026-09-13 08:30:56', '2026-09-13 08:30:56'),
(732, '2026-09-13 00:00:00', '111111111', '[\"17.3710088\",\"42.5026084\"]', NULL, 0, '2026-09-13 08:45:43', '2026-09-13 08:45:43'),
(733, '2026-09-13 00:00:00', '65465465465', '[\"17.3705536\",\"42.5297182\"]', NULL, 0, '2026-09-13 08:47:03', '2026-09-13 08:47:03'),
(734, '2026-09-13 00:00:00', '222222222', '[\"26.424198895081066\",\"50.01935849690968\"]', NULL, 0, '2026-09-13 09:02:24', '2026-09-13 09:02:24'),
(735, '2026-09-13 00:00:00', '222222222', '[\"26.42665852338581\",\"50.03615834271266\"]', NULL, 1, '2026-09-13 09:46:19', '2026-09-13 09:46:19'),
(736, '2026-09-13 00:00:00', '333333333', '[\"26.41009836108415\",\"50.08044071900985\"]', NULL, 0, '2026-09-13 09:51:59', '2026-09-13 09:51:59'),
(737, '2026-09-13 00:00:00', '65465465465', '[\"17.3724798\",\"42.5155567\"]', NULL, 1, '2026-09-13 18:24:41', '2026-09-13 18:24:41'),
(738, '2026-09-13 00:00:00', '65465498798', '[\"21.47747747747748\",\"39.30591801540508\"]', NULL, 1, '2026-09-13 19:36:47', '2026-09-13 19:36:47'),
(739, '2026-09-13 00:00:00', '111111111', '[\"17.3707993\",\"42.5022498\"]', NULL, 1, '2026-09-13 20:16:12', '2026-09-13 20:16:12'),
(740, '2026-09-13 00:00:00', '654654213', '[\"27.3397993\",\"35.7132789\"]', NULL, 1, '2026-09-13 20:37:33', '2026-09-13 20:37:33'),
(741, '2026-09-13 00:00:00', '12345678', '[\"26.40980076512949\",\"50.000527195801226\"]', NULL, 1, '2026-09-13 21:45:09', '2026-09-13 21:45:09'),
(742, '2026-09-13 00:00:00', '666666666', '[\"24.5832391\",\"46.7899681\"]', NULL, 1, '2026-09-13 22:05:31', '2026-09-13 22:05:31'),
(743, '2026-09-13 00:00:00', '333333333', '[\"26.41857773193411\",\"50.08062231054039\"]', NULL, 1, '2026-09-13 22:19:28', '2026-09-13 22:19:28'),
(744, '2026-09-14 00:00:00', '666666666', '[\"24.5832488\",\"46.7898944\"]', NULL, 0, '2026-09-14 07:01:10', '2026-09-14 07:01:10'),
(745, '2026-09-14 00:00:00', '654654213', '[\"27.3398604\",\"35.7131821\"]', NULL, 0, '2026-09-14 07:28:03', '2026-09-14 07:28:03'),
(746, '2026-09-14 00:00:00', '65465465465', '[\"17.3725522\",\"42.5333381\"]', NULL, 0, '2026-09-14 07:42:07', '2026-09-14 07:42:07'),
(747, '2026-09-14 00:00:00', '111111111', '[\"17.370788\",\"42.5020785\"]', NULL, 0, '2026-09-14 08:11:49', '2026-09-14 08:11:49'),
(748, '2026-09-14 00:00:00', '222222222', '[\"26.416550932258463\",\"50.16002416014204\"]', NULL, 0, '2026-09-14 08:20:52', '2026-09-14 08:20:52'),
(749, '2026-09-14 00:00:00', '12345678', '[\"26.411552179546263\",\"50.001898310440964\"]', NULL, 0, '2026-09-14 08:24:32', '2026-09-14 08:24:32'),
(750, '2026-09-14 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 0, '2026-09-14 08:39:48', '2026-09-14 08:39:48'),
(751, '2026-09-14 00:00:00', '333333333', '[\"26.418653351585657\",\"50.080497113427015\"]', NULL, 0, '2026-09-14 09:13:49', '2026-09-14 09:13:49'),
(752, '2026-09-14 00:00:00', '65465465465', '[\"17.3719125\",\"42.5304022\"]', NULL, 1, '2026-09-14 17:08:38', '2026-09-14 17:08:38'),
(753, '2026-09-14 00:00:00', '12345678', '[\"26.409753951419905\",\"50.00065494241259\"]', NULL, 1, '2026-09-14 18:49:40', '2026-09-14 18:49:40'),
(754, '2026-09-14 00:00:00', '333333333', '[\"26.419978783089505\",\"50.07454761304828\"]', NULL, 1, '2026-09-14 19:12:07', '2026-09-14 19:12:07'),
(755, '2026-09-14 00:00:00', '222222222', '[\"26.424144351078024\",\"50.01879711864301\"]', NULL, 1, '2026-09-14 19:15:27', '2026-09-14 19:15:27'),
(756, '2026-09-14 00:00:00', '111111111', '[\"17.3710013\",\"42.5026322\"]', NULL, 1, '2026-09-14 19:42:54', '2026-09-14 19:42:54'),
(757, '2026-09-14 00:00:00', '654654213', '[\"27.3397122\",\"35.7130311\"]', NULL, 1, '2026-09-14 20:19:47', '2026-09-14 20:19:47'),
(758, '2026-09-14 00:00:00', '666666666', '[\"24.583417\",\"46.7896902\"]', NULL, 1, '2026-09-14 22:29:32', '2026-09-14 22:29:32'),
(759, '2026-09-15 00:00:00', '65465465465', '[\"17.3739145\",\"42.528127\"]', NULL, 0, '2026-09-15 07:19:13', '2026-09-15 07:19:13'),
(760, '2026-09-15 00:00:00', '111111111', '[\"17.3708461\",\"42.5021401\"]', NULL, 0, '2026-09-15 07:42:55', '2026-09-15 07:42:55'),
(761, '2026-09-15 00:00:00', '111111111', '[\"17.3708461\",\"42.5021401\"]', NULL, 0, '2026-09-15 07:43:25', '2026-09-15 07:43:25'),
(762, '2026-09-15 00:00:00', '654654213', '[\"27.3412806\",\"35.7118488\"]', NULL, 0, '2026-09-15 07:44:31', '2026-09-15 07:44:31'),
(763, '2026-09-15 00:00:00', '222222222', '[\"26.424271319792656\",\"50.019339974094954\"]', NULL, 0, '2026-09-15 08:07:54', '2026-09-15 08:07:54'),
(764, '2026-09-15 00:00:00', '666666666', '[\"24.583292\",\"46.7896284\"]', NULL, 0, '2026-09-15 08:11:11', '2026-09-15 08:11:11'),
(765, '2026-09-15 00:00:00', '12345678', '[\"26.409838007390103\",\"50.000623472546565\"]', NULL, 0, '2026-09-15 08:31:10', '2026-09-15 08:31:10'),
(766, '2026-09-15 00:00:00', '333333333', '[\"26.416655560228932\",\"50.080193994845686\"]', NULL, 0, '2026-09-15 09:03:40', '2026-09-15 09:03:40'),
(767, '2026-09-15 00:00:00', '65465498798', '[\"16.9009009009009\",\"42.54004942307891\"]', NULL, 1, '2026-09-15 11:25:54', '2026-09-15 11:25:54'),
(768, '2026-09-15 00:00:00', '65465498798', '[\"16.9009009009009\",\"42.54004942307891\"]', NULL, 0, '2026-09-15 11:26:21', '2026-09-15 11:26:21'),
(769, '2026-09-15 00:00:00', '65465465465', '[\"17.3749229\",\"42.5189905\"]', NULL, 1, '2026-09-15 17:17:54', '2026-09-15 17:17:54'),
(770, '2026-09-15 00:00:00', '333333333', '[\"26.411745374060203\",\"50.07135567503313\"]', NULL, 1, '2026-09-15 18:25:41', '2026-09-15 18:25:41'),
(771, '2026-09-15 00:00:00', '222222222', '[\"26.423781682462465\",\"50.018845291187354\"]', NULL, 1, '2026-09-15 19:09:46', '2026-09-15 19:09:46'),
(772, '2026-09-15 00:00:00', '111111111', '[\"17.3709823\",\"42.5026253\"]', NULL, 1, '2026-09-15 19:49:39', '2026-09-15 19:49:39'),
(773, '2026-09-15 00:00:00', '666666666', '[\"24.5832353\",\"46.7898278\"]', NULL, 1, '2026-09-15 21:34:24', '2026-09-15 21:34:24'),
(774, '2026-09-15 00:00:00', '654654213', '[\"27.3397673\",\"35.712132\"]', NULL, 1, '2026-09-15 22:18:17', '2026-09-15 22:18:17'),
(775, '2026-09-15 00:00:00', '12345678', '[\"26.40977288272138\",\"50.00066568500916\"]', NULL, 1, '2026-09-15 23:36:19', '2026-09-15 23:36:19'),
(776, '2026-09-16 00:00:00', '654654213', '[\"27.3412806\",\"35.7118488\"]', NULL, 0, '2026-09-16 07:35:16', '2026-09-16 07:35:16'),
(777, '2026-09-16 00:00:00', '666666666', '[\"24.5832134\",\"46.7899972\"]', NULL, 0, '2026-09-16 07:46:06', '2026-09-16 07:46:06'),
(778, '2026-09-16 00:00:00', '65465465465', '[\"17.3695957\",\"42.5265942\"]', NULL, 0, '2026-09-16 08:01:12', '2026-09-16 08:01:12'),
(779, '2026-09-16 00:00:00', '65465498798', '[\"17.333333333333332\",\"42.60129221547778\"]', NULL, 1, '2026-09-16 08:33:51', '2026-09-16 08:33:51'),
(780, '2026-09-16 00:00:00', '65465498798', '[\"17.333333333333332\",\"42.60129221547778\"]', NULL, 0, '2026-09-16 08:33:57', '2026-09-16 08:33:57'),
(781, '2026-09-16 00:00:00', '222222222', '[\"26.35490017852833\",\"50.19179287650735\"]', NULL, 0, '2026-09-16 08:39:14', '2026-09-16 08:39:14'),
(782, '2026-09-16 00:00:00', '333333333', '[\"26.41860276664224\",\"50.08043740464035\"]', NULL, 0, '2026-09-16 08:54:36', '2026-09-16 08:54:36'),
(783, '2026-09-16 00:00:00', '12345678', '[\"26.40984688697513\",\"50.000642701735764\"]', NULL, 0, '2026-09-16 08:56:42', '2026-09-16 08:56:42'),
(784, '2026-09-16 00:00:00', '12345678', '[\"26.40967556698879\",\"50.00103620146591\"]', NULL, 1, '2026-09-16 17:33:37', '2026-09-16 17:33:37'),
(785, '2026-09-16 00:00:00', '65465465465', '[\"17.3750943\",\"42.528127\"]', NULL, 1, '2026-09-16 18:25:27', '2026-09-16 18:25:27'),
(786, '2026-09-16 00:00:00', '12345678', '[\"26.420653624250935\",\"50.01155587239127\"]', NULL, 0, '2026-09-16 18:39:40', '2026-09-16 18:39:40'),
(787, '2026-09-16 00:00:00', '111111111', '[\"17.3708961\",\"42.5025028\"]', NULL, 1, '2026-09-16 19:12:18', '2026-09-16 19:12:18'),
(788, '2026-09-16 00:00:00', '222222222', '[\"26.371893022113444\",\"50.02555644334768\"]', NULL, 1, '2026-09-16 20:44:29', '2026-09-16 20:44:29'),
(789, '2026-09-16 00:00:00', '333333333', '[\"26.343263807957317\",\"50.21088227161868\"]', NULL, 1, '2026-09-16 21:03:47', '2026-09-16 21:03:47'),
(790, '2026-09-16 00:00:00', '12345678', '[\"26.40977288272138\",\"50.00066568500916\"]', NULL, 1, '2026-09-16 21:18:49', '2026-09-16 21:18:49'),
(791, '2026-09-16 00:00:00', '654654213', '[\"27.3394923\",\"35.7128949\"]', NULL, 1, '2026-09-16 21:51:50', '2026-09-16 21:51:50'),
(792, '2026-09-16 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-09-16 22:23:39', '2026-09-16 22:23:39'),
(793, '2026-09-17 00:00:00', '666666666', '[\"24.5832422\",\"46.789927\"]', NULL, 1, '2026-09-17 05:09:07', '2026-09-17 05:09:07'),
(794, '2026-09-17 00:00:00', '65465465465', '[\"17.3750943\",\"42.528127\"]', NULL, 0, '2026-09-17 07:44:36', '2026-09-17 07:44:36'),
(795, '2026-09-17 00:00:00', '654654213', '[\"27.3396592\",\"35.7129349\"]', NULL, 0, '2026-09-17 07:57:13', '2026-09-17 07:57:13'),
(796, '2026-09-17 00:00:00', '222222222', '[\"26.42456379267299\",\"50.0196641698012\"]', NULL, 0, '2026-09-17 08:23:21', '2026-09-17 08:23:21'),
(797, '2026-09-17 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-09-17 08:33:46', '2026-09-17 08:33:46'),
(798, '2026-09-17 00:00:00', '12345678', '[\"26.40983525330503\",\"50.000638096762785\"]', NULL, 0, '2026-09-17 08:37:06', '2026-09-17 08:37:06'),
(799, '2026-09-17 00:00:00', '333333333', '[\"26.418856260053946\",\"50.08140593338978\"]', NULL, 0, '2026-09-17 09:00:30', '2026-09-17 09:00:30'),
(800, '2026-09-17 00:00:00', '111111111', '[\"17.3708643\",\"42.502427\"]', NULL, 0, '2026-09-17 09:15:38', '2026-09-17 09:15:38'),
(801, '2026-09-17 00:00:00', '666666666', '[\"24.5832362\",\"46.7900019\"]', NULL, 0, '2026-09-17 10:18:31', '2026-09-17 10:18:31'),
(802, '2026-09-17 00:00:00', '12345678', '[\"25.40598567646346\",\"49.592043431774336\"]', NULL, 1, '2026-09-17 16:56:37', '2026-09-17 16:56:37'),
(803, '2026-09-17 00:00:00', '65465465465', '[\"17.3782737\",\"42.5343384\"]', NULL, 1, '2026-09-17 17:19:03', '2026-09-17 17:19:03'),
(804, '2026-09-17 00:00:00', '111111111', '[\"17.3740233\",\"42.5051304\"]', NULL, 1, '2026-09-17 19:09:44', '2026-09-17 19:09:44'),
(805, '2026-09-17 00:00:00', '654654213', '[\"27.3397917\",\"35.7129899\"]', NULL, 1, '2026-09-17 20:31:29', '2026-09-17 20:31:29'),
(806, '2026-09-17 00:00:00', '333333333', '[\"26.412748365942857\",\"50.078918496230735\"]', NULL, 1, '2026-09-17 20:56:58', '2026-09-17 20:56:58'),
(807, '2026-09-17 00:00:00', '666666666', '[\"24.5880404\",\"46.7833366\"]', NULL, 1, '2026-09-17 22:01:57', '2026-09-17 22:01:57'),
(808, '2026-09-17 00:00:00', '222222222', '[\"26.530714026983517\",\"49.96200110152539\"]', NULL, 1, '2026-09-17 22:09:10', '2026-09-17 22:09:10'),
(809, '2026-09-18 00:00:00', '222222222', '[\"26.478878531076994\",\"49.99177031686792\"]', NULL, 0, '2026-09-18 11:57:45', '2026-09-18 11:57:45'),
(810, '2026-09-18 00:00:00', '222222222', '[\"26.424101848076806\",\"50.01925996003192\"]', NULL, 1, '2026-09-18 18:06:35', '2026-09-18 18:06:35'),
(811, '2026-09-19 00:00:00', '65465465465', '[\"17.3714236\",\"42.5308859\"]', NULL, 0, '2026-09-19 08:03:25', '2026-09-19 08:03:25'),
(812, '2026-09-19 00:00:00', '654654213', '[\"27.3398604\",\"35.7131821\"]', NULL, 0, '2026-09-19 08:06:53', '2026-09-19 08:06:53'),
(813, '2026-09-19 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-09-19 08:34:10', '2026-09-19 08:34:10');
INSERT INTO `attendances` (`id`, `date`, `employee_id`, `location`, `picture`, `type`, `created_at`, `updated_at`) VALUES
(814, '2026-09-19 00:00:00', '111111111', '[\"17.3708285\",\"42.5021722\"]', NULL, 0, '2026-09-19 08:42:14', '2026-09-19 08:42:14'),
(815, '2026-09-19 00:00:00', '666666666', '[\"24.5833513\",\"46.7899375\"]', NULL, 0, '2026-09-19 11:16:07', '2026-09-19 11:16:07'),
(816, '2026-09-19 00:00:00', '222222222', '[\"26.42369915943237\",\"50.019098589945536\"]', NULL, 0, '2026-09-19 13:31:36', '2026-09-19 13:31:36'),
(817, '2026-09-19 00:00:00', '333333333', '[\"26.414683985005727\",\"50.07760006230448\"]', NULL, 0, '2026-09-19 13:37:51', '2026-09-19 13:37:51'),
(818, '2026-09-19 00:00:00', '65465465465', '[\"17.3719589\",\"42.5299662\"]', NULL, 1, '2026-09-19 17:10:24', '2026-09-19 17:10:24'),
(819, '2026-09-19 00:00:00', '111111111', '[\"17.3711219\",\"42.5206564\"]', NULL, 1, '2026-09-19 17:44:03', '2026-09-19 17:44:03'),
(820, '2026-09-19 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 1, '2026-09-19 18:12:03', '2026-09-19 18:12:03'),
(821, '2026-09-19 00:00:00', '333333333', '[\"26.336387301800013\",\"50.212165562260424\"]', NULL, 1, '2026-09-19 18:27:53', '2026-09-19 18:27:53'),
(822, '2026-09-19 00:00:00', '654654213', '[\"27.339382\",\"35.7128752\"]', NULL, 1, '2026-09-19 19:40:41', '2026-09-19 19:40:41'),
(823, '2026-09-20 00:00:00', '666666666', '[\"24.5836532\",\"46.790096\"]', NULL, 1, '2026-09-20 01:59:00', '2026-09-20 01:59:00'),
(824, '2026-09-20 00:00:00', '222222222', '[\"26.423765751944625\",\"50.01888365162614\"]', NULL, 1, '2026-09-20 04:25:22', '2026-09-20 04:25:22'),
(825, '2026-09-20 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 0, '2026-09-20 07:36:27', '2026-09-20 07:36:27'),
(826, '2026-09-20 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 0, '2026-09-20 07:36:47', '2026-09-20 07:36:47'),
(827, '2026-09-20 00:00:00', '65465465465', '[\"17.3714236\",\"42.5308859\"]', NULL, 0, '2026-09-20 07:57:05', '2026-09-20 07:57:05'),
(828, '2026-09-20 00:00:00', '111111111', '[\"17.3707644\",\"42.5020502\"]', NULL, 0, '2026-09-20 08:19:45', '2026-09-20 08:19:45'),
(829, '2026-09-20 00:00:00', '12345678', '[\"26.409833364651742\",\"50.0006363033482\"]', NULL, 0, '2026-09-20 08:31:12', '2026-09-20 08:31:12'),
(830, '2026-09-20 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-09-20 08:35:39', '2026-09-20 08:35:39'),
(831, '2026-09-20 00:00:00', '333333333', '[\"26.41869996648238\",\"50.08044655816296\"]', NULL, 0, '2026-09-20 08:53:12', '2026-09-20 08:53:12'),
(832, '2026-09-20 00:00:00', '222222222', '[\"26.41531701737319\",\"50.012620261400336\"]', NULL, 0, '2026-09-20 09:01:44', '2026-09-20 09:01:44'),
(833, '2026-09-20 00:00:00', '666666666', '[\"24.5832201\",\"46.7899192\"]', NULL, 0, '2026-09-20 09:29:06', '2026-09-20 09:29:06'),
(834, '2026-09-20 00:00:00', '222222222', '[\"26.424061637822334\",\"50.0190191212247\"]', NULL, 1, '2026-09-20 17:56:01', '2026-09-20 17:56:01'),
(835, '2026-09-20 00:00:00', '65465465465', '[\"17.3714236\",\"42.5308859\"]', NULL, 1, '2026-09-20 18:02:41', '2026-09-20 18:02:41'),
(836, '2026-09-20 00:00:00', '65465465465', '[\"17.3717519\",\"42.5307357\"]', NULL, 1, '2026-09-20 18:02:53', '2026-09-20 18:02:53'),
(837, '2026-09-20 00:00:00', '333333333', '[\"26.353686047455636\",\"50.209735659592525\"]', NULL, 1, '2026-09-20 18:17:28', '2026-09-20 18:17:28'),
(838, '2026-09-20 00:00:00', '111111111', '[\"17.3710254\",\"42.502507\"]', NULL, 1, '2026-09-20 19:25:22', '2026-09-20 19:25:22'),
(839, '2026-09-20 00:00:00', '12345678', '[\"26.40979222706028\",\"50.000550438227364\"]', NULL, 1, '2026-09-20 19:50:12', '2026-09-20 19:50:12'),
(840, '2026-09-20 00:00:00', '666666666', '[\"24.5832485\",\"46.7898977\"]', NULL, 1, '2026-09-20 22:07:35', '2026-09-20 22:07:35'),
(841, '2026-09-20 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 1, '2026-09-20 22:31:40', '2026-09-20 22:31:40'),
(842, '2026-09-21 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-09-21 05:11:06', '2026-09-21 05:11:06'),
(843, '2026-09-21 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-09-21 05:17:37', '2026-09-21 05:17:37'),
(844, '2026-09-21 00:00:00', '65465465465', '[\"17.3750943\",\"42.528127\"]', NULL, 0, '2026-09-21 07:21:39', '2026-09-21 07:21:39'),
(845, '2026-09-21 00:00:00', '654654213', '[\"27.3398606\",\"35.7131788\"]', NULL, 0, '2026-09-21 07:49:22', '2026-09-21 07:49:22'),
(846, '2026-09-21 00:00:00', '12345678', '[\"26.40977591511283\",\"50.00071600709802\"]', NULL, 0, '2026-09-21 08:10:49', '2026-09-21 08:10:49'),
(847, '2026-09-21 00:00:00', '222222222', '[\"26.40678609134834\",\"50.01396663632001\"]', NULL, 0, '2026-09-21 08:19:06', '2026-09-21 08:19:06'),
(848, '2026-09-21 00:00:00', '666666666', '[\"24.5832209\",\"46.7900303\"]', NULL, 0, '2026-09-21 08:19:10', '2026-09-21 08:19:10'),
(849, '2026-09-21 00:00:00', '333333333', '[\"26.41868322495947\",\"50.08045197797226\"]', NULL, 0, '2026-09-21 09:11:18', '2026-09-21 09:11:18'),
(850, '2026-09-21 00:00:00', '12345678', '[\"26.40980802403837\",\"50.00055377930067\"]', NULL, 1, '2026-09-21 17:29:33', '2026-09-21 17:29:33'),
(851, '2026-09-21 00:00:00', '65465465465', '[\"17.3727748\",\"42.5155567\"]', NULL, 1, '2026-09-21 17:31:12', '2026-09-21 17:31:12'),
(852, '2026-09-21 00:00:00', '222222222', '[\"26.424081644314054\",\"50.01921756738133\"]', NULL, 1, '2026-09-21 17:37:12', '2026-09-21 17:37:12'),
(853, '2026-09-21 00:00:00', '111111111', '[\"17.3706558\",\"42.503623\"]', NULL, 1, '2026-09-21 19:18:18', '2026-09-21 19:18:18'),
(854, '2026-09-21 00:00:00', '666666666', '[\"24.5831765\",\"46.7896956\"]', NULL, 1, '2026-09-21 20:24:25', '2026-09-21 20:24:25'),
(855, '2026-09-21 00:00:00', '333333333', '[\"26.447679365827092\",\"50.06867410522563\"]', NULL, 1, '2026-09-21 21:04:22', '2026-09-21 21:04:22'),
(856, '2026-09-21 00:00:00', '654654213', '[\"27.3397882\",\"35.7131255\"]', NULL, 1, '2026-09-21 21:55:27', '2026-09-21 21:55:27'),
(857, '2026-09-21 00:00:00', '654654213', '[\"27.3398604\",\"35.7131821\"]', NULL, 1, '2026-09-21 21:55:51', '2026-09-21 21:55:51'),
(858, '2026-09-22 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 1, '2026-09-22 01:17:50', '2026-09-22 01:17:50'),
(859, '2026-09-22 00:00:00', '65465465465', '[\"17.3727748\",\"42.5155567\"]', NULL, 0, '2026-09-22 07:01:54', '2026-09-22 07:01:54'),
(860, '2026-09-22 00:00:00', '111111111', '[\"17.3709076\",\"42.5024369\"]', NULL, 0, '2026-09-22 07:43:41', '2026-09-22 07:43:41'),
(861, '2026-09-22 00:00:00', '666666666', '[\"24.583251\",\"46.7899746\"]', NULL, 0, '2026-09-22 07:45:40', '2026-09-22 07:45:40'),
(862, '2026-09-22 00:00:00', '654654213', '[\"27.339739\",\"35.7129989\"]', NULL, 0, '2026-09-22 07:46:12', '2026-09-22 07:46:12'),
(863, '2026-09-22 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-09-22 08:21:41', '2026-09-22 08:21:41'),
(864, '2026-09-22 00:00:00', '333333333', '[\"26.41868027410715\",\"50.080514979453\"]', NULL, 0, '2026-09-22 08:24:19', '2026-09-22 08:24:19'),
(865, '2026-09-22 00:00:00', '222222222', '[\"27.164487538899678\",\"49.560335752036764\"]', NULL, 0, '2026-09-22 14:15:10', '2026-09-22 14:15:10'),
(866, '2026-09-22 00:00:00', '65465465465', '[\"17.3715401\",\"42.5146369\"]', NULL, 1, '2026-09-22 17:15:09', '2026-09-22 17:15:09'),
(867, '2026-09-22 00:00:00', '111111111', '[\"17.3708325\",\"42.5023871\"]', NULL, 1, '2026-09-22 18:20:05', '2026-09-22 18:20:05'),
(868, '2026-09-22 00:00:00', '333333333', '[\"26.36194674968457\",\"50.20666733240271\"]', NULL, 1, '2026-09-22 18:20:13', '2026-09-22 18:20:13'),
(869, '2026-09-22 00:00:00', '12345678', '[\"26.40977789681654\",\"50.0005495201216\"]', NULL, 1, '2026-09-22 19:03:34', '2026-09-22 19:03:34'),
(870, '2026-09-22 00:00:00', '222222222', '[\"26.424081536682912\",\"50.01921769545559\"]', NULL, 1, '2026-09-22 19:49:13', '2026-09-22 19:49:13'),
(871, '2026-09-22 00:00:00', '666666666', '[\"24.5832481\",\"46.7898277\"]', NULL, 1, '2026-09-22 20:44:04', '2026-09-22 20:44:04'),
(872, '2026-09-22 00:00:00', '654654213', '[\"27.3398616\",\"35.7131868\"]', NULL, 1, '2026-09-22 21:01:31', '2026-09-22 21:01:31'),
(873, '2026-09-23 00:00:00', '65465498798', '[\"21.54954954954955\",\"39.20917958101916\"]', NULL, 1, '2026-09-23 00:21:50', '2026-09-23 00:21:50'),
(874, '2026-09-23 00:00:00', '65465465465', '[\"17.3756127\",\"42.3641707\"]', NULL, 0, '2026-09-23 07:50:58', '2026-09-23 07:50:58'),
(875, '2026-09-23 00:00:00', '111111111', '[\"17.3709134\",\"42.502394\"]', NULL, 0, '2026-09-23 10:23:13', '2026-09-23 10:23:13'),
(876, '2026-09-23 00:00:00', '65465465465', '[\"17.3708558\",\"42.5024336\"]', NULL, 1, '2026-09-23 16:34:54', '2026-09-23 16:34:54'),
(877, '2026-09-24 00:00:00', '65465465465', '[\"17.3803708\",\"42.5123324\"]', NULL, 0, '2026-09-24 07:32:06', '2026-09-24 07:32:06'),
(878, '2026-09-24 00:00:00', '222222222', '[\"26.423896599999996\",\"50.01897013333333\"]', NULL, 0, '2026-09-24 08:15:12', '2026-09-24 08:15:12'),
(879, '2026-09-24 00:00:00', '111111111', '[\"17.3707998\",\"42.5020191\"]', NULL, 0, '2026-09-24 08:22:09', '2026-09-24 08:22:09'),
(880, '2026-09-24 00:00:00', '111111111', '[\"17.3707998\",\"42.5020191\"]', NULL, 0, '2026-09-24 08:22:39', '2026-09-24 08:22:39'),
(881, '2026-09-24 00:00:00', '654654213', '[\"27.3397068\",\"35.7128916\"]', NULL, 0, '2026-09-24 08:26:22', '2026-09-24 08:26:22'),
(882, '2026-09-24 00:00:00', '666666666', '[\"24.5832365\",\"46.7898582\"]', NULL, 0, '2026-09-24 08:27:34', '2026-09-24 08:27:34'),
(883, '2026-09-24 00:00:00', '12345678', '[\"26.40977288272138\",\"50.00066568500916\"]', NULL, 0, '2026-09-24 08:32:14', '2026-09-24 08:32:14'),
(884, '2026-09-24 00:00:00', '333333333', '[\"26.418715570394347\",\"50.08045645758139\"]', NULL, 0, '2026-09-24 08:35:52', '2026-09-24 08:35:52'),
(885, '2026-09-24 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 0, '2026-09-24 09:02:44', '2026-09-24 09:02:44'),
(886, '2026-09-24 00:00:00', '12345678', '[\"25.405839776321436\",\"49.5919875550297\"]', NULL, 1, '2026-09-24 16:45:57', '2026-09-24 16:45:57'),
(887, '2026-09-24 00:00:00', '111111111', '[\"17.3708202\",\"42.5022995\"]', NULL, 1, '2026-09-24 17:26:45', '2026-09-24 17:26:45'),
(888, '2026-09-24 00:00:00', '777777777', '[\"27.4726394\",\"35.6462815\"]', NULL, 0, '2026-09-24 17:58:36', '2026-09-24 17:58:36'),
(889, '2026-09-24 00:00:00', '333333333', '[\"26.363456979457133\",\"50.20632046434588\"]', NULL, 1, '2026-09-24 18:22:40', '2026-09-24 18:22:40'),
(890, '2026-09-24 00:00:00', '65465465465', '[\"17.3803165\",\"42.5122725\"]', NULL, 1, '2026-09-24 18:40:17', '2026-09-24 18:40:17'),
(891, '2026-09-24 00:00:00', '666666666', '[\"24.5834497\",\"46.7896692\"]', NULL, 1, '2026-09-24 19:14:34', '2026-09-24 19:14:34'),
(892, '2026-09-24 00:00:00', '222222222', '[\"26.252415707073283\",\"50.089941657823594\"]', NULL, 1, '2026-09-24 20:17:44', '2026-09-24 20:17:44'),
(893, '2026-09-24 00:00:00', '777777777', '[\"27.3395945\",\"35.7129525\"]', NULL, 1, '2026-09-24 21:38:02', '2026-09-24 21:38:02'),
(894, '2026-09-24 00:00:00', '654654213', '[\"27.3394058\",\"35.7138969\"]', NULL, 0, '2026-09-24 21:39:07', '2026-09-24 21:39:07'),
(895, '2026-09-24 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-09-24 22:01:26', '2026-09-24 22:01:26'),
(896, '2026-09-25 00:00:00', '666666666', '[\"24.5833057\",\"46.7900164\"]', NULL, 0, '2026-09-25 15:54:59', '2026-09-25 15:54:59'),
(897, '2026-09-25 00:00:00', '654654213', '[\"27.3411986\",\"35.7132142\"]', NULL, 0, '2026-09-25 17:10:38', '2026-09-25 17:10:38'),
(898, '2026-09-25 00:00:00', '777777777', '[\"27.3387687\",\"35.7138969\"]', NULL, 0, '2026-09-25 17:26:28', '2026-09-25 17:26:28'),
(899, '2026-09-25 00:00:00', '777777777', '[\"27.3396677\",\"35.7131629\"]', NULL, 0, '2026-09-25 21:52:58', '2026-09-25 21:52:58'),
(900, '2026-09-25 00:00:00', '777777777', '[\"27.3396316\",\"35.7131125\"]', NULL, 1, '2026-09-25 21:53:15', '2026-09-25 21:53:15'),
(901, '2026-09-25 00:00:00', '654654213', '[\"27.3397122\",\"35.7118301\"]', NULL, 1, '2026-09-25 21:54:31', '2026-09-25 21:54:31'),
(902, '2026-09-25 00:00:00', '666666666', '[\"24.595705\",\"46.7805899\"]', NULL, 1, '2026-09-25 23:02:46', '2026-09-25 23:02:46'),
(903, '2026-09-26 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.23812821078864\"]', NULL, 0, '2026-09-26 08:27:20', '2026-09-26 08:27:20'),
(904, '2026-09-26 00:00:00', '65465465465', '[\"17.3803563\",\"42.5122162\"]', NULL, 0, '2026-09-26 08:36:00', '2026-09-26 08:36:00'),
(905, '2026-09-26 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 0, '2026-09-26 08:57:48', '2026-09-26 08:57:48'),
(906, '2026-09-26 00:00:00', '111111111', '[\"17.3706677\",\"42.5024725\"]', NULL, 0, '2026-09-26 09:22:29', '2026-09-26 09:22:29'),
(907, '2026-09-26 00:00:00', '65465465465', '[\"17.3731387\",\"42.5299662\"]', NULL, 1, '2026-09-26 16:58:46', '2026-09-26 16:58:46'),
(908, '2026-09-26 00:00:00', '111111111', '[\"17.3708662\",\"42.5025137\"]', NULL, 1, '2026-09-26 17:54:15', '2026-09-26 17:54:15'),
(909, '2026-09-26 00:00:00', '654654213', '[\"27.3393948\",\"35.7132442\"]', NULL, 1, '2026-09-26 21:01:28', '2026-09-26 21:01:28'),
(910, '2026-09-26 00:00:00', '65465498798', '[\"21.54954954954955\",\"39.18980745672024\"]', NULL, 1, '2026-09-26 21:07:33', '2026-09-26 21:07:33'),
(911, '2026-09-27 00:00:00', '666666666', '[\"24.5833311\",\"46.7897849\"]', NULL, 0, '2026-09-27 07:50:30', '2026-09-27 07:50:30'),
(912, '2026-09-27 00:00:00', '654654213', '[\"27.3393935\",\"35.7132974\"]', NULL, 0, '2026-09-27 08:01:42', '2026-09-27 08:01:42'),
(913, '2026-09-27 00:00:00', '65465465465', '[\"17.3804022\",\"42.5122858\"]', NULL, 0, '2026-09-27 08:03:21', '2026-09-27 08:03:21'),
(914, '2026-09-27 00:00:00', '111111111', '[\"17.3708949\",\"42.5024699\"]', NULL, 0, '2026-09-27 08:16:14', '2026-09-27 08:16:14'),
(915, '2026-09-27 00:00:00', '222222222', '[\"26.396047123576302\",\"50.01831263712768\"]', NULL, 0, '2026-09-27 08:20:32', '2026-09-27 08:20:32'),
(916, '2026-09-27 00:00:00', '333333333', '[\"26.300816095084294\",\"50.171872082710316\"]', NULL, 0, '2026-09-27 08:35:30', '2026-09-27 08:35:30'),
(917, '2026-09-27 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-09-27 08:56:32', '2026-09-27 08:56:32'),
(918, '2026-09-27 00:00:00', '65465465465', '[\"17.3803467\",\"42.5123962\"]', NULL, 1, '2026-09-27 17:03:35', '2026-09-27 17:03:35'),
(919, '2026-09-27 00:00:00', '12345678', '[\"26.40980367790744\",\"50.000649056816485\"]', NULL, 1, '2026-09-27 17:30:47', '2026-09-27 17:30:47'),
(920, '2026-09-27 00:00:00', '111111111', '[\"17.3708962\",\"42.5024612\"]', NULL, 1, '2026-09-27 18:09:14', '2026-09-27 18:09:14'),
(921, '2026-09-27 00:00:00', '654654213', '[\"27.3389301\",\"35.7128869\"]', NULL, 1, '2026-09-27 20:31:28', '2026-09-27 20:31:28'),
(922, '2026-09-27 00:00:00', '65465498798', '[\"21.47747747747748\",\"39.30591801540508\"]', NULL, 1, '2026-09-27 20:56:43', '2026-09-27 20:56:43'),
(924, '2026-09-27 00:00:00', '222222222', '[\"26.423261972251886\",\"50.01995641959281\"]', NULL, 1, '2026-09-27 21:19:10', '2026-09-27 21:19:10'),
(925, '2026-09-28 00:00:00', '333333333', '[\"26.41872905106326\",\"50.08041811158988\"]', NULL, 1, '2026-09-28 00:56:18', '2026-09-28 00:56:18'),
(926, '2026-09-28 00:00:00', '12345678', '[\"26.409903666528663\",\"50.000696557544835\"]', NULL, 0, '2026-09-28 07:17:07', '2026-09-28 07:17:07'),
(927, '2026-09-28 00:00:00', '111111111', '[\"17.3708889\",\"42.5024704\"]', NULL, 0, '2026-09-28 07:24:32', '2026-09-28 07:24:32'),
(928, '2026-09-28 00:00:00', '666666666', '[\"24.5832213\",\"46.7899241\"]', NULL, 0, '2026-09-28 07:29:03', '2026-09-28 07:29:03'),
(929, '2026-09-28 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 0, '2026-09-28 07:43:59', '2026-09-28 07:43:59'),
(930, '2026-09-28 00:00:00', '222222222', '[\"26.424066270666557\",\"50.0191870179565\"]', NULL, 0, '2026-09-28 08:21:05', '2026-09-28 08:21:05'),
(931, '2026-09-28 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-09-28 08:54:21', '2026-09-28 08:54:21'),
(932, '2026-09-28 00:00:00', '65465465465', '[\"17.322679\",\"42.4066262\"]', NULL, 0, '2026-09-28 09:07:27', '2026-09-28 09:07:27'),
(933, '2026-09-28 00:00:00', '333333333', '[\"26.36498273138011\",\"50.20921376395056\"]', NULL, 0, '2026-09-28 09:48:02', '2026-09-28 09:48:02'),
(934, '2026-09-28 00:00:00', '333333333', '[\"26.36498254641153\",\"50.209227362304105\"]', NULL, 1, '2026-09-28 17:47:25', '2026-09-28 17:47:25'),
(935, '2026-09-28 00:00:00', '222222222', '[\"26.45558257945048\",\"50.04347308220654\"]', NULL, 1, '2026-09-28 18:15:41', '2026-09-28 18:15:41'),
(936, '2026-09-28 00:00:00', '65465465465', '[\"17.370313\",\"42.5033225\"]', NULL, 1, '2026-09-28 18:30:49', '2026-09-28 18:30:49'),
(937, '2026-09-28 00:00:00', '111111111', '[\"17.3709523\",\"42.5027819\"]', NULL, 0, '2026-09-28 18:48:45', '2026-09-28 18:48:45'),
(938, '2026-09-28 00:00:00', '111111111', '[\"17.3709523\",\"42.5027819\"]', NULL, 1, '2026-09-28 18:49:16', '2026-09-28 18:49:16'),
(939, '2026-09-28 00:00:00', '654654213', '[\"27.339315\",\"35.7129871\"]', NULL, 1, '2026-09-28 20:10:21', '2026-09-28 20:10:21'),
(940, '2026-09-28 00:00:00', '777777777', '[\"27.3468223\",\"35.6894171\"]', NULL, 0, '2026-09-28 20:11:32', '2026-09-28 20:11:32'),
(941, '2026-09-28 00:00:00', '12345678', '[\"26.41370827566706\",\"50.00150815429905\"]', NULL, 1, '2026-09-28 20:29:21', '2026-09-28 20:29:21'),
(942, '2026-09-28 00:00:00', '666666666', '[\"24.5833981\",\"46.7904869\"]', NULL, 1, '2026-09-28 20:38:22', '2026-09-28 20:38:22'),
(943, '2026-09-28 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-09-28 21:38:29', '2026-09-28 21:38:29'),
(944, '2026-09-28 00:00:00', '777777777', '[\"27.3397706\",\"35.7130138\"]', NULL, 1, '2026-09-28 23:36:44', '2026-09-28 23:36:44'),
(945, '2026-09-29 00:00:00', '654654213', '[\"27.339389\",\"35.7132986\"]', NULL, 0, '2026-09-29 07:49:58', '2026-09-29 07:49:58'),
(946, '2026-09-29 00:00:00', '111111111', '[\"17.3708918\",\"42.5025068\"]', NULL, 0, '2026-09-29 08:07:00', '2026-09-29 08:07:00'),
(947, '2026-09-29 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 1, '2026-09-29 08:16:22', '2026-09-29 08:16:22'),
(948, '2026-09-29 00:00:00', '333333333', '[\"26.418619495207224\",\"50.08056674399952\"]', NULL, 0, '2026-09-29 08:25:49', '2026-09-29 08:25:49'),
(949, '2026-09-29 00:00:00', '12345678', '[\"26.409811703626946\",\"50.00059618121211\"]', NULL, 0, '2026-09-29 08:30:38', '2026-09-29 08:30:38'),
(950, '2026-09-29 00:00:00', '222222222', '[\"26.425763507173457\",\"50.018073959718514\"]', NULL, 0, '2026-09-29 08:31:32', '2026-09-29 08:31:32'),
(951, '2026-09-29 00:00:00', '666666666', '[\"24.5833302\",\"46.789828\"]', NULL, 0, '2026-09-29 08:41:59', '2026-09-29 08:41:59'),
(952, '2026-09-29 00:00:00', '65465465465', '[\"17.3226912\",\"42.4066896\"]', NULL, 0, '2026-09-29 09:03:51', '2026-09-29 09:03:51'),
(953, '2026-09-29 00:00:00', '65465465465', '[\"17.3744242\",\"42.5284335\"]', NULL, 1, '2026-09-29 17:29:10', '2026-09-29 17:29:10'),
(954, '2026-09-29 00:00:00', '222222222', '[\"26.42286015071018\",\"50.02520708903518\"]', NULL, 1, '2026-09-29 19:13:27', '2026-09-29 19:13:27'),
(955, '2026-09-29 00:00:00', '111111111', '[\"17.3708991\",\"42.5024664\"]', NULL, 1, '2026-09-29 20:17:38', '2026-09-29 20:17:38'),
(956, '2026-09-29 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 1, '2026-09-29 20:31:23', '2026-09-29 20:31:23'),
(957, '2026-09-29 00:00:00', '666666666', '[\"24.5832075\",\"46.7899662\"]', NULL, 1, '2026-09-29 21:03:59', '2026-09-29 21:03:59'),
(958, '2026-09-29 00:00:00', '333333333', '[\"26.433800543268568\",\"50.08002516789628\"]', NULL, 1, '2026-09-29 22:09:42', '2026-09-29 22:09:42'),
(959, '2026-09-29 00:00:00', '12345678', '[\"26.409807085057654\",\"50.00066437484991\"]', NULL, 1, '2026-09-29 22:42:43', '2026-09-29 22:42:43'),
(960, '2026-09-30 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 1, '2026-09-30 01:02:29', '2026-09-30 01:02:29'),
(961, '2026-09-30 00:00:00', '666666666', '[\"24.5832816\",\"46.789784\"]', NULL, 0, '2026-09-30 05:57:34', '2026-09-30 05:57:34'),
(962, '2026-09-30 00:00:00', '654654213', '[\"27.3398427\",\"35.7125962\"]', NULL, 0, '2026-09-30 07:50:12', '2026-09-30 07:50:12'),
(963, '2026-09-30 00:00:00', '222222222', '[\"26.3649864806979\",\"50.209199955539454\"]', NULL, 0, '2026-09-30 08:06:04', '2026-09-30 08:06:04'),
(964, '2026-09-30 00:00:00', '65465465465', '[\"17.3226821\",\"42.4066741\"]', NULL, 0, '2026-09-30 08:45:49', '2026-09-30 08:45:49'),
(965, '2026-09-30 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-09-30 08:50:53', '2026-09-30 08:50:53'),
(966, '2026-09-30 00:00:00', '111111111', '[\"17.3708927\",\"42.502483\"]', NULL, 0, '2026-09-30 08:51:25', '2026-09-30 08:51:25'),
(967, '2026-09-30 00:00:00', '333333333', '[\"26.364982072739835\",\"50.20925215390317\"]', NULL, 0, '2026-09-30 08:52:09', '2026-09-30 08:52:09'),
(968, '2026-09-30 00:00:00', '12345678', '[\"26.409807085057654\",\"50.00066437484991\"]', NULL, 0, '2026-09-30 09:23:05', '2026-09-30 09:23:05'),
(969, '2026-09-30 00:00:00', '222222222', '[\"26.44055962089423\",\"50.058413541405955\"]', NULL, 1, '2026-09-30 17:33:50', '2026-09-30 17:33:50'),
(970, '2026-09-30 00:00:00', '12345678', '[\"26.409807085057654\",\"50.00066437484991\"]', NULL, 1, '2026-09-30 17:36:37', '2026-09-30 17:36:37'),
(971, '2026-09-30 00:00:00', '65465465465', '[\"17.371755\",\"42.5149435\"]', NULL, 1, '2026-09-30 18:01:17', '2026-09-30 18:01:17'),
(972, '2026-09-30 00:00:00', '333333333', '[\"26.4441878211719\",\"50.04550917331026\"]', NULL, 1, '2026-09-30 18:09:06', '2026-09-30 18:09:06'),
(973, '2026-09-30 00:00:00', '654654213', '[\"27.33939\",\"35.7132993\"]', NULL, 1, '2026-09-30 18:50:55', '2026-09-30 18:50:55'),
(974, '2026-09-30 00:00:00', '666666666', '[\"24.5833316\",\"46.7902497\"]', NULL, 1, '2026-09-30 18:54:27', '2026-09-30 18:54:27'),
(975, '2026-09-30 00:00:00', '111111111', '[\"17.3818274\",\"42.5439061\"]', NULL, 1, '2026-09-30 20:36:08', '2026-09-30 20:36:08'),
(976, '2026-09-30 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-09-30 21:08:17', '2026-09-30 21:08:17'),
(977, '2026-10-01 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 0, '2026-10-01 07:47:58', '2026-10-01 07:47:58'),
(978, '2026-10-01 00:00:00', '65465465465', '[\"17.3803954\",\"42.5122826\"]', NULL, 0, '2026-10-01 07:50:32', '2026-10-01 07:50:32'),
(979, '2026-10-01 00:00:00', '111111111', '[\"17.3708982\",\"42.5024541\"]', NULL, 0, '2026-10-01 07:57:42', '2026-10-01 07:57:42'),
(980, '2026-10-01 00:00:00', '666666666', '[\"24.5832196\",\"46.78981\"]', NULL, 0, '2026-10-01 08:05:25', '2026-10-01 08:05:25'),
(981, '2026-10-01 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-10-01 08:17:05', '2026-10-01 08:17:05'),
(982, '2026-10-01 00:00:00', '12345678', '[\"26.414711128910614\",\"50.00982974769857\"]', NULL, 0, '2026-10-01 08:23:21', '2026-10-01 08:23:21'),
(983, '2026-10-01 00:00:00', '333333333', '[\"26.3649814901373\",\"50.20923483069728\"]', NULL, 0, '2026-10-01 09:24:21', '2026-10-01 09:24:21'),
(984, '2026-10-01 00:00:00', '111111111', '[\"17.3227402\",\"42.4065564\"]', NULL, 1, '2026-10-01 17:16:22', '2026-10-01 17:16:22'),
(985, '2026-10-01 00:00:00', '65465465465', '[\"17.3741951\",\"42.5146369\"]', NULL, 1, '2026-10-01 17:40:46', '2026-10-01 17:40:46'),
(986, '2026-10-01 00:00:00', '12345678', '[\"26.409910744212684\",\"50.000712104750704\"]', NULL, 1, '2026-10-01 19:03:20', '2026-10-01 19:03:20'),
(987, '2026-10-01 00:00:00', '333333333', '[\"26.441812764351724\",\"50.07570791802982\"]', NULL, 1, '2026-10-01 19:49:22', '2026-10-01 19:49:22'),
(988, '2026-10-01 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 1, '2026-10-01 19:57:43', '2026-10-01 19:57:43'),
(989, '2026-10-02 00:00:00', '666666666', '[\"24.5832069\",\"46.7897754\"]', NULL, 1, '2026-10-02 03:54:35', '2026-10-02 03:54:35'),
(990, '2026-10-03 00:00:00', '65465465465', '[\"17.3750943\",\"42.528127\"]', NULL, 0, '2026-10-03 07:30:05', '2026-10-03 07:30:05'),
(991, '2026-10-03 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.23812821078864\"]', NULL, 0, '2026-10-03 08:34:53', '2026-10-03 08:34:53'),
(992, '2026-10-03 00:00:00', '111111111', '[\"17.3708921\",\"42.5024948\"]', NULL, 0, '2026-10-03 08:53:31', '2026-10-03 08:53:31'),
(993, '2026-10-03 00:00:00', '654654213', '[\"27.3398062\",\"35.7125315\"]', NULL, 0, '2026-10-03 10:11:41', '2026-10-03 10:11:41'),
(994, '2026-10-03 00:00:00', '666666666', '[\"24.5833891\",\"46.7899588\"]', NULL, 0, '2026-10-03 14:08:29', '2026-10-03 14:08:29'),
(995, '2026-10-03 00:00:00', '111111111', '[\"17.3708936\",\"42.5025104\"]', NULL, 1, '2026-10-03 17:37:40', '2026-10-03 17:37:40'),
(996, '2026-10-03 00:00:00', '65465465465', '[\"17.3723919\",\"42.5339512\"]', NULL, 1, '2026-10-03 17:44:15', '2026-10-03 17:44:15'),
(997, '2026-10-03 00:00:00', '654654213', '[\"27.3397081\",\"35.71291\"]', NULL, 1, '2026-10-03 19:45:58', '2026-10-03 19:45:58'),
(998, '2026-10-03 00:00:00', '654654213', '[\"27.3396321\",\"35.7130065\"]', NULL, 1, '2026-10-03 19:46:09', '2026-10-03 19:46:09'),
(999, '2026-10-03 00:00:00', '65465498798', '[\"21.47747747747748\",\"39.28655549421522\"]', NULL, 1, '2026-10-03 20:28:03', '2026-10-03 20:28:03'),
(1000, '2026-10-03 00:00:00', '666666666', '[\"24.5833384\",\"46.7898403\"]', NULL, 1, '2026-10-03 20:30:53', '2026-10-03 20:30:53'),
(1001, '2026-10-04 00:00:00', '111111111', '[\"17.3709003\",\"42.5024971\"]', NULL, 0, '2026-10-04 07:28:00', '2026-10-04 07:28:00'),
(1002, '2026-10-04 00:00:00', '65465465465', '[\"17.3727748\",\"42.5155567\"]', NULL, 0, '2026-10-04 07:34:10', '2026-10-04 07:34:10'),
(1003, '2026-10-04 00:00:00', '666666666', '[\"24.5832376\",\"46.7898272\"]', NULL, 0, '2026-10-04 07:51:11', '2026-10-04 07:51:11'),
(1004, '2026-10-04 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 0, '2026-10-04 07:53:03', '2026-10-04 07:53:03'),
(1005, '2026-10-04 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.23812821078864\"]', NULL, 0, '2026-10-04 08:27:19', '2026-10-04 08:27:19'),
(1006, '2026-10-04 00:00:00', '12345678', '[\"26.409822542361923\",\"50.00068184079577\"]', NULL, 0, '2026-10-04 08:40:16', '2026-10-04 08:40:16'),
(1007, '2026-10-04 00:00:00', '333333333', '[\"26.38571545518686\",\"50.09573645470847\"]', NULL, 0, '2026-10-04 08:59:06', '2026-10-04 08:59:06'),
(1008, '2026-10-04 00:00:00', '65465465465', '[\"17.3727636\",\"42.5302728\"]', NULL, 1, '2026-10-04 17:10:23', '2026-10-04 17:10:23'),
(1009, '2026-10-04 00:00:00', '12345678', '[\"26.409822542361923\",\"50.00068184079577\"]', NULL, 1, '2026-10-04 18:44:29', '2026-10-04 18:44:29'),
(1010, '2026-10-04 00:00:00', '111111111', '[\"17.3709863\",\"42.5026875\"]', NULL, 0, '2026-10-04 18:45:35', '2026-10-04 18:45:35'),
(1011, '2026-10-04 00:00:00', '333333333', '[\"26.4008392174166\",\"50.08639677010638\"]', NULL, 1, '2026-10-04 19:09:51', '2026-10-04 19:09:51'),
(1012, '2026-10-04 00:00:00', '654654213', '[\"27.3394368\",\"35.7130875\"]', NULL, 1, '2026-10-04 20:12:45', '2026-10-04 20:12:45'),
(1013, '2026-10-04 00:00:00', '666666666', '[\"24.5833534\",\"46.789776\"]', NULL, 1, '2026-10-04 20:15:28', '2026-10-04 20:15:28'),
(1014, '2026-10-04 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 1, '2026-10-04 23:09:56', '2026-10-04 23:09:56'),
(1015, '2026-10-05 00:00:00', '222222222', '[\"26.390255632363218\",\"50.15046080217754\"]', NULL, 0, '2026-10-05 06:21:33', '2026-10-05 06:21:33'),
(1016, '2026-10-05 00:00:00', '333333333', '[\"26.418671345967194\",\"50.08041178560494\"]', NULL, 0, '2026-10-05 06:28:10', '2026-10-05 06:28:10'),
(1017, '2026-10-05 00:00:00', '111111111', '[\"17.3708865\",\"42.5024668\"]', NULL, 0, '2026-10-05 07:59:26', '2026-10-05 07:59:26'),
(1018, '2026-10-05 00:00:00', '65465465465', '[\"17.3712451\",\"42.5146369\"]', NULL, 0, '2026-10-05 08:22:09', '2026-10-05 08:22:09'),
(1019, '2026-10-05 00:00:00', '654654213', '[\"27.339521\",\"35.7130057\"]', NULL, 0, '2026-10-05 08:27:48', '2026-10-05 08:27:48'),
(1020, '2026-10-05 00:00:00', '12345678', '[\"26.40986152475237\",\"50.00070575057664\"]', NULL, 0, '2026-10-05 08:39:38', '2026-10-05 08:39:38'),
(1021, '2026-10-05 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 0, '2026-10-05 08:42:25', '2026-10-05 08:42:25'),
(1022, '2026-10-05 00:00:00', '666666666', '[\"24.5832886\",\"46.7897809\"]', NULL, 0, '2026-10-05 10:06:17', '2026-10-05 10:06:17'),
(1023, '2026-10-05 00:00:00', '65465465465', '[\"17.3707972\",\"42.5297224\"]', NULL, 1, '2026-10-05 17:22:09', '2026-10-05 17:22:09'),
(1024, '2026-10-05 00:00:00', '12345678', '[\"26.35840385452983\",\"50.038421159681754\"]', NULL, 1, '2026-10-05 17:35:38', '2026-10-05 17:35:38'),
(1025, '2026-10-05 00:00:00', '333333333', '[\"26.37754765558406\",\"50.12303212825055\"]', NULL, 1, '2026-10-05 18:06:39', '2026-10-05 18:06:39'),
(1026, '2026-10-05 00:00:00', '111111111', '[\"17.3708657\",\"42.5023774\"]', NULL, 0, '2026-10-05 18:22:38', '2026-10-05 18:22:38'),
(1027, '2026-10-05 00:00:00', '111111111', '[\"17.3708657\",\"42.5023774\"]', NULL, 0, '2026-10-05 18:23:09', '2026-10-05 18:23:09'),
(1028, '2026-10-05 00:00:00', '111111111', '[\"17.3708657\",\"42.5023774\"]', NULL, 1, '2026-10-05 18:24:24', '2026-10-05 18:24:24'),
(1029, '2026-10-05 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-10-05 18:49:25', '2026-10-05 18:49:25'),
(1030, '2026-10-05 00:00:00', '222222222', '[\"26.4241326475988\",\"50.01925290647281\"]', NULL, 0, '2026-10-05 20:39:03', '2026-10-05 20:39:03'),
(1031, '2026-10-05 00:00:00', '222222222', '[\"26.42409433039632\",\"50.019197967170584\"]', NULL, 1, '2026-10-05 20:39:12', '2026-10-05 20:39:12'),
(1032, '2026-10-05 00:00:00', '654654213', '[\"27.3399549\",\"35.7130035\"]', NULL, 1, '2026-10-05 22:46:29', '2026-10-05 22:46:29'),
(1033, '2026-10-05 00:00:00', '666666666', '[\"24.5833989\",\"46.7899059\"]', NULL, 1, '2026-10-05 22:49:08', '2026-10-05 22:49:08'),
(1034, '2026-10-06 00:00:00', '333333333', '[\"26.418721428300316\",\"50.080540167287985\"]', NULL, 0, '2026-10-06 05:58:09', '2026-10-06 05:58:09'),
(1035, '2026-10-06 00:00:00', '222222222', '[\"26.332905294604018\",\"50.03467249400815\"]', NULL, 0, '2026-10-06 06:08:27', '2026-10-06 06:08:27'),
(1036, '2026-10-06 00:00:00', '12345678', '[\"26.414659057734625\",\"50.004436672559365\"]', NULL, 0, '2026-10-06 07:12:52', '2026-10-06 07:12:52'),
(1037, '2026-10-06 00:00:00', '65465465465', '[\"17.3728727\",\"42.532112\"]', NULL, 0, '2026-10-06 07:39:07', '2026-10-06 07:39:07'),
(1038, '2026-10-06 00:00:00', '666666666', '[\"24.58337\",\"46.7896705\"]', NULL, 0, '2026-10-06 07:45:38', '2026-10-06 07:45:38'),
(1039, '2026-10-06 00:00:00', '111111111', '[\"17.3709686\",\"42.5026916\"]', NULL, 0, '2026-10-06 08:14:16', '2026-10-06 08:14:16'),
(1040, '2026-10-06 00:00:00', '654654213', '[\"27.3398062\",\"35.7125315\"]', NULL, 0, '2026-10-06 08:31:35', '2026-10-06 08:31:35'),
(1041, '2026-10-06 00:00:00', '654654213', '[\"27.3398894\",\"35.7128782\"]', NULL, 0, '2026-10-06 08:32:00', '2026-10-06 08:32:00'),
(1042, '2026-10-06 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-10-06 08:39:51', '2026-10-06 08:39:51'),
(1043, '2026-10-06 00:00:00', '65465465465', '[\"17.3714491\",\"42.5296597\"]', NULL, 1, '2026-10-06 17:14:32', '2026-10-06 17:14:32'),
(1044, '2026-10-06 00:00:00', '333333333', '[\"26.373228479536234\",\"50.12539783871774\"]', NULL, 1, '2026-10-06 18:15:14', '2026-10-06 18:15:14'),
(1045, '2026-10-06 00:00:00', '222222222', '[\"26.424085187227\",\"50.01921551959673\"]', NULL, 1, '2026-10-06 18:21:11', '2026-10-06 18:21:11'),
(1046, '2026-10-06 00:00:00', '111111111', '[\"17.3708813\",\"42.5025067\"]', NULL, 1, '2026-10-06 19:33:35', '2026-10-06 19:33:35'),
(1047, '2026-10-06 00:00:00', '654654213', '[\"27.3408801\",\"35.7132142\"]', NULL, 1, '2026-10-06 20:28:28', '2026-10-06 20:28:28'),
(1048, '2026-10-06 00:00:00', '666666666', '[\"24.5834159\",\"46.7896794\"]', NULL, 1, '2026-10-06 21:03:15', '2026-10-06 21:03:15'),
(1049, '2026-10-06 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 1, '2026-10-06 23:22:40', '2026-10-06 23:22:40'),
(1050, '2026-10-07 00:00:00', '12345678', '[\"25.405928573560203\",\"49.5919388285801\"]', NULL, 1, '2026-10-07 00:14:22', '2026-10-07 00:14:22'),
(1051, '2026-10-07 00:00:00', '65465465465', '[\"17.3727748\",\"42.5155567\"]', NULL, 0, '2026-10-07 07:31:53', '2026-10-07 07:31:53'),
(1052, '2026-10-07 00:00:00', '111111111', '[\"17.3709958\",\"42.5026482\"]', NULL, 0, '2026-10-07 07:57:46', '2026-10-07 07:57:46'),
(1053, '2026-10-07 00:00:00', '666666666', '[\"24.5834025\",\"46.7897569\"]', NULL, 0, '2026-10-07 08:02:32', '2026-10-07 08:02:32'),
(1054, '2026-10-07 00:00:00', '222222222', '[\"26.36437664951263\",\"50.209190301232866\"]', NULL, 0, '2026-10-07 08:35:59', '2026-10-07 08:35:59'),
(1055, '2026-10-07 00:00:00', '654654213', '[\"27.3398062\",\"35.7125315\"]', NULL, 0, '2026-10-07 08:39:24', '2026-10-07 08:39:24'),
(1056, '2026-10-07 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-10-07 08:45:30', '2026-10-07 08:45:30'),
(1057, '2026-10-07 00:00:00', '333333333', '[\"26.388557504349585\",\"50.15020992151371\"]', NULL, 0, '2026-10-07 09:01:04', '2026-10-07 09:01:04'),
(1058, '2026-10-07 00:00:00', '65465465465', '[\"17.3727748\",\"42.5155567\"]', NULL, 1, '2026-10-07 17:15:42', '2026-10-07 17:15:42'),
(1059, '2026-10-07 00:00:00', '333333333', '[\"26.366542522907668\",\"50.140707256757466\"]', NULL, 1, '2026-10-07 17:50:27', '2026-10-07 17:50:27'),
(1060, '2026-10-07 00:00:00', '111111111', '[\"17.3708781\",\"42.502434\"]', NULL, 1, '2026-10-07 18:49:29', '2026-10-07 18:49:29'),
(1061, '2026-10-07 00:00:00', '12345678', '[\"25.4058893663587\",\"49.59133468038617\"]', NULL, 1, '2026-10-07 19:05:40', '2026-10-07 19:05:40'),
(1062, '2026-10-07 00:00:00', '222222222', '[\"26.42391451271539\",\"50.01894500533868\"]', NULL, 1, '2026-10-07 20:04:40', '2026-10-07 20:04:40'),
(1063, '2026-10-07 00:00:00', '666666666', '[\"24.5833074\",\"46.7898363\"]', NULL, 1, '2026-10-07 20:31:55', '2026-10-07 20:31:55'),
(1064, '2026-10-07 00:00:00', '654654213', '[\"27.3393847\",\"35.7133086\"]', NULL, 1, '2026-10-07 21:48:50', '2026-10-07 21:48:50'),
(1065, '2026-10-08 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-10-08 00:00:36', '2026-10-08 00:00:36'),
(1066, '2026-10-08 00:00:00', '65465465465', '[\"17.3693554\",\"42.5275138\"]', NULL, 0, '2026-10-08 07:31:26', '2026-10-08 07:31:26'),
(1067, '2026-10-08 00:00:00', '111111111', '[\"17.370902\",\"42.5024947\"]', NULL, 0, '2026-10-08 07:35:18', '2026-10-08 07:35:18'),
(1068, '2026-10-08 00:00:00', '222222222', '[\"26.423875914865675\",\"50.018837727940564\"]', NULL, 0, '2026-10-08 07:40:46', '2026-10-08 07:40:46'),
(1069, '2026-10-08 00:00:00', '654654213', '[\"27.3394946\",\"35.7132541\"]', NULL, 0, '2026-10-08 07:43:05', '2026-10-08 07:43:05'),
(1070, '2026-10-08 00:00:00', '666666666', '[\"24.5833367\",\"46.7898472\"]', NULL, 0, '2026-10-08 07:45:53', '2026-10-08 07:45:53'),
(1071, '2026-10-08 00:00:00', '333333333', '[\"26.421751181023083\",\"50.07322943364303\"]', NULL, 1, '2026-10-08 08:26:34', '2026-10-08 08:26:34'),
(1072, '2026-10-08 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-10-08 08:59:18', '2026-10-08 08:59:18'),
(1073, '2026-10-08 00:00:00', '65465465465', '[\"17.3715037\",\"42.5305793\"]', NULL, 1, '2026-10-08 17:00:05', '2026-10-08 17:00:05'),
(1074, '2026-10-08 00:00:00', '12345678', '[\"25.40592877676215\",\"49.591939011437134\"]', NULL, 1, '2026-10-08 17:30:28', '2026-10-08 17:30:28'),
(1075, '2026-10-08 00:00:00', '333333333', '[\"26.43106900074528\",\"50.106107360492146\"]', NULL, 1, '2026-10-08 17:44:49', '2026-10-08 17:44:49'),
(1076, '2026-10-08 00:00:00', '222222222', '[\"26.415248191146574\",\"50.01256174219472\"]', NULL, 1, '2026-10-08 18:02:09', '2026-10-08 18:02:09'),
(1077, '2026-10-08 00:00:00', '666666666', '[\"24.583285\",\"46.7898633\"]', NULL, 1, '2026-10-08 20:23:30', '2026-10-08 20:23:30'),
(1078, '2026-10-09 00:00:00', '222222222', '[\"26.41756334259898\",\"50.0163284350074\"]', NULL, 0, '2026-10-09 11:22:13', '2026-10-09 11:22:13'),
(1079, '2026-10-09 00:00:00', '222222222', '[\"26.423904393229332\",\"50.01888479872423\"]', NULL, 1, '2026-10-09 18:03:23', '2026-10-09 18:03:23'),
(1080, '2026-10-10 00:00:00', '65465465465', '[\"17.3711823\",\"42.5302326\"]', NULL, 0, '2026-10-10 07:53:47', '2026-10-10 07:53:47'),
(1081, '2026-10-10 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 0, '2026-10-10 07:59:47', '2026-10-10 07:59:47'),
(1082, '2026-10-10 00:00:00', '111111111', '[\"17.3708872\",\"42.5025287\"]', NULL, 0, '2026-10-10 08:07:54', '2026-10-10 08:07:54'),
(1083, '2026-10-10 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-10-10 08:15:08', '2026-10-10 08:15:08'),
(1084, '2026-10-10 00:00:00', '666666666', '[\"24.5833278\",\"46.7899445\"]', NULL, 0, '2026-10-10 14:52:20', '2026-10-10 14:52:20'),
(1085, '2026-10-10 00:00:00', '111111111', '[\"16.8904303\",\"42.5563053\"]', NULL, 1, '2026-10-10 18:02:21', '2026-10-10 18:02:21'),
(1086, '2026-10-10 00:00:00', '654654213', '[\"27.339569\",\"35.7128802\"]', NULL, 1, '2026-10-10 20:24:02', '2026-10-10 20:24:02'),
(1087, '2026-10-10 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 1, '2026-10-10 20:30:56', '2026-10-10 20:30:56'),
(1088, '2026-10-10 00:00:00', '666666666', '[\"24.5962095\",\"46.7799967\"]', NULL, 1, '2026-10-10 21:10:34', '2026-10-10 21:10:34'),
(1089, '2026-10-11 00:00:00', '666666666', '[\"24.5981101\",\"46.7855342\"]', NULL, 0, '2026-10-11 04:55:18', '2026-10-11 04:55:18'),
(1090, '2026-10-11 00:00:00', '222222222', '[\"26.423816678646244\",\"50.01899575641491\"]', NULL, 0, '2026-10-11 06:59:53', '2026-10-11 06:59:53'),
(1091, '2026-10-11 00:00:00', '65465465465', '[\"17.3711818\",\"42.5302374\"]', NULL, 0, '2026-10-11 08:03:36', '2026-10-11 08:03:36'),
(1092, '2026-10-11 00:00:00', '111111111', '[\"17.3710311\",\"42.5024347\"]', NULL, 0, '2026-10-11 08:07:02', '2026-10-11 08:07:02'),
(1093, '2026-10-11 00:00:00', '654654213', '[\"27.3398062\",\"35.7125315\"]', NULL, 0, '2026-10-11 08:29:56', '2026-10-11 08:29:56'),
(1094, '2026-10-11 00:00:00', '12345678', '[\"26.409872793883874\",\"50.000651928826734\"]', NULL, 0, '2026-10-11 08:31:24', '2026-10-11 08:31:24'),
(1095, '2026-10-11 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-10-11 08:38:26', '2026-10-11 08:38:26'),
(1096, '2026-10-11 00:00:00', '333333333', '[\"26.379459095455044\",\"50.14905362238603\"]', NULL, 0, '2026-10-11 09:10:43', '2026-10-11 09:10:43'),
(1097, '2026-10-11 00:00:00', '333333333', '[\"26.34207215083762\",\"50.079182702467435\"]', NULL, 1, '2026-10-11 19:12:30', '2026-10-11 19:12:30'),
(1098, '2026-10-11 00:00:00', '111111111', '[\"17.3709996\",\"42.5025997\"]', NULL, 1, '2026-10-11 19:30:36', '2026-10-11 19:30:36'),
(1099, '2026-10-11 00:00:00', '222222222', '[\"26.424085585123866\",\"50.01900301106122\"]', NULL, 1, '2026-10-11 20:14:11', '2026-10-11 20:14:11'),
(1100, '2026-10-11 00:00:00', '666666666', '[\"24.5833275\",\"46.7901208\"]', NULL, 1, '2026-10-11 20:22:07', '2026-10-11 20:22:07'),
(1101, '2026-10-11 00:00:00', '12345678', '[\"26.409885323574038\",\"50.000684440718715\"]', NULL, 1, '2026-10-11 20:27:46', '2026-10-11 20:27:46'),
(1102, '2026-10-11 00:00:00', '654654213', '[\"27.3394746\",\"35.7130724\"]', NULL, 1, '2026-10-11 20:30:07', '2026-10-11 20:30:07'),
(1103, '2026-10-11 00:00:00', '65465465465', '[\"17.3725229\",\"42.5297317\"]', NULL, 1, '2026-10-11 22:17:42', '2026-10-11 22:17:42'),
(1104, '2026-10-12 00:00:00', '222222222', '[\"26.24855534110285\",\"50.00173549119343\"]', NULL, 0, '2026-10-12 07:31:32', '2026-10-12 07:31:32'),
(1105, '2026-10-12 00:00:00', '65465465465', '[\"17.3711697\",\"42.5303119\"]', NULL, 0, '2026-10-12 07:36:58', '2026-10-12 07:36:58'),
(1106, '2026-10-12 00:00:00', '666666666', '[\"24.5831811\",\"46.7900357\"]', NULL, 0, '2026-10-12 08:11:20', '2026-10-12 08:11:20'),
(1107, '2026-10-12 00:00:00', '111111111', '[\"17.3707236\",\"42.5025771\"]', NULL, 0, '2026-10-12 08:14:06', '2026-10-12 08:14:06'),
(1108, '2026-10-12 00:00:00', '12345678', '[\"26.414209655869996\",\"50.00457074998181\"]', NULL, 0, '2026-10-12 08:15:39', '2026-10-12 08:15:39'),
(1109, '2026-10-12 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 0, '2026-10-12 08:20:26', '2026-10-12 08:20:26'),
(1110, '2026-10-12 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 0, '2026-10-12 08:55:23', '2026-10-12 08:55:23'),
(1111, '2026-10-12 00:00:00', '654654213', '[\"27.3397994\",\"35.7131039\"]', NULL, 0, '2026-10-12 08:56:16', '2026-10-12 08:56:16'),
(1112, '2026-10-12 00:00:00', '333333333', '[\"26.39082465349429\",\"50.092503422865825\"]', NULL, 0, '2026-10-12 09:18:04', '2026-10-12 09:18:04'),
(1113, '2026-10-12 00:00:00', '65465465465', '[\"17.3711919\",\"42.5301682\"]', NULL, 1, '2026-10-12 17:16:53', '2026-10-12 17:16:53'),
(1114, '2026-10-12 00:00:00', '12345678', '[\"26.40987150848292\",\"50.00070513824013\"]', NULL, 1, '2026-10-12 17:31:56', '2026-10-12 17:31:56'),
(1115, '2026-10-12 00:00:00', '333333333', '[\"26.40716009441592\",\"50.178226327544145\"]', NULL, 1, '2026-10-12 18:31:15', '2026-10-12 18:31:15'),
(1116, '2026-10-12 00:00:00', '111111111', '[\"17.3708479\",\"42.5024558\"]', NULL, 1, '2026-10-12 18:33:41', '2026-10-12 18:33:41'),
(1117, '2026-10-12 00:00:00', '666666666', '[\"24.5832584\",\"46.7900391\"]', NULL, 1, '2026-10-12 19:48:19', '2026-10-12 19:48:19'),
(1118, '2026-10-12 00:00:00', '654654213', '[\"27.3395059\",\"35.7135555\"]', NULL, 1, '2026-10-12 21:38:16', '2026-10-12 21:38:16'),
(1119, '2026-10-12 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 1, '2026-10-12 22:03:16', '2026-10-12 22:03:16'),
(1120, '2026-10-12 00:00:00', '222222222', '[\"26.423958853038897\",\"50.01901452673338\"]', NULL, 0, '2026-10-12 22:05:11', '2026-10-12 22:05:11'),
(1121, '2026-10-12 00:00:00', '222222222', '[\"26.423991366303504\",\"50.018983675965266\"]', NULL, 1, '2026-10-12 22:05:20', '2026-10-12 22:05:20'),
(1122, '2026-10-13 00:00:00', '111111111', '[\"17.3708603\",\"42.5025549\"]', NULL, 0, '2026-10-13 07:22:29', '2026-10-13 07:22:29'),
(1123, '2026-10-13 00:00:00', '654654213', '[\"27.3398062\",\"35.7125315\"]', NULL, 0, '2026-10-13 07:49:40', '2026-10-13 07:49:40'),
(1124, '2026-10-13 00:00:00', '65465465465', '[\"17.3711719\",\"42.5303192\"]', NULL, 0, '2026-10-13 07:53:45', '2026-10-13 07:53:45'),
(1125, '2026-10-13 00:00:00', '666666666', '[\"24.5831866\",\"46.7900432\"]', NULL, 0, '2026-10-13 08:11:06', '2026-10-13 08:11:06'),
(1126, '2026-10-13 00:00:00', '12345678', '[\"26.409822542361923\",\"50.00068184079577\"]', NULL, 0, '2026-10-13 08:31:20', '2026-10-13 08:31:20'),
(1127, '2026-10-13 00:00:00', '222222222', '[\"26.364592604348573\",\"50.20933205943293\"]', NULL, 0, '2026-10-13 08:36:57', '2026-10-13 08:36:57'),
(1128, '2026-10-13 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-10-13 08:45:44', '2026-10-13 08:45:44'),
(1129, '2026-10-13 00:00:00', '333333333', '[\"26.394194990987142\",\"50.09053753012001\"]', NULL, 0, '2026-10-13 09:16:21', '2026-10-13 09:16:21'),
(1130, '2026-10-13 00:00:00', '65465465465', '[\"17.3711704\",\"42.5303151\"]', NULL, 1, '2026-10-13 17:05:22', '2026-10-13 17:05:22'),
(1131, '2026-10-13 00:00:00', '333333333', '[\"26.344061008332215\",\"50.093214841750154\"]', NULL, 1, '2026-10-13 17:51:49', '2026-10-13 17:51:49'),
(1132, '2026-10-13 00:00:00', '111111111', '[\"17.3707924\",\"42.5025758\"]', NULL, 1, '2026-10-13 20:15:24', '2026-10-13 20:15:24'),
(1133, '2026-10-13 00:00:00', '666666666', '[\"24.5832354\",\"46.7900263\"]', NULL, 1, '2026-10-13 21:07:05', '2026-10-13 21:07:05'),
(1134, '2026-10-13 00:00:00', '654654213', '[\"27.3391874\",\"35.7135555\"]', NULL, 1, '2026-10-13 21:16:49', '2026-10-13 21:16:49'),
(1135, '2026-10-13 00:00:00', '654654213', '[\"27.339546\",\"35.7130662\"]', NULL, 1, '2026-10-13 21:17:02', '2026-10-13 21:17:02'),
(1136, '2026-10-13 00:00:00', '222222222', '[\"26.424094403400336\",\"50.01924344559773\"]', NULL, 1, '2026-10-13 22:08:12', '2026-10-13 22:08:12'),
(1137, '2026-10-14 00:00:00', '65465465465', '[\"17.3711824\",\"42.5302369\"]', NULL, 0, '2026-10-14 07:33:18', '2026-10-14 07:33:18'),
(1138, '2026-10-14 00:00:00', '222222222', '[\"26.425459104724577\",\"50.02418167470403\"]', NULL, 0, '2026-10-14 08:00:44', '2026-10-14 08:00:44'),
(1139, '2026-10-14 00:00:00', '654654213', '[\"27.3398062\",\"35.7125315\"]', NULL, 0, '2026-10-14 08:10:55', '2026-10-14 08:10:55'),
(1140, '2026-10-14 00:00:00', '12345678', '[\"26.40989103881451\",\"50.00070222160838\"]', NULL, 0, '2026-10-14 08:31:59', '2026-10-14 08:31:59'),
(1141, '2026-10-14 00:00:00', '333333333', '[\"26.371854918267875\",\"50.14825760893369\"]', NULL, 0, '2026-10-14 09:15:15', '2026-10-14 09:15:15'),
(1142, '2026-10-14 00:00:00', '666666666', '[\"24.5834094\",\"46.7901648\"]', NULL, 0, '2026-10-14 10:00:14', '2026-10-14 10:00:14'),
(1143, '2026-10-14 00:00:00', '65465498798', '[\"21.56756756756757\",\"39.17530240180157\"]', NULL, 0, '2026-10-14 10:17:16', '2026-10-14 10:17:16'),
(1144, '2026-10-14 00:00:00', '65465465465', '[\"17.3711912\",\"42.5301682\"]', NULL, 1, '2026-10-14 16:38:26', '2026-10-14 16:38:26'),
(1145, '2026-10-14 00:00:00', '12345678', '[\"26.40989967693561\",\"50.00071821674532\"]', NULL, 1, '2026-10-14 17:30:51', '2026-10-14 17:30:51'),
(1146, '2026-10-14 00:00:00', '111111111', '[\"17.3708731\",\"42.5025432\"]', NULL, 1, '2026-10-14 17:55:42', '2026-10-14 17:55:42'),
(1147, '2026-10-14 00:00:00', '666666666', '[\"24.5836543\",\"46.7903486\"]', NULL, 1, '2026-10-14 19:08:22', '2026-10-14 19:08:22'),
(1148, '2026-10-14 00:00:00', '333333333', '[\"26.378507589208482\",\"50.19627001633997\"]', NULL, 1, '2026-10-14 19:13:33', '2026-10-14 19:13:33'),
(1149, '2026-10-14 00:00:00', '65465498798', '[\"21.47747747747748\",\"39.28655549421522\"]', NULL, 1, '2026-10-14 19:26:57', '2026-10-14 19:26:57'),
(1150, '2026-10-14 00:00:00', '222222222', '[\"26.42415699589506\",\"50.0323522451606\"]', NULL, 1, '2026-10-14 20:20:50', '2026-10-14 20:20:50'),
(1151, '2026-10-14 00:00:00', '654654213', '[\"27.3394058\",\"35.7138969\"]', NULL, 1, '2026-10-14 20:36:47', '2026-10-14 20:36:47'),
(1152, '2026-10-15 00:00:00', '222222222', '[\"26.42668578785409\",\"50.02331060606645\"]', NULL, 0, '2026-10-15 07:38:22', '2026-10-15 07:38:22'),
(1153, '2026-10-15 00:00:00', '666666666', '[\"24.5831802\",\"46.7900392\"]', NULL, 0, '2026-10-15 08:04:08', '2026-10-15 08:04:08'),
(1154, '2026-10-15 00:00:00', '111111111', '[\"17.3709603\",\"42.5024452\"]', NULL, 0, '2026-10-15 08:10:39', '2026-10-15 08:10:39'),
(1155, '2026-10-15 00:00:00', '654654213', '[\"27.3413169\",\"35.7138969\"]', NULL, 0, '2026-10-15 08:15:06', '2026-10-15 08:15:06'),
(1156, '2026-10-15 00:00:00', '65465465465', '[\"17.3711712\",\"42.530318\"]', NULL, 0, '2026-10-15 08:16:06', '2026-10-15 08:16:06'),
(1157, '2026-10-15 00:00:00', '12345678', '[\"26.409822542361923\",\"50.00068184079577\"]', NULL, 0, '2026-10-15 08:38:40', '2026-10-15 08:38:40'),
(1158, '2026-10-15 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-10-15 08:42:07', '2026-10-15 08:42:07'),
(1159, '2026-10-15 00:00:00', '333333333', '[\"26.401017052717705\",\"50.08621352268455\"]', NULL, 0, '2026-10-15 09:25:10', '2026-10-15 09:25:10'),
(1160, '2026-10-15 00:00:00', '65465465465', '[\"17.3711755\",\"42.5302455\"]', NULL, 1, '2026-10-15 17:16:17', '2026-10-15 17:16:17'),
(1161, '2026-10-15 00:00:00', '111111111', '[\"17.3708897\",\"42.5025419\"]', NULL, 1, '2026-10-15 18:01:24', '2026-10-15 18:01:24'),
(1162, '2026-10-15 00:00:00', '666666666', '[\"24.5832141\",\"46.7899936\"]', NULL, 1, '2026-10-15 18:38:33', '2026-10-15 18:38:33'),
(1163, '2026-10-15 00:00:00', '333333333', '[\"26.431154066671112\",\"50.106174423208245\"]', NULL, 1, '2026-10-15 18:38:44', '2026-10-15 18:38:44'),
(1164, '2026-10-15 00:00:00', '222222222', '[\"26.42373024605616\",\"50.0189184460484\"]', NULL, 1, '2026-10-15 18:39:20', '2026-10-15 18:39:20'),
(1165, '2026-10-15 00:00:00', '12345678', '[\"25.406007182641645\",\"49.59197299336308\"]', NULL, 1, '2026-10-15 19:05:09', '2026-10-15 19:05:09'),
(1166, '2026-10-15 00:00:00', '654654213', '[\"27.3395505\",\"35.7130306\"]', NULL, 1, '2026-10-15 22:00:00', '2026-10-15 22:00:00'),
(1167, '2026-10-15 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 1, '2026-10-15 22:50:06', '2026-10-15 22:50:06'),
(1168, '2026-10-16 00:00:00', '654654213', '[\"27.3397061\",\"35.7128728\"]', NULL, 0, '2026-10-16 14:24:35', '2026-10-16 14:24:35'),
(1169, '2026-10-16 00:00:00', '654654213', '[\"27.3396415\",\"35.7130842\"]', NULL, 1, '2026-10-16 19:18:36', '2026-10-16 19:18:36'),
(1170, '2026-10-17 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-10-17 07:26:39', '2026-10-17 07:26:39'),
(1171, '2026-10-17 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 0, '2026-10-17 07:28:30', '2026-10-17 07:28:30'),
(1172, '2026-10-17 00:00:00', '111111111', '[\"17.3709147\",\"42.5025768\"]', NULL, 0, '2026-10-17 08:08:29', '2026-10-17 08:08:29'),
(1173, '2026-10-17 00:00:00', '65465465465', '[\"17.3711766\",\"42.5302306\"]', NULL, 0, '2026-10-17 08:30:45', '2026-10-17 08:30:45'),
(1174, '2026-10-17 00:00:00', '666666666', '[\"24.5832511\",\"46.7900037\"]', NULL, 0, '2026-10-17 11:25:06', '2026-10-17 11:25:06'),
(1175, '2026-10-17 00:00:00', '65465465465', '[\"17.3709319\",\"42.5300669\"]', NULL, 1, '2026-10-17 17:40:18', '2026-10-17 17:40:18');
INSERT INTO `attendances` (`id`, `date`, `employee_id`, `location`, `picture`, `type`, `created_at`, `updated_at`) VALUES
(1176, '2026-10-17 00:00:00', '111111111', '[\"17.4343999\",\"42.5270574\"]', NULL, 1, '2026-10-17 17:52:14', '2026-10-17 17:52:14'),
(1177, '2026-10-17 00:00:00', '654654213', '[\"27.338887\",\"35.7145796\"]', NULL, 1, '2026-10-17 20:51:51', '2026-10-17 20:51:51'),
(1178, '2026-10-17 00:00:00', '666666666', '[\"24.5937131\",\"46.7761224\"]', NULL, 1, '2026-10-17 21:12:46', '2026-10-17 21:12:46'),
(1179, '2026-10-18 00:00:00', '666666666', '[\"24.5832399\",\"46.7899967\"]', NULL, 0, '2026-10-18 07:22:20', '2026-10-18 07:22:20'),
(1180, '2026-10-18 00:00:00', '111111111', '[\"17.3708799\",\"42.5025296\"]', NULL, 0, '2026-10-18 07:56:35', '2026-10-18 07:56:35'),
(1181, '2026-10-18 00:00:00', '65465465465', '[\"17.3711773\",\"42.5302264\"]', NULL, 0, '2026-10-18 08:11:33', '2026-10-18 08:11:33'),
(1182, '2026-10-18 00:00:00', '654654213', '[\"27.3397061\",\"35.7128728\"]', NULL, 0, '2026-10-18 08:11:34', '2026-10-18 08:11:34'),
(1183, '2026-10-18 00:00:00', '222222222', '[\"26.365063788756682\",\"50.20952860673355\"]', NULL, 0, '2026-10-18 08:15:50', '2026-10-18 08:15:50'),
(1184, '2026-10-18 00:00:00', '12345678', '[\"26.409822542361923\",\"50.00068184079577\"]', NULL, 0, '2026-10-18 08:31:02', '2026-10-18 08:31:02'),
(1185, '2026-10-18 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 0, '2026-10-18 08:35:24', '2026-10-18 08:35:24'),
(1186, '2026-10-18 00:00:00', '333333333', '[\"26.373235636480864\",\"50.14863052934424\"]', NULL, 0, '2026-10-18 09:12:20', '2026-10-18 09:12:20'),
(1187, '2026-10-18 00:00:00', '65465465465', '[\"17.3736485\",\"42.5302728\"]', NULL, 1, '2026-10-18 17:04:27', '2026-10-18 17:04:27'),
(1188, '2026-10-18 00:00:00', '111111111', '[\"17.3708489\",\"42.5024291\"]', NULL, 1, '2026-10-18 17:29:04', '2026-10-18 17:29:04'),
(1189, '2026-10-18 00:00:00', '222222222', '[\"26.364967947538943\",\"50.20925739209956\"]', NULL, 1, '2026-10-18 17:35:58', '2026-10-18 17:35:58'),
(1190, '2026-10-18 00:00:00', '333333333', '[\"26.403201797797795\",\"50.11436758222031\"]', NULL, 1, '2026-10-18 18:02:16', '2026-10-18 18:02:16'),
(1191, '2026-10-18 00:00:00', '654654213', '[\"27.3379315\",\"35.7145796\"]', NULL, 1, '2026-10-18 20:31:25', '2026-10-18 20:31:25'),
(1192, '2026-10-18 00:00:00', '666666666', '[\"24.5966916\",\"46.7800861\"]', NULL, 1, '2026-10-18 21:43:20', '2026-10-18 21:43:20'),
(1193, '2026-10-18 00:00:00', '12345678', '[\"26.40989454676162\",\"50.00074899288123\"]', NULL, 1, '2026-10-18 22:32:45', '2026-10-18 22:32:45'),
(1194, '2026-10-19 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 1, '2026-10-19 02:34:36', '2026-10-19 02:34:36'),
(1195, '2026-10-19 00:00:00', '65465465465', '[\"17.3711789\",\"42.5302411\"]', NULL, 0, '2026-10-19 07:02:43', '2026-10-19 07:02:43'),
(1196, '2026-10-19 00:00:00', '222222222', '[\"26.42411397020865\",\"50.019155393924144\"]', NULL, 0, '2026-10-19 07:18:31', '2026-10-19 07:18:31'),
(1197, '2026-10-19 00:00:00', '654654213', '[\"27.3397061\",\"35.7128728\"]', NULL, 0, '2026-10-19 07:45:24', '2026-10-19 07:45:24'),
(1198, '2026-10-19 00:00:00', '666666666', '[\"24.5832515\",\"46.7899898\"]', NULL, 0, '2026-10-19 08:01:22', '2026-10-19 08:01:22'),
(1199, '2026-10-19 00:00:00', '111111111', '[\"17.370871\",\"42.5025284\"]', NULL, 0, '2026-10-19 08:04:33', '2026-10-19 08:04:33'),
(1200, '2026-10-19 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-10-19 08:37:32', '2026-10-19 08:37:32'),
(1201, '2026-10-19 00:00:00', '333333333', '[\"26.4186923327032\",\"50.08046936876057\"]', NULL, 0, '2026-10-19 08:53:37', '2026-10-19 08:53:37'),
(1202, '2026-10-19 00:00:00', '65465465465', '[\"17.3732188\",\"42.5296597\"]', NULL, 1, '2026-10-19 17:32:29', '2026-10-19 17:32:29'),
(1203, '2026-10-19 00:00:00', '222222222', '[\"26.424071573738328\",\"50.01905458396975\"]', NULL, 1, '2026-10-19 17:33:50', '2026-10-19 17:33:50'),
(1204, '2026-10-19 00:00:00', '111111111', '[\"17.3707851\",\"42.5023966\"]', NULL, 1, '2026-10-19 19:30:27', '2026-10-19 19:30:27'),
(1205, '2026-10-19 00:00:00', '666666666', '[\"24.5836413\",\"46.790202\"]', NULL, 1, '2026-10-19 19:58:32', '2026-10-19 19:58:32'),
(1206, '2026-10-19 00:00:00', '654654213', '[\"27.3391401\",\"35.7130381\"]', NULL, 1, '2026-10-19 20:19:33', '2026-10-19 20:19:33'),
(1207, '2026-10-19 00:00:00', '333333333', '[\"26.354090048142726\",\"50.02819727439367\"]', NULL, 1, '2026-10-19 20:29:11', '2026-10-19 20:29:11'),
(1208, '2026-10-19 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 1, '2026-10-19 23:50:46', '2026-10-19 23:50:46'),
(1209, '2026-10-20 00:00:00', '65465465465', '[\"17.3711777\",\"42.5302281\"]', NULL, 0, '2026-10-20 07:21:30', '2026-10-20 07:21:30'),
(1210, '2026-10-20 00:00:00', '111111111', '[\"17.3708968\",\"42.5025411\"]', NULL, 0, '2026-10-20 07:22:08', '2026-10-20 07:22:08'),
(1211, '2026-10-20 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 0, '2026-10-20 07:41:53', '2026-10-20 07:41:53'),
(1212, '2026-10-20 00:00:00', '666666666', '[\"24.5832424\",\"46.7900331\"]', NULL, 1, '2026-10-20 08:00:57', '2026-10-20 08:00:57'),
(1213, '2026-10-20 00:00:00', '666666666', '[\"24.5832424\",\"46.7900331\"]', NULL, 0, '2026-10-20 08:01:03', '2026-10-20 08:01:03'),
(1214, '2026-10-20 00:00:00', '222222222', '[\"26.3649295774728\",\"50.20938051867252\"]', NULL, 0, '2026-10-20 08:19:09', '2026-10-20 08:19:09'),
(1215, '2026-10-20 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 0, '2026-10-20 08:22:49', '2026-10-20 08:22:49'),
(1216, '2026-10-20 00:00:00', '12345678', '[\"26.409901266960794\",\"50.00077220342046\"]', NULL, 0, '2026-10-20 08:38:04', '2026-10-20 08:38:04'),
(1217, '2026-10-20 00:00:00', '333333333', '[\"26.401819755874605\",\"50.08571217752017\"]', NULL, 0, '2026-10-20 09:13:33', '2026-10-20 09:13:33'),
(1218, '2026-10-20 00:00:00', '65465465465', '[\"17.3711886\",\"42.5302293\"]', NULL, 1, '2026-10-20 17:28:10', '2026-10-20 17:28:10'),
(1219, '2026-10-20 00:00:00', '333333333', '[\"26.394461013299665\",\"50.0781581787924\"]', NULL, 1, '2026-10-20 18:31:25', '2026-10-20 18:31:25'),
(1220, '2026-10-20 00:00:00', '111111111', '[\"17.3707888\",\"42.5023751\"]', NULL, 1, '2026-10-20 19:04:20', '2026-10-20 19:04:20'),
(1221, '2026-10-20 00:00:00', '654654213', '[\"27.3397025\",\"35.713086\"]', NULL, 1, '2026-10-20 20:06:59', '2026-10-20 20:06:59'),
(1222, '2026-10-20 00:00:00', '666666666', '[\"24.5961818\",\"46.7801201\"]', NULL, 1, '2026-10-20 20:20:41', '2026-10-20 20:20:41'),
(1223, '2026-10-20 00:00:00', '12345678', '[\"26.40988664118606\",\"50.00072661228403\"]', NULL, 1, '2026-10-20 21:50:32', '2026-10-20 21:50:32'),
(1224, '2026-10-21 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-10-21 00:53:03', '2026-10-21 00:53:03'),
(1225, '2026-10-21 00:00:00', '65465465465', '[\"17.3711873\",\"42.5302412\"]', NULL, 0, '2026-10-21 07:31:39', '2026-10-21 07:31:39'),
(1226, '2026-10-21 00:00:00', '222222222', '[\"26.424041989867092\",\"50.019181026867706\"]', NULL, 0, '2026-10-21 07:33:39', '2026-10-21 07:33:39'),
(1227, '2026-10-21 00:00:00', '666666666', '[\"24.583219\",\"46.7899735\"]', NULL, 0, '2026-10-21 07:46:13', '2026-10-21 07:46:13'),
(1228, '2026-10-21 00:00:00', '654654213', '[\"27.3408801\",\"35.7132142\"]', NULL, 0, '2026-10-21 07:47:54', '2026-10-21 07:47:54'),
(1229, '2026-10-21 00:00:00', '111111111', '[\"17.3708658\",\"42.5025491\"]', NULL, 0, '2026-10-21 08:06:46', '2026-10-21 08:06:46'),
(1230, '2026-10-21 00:00:00', '12345678', '[\"26.409822542361923\",\"50.00068184079577\"]', NULL, 0, '2026-10-21 08:30:32', '2026-10-21 08:30:32'),
(1231, '2026-10-21 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 0, '2026-10-21 09:16:28', '2026-10-21 09:16:28'),
(1232, '2026-10-21 00:00:00', '333333333', '[\"26.37595960159791\",\"50.1030830303059\"]', NULL, 0, '2026-10-21 09:27:17', '2026-10-21 09:27:17'),
(1233, '2026-10-21 00:00:00', '65465465465', '[\"17.3711759\",\"42.5302878\"]', NULL, 1, '2026-10-21 17:09:09', '2026-10-21 17:09:09'),
(1234, '2026-10-21 00:00:00', '12345678', '[\"26.310217919130046\",\"50.04807321516019\"]', NULL, 0, '2026-10-21 17:31:49', '2026-10-21 17:31:49'),
(1235, '2026-10-21 00:00:00', '12345678', '[\"26.30919308189163\",\"50.04659815798364\"]', NULL, 1, '2026-10-21 17:31:57', '2026-10-21 17:31:57'),
(1236, '2026-10-21 00:00:00', '111111111', '[\"17.3742896\",\"42.5278204\"]', NULL, 1, '2026-10-21 19:30:40', '2026-10-21 19:30:40'),
(1237, '2026-10-21 00:00:00', '666666666', '[\"24.5956972\",\"46.7803937\"]', NULL, 1, '2026-10-21 20:39:02', '2026-10-21 20:39:02'),
(1238, '2026-10-21 00:00:00', '333333333', '[\"26.25711432224035\",\"50.192462322209984\"]', NULL, 1, '2026-10-21 20:43:57', '2026-10-21 20:43:57'),
(1239, '2026-10-21 00:00:00', '222222222', '[\"26.412348611691627\",\"50.013715321814814\"]', NULL, 1, '2026-10-21 21:41:40', '2026-10-21 21:41:40'),
(1240, '2026-10-22 00:00:00', '666666666', '[\"24.583223\",\"46.7900073\"]', NULL, 0, '2026-10-22 00:04:53', '2026-10-22 00:04:53'),
(1241, '2026-10-22 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 1, '2026-10-22 00:05:25', '2026-10-22 00:05:25'),
(1242, '2026-10-22 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-10-22 07:26:12', '2026-10-22 07:26:12'),
(1243, '2026-10-22 00:00:00', '111111111', '[\"17.3709275\",\"42.5024753\"]', NULL, 0, '2026-10-22 07:32:01', '2026-10-22 07:32:01'),
(1244, '2026-10-22 00:00:00', '222222222', '[\"26.42396093687281\",\"50.0188709190536\"]', NULL, 0, '2026-10-22 07:54:51', '2026-10-22 07:54:51'),
(1245, '2026-10-22 00:00:00', '65465465465', '[\"17.3711886\",\"42.5302258\"]', NULL, 0, '2026-10-22 08:00:43', '2026-10-22 08:00:43'),
(1246, '2026-10-22 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 0, '2026-10-22 08:01:15', '2026-10-22 08:01:15'),
(1247, '2026-10-22 00:00:00', '12345678', '[\"26.40986975935137\",\"50.00068556970719\"]', NULL, 0, '2026-10-22 08:31:34', '2026-10-22 08:31:34'),
(1248, '2026-10-22 00:00:00', '333333333', '[\"26.39037208529775\",\"50.15584366046129\"]', NULL, 0, '2026-10-22 08:46:23', '2026-10-22 08:46:23'),
(1249, '2026-10-22 00:00:00', '12345678', '[\"25.40601516603184\",\"49.592028479774115\"]', NULL, 1, '2026-10-22 17:30:58', '2026-10-22 17:30:58'),
(1250, '2026-10-22 00:00:00', '333333333', '[\"26.42526048875541\",\"50.14457246110132\"]', NULL, 1, '2026-10-22 18:29:39', '2026-10-22 18:29:39'),
(1251, '2026-10-22 00:00:00', '111111111', '[\"17.3748247\",\"42.5102123\"]', NULL, 1, '2026-10-22 19:08:09', '2026-10-22 19:08:09'),
(1252, '2026-10-22 00:00:00', '222222222', '[\"26.424164478087476\",\"50.019163723288365\"]', NULL, 1, '2026-10-22 19:23:43', '2026-10-22 19:23:43'),
(1253, '2026-10-22 00:00:00', '666666666', '[\"21.3076877\",\"40.4319749\"]', NULL, 1, '2026-10-22 20:27:03', '2026-10-22 20:27:03'),
(1254, '2026-10-22 00:00:00', '654654213', '[\"27.3394015\",\"35.7133164\"]', NULL, 1, '2026-10-22 20:40:19', '2026-10-22 20:40:19'),
(1255, '2026-10-22 00:00:00', '65465498798', '[\"21.36936936936937\",\"40.244238796584476\"]', NULL, 1, '2026-10-22 23:44:56', '2026-10-22 23:44:56'),
(1256, '2026-10-23 00:00:00', '666666666', '[\"21.4446203\",\"40.501122\"]', NULL, 0, '2026-10-23 11:08:32', '2026-10-23 11:08:32'),
(1257, '2026-10-23 00:00:00', '666666666', '[\"24.5836584\",\"46.7901062\"]', NULL, 1, '2026-10-23 22:44:42', '2026-10-23 22:44:42'),
(1258, '2026-10-24 00:00:00', '65465465465', '[\"17.3711881\",\"42.5302297\"]', NULL, 0, '2026-10-24 07:11:20', '2026-10-24 07:11:20'),
(1259, '2026-10-24 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 1, '2026-10-24 08:28:37', '2026-10-24 08:28:37'),
(1260, '2026-10-24 00:00:00', '654654213', '[\"27.3394369\",\"35.7132708\"]', NULL, 0, '2026-10-24 08:28:54', '2026-10-24 08:28:54'),
(1261, '2026-10-24 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-10-24 08:58:40', '2026-10-24 08:58:40'),
(1262, '2026-10-24 00:00:00', '111111111', '[\"17.3709553\",\"42.5022946\"]', NULL, 0, '2026-10-24 09:08:27', '2026-10-24 09:08:27'),
(1263, '2026-10-24 00:00:00', '666666666', '[\"24.5831878\",\"46.7899821\"]', NULL, 0, '2026-10-24 14:54:09', '2026-10-24 14:54:09'),
(1264, '2026-10-24 00:00:00', '111111111', '[\"17.37092\",\"42.5023756\"]', NULL, 1, '2026-10-24 16:21:35', '2026-10-24 16:21:35'),
(1265, '2026-10-24 00:00:00', '65465465465', '[\"17.3711864\",\"42.5302299\"]', NULL, 1, '2026-10-24 17:11:39', '2026-10-24 17:11:39'),
(1266, '2026-10-24 00:00:00', '65465498798', '[\"21.47747747747748\",\"39.30591801540508\"]', NULL, 1, '2026-10-24 20:26:37', '2026-10-24 20:26:37'),
(1267, '2026-10-24 00:00:00', '654654213', '[\"27.3401811\",\"35.7129603\"]', NULL, 1, '2026-10-24 20:28:52', '2026-10-24 20:28:52'),
(1268, '2026-10-24 00:00:00', '666666666', '[\"24.7008891\",\"46.8281397\"]', NULL, 1, '2026-10-24 22:39:50', '2026-10-24 22:39:50'),
(1269, '2026-10-25 00:00:00', '65465465465', '[\"17.3711883\",\"42.5302265\"]', NULL, 0, '2026-10-25 07:17:10', '2026-10-25 07:17:10'),
(1270, '2026-10-25 00:00:00', '111111111', '[\"17.3708715\",\"42.5025178\"]', NULL, 0, '2026-10-25 07:56:31', '2026-10-25 07:56:31'),
(1271, '2026-10-25 00:00:00', '654654213', '[\"27.3397453\",\"35.7129832\"]', NULL, 0, '2026-10-25 08:04:39', '2026-10-25 08:04:39'),
(1272, '2026-10-25 00:00:00', '666666666', '[\"24.5832069\",\"46.7900065\"]', NULL, 0, '2026-10-25 08:08:50', '2026-10-25 08:08:50'),
(1273, '2026-10-25 00:00:00', '222222222', '[\"26.364990844527874\",\"50.20922879388359\"]', NULL, 0, '2026-10-25 08:21:55', '2026-10-25 08:21:55'),
(1274, '2026-10-25 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-10-25 08:26:19', '2026-10-25 08:26:19'),
(1275, '2026-10-25 00:00:00', '12345678', '[\"26.409822542361923\",\"50.00068184079577\"]', NULL, 0, '2026-10-25 08:39:43', '2026-10-25 08:39:43'),
(1276, '2026-10-25 00:00:00', '333333333', '[\"26.364929249881683\",\"50.20936546581853\"]', NULL, 0, '2026-10-25 09:44:26', '2026-10-25 09:44:26'),
(1277, '2026-10-25 00:00:00', '111111111', '[\"17.1494563\",\"42.626862\"]', NULL, 1, '2026-10-25 16:32:35', '2026-10-25 16:32:35'),
(1278, '2026-10-25 00:00:00', '65465465465', '[\"17.3716707\",\"42.5367098\"]', NULL, 1, '2026-10-25 16:56:06', '2026-10-25 16:56:06'),
(1279, '2026-10-25 00:00:00', '12345678', '[\"26.409843746104524\",\"50.000564309723565\"]', NULL, 1, '2026-10-25 18:34:47', '2026-10-25 18:34:47'),
(1280, '2026-10-25 00:00:00', '654654213', '[\"27.3389817\",\"35.7130143\"]', NULL, 1, '2026-10-25 19:23:05', '2026-10-25 19:23:05'),
(1281, '2026-10-25 00:00:00', '666666666', '[\"24.5831805\",\"46.7899866\"]', NULL, 1, '2026-10-25 20:03:28', '2026-10-25 20:03:28'),
(1282, '2026-10-25 00:00:00', '333333333', '[\"26.268728569869413\",\"50.216238779330865\"]', NULL, 1, '2026-10-25 21:59:32', '2026-10-25 21:59:32'),
(1283, '2026-10-25 00:00:00', '222222222', '[\"26.424085087734124\",\"50.01925371732512\"]', NULL, 1, '2026-10-25 22:17:31', '2026-10-25 22:17:31'),
(1284, '2026-10-26 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-10-26 01:39:01', '2026-10-26 01:39:01'),
(1285, '2026-10-26 00:00:00', '65465465465', '[\"17.3711887\",\"42.530229\"]', NULL, 0, '2026-10-26 07:06:15', '2026-10-26 07:06:15'),
(1286, '2026-10-26 00:00:00', '666666666', '[\"24.5836776\",\"46.7906579\"]', NULL, 0, '2026-10-26 07:16:08', '2026-10-26 07:16:08'),
(1287, '2026-10-26 00:00:00', '654654213', '[\"27.3393994\",\"35.7133173\"]', NULL, 0, '2026-10-26 07:41:25', '2026-10-26 07:41:25'),
(1288, '2026-10-26 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 0, '2026-10-26 07:48:57', '2026-10-26 07:48:57'),
(1289, '2026-10-26 00:00:00', '12345678', '[\"26.295618490889254\",\"50.0350941367136\"]', NULL, 0, '2026-10-26 07:50:11', '2026-10-26 07:50:11'),
(1290, '2026-10-26 00:00:00', '12345678', '[\"26.295618490889254\",\"50.0350941367136\"]', NULL, 0, '2026-10-26 07:50:20', '2026-10-26 07:50:20'),
(1291, '2026-10-26 00:00:00', '222222222', '[\"26.36482537331473\",\"50.209407539484445\"]', NULL, 0, '2026-10-26 08:23:31', '2026-10-26 08:23:31'),
(1292, '2026-10-26 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 0, '2026-10-26 09:21:28', '2026-10-26 09:21:28'),
(1293, '2026-10-26 00:00:00', '333333333', '[\"26.364939562436444\",\"50.20934052260439\"]', NULL, 0, '2026-10-26 10:23:25', '2026-10-26 10:23:25'),
(1294, '2026-10-26 00:00:00', '65465465465', '[\"17.3711762\",\"42.530292\"]', NULL, 1, '2026-10-26 17:20:02', '2026-10-26 17:20:02'),
(1295, '2026-10-26 00:00:00', '12345678', '[\"26.409866542476326\",\"50.00066075847344\"]', NULL, 1, '2026-10-26 17:35:17', '2026-10-26 17:35:17'),
(1296, '2026-10-26 00:00:00', '666666666', '[\"24.5832188\",\"46.7900295\"]', NULL, 1, '2026-10-26 17:51:05', '2026-10-26 17:51:05'),
(1297, '2026-10-26 00:00:00', '654654213', '[\"27.3394017\",\"35.713318\"]', NULL, 1, '2026-10-26 20:02:29', '2026-10-26 20:02:29'),
(1298, '2026-10-26 00:00:00', '333333333', '[\"26.40210885661048\",\"50.12027582770642\"]', NULL, 1, '2026-10-26 21:02:14', '2026-10-26 21:02:14'),
(1299, '2026-10-26 00:00:00', '222222222', '[\"26.42406408890565\",\"50.019178443017246\"]', NULL, 1, '2026-10-26 23:29:19', '2026-10-26 23:29:19'),
(1300, '2026-10-26 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 1, '2026-10-26 23:45:14', '2026-10-26 23:45:14'),
(1301, '2026-10-27 00:00:00', '222222222', '[\"26.318903424553906\",\"50.215857195677636\"]', NULL, 0, '2026-10-27 06:46:48', '2026-10-27 06:46:48'),
(1302, '2026-10-27 00:00:00', '333333333', '[\"26.3188921396039\",\"50.215913018062146\"]', NULL, 0, '2026-10-27 06:46:49', '2026-10-27 06:46:49'),
(1303, '2026-10-27 00:00:00', '111111111', '[\"17.3708387\",\"42.502466\"]', NULL, 0, '2026-10-27 07:24:53', '2026-10-27 07:24:53'),
(1304, '2026-10-27 00:00:00', '65465465465', '[\"17.3711881\",\"42.5302297\"]', NULL, 0, '2026-10-27 07:55:33', '2026-10-27 07:55:33'),
(1305, '2026-10-27 00:00:00', '666666666', '[\"24.5832184\",\"46.7899977\"]', NULL, 0, '2026-10-27 08:07:10', '2026-10-27 08:07:10'),
(1306, '2026-10-27 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 0, '2026-10-27 08:11:42', '2026-10-27 08:11:42'),
(1307, '2026-10-27 00:00:00', '12345678', '[\"26.409863652670843\",\"50.00067103142317\"]', NULL, 0, '2026-10-27 08:27:45', '2026-10-27 08:27:45'),
(1308, '2026-10-27 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-10-27 09:47:50', '2026-10-27 09:47:50'),
(1309, '2026-10-27 00:00:00', '65465465465', '[\"17.3711728\",\"42.5302851\"]', NULL, 1, '2026-10-27 17:21:30', '2026-10-27 17:21:30'),
(1310, '2026-10-27 00:00:00', '333333333', '[\"26.402121961350037\",\"50.12028437713605\"]', NULL, 1, '2026-10-27 18:47:00', '2026-10-27 18:47:00'),
(1311, '2026-10-27 00:00:00', '666666666', '[\"24.5832659\",\"46.7900742\"]', NULL, 1, '2026-10-27 18:53:42', '2026-10-27 18:53:42'),
(1312, '2026-10-27 00:00:00', '222222222', '[\"26.424082967856005\",\"50.0192502643863\"]', NULL, 1, '2026-10-27 19:00:57', '2026-10-27 19:00:57'),
(1313, '2026-10-27 00:00:00', '111111111', '[\"17.3747332\",\"42.5104907\"]', NULL, 1, '2026-10-27 19:32:25', '2026-10-27 19:32:25'),
(1314, '2026-10-27 00:00:00', '654654213', '[\"27.3395859\",\"35.7129883\"]', NULL, 1, '2026-10-27 20:11:32', '2026-10-27 20:11:32'),
(1315, '2026-10-27 00:00:00', '12345678', '[\"25.400261182620202\",\"49.59352347429206\"]', NULL, 1, '2026-10-27 21:57:35', '2026-10-27 21:57:35'),
(1316, '2026-10-28 00:00:00', '222222222', '[\"26.417843240735813\",\"50.01101070044319\"]', NULL, 0, '2026-10-28 05:45:02', '2026-10-28 05:45:02'),
(1317, '2026-10-28 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-10-28 05:52:47', '2026-10-28 05:52:47'),
(1318, '2026-10-28 00:00:00', '333333333', '[\"26.318882329419953\",\"50.215907524205214\"]', NULL, 0, '2026-10-28 06:53:52', '2026-10-28 06:53:52'),
(1319, '2026-10-28 00:00:00', '65465465465', '[\"17.3711879\",\"42.5302457\"]', NULL, 0, '2026-10-28 07:22:54', '2026-10-28 07:22:54'),
(1320, '2026-10-28 00:00:00', '111111111', '[\"17.3708264\",\"42.5020478\"]', NULL, 0, '2026-10-28 07:45:20', '2026-10-28 07:45:20'),
(1321, '2026-10-28 00:00:00', '65465465465', '[\"17.3711888\",\"42.5302274\"]', NULL, 0, '2026-10-28 08:03:30', '2026-10-28 08:03:30'),
(1322, '2026-10-28 00:00:00', '12345678', '[\"25.399836747787393\",\"49.5935783942586\"]', NULL, 0, '2026-10-28 08:15:44', '2026-10-28 08:15:44'),
(1323, '2026-10-28 00:00:00', '654654213', '[\"27.3394011\",\"35.7133184\"]', NULL, 0, '2026-10-28 08:32:00', '2026-10-28 08:32:00'),
(1324, '2026-10-28 00:00:00', '666666666', '[\"24.5923018\",\"46.775606\"]', NULL, 0, '2026-10-28 09:16:01', '2026-10-28 09:16:01'),
(1325, '2026-10-28 00:00:00', '65465465465', '[\"17.3711881\",\"42.530228\"]', NULL, 1, '2026-10-28 17:34:15', '2026-10-28 17:34:15'),
(1326, '2026-10-28 00:00:00', '666666666', '[\"24.5961306\",\"46.7802028\"]', NULL, 1, '2026-10-28 18:34:30', '2026-10-28 18:34:30'),
(1327, '2026-10-28 00:00:00', '666666666', '[\"24.5961744\",\"46.7801929\"]', NULL, 0, '2026-10-28 18:36:06', '2026-10-28 18:36:06'),
(1328, '2026-10-28 00:00:00', '111111111', '[\"17.370556\",\"42.5031505\"]', NULL, 1, '2026-10-28 18:59:03', '2026-10-28 18:59:03'),
(1329, '2026-10-28 00:00:00', '222222222', '[\"26.424080050639173\",\"50.01924816585342\"]', NULL, 1, '2026-10-28 19:36:22', '2026-10-28 19:36:22'),
(1330, '2026-10-28 00:00:00', '654654213', '[\"27.33969\",\"35.7129608\"]', NULL, 1, '2026-10-28 19:59:33', '2026-10-28 19:59:33'),
(1331, '2026-10-28 00:00:00', '333333333', '[\"26.418515288690696\",\"50.08061384030304\"]', NULL, 1, '2026-10-28 20:08:16', '2026-10-28 20:08:16'),
(1332, '2026-10-28 00:00:00', '12345678', '[\"26.421899680580022\",\"50.003207914899754\"]', NULL, 1, '2026-10-28 20:46:06', '2026-10-28 20:46:06'),
(1333, '2026-10-28 00:00:00', '65465498798', '[\"21.47747747747748\",\"39.30591801540508\"]', NULL, 1, '2026-10-28 20:46:46', '2026-10-28 20:46:46'),
(1334, '2026-10-28 00:00:00', '666666666', '[\"24.5961689\",\"46.7801127\"]', NULL, 1, '2026-10-28 22:29:04', '2026-10-28 22:29:04'),
(1335, '2026-10-29 00:00:00', '222222222', '[\"26.42589449673405\",\"50.0179685412782\"]', NULL, 0, '2026-10-29 06:00:24', '2026-10-29 06:00:24'),
(1336, '2026-10-29 00:00:00', '333333333', '[\"26.31903118710946\",\"50.21571306372156\"]', NULL, 0, '2026-10-29 07:10:34', '2026-10-29 07:10:34'),
(1337, '2026-10-29 00:00:00', '654654213', '[\"27.3396618\",\"35.7131244\"]', NULL, 0, '2026-10-29 07:59:49', '2026-10-29 07:59:49'),
(1338, '2026-10-29 00:00:00', '666666666', '[\"24.8223267\",\"46.630175\"]', NULL, 0, '2026-10-29 08:38:52', '2026-10-29 08:38:52'),
(1339, '2026-10-29 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-10-29 08:59:20', '2026-10-29 08:59:20'),
(1340, '2026-10-29 00:00:00', '12345678', '[\"27.16532992013708\",\"49.56245212320284\"]', NULL, 0, '2026-10-29 10:35:49', '2026-10-29 10:35:49'),
(1341, '2026-10-29 00:00:00', '65465465465', '[\"17.3711854\",\"42.5302348\"]', NULL, 1, '2026-10-29 17:18:43', '2026-10-29 17:18:43'),
(1342, '2026-10-29 00:00:00', '666666666', '[\"24.5961907\",\"46.7800277\"]', NULL, 1, '2026-10-29 18:11:17', '2026-10-29 18:11:17'),
(1343, '2026-10-29 00:00:00', '333333333', '[\"26.423149899537023\",\"50.07255451974159\"]', NULL, 1, '2026-10-29 18:53:45', '2026-10-29 18:53:45'),
(1344, '2026-10-29 00:00:00', '222222222', '[\"26.41070325211874\",\"50.06917499554094\"]', NULL, 1, '2026-10-29 18:56:40', '2026-10-29 18:56:40'),
(1345, '2026-10-29 00:00:00', '654654213', '[\"27.339397\",\"35.7132925\"]', NULL, 1, '2026-10-29 18:57:23', '2026-10-29 18:57:23'),
(1346, '2026-10-29 00:00:00', '654654213', '[\"27.3393917\",\"35.713316\"]', NULL, 0, '2026-10-29 23:54:20', '2026-10-29 23:54:20'),
(1347, '2026-10-29 00:00:00', '65465498798', '[\"21.47747747747748\",\"39.30591801540508\"]', NULL, 1, '2026-10-29 23:55:16', '2026-10-29 23:55:16'),
(1348, '2026-10-30 00:00:00', '654654213', '[\"27.3400246\",\"35.7128728\"]', NULL, 1, '2026-10-30 02:34:23', '2026-10-30 02:34:23'),
(1349, '2026-10-30 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-10-30 09:11:18', '2026-10-30 09:11:18'),
(1350, '2026-10-30 00:00:00', '666666666', '[\"24.5832041\",\"46.7900179\"]', NULL, 0, '2026-10-30 10:01:13', '2026-10-30 10:01:13'),
(1351, '2026-10-30 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 1, '2026-10-30 13:03:57', '2026-10-30 13:03:57'),
(1352, '2026-10-30 00:00:00', '666666666', '[\"21.3076616\",\"40.4319418\"]', NULL, 1, '2026-10-30 23:23:28', '2026-10-30 23:23:28'),
(1353, '2026-10-31 00:00:00', '666666666', '[\"21.3076681\",\"40.4319329\"]', NULL, 0, '2026-10-31 05:57:55', '2026-10-31 05:57:55'),
(1354, '2026-10-31 00:00:00', '111111111', '[\"17.3708948\",\"42.5024382\"]', NULL, 0, '2026-10-31 08:36:35', '2026-10-31 08:36:35'),
(1355, '2026-10-31 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-10-31 08:53:26', '2026-10-31 08:53:26'),
(1356, '2026-10-31 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 0, '2026-10-31 08:56:41', '2026-10-31 08:56:41'),
(1357, '2026-10-31 00:00:00', '65465465465', '[\"17.3711884\",\"42.5302304\"]', NULL, 0, '2026-10-31 10:18:43', '2026-10-31 10:18:43'),
(1358, '2026-10-31 00:00:00', '111111111', '[\"17.371302\",\"42.5023055\"]', NULL, 1, '2026-10-31 17:19:48', '2026-10-31 17:19:48'),
(1359, '2026-10-31 00:00:00', '65465465465', '[\"17.3711857\",\"42.5302236\"]', NULL, 1, '2026-10-31 18:28:15', '2026-10-31 18:28:15'),
(1360, '2026-10-31 00:00:00', '654654213', '[\"27.3400246\",\"35.7128728\"]', NULL, 1, '2026-10-31 19:44:51', '2026-10-31 19:44:51'),
(1361, '2026-10-31 00:00:00', '666666666', '[\"21.3076701\",\"40.4319026\"]', NULL, 1, '2026-10-31 20:15:00', '2026-10-31 20:15:00'),
(1362, '2026-10-31 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.27684368016287\"]', NULL, 1, '2026-10-31 21:27:33', '2026-10-31 21:27:33'),
(1363, '2026-11-01 00:00:00', '666666666', '[\"21.3076574\",\"40.4318644\"]', NULL, 0, '2026-11-01 06:01:20', '2026-11-01 06:01:20'),
(1364, '2026-11-01 00:00:00', '222222222', '[\"26.36241408416656\",\"50.19652880866524\"]', NULL, 0, '2026-11-01 06:27:34', '2026-11-01 06:27:34'),
(1365, '2026-11-01 00:00:00', '65465465465', '[\"17.3711848\",\"42.5302339\"]', NULL, 0, '2026-11-01 07:06:05', '2026-11-01 07:06:05'),
(1366, '2026-11-01 00:00:00', '333333333', '[\"26.363357200175397\",\"50.14670174390478\"]', NULL, 0, '2026-11-01 07:10:05', '2026-11-01 07:10:05'),
(1367, '2026-11-01 00:00:00', '111111111', '[\"17.370817\",\"42.5025513\"]', NULL, 0, '2026-11-01 07:46:52', '2026-11-01 07:46:52'),
(1368, '2026-11-01 00:00:00', '654654213', '[\"27.3408619\",\"35.7121901\"]', NULL, 0, '2026-11-01 08:11:55', '2026-11-01 08:11:55'),
(1369, '2026-11-01 00:00:00', '654654213', '[\"27.339554\",\"35.7129335\"]', NULL, 0, '2026-11-01 08:12:10', '2026-11-01 08:12:10'),
(1370, '2026-11-01 00:00:00', '12345678', '[\"26.409818519356413\",\"50.0006739632963\"]', NULL, 0, '2026-11-01 08:15:48', '2026-11-01 08:15:48'),
(1371, '2026-11-01 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-11-01 08:47:59', '2026-11-01 08:47:59'),
(1372, '2026-11-01 00:00:00', '111111111', '[\"17.3721182\",\"42.504517\"]', NULL, 1, '2026-11-01 17:32:40', '2026-11-01 17:32:40'),
(1373, '2026-11-01 00:00:00', '65465465465', '[\"17.3711853\",\"42.530235\"]', NULL, 1, '2026-11-01 17:51:19', '2026-11-01 17:51:19'),
(1374, '2026-11-01 00:00:00', '333333333', '[\"26.34274304999188\",\"50.10665382216303\"]', NULL, 1, '2026-11-01 18:38:29', '2026-11-01 18:38:29'),
(1375, '2026-11-01 00:00:00', '222222222', '[\"26.424055625314857\",\"50.01911344751282\"]', NULL, 0, '2026-11-01 19:09:03', '2026-11-01 19:09:03'),
(1376, '2026-11-01 00:00:00', '222222222', '[\"26.42411796083013\",\"50.0191486322861\"]', NULL, 1, '2026-11-01 19:09:51', '2026-11-01 19:09:51'),
(1377, '2026-11-01 00:00:00', '666666666', '[\"21.3076165\",\"40.4320025\"]', NULL, 1, '2026-11-01 20:04:00', '2026-11-01 20:04:00'),
(1378, '2026-11-01 00:00:00', '654654213', '[\"27.3394433\",\"35.7133029\"]', NULL, 1, '2026-11-01 20:51:18', '2026-11-01 20:51:18'),
(1379, '2026-11-01 00:00:00', '65465465465', '[\"17.3716954\",\"42.5407744\"]', NULL, 0, '2026-11-01 20:58:06', '2026-11-01 20:58:06'),
(1380, '2026-11-01 00:00:00', '65465465465', '[\"17.3228889\",\"42.4066493\"]', NULL, 1, '2026-11-01 22:54:59', '2026-11-01 22:54:59'),
(1381, '2026-11-02 00:00:00', '666666666', '[\"21.3075555\",\"40.4320856\"]', NULL, 0, '2026-11-02 06:22:11', '2026-11-02 06:22:11'),
(1382, '2026-11-02 00:00:00', '222222222', '[\"26.217199694633905\",\"50.193785006549795\"]', NULL, 0, '2026-11-02 06:45:05', '2026-11-02 06:45:05'),
(1383, '2026-11-02 00:00:00', '333333333', '[\"26.41293132261559\",\"50.078654920995696\"]', NULL, 0, '2026-11-02 06:55:15', '2026-11-02 06:55:15'),
(1384, '2026-11-02 00:00:00', '65465465465', '[\"17.3711855\",\"42.5302375\"]', NULL, 0, '2026-11-02 07:06:22', '2026-11-02 07:06:22'),
(1385, '2026-11-02 00:00:00', '654654213', '[\"27.3394819\",\"35.7130291\"]', NULL, 0, '2026-11-02 07:41:29', '2026-11-02 07:41:29'),
(1386, '2026-11-02 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.23812821078864\"]', NULL, 0, '2026-11-02 08:27:01', '2026-11-02 08:27:01'),
(1387, '2026-11-02 00:00:00', '12345678', '[\"26.409911731039358\",\"50.00077364942745\"]', NULL, 0, '2026-11-02 08:31:10', '2026-11-02 08:31:10'),
(1388, '2026-11-02 00:00:00', '65465465465', '[\"17.3711855\",\"42.5302379\"]', NULL, 1, '2026-11-02 17:51:29', '2026-11-02 17:51:29'),
(1389, '2026-11-02 00:00:00', '333333333', '[\"26.418708329108036\",\"50.080409297470794\"]', NULL, 1, '2026-11-02 18:25:59', '2026-11-02 18:25:59'),
(1390, '2026-11-02 00:00:00', '12345678', '[\"26.40981108562671\",\"50.00065411051226\"]', NULL, 1, '2026-11-02 18:54:32', '2026-11-02 18:54:32'),
(1391, '2026-11-02 00:00:00', '666666666', '[\"21.3551769\",\"40.4495639\"]', NULL, 1, '2026-11-02 21:12:57', '2026-11-02 21:12:57'),
(1392, '2026-11-02 00:00:00', '654654213', '[\"27.3395295\",\"35.7129877\"]', NULL, 1, '2026-11-02 21:30:32', '2026-11-02 21:30:32'),
(1393, '2026-11-02 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-11-02 23:02:25', '2026-11-02 23:02:25'),
(1394, '2026-11-03 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 0, '2026-11-03 04:26:42', '2026-11-03 04:26:42'),
(1395, '2026-11-03 00:00:00', '666666666', '[\"21.3707846\",\"40.4623932\"]', NULL, 0, '2026-11-03 06:00:17', '2026-11-03 06:00:17'),
(1396, '2026-11-03 00:00:00', '65465465465', '[\"17.371195\",\"42.5302761\"]', NULL, 0, '2026-11-03 07:26:31', '2026-11-03 07:26:31'),
(1397, '2026-11-03 00:00:00', '222222222', '[\"26.365004708622045\",\"50.209184994916136\"]', NULL, 0, '2026-11-03 08:09:01', '2026-11-03 08:09:01'),
(1398, '2026-11-03 00:00:00', '12345678', '[\"26.40982059783373\",\"50.000676339793564\"]', NULL, 0, '2026-11-03 08:30:57', '2026-11-03 08:30:57'),
(1399, '2026-11-03 00:00:00', '654654213', '[\"27.3400246\",\"35.7128728\"]', NULL, 0, '2026-11-03 08:35:28', '2026-11-03 08:35:28'),
(1400, '2026-11-03 00:00:00', '333333333', '[\"26.36498740904408\",\"50.20924651103128\"]', NULL, 0, '2026-11-03 08:41:10', '2026-11-03 08:41:10'),
(1401, '2026-11-03 00:00:00', '222222222', '[\"26.424079839189687\",\"50.019171470997264\"]', NULL, 1, '2026-11-03 17:40:50', '2026-11-03 17:40:50'),
(1402, '2026-11-03 00:00:00', '333333333', '[\"26.369183187692766\",\"50.20314563496314\"]', NULL, 1, '2026-11-03 19:04:54', '2026-11-03 19:04:54'),
(1403, '2026-11-03 00:00:00', '65465465465', '[\"17.371369\",\"42.5299662\"]', NULL, 1, '2026-11-03 19:47:44', '2026-11-03 19:47:44'),
(1404, '2026-11-03 00:00:00', '12345678', '[\"25.40599630985725\",\"49.59197785961729\"]', NULL, 1, '2026-11-03 21:15:39', '2026-11-03 21:15:39'),
(1405, '2026-11-03 00:00:00', '654654213', '[\"27.3393952\",\"35.7133079\"]', NULL, 1, '2026-11-03 22:22:03', '2026-11-03 22:22:03'),
(1406, '2026-11-03 00:00:00', '666666666', '[\"24.583162\",\"46.7899553\"]', NULL, 1, '2026-11-03 22:54:14', '2026-11-03 22:54:14'),
(1407, '2026-11-03 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 1, '2026-11-03 23:15:56', '2026-11-03 23:15:56'),
(1408, '2026-11-04 00:00:00', '65465465465', '[\"17.3711849\",\"42.5302344\"]', NULL, 0, '2026-11-04 07:31:28', '2026-11-04 07:31:28'),
(1409, '2026-11-04 00:00:00', '222222222', '[\"26.440335622222992\",\"50.06468853402903\"]', NULL, 0, '2026-11-04 07:43:39', '2026-11-04 07:43:39'),
(1410, '2026-11-04 00:00:00', '654654213', '[\"27.3395376\",\"35.7129832\"]', NULL, 0, '2026-11-04 07:58:52', '2026-11-04 07:58:52'),
(1411, '2026-11-04 00:00:00', '12345678', '[\"25.405991830197046\",\"49.591984617454735\"]', NULL, 0, '2026-11-04 08:33:04', '2026-11-04 08:33:04'),
(1412, '2026-11-04 00:00:00', '333333333', '[\"26.37316377202629\",\"50.148723264193535\"]', NULL, 0, '2026-11-04 08:48:51', '2026-11-04 08:48:51'),
(1413, '2026-11-04 00:00:00', '666666666', '[\"24.5832687\",\"46.7900603\"]', NULL, 0, '2026-11-04 08:49:29', '2026-11-04 08:49:29'),
(1414, '2026-11-04 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 0, '2026-11-04 09:03:37', '2026-11-04 09:03:37'),
(1415, '2026-11-04 00:00:00', '65465465465', '[\"17.3711841\",\"42.5302362\"]', NULL, 1, '2026-11-04 17:34:40', '2026-11-04 17:34:40'),
(1416, '2026-11-04 00:00:00', '333333333', '[\"26.42293001083298\",\"50.085514296493784\"]', NULL, 1, '2026-11-04 19:14:11', '2026-11-04 19:14:11'),
(1417, '2026-11-04 00:00:00', '12345678', '[\"25.371058249472192\",\"49.56542002902126\"]', NULL, 1, '2026-11-04 19:20:55', '2026-11-04 19:20:55'),
(1418, '2026-11-04 00:00:00', '222222222', '[\"26.413678076067207\",\"49.9976139606954\"]', NULL, 1, '2026-11-04 19:51:54', '2026-11-04 19:51:54'),
(1419, '2026-11-04 00:00:00', '666666666', '[\"24.5831692\",\"46.7899554\"]', NULL, 1, '2026-11-04 20:08:01', '2026-11-04 20:08:01'),
(1420, '2026-11-04 00:00:00', '654654213', '[\"27.3400246\",\"35.7128728\"]', NULL, 1, '2026-11-04 22:52:45', '2026-11-04 22:52:45'),
(1421, '2026-11-04 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 1, '2026-11-04 23:55:43', '2026-11-04 23:55:43'),
(1422, '2026-11-05 00:00:00', '666666666', '[\"24.5848325\",\"46.7839313\"]', NULL, 0, '2026-11-05 06:43:40', '2026-11-05 06:43:40'),
(1423, '2026-11-05 00:00:00', '222222222', '[\"26.424049422237363\",\"50.019164559843105\"]', NULL, 0, '2026-11-05 06:55:56', '2026-11-05 06:55:56'),
(1424, '2026-11-05 00:00:00', '65465465465', '[\"17.3715037\",\"42.5305793\"]', NULL, 0, '2026-11-05 07:26:42', '2026-11-05 07:26:42'),
(1425, '2026-11-05 00:00:00', '654654213', '[\"27.3397175\",\"35.712814\"]', NULL, 0, '2026-11-05 07:44:20', '2026-11-05 07:44:20'),
(1426, '2026-11-05 00:00:00', '333333333', '[\"26.426905944905027\",\"50.07013525554175\"]', NULL, 0, '2026-11-05 08:17:19', '2026-11-05 08:17:19'),
(1427, '2026-11-05 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-11-05 08:27:07', '2026-11-05 08:27:07'),
(1428, '2026-11-05 00:00:00', '12345678', '[\"26.40984819108656\",\"50.000564453735976\"]', NULL, 0, '2026-11-05 08:31:51', '2026-11-05 08:31:51'),
(1429, '2026-11-05 00:00:00', '12345678', '[\"25.405955303970863\",\"49.59196293222705\"]', NULL, 1, '2026-11-05 17:37:56', '2026-11-05 17:37:56'),
(1430, '2026-11-05 00:00:00', '333333333', '[\"26.368621771054837\",\"50.20350007286944\"]', NULL, 1, '2026-11-05 17:42:51', '2026-11-05 17:42:51'),
(1431, '2026-11-05 00:00:00', '65465465465', '[\"17.3708452\",\"42.5301033\"]', NULL, 1, '2026-11-05 17:57:59', '2026-11-05 17:57:59'),
(1432, '2026-11-05 00:00:00', '222222222', '[\"30.778084170686732\",\"41.37074679506085\"]', NULL, 1, '2026-11-05 19:32:38', '2026-11-05 19:32:38'),
(1433, '2026-11-05 00:00:00', '222222222', '[\"30.778084170686732\",\"41.37074679506085\"]', NULL, 0, '2026-11-05 19:32:51', '2026-11-05 19:32:51'),
(1434, '2026-11-05 00:00:00', '654654213', '[\"27.3400246\",\"35.7128728\"]', NULL, 1, '2026-11-05 20:48:27', '2026-11-05 20:48:27'),
(1435, '2026-11-05 00:00:00', '666666666', '[\"24.5832082\",\"46.7899857\"]', NULL, 1, '2026-11-05 22:10:38', '2026-11-05 22:10:38'),
(1436, '2026-11-05 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 1, '2026-11-05 22:34:07', '2026-11-05 22:34:07'),
(1437, '2026-11-06 00:00:00', '666666666', '[\"24.719577\",\"46.7592516\"]', NULL, 0, '2026-11-06 00:12:46', '2026-11-06 00:12:46'),
(1438, '2026-11-06 00:00:00', '222222222', '[\"24.76542069065859\",\"46.66832545794465\"]', NULL, 1, '2026-11-06 20:07:51', '2026-11-06 20:07:51'),
(1439, '2026-11-06 00:00:00', '222222222', '[\"24.76542220659554\",\"46.66832766392658\"]', NULL, 0, '2026-11-06 20:07:59', '2026-11-06 20:07:59'),
(1440, '2026-11-07 00:00:00', '666666666', '[\"24.4736784\",\"39.5567925\"]', NULL, 1, '2026-11-07 01:00:18', '2026-11-07 01:00:18'),
(1441, '2026-11-07 00:00:00', '65465465465', '[\"17.3694901\",\"42.528127\"]', NULL, 0, '2026-11-07 07:25:25', '2026-11-07 07:25:25'),
(1442, '2026-11-07 00:00:00', '654654213', '[\"27.3394155\",\"35.7133107\"]', NULL, 0, '2026-11-07 07:59:18', '2026-11-07 07:59:18'),
(1443, '2026-11-07 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-11-07 08:15:30', '2026-11-07 08:15:30'),
(1444, '2026-11-07 00:00:00', '777777777', '[\"27.3394138\",\"35.7133097\"]', NULL, 0, '2026-11-07 09:06:57', '2026-11-07 09:06:57'),
(1445, '2026-11-07 00:00:00', '666666666', '[\"24.4735158\",\"39.5567373\"]', NULL, 0, '2026-11-07 13:00:45', '2026-11-07 13:00:45'),
(1446, '2026-11-07 00:00:00', '222222222', '[\"18.21443411154843\",\"42.50118638694885\"]', NULL, 1, '2026-11-07 15:07:46', '2026-11-07 15:07:46'),
(1447, '2026-11-07 00:00:00', '222222222', '[\"18.214422646610792\",\"42.501188539354644\"]', NULL, 0, '2026-11-07 15:08:20', '2026-11-07 15:08:20'),
(1448, '2026-11-07 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 1, '2026-11-07 23:42:58', '2026-11-07 23:42:58'),
(1449, '2026-11-07 00:00:00', '777777777', '[\"27.3397295\",\"35.7129642\"]', NULL, 1, '2026-11-07 23:50:35', '2026-11-07 23:50:35'),
(1450, '2026-11-07 00:00:00', '654654213', '[\"27.3400246\",\"35.7128728\"]', NULL, 1, '2026-11-07 23:50:37', '2026-11-07 23:50:37'),
(1451, '2026-11-07 00:00:00', '666666666', '[\"25.6374359\",\"45.7388772\"]', NULL, 1, '2026-11-07 23:59:34', '2026-11-07 23:59:34'),
(1452, '2026-11-08 00:00:00', '666666666', '[\"25.6374219\",\"45.7387001\"]', NULL, 0, '2026-11-08 00:00:41', '2026-11-08 00:00:41'),
(1453, '2026-11-08 00:00:00', '65465465465', '[\"17.3845414\",\"42.463711\"]', NULL, 1, '2026-11-08 00:26:30', '2026-11-08 00:26:30'),
(1454, '2026-11-08 00:00:00', '666666666', '[\"24.58367\",\"46.7901489\"]', NULL, 1, '2026-11-08 02:54:15', '2026-11-08 02:54:15'),
(1455, '2026-11-08 00:00:00', '65465465465', '[\"17.3732734\",\"42.5305793\"]', NULL, 0, '2026-11-08 08:01:15', '2026-11-08 08:01:15'),
(1456, '2026-11-08 00:00:00', '777777777', '[\"27.3395523\",\"35.7132329\"]', NULL, 0, '2026-11-08 08:06:40', '2026-11-08 08:06:40'),
(1457, '2026-11-08 00:00:00', '222222222', '[\"18.231483831867113\",\"42.51004774558393\"]', NULL, 1, '2026-11-08 08:15:09', '2026-11-08 08:15:09'),
(1458, '2026-11-08 00:00:00', '666666666', '[\"24.583228\",\"46.7899859\"]', NULL, 0, '2026-11-08 08:21:04', '2026-11-08 08:21:04'),
(1459, '2026-11-08 00:00:00', '654654213', '[\"27.3394137\",\"35.7133086\"]', NULL, 0, '2026-11-08 08:27:36', '2026-11-08 08:27:36'),
(1460, '2026-11-08 00:00:00', '222222222', '[\"18.209953159053242\",\"42.52018683202637\"]', NULL, 0, '2026-11-08 08:29:55', '2026-11-08 08:29:55'),
(1461, '2026-11-08 00:00:00', '12345678', '[\"26.409852903594995\",\"50.00056353880719\"]', NULL, 0, '2026-11-08 08:30:46', '2026-11-08 08:30:46'),
(1462, '2026-11-08 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-11-08 08:41:34', '2026-11-08 08:41:34'),
(1463, '2026-11-08 00:00:00', '333333333', '[\"26.3692648691692\",\"50.148450070280155\"]', NULL, 0, '2026-11-08 08:54:59', '2026-11-08 08:54:59'),
(1464, '2026-11-08 00:00:00', '666666666', '[\"24.5832532\",\"46.7900484\"]', NULL, 1, '2026-11-08 17:41:08', '2026-11-08 17:41:08'),
(1465, '2026-11-08 00:00:00', '12345678', '[\"26.409834851393693\",\"50.00058203387283\"]', NULL, 1, '2026-11-08 18:22:23', '2026-11-08 18:22:23'),
(1466, '2026-11-08 00:00:00', '333333333', '[\"26.166318339188372\",\"50.134729143040445\"]', NULL, 1, '2026-11-08 18:39:22', '2026-11-08 18:39:22'),
(1467, '2026-11-08 00:00:00', '777777777', '[\"27.3396215\",\"35.713095\"]', NULL, 1, '2026-11-08 19:24:38', '2026-11-08 19:24:38'),
(1468, '2026-11-08 00:00:00', '222222222', '[\"18.231572419758386\",\"42.50995624108389\"]', NULL, 1, '2026-11-08 20:08:40', '2026-11-08 20:08:40'),
(1469, '2026-11-08 00:00:00', '222222222', '[\"18.231572440684708\",\"42.50995618490844\"]', NULL, 0, '2026-11-08 20:08:45', '2026-11-08 20:08:45'),
(1470, '2026-11-08 00:00:00', '654654213', '[\"27.3394134\",\"35.7133122\"]', NULL, 1, '2026-11-08 20:23:57', '2026-11-08 20:23:57'),
(1471, '2026-11-08 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 1, '2026-11-08 23:19:10', '2026-11-08 23:19:10'),
(1472, '2026-11-08 00:00:00', '65465465465', '[\"16.9377014\",\"42.6141974\"]', NULL, 1, '2026-11-08 23:20:47', '2026-11-08 23:20:47'),
(1473, '2026-11-09 00:00:00', '65465465465', '[\"17.3714491\",\"42.5296597\"]', NULL, 0, '2026-11-09 07:02:55', '2026-11-09 07:02:55'),
(1474, '2026-11-09 00:00:00', '666666666', '[\"24.5832174\",\"46.7900071\"]', NULL, 0, '2026-11-09 07:39:00', '2026-11-09 07:39:00'),
(1475, '2026-11-09 00:00:00', '777777777', '[\"27.3396888\",\"35.7128852\"]', NULL, 0, '2026-11-09 08:01:34', '2026-11-09 08:01:34'),
(1476, '2026-11-09 00:00:00', '654654213', '[\"27.3395866\",\"35.7131068\"]', NULL, 0, '2026-11-09 08:16:25', '2026-11-09 08:16:25'),
(1477, '2026-11-09 00:00:00', '12345678', '[\"26.40985285306953\",\"50.00056352239674\"]', NULL, 0, '2026-11-09 08:21:25', '2026-11-09 08:21:25'),
(1478, '2026-11-09 00:00:00', '222222222', '[\"21.330314833333336\",\"43.91844733333334\"]', NULL, 1, '2026-11-09 08:25:56', '2026-11-09 08:25:56'),
(1479, '2026-11-09 00:00:00', '222222222', '[\"21.349621000000003\",\"43.9266565\"]', NULL, 0, '2026-11-09 08:27:06', '2026-11-09 08:27:06'),
(1480, '2026-11-09 00:00:00', '333333333', '[\"26.392511904493567\",\"50.15333381022355\"]', NULL, 0, '2026-11-09 09:06:34', '2026-11-09 09:06:34'),
(1481, '2026-11-09 00:00:00', '65465498798', '[\"21.423423423423422\",\"39.31070608857639\"]', NULL, 0, '2026-11-09 10:01:16', '2026-11-09 10:01:16'),
(1482, '2026-11-09 00:00:00', '12345678', '[\"26.40985242155566\",\"50.00056351025717\"]', NULL, 1, '2026-11-09 17:49:59', '2026-11-09 17:49:59'),
(1483, '2026-11-09 00:00:00', '333333333', '[\"26.385583059462913\",\"50.19171993916942\"]', NULL, 1, '2026-11-09 18:02:51', '2026-11-09 18:02:51'),
(1484, '2026-11-09 00:00:00', '666666666', '[\"24.5831705\",\"46.7899629\"]', NULL, 1, '2026-11-09 18:57:29', '2026-11-09 18:57:29'),
(1485, '2026-11-09 00:00:00', '222222222', '[\"26.424055866946354\",\"50.01921563498072\"]', NULL, 1, '2026-11-09 19:08:26', '2026-11-09 19:08:26'),
(1486, '2026-11-09 00:00:00', '654654213', '[\"27.3397566\",\"35.7128422\"]', NULL, 1, '2026-11-09 21:02:56', '2026-11-09 21:02:56'),
(1487, '2026-11-09 00:00:00', '777777777', '[\"27.3395415\",\"35.7128117\"]', NULL, 1, '2026-11-09 21:35:41', '2026-11-09 21:35:41'),
(1488, '2026-11-09 00:00:00', '65465465465', '[\"17.3768175\",\"42.5318225\"]', NULL, 1, '2026-11-09 22:31:42', '2026-11-09 22:31:42'),
(1489, '2026-11-09 00:00:00', '65465498798', '[\"21.44144144144144\",\"39.25748594547575\"]', NULL, 1, '2026-11-09 22:51:09', '2026-11-09 22:51:09'),
(1490, '2026-11-10 00:00:00', '333333333', '[\"26.40553736149169\",\"50.083646680907194\"]', NULL, 0, '2026-11-10 06:49:52', '2026-11-10 06:49:52'),
(1491, '2026-11-10 00:00:00', '65465465465', '[\"17.3697305\",\"42.5272073\"]', NULL, 0, '2026-11-10 07:21:08', '2026-11-10 07:21:08'),
(1492, '2026-11-10 00:00:00', '654654213', '[\"27.3400246\",\"35.7128728\"]', NULL, 0, '2026-11-10 07:50:05', '2026-11-10 07:50:05'),
(1493, '2026-11-10 00:00:00', '666666666', '[\"24.5832919\",\"46.7900556\"]', NULL, 0, '2026-11-10 07:54:45', '2026-11-10 07:54:45'),
(1494, '2026-11-10 00:00:00', '222222222', '[\"26.434565502898415\",\"50.066551675404796\"]', NULL, 0, '2026-11-10 08:07:05', '2026-11-10 08:07:05'),
(1495, '2026-11-10 00:00:00', '777777777', '[\"27.3397508\",\"35.7128645\"]', NULL, 0, '2026-11-10 08:15:50', '2026-11-10 08:15:50'),
(1496, '2026-11-10 00:00:00', '12345678', '[\"26.40983959298245\",\"50.00064449772011\"]', NULL, 0, '2026-11-10 08:30:48', '2026-11-10 08:30:48'),
(1497, '2026-11-10 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 0, '2026-11-10 09:13:02', '2026-11-10 09:13:02'),
(1498, '2026-11-10 00:00:00', '333333333', '[\"26.231870952904263\",\"50.19522190670729\"]', NULL, 1, '2026-11-10 17:27:40', '2026-11-10 17:27:40'),
(1499, '2026-11-10 00:00:00', '65465465465', '[\"17.3706257\",\"42.5373228\"]', NULL, 1, '2026-11-10 17:30:55', '2026-11-10 17:30:55'),
(1500, '2026-11-10 00:00:00', '222222222', '[\"26.484924409920108\",\"50.05243944758576\"]', NULL, 1, '2026-11-10 17:48:45', '2026-11-10 17:48:45'),
(1501, '2026-11-10 00:00:00', '65465465465', '[\"17.3732734\",\"42.5305793\"]', NULL, 0, '2026-11-10 18:17:48', '2026-11-10 18:17:48'),
(1502, '2026-11-10 00:00:00', '65465465465', '[\"17.3712701\",\"42.5382423\"]', NULL, 1, '2026-11-10 20:45:45', '2026-11-10 20:45:45'),
(1503, '2026-11-10 00:00:00', '12345678', '[\"26.413298110549196\",\"50.000570778061146\"]', NULL, 1, '2026-11-10 21:30:54', '2026-11-10 21:30:54'),
(1504, '2026-11-10 00:00:00', '777777777', '[\"27.3396768\",\"35.7130215\"]', NULL, 1, '2026-11-10 21:44:51', '2026-11-10 21:44:51'),
(1505, '2026-11-10 00:00:00', '654654213', '[\"27.3397274\",\"35.7129753\"]', NULL, 1, '2026-11-10 21:44:59', '2026-11-10 21:44:59'),
(1506, '2026-11-10 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 1, '2026-11-10 22:25:41', '2026-11-10 22:25:41'),
(1507, '2026-11-10 00:00:00', '666666666', '[\"24.5834305\",\"46.7900736\"]', NULL, 1, '2026-11-10 23:48:33', '2026-11-10 23:48:33'),
(1508, '2026-11-11 00:00:00', '65465465465', '[\"17.3732734\",\"42.5305793\"]', NULL, 0, '2026-11-11 07:21:27', '2026-11-11 07:21:27'),
(1509, '2026-11-11 00:00:00', '666666666', '[\"24.583288\",\"46.790066\"]', NULL, 0, '2026-11-11 08:02:37', '2026-11-11 08:02:37'),
(1510, '2026-11-11 00:00:00', '654654213', '[\"27.3399364\",\"35.7127738\"]', NULL, 0, '2026-11-11 08:22:10', '2026-11-11 08:22:10'),
(1511, '2026-11-11 00:00:00', '222222222', '[\"26.365083750223885\",\"50.20908727860181\"]', NULL, 0, '2026-11-11 08:23:27', '2026-11-11 08:23:27'),
(1512, '2026-11-11 00:00:00', '777777777', '[\"27.3398942\",\"35.71293\"]', NULL, 0, '2026-11-11 08:26:38', '2026-11-11 08:26:38'),
(1513, '2026-11-11 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 0, '2026-11-11 08:32:01', '2026-11-11 08:32:01'),
(1514, '2026-11-11 00:00:00', '333333333', '[\"26.402034938057323\",\"50.08561412642225\"]', NULL, 0, '2026-11-11 09:02:53', '2026-11-11 09:02:53'),
(1515, '2026-11-11 00:00:00', '12345678', '[\"25.405968947000694\",\"49.591997834612236\"]', NULL, 0, '2026-11-11 09:11:31', '2026-11-11 09:11:31'),
(1516, '2026-11-11 00:00:00', '777777777', '[\"27.3396707\",\"35.7129955\"]', NULL, 1, '2026-11-11 17:30:35', '2026-11-11 17:30:35'),
(1517, '2026-11-11 00:00:00', '12345678', '[\"25.405996713224734\",\"49.59197715025553\"]', NULL, 1, '2026-11-11 17:30:59', '2026-11-11 17:30:59'),
(1518, '2026-11-11 00:00:00', '65465465465', '[\"17.3739145\",\"42.528127\"]', NULL, 1, '2026-11-11 17:34:43', '2026-11-11 17:34:43'),
(1519, '2026-11-11 00:00:00', '333333333', '[\"26.232697055333137\",\"50.19510530764194\"]', NULL, 1, '2026-11-11 18:27:50', '2026-11-11 18:27:50'),
(1520, '2026-11-11 00:00:00', '666666666', '[\"24.6283312\",\"46.7960275\"]', NULL, 1, '2026-11-11 18:52:55', '2026-11-11 18:52:55'),
(1521, '2026-11-11 00:00:00', '654654213', '[\"27.3398587\",\"35.7129\"]', NULL, 1, '2026-11-11 20:14:30', '2026-11-11 20:14:30'),
(1522, '2026-11-11 00:00:00', '65465498798', '[\"21.53153153153153\",\"39.204312784501724\"]', NULL, 1, '2026-11-11 23:28:12', '2026-11-11 23:28:12'),
(1523, '2026-11-12 00:00:00', '222222222', '[\"26.42400905313019\",\"50.024803234869275\"]', NULL, 1, '2026-11-12 07:23:32', '2026-11-12 07:23:32'),
(1524, '2026-11-12 00:00:00', '222222222', '[\"26.42517797824274\",\"50.02429311987925\"]', NULL, 0, '2026-11-12 07:23:50', '2026-11-12 07:23:50'),
(1525, '2026-11-12 00:00:00', '666666666', '[\"24.583218\",\"46.7899592\"]', NULL, 0, '2026-11-12 08:01:05', '2026-11-12 08:01:05'),
(1526, '2026-11-12 00:00:00', '777777777', '[\"27.3398767\",\"35.7128834\"]', NULL, 0, '2026-11-12 08:01:12', '2026-11-12 08:01:12'),
(1527, '2026-11-12 00:00:00', '777777777', '[\"27.3398212\",\"35.7129381\"]', NULL, 0, '2026-11-12 08:01:57', '2026-11-12 08:01:57'),
(1528, '2026-11-12 00:00:00', '654654213', '[\"27.3400246\",\"35.7128728\"]', NULL, 0, '2026-11-12 08:02:44', '2026-11-12 08:02:44'),
(1529, '2026-11-12 00:00:00', '65465465465', '[\"17.3744242\",\"42.5284335\"]', NULL, 0, '2026-11-12 08:06:52', '2026-11-12 08:06:52'),
(1530, '2026-11-12 00:00:00', '12345678', '[\"26.414969243949905\",\"50.010753160786635\"]', NULL, 0, '2026-11-12 08:34:01', '2026-11-12 08:34:01'),
(1531, '2026-11-12 00:00:00', '333333333', '[\"26.370193461157278\",\"50.14870798756735\"]', NULL, 0, '2026-11-12 08:58:22', '2026-11-12 08:58:22'),
(1532, '2026-11-12 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 0, '2026-11-12 09:24:47', '2026-11-12 09:24:47'),
(1533, '2026-11-12 00:00:00', '65465465465', '[\"17.3751744\",\"42.5278204\"]', NULL, 1, '2026-11-12 17:37:51', '2026-11-12 17:37:51');
INSERT INTO `attendances` (`id`, `date`, `employee_id`, `location`, `picture`, `type`, `created_at`, `updated_at`) VALUES
(1534, '2026-11-12 00:00:00', '333333333', '[\"26.434757406398482\",\"50.12793190291197\"]', NULL, 1, '2026-11-12 18:22:04', '2026-11-12 18:22:04'),
(1535, '2026-11-12 00:00:00', '654654213', '[\"27.3398244\",\"35.7135555\"]', NULL, 1, '2026-11-12 21:16:35', '2026-11-12 21:16:35'),
(1536, '2026-11-12 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 1, '2026-11-12 21:38:48', '2026-11-12 21:38:48'),
(1537, '2026-11-12 00:00:00', '777777777', '[\"27.3396167\",\"35.7128827\"]', NULL, 1, '2026-11-12 22:25:33', '2026-11-12 22:25:33'),
(1538, '2026-11-12 00:00:00', '666666666', '[\"24.5852027\",\"46.7790292\"]', NULL, 1, '2026-11-12 23:57:15', '2026-11-12 23:57:15'),
(1539, '2026-11-13 00:00:00', '65465498798', '[\"21.62162162162162\",\"39.18993413023729\"]', NULL, 0, '2026-11-13 03:01:06', '2026-11-13 03:01:06'),
(1540, '2026-11-13 00:00:00', '666666666', '[\"24.5859084\",\"46.7857821\"]', NULL, 0, '2026-11-13 16:00:22', '2026-11-13 16:00:22'),
(1541, '2026-11-13 00:00:00', '222222222', '[\"26.392650649416275\",\"50.032984673537094\"]', NULL, 1, '2026-11-13 16:56:58', '2026-11-13 16:56:58'),
(1542, '2026-11-13 00:00:00', '666666666', '[\"24.5832892\",\"46.7898618\"]', NULL, 1, '2026-11-13 21:11:14', '2026-11-13 21:11:14'),
(1543, '2026-11-13 00:00:00', '666666666', '[\"24.5833856\",\"46.7900493\"]', NULL, 1, '2026-11-13 21:11:36', '2026-11-13 21:11:36'),
(1544, '2026-11-14 00:00:00', '333333333', '[\"26.418705071323945\",\"50.08039283863993\"]', NULL, 0, '2026-11-14 03:12:40', '2026-11-14 03:12:40'),
(1545, '2026-11-14 00:00:00', '222222222', '[\"26.344777748340256\",\"49.994569766401504\"]', NULL, 0, '2026-11-14 05:31:12', '2026-11-14 05:31:12'),
(1546, '2026-11-14 00:00:00', '65465465465', '[\"17.3925637\",\"42.3251019\"]', NULL, 0, '2026-11-14 08:26:26', '2026-11-14 08:26:26'),
(1547, '2026-11-14 00:00:00', '654654213', '[\"27.3400246\",\"35.7128728\"]', NULL, 0, '2026-11-14 08:45:13', '2026-11-14 08:45:13'),
(1548, '2026-11-14 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-11-14 08:58:03', '2026-11-14 08:58:03'),
(1549, '2026-11-14 00:00:00', '777777777', '[\"27.3399211\",\"35.7127949\"]', NULL, 0, '2026-11-14 09:00:42', '2026-11-14 09:00:42'),
(1550, '2026-11-14 00:00:00', '666666666', '[\"24.68744775964967\",\"46.63619409144791\"]', NULL, 0, '2026-11-14 09:47:02', '2026-11-14 09:47:02'),
(1551, '2026-11-14 00:00:00', '222222222', '[\"18.676081201989682\",\"42.85075663258837\"]', NULL, 1, '2026-11-14 17:34:42', '2026-11-14 17:34:42'),
(1552, '2026-11-14 00:00:00', '222222222', '[\"18.674993662909728\",\"42.849194433936084\"]', NULL, 0, '2026-11-14 17:34:52', '2026-11-14 17:34:52'),
(1553, '2026-11-14 00:00:00', '333333333', '[\"18.674482234753196\",\"42.848028884078865\"]', NULL, 1, '2026-11-14 17:34:59', '2026-11-14 17:34:59'),
(1554, '2026-11-14 00:00:00', '222222222', '[\"18.67308750390615\",\"42.84107142931224\"]', NULL, 0, '2026-11-14 17:35:32', '2026-11-14 17:35:32'),
(1555, '2026-11-14 00:00:00', '333333333', '[\"18.672184547798587\",\"42.83514480217663\"]', NULL, 0, '2026-11-14 17:35:57', '2026-11-14 17:35:57'),
(1556, '2026-11-14 00:00:00', '654654213', '[\"27.3394013\",\"35.7133017\"]', NULL, 1, '2026-11-14 18:34:11', '2026-11-14 18:34:11'),
(1557, '2026-11-14 00:00:00', '777777777', '[\"27.3396179\",\"35.7130355\"]', NULL, 1, '2026-11-14 18:34:49', '2026-11-14 18:34:49'),
(1558, '2026-11-14 00:00:00', '666666666', '[\"24.584484\",\"46.7896523\"]', NULL, 1, '2026-11-14 20:17:31', '2026-11-14 20:17:31'),
(1559, '2026-11-14 00:00:00', '65465498798', '[\"21.47747747747748\",\"39.30591801540508\"]', NULL, 1, '2026-11-14 23:03:08', '2026-11-14 23:03:08'),
(1560, '2026-11-14 00:00:00', '65465465465', '[\"17.3749002\",\"42.5222106\"]', NULL, 1, '2026-11-14 23:28:20', '2026-11-14 23:28:20'),
(1561, '2026-11-15 00:00:00', '65465465465', '[\"17.3744242\",\"42.5284335\"]', NULL, 0, '2026-11-15 07:37:33', '2026-11-15 07:37:33'),
(1562, '2026-11-15 00:00:00', '654654213', '[\"27.3400246\",\"35.7128728\"]', NULL, 0, '2026-11-15 08:00:19', '2026-11-15 08:00:19'),
(1563, '2026-11-15 00:00:00', '666666666', '[\"24.5831776\",\"46.78992\"]', NULL, 0, '2026-11-15 08:12:50', '2026-11-15 08:12:50'),
(1564, '2026-11-15 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 0, '2026-11-15 08:29:15', '2026-11-15 08:29:15'),
(1565, '2026-11-15 00:00:00', '12345678', '[\"26.40983344918684\",\"50.000634215354346\"]', NULL, 0, '2026-11-15 08:31:10', '2026-11-15 08:31:10'),
(1566, '2026-11-15 00:00:00', '222222222', '[\"20.89495433333333\",\"43.42094133333334\"]', NULL, 1, '2026-11-15 08:32:19', '2026-11-15 08:32:19'),
(1567, '2026-11-15 00:00:00', '222222222', '[\"20.901118333333336\",\"43.42648716666666\"]', NULL, 0, '2026-11-15 08:32:45', '2026-11-15 08:32:45'),
(1568, '2026-11-15 00:00:00', '333333333', '[\"20.920714531358886\",\"43.443804718222644\"]', NULL, 1, '2026-11-15 08:34:04', '2026-11-15 08:34:04'),
(1569, '2026-11-15 00:00:00', '333333333', '[\"20.924127727572337\",\"43.446753421523475\"]', NULL, 0, '2026-11-15 08:34:17', '2026-11-15 08:34:17'),
(1570, '2026-11-15 00:00:00', '777777777', '[\"27.4824511\",\"35.5821012\"]', NULL, 0, '2026-11-15 09:33:48', '2026-11-15 09:33:48'),
(1571, '2026-11-15 00:00:00', '654654213', '[\"27.3400246\",\"35.7128728\"]', NULL, 1, '2026-11-15 18:06:04', '2026-11-15 18:06:04'),
(1572, '2026-11-15 00:00:00', '12345678', '[\"26.409834564337626\",\"50.00064594226359\"]', NULL, 1, '2026-11-15 19:57:19', '2026-11-15 19:57:19'),
(1573, '2026-11-15 00:00:00', '222222222', '[\"26.424114550283644\",\"50.01915611753246\"]', NULL, 1, '2026-11-15 20:51:04', '2026-11-15 20:51:04'),
(1574, '2026-11-15 00:00:00', '333333333', '[\"26.408952407229126\",\"50.177149277949965\"]', NULL, 1, '2026-11-15 20:51:46', '2026-11-15 20:51:46'),
(1575, '2026-11-15 00:00:00', '777777777', '[\"27.3417078\",\"35.7068381\"]', NULL, 1, '2026-11-15 21:10:55', '2026-11-15 21:10:55'),
(1576, '2026-11-15 00:00:00', '666666666', '[\"24.5832461\",\"46.7899953\"]', NULL, 1, '2026-11-15 21:40:46', '2026-11-15 21:40:46'),
(1577, '2026-11-16 00:00:00', '65465465465', '[\"17.3777672\",\"42.5331291\"]', NULL, 1, '2026-11-16 00:00:09', '2026-11-16 00:00:09'),
(1578, '2026-11-16 00:00:00', '65465465465', '[\"17.3726835\",\"42.5305793\"]', NULL, 1, '2026-11-16 00:20:49', '2026-11-16 00:20:49'),
(1579, '2026-11-16 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 1, '2026-11-16 01:08:36', '2026-11-16 01:08:36'),
(1580, '2026-11-16 00:00:00', '65465465465', '[\"17.3694901\",\"42.528127\"]', NULL, 0, '2026-11-16 07:15:58', '2026-11-16 07:15:58'),
(1581, '2026-11-16 00:00:00', '12345678', '[\"26.410061372918843\",\"50.001017440624935\"]', NULL, 0, '2026-11-16 07:44:24', '2026-11-16 07:44:24'),
(1582, '2026-11-16 00:00:00', '777777777', '[\"27.4909229\",\"35.5823149\"]', NULL, 0, '2026-11-16 08:02:34', '2026-11-16 08:02:34'),
(1583, '2026-11-16 00:00:00', '222222222', '[\"26.424062119979883\",\"50.01914603745123\"]', NULL, 0, '2026-11-16 08:53:58', '2026-11-16 08:53:58'),
(1584, '2026-11-16 00:00:00', '666666666', '[\"24.5836935\",\"46.7900278\"]', NULL, 0, '2026-11-16 08:57:42', '2026-11-16 08:57:42'),
(1585, '2026-11-16 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-11-16 09:00:43', '2026-11-16 09:00:43'),
(1586, '2026-11-16 00:00:00', '333333333', '[\"26.41883449682388\",\"50.08042905802506\"]', NULL, 0, '2026-11-16 10:28:50', '2026-11-16 10:28:50'),
(1587, '2026-11-16 00:00:00', '222222222', '[\"26.42405287004757\",\"50.01921642027372\"]', NULL, 1, '2026-11-16 17:30:38', '2026-11-16 17:30:38'),
(1588, '2026-11-16 00:00:00', '333333333', '[\"26.37851006341689\",\"49.949115310492374\"]', NULL, 1, '2026-11-16 17:47:16', '2026-11-16 17:47:16'),
(1589, '2026-11-16 00:00:00', '12345678', '[\"26.409860996583827\",\"50.000693375476835\"]', NULL, 1, '2026-11-16 18:47:40', '2026-11-16 18:47:40'),
(1590, '2026-11-16 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 1, '2026-11-16 20:52:56', '2026-11-16 20:52:56'),
(1591, '2026-11-16 00:00:00', '65465465465', '[\"17.3706491\",\"42.529728\"]', NULL, 1, '2026-11-16 21:01:25', '2026-11-16 21:01:25'),
(1592, '2026-11-16 00:00:00', '777777777', '[\"27.3398189\",\"35.7131053\"]', NULL, 1, '2026-11-16 22:09:16', '2026-11-16 22:09:16'),
(1593, '2026-11-17 00:00:00', '666666666', '[\"24.5834535\",\"46.7904235\"]', NULL, 0, '2026-11-17 04:25:37', '2026-11-17 04:25:37'),
(1594, '2026-11-17 00:00:00', '65465465465', '[\"17.3751744\",\"42.5278204\"]', NULL, 0, '2026-11-17 07:02:14', '2026-11-17 07:02:14'),
(1595, '2026-11-17 00:00:00', '12345678', '[\"26.379691679992828\",\"50.02302050653486\"]', NULL, 0, '2026-11-17 07:42:05', '2026-11-17 07:42:05'),
(1596, '2026-11-17 00:00:00', '654654213', '[\"27.3410803\",\"35.7125315\"]', NULL, 0, '2026-11-17 08:07:06', '2026-11-17 08:07:06'),
(1597, '2026-11-17 00:00:00', '222222222', '[\"26.3652334336162\",\"50.209015338271605\"]', NULL, 0, '2026-11-17 08:14:50', '2026-11-17 08:14:50'),
(1598, '2026-11-17 00:00:00', '777777777', '[\"27.3397188\",\"35.7131418\"]', NULL, 0, '2026-11-17 08:54:01', '2026-11-17 08:54:01'),
(1599, '2026-11-17 00:00:00', '333333333', '[\"26.37265733306743\",\"50.148598137656094\"]', NULL, 0, '2026-11-17 09:02:26', '2026-11-17 09:02:26'),
(1600, '2026-11-17 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-11-17 09:25:53', '2026-11-17 09:25:53'),
(1601, '2026-11-17 00:00:00', '222222222', '[\"26.424087546353523\",\"50.0190736048692\"]', NULL, 1, '2026-11-17 17:30:12', '2026-11-17 17:30:12'),
(1602, '2026-11-17 00:00:00', '333333333', '[\"26.39938314573799\",\"50.183074389526794\"]', NULL, 1, '2026-11-17 17:41:16', '2026-11-17 17:41:16'),
(1603, '2026-11-17 00:00:00', '654654213', '[\"27.3396133\",\"35.7132021\"]', NULL, 1, '2026-11-17 19:45:12', '2026-11-17 19:45:12'),
(1604, '2026-11-17 00:00:00', '777777777', '[\"27.3398879\",\"35.7129447\"]', NULL, 1, '2026-11-17 22:10:24', '2026-11-17 22:10:24'),
(1605, '2026-11-17 00:00:00', '65465465465', '[\"17.3718788\",\"42.5302728\"]', NULL, 1, '2026-11-17 23:25:57', '2026-11-17 23:25:57'),
(1606, '2026-11-17 00:00:00', '666666666', '[\"24.5832024\",\"46.7898781\"]', NULL, 1, '2026-11-17 23:28:40', '2026-11-17 23:28:40'),
(1607, '2026-11-18 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 1, '2026-11-18 04:28:22', '2026-11-18 04:28:22'),
(1608, '2026-11-18 00:00:00', '12345678', '[\"25.405997682555213\",\"49.591975779641814\"]', NULL, 0, '2026-11-18 07:01:47', '2026-11-18 07:01:47'),
(1609, '2026-11-18 00:00:00', '666666666', '[\"24.5832038\",\"46.7899454\"]', NULL, 0, '2026-11-18 07:46:26', '2026-11-18 07:46:26'),
(1610, '2026-11-18 00:00:00', '65465465465', '[\"17.3714236\",\"42.5308859\"]', NULL, 0, '2026-11-18 08:01:30', '2026-11-18 08:01:30'),
(1611, '2026-11-18 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-11-18 08:13:43', '2026-11-18 08:13:43'),
(1612, '2026-11-18 00:00:00', '222222222', '[\"26.36497295085212\",\"50.208995073284164\"]', NULL, 0, '2026-11-18 08:33:15', '2026-11-18 08:33:15'),
(1613, '2026-11-18 00:00:00', '777777777', '[\"27.3396706\",\"35.7129764\"]', NULL, 0, '2026-11-18 08:41:18', '2026-11-18 08:41:18'),
(1614, '2026-11-18 00:00:00', '654654213', '[\"27.3410803\",\"35.7125315\"]', NULL, 0, '2026-11-18 08:56:08', '2026-11-18 08:56:08'),
(1615, '2026-11-18 00:00:00', '333333333', '[\"26.37816206210406\",\"50.10053207432183\"]', NULL, 0, '2026-11-18 08:56:36', '2026-11-18 08:56:36'),
(1616, '2026-11-18 00:00:00', '333333333', '[\"26.36422527188658\",\"50.23392857287356\"]', NULL, 1, '2026-11-18 18:27:04', '2026-11-18 18:27:04'),
(1617, '2026-11-18 00:00:00', '12345678', '[\"26.40985617485169\",\"50.00064777781229\"]', NULL, 1, '2026-11-18 18:49:50', '2026-11-18 18:49:50'),
(1618, '2026-11-18 00:00:00', '654654213', '[\"27.3406798\",\"35.7138969\"]', NULL, 1, '2026-11-18 20:32:06', '2026-11-18 20:32:06'),
(1619, '2026-11-18 00:00:00', '777777777', '[\"27.3396057\",\"35.712887\"]', NULL, 1, '2026-11-18 20:35:47', '2026-11-18 20:35:47'),
(1620, '2026-11-18 00:00:00', '666666666', '[\"24.6942144\",\"46.8138084\"]', NULL, 1, '2026-11-18 20:41:42', '2026-11-18 20:41:42'),
(1621, '2026-11-18 00:00:00', '222222222', '[\"26.42757431545453\",\"50.01679741832498\"]', NULL, 1, '2026-11-18 21:09:33', '2026-11-18 21:09:33'),
(1622, '2026-11-18 00:00:00', '65465465465', '[\"17.1293787\",\"42.6501684\"]', NULL, 1, '2026-11-18 21:54:29', '2026-11-18 21:54:29'),
(1623, '2026-11-18 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 1, '2026-11-18 23:06:07', '2026-11-18 23:06:07'),
(1624, '2026-11-19 00:00:00', '65465465465', '[\"17.371564\",\"42.5026387\"]', NULL, 0, '2026-11-19 02:12:03', '2026-11-19 02:12:03'),
(1625, '2026-11-19 00:00:00', '777777777', '[\"27.3397119\",\"35.7129507\"]', NULL, 0, '2026-11-19 07:57:53', '2026-11-19 07:57:53'),
(1626, '2026-11-19 00:00:00', '654654213', '[\"27.3410803\",\"35.7125315\"]', NULL, 0, '2026-11-19 08:07:16', '2026-11-19 08:07:16'),
(1627, '2026-11-19 00:00:00', '222222222', '[\"26.36524559035624\",\"50.208920806571\"]', NULL, 0, '2026-11-19 08:16:23', '2026-11-19 08:16:23'),
(1628, '2026-11-19 00:00:00', '12345678', '[\"26.409854938103365\",\"50.00064329648807\"]', NULL, 0, '2026-11-19 08:28:01', '2026-11-19 08:28:01'),
(1629, '2026-11-19 00:00:00', '333333333', '[\"26.39321179805146\",\"50.152640722920545\"]', NULL, 0, '2026-11-19 09:06:42', '2026-11-19 09:06:42'),
(1630, '2026-11-19 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.24297679118619\"]', NULL, 0, '2026-11-19 09:21:03', '2026-11-19 09:21:03'),
(1631, '2026-11-19 00:00:00', '222222222', '[\"26.424066763578573\",\"50.01914605651791\"]', NULL, 1, '2026-11-19 17:33:26', '2026-11-19 17:33:26'),
(1632, '2026-11-19 00:00:00', '333333333', '[\"26.398929396548287\",\"50.18355018601995\"]', NULL, 1, '2026-11-19 17:36:36', '2026-11-19 17:36:36'),
(1633, '2026-11-19 00:00:00', '12345678', '[\"25.406008568197315\",\"49.59195643791874\"]', NULL, 1, '2026-11-19 17:50:41', '2026-11-19 17:50:41'),
(1634, '2026-11-19 00:00:00', '777777777', '[\"27.3395509\",\"35.7130354\"]', NULL, 1, '2026-11-19 19:09:06', '2026-11-19 19:09:06'),
(1635, '2026-11-19 00:00:00', '654654213', '[\"27.3396014\",\"35.7130218\"]', NULL, 1, '2026-11-19 19:12:34', '2026-11-19 19:12:34'),
(1636, '2026-11-19 00:00:00', '65465465465', '[\"17.3712525\",\"42.5300955\"]', NULL, 1, '2026-11-19 22:45:11', '2026-11-19 22:45:11'),
(1637, '2026-11-19 00:00:00', '65465498798', '[\"22.27027027027027\",\"39.1354682918573\"]', NULL, 1, '2026-11-19 23:36:58', '2026-11-19 23:36:58'),
(1638, '2026-11-21 00:00:00', '222222222', '[\"26.4239727845585\",\"50.01897212279981\"]', NULL, 0, '2026-11-21 05:20:50', '2026-11-21 05:20:50'),
(1639, '2026-11-21 00:00:00', '333333333', '[\"26.418573087080066\",\"50.08061657613982\"]', NULL, 0, '2026-11-21 05:25:05', '2026-11-21 05:25:05'),
(1640, '2026-11-21 00:00:00', '65465465465', '[\"17.3744242\",\"42.5284335\"]', NULL, 0, '2026-11-21 07:03:39', '2026-11-21 07:03:39'),
(1641, '2026-11-21 00:00:00', '65465498798', '[\"21.45945945945946\",\"39.26233691787153\"]', NULL, 0, '2026-11-21 09:07:41', '2026-11-21 09:07:41'),
(1642, '2026-11-21 00:00:00', '777777777', '[\"27.3395559\",\"35.7132274\"]', NULL, 0, '2026-11-21 09:45:30', '2026-11-21 09:45:30'),
(1643, '2026-11-21 00:00:00', '654654213', '[\"27.3410803\",\"35.7125315\"]', NULL, 0, '2026-11-21 09:49:34', '2026-11-21 09:49:34');

-- --------------------------------------------------------

--
-- Table structure for table `auctions`
--

CREATE TABLE `auctions` (
  `id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `starting_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `ending_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `current_bid` int(11) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `auctions`
--

INSERT INTO `auctions` (`id`, `car_id`, `starting_date`, `ending_date`, `current_bid`, `updated_at`, `created_at`) VALUES
(1, 123, '2026-05-19 07:00:00', '2026-05-31 07:00:00', NULL, '2026-05-19 11:00:29', '2026-05-11 07:32:47');

-- --------------------------------------------------------

--
-- Table structure for table `bids`
--

CREATE TABLE `bids` (
  `id` int(11) NOT NULL,
  `auction_id` int(11) NOT NULL,
  `bid` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `bids`
--

INSERT INTO `bids` (`id`, `auction_id`, `bid`, `created_at`, `updated_at`) VALUES
(15, 1, 253770, '2026-05-19 21:00:45', '2026-05-19 21:00:45');

-- --------------------------------------------------------

--
-- Table structure for table `branches`
--

CREATE TABLE `branches` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `name_ar` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `branches`
--

INSERT INTO `branches` (`id`, `name`, `name_ar`, `created_at`, `updated_at`) VALUES
(1, 'Eastern Region - Khobar', 'المنطقة الشرقية - الخبر', '2025-12-08 12:38:13', '2025-09-21 18:36:19'),
(2, 'Riyadh', 'الرياض', '2025-11-30 08:06:30', '2025-09-21 19:06:37'),
(3, 'Western Region', 'المنطقة الغربية', '2025-11-30 08:06:37', '2025-09-21 19:07:02'),
(4, 'Neom Region', 'نيوم', '2025-11-30 08:06:40', '2025-09-21 19:07:12'),
(5, 'Jizan Region', 'جيزان', '2025-11-30 08:06:45', '2025-09-21 19:07:27'),
(8, 'Eastern Province - Khafji', 'المنطقة الشرقية - الخفجي', '2025-12-08 12:39:10', '0000-00-00 00:00:00'),
(9, 'Turaif', 'طريف', '2026-04-30 22:18:50', '2026-04-30 22:18:50');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `title_ar` text NOT NULL,
  `title_en` text NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `title_ar`, `title_en`, `created_at`, `updated_at`) VALUES
(1, 'تويوتا', 'Toyota', '2026-04-19', '2026-04-19');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `car_brand` varchar(50) NOT NULL,
  `car_model` varchar(200) NOT NULL,
  `car_edition` text DEFAULT NULL,
  `car_features` text DEFAULT NULL,
  `car_type` varchar(50) NOT NULL DEFAULT 'Sedan',
  `car_sub_type` varchar(512) DEFAULT NULL,
  `car_man_year` varchar(4) NOT NULL,
  `car_color` text DEFAULT NULL,
  `car_fuel` text NOT NULL,
  `car_fuel_consumption` text DEFAULT NULL,
  `car_engine_capacity` text DEFAULT NULL,
  `car_fuel_capacity` int(11) DEFAULT NULL,
  `car_cylinders` text DEFAULT NULL,
  `car_condition` varchar(20) NOT NULL DEFAULT 'New',
  `car_mileage` varchar(10) NOT NULL,
  `car_transmission` varchar(20) NOT NULL,
  `car_doors` int(11) DEFAULT 4,
  `car_height` double DEFAULT NULL,
  `car_length` double DEFAULT NULL,
  `car_weight` double DEFAULT NULL,
  `car_speeds` text DEFAULT NULL,
  `car_horsepower` text DEFAULT NULL,
  `car_front_view` text DEFAULT NULL,
  `car_rear_view` text DEFAULT NULL,
  `car_side_view` text DEFAULT NULL,
  `car_interior_view` text DEFAULT NULL,
  `service_type` varchar(15) NOT NULL,
  `is_auction` tinyint(1) NOT NULL DEFAULT 0,
  `car_price` varchar(40) NOT NULL DEFAULT '10,000',
  `car_location` text DEFAULT NULL,
  `car_status` varchar(1) DEFAULT '1',
  `car_description` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `car_brand`, `car_model`, `car_edition`, `car_features`, `car_type`, `car_sub_type`, `car_man_year`, `car_color`, `car_fuel`, `car_fuel_consumption`, `car_engine_capacity`, `car_fuel_capacity`, `car_cylinders`, `car_condition`, `car_mileage`, `car_transmission`, `car_doors`, `car_height`, `car_length`, `car_weight`, `car_speeds`, `car_horsepower`, `car_front_view`, `car_rear_view`, `car_side_view`, `car_interior_view`, `service_type`, `is_auction`, `car_price`, `car_location`, `car_status`, `car_description`, `updated_at`, `created_at`) VALUES
(5, 'Toyota', 'Land Cruiser', '[{\"trim\":\"GXR-1\",\"price\":\"258000\"},{\"trim\":\"GXR-3\",\"price\":\"304635\"},{\"trim\":\"GXR-4\",\"price\":\"316710\"},{\"trim\":\"VX\",\"price\":\"381110\"},{\"trim\":\"VX-R\",\"price\":\"418025\"}]', NULL, 'SUV', 'Full-size', '2026', '[\"White\",\" Silver\",\" Black\",\" Red\",\" Gray\"]', '[\"Petrol\",\"Diesel\"]', '[\"10.1\",\"13.3\",\"12.6\"]', '[\"Petrol 3.5\",\"Diesel 3.3\"]', 110, '[\"6\"]', 'new', '0', 'Automatic', 5, 194, 511, 198, '[\"10\"]', '[\"Petrol 403\",\"Diesel 302 \"]', 'cars/VaQ6GfJ4N4qoWmeAQyfbFzK0y3szOJiSEVhA7wsf.png', 'cars/V8RzHyYhsIIP420IKW8mNYGmdeLtuLsTQ8Ylyx28.jpg', 'cars/rNWf758oQghFTwd1gimPr7KXFNWKJO3hr4bMJ05F.webp', 'cars/YNOupCthfeKXczXbGxCJEzgjoEWPGGFJ14wxk1HY.webp', 'leasing', 0, '252770', 'Khobar', '1', NULL, '2026-05-03 18:58:40', '2026-05-03 08:58:40'),
(6, 'Toyota', 'Hilux DC', '[{\"trim\":\"GLX-1 2.7 4x2 AT\",\"price\":\"116030\"},{\"trim\":\"GLX-2 2.7 4x2 MT\",\"price\":\"118450\"},{\"trim\":\"SGLX 2.7 4x4 MT\",\"price\":\"137310\"},{\"trim\":\"SGLX 2.7 4x4 AT\",\"price\":\"142715\"},{\"trim\":\"ADVENTURE 4.0 4x4 AT\",\"price\":\"174455\"},{\"trim\":\"GR-S 4.0 4x4 AT\",\"price\":\"183885\"},{\"trim\":\"GL 2.4 DSL 4x2 MT\",\"price\":\"109020\"},{\"trim\":\"GL2 2.4 DSL 4x4 MT\",\"price\":\"126845\"},{\"trim\":\"SGLX 2.4 DSL 4x4 AT\",\"price\":\"159850\"},{\"trim\":\"SGLX 2.8 DSL 4x4 AT\",\"price\":\"169050\"}]', NULL, 'Pick-Up', 'Rugged', '2026', '[\"Super White\",\"Pearl White\"]', '[\"Petrol\",\"Diesel\"]', '[\"9.9\",\"10.1\",\"14.1\",\"14.9\",\"15.9\"]', '[\"Diesel 2.4\",\"Petrol 2.7\"]', 80, '[\"4\"]', 'new', '0', 'Automatic', 4, 180, 532, 210, '[\"5 Manual\",\"6 Automatic\"]', '[\"Petrol 164 \",\"Diesel 147 \"]', 'cars/yaUKQPCXc1Tr4EXLMBpTaQFS1bxuRb10HhGbJXbt.png', 'cars/rOcbOEDFUCAc07KKbf0qAAVylRtaSuEZeLkAfVLX.png', 'cars/SlccODvbaSc37hvKXrwY3jGZVliOEKu93h034RID.webp', 'cars/Fr5rX4kto0p3A1n2qzkTinzLBYY9z45hJ7vtYk6V.jpg', 'leasing', 0, '116030', 'Khobar', '1', 'The Toyota Hilux 2026 GLX 4X2 is a robust and reliable pickup truck, popular for both urban and off-road driving. Here\'s a quick overview:\r\n1.Engine & Performance: It features a 2.7-liter 4-cylinder petrol engine, delivering 164 horsepower and 245 Nm of torque. It has a manual transmission and rear-wheel drive.\r\n2.Fuel Efficiency: The fuel economy is approximately 11.1 liters per 100 km, with an 80-liter fuel tank capacity.\r\n3.Safety Features: Equipped with ABS, Brake Assist (BA), Electronic Brakeforce Distribution (EBD), Hill Assist, and Vehicle Stability Control (VSC). It also includes parking sensors and a knee airbag for the driver.\r\n4.Interior Comfort: The cabin offers fabric seats, manual seat adjustments, a glove box cooling system, and a multi-information display. It also has a manual air conditioning system and audio controls on the steering wheel.\r\nExterior Features: Includes halogen headlamps, fog lamps, electric door mirrors, and alloy wheels. The truck has a spacious trunk with a capacity of 900 liters.\r\n5.Dimensions: It measures 5.335 meters in length, 1.815 meters in width, and 1.815 meters in height, with a wheelbase of 3.090 meters.', '2026-04-14 00:24:36', '2026-04-13 14:24:36'),
(7, 'Toyota', 'Yaris', '[{\"trim\":\"Y\",\"price\":\"63825\"},{\"trim\":\"Y Limited\",\"price\":\"66700\"},{\"trim\":\"Y Plus\",\"price\":\"69690\"},{\"trim\":\"YX\",\"price\":\"75670\"}]', NULL, 'Sedan', 'Compact', '2026', '[\"White\",\"Silver\",\"Red\",\"Black\",\"Gray\",\"Scarlet\"]', '[\"Petrol\"]', '[\"22.4\"]', '[\"1.3\"]', 40, '[\"4\"]', 'new', '0', 'Automatic', 4, 148, 442, 210, '[\"10\"]', '[\"97\"]', 'cars/S7Hq1HEi2hXuzgflzsfCPZ5Kj8vc5E9rtt4d26Hh.png', 'cars/2QrAncyCeWk2sLwozE1XidMBiq6jkKmc88QMtyZt.jpg', 'cars/WXhKPDnYFlllwP02jiTxAOrvj9mYpgW6vPcTKOTH.jpg', 'cars/YK77P72bkdwuw7d8oPLqw1UHP15ebMXxORperh6R.jpg', 'leasing', 0, '63825', 'Khobar', '1', 'The Toyota Yaris Y 2026 is a compact car that blends modern design, advanced technology, and reliable performance. It boasts a sleek exterior, a tech-enhanced interior with features like Apple CarPlay and Android Auto, and advanced safety systems such as adaptive cruise control. With efficient engines, a smooth driving experience, and Toyota\'s trusted reliability, it offers great value for drivers seeking style, innovation, and practicality.', '2026-04-12 20:21:54', '2026-04-12 10:21:54'),
(8, 'Toyota', 'Corolla', '[{\"trim\":\"1.5 XLI\",\"price\":\"79350\"},{\"trim\":\"1.5 XLI Executive\",\"price\":\"83030\"},{\"trim\":\"2.0 XLI\",\"price\":\"83605\"},{\"trim\":\"2.0 XLI Executive\",\"price\":\"87055\"},{\"trim\":\"2.0 XLE Executive MR\",\"price\":\"94300\"}]', NULL, 'Sedan', 'Compact', '2026', '[\"White\",\"Black\",\"Red\",\"Gray\"]', '[\"Petrol\"]', '[\"19.3\"]', '[\"1.5\",\"2.0\"]', 47, '[\"3 Cylinders 1.5L\" , \"4 Cylinders 2.0L\"]', 'new', '0', 'Automatic', 4, 143, 463, 178, '[\"10\"]', '[\"1.5L 119 \",\"2.0L 168 \"]', 'cars/Vzfr162Z0k9whz4aaDRkV0eCPlha1PJdsmShcd4G.png', 'cars/PnrW1uqLSOg48yaAUWHSvTHXeSdUlyw0mmIMwo8G.png', 'cars/l7tYwH2kXOe1fiVvWTnV5kfOaeMzvzAl0bChsmGG.png', 'cars/XeyOlTyvksl0m82jeVSEh3Eo44v9Fl4PCn7bnvtF.png', 'leasing', 0, '79350', 'Khobar', '1', 'The 2026 Toyota Corolla combines modern design, advanced technology, and exceptional reliability. Highlights include a refreshed exterior, a 10.5-inch touchscreen with wireless connectivity, efficient powertrain options (including hybrid models), enhanced safety features with Toyota Safety Sense™ 3.0, and a spacious, comfortable interior. It\'s a perfect blend of innovation and practicality for every journey.', '2026-04-12 21:50:20', '2026-04-12 11:50:20'),
(9, 'Toyota', 'Camry', '[{\"trim\":\"E\",\"price\":\"106030\"},{\"trim\":\"LE\",\"price\":\"117760\"},{\"trim\":\"Grande\",\"price\":\"141680\"}]', NULL, 'Sedan', 'Mid-size', '2026', '[\"White\",\"Black\",\"Red\",\"Blue\"]', '[\"Petrol\"]', '[\"17.2\"]', '[\"2.5\"]', 60, '[\"4\"]', 'new', '0', 'Automatic', 4, 144, 492, 184, '[\"8\"]', '[\"201\"]', 'cars/5VugfL09uIUYx2TvWXN2iJSxIO6zBzuehTHVzcZC.png', 'cars/MI98X84DDOXOpsBmnd7WHCagvg7d30yN94OYAtL2.jpg', 'cars/BmB4gJdCjD8oMvek9JfxRK4FuSwp2j2JWQ7XXWMT.jpg', 'cars/kzW7o7eMBx4YI6QeMD9OMxCuaqZn4SEYp9n1gCD6.jpg', 'leasing', 0, '106030', 'Khobar', '1', 'Camry delivers more than just beautiful, enjoyable driving and a safety system via an advanced technology. It resonates with the five senses with an appeal that can\'t be expressed in numbers, but must be seen, felt and experienced... for a stimulating driving experience', '2026-04-14 00:25:10', '2026-04-13 14:25:10'),
(10, 'Toyota', 'Crown', '[{\"trim\":\"Prestige\",\"price\":\"154330\"},{\"trim\":\"Premium\",\"price\":\"166290\"},{\"trim\":\"Majestic\",\"price\":\"202170\"}]', NULL, 'Sedan', 'Luxury', '2026', '[\"White\",\"Black\",\"Red\",\"Grey\"]', '[\"Petrol\"]', '[\"26.1\"]', '[\"2.5\"]', 60, '[\"4\"]', 'new', '0', 'Automatic', 4, 154, 498, 184, '[\"6\"]', '[\"218\"]', 'cars/8yd1U9Tg4Qz3HHRXftMT8BbQY0Lb5H8fF369zkp0.png', 'cars/ge4RZBVdyJFAhEbIPpFUsAr541fJDJh7kaw02F7v.jpg', 'cars/Zp8NEDg8e5O6JtURz1zOy0gks0mW5scu8cnAoIuX.jpg', 'cars/i2xobyDIbrWQFSZsx0NEYo0n2wvhfXzrTXBqsRF5.jpg', 'leasing', 0, '154330', 'Khobar', '1', 'The 2026 Toyota Crown is a luxurious sedan that blends innovation, elegance, and performance. It features a bold design, advanced hybrid powertrains, and cutting-edge technology. Highlights include:\r\nThe Crown represents Toyota\'s legacy of innovation and luxury, offering a refined driving experience. Let me know if you\'d like more details!', '2026-04-12 21:53:30', '2026-04-12 11:53:30'),
(11, 'Toyota', 'Veloz', '[{\"trim\":\"GLX\",\"price\":\"82915\"}]', NULL, 'SUV', 'Subcompact', '2026', '[\"White\",\"Black\",\"Grey\",\"Red\"]', '[\"Petrol\"]', '[\"18.6\"]', '[\"1.5\"]', 43, '[\"4\"]', 'new', '0', 'Automatic', 5, 170, 447, 175, '[\"7\"]', '[\"104\"]', 'cars/2YVk8sJFw3as8ZHftUY9xAbllZLQysOIYrN5kiTd.png', 'cars/L3RGNN2E6m4nYpLioZJvkXXwDk6CEnvXSuhq5YS8.webp', 'cars/a9iph7p5mf2pSEQawpCxwufBrltkiTqHk6cYLGMR.webp', 'cars/57rqSfSxkkZgFTT5B5UEUON3JrUGtxvyPEG8CNAY.webp', 'leasing', 0, '81995', 'Khobar', '1', 'The Toyota Veloz is a stylish and practical seven-seater subcompact crossover SUV. It offers a bold design, advanced technology, and efficient performance, making it ideal for families and young professionals. Key features include:\r\nThe Veloz combines comfort, technology, and reliability, making it a great choice for urban and highway adventures. Let me know if you\'d like more details!', '2026-04-12 21:54:05', '2026-04-12 11:54:05'),
(12, 'Toyota', 'Raize', '[{\"trim\":\"XLE\",\"price\":\"67045\"},{\"trim\":\"LIMITED\",\"price\":\"73715\"}]', NULL, 'SUV', 'Compact', '2026', '[\"Black\",\"Grey\",\"Red\",\"Silver\"]', '[\"Petrol\"]', '[\"21.7\"]', '[\"1.2\",\"1.0\"]', 36, '[\"3\"]', 'new', '0', 'Automatic', 5, 163, 403, 171, '[\"10\"]', '[\"1.2L 87\",\"1.0L Turbo 97\"]', 'cars/3JSUQ9LXnAeJwZbXWrXralbNAd6gPefUUHRdLylW.png', 'cars/fflSdcpWZDlLzSyilbUkfqp1s3V4hiZqw45V8vIk.jpg', 'cars/hMCgAJ70xeIe5rqDfqHGToPpWUc7lo1jZuCTM5ua.png', 'cars/HP5O8p37hKeShCDGVrtIsKBgZK9482X7xDODJ4Y0.webp', 'leasing', 0, '67045', 'Khobar', '1', 'The Toyota Raize is a compact SUV offering style, versatility, and efficiency. It comes with two engine options: a 1.0-liter turbocharged engine (97 HP) or a 1.2-liter engine (87 HP), both delivering impressive fuel economy up to 21.7 km/l. Its spacious interior features a nine-inch touchscreen with Apple CarPlay and Android Auto. The sporty exterior design is complemented by advanced safety systems, making it an ideal choice for urban drivers seeking practicality and modern features.', '2026-04-12 21:54:40', '2026-04-12 11:54:40'),
(13, 'Toyota', 'Urban Cruiser', '[{\"trim\":\"GL\",\"price\":\"82915\"},{\"trim\":\"GLX\",\"price\":\"92115\"}]', NULL, 'SUV', 'Compact', '2026', '[\"Red\",\"Silver\",\"White\",\"Blue\",\"Black\",\"Grey\",\"Brown\"]', '[\"Petrol\"]', '[\"19.8\"]', '[\"1.5\"]', 45, '[\"4\"]', 'new', '0', 'Automatic', 5, 164, 436, 179, '[\"6\"]', '[\"101\"]', 'cars/ppoCs9Udx0zlcZaa1ONiScnKOYkdgEJPzDQkIMHt.png', 'cars/7QCzaqIrzvT6kAjHAGKsdHpJ0y4wx26DHBKws6Ao.jpg', 'cars/m4rN0TDvFPvAu74f5GgC2833lZ673G5nWN5NJLBk.jpg', 'cars/qSeBCFvfeFyNSApoXtPN88dotpzy6IDbNttKykeR.jpg', 'leasing', 0, '82915', 'Khobar', '1', 'The 2026 Toyota Urban Cruiser is a stylish and efficient compact SUV tailored for city driving. It features a 1.5-liter engine with 101 HP, a spacious and comfortable interior with premium materials, modern infotainment options, advanced safety systems, and a dynamic two-tone exterior design. It\'s the perfect urban companion for navigating city streets with ease and flair.', '2026-04-12 21:55:38', '2026-04-12 11:55:38'),
(14, 'Toyota', 'Corolla Cross Hybrid', '[{\"trim\":\"LE HEV\",\"price\":\"103845\"},{\"trim\":\"XLE HEV\",\"price\":\"113505\"},{\"trim\":\"LIMITED HEV\",\"price\":\"129260\"},{\"trim\":\"LIMITED PLUS\",\"price\":\"130410\"}]', NULL, 'SUV', 'Cross-Over', '2026', '[\"White\",\"Silver\",\"Gray\",\"Black\",\"Red\"]', '[\"Petrol\"]', '[\"25.8\"]', '[\"1.8\"]', 36, '[\"4\"]', 'new', '0', 'Automatic', 5, 162, 446, 182, '[\"10\"]', '[\"121\"]', 'cars/EdWJYPeEuqVcZxF8r4UeRKalKJzsJZtU6jSrNnY8.png', 'cars/ZxFz1ez9Ofip6WP96v0ttvF9pJmyDudCZrL2d9bZ.jpg', 'cars/Lf5GsVKHyOXXVtZ9HJ11sQJnxHC0nxox5EtvoCsn.webp', 'cars/8b1dduHJ2Jd9rlcxpuRyUBTrGcG0K52rXiQ60hX3.webp', 'leasing', 0, '103845', 'Khobar', '1', 'The Toyota Corolla Cross HEV is an eco-friendly and versatile compact SUV with a 1.8-liter hybrid engine delivering 122 HP. It boasts excellent fuel efficiency at 4.5 L/100 km, a spacious and modern interior with flexible seating, advanced safety features, and a sleek exterior design. Perfect for drivers seeking comfort, style, and sustainability.', '2026-04-21 08:18:41', '2026-04-21 08:18:41'),
(15, 'Toyota', 'Rav4', '[{\"trim\":\"LE\",\"price\":\"102350\"},{\"trim\":\"LE 4x4\",\"price\":\"108330\"},{\"trim\":\"XLE 4x4\",\"price\":\"125003\"}]', NULL, 'SUV', 'Compact', '2026', '[\"Black\",\"Blue\",\"Silver\",\"Red\",\"Gray\",\"White\"]', '[\"Petrol\"]', '[\"16.8\"]', '[\"2\"]', 55, '[\"4\"]', 'new', '0', 'Automatic', 5, 170, 460, 185, '[\"8\"]', '[\"170\"]', 'cars/Ps9JuWMhqCmYfETVfLVHEooKBM9RpWRLpMfjRIPJ.png', 'cars/quM12ZSzietl2fvoF1rtV1E8Sp2A1HyyQNPDEz3l.jpg', 'cars/NdqMsAvdkpwsDGGpKsxW2WTylhA1bJP9VnsV0Dlj.jpg', 'cars/sVfQelcDGYseLzYdwL3dFimFv9gq5mrzTJj55EpZ.webp', 'leasing', 0, '102350', 'Khobar', '1', 'The 2026 Toyota RAV4 is a versatile and efficient compact SUV, exclusively featuring hybrid powertrains. It offers a 2.5-liter hybrid engine with up to 219 HP, excellent fuel economy, a spacious interior with advanced connectivity options like wireless Apple CarPlay and Android Auto, and cutting-edge safety features with Toyota Safety Sense 2.5. Its stylish design and practicality make it an excellent choice for families and urban drivers alike.', '2026-04-19 15:56:16', '2026-04-19 05:56:16'),
(16, 'Toyota', 'Fortuner', '[{\"trim\":\"GX-2\",\"price\":\"123855\"},{\"trim\":\"GX-2 4x4\",\"price\":\"134665\"},{\"trim\":\"GX-2 4x4 Dsl\",\"price\":\"147685\"},{\"trim\":\"VX-1\",\"price\":\"158010\"},{\"trim\":\"VX3-S\",\"price\":\"182159\"}]', NULL, 'SUV', 'Mid-size', '2026', '[\"Black\",\"Silver\",\"White\",\"Gray\"]', '[\"Petrol\" , \"Diesel\"]', '[\"Petrol 10.3\" ,\"Petrol 4.0 9.6\", \"Diesel 14.2\" ]', '[\"Petrol 2.7\" ,\"Petrol 4.0\", \"Diesel 2.4\" ]', 80, '[\"4\"]', 'new', '0', 'Automatic', 5, 183, 479, 185, '[\"6\"]', '[\"Petrol 164\" , \"Petrol 4.0\", \"Diesel 147 \"]', 'cars/Cl6MX7EzYW6AlQ0oxgPgPtotiqkNScVWQ8Isd0LC.png', 'cars/tjZRqT9YkTP9aDMymq7cfPCA4oR0KyDS6mTK0wLO.jpg', 'cars/uIbJkbw8fEDJiCDXkVaic1bAXXLWU3RImXFpuEKM.webp', 'cars/DEEChYUoKGbv5B7xf1twUEfLl8XuufXVH9Kt43nR.jpg', 'leasing', 0, '123855', 'Khobar', '1', 'The 2026 Toyota Fortuner is a versatile and reliable mid-sized SUV designed for both urban and off-road adventures. It offers powerful engine options, including a 2.7-liter 4-cylinder engine with 164 HP and a 4.0-liter V6 engine with 235 HP. The Fortuner features a spacious interior with seating for up to seven, advanced safety systems like Vehicle Stability Control and Hill-Start Assist, and a bold exterior design with LED lighting and alloy wheels. Perfect for families and adventurers alike, the Fortuner combines comfort, performance, and durability.', '2026-04-19 15:54:09', '2026-04-19 05:54:09'),
(17, 'Toyota', 'Land Cruiser Prado', '[{\"trim\":\"TX-2\",\"price\":\"193775\"},{\"trim\":\"TXL-1\",\"price\":\"208150\"},{\"trim\":\"TXL-3\",\"price\":\"232300\"},{\"trim\":\"ADV-2\",\"price\":\"273815\"},{\"trim\":\"ADV-2 2T\",\"price\":\"273815\"},{\"trim\":\"VXL-3\",\"price\":\"288305\"},{\"trim\":\"TX-2 DSL\",\"price\":\"201251\"},{\"trim\":\"TXL-2 DSL\",\"price\":\"224250\"},{\"trim\":\"ADV-1 DSL\",\"price\":\"249550\"}]', NULL, 'SUV', 'Mid-size', '2026', '[\"Black\",\"White\",\"Gray\",\"Blue\"]', '[\"Petrol\",\"Diesel\"]', '[\"10.6\",\"14.1\"]', '[\"2.4\",\"2.8\"]', 110, '[\"4\"]', 'new', '0', 'Automatic', 5, 198, 499, 194, '[\"8\"]', '[\"267\",\"201\"]', 'cars/o9vROlSZiQbqP4MjemcExN0dbIDJv0vyu3Rt1HlQ.png', 'cars/D8OtCeHR5OPwdkWcpX6pJab6H5X7RdsltG1hCYhM.webp', 'cars/GEnewviIkGy59LFQPAjPw0WgjRoVA9S7g9TGSV3L.jpg', 'cars/yFUIgeAiGmyBYLF4GhhFfXmb1RcdJ6LcXt7KdgRw.webp', 'leasing', 0, '193775', 'Khobar', '1', 'The 2026 Toyota Prado is a robust and versatile SUV designed for both urban and off-road adventures. It offers powerful engine options, including a 2.4-liter turbocharged gasoline engine with 267 HP and a 2.8-liter turbo diesel engine with 201 HP. The Prado features advanced off-road capabilities like Crawl Control and selectable driving modes, a spacious interior with a 12.3-inch touchscreen, and cutting-edge safety systems such as collision detection and dynamic stability control. Built on the GA-F platform, it combines strength, stability, and modern technology for an exceptional driving experience', '2026-04-14 00:29:53', '2026-04-13 14:29:53'),
(18, 'Toyota', 'Hiace Bus', '[{\"trim\":\"Gasoline MT\",\"price\":\"148925\"},{\"trim\":\"DSL MT\",\"price\":\"158355\"},{\"trim\":\"DSL AT\",\"price\":\"163185\"}]', NULL, 'Bus', 'Light-Commercial', '2026', '[\"White\"]', '[\"Petrol\",\"Diesel\"]', '[\"1.3\"]', '[\"3.5\"]', 70, '[\"6\"]', 'new', '0', 'Automatic', 5, 2280, 5915, 1950, '[\"6\"]', '[\"277\"]', 'cars/bkvDpSQwTOJmy2sj4ENtwpkeKWMSAVwcQgssbDC4.png', 'cars/Gwnvfg5r8ajYmoViigJ4nH7pgduGPKrwyTFq28hs.jpg', 'cars/vkXzGNSrcmSmDGIpJfFn04W7cYa1qSNEfoaTHmVW.jpg', 'cars/Yiskl53U7WR9WMKDUhhGIHgl1oqwTt4ALz1ZvdEr.webp', 'leasing', 0, '148925', 'Khobar', '1', 'The Toyota HiAce 2026 is a versatile and reliable vehicle designed to meet the needs of businesses, families, and transport services. It offers powerful performance with engine options like a 3.5L V6 petrol engine and a 2.8L turbo-diesel engine, ensuring smooth acceleration and efficiency. The spacious interior provides flexible seating configurations, smart storage solutions, and enhanced comfort for passengers and drivers. Advanced safety features, including adaptive cruise control and lane departure warning, make it a secure choice. The HiAce 2025 continues to be a trusted option for heavy-duty needs, combining practicality, durability, and modern technology.', '2026-04-21 08:13:23', '2026-04-21 08:13:23'),
(19, 'Toyota', 'HiAce Van', '[{\"trim\":\"STD GAS MT\",\"price\":\"117068\"},{\"trim\":\"STD DSL MT\",\"price\":\"125925\"},{\"trim\":\"Highroof Gas MT\",\"price\":\"131675\"},{\"trim\":\"STD DSL AT\",\"price\":\"132825\"},{\"trim\":\"Highroof DSL MT\",\"price\":\"142025\"},{\"trim\":\"Highroof DSL AT\",\"price\":\"149500\"}]', NULL, 'Bus', 'Light-Commercial', '2026', '[\"White\"]', '[\"Petrol\",\"Diesel\"]', '[\"9.1\"]', '[\"3.5\",\"2.8\"]', 70, '[\"6\"]', 'new', '0', 'Automatic', 5, 199, 526, 195, '[\"6\"]', '[\"277\"]', 'cars/BjRweGBucaJaHsFnoW7nzC18puJMgygyZm59oVUL.png', 'cars/a9AQJPIv62ZbNw7kDkrop2Udmr162XFn2ds0DPBz.webp', 'cars/3ZJnQFHi0Wcf8TG7IjiGIv7KkGfiogFtSG9Cu8PK.jpg', 'cars/RMdSynsBrNS78o22npCNoHVORILRe4PfwgYJwkqD.webp', 'leasing', 0, '117068', 'Khobar', '1', 'The Toyota HiAce van with a low roof is designed for practicality and efficiency, making it ideal for urban environments and businesses. It offers a compact profile that allows for easier maneuverability in tight spaces while still providing ample cargo capacity. The low roof design is particularly beneficial for parking in areas with height restrictions, such as garages or multi-level parking lots.', '2026-04-21 08:13:28', '2026-04-21 08:13:28'),
(20, 'Toyota', 'Coaster', '[{\"trim\":\"Gasoline MT\",\"price\":\"238510\"},{\"trim\":\"Diesel AT\",\"price\":\"248400\"}]', NULL, 'Bus', 'Light-Commercial', '2026', '[\"White\"]', '[\"Petrol\",\"Diesel\"]', '[\"12.5\"]', '[\"2.7\"]', 92, '[\"4\"]', 'new', '0', 'Automatic', 3, 263, 699, 208, '[\"6\"]', '[\"154\"]', 'cars/xtG03NBHMDfVXf8GkUfiR5Ob3CbFqjCq6iLlLdM7.png', 'cars/GoUh9yBSNrWEtHAGElGpPAf9pYgBlkDQz6TB8Ks4.jpg', 'cars/Qr3oVm9rrPx8yNvsFUzx1lPFxEgnxtaGIbBQBhoT.jpg', 'cars/CIzbdXKIJzk3akm35vTMZDzxsrnjeY8bC09fQuXe.jpg', 'leasing', 0, '238510', 'Khobar', '1', 'The Toyota Coaster 2026is a durable and spacious commercial bus designed for comfort and reliability. It features a robust 2.8L turbo-diesel engine with a maximum output of 147 HP and 420 Nm of torque, ensuring efficient performance for long trips. The interior is thoughtfully designed with ample space and climate control to enhance passenger comfort during extended journeys. Its tough exterior and advanced functionality make it a dependable choice for transporting groups with ease.', '2026-04-21 08:13:31', '2026-04-21 08:13:31'),
(21, 'Toyota', 'Camry Hybrid', '[{\"trim\":\"E HEV\",\"price\":\"107295\"},{\"trim\":\"E Plus HEV\",\"price\":\"112240\"},{\"trim\":\"LE HEV\",\"price\":\"120750\"},{\"trim\":\"Lumiere HEV\",\"price\":\"150190\"}]', NULL, 'Sedan', 'Sedan', '2026', '[\"Black\",\"Blue\",\"Red\",\"Bronze\",\"Silver\",\"White\"]', '[\"Petrol\"]', '[\"27.7\"]', '[\"2.5\"]', 50, '[\"4\"]', 'new', '0', 'Automatic', 4, 144, 492, 184, '[\"8\"]', '[\"226\"]', 'cars/5lcMtpAgvHxNdBS9cCAv3YxZJhPXH7jNkxqg07rH.png', 'cars/dz70dyddCTq1hObsE6LXGQEcBq1UeYvENLnNa7NB.jpg', 'cars/yj7iEbLowZIbmYF9hrZIztIE9loD7VJTpzOwXVo0.jpg', 'cars/Nsh6OW6zEX1zZk2nMfaCpnabk4LlYNO8znKBZC5h.jpg', 'leasing', 0, '107295', 'Khobar', '1', 'The Toyota Camry Hybrid is a standout in the sedan market, blending performance, efficiency, and style. The 2026 model offers a hybrid powertrain with up to 51 combined estimated MPG and 232 net combined horsepower. It features advanced technology, including rain-sensing wipers, heated and ventilated seats, and a wireless charging pad. In Saudi Arabia, the Camry Hybrid is available in various trims, with prices starting at SAR 106,605. It boasts a 2.5L 4-cylinder engine, delivering 176 horsepower and 221 Nm of torque, ensuring smooth and efficient driving.', '2026-04-14 00:28:44', '2026-04-13 14:28:44'),
(22, 'Toyota', 'Rav4 Hybrid', '[{\"trim\":\"LE 4x2 HEV\",\"price\":\"107065\"},{\"trim\":\"LE 4x4 HEV\",\"price\":\"113045\"},{\"trim\":\"XLE 4x4 HEV\",\"price\":\"133550\"},{\"trim\":\"XSE 4x4 HEV\",\"price\":\"157665\"},{\"trim\":\"LTD 4x4 HEV\",\"price\":\"161230\"}]', NULL, 'SUV', 'Mid-size', '2026', '[\"Black\",\"Blue\",\"Gray\",\"Red\",\"Silver\",\"White\"]', '[\"Petrol\"]', '[\"23\"]', '[\"2.5\"]', 55, '[\"4\"]', 'new', '0', 'Automatic', 5, 170, 460, 185, '[\"10\"]', '[\"214\"]', 'cars/mT9B1a9EWzotJtkZHFxKrvouHtTZCgkO1LPiy3mP.png', 'cars/DGhtp0maHM7y7PuFveUFheV5sF0x3JAMTAljD6U8.png', 'cars/hmQNJDEifTTBa5JWBqaEofObqV2akMlyyTcjwj9T.png', 'cars/vvS80UbOFeEhLs4Zqns3OxvifhTxQrkhOdAUhMOZ.webp', 'leasing', 0, '107065', 'Khobar', '1', 'The 2026 Toyota RAV4 Hybrid is a versatile and efficient SUV, perfect for both city driving and off-road adventures. It features a 2.5L 4-cylinder engine paired with front and rear electric drive motors, delivering 219 net combined horsepower. With an estimated 41 MPG in the city and 38 MPG on the highway, it offers impressive fuel efficiency.\r\nThe RAV4 Hybrid comes with Electronic On-Demand All-Wheel Drive (AWD), ensuring better traction and stability. It also boasts a spacious interior with modern design elements, including an available 10.5-inch multimedia display and 12.3-inch digital gauge cluster. For rugged adventures, the Woodland Edition offers trail-friendly features like sport-tuned suspension and sturdy roof rails.', '2026-04-21 08:13:42', '2026-04-21 08:13:42'),
(23, 'Toyota', 'Highlander Hybrid', '[{\"trim\":\"LE HEV 4x2\",\"price\":\"151455\"},{\"trim\":\"GLE HEV 4x4\",\"price\":\"168360\"},{\"trim\":\"LIMITED HEV 4x4\",\"price\":\"207460\"}]', NULL, 'SUV', 'Cross-over', '2026', '[\"Black\",\"Blue\",\"Gray\",\"Red\",\"Silver\",\"White\",\"Green\"]', '[\"Petrol\"]', '[\"20.1\",\"19.3\",\"20.1\"]', '[\"2.5\"]', 65, '[\"4\"]', 'new', '0', 'Automatic', 5, 173, 495, 193, '[\"8\"]', '[\"240\"]', 'cars/QX5F74ZF6YGZONg2f62Lrhz8pPZdE101J3GaDplI.png', 'cars/IZwL20df5orf05a1CwmNyHHsDD6HjzwXqihfySsC.jpg', 'cars/NtvAdJEVYarybIefh9VrtQdvG6gGh2TeXk3GVt5k.jpg', 'cars/doxpsXXNhNkIWNiLcNskSyrAiMhJWny27iZJC9Jc.jpg', 'leasing', 0, '151455', 'Khobar', '1', 'The 2026 Toyota Highlander Hybrid is a spacious and efficient SUV, perfect for families and adventurers alike. It features a 2.5L 4-cylinder hybrid engine with a combined output of 243 horsepower and an estimated 35 MPG combined fuel efficiency. With seating for up to eight passengers and a maximum towing capacity of 3,500 lbs, it offers both comfort and utility.\r\nThe Highlander Hybrid comes equipped with Electronic On-Demand All-Wheel Drive (AWD) for enhanced traction and stability. Inside, you\'ll find modern amenities like an available 12.3-inch multimedia display, smartphone integration, and premium materials. For added style, the Nightshade Edition offers unique black accents and bold design elements.', '2026-04-21 08:13:39', '2026-04-21 08:13:39'),
(24, 'Hyundai', 'Accent', '[{\"trim\":\"L\",\"price\":\"70936\"},{\"trim\":\"L 2 Tone\",\"price\":\"71436\"},{\"trim\":\"GL\",\"price\":\"74788\"},{\"trim\":\"GL 2 Tone\",\"price\":\"75289\"},{\"trim\":\"GLS\",\"price\":\"84612\"},{\"trim\":\"GLS 2 Tone\",\"price\":\"85129\"}]', NULL, 'Sedan', 'Compact', '2026', '[\"White \",\" Black \",\" Blue \",\" Grey \",\" Silver \",\" Brown \",\" Red\"]', '[\"Petrol\"]', '[\"18.9\"]', '[\"1.5\"]', 45, '[\"4\"]', 'new', '0', 'Automatic', 4, 145, 438, 173, '[\"6\"]', '[\"113\"]', 'cars/YgCIUnju1DDqjNdoIJxeu2SvDHuHMBtsTajmez1B.png', 'cars/J19oCpnh1s6KHk3Sz4YpkYJIebUgMNVx1U70oYlF.png', 'cars/Zl1c1feCTIQ7BfCuqvgIvAnrfUoddl6JopUfWHsu.jpg', 'cars/hoVwYhVpdePIVMrk3M9pp6u6OlIXi7MIM5wNyJyp.jpg', 'leasing', 0, '70936', 'Khobar', '1', 'Introducing the Hyundai Accent 2026 . Where style meets efficiency. Designed for modern drivers, this sleek sedan boasts a refined exterior, advanced technology, and an impressive 1.5L MPi engine, delivering both power and fuel economy. With multiple trims to suit every lifestyle, including Smart, Comfort, and Premium, the Accent offers a driving experience that’s as smooth as it is stylish. Choose from a range of eight stunning colors and enjoy superior comfort with an intuitive infotainment system and spacious interior. Elevate your drive with the Hyundai Accent 2025—crafted for excellence.', '2026-04-13 23:50:38', '2026-04-13 13:50:38'),
(25, 'Hyundai', 'Elantra', '[{\"trim\":\"2.0 GL\",\"price\":\"76667\"},{\"trim\":\"1.5 GL+\",\"price\":\"77611\"},{\"trim\":\"2.0 GL+\",\"price\":\"79028\"},{\"trim\":\"2.0 GLS\",\"price\":\"83137\"}]', NULL, 'Sedan', 'Compact', '2026', '[\"White \",\" Gray \",\" Black \",\" Blue \",\" Red\"]', '[\"Petrol\"]', '[\"6.5\"]', '[\"2.0\"]', 50, '[\"4\"]', 'new', '0', 'Automatic', 4, 141, 471, 182, '[\"6\"]', '[\"147\"]', 'cars/IgVcMrLJGrKMetWisOGVIyrrhYHTLC7X53vCOYrs.png', 'cars/NwhsgJIU6eJmzMV0Y0EIN5sk86irsKbZljrSy9Rk.jpg', 'cars/r6VNkl3Wx8vrthfJuooskXjo9HR0aGGmmAdzfMAT.jpg', 'cars/FiCZg70r8tZ2CzYPmSW9Xda9PPoLX8tVme0YiN53.webp', 'leasing', 0, '76667', 'Khobar', '1', 'The Hyundai Elantra 2026 is a sleek and modern compact sedan that combines style, efficiency, and advanced technology. With its bold exterior design, featuring sharp lines and a distinctive front grille, the Elantra stands out on the road. Inside, the cabin offers a driver-centric layout with premium materials, an intuitive infotainment system, and spacious seating for both front and rear passengers. The Elantra is available with multiple engine options, including a fuel-efficient hybrid variant and a sporty turbocharged model, catering to different driving preferences. Safety is a priority, with advanced driver-assistance features such as lane-keeping assist, blind-spot monitoring, and forward collision warning. Whether you\'re looking for a reliable daily commuter or a stylish sedan with cutting-edge features, the Hyundai Elantra 2025 delivers a well-rounded driving experienc', '2026-04-13 23:50:26', '2026-04-13 13:50:26'),
(26, 'Hyundai', 'Sonata', '[{\"trim\":\"L\",\"price\":\"104880\"},{\"trim\":\"GL\",\"price\":\"113612\"},{\"trim\":\"GLS\",\"price\":\"121394\"},{\"trim\":\"LTD\",\"price\":\"145130\"}]', NULL, 'Sedan', 'Mid-size', '2026', '[\"White \",\" Gray \",\" Black\"]', '[\"Petrol\"]', '[\"14.5\"]', '[\"2.5\",\"2.0\"]', 50, '[\"4\"]', 'new', '0', 'Automatic', 4, 144, 491, 186, '[\"8\"]', '[\"192\"]', 'cars/g2NYLkhrakvInxOz2uKJdmLOj60ROKveTbj7Yvig.png', 'cars/dT39l6xJSRX4Fsgti9PqC1vswSzfMRvLg2pQ6yEJ.png', 'cars/YlYFOpidau9LMvII51rjYn7WmV3VuvMDbLX6ixcO.webp', 'cars/8Lh8x9gzffqcBmqNjn7qxXHudmTrWXJVuoZrxPjL.jpg', 'leasing', 0, '104880', 'Khobar', '1', 'The Hyundai Sonata 2026 is a stylish and sophisticated midsize sedan that blends performance, comfort, and advanced technology. With its sleek exterior design, featuring bold lines and a distinctive front grille, the Sonata exudes a modern and sporty appeal. Inside, the cabin offers a spacious and driver-focused layout, equipped with premium materials, an intuitive infotainment system, and advanced connectivity features. The Sonata comes with multiple engine options, including a fuel-efficient hybrid variant and a turbocharged performance model, catering to different driving preferences. Safety is a priority, with cutting-edge driver-assistance features such as lane-keeping assist, blind-spot monitoring, and adaptive cruise control. Whether you\'re looking for a reliable daily commuter or a stylish sedan with innovative features, the Hyundai Sonata 2025 delivers a well-rounded driving experience.', '2026-04-13 23:50:08', '2026-04-13 13:50:08'),
(27, 'Hyundai', 'Azera', '[{\"trim\":\"GL\",\"price\":\"157010\"},{\"trim\":\"GLS\",\"price\":\"175950\"},{\"trim\":\"LTD\",\"price\":\"188163\"},{\"trim\":\"Calligraphy\",\"price\":\"211244\"}]', NULL, 'Sedan', 'Luxury', '2026', '[\"White \",\" Gray \",\" Black \",\" Blue \",\" Bronze \",\" Silver\"]', '[\"Petrol\"]', '[\"12.6\"]', '[\"3.5\"]', 60, '[\"6\"]', 'new', '0', 'Automatic', 4, 146, 499, 187, '[\"8\"]', '[\"396\"]', 'cars/ojD5BPjwRZqsxq6FJQG6tlkqBYfh6SWfaNuC4Q14.png', 'cars/WXMp906hgMC3WEv99gB0DFB37tMXU4d8i0syilmH.jpg', 'cars/eYYObcD9pfn8Z8aDV8DGtrathFw7ijNhX8aRiKQ7.jpg', 'cars/m0COwJEG27EFjxbnNka21JXXMzntUondaFNHwgss.jpg', 'leasing', 0, '157010', 'Khobar', '1', 'The 2026 Hyundai Azera is a stylish and sophisticated sedan that offers a blend of luxury, technology, and performance. With a 3.5-liter V6 engine delivering up to 300 horsepower, it ensures a smooth and powerful driving experience, complemented by an 8-speed automatic transmission. The fuel efficiency ranges between 9.6 to 10.4 liters per 100 km, supported by a fuel tank capacity of 60–70 liters, depending on the trim level. The car’s exterior is available in a variety of elegant colors, including white, gray, black, blue, bronze, and silver, adding to its refined aesthetic. In terms of pricing, the Azera starts at SAR 144,325, with higher trims like the Calligraphy edition reaching up to SAR 201,250. With its advanced safety features, premium interiors, and cutting-edge technology, the 2025 Azera is an excellent choice for drivers seeking both comfort and performance.', '2026-04-13 23:49:56', '2026-04-13 13:49:56'),
(28, 'Hyundai', 'Palisade', '[{\"trim\":\"GL\",\"price\":\"174139\"},{\"trim\":\"GLS\",\"price\":\"194839\"},{\"trim\":\"Calligraphy\",\"price\":\"237015\"}]', NULL, 'SUV', 'Mid-size', '2026', '[\"Black \",\" Burgundy \",\" Silver \",\" Blue \",\" Gray \",\" White \",\" Green\"]', '[\"Petrol\"]', '[\"10.6\"]', '[\"3.5\"]', 71, '[\"6\" , \"4\"]', 'new', '0', 'Automatic', 4, 175, 499, 197, '[\"8\"]', '[\"291\" , \"329\"]', 'cars/rEZu6xK9AUmyAWz7cggbBWWFHcHiQRUGeWWDIlqx.png', 'cars/7jAb7IzaVp5rK79rpwy1cN1Oov5yNpPer1uGiGCi.jpg', 'cars/H7e0yiN2wAMLTHK3onQYjfJfEHnuIrZvoDARWRx3.jpg', 'cars/MJbpMfprq2m3QsAWm8ZEiIEZrXJ2aJhY7sZPTewe.jpg', 'leasing', 0, '174139', 'Khobar', '1', 'The 2026 Hyundai Palisade is a spacious and stylish SUV designed for both comfort and performance. It offers a choice of two powerful engines: a 3.8L V6 producing 291 horsepower and a 2.5L Turbo Hybrid generating 329 horsepower, catering to those who prioritize efficiency without sacrificing power. The Palisade boasts a striking exterior with LED headlights, bold alloy wheels, and a range of colors, including Black, Burgundy, Silver, Blue, Gray, White, and Green. Inside, it features premium materials, an advanced infotainment system, and seating for up to eight passengers. With fuel efficiency ranging from 10.0 km/L to 12.8 km/L, a generous 71.2-liter fuel tank, and a starting price of SAR 165,025 in Saudi Arabia, the Palisade delivers a balance of luxury, practicality, and cutting-edge safety features to enhance every journey.', '2026-04-13 23:47:34', '2026-04-13 13:47:34'),
(29, 'Hyundai', 'Santafe', NULL, NULL, 'SUV', 'Mid-size', '2025', '[\"Blue \",\" Brass \",\" Gray \",\" Black \",\" Green \",\" White \",\" Silver \",\" Orange \",\" Red\"]', '[\"Petrol\"]', '[\"9.8\"]', '[\"2.5\"]', 67, '[\"4\"]', 'new', '0', '[\"Automatic\"]', 5, 172, 483, 190, '[\"8\"]', '[\"277\",\"178\"]', 'cars/XIZ1gxATzlPvjVxt7aBrOqiV7JtncQeM8N7qmi7G.png', 'cars/9muHcqCHMgJqbIcUVmTfLTe0lWSCPoSupRBEGJet.jpg', 'cars/JuCpVl40krXBTaYjtZl6HhaUijvULYABjjAlemNL.jpg', 'cars/HnlRYbOO7qj8MSGek7WtR7yWB2N6V7AKQunCdg6P.jpg', 'leasing', 0, '117590', 'Khobar', '0', 'The 2025 Hyundai Santa Fe is a versatile midsize SUV that balances rugged capability with modern comfort. Powered by either a 2.5L turbocharged inline-4 engine producing 277 horsepower or a 1.6L turbocharged hybrid generating 178 horsepower, it delivers impressive performance with fuel efficiency ranging from 9.8 km/L to 15.4 km/L, depending on the drivetrain. With a bold exterior featuring advanced LED lighting and available 20-inch wheels, it offers a striking presence in colors like Blue, Brass, Gray, Black, Green, White, Silver, Orange, and Red. Inside, the Santa Fe boasts a spacious cabin with premium seating, a high-tech infotainment system, and practical features like a large cargo area and five doors, including a rear liftgate. Its 67-liter fuel tank supports long-distance travel, while advanced safety systems ensure secure and confident driving. With a starting price of SAR 117,590 in Saudi Arabia, the 2025 Hyundai Santa Fe offers a compelling combination of style, power, and advanced technology for adventurous drivers.', '2026-04-12 06:22:14', '2026-04-12 06:22:14'),
(30, 'Hyundai', 'Tucson', NULL, NULL, 'SUV', 'Mid-size', '2025', '[\"Black \",\" White \",\" Gray \",\" Silver \",\" Blue \",\" Green \",\" Red\"]', '[\"Petrol\"]', '[\"11.9\"]', '[\"2.5 \",\" 1.6\"]', 54, '[\"4\"]', 'new', '0', '[\"Automatic\"]', 5, 166, 463, 186, '[\"8\"]', '[\"187\"]', 'cars/2KGZjT1wsdLcAnkurJ6RfI82lHfGPllCIwfAvRz6.png', 'cars/At8Ue5juIgxTG2FHSBLwOad2WzopsUelwIsnlkxI.jpg', 'cars/YsyIMJ7yMVcHYSL0GGuZ6lqUOkDgk1wkRE8JOCOG.webp', 'cars/KI0IxeUabNhGJCWJwZ6UYIBKFU7Q0DVjKg3b8gNc.jpg', 'leasing', 0, '109985', 'Khobar', '0', 'The 2025 Hyundai Tucson starts at SAR 109,985 in Saudi Arabia for the base 2.0L Smart (FWD) trim, making it an attractive option for those seeking a well-rounded compact SUV. The Tucson lineup in KSA includes multiple trims, with the 1.6L T-GDI Premium (FWD) reaching up to SAR 135,285. Known for its modern design, advanced safety features, and fuel efficiency, the Tucson remains a popular choice among families and urban drivers. It offers a spacious interior, a user-friendly infotainment system, and a variety of engine options, including hybrid and plug-in hybrid variants. The Tucson competes with other compact SUVs in the market, such as the Kia Sportage and Toyota RAV4, providing a balance of affordability and premium features.', '2026-04-12 06:22:14', '2026-04-12 06:22:14'),
(31, 'Hyundai', 'Kona', NULL, NULL, 'SUV', 'Compact', '2025', '[\"Black \",\" White \",\" Gray \",\" Silver \",\" Blue \",\" Green \",\" Red \",\" Yellow \",\" Orange\"]', '[\"Petrol\"]', '[\"11.0\"]', '[\"1.0\",\"1.6\"]', 50, '[\"4\"]', 'new', '0', '[\"Automatic\"]', 5, 158, 435, 182, '[\"6\"]', '[\"147\"]', 'cars/hZ69Oq76IbbamJS4ZET1UOzFowo9kdnjkT12m2KG.png', 'cars/Q8IX9BGCO8rd4zPF5W6sDHXrtueZfap8Qln4uZVG.webp', 'cars/UE0z2PFyS5iHCGT2Fn4BZ5y8qNCaE7V5nwTU0kkx.jpg', 'cars/s89ermCdBPGr1l7wvetObR8vK9yLz4GEUz1eeQqc.jpg', 'leasing', 0, '90000', 'Khobar', '0', 'The 2025 Hyundai Kona starts at SAR 93,999 in Saudi Arabia for the 1.6L Smart Hybrid trim, making it an appealing choice for those seeking a stylish and fuel-efficient subcompact SUV. The lineup includes multiple trims, with the 1.6L Comfort Hybrid reaching up to SAR 113,185. Known for its modern design, advanced safety features, and hybrid powertrain options, the Kona is a popular choice among urban drivers. It offers a spacious interior, a user-friendly infotainment system, and a variety of driver-assist technologies, such as lane-keeping assist and blind-spot monitoring. Competing with models like the Nissan Kicks and Chevrolet Trax, the Kona balances affordability with premium features, making it a strong contender in the compact SUV segment.', '2026-04-12 06:22:14', '2026-04-12 06:22:14'),
(32, 'Hyundai', 'Creta', NULL, NULL, 'SUV', 'Compact', '2025', '[\"White \",\" Black \",\" Red \",\" Blue \",\" Blue \",\" Light Blue \",\" Grey \",\" Green\"]', '[\"Petrol\"]', '[\"16.9\"]', '[\"1.5\"]', 50, '[\"4\"]', 'new', '0', '[\"Automatic\"]', 5, 163, 433, 179, '[\"6\"]', '[\"113\"]', 'cars/9ukGtoL7EOLfUJD2aYlaAerhRRrgt8l8AWezk2jb.png', 'cars/ZHhhcuI3BhNk7LQRdMOyxvolb4nplwYc7tCg4Cqn.webp', 'cars/rfzQExa38STDMfxK00zAb2nQVtmyiJ9M64sU6Rnl.jpg', 'cars/JtGlgyUGYi9Wdx2ZnSp07TH8R5wL9INqom0053OE.webp', 'leasing', 0, '97000', 'Khobar', '0', 'The 2025 Hyundai Creta continues to be a strong contender in the compact SUV segment, offering a blend of modern design, advanced technology, and efficient performance. With multiple engine options, including a 1.5L petrol, 1.5L turbo petrol, and 1.5L diesel, the Creta caters to a wide range of driving preferences. Its spacious interior features premium materials, a digital instrument cluster, and an infotainment system with Apple CarPlay and Android Auto for seamless connectivity. Safety remains a priority, with features like lane-keeping assist, adaptive cruise control, and six airbags ensuring a secure driving experience. The exterior design has been refined with reshaped bumpers, LED strips, and a Matte Edition finish, adding a stylish touch. With a competitive price range and a 7-year/200,000 km warranty, the Creta offers excellent value for families and daily commuters', '2026-04-12 06:22:14', '2026-04-12 06:22:14'),
(33, 'Hyundai', 'Staria', '[{\"trim\":\"SRD\",\"price\":\"0\"}]', NULL, 'Bus', 'Passenger', '2026', '[\"Black \",\" Brown \",\" Gray \",\" Silver \",\" Blue \",\" White\"]', '[\"Petrol\" , \"Diesel\"]', '[\"10.5\",\"8.2\"]', '[\"75\"]', 75, '[\"6\"]', 'new', '0', 'Automatic', 5, 199, 525, 199, '[\"8\"]', '[\"113\"]', 'cars/gVfOJimLBMrR9iT64b6WruLo1N1pWnPSECED0edy.png', 'cars/6Az3puVbGiSscsvucp0NP0TWW9wj1ntBYihjSo6W.jpg', 'cars/kbPWoFvR1xZVhtDKcBTe8ac6eNYQrJOyzJuiG4me.jpg', 'cars/RFv3eGkTkb3Rz1xN3NnnHQngqrj650qtJwKGfPSy.jpg', 'leasing', 0, '0', 'Khobar', '1', 'The 2026 Hyundai Staria is a futuristic and spacious people mover, designed for families and businesses alike. With a bold, van-like exterior and a premium interior, it offers multiple seating configurations, ranging from 3-seater cargo vans to luxurious 7-seater models. The Staria is powered by a 3.5L V6 petrol engine, delivering 272 hp, and comes with an 8-speed automatic transmission for smooth driving. It features advanced safety technologies, including adaptive cruise control, lane-keeping assist, and blind-spot monitoring, ensuring a secure ride. The interior is equipped with wireless charging, a 10.25-inch digital cluster, and ambient lighting, creating a comfortable and tech-savvy environment. With a fuel tank capacity of 75 liters and a fuel consumption rate of 10.5L/100km, the Staria balances performance with efficiency. Available in Saudi Arabia, it starts at SAR 105,900 for the 3-Seater Van and goes up to SAR 179,900 for the 7-Seater Luxury trim.', '2026-04-21 08:14:06', '2026-04-21 08:14:06'),
(34, 'Nissan', 'Kicks', '[{\"trim\":\"S\",\"price\":\"89599\"},{\"trim\":\"SV+\",\"price\":\"101399\"},{\"trim\":\"SL\",\"price\":\"111399\"}]', NULL, 'SUV', 'Subcompact', '2026', '[\"Black \",\" Blue \",\" Gray \",\" Red \",\" Silver \",\" White \",\" Yellow\"]', '[\"Petrol\"]', '[\"13.2\"]', '[\"2.0\"]', 45, '[\"4\"]', 'new', '0', 'Automatic', 5, 163, 437, 180, '[\"0\"]', '[\"141\"]', 'cars/17VxlCRYQd0H1BydhFscpL2KFtjkDuTcXXHbEPLX.png', 'cars/oTEtMMzauJShyIiZ6KVG3EsHS3LoyEBDKwSYvDs3.jpg', 'cars/s0Hl8FNdojjo0IdXqSjf8Ub5oOrQUKAk0pP0GIR1.jpg', 'cars/xy6BFQTb8ani8vEwq7htontKK5rQp3bqehZnGGzW.jpg', 'leasing', 0, '89599', 'Khobar', '1', 'The 2026 Nissan Kicks is a compact SUV with a 2.0L 4-cylinder engine producing 141 hp. It has a fuel efficiency of 15.1 km/L and a fuel tank capacity of 44.7 liters. Inside, it features a 12.3-inch touchscreen, wireless Apple CarPlay & Android Auto, and advanced safety features like ProPILOT Assist and Automatic Emergency Braking. In Saudi Arabia', '2026-04-21 08:14:16', '2026-04-21 08:14:16'),
(35, 'Nissan', 'Patrol', '[{\"trim\":\"SE T2\",\"price\":\"270999\"},{\"trim\":\"SE TITANIUM\",\"price\":\"316999\"},{\"trim\":\"SE PLATINUM CITY\",\"price\":\"338999\"},{\"trim\":\"LE T1\",\"price\":\"307999\"},{\"trim\":\"LE T2\",\"price\":\"332999\"},{\"trim\":\"LE TITANIUM\",\"price\":\"380999\"},{\"trim\":\"LE PLATINUM CITY\",\"price\":\"422999\"}]', NULL, 'SUV', 'Full-size', '2026', '[\"Green \",\" Blue \",\" Gray \",\" Black \",\" White \",\" Silver\"]', '[\"Petrol\"]', '[\"7.8\"]', '[\"3.5\",\"3.8\"]', 140, '[\"6\"]', 'new', '0', 'Automatic', 5, 195, 530, 199, '[\"9\"]', '[\"316\"]', 'cars/Y8DFUL0WjuCVb4XZlGDMv7CMiguubpIc0j18j7tE.png', 'cars/4VhBjU2jlsJlFFlMnQ4fSIJKwT62fQX0jPsJsD7f.png', 'cars/xRDKrWVZWNEN3KlNxtkBSUmReVc6WVPqyMzYMuwS.png', 'cars/uropD6fy0lZ9IjdfMXwNr5X2BUEhOwdIQcNBNZPz.png', 'leasing', 0, '270999', 'Khobar', '1', 'The 2026 Nissan Patrol is a full-size SUV known for its rugged capability and luxurious comfort. It features a bold design, advanced technology, and powerful engine options, making it a popular choice for both off-road adventures and urban driving. The interior is spacious, offering premium materials and modern connectivity features. With strong safety systems and intelligent driving aids, the Patrol ensures a secure and smooth ride. Available in multiple trims, it caters to different preferences, from practical utility to high-performance luxury', '2026-04-14 00:24:09', '2026-04-13 14:24:09'),
(36, 'Nissan', 'X-Trail', '[{\"trim\":\"S 2WD 5 SEATS\",\"price\":\"104999\"},{\"trim\":\"S 2WD 7 SEATS\",\"price\":\"107999\"},{\"trim\":\"S 4WD 5 SEATS\",\"price\":\"109999\"},{\"trim\":\"S 4WD 7 SEATS\",\"price\":\"116499\"},{\"trim\":\"SV 4WD 7 SEATS\",\"price\":\"130999\"},{\"trim\":\"SV+ 4WD 7 SEATS\",\"price\":\"144999\"},{\"trim\":\"N-TREK\",\"price\":\"150999\"},{\"trim\":\"SL 4WD 7 SEATS\",\"price\":\"156999\"}]', NULL, 'SUV', 'Compact', '2026', '[\"White \",\" Silver \",\" Grey \",\" Black \",\" Blue \",\" Red \",\" Green \",\" Orange \",\" Beige \",\" Brown\"]', '[\"Petrol\"]', '[\"12.8\"]', '[\"2.5\"]', 55, '[\"4\"]', 'new', '0', 'Automatic', 5, 172, 468, 184, '[\"8\"]', '[\"181\"]', 'cars/GfGkmu1X6RdiQvAYrIYoiCtBC1Ir1cC9pvNIJDp6.png', 'cars/2j6NlG2ojBSuvwArCgm9NHjvRAgUWX1YWelszwCZ.jpg', 'cars/IaTRqSpKLbyUmGaOIk57arKRgJveBAHFcggFq2aO.jpg', 'cars/9JAG6Itutdb9lrtAT1FkuNTvacm5WC86YBxbOmKK.jpg', 'leasing', 0, '104999', 'Khobar', '1', 'The 2026 Nissan X-Trail is a compact crossover SUV designed for versatility, comfort, and efficiency. It features a modern exterior design, a spacious interior, and advanced technology to enhance the driving experience. The X-Trail is available in multiple trims, offering both front-wheel drive (FWD) and all-wheel drive (AWD) configurations. It is powered by a 2.5L 4-cylinder engine or a 1.5L turbocharged hybrid option, delivering a balance of performance and fuel efficiency. The SUV comes in a variety of colors, has a 55-liter fuel tank, and is equipped with a Continuously Variable Transmission (CVT) for smooth acceleration.', '2026-04-21 08:14:19', '2026-04-21 08:14:19'),
(37, 'Nissan', 'Pathfinder', '[{\"trim\":\"S 2WD\",\"price\":\"164999\"},{\"trim\":\"S 4WD\",\"price\":\"179999\"},{\"trim\":\"SV 2WD\",\"price\":\"192999\"},{\"trim\":\"SV 4WD\",\"price\":\"206999\"},{\"trim\":\"SL 4WD\",\"price\":\"227999\"}]', NULL, 'SUV', 'Mid-size', '2026', '[\"White \",\" Silver \",\" Grey \",\" Black \",\" Red \",\" Blue \",\" Green \",\" Beige \",\" Brown\"]', '[\"Petrol\"]', '[\"10.2\"]', '[\"3.5\"]', 70, '[\"6\"]', 'new', '0', 'Automatic', 5, 180, 500, 198, '[\"9\"]', '[\"271\"]', 'cars/4E0fSJmHCX4jgMSmIzTvCgtQyY5vGX0y64tNuYAI.png', 'cars/SubFZ2BYrNMBXlnzYYNObZHoyeE3nG81vRqEDwjI.png', 'cars/w7yo3nFpbwXxnEYz9LecWVliq8SzzmRNZnpnVbh2.jpg', 'cars/nIhuUMq3NQIcJwbTVoRXwIXPudgGNbAC14MDJdvs.jpg', 'leasing', 0, '164999', 'Khobar', '1', 'The 2025 Nissan Pathfinder is a midsize SUV designed for versatility, comfort, and adventure. It features a spacious interior, modern technology, and capable performance for both urban driving and off-road exploration.', '2026-04-13 23:50:49', '2026-04-13 13:50:49'),
(42, 'Toyota', 'Corolla Hybrid', '[{\"trim\":\"1.8 XLI HYBRID\",\"price\":\"88780\"},{\"trim\":\"1.8 XLI Executive HYBRID MR\",\"price\":\"98555\"}]', NULL, 'Sedan', 'Compact', '2026', '[\"White\",\"Black\",\"Red\",\"Gray\"]', '[\"Petrol\"]', '[\"30.3\"]', '[\"1.8\"]', 47, '[\"4\"]', 'new', '0', 'Automatic', 4, 145, 463, 178, '[\"10\"]', '[\"121\"]', 'cars/EoU2NkApXwvcED8i92AvV5fzFLBN9Hn7h3PFHvjP.png', 'cars/AeQz0ORtDqpdobHxRXN4xUQl7B8mMvuJgg9y0fIv.png', 'cars/0FB6hMCoKPUyikA1w5UQJc1JQbm9D44TeZ5CI4Ha.png', 'cars/ZIISeXKjB6pIX6hq1k3NiVQ0VHB6SuvGQFt0IgLR.png', 'leasing', 0, '88780', 'Khobar', '1', 'The 2026 Toyota Corolla combines modern design, advanced technology, and exceptional reliability. Highlights include a refreshed exterior, a 10.5-inch touchscreen with wireless connectivity, efficient powertrain options (including hybrid models), enhanced safety features with Toyota Safety Sense™ 3.0, and a spacious, comfortable interior. It\'s a perfect blend of innovation and practicality for every journey.', '2026-04-14 00:26:17', '2026-04-13 14:26:17'),
(45, 'Toyota', 'Innova', '[{\"trim\":\"GL\",\"price\":\"123740\"},{\"trim\":\"VIP\",\"price\":\"145475\"}]', NULL, 'SUV', 'SUV', '2026', '[\"red,black,white,silver,gray,blue\"]', '[\"Petrol\"]', '[\"15.9\"]', '[\"2.0\"]', 52, '[\"4\"]', 'new', '0', 'Automatic', 5, 178, 476, 184, '[\"10\"]', '[\"172\"]', 'cars/M0wqV5qgB16bCGsZIknsYig7VDiv1NRuwoWkDmS2.png', 'cars/BX3XfXyG5BeP2ahfuNMxLAARiXFnjvtiRmBc2gHZ.webp', 'cars/y1UtN72GgQc86r789cg4EN8xPilLVoalOHIWM3Av.webp', 'cars/S30YlB9FQpq2a8JKX7fH6hNztEr0MCGkNHRk1WYR.webp', 'leasing', 0, '123740', 'Khobar', '1', 'ALI', '2026-04-14 00:25:59', '2026-04-13 14:25:59'),
(46, 'Toyota', 'Innova Hybrid', '[{\"trim\":\"GL HEV\",\"price\":\"133400\"}]', NULL, 'SUV', 'SUV', '2026', '[\"red,black,white,silver,gray,blue\"]', '[\"Petrol\"]', '[\"23.7\"]', '[\"2.0\"]', 52, '[\"4\"]', 'new', '0', 'Automatic', 5, 179, 476, 185, '[\"10\"]', '[\"184\"]', 'cars/8guzePE4sbj3Eo6loRU8YyvGgrBFZK2l9dhAz6iS.png', 'cars/QCtgESIBbKhuEapveLRhWPoXemFAeMu13xffRdBB.jpg', 'cars/VjAQbq9P3X9w6k8GFOKgKRxnA0xLXqppFJ79BD6O.jpg', 'cars/dBefLEzl72nNkwZvXBbYX5TkHRMYLHKmbR5Ao4q2.webp', 'leasing', 0, '133400', 'Khobar', '1', 'ALI', '2026-04-14 00:25:36', '2026-04-13 14:25:36'),
(62, 'Chevrolet', 'Tahoe', NULL, '{\"1\":{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}}', 'SUV', 'Full-Size', '2025', '[\"Black\",\"White\",\"Red\",\"Gray\"]', '[\"Petrol\"]', '[\"5.9\"]', '[\"5.3\",\"6.2\"]', 91, '[\"8\"]', 'new', '0', '[\"Automatic\"]', 5, 192, 536, 206, '[\"10\"]', '[\"355\"]', 'cars/HfNrSEgwZMuEHPcNApDsBmzs9bh3qt26eUy1ekjn.png', 'cars/R7AEBc03Ab00gEk9NTATvKi9dOeueaX57IBpbE5w.png', 'cars/YPV09CSTKje01G0Rsz9FTmMeCa2g6ApvkVYxYJsk.png', 'cars/NKzSl4mmsLQwYtv8CA71bNngU6XiQdagRawk1XCn.png', 'leasing', 0, '248900', 'Khobar', '1', 'Discover a wide selection of high-quality vehicles designed to suit every lifestyle and budget. Our curated lineup features the latest models from leading automotive brands, offering exceptional performance, advanced safety technologies, and modern comfort. Whether you\'re searching for a reliable family SUV, an efficient sedan, or a powerful work-ready pickup, we make it easy to compare, choose, and drive home the perfect car. With transparent pricing, trusted service, and a seamless buying experience, we ensure you enjoy confidence and convenience at every step.', '2026-04-12 06:22:14', '2026-04-12 06:22:14'),
(63, 'GMC', 'Yukon', NULL, '{\"1\":{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}}', 'SUV', 'SUV', '2025', '[\"Black\",\"White\",\"Red\",\"Gray\",\"Blue\"]', '[\"Perol\"]', '[\"7.9\"]', '[\"5.3 \",\" 6.2\"]', 91, '[\"8\"]', 'new', '0', '[\"Automatic\"]', 5, 194, 533, 205, '[\"10\"]', '[\"355\"]', 'cars/InstLmVorUyKqTfOV5o8aQ386jhSyglgIbRj8NUu.png', 'cars/CZOSA8LaYTEtqqG4sRCV54nBApGOP7Py7DLPSPyt.png', 'cars/xpv4TZRecBLyX6qZmHPfSGXcPC5kwwyAo14rOruL.png', 'cars/5s5KigAOHzxL1ILfTLBoKNl1bPTR8iTKf8EbF40Y.png', 'leasing', 0, '263800', 'Khobar', '1', 'Experience the bold and commanding presence of the GMC Yukon, a full-size SUV that combines premium luxury with rugged capability. Available with two powerful V8 engines — a 5.3 L and an available 6.2 L — the Yukon delivers up to 420 hp and is paired with a smooth 10-speed automatic transmission. Its expansive dimensions (533 cm length, 206 cm width, 194 cm height) provide generous space for passengers and cargo, while the 91 L fuel tank ensures long-range confidence for everyday drives or weekend adventures. With advanced safety features, upscale interior touches, and a choice of sophisticated exterior colors tailored for the Saudi market, the Yukon stands out as a top-tier SUV for families who refuse to compromise on power or elegance.', '2026-04-12 06:22:14', '2026-04-12 06:22:14');
INSERT INTO `cars` (`id`, `car_brand`, `car_model`, `car_edition`, `car_features`, `car_type`, `car_sub_type`, `car_man_year`, `car_color`, `car_fuel`, `car_fuel_consumption`, `car_engine_capacity`, `car_fuel_capacity`, `car_cylinders`, `car_condition`, `car_mileage`, `car_transmission`, `car_doors`, `car_height`, `car_length`, `car_weight`, `car_speeds`, `car_horsepower`, `car_front_view`, `car_rear_view`, `car_side_view`, `car_interior_view`, `service_type`, `is_auction`, `car_price`, `car_location`, `car_status`, `car_description`, `updated_at`, `created_at`) VALUES
(69, 'Mitsubishi', 'Outlander', NULL, '{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}', 'SUV', 'SUV', '2023', 'blue', 'Petrol', NULL, '2.5', 91, '4', 'used', '136000', 'Automatic', 4, NULL, NULL, NULL, '8', '181', 'cars/l9cZ3TJKRVk9ozcevjWGvVpEq5WBdyvjKN6mjThu.png', 'cars/nH3gn0IponTvWhM9XQKYSU4UlE5lu4ml25vbdlxW.png', 'cars/OaBOEEHhUgdMz8GfpKJlR75p7qo9tUbBzyPs1Vo2.png', 'cars/QRfUJ6qJCwykRXuYbbYulZWVH1dWPYte3NECic9h.png', 'selling', 0, '75000', 'Khobar', '0', 'يوجد رش في الشنطة والباب الخلفي يسار', '2026-07-26 23:55:09', '2026-07-26 13:55:09'),
(70, 'Mitsubishi', 'Outlander', NULL, '{\"Exterior Features\":[\"4X4\"],\"Interior Features\":[\"7 \\u0631\\u0643\\u0627\\u0628\"],\"Safety Features\":[]}', 'SUV', 'SUV', '2023', 'silver', 'Petrol', '14.6L', '2.5', 91, '4', 'used', '76000', 'Automatic', 4, NULL, NULL, NULL, '6', '181', 'cars/wqXiy7uULeVjK0haI0wnL53uhFUNilVeII0MmbuJ.png', 'cars/FO8kVk1GAh8bvkgmMKQEx44HMSpcNkRINgefXJQp.png', 'cars/L153i1HV5d4SHyPBuBxvsoYz1DxsHxqRHrSxOiyo.png', 'cars/dFWRcNR0OFECpDLUT6jkKHotRt0UkKYxTtvwEHsU.png', 'selling', 0, '65000', 'Khobar', '0', 'بدي وكالة', '2026-05-06 00:20:57', '2026-05-05 14:20:57'),
(74, 'Toyota', 'Land Cruiser Prado', NULL, '{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}', 'SUV', 'SUV', '2024', 'white', 'Diesel', '14.1L', '2.4', 0, '4', 'used', '50000', 'Automatic', 4, NULL, NULL, NULL, '6', '201', 'cars/h4i8EcG7upFlcYmEOwSRA6sxob0KUkLBaf0Zi7OA.png', NULL, NULL, NULL, 'selling', 0, '185000', 'Khobar', '0', NULL, '2026-05-06 00:20:52', '2026-05-05 14:20:52'),
(91, 'Mitsubishi', 'Outlander', NULL, '{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}', 'SUV', 'Used', '2023', 'رصاصي', 'Petrol', NULL, '2.5', NULL, '4', 'used', '40000', 'Automatic', 4, NULL, NULL, NULL, '6', '181', 'cars/uuZTpvdNk2yVQFvqnlb8jxoa4TVsHVaDFH2YZCii.png', '', NULL, NULL, 'selling', 0, '70000', 'Khobar', '0', NULL, '2026-04-22 01:59:17', '2026-04-21 15:59:17'),
(92, 'Toyota', 'Corolla', NULL, '{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}', 'Sedan', 'Used', '2020', 'white', 'Petrol', NULL, '1.6', NULL, '4', 'used', '170000', 'Automatic', 4, NULL, NULL, NULL, '6', NULL, 'cars/Zyb9QelIoX3cLYf9A4Lwz3dPQQczxEAIVxlELrH5.png', '', NULL, NULL, 'selling', 0, '43000', 'Khobar', '1', 'يوجد صبغ متفرق', '2026-10-07 19:29:32', '2026-10-07 09:29:32'),
(96, 'Toyota', 'Corolla', NULL, '{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}', 'Sedan', 'Used', '2022', 'gray', 'Petrol', '19.6L', '1.5', NULL, '3', 'used', '170000', 'Automatic', 4, NULL, NULL, NULL, '6', '119', 'cars/94XDMH8zIrOn8CxhEgHAGMthLEiRJ94alvmuE9kD.png', '', NULL, NULL, 'selling', 0, '45000', 'Khobar', '0', 'رش شنطة / جزء من رفرف خلفي يسار', '2026-04-21 08:19:37', '2026-04-21 08:19:37'),
(98, 'Nissan', 'Patrol', NULL, '{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}', 'SUV', 'Used', '2022', 'white', 'Petrol', '8.5L', '4.0', NULL, '6', 'used', '108000', 'Automatic', 4, NULL, NULL, NULL, '6', '275', 'cars/YnbkU73BcTgUIWW97TfpGG0ExvNQqyG0z2iVmzBO.png', '', NULL, NULL, 'selling', 0, '115000', 'Khobar', '1', 'رش رفرف امامي يسار / رش رفرف امامي يمين / رش جزء صغير من الكبوت', '2026-10-07 19:15:53', '2026-10-07 09:15:53'),
(99, 'Toyota', 'Fortuner', NULL, '{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}', 'SUV', 'Used', '2023', 'black', 'Diesel', '14.7L', '2.4', NULL, '4', 'used', '191000', 'Automatic', 4, NULL, NULL, NULL, '6', '147', 'cars/wn4hkjNn9XWGxcqiNNsbCaUlh6AIxuUFvN5V1q26.png', '', NULL, NULL, 'selling', 0, '95000', 'Khobar', '0', 'يوجد رش رفرف وباب امامي يسار / رش رفرف خلفي يسار / شنطة', '2026-04-21 08:19:55', '2026-04-21 08:19:55'),
(100, 'Mitsubishi', 'Pajero', NULL, '{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}', 'SUV', 'Used', '2020', 'brown', 'Petrol', '10.5L', '3.5', NULL, '6', 'used', '236000', 'Automatic', 4, NULL, NULL, NULL, '6', '186', 'cars/5Sx7sNmkm41dHoPUS2yssLIzGYP7rzClyToFoJgk.png', 'cars/hUKvWQDs73w4xQ6CltImCbtJj4h11tM1t3jWWXQt.png', 'cars/vYvruSgB6nbl00BSpEpcvztZGQeOiveyhen16J41.png', 'cars/RW2MaFDI7H8Ykv2x5w9CBWlWYzXC9cpNyyCY4XlX.png', 'selling', 0, '50000', 'Khobar', '0', 'بدي وكالة', '2026-05-06 00:21:14', '2026-05-05 14:21:14'),
(101, 'Chevrolet', 'Superban', NULL, '{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}', 'SUV', 'Used', '2022', 'خمري', 'Petrol', '10.2', '5.3', NULL, '8', 'used', '257000', 'Automatic', 4, NULL, NULL, NULL, '10', '355', 'cars/Ej1Jek8FdKCMfqpaoyN3XJJoKRcpFSVpW7qzGyQ5.png', '', NULL, NULL, 'selling', 0, '115000', 'Khobar', '0', 'رش رفرف خلفي يسار', '2026-04-12 06:22:14', '2026-04-12 06:22:14'),
(104, 'Toyota', 'Hiace', NULL, '{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}', 'Bus', 'Used', '2022', 'white', 'Diesel', '11.5L', '2.8', NULL, '4', 'used', '500000', 'Manual', 4, NULL, NULL, NULL, '6', '161', 'cars/uOQDBEdsZv94rNi5solDlGtkhyLhUXSs09NxjrRu.png', '', NULL, NULL, 'selling', 0, '115000', 'Khobar', '0', 'بدي وكالة', '2026-04-21 08:14:57', '2026-04-21 08:14:57'),
(105, 'Toyota', 'HILUX', NULL, '{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}', 'Pick-Up', 'Used', '2021', 'white', 'Diesel', 'L14.9', '2.4', NULL, '4', 'used', '222800', 'Manual', 4, NULL, NULL, NULL, '6', '148', 'cars/alLzGTFtmkHHJzOt4dYpaKQh7xaUyKDb7G7ZLLXE.png', '', NULL, NULL, 'selling', 0, '75000', 'Khobar', '0', 'بدي وكالة', '2026-04-12 06:22:14', '2026-04-12 06:22:14'),
(106, 'Toyota', 'HIACE', NULL, '{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}', 'Bus', 'Used', '2022', 'white', 'Diesel', '11.5L', '2.8', NULL, '4', 'used', '325000', 'Manual', 4, NULL, NULL, NULL, '6', '161', 'cars/sCCN4RVpSBbjWuAbTfQd2TgWTJ2xNoMhdgtltLf2.png', '', NULL, NULL, 'selling', 0, '120000', 'Khobar', '0', 'بدي وكالة', '2026-04-21 08:15:04', '2026-04-21 08:15:04'),
(107, 'Toyota', 'Corolla', NULL, '{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}', 'Sedan', 'Used', '2021', 'white', 'Petrol', '19.6L', '1.5', NULL, '3', 'used', '256000', 'Automatic', 4, NULL, NULL, NULL, '6', '119', 'cars/5nymwf6lZpvJIvc336KwIBnU8SqiEzmWGKiJUuGo.png', '', NULL, NULL, 'selling', 0, '44000', 'Khobar', '1', 'يوجد رش بالشنطة الخلفية', '2026-10-07 19:26:28', '2026-10-07 09:26:28'),
(109, 'Toyota', 'Prado', NULL, '{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}', 'SUV', 'Used', '2024', 'white', 'Petrol', '14.1L', '2.4', NULL, '4', 'used', '100000', 'Automatic', 4, NULL, NULL, NULL, '6', '201', 'cars/ghqnoongj9YqQ7Cy7V0hgN85FRtfRzToGZ2nQdeU.png', '', NULL, NULL, 'selling', 0, '155000', 'Khobar', '0', 'بدي وكالة', '2026-04-12 06:22:14', '2026-04-12 06:22:14'),
(110, 'Toyota', 'Hiace Highroof', NULL, '{\"Exterior Features\":[],\"Interior Features\":[],\"Safety Features\":[]}', 'Bus', 'Used', '2022', 'white', 'Diesel', '11.5L', '2.8', NULL, '4', 'used', '388000', 'Manual', 4, NULL, NULL, NULL, '6', '161', 'cars/VTFHxHbNCMYvj3rZwNOfCyKLz2up0Ema18YOHZll.png', '', NULL, NULL, 'selling', 0, '118000', 'Khobar', '0', 'بدي وكالة', '2026-04-21 08:15:21', '2026-04-21 08:15:21'),
(111, 'Toyota', 'Corolla', '1.6 XLI', NULL, 'Sedan', NULL, '2020', 'silver', 'Petrol', NULL, '1.6', NULL, NULL, 'used', '169500', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/ppS8G1FSTgftYc4J3Pjz4xMks4khw2qHTkFPFUQ9.png', 'cars/RbvAfGs5EdWg3wu19w7gisYvmSmuinJ3LJVpFMys.png', 'cars/WLp1lRzuRLegqhClHYv5LmtnMdIjTziMk2vNx7YJ.png', 'cars/j3voiN39OXZ8x06l9uUECZSplGNK913PB3mV1ZBt.png', 'selling', 0, '43000', 'Al Khobar', '0', NULL, '2026-07-03 03:55:22', '2026-07-02 17:55:22'),
(112, 'Toyota', 'Corolla', '1.5 XLI', NULL, 'Sedan', 'Compact', '2022', 'silver', 'Petrol', NULL, '1.5', NULL, NULL, 'used', '260000', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/uzj9X4AQLcC1sq6zrIbVkXyfQoa4uryM8dCjjnoc.png', NULL, NULL, NULL, 'selling', 0, '43000', 'Al Khobar', '0', NULL, '2026-07-03 03:55:18', '2026-07-02 17:55:18'),
(114, 'Toyota', 'Hilux', 'GL 4X2', NULL, 'Pick-Up', NULL, '2022', 'white', 'Diesel', NULL, '2.4', NULL, NULL, 'used', '300000', 'Manual', 4, NULL, NULL, NULL, NULL, NULL, 'cars/JUv6sJnSAJrrRfaJfwI3S9Z1tKeZGAKsfjhFDLbv.png', 'cars/Mc4iF2NiIigljevQfQmm86y10wpiFbYwTTFg0rYZ.png', 'cars/62L3ccCaTMqniYl6GXQMoZlfHiVeInEq4fnUZ9MX.png', 'cars/Z8ushdwO7gZ7Wdzss7yIbPIinoYaquUvikzhUaSn.png', 'selling', 0, '62000', 'Al Khobar', '0', NULL, '2026-04-23 01:56:51', '2026-04-22 15:56:51'),
(115, 'Toyota', 'Fortuner', '4x4', NULL, 'SUV', NULL, '2022', '#ffffff', 'Diesel', NULL, '2.4', NULL, NULL, 'used', '280000', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/CqN5TMH8teSEWocPK2SACCz92SD0zTZg61etX897.png', NULL, NULL, NULL, 'selling', 0, '80000', 'Al Khobar', '0', NULL, '2026-04-23 01:55:49', '2026-04-22 15:55:49'),
(116, 'Toyota', 'Fortuner', '4x4', NULL, 'SUV', NULL, '2022', '#000000', 'Diesel', NULL, '2.4', NULL, NULL, 'used', '235000', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/A6jloYzF1Kq57Y5LlJ3ZqfXzEYv5G3m7oA6LP4Tp.png', NULL, NULL, NULL, 'selling', 0, '82000', 'Al Khobar', '0', NULL, '2026-04-23 01:55:56', '2026-04-22 15:55:56'),
(117, 'Toyota', 'Corolla', 'ستاندر', NULL, 'Sedan', NULL, '2022', '#f6f8fb', 'Petrol', NULL, '1.5', NULL, NULL, 'used', '260000', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/962baNVMVZOBpeyoc5KLHNAU1tairDPsZG3I0NeA.png', NULL, NULL, 'cars/gDAMADT8bJWaZDQBvNUVI4vZ0tvnO2wmT9pQFhF5.png', 'selling', 0, '44000', 'Al Khobar', '0', 'بدي وكالة', '2026-06-09 23:00:18', '2026-06-09 13:00:18'),
(118, 'Toyota', 'Corolla', 'ستاندر', NULL, 'Sedan', NULL, '2020', 'SILVER', 'Petrol', NULL, '1.5', NULL, NULL, 'used', '169000', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/kTCYfrdZXfna8bPK52HEaisH6vvOrgqvv0hSMyBb.png', NULL, NULL, 'cars/Fh9Q1kEesXIGVMy8jfebbPV8dWqMlx7wZDz34dgb.png', 'selling', 0, '44000', 'Al Khobar', '0', 'رش متفرق', '2026-05-06 00:31:24', '2026-05-05 14:31:24'),
(119, 'Toyota', 'HILUX 4X2', 'GL', NULL, 'Pick-Up', NULL, '2022', 'white', 'Diesel', NULL, '2.4', NULL, NULL, 'used', '435000', 'Manual', 4, NULL, NULL, NULL, NULL, NULL, 'cars/Hc9LJEYxtfyHFU2DfH6lKM2l1hDtBIoas7eRdONW.png', NULL, NULL, NULL, 'selling', 0, '65000', 'KHOBAR', '0', NULL, '2026-05-06 20:04:51', '2026-05-06 10:04:51'),
(120, 'Toyota', 'Rav4', 'STD 4X4', NULL, 'SUV', NULL, '2023', '#aaa7a7', 'Petrol', NULL, '2.0', NULL, NULL, 'used', '136000', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/NEXwB3IUIOrTVNch16qRWSnmc9lfNS3yoQkM7HUL.png', NULL, NULL, 'cars/XIRrfurpDhXMxiMppWdbwayHPcnj670kU9XgB14F.png', 'selling', 0, '83000', 'KHOBAR', '0', NULL, '2026-05-17 18:31:33', '2026-05-17 08:31:33'),
(121, 'Toyota', 'Corolla', 'XLI 1.5', NULL, 'Sedan', NULL, '2022', '#ffffff', 'Petrol', NULL, '1.5', NULL, NULL, 'used', '119000', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/1Kafv6ZFaAUFdhqj1ajzb63iuRHEHw7RwY3P5FjI.png', NULL, NULL, 'cars/ZxPBqyV6g0PvHotXdsrZdnuVyxR5O3Gq6y9TYsaO.png', 'selling', 0, '42000', 'KHOBAR', '1', NULL, '2026-10-07 19:18:47', '2026-10-07 09:18:47'),
(122, 'KIA', 'SPORTAGE', '4X4', NULL, 'SUV', NULL, '2020', '#ffffff', 'Petrol', NULL, '2.0', NULL, NULL, 'used', '300000', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/4WmRsPQEGWF9PCsqwjMzhQbGodqGarxOkmFDeVnm.png', NULL, NULL, 'cars/p3TdYJNktDD9tf7O10wsNs9LWUs1AS2ZI53GPDGI.png', 'selling', 0, '47000', 'KHOBAR', '0', NULL, '2026-07-03 03:55:08', '2026-07-02 17:55:08'),
(123, 'Toyota', 'Land Cruiser', 'GX-2', NULL, 'SUV', 'Full-size', '2026', 'blue', 'Petrol', '10.1', '3.5', 110, '6', 'new', '0', 'Automatic', 5, 194, 511, 198, '10', '403', 'cars/VaQ6GfJ4N4qoWmeAQyfbFzK0y3szOJiSEVhA7wsf.png', 'cars/V8RzHyYhsIIP420IKW8mNYGmdeLtuLsTQ8Ylyx28.jpg', 'cars/rNWf758oQghFTwd1gimPr7KXFNWKJO3hr4bMJ05F.webp', 'cars/YNOupCthfeKXczXbGxCJEzgjoEWPGGFJ14wxk1HY.webp', 'selling', 1, '252770', 'Khobar', '1', NULL, '2026-05-11 08:23:42', '2026-05-11 08:23:42'),
(124, 'Toyota', 'Fortuner', 'GX', NULL, 'SUV', NULL, '2022', 'white', 'Diesel', NULL, '2.4', NULL, NULL, 'used', '364000', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/koUe2oIVgCzt5BAzgIfkqPhWpnshIoqhNzWGilQm.png', NULL, NULL, NULL, 'selling', 0, '80000', 'KHOBAR', '0', 'بدي وكالة', '2026-05-17 18:31:27', '2026-05-17 08:31:27'),
(125, 'Toyota', 'Fortuner', 'GX', NULL, 'SUV', NULL, '2022', 'white', 'Diesel', NULL, '2.4', NULL, NULL, 'used', '286000', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/m7f9XcNFKCzQcdTFK4zwberoe5DMbKdGT6s6Ogj7.png', NULL, NULL, NULL, 'selling', 0, '83000', 'KHOBAR', '0', 'بدي وكالة', '2026-05-17 18:31:22', '2026-05-17 08:31:22'),
(126, 'Toyota', 'Fortuner', 'GX', NULL, 'Sedan', NULL, '2022', 'white', 'Petrol', NULL, '2.7', NULL, NULL, 'used', '155000', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/YZ18IoE7HtRnzvavBY7lcnGNRveBi930wS4DRafk.png', NULL, NULL, NULL, 'selling', 0, '85000', 'KHOBAR', '0', 'رش جزء من كبوت', '2026-05-17 18:31:16', '2026-05-17 08:31:16'),
(127, 'Chevrolet', 'Tahoe LS', '4X2', NULL, 'SUV', NULL, '2023', 'Black', 'Petrol', NULL, '5.3', NULL, NULL, 'used', '157000', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/HqqIKUpcLBy3HolyI3jf9wahATf0iLHmD5Rwi830.png', NULL, NULL, NULL, 'selling', 0, '135000', 'KHOBAR', '0', NULL, '2026-07-26 23:55:05', '2026-07-26 13:55:05'),
(128, 'Toyota', 'FJ Cruiser', '4X4 Type 1', NULL, 'SUV', NULL, '2023', 'white', 'Petrol', NULL, '3.5', NULL, NULL, 'used', '127000', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/rJeLwFt2lFBjlBuTWQFDv70zExcNUVGe1eOMqBIi.png', NULL, NULL, NULL, 'selling', 0, '160000', 'Al Khobar', '0', NULL, '2026-10-07 19:14:40', '2026-10-07 09:14:40'),
(129, 'Toyota', 'Land Crusier', 'L2', NULL, 'SUV', NULL, '2022', 'white', 'Petrol', NULL, '3.5', NULL, NULL, 'used', '249000', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/ZvXakOvYA2Bt0LZwlmWXdtWK0fB3BiLF1t90X8kR.png', NULL, NULL, NULL, 'selling', 0, '190000', 'Al Khobar', '0', NULL, '2026-06-25 21:40:39', '2026-06-25 11:40:39'),
(130, 'Nissan', 'XTRAIL', '4X4', NULL, 'SUV', NULL, '2021', 'White', 'Petrol', NULL, '2.5', NULL, NULL, 'used', '80000', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/UgoVHGCmb7qzFhBQMenHQkfbU17ndYwuEZtlFyL4.png', NULL, NULL, NULL, 'selling', 0, '58000', 'Al Khobar', '0', 'وكالة', '2026-06-22 23:07:55', '2026-06-22 13:07:55'),
(131, 'Toyota', 'HIACE HIGHROOF', 'SEATER', NULL, 'Cross-Over', NULL, '2022', 'White', 'Diesel', NULL, '2.8', NULL, NULL, 'used', '493599', 'Manual', 4, NULL, NULL, NULL, NULL, NULL, 'cars/wTxmCumFnoQW9SjYIHifaObRLUOVAjdjDa1BAmq5.png', NULL, NULL, NULL, 'selling', 0, '105000', 'Al Khobar', '0', NULL, '2026-07-03 03:55:04', '2026-07-02 17:55:04'),
(132, 'Toyota', 'Coaster', '23 seater', NULL, 'Cross-Over', NULL, '2020', '#000000', 'Diesel', NULL, '4.2', NULL, NULL, 'used', '277000', 'Manual', 4, NULL, NULL, NULL, NULL, NULL, 'cars/HmFXujM3bGZdHH38ryYn4AARRR8jQ7eXtPU65egK.png', NULL, NULL, NULL, 'selling', 0, '185000', 'KHOBAR', '0', NULL, '2026-09-29 02:32:15', '2026-09-28 16:32:15'),
(133, 'Toyota', 'Corolla', '1.5 XLI', NULL, 'Sedan', NULL, '2022', '#f6efef', 'Petrol', NULL, '1.5', NULL, NULL, 'used', '146666', 'Automatic', 4, NULL, NULL, NULL, NULL, NULL, 'cars/Rj7fEDgeedfoIFr9p7Wes7qIg0TPjrSeirnqqMjo.png', NULL, NULL, NULL, 'selling', 0, '44000', 'KHOBAR', '1', 'رفرف', '2026-10-07 19:17:31', '2026-10-07 09:17:31'),
(134, 'Toyota', 'Land Cruiser', '{\n  \"prices\": {\n    \"monthly\": 2500,\n    \"12_months\": 24000,\n    \"24_months\": 46000,\n    \"36_months\": 66000\n  },\n  \"delivery_location\": \"Riyadh\"\n}', NULL, 'SUV', 'Full-size', '2026', '[\"White\",\" Silver\",\" Black\",\" Red\",\" Gray\"]', '[\"Petrol\",\"Diesel\"]', '[\"10.1\",\"13.3\",\"12.6\"]', '[\"Petrol 3.5\",\"Diesel 3.3\"]', 110, '[\"6\"]', 'new', '0', 'Automatic', 5, 194, 511, 198, '[\"10\"]', '[\"Petrol 403\",\"Diesel 302 \"]', 'cars/VaQ6GfJ4N4qoWmeAQyfbFzK0y3szOJiSEVhA7wsf.png', 'cars/V8RzHyYhsIIP420IKW8mNYGmdeLtuLsTQ8Ylyx28.jpg', 'cars/rNWf758oQghFTwd1gimPr7KXFNWKJO3hr4bMJ05F.webp', 'cars/YNOupCthfeKXczXbGxCJEzgjoEWPGGFJ14wxk1HY.webp', 'rental', 0, '252770', 'Khobar', '1', NULL, '2026-07-28 08:15:22', '2026-07-28 08:15:22');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `cart_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `item_type` varchar(20) NOT NULL,
  `purchase_type` varchar(10) NOT NULL,
  `car_desc` text NOT NULL,
  `car_id` varchar(100) NOT NULL,
  `item_amount` int(11) NOT NULL,
  `purchase_period` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(35) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `cr` text DEFAULT NULL,
  `vat` text DEFAULT NULL,
  `nat_add` text DEFAULT NULL,
  `company` varchar(100) NOT NULL,
  `location` varchar(255) NOT NULL,
  `position` varchar(50) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `name`, `email`, `phone`, `cr`, `vat`, `nat_add`, `company`, `location`, `position`, `updated_at`, `created_at`) VALUES
(10, 'Ahmed Ali', 'info@jadeergulf.com', '570006378', 'clients/Ddgax4ZFzngqsT3V7x5BD1765eeB71XAAuack2a7.pdf', 'clients/iyKetvMOlpmjI8iLZeJQw9cMIyXVqmrfpM95R2XD.pdf', 'clients/2ly1FRN9qymdNhXrxK48eTynVyUs81mvFj5gzZdS.pdf', 'Jadeer United Leasing Co', '1', 'Operation Coordniator', '2026-06-10 11:22:42', '2026-06-09 16:46:41');

-- --------------------------------------------------------

--
-- Table structure for table `client_quotations`
--

CREATE TABLE `client_quotations` (
  `id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `quote_items` longtext NOT NULL,
  `quote_status` varchar(255) NOT NULL DEFAULT 'pending',
  `quote_doc` text DEFAULT NULL,
  `delivered_at` date DEFAULT NULL,
  `seen` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `quote_expiry_date` date DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ;

-- --------------------------------------------------------

--
-- Table structure for table `client_requests`
--

CREATE TABLE `client_requests` (
  `id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `request_items` text NOT NULL,
  `po` text NOT NULL,
  `quotation_id` int(11) NOT NULL,
  `status` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `client_requests`
--

INSERT INTO `client_requests` (`id`, `client_id`, `request_items`, `po`, `quotation_id`, `status`, `created_at`, `updated_at`) VALUES
(2, 2, '[{\"quantity\":2,\"purchase_type\":\"lease\",\"purchase_period\":0,\"sell_price\":\"79350\",\"car_desc\":\"Toyota Corolla 2025 1.5L XLI\"}]', 'PO/nxdGOilNu7Yixe4uwcWdamA9TaOXGqMuqmRiKlpe.pdf', 17, '2', '2025-11-10 16:21:29', '2025-11-10 06:33:51');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `departments` text NOT NULL,
  `locations` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `delivery_notes`
--

CREATE TABLE `delivery_notes` (
  `id` int(11) NOT NULL,
  `client` int(11) NOT NULL,
  `car` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `act_end_date` date DEFAULT NULL,
  `rate` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `doc` text NOT NULL,
  `authorization` text NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'active',
  `notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `delivery_notes`
--

INSERT INTO `delivery_notes` (`id`, `client`, `car`, `start_date`, `end_date`, `act_end_date`, `rate`, `duration`, `doc`, `authorization`, `status`, `notes`, `created_at`, `updated_at`) VALUES
(3, 10, 7, '2026-06-01', '2031-05-31', NULL, 1000, 60, 'deliveryNotes/gm2VYDPgtiLJitQ5HLY0C2wEqFR0ynpGb1Svfxam.jpg', 'deliveryNotes/authorizations/YbRmOgrJ0vBLmYOdfKKI36lrXDkXpmaPLTm3Ghe4.jpg', 'active', 'zzz', '2026-06-09 07:44:57', '2026-06-09 07:44:57'),
(4, 10, 8, '2026-06-01', '2027-05-01', NULL, 2500, 60, 'deliveryNotes/RodW1x2JN0fCPgeQc5tSyAy5Rwk8QeeQPZu1Nrmg.jpg', 'deliveryNotes/authorizations/6ppAkALE2q2FbTEPgmIaIV3wJtB60yefrlFag76c.jpg', 'active', 'zfdsfd', '2026-06-09 10:27:44', '2026-06-09 10:27:44'),
(5, 10, 8, '2026-06-01', '2024-05-01', NULL, 2500, 60, 'deliveryNotes/RodW1x2JN0fCPgeQc5tSyAy5Rwk8QeeQPZu1Nrmg.jpg', 'deliveryNotes/authorizations/6ppAkALE2q2FbTEPgmIaIV3wJtB60yefrlFag76c.jpg', 'finished', 'zfdsfd', '2026-06-09 10:27:44', '2026-06-09 10:27:44'),
(6, 10, 8, '2026-06-01', '2024-05-01', NULL, 2500, 60, 'deliveryNotes/RodW1x2JN0fCPgeQc5tSyAy5Rwk8QeeQPZu1Nrmg.jpg', 'deliveryNotes/authorizations/6ppAkALE2q2FbTEPgmIaIV3wJtB60yefrlFag76c.jpg', 'finished', 'zfdsfd', '2026-06-09 10:27:44', '2026-06-09 10:27:44'),
(7, 10, 8, '2024-05-01', '2027-05-01', '2026-06-17', 2100, 36, 'deliveryNotes/taY8GvnG5tHi2f04EzuKEINEbjwYggjbTYpLOkRx.jpg', 'deliveryNotes/authorizations/hn7mzBMrogGbJFc3pwroJ0x3QEjzpPI3f0PuFtJN.jpg', 'cancelled', 'just because', '2026-06-17 08:34:22', '2026-06-17 08:34:22');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `name_ar` varchar(255) NOT NULL,
  `manager` int(11) NOT NULL DEFAULT 2,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `name_ar`, `manager`, `created_at`, `updated_at`) VALUES
(2, 'IT', 'تقنية المعلومات', 2, '2025-09-24', '2025-09-24'),
(3, 'HR', 'الموارد البشرية', 2, '2025-09-24', '2025-09-24'),
(4, 'Operations', 'العمليات', 2, '2025-09-24', '2025-09-24'),
(6, 'Sales', 'المبيعات', 2, '2025-10-06', '2025-10-06'),
(7, 'Management', 'الإدارة', 2, '2025-10-06', '2025-10-06'),
(8, 'Finance', 'المالية', 2, '2025-10-06', '2025-10-06'),
(9, 'Insurance', 'التأمين', 2, '2025-10-06', '2025-10-06'),
(10, 'Collection', 'التحصيل', 2, '2025-10-06', '2025-10-06'),
(11, 'Trading', 'التجاري', 2, '2025-10-06', '2025-10-06');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` varchar(15) NOT NULL,
  `username` varchar(100) NOT NULL,
  `name` varchar(75) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `nationality` varchar(50) NOT NULL,
  `b_day` date NOT NULL,
  `iqama_expire_date` date DEFAULT NULL,
  `contract_end_date` date DEFAULT NULL,
  `branch` int(11) NOT NULL,
  `department` int(11) NOT NULL,
  `mg_id` varchar(15) NOT NULL,
  `job_description` varchar(150) NOT NULL,
  `start_date` date NOT NULL,
  `type` varchar(20) NOT NULL,
  `admin` int(11) NOT NULL,
  `password` text NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `username`, `name`, `phone`, `email`, `nationality`, `b_day`, `iqama_expire_date`, `contract_end_date`, `branch`, `department`, `mg_id`, `job_description`, `start_date`, `type`, `admin`, `password`, `created_at`, `updated_at`) VALUES
('1044831962', 'abeer_abdallah', 'Abeer Abdallah', '570004276', 'hr@jadeergulf.com', 'Saudi', '2025-10-31', '1970-01-01', NULL, 1, 3, '10819827', 'HR', '2025-08-05', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('1046990949', 'dalal', 'Dalal Alyahya', '570550766', 'dalal@jadeergulf.com', 'Saudi', '0000-00-00', '1970-01-01', NULL, 1, 6, '2162967695', 'Project Manager', '2025-09-01', 'full-time', 0, '$2y$12$ShoCeB6XDxcEEnyXHzMJMOJNocKiVa.rFtlvUiY1JmX1zseyd0ORa', '2025-10-01', '2025-10-01'),
('1064873217', 'abdallah', 'Abdallah Aleed', '561077329', 'insurance@jadeergulf.com', 'Saudi', '1990-01-01', '1970-01-01', '1970-01-01', 1, 9, '2306934908', 'GRO', '1970-01-01', 'full-time', 0, '$2y$12$5cRGUVD2Dm3L57V2m5/4KexUEwuWXq3Ic/EhoVMiq0R.judBWIdRe', '2025-10-01', '2025-10-01'),
('1067005502', 'mjubaily', 'Mohammed Jubaily', '542429904', 'mgubaily@jadeergulf.com', 'Saudi', '0000-00-00', '1970-01-01', NULL, 1, 11, '2597626379', 'Trading Accountant', '2024-03-15', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('10819827', 'yara', 'Yara Jallad', '570008476', 'hr@jadeergulf.com', 'Swedish', '2001-08-21', '1970-01-01', NULL, 1, 3, '2151637861', 'HR', '2024-10-01', 'full-time', 1, '$2y$12$K0WWPVsKmKTRjwdzOpcuw.F4R0boWqHL.tUuWMwZugNDXfVzrIxni', '2025-10-01', '2025-10-01'),
('111111111', 'dawood', 'Dawood Hussain', '570000000', 'info@jadeergulf.com', 'Pakistani', '1980-01-01', '2027-10-01', NULL, 5, 4, '2566577165', 'Mobile Service - Jizan', '2010-01-01', 'Mobile', 0, '$2y$12$kjtlvmmvZCY2pUfl6AKjhuQd2wk4uEIfUgmp9QYcvPE/CMA7CJZHO', '2026-07-15', '2026-07-15'),
('1122992348', 'ali_sinan', 'Ali Sinan', '567844320', 'it@jadeergulf.com', 'Saudi', '1990-01-01', '1970-01-01', '1970-01-01', 1, 2, '990849664', 'IT', '2025-05-04', 'full-time', 0, '$2y$12$0eXFSP/yVIe4wcV5VsrmAuH3tQQNn5saHZewMfQHnT52b4kWGYTou', '2025-10-01', '2025-10-01'),
('1125661890', 'zain', 'Zain Alghamdi', '534370007', 'zainalghamdi@jadeergulf.com', 'Saudi', '1994-04-01', '1970-01-01', '1970-01-01', 1, 7, '2151637861', 'مدير عام', '2019-08-28', 'full-time', 0, '$2y$12$QjycxN70pIAvHZFfNDn4GO62yjNkAP5ARSK7ZGgJQDuXv/cbtXppS', '2025-10-01', '2025-10-01'),
('12345678', 'hassan', 'Hassan Alokhdoodi', '570009376', 'info@jadeergulf.com', 'Saudi', '2000-01-01', '2027-01-01', NULL, 1, 4, '2566577165', 'Mobile Service', '2024-01-01', 'mobile', 0, '$2y$12$q3mi6shsQkvlw9EtQvywxugYdETZCvnUVm0q.s7MqlHRLLbYrLP1G', '2026-04-29', '2026-04-29'),
('123456788', 'turki', 'Turki Abdallah', '500000000', 'info@jadeergulf.com', 'Saudi', '1985-01-01', '2027-01-01', '2027-01-01', 1, 4, '2566577165', 'GRO', '2023-01-01', 'full-time', 0, '$2y$12$Uvlk8nNa4F/2BGlwLYvonOoy/3iNve2bmRx7UbFJQU0ILBaU6ssgq', '2026-04-30', '2026-04-30'),
('2', 'bilal', 'Bilal Ali', '547162045', 'sales@jadeergulf.com', 'Pakistani', '0000-00-00', '1970-01-01', NULL, 1, 6, '2162967695', 'Sales Coordinator', '1970-01-01', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('2110961774', 'mghazwan', 'Mohammed Ghazwan', '503838653', 'supplychain@jadeergulf.com', 'Syrian', '0000-00-00', '2026-01-21', NULL, 1, 11, '2597626379', 'Supply Chain Manager', '2021-09-20', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('2150825343', 'mutlaq', 'Mutlaq Alnahdi', '555936282', 'malnahdi@jadeergulf.com', 'Yemini', '0000-00-00', '2026-01-09', NULL, 1, 6, '2151637861', 'أخصائي تسويق', '2025-07-02', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('2151626088', 'abeer_kanaan', 'Abeer Kanaan', '536507520', 'trading@jadeergulf.com', 'Jordanian', '0000-00-00', '2026-09-26', NULL, 1, 11, '2597626379', 'Trading Admin', '2025-08-01', 'full-time', 0, '$2y$12$0sM9yX9yWOSyqnNcEQZ..ey1LZ0NOto7QXX9sw6KKEYImCrMtEyGW', '2025-10-01', '2025-10-01'),
('2151637861', 'feras', 'Feras Jallad', '568810000', 'feras@jadeergulf.com', 'Syrian', '0000-00-00', '2026-01-13', NULL, 1, 7, '2151637861', 'CEO', '2013-01-01', 'full-time', 0, '$2y$12$2LdRr7HCRfg0rCyYFdu7VutXCizYbZdG7.g5hxH8b5KFFkIqm83bC', '2025-10-01', '2025-10-01'),
('2158055315', 'yaman', 'Yaman Jallad', '583410000', 'yaman@jadeergulf.com', 'Swedish', '1970-01-01', '2025-10-15', '1970-01-01', 1, 7, '2151637861', 'رئيس تنفيدي', '1970-01-01', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('2162967695', 'maisara', 'Maisara Takkaji', '568877769', 'maisara@jadeergulf.com', 'Syrian', '0000-00-00', '2025-02-19', NULL, 1, 6, '2151637861', 'أخصائي إدارة خدمات', '2017-11-01', 'full-time', 0, '$2y$12$2.0q3WutiJcA7hpeBqNRF.wSuKq3oBQ27WrmRjElKa/.7KfAjnpwy', '2025-10-01', '2025-10-01'),
('2184608368', 'anas_alranteesi', 'Anas Alranteesi', '503544701', 'accounts@jadeergulf.com', 'Jordanian', '0000-00-00', '2025-12-22', NULL, 1, 8, '2506756507', 'محاسب', '2024-10-20', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('2188232850', 'nibras', 'Nibras Jallad', '594930000', 'nibras@jadeergulf.com', 'Syrian', '0000-00-00', '2026-01-17', NULL, 1, 4, '2151637861', 'أخصائي ادارة خدمات', '1970-01-01', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('2222027548', 'mdarweesh', 'Mohammed Darweesh', '509054140', 'insurance@jadeergulf.com', 'Syrian', '0000-00-00', '2026-02-17', NULL, 1, 9, '2306934908', 'Insurance Advisor', '2025-07-27', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('222222222', 'thamer', 'Thamer Alatafi', '570000000', 'info@jadeergulf.com', 'Saudi', '1985-01-11', '2027-01-01', NULL, 1, 4, '2566577165', 'Driver', '2010-01-01', 'Mobile', 0, '$2y$12$EwbDM01JMluhXLSMv1Hq1.6AQ2TttRaZMs0hywwFXXARke.3O62lu', '2026-07-15', '2026-07-15'),
('2233748819', 'anas_alshayb', 'Anas Alshayb', '570003748', 'service@jadeergulf.com', 'Syrian', '0000-00-00', '2025-11-14', NULL, 1, 4, '2151637861', 'أخصائي ادارة خدمات', '2023-08-01', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('2248452449', 'nawras', 'Nawras Jallad', '563774495', 'nawras@jadeergulf.com', 'Syrian', '1985-01-01', '2025-08-31', '2027-01-01', 1, 4, '2158055315', 'أخصائي تسويق', '1970-01-01', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('2294842667', 'kussai', 'Kussai Safi', '570854040', 'operations@jadeergulf.com', 'Syrian', '0000-00-00', '2020-10-17', NULL, 1, 11, '2597626379', 'Trading Operations Coordinator', '2022-03-01', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('2298143591', 'amir', 'Amir Asif', '563168000', 'amerasif@jadeergulf.com', 'Pakistani', '0000-00-00', '2025-10-29', NULL, 1, 4, '2566577165', 'أخصائي ادراه خدمات', '2024-05-10', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('2306934908', 'osama', 'Osama Mustafa', '590002352', 'insurance@jadeergulf.com', 'Egyptian', '1970-01-01', '2026-05-04', '1970-01-01', 1, 9, '1125661890', 'أخصائي ائتمان', '1970-01-01', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('2328805219', 'mamoon', 'Mamoon Asaad', '580212117', 'qc@jadeergulf.com', 'Syrian', '1971-01-01', '2025-12-22', '1970-01-01', 1, 8, '2151637861', 'مندوب مبيعات', '1970-01-01', 'full-time', 2, '$2y$12$mIafAjNtVldbJ6g0EYyIbefscLtE.TN1iP6KLoAGg7nQL0gN01WfO', '2025-10-01', '2025-10-01'),
('2409327059', 'ashraf', 'Asharaf Hamdy', '541523204', 'collection@jadeergulf.com', 'Egyptian', '0000-00-00', '2025-12-18', NULL, 1, 10, '1125661890', 'أخصائي أدارة خدمات', '2017-12-01', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('2426387912', 'areza', 'Ali Raza khalid', '547523430', 'areza@jadeergulf.com', 'Pakistani', '1985-01-01', '2025-11-24', '2027-01-01', 1, 4, '2158055315', 'سائق خاص', '2020-01-01', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('2506756507', 'ahmed_elhady', 'Ahmed Alhady', '561014027', 'ahmed@jadeergulf.com', 'Egyptian', '0000-00-00', '2026-05-04', NULL, 1, 8, '2151637861', 'محاسب', '1970-01-01', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('2531288468', 'ghazi', 'Ghazi Kassab', '550076776', 'collection@jadeergulf.com', 'Lebanese', '0000-00-00', '2025-12-29', NULL, 1, 10, '1125661890', 'أخصائي أدارة خدمات', '1970-01-01', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('2566577165', 'ahmed_ali', 'Ahmed Ali', '570006378', 'info@jadeergulf.com', 'Sudanese', '1970-01-01', '2025-10-13', '1970-01-01', 1, 4, '2158055315', 'أخصائي ادارة خدمات', '1970-01-01', 'full-time', 2, '$2y$12$pg3jzmAOnI4qt6vYzTbgXe0cNQlvnvScByvFnEeX2eH/1HW3DsA3K', '2025-10-01', '2025-10-01'),
('2597626379', 'shaher', 'Shaher Jallad', '562812000', 'shaher@jadeergulf.com', 'Kittian', '0000-00-00', '2026-04-05', NULL, 1, 11, '2151637861', 'أخصائي أدارة خدمات', '1970-01-01', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('32164875', 'mohsen', 'Mohsen Shah', '570077156', 'info@jadeergulf.com', 'Pakistani', '1980-01-01', '2027-01-01', '2027-01-01', 2, 4, '2566577165', 'Mobile Service - Riyadh', '2023-01-02', 'mobile', 0, '$2y$12$liQ7sIBAPVOIilKp9gwew.HfpCMTRvo2LzoesFSgsDqhIFKZDRdES', '2026-04-30', '2026-04-30'),
('333333333', 'jihad', 'Jihad Zwaid', '570000000', 'info@jadeergulf.com', 'Saudi', '1985-01-01', '2027-01-01', NULL, 1, 4, '2566577165', 'Driver', '2018-01-01', 'Mobile', 0, '$2y$12$fLUbj9lbioa/6PkH9S9hnO6LXdrgZJdhbPr7z9J6SPBIOGYXS.LPe', '2026-07-15', '2026-07-15'),
('444444444', 'shihab', 'Shihab Anwar', '570000000', 'info@jadeerunited.com', 'Pakistani', '1985-01-01', '2027-01-01', NULL, 4, 4, '2566577165', 'Mobile Service', '2018-01-01', 'Mobile', 0, '$2y$12$I6Os4vzbkg4z2zWuN29VEOBdhv0STArdi2a449rPvB4vmZrqxLibu', '2026-07-15', '2026-07-15'),
('5465465', 'kevin', 'Kevin Carvajal', '570004276', 'info@jadeergulf.com', 'Saudi', '1995-01-01', '2027-01-01', NULL, 8, 4, '2566577165', 'Mobile Service - Khafji', '2024-01-01', 'mobile', 0, '$2y$12$cxDYTW3DIeU.f0t46NdWU.NrBQvaea9wmvLL3QJ6l8L1EMIqMWw8e', '2026-04-30', '2026-04-30'),
('555555555', 'shabeer', 'Mohammed Shabeer', '570000000', 'info@jadeerunited.com', 'Pakistani', '1985-01-01', '2027-01-01', NULL, 1, 4, '2566577165', 'Technician', '2018-01-01', 'Mobile', 0, '$2y$12$dvd/ZVynQpEOLx0muDZ8HORsadi.D.rFJhdn.H28b3S2foUFSJPz.', '2026-07-15', '2026-07-15'),
('556655665', 'randy', 'Randy', '570000000', 'info@jadeerunited.com', 'Lebanese', '1985-01-01', '2027-01-01', NULL, 1, 4, '2566577165', 'Technician', '2018-01-01', 'Mobile', 0, '$2y$12$RSQHi7T3P09rK.f6qCLAPes.nqK4mr69u9Xr1rGd0WjDTHzN2Q11K', '2026-07-15', '2026-07-15'),
('654654213', 'awais', 'Awais Mairza', '570077618', 'ifno@jadeergulf.com', 'Pakistani', '1980-01-01', '2027-01-01', NULL, 4, 4, '2566577165', 'Mobile Service', '2023-01-01', 'mobile', 0, '$2y$12$zXFVfHqeJhCGKUVq9BSlb.Y0aV2euUv9SMZx/5geamFkqgCG5feaW', '2026-04-30', '2026-04-30'),
('65465465465', 'dafallah', 'Dafa\'llah Azhary', '570077630', 'info@jadeergulf.com', 'Sudanese', '1980-01-01', '2027-01-01', NULL, 5, 4, '2566577165', 'Mobile Service - Jazan', '2023-01-01', 'mobile', 0, '$2y$12$TQuXV3U3FYG6z9STscb.TOm5TpAbNN/EKZ/src9VqxPuBRsblOWNG', '2026-04-30', '2026-04-30'),
('65465498798', 'ali_naeem', 'Ali Alnaeem', '570002763', 'info@jadeergulf.com', 'Pakistani', '1985-11-01', '2027-01-01', NULL, 3, 4, '2566577165', 'Mobile Service - Jeddah', '2024-01-01', 'mobile', 0, '$2y$12$xG.dSS/cvDeI5gu.DQ1n0uZM5f.PCybFMidK9S1ivzS5MTaTLLcyO', '2026-04-30', '2026-04-30'),
('666666666', 'noman', 'Mohammed Noman', '570000000', 'info@jadeerunited.com', 'Pakistani', '1985-01-01', '2027-01-01', NULL, 2, 4, '2566577165', 'Mobile Service', '2018-01-01', 'Mobile', 0, '$2y$12$3RVxbJm1zcdoiSRk0OYJwemr8V4cFSvaioLKdrN7CljQn67qzA0iy', '2026-07-15', '2026-07-15'),
('777777777', 'waleed', 'Waleed Khaweer', '570000000', 'info@jadeerunited.com', 'Saudi', '1985-01-01', '2027-01-01', NULL, 4, 4, '2566577165', 'Mobile Service', '2018-01-01', 'Mobile', 0, '$2y$12$8JHMHZd2yhguvILMiEY.9eygssTf4YrEQvkQGElImo1STOIegTBrW', '2026-07-15', '2026-07-15'),
('849849854', 'jawad', 'Jawad', '570000000', 'info@jadeergulf.com', 'Pakistani', '1980-01-01', '0000-00-00', NULL, 9, 4, '2566577165', 'Mobile Service - Turaif', '2023-01-01', 'mobile', 0, '$2y$12$Vi2QaKskt.0d2opv0lUK4eDYH6FUCYo73lHRaccVjzGqADtFbzFvi', '2026-04-30', '2026-04-30'),
('901075728', 'hassan_minalla', 'Hassan Minallah', '563179000', 'procurement@jadeergulf.com', 'Sudanese', '0000-00-00', '2029-01-14', NULL, 1, 11, '2597626379', 'Procurement', '2025-01-07', 'full-time', 0, '$2y$12$LSFM7S-Xa5V67T8JQiF-Pu0lKE53ykkrDbA-mhTCFgDQ4hJYDFR9G', '2025-10-01', '2025-10-01'),
('990849664', 'sabit', 'Mohammed Sabit', '570004759', 'it@jadeergulf.com', 'Sudanese', '1999-08-08', '2026-11-12', '2025-09-30', 1, 2, '1125661890', 'IT', '2024-10-01', 'full-time', 1, '$2y$12$LPbkaTcmSX1lbKqML7wTfO59kLI2c8KWerPz/sBYZzN.npaHxtgRq', '2025-10-01', '2025-10-01');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `feature_cars`
--

CREATE TABLE `feature_cars` (
  `car_id` int(11) NOT NULL,
  `feat_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fleet_cars`
--

CREATE TABLE `fleet_cars` (
  `id` int(11) NOT NULL,
  `plate` varchar(20) NOT NULL,
  `brand` varchar(20) NOT NULL,
  `model` varchar(20) NOT NULL,
  `man_year` varchar(4) NOT NULL,
  `mvpi` date DEFAULT NULL,
  `reg_date` date DEFAULT NULL,
  `color` varchar(20) NOT NULL,
  `trim` varchar(20) NOT NULL,
  `mileage` int(11) NOT NULL,
  `registration` text NOT NULL,
  `insurance` text NOT NULL,
  `image` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `fleet_cars`
--

INSERT INTO `fleet_cars` (`id`, `plate`, `brand`, `model`, `man_year`, `mvpi`, `reg_date`, `color`, `trim`, `mileage`, `registration`, `insurance`, `image`, `created_at`, `updated_at`) VALUES
(7, 'UUR 4262', 'Toyota', 'FJ Cruiser', '2026', '2026-06-17', '2026-06-18', 'White', '-', 999999, 'fleet/plD4joQPlzRjtaw1RqlIRPE30MAzmLcBLWaCo2f9.pdf', 'fleet/2All6syVeV1x5rTHKMtkmO99BCpaUqUa221kvQBu.pdf', 'fleet/w6htto5M53nIZKiujZ8msoIeK5vRGNV93ov0Wb6d.jpg', '2026-06-09 07:24:41', '2026-06-09 07:24:41'),
(8, 'XVD 7272', 'Toyota', 'Corolla', '2023', NULL, NULL, 'black', '1.5 Executive', 0, 'fleet/NwCNKUKiDycrhFnP7zGBrS2Abp3rcAv3DKOSb38C.pdf', 'fleet/EbprCm3KyK3xYnLYPGanUYDtODLIhVePnoYq6Nlp.pdf', 'fleet/VE8qYtKUWX4lBDNsTedLDBmkyyu8USZyWaVaserK.webp', '2026-06-09 10:17:23', '2026-06-09 10:17:23');

-- --------------------------------------------------------

--
-- Table structure for table `homepage`
--

CREATE TABLE `homepage` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL,
  `hero_images` text NOT NULL,
  `feature_cars` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `homepage`
--

INSERT INTO `homepage` (`id`, `text`, `hero_images`, `feature_cars`) VALUES
(1, 'Drive Your Business Forward', '[\"hero_images\\/OCkEQeINKlRwTs0kLd13QN1eILziRCy1SfPuUttt.jpg\"]', '[\"5\",\"9\",\"13\",\"23\",\"35\",\"42\"]');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `type` varchar(30) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `img`, `type`, `created_at`, `updated_at`) VALUES
(1, 'images/KRce6JwyttZ44Vlr3wHDn1WrB6vyp4PR9hht4wpV.png', 'gallery', '2025-08-18', '2025-08-18');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `subject` text NOT NULL,
  `message` text NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `company` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `subject`, `message`, `full_name`, `company`, `email`, `phone_number`, `created_at`, `updated_at`) VALUES
(2, '', 'Hello,\n\nI am working with TotalEnergies in Amiral Project and I am interested in renting a Toyota Highlander or similar.\n\nI would like to know if you have availability of them and prices.\n\nKind Regards,\n\nToksein Hon', 'Toksein Hon', '', 'toksein.hon@external.totalenergies.com', '0541774935', '2026-04-21 10:08:48', '2025-12-08 22:52:53'),
(3, '', 'Dear.Team \n\nI hope this message finds you well.\n\nMy name is Ahmed, Sales Manager at Teltonika Telematics, one of the leading GPS and telematics companies in Europe and Saudi Arabia. We specialize in vehicle tracking solutions and advanced CAN Bus data monitoring that can help automotive businesses optimize fleet management, reduce costs, and improve operational efficiency.\n\nYou can explore our portfolio here: Teltonika GPS Portfolio#https://www.teltonika-gps.com/\n\nWe would be glad to discuss how our solutions can support Jadeer United. Please let us know if you’re interested in a quick call to explore possibilities.', 'ahmed nabih', '', 'ahmed.nabih@teltonika.ae', '00971503483174', '2026-04-21 10:08:38', '2025-12-10 23:33:52'),
(4, '', 'Our system gets your company listed on top of search results almost instantly - no long SEO process, no delay.\nCan I walk you through it on a short call?', 'Marcus Palmer', '', 'marcus.palmer@jmailservice.com', '8054002077', '2026-04-21 10:08:59', '2025-12-12 02:58:26'),
(11, 'General Enquiry', 'The biggest reason affiliate businesses fail isn\'t the product or the website — it\'s the \"traffic drought\". You’ve likely spent hundreds on tools and \"shiny objects,\" only to see zero results and explain to your skeptical family why the business still isn\'t profitable. The pain of watching your Clickbank stats stay at \"zero hops\" while your bank account bleeds from expensive Facebook ads or useless solo ads is enough to make anyone quit.\r\n\r\nhttps://www.novaai.expert/TrafficPanther\r\n\r\nTraffic Panther solves this by giving you the ultimate shortcut: you don\'t have to build an audience; you simply plug into mine. The core benefit is instant access to a \"Traffic Siphon\" that redirects real, verified buyers from Jamie Lewis\'s own YouTube channels and expired domains directly to YOUR affiliate links. For a tiny one-time fee, you bypass the need for technical skills or an ad budget and start seeing traffic that converts at 5% to 20% in seconds.\r\n\r\nhttps://www.novaai.expert/TrafficPanther\r\n\r\n\r\nYou are getting this email \r\nas we think \r\nthe offer we provide \r\ncould be relevant to you.\r\n\r\nIf you don’t want to receive \r\nfurther communications from us, \r\nsimply \r\nunsubscribe from these emails:\r\n\r\nhttps://www.novaai.expert/unsub?domain=jadeerunited.com \r\nAddress: Address: 5036   39 Tennyson Road, NSW  2200\r\nLooking out for you, Faye Hamlett.', 'Faye Hamlett', 'Faye Hamlett', 'hamlett.faye18@gmail.com', '298713849', '2026-04-24 17:03:15', '2026-04-24 17:03:15'),
(15, 'General Enquiry', 'Kaixo, zure prezioa jakin nahi nuen.', 'Roberttep', 'google', 'zekisuquc419@gmail.com', '86197385937', '2026-04-27 18:19:01', '2026-04-27 18:19:01'),
(16, 'Fleet Leasing Enquiry', 'test', 'test', 'test', 'test@jadeergulf.com', '570000000', '2026-05-03 19:29:47', '2026-05-03 19:29:47'),
(17, 'Bulk / Corporate Pricing', 'Hi,\r\n\r\nWhy you need this: to have every campaign, affiliate offer, or project start delivering traffic and income today — without spending a dime on ads or tech headaches. Ghost Pages turns you into a stealth engine that Google absolutely trusts: you build invisible pages using a secret Google asset, and they quietly start delivering targeted visitors — while your competition is nowhere the wiser.\r\n\r\nIt’s easy, it’s fast, it’s genius: no domains, hosting, social media, or technical skills required — if you can click and copy, you can do this. Plus, it really works and scales: launch one Ghost Page and BAM — traffic flows wherever you want: affiliate links, e‑com, leads — you choose. Ready to start in minutes? Discover how and get results that might blow your mind.\r\n\r\nSee it in action: https://dig-ai.pro/GhostPages\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nYou are receiving this message because we believe our offer may be relevant to you. \r\nIf you do not wish to receive further communications from us, please click here to UNSUBSCRIBE:\r\nhttps://dig-ai.pro/unsub?domain=jadeerunited.com \r\nAddress: Address: 1464 Lewis Street Roselle, IL 60177\r\nLooking out for you, Michael Turner.', 'Cecil McIlvain', 'Cecil McIlvain', 'mcilvain.cecil@gmail.com', '668898679', '2026-05-25 20:09:24', '2026-05-25 20:09:24'),
(18, 'Fleet Leasing Enquiry', 'Greetings, \r\n\r\nLooking to boost sales and traffic for jadeerunited.com?\r\n\r\nWe are SEObyAxy, and we provide instant, done-for-you digital growth:\r\n\r\n* Custom Websites & Online Stores\r\n* First Page Google & YouTube Ranking\r\n* High-Quality Backlinks & Organic Traffic\r\n* Social Media Management\r\n\r\nWe deliver real results at the best prices. View our full agency plans here: \r\nhttp://utraker.com/InrHo?hne\r\n\r\nSincerely,\r\nJuliann\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nTo unsubscribe, please reply with subject:  Unsubscribe !jadeerunited.com', 'Juliann Mills', 'Juliann Mills', 'turnerfis.her348382+juliann.mills@gmail.com', '353866499', '2026-06-27 03:18:22', '2026-06-27 03:18:22'),
(19, 'General Enquiry', 'Hai, saya ingin tahu harga Anda.', 'Roberttep', 'google', 'zekisuquc419@gmail.com', '87746448494', '2026-06-29 04:51:05', '2026-06-29 04:51:05'),
(20, 'General Enquiry', 'Здравейте, исках да знам цената ви.', 'Roberttep', 'google', 'zekisuquc419@gmail.com', '86824511811', '2026-07-10 02:13:11', '2026-07-10 02:13:11'),
(21, 'General Enquiry', 'Hello, I hope you are well. We currently have more than 100 units of the 2023 Roewe Hybrid available. We are offering a batch of 100 vehicles at USD 12,000 per vehicle. If your company is interested, we would be pleased to provide photos and complete specifications.\r\nBrand: Roewe\r\nModel Year: 2023\r\nVehicle Type: SUV\r\nPowertrain: Plug-in Hybrid (PHEV)\r\nEngine: 1.5L Turbo with Electric Motor\r\nTransmission: Automatic\r\nModern exterior design with LED lighting\r\nSpacious interior with advanced technology and safety features\r\nExcellent fuel efficiency and reliable performance\r\nThese vehicles are ideal for importers, distributors, dealerships, and fleet buyers. Photos, VIN numbers, and complete technical specifications can be provided upon request.\r\nIf your company is interested in purchasing 100 units or a larger quantity, we would be pleased to discuss the details and establish a long-term business partnership.\r\nWe look forward to hearing from you.\r\nBest regards.', 'salma nihal', 's', 'soso666ghnsj@gmail.com', '+212676677132', '2026-07-21 07:33:35', '2026-07-21 07:33:35'),
(22, 'General Enquiry', 'Break Free From the Ordinary With the $27,000,000 Jackpot https://come.ac/sOWXy', 'CarlosBIB', 'google', 'pascal.van.haver@telenet.be', '81897818434', '2026-07-22 17:46:28', '2026-07-22 17:46:28'),
(23, 'General Enquiry', 'Charitable Donations Transparently Using $1,500 per day or more https://telegra.ph/Collect-cryptocurrency-automatically-every-day-over-1500-Message-ID-502305-07-23', 'CarlosBIB', 'google', 'kaydegilbert@gmail.com', '88922416561', '2026-07-25 02:08:19', '2026-07-25 02:08:19'),
(24, 'Bulk / Corporate Pricing', 'Hello,\r\n\r\nI am Alexander Born from FreeB2BData\r\n\r\nIt is with sad regret to inform you that we are shutting down\r\n\r\nWe have over 252 countries and over 33 million companies available in our database with phone numbers, industries, emails, etc.\r\n\r\nPlease come and download your data in the next 24 hours. \r\n\r\nhttps://Alexander.freeb2bdata.org\r\n\r\nRegards,\r\nAlexander Born', 'Alexander Born', 'Alexander Born', 'info@freeb2bdata.org', '41522208', '2026-09-10 11:02:43', '2026-09-10 11:02:43'),
(25, 'Fleet Leasing Enquiry', 'Howdy from Bonusbacklinks,\r\n\r\nSupercharge your search engine rankings, increase your search visibility and gain powerful backlinks! \r\nBonusBacklinks.com - we build daily backlinks and bring organic clicks to your site every day:\r\n\r\nhttps://bonusbacklinks.com/discount\r\n\r\nTake 85% Discount\r\nTrusted daily backlinks\r\nReal website visits\r\nPrices only from $1\r\nBonus discount codes\r\n\r\nThanks,\r\nSimon from BonusBacklinks', 'Simon Patten', 'Simon Patten', 'simon.patten@yahoo.com', '649438010', '2026-09-25 19:26:05', '2026-09-25 19:26:05');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(4, '2025_01_09_103352_create_cache_table', 0),
(5, '2025_01_09_103352_create_cache_locks_table', 0),
(6, '2025_01_09_103352_create_cars_table', 0),
(7, '2025_01_09_103352_create_cart_table', 0),
(8, '2025_01_09_103352_create_clients_table', 0),
(9, '2025_01_09_103352_create_failed_jobs_table', 0),
(10, '2025_01_09_103352_create_job_batches_table', 0),
(11, '2025_01_09_103352_create_jobs_table', 0),
(12, '2025_01_09_103352_create_password_reset_tokens_table', 0),
(13, '2025_01_09_103352_create_sessions_table', 0),
(14, '2025_01_09_103352_create_test_table', 0),
(15, '2025_01_09_103352_create_trade_requests_table', 0),
(16, '2025_01_09_103352_create_users_table', 0),
(17, '2025_01_09_103352_create_requests_table', 2),
(18, '0001_01_01_000000_create_users_table', 3),
(19, '0001_01_01_000001_create_cache_table', 3),
(20, '0001_01_01_000002_create_jobs_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `mobile__reviews`
--

CREATE TABLE `mobile__reviews` (
  `id` int(11) NOT NULL,
  `employee` varchar(45) NOT NULL,
  `ratings` text NOT NULL,
  `message` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `client_name` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `date_of_service` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `mobile__reviews`
--

INSERT INTO `mobile__reviews` (`id`, `employee`, `ratings`, `message`, `created_at`, `updated_at`, `client_name`, `company`, `position`, `date_of_service`) VALUES
(15, 'hassan', '{\"response_time\":\"3\",\"service_speed\":\"3\",\"staff_behavior\":\"3\",\"interpersonal_skills\":\"3\",\"general_cleanliness\":\"3\",\"overall_rating\":\"3\"}', NULL, '2026-04-30 21:23:36', '2026-04-30 21:23:36', 'aa', 'aa', 'aa', '2026-04-27'),
(16, 'turki', '{\"response_time\":\"3\",\"service_speed\":\"3\",\"staff_behavior\":\"3\",\"interpersonal_skills\":\"3\",\"general_cleanliness\":\"3\",\"overall_rating\":\"3\"}', 'with message', '2026-04-30 21:28:27', '2026-04-30 21:28:27', 'turki', 'turki', 'turki', '2026-04-27');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title_ar` mediumtext NOT NULL,
  `title_en` int(11) NOT NULL,
  `text_ar` mediumtext NOT NULL,
  `text_en` mediumtext NOT NULL,
  `author` varchar(100) NOT NULL,
  `date_added` date NOT NULL,
  `date_modified` date NOT NULL,
  `img` mediumtext NOT NULL,
  `source_text` varchar(50) NOT NULL,
  `link` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `offers`
--

CREATE TABLE `offers` (
  `id` int(11) NOT NULL,
  `img_en` mediumtext NOT NULL,
  `img_ar` mediumtext NOT NULL,
  `car_id` int(11) NOT NULL,
  `expiration_date` date NOT NULL,
  `updated_at` date NOT NULL,
  `created_at` date NOT NULL,
  `title_en` varchar(45) DEFAULT NULL,
  `title_ar` varchar(45) DEFAULT NULL,
  `details_en` text DEFAULT NULL,
  `details_ar` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `offers`
--

INSERT INTO `offers` (`id`, `img_en`, `img_ar`, `car_id`, `expiration_date`, `updated_at`, `created_at`, `title_en`, `title_ar`, `details_en`, `details_ar`) VALUES
(19, 'offers/J1Yv0MUYCi8j24ZavJlHESKi9QK9uw8h3dNOJ0rO.jpg', 'offers/BnRd6fJx2ZqhQSgmHQckxkGBHdjn4TTRQgEfP6X3.jpg', 17, '2026-01-31', '2026-04-19', '2026-01-13', 'Smart Leasing Selection: 2024 Toyota Prado & ', 'خيارات التأجير الذكي: تويوتا برادو 2024 ونيسا', 'The Ultimate Power Duo!\r\nChoose your perfect companion for the road ahead. Whether you prefer the rugged reliability of the Toyota Prado or the sophisticated luxury of the Nissan Patrol, our smart leasing plans for 2026 ensure you start the year with total confidence.\r\nWhy Lease with Jadeer United Motors?\r\n\r\nLong-Term Mobility: Fixed plans for 4 years of worry-free driving.\r\n\r\nSmart Solutions: Flexible leasing options tailored for your lifestyle.\r\n\r\nPremium Support: Professional service from a name you trust.\r\n\r\nContact Us Today:\r\n? Phone: +966 56 887 7769\r\n? Dealer: Jadeer United Motors', 'اختر قوتك المفضلة على الطريق!\r\nنقدم لك نخبة السيارات العائلية والوعرة في عرض واحد. سواء كنت من عشاق تويوتا برادو أو تفضل فخامة نيسان باترول، فإن برامجنا للتأجير الذكي لعام 2026 تمنحك الثقة والتميز في كل مشوار.'),
(20, 'offers/fNQu72yFLJMsJpkUcFO6dq3zcHyMNktByEWphvPO.jpg', 'offers/Qt95noKPLSa8rYBDRJcJZqYyzBIy0HyEYWKuXEPD.jpg', 13, '2026-01-31', '2026-04-19', '2026-01-13', 'Exceptional Value: 2025 Toyota Urban Cruiser ', 'قيمة استثنائية: تويوتا أوربان كروزر 2025 | عر', 'Start the Year with Confidence!\r\nLooking for the perfect city companion? Experience the efficiency and style of the Toyota Urban Cruiser (2025 Model). Our smart leasing program offers you a modern driving experience with long-term mobility and peace of mind.\r\n\r\nOffer Details:\r\n\r\nModel: Toyota Urban Cruiser\r\n\r\nYear: 2025\r\n\r\nMonthly Lease: SAR 1,995\r\n\r\nTerm: 4 Years (48 Months)\r\n\r\nWhy Lease with Jadeer United Motors?\r\nEnjoy the benefits of driving a brand-new 2025 model with affordable monthly payments and a dedicated support team.\r\n\r\nContact Us Today:\r\n? Phone: +966 56 887 7769\r\n? Provider: Jadeer United Motors', 'ابدأ عامك بكل ثقة!\r\nهل تبحث عن الرفيق المثالي للمدينة؟ استمتع بكفاءة وأناقة تويوتا أوربان كروزر (موديل 2025). يمنحك برنامج التأجير الذكي لدينا تجربة قيادة عصرية مع حلول تنقل طويلة المدى تضمن لك راحة البال.\r\n\r\nتفاصيل العرض:\r\n\r\nنوع السيارة: تويوتا أوربان كروزر\r\n\r\nالموديل: 2025\r\n\r\nالقسط الشهري: 1,995 ريال سعودي\r\n\r\nمدة العقد: 4 سنوات\r\n\r\nلماذا تختار التأجير من جدير المتحدة للسيارات؟\r\nاستمتع بمميزات قيادة موديل 2025 الجديد كلياً بأقساط شهرية ميسرة ودعم احترافي من فريقنا المتخصص.\r\n\r\nتواصل معنا اليوم:\r\n? رقم التواصل: 7769 887 56 966+\r\n? المعرض: جدير المتحدة للسيارات'),
(21, 'offers/pBF1U16F7Ak25adLiCYBH2vmUwLXXYBNTyM6US9f.jpg', 'offers/VAGtSmxrDIlybTIpAL1WLWESkeifKSKaiJ4R5Tlg.jpg', 17, '2026-01-31', '2026-04-19', '2026-01-19', 'Smart Leasing: 2024 Toyota Prado TXL Diesel |', 'تأجير ذكي: تويوتا برادو TXL ديزل 2024 | حلول ', 'Start the Year with Confidence! Drive the legendary Toyota Prado TXL Diesel (2024 Model) with our smart leasing plans designed for long-term reliability and comfort. Experience the power of the new Prado without the commitment of ownership.\r\n\r\nOffer Details:\r\n\r\nModel: Toyota Prado TXL Diesel\r\n\r\nYear: 2024\r\n\r\nMonthly Lease: SAR 4,395\r\n\r\nTerm: 4 Years (48 Months)\r\n\r\nWhy Lease with Jadeer United Motors? Our \"Smart Leasing\" program provides you with seamless mobility and financial flexibility, ensuring you\'re always ready for the road ahead.\r\n\r\nContact Us Today: ? Phone: +966 56 887 7769', 'ابدأ عامك بكل ثقة! استمتع بقيادة تويوتا برادو TXL ديزل (موديل 2024) الجديدة كلياً عبر برامج التأجير الذكي المصممة لراحتك. اختبر القوة والفخامة مع حلول تمويلية مرنة تناسب تطلعاتك.\r\n\r\nتفاصيل العرض:\r\n\r\nنوع السيارة: تويوتا برادو TXL ديزل\r\n\r\nالموديل: 2024\r\n\r\nالقسط الشهري: 4,395 ريال سعودي\r\n\r\nمدة العقد: 4 سنوات\r\n\r\nلماذا تختار التأجير من جدير المتحدة للسيارات؟ يوفر لك برنامج \"التأجير الذكي\" مرونة مالية وحلول تنقل متكاملة، لضمان انطلاقة واثقة في كل رحلة.\r\nتواصل معنا اليوم: ? رقم التواصل: 7769 887 56 966+'),
(22, 'offers/lJWM7Mhc74PkqTiaTgy8ZrAR9uPEbUmR89HcNLDQ.jpg', 'offers/PzIh7Ts40Fy1sO0fE7iBs1myKDCex4uBrMd7qUUU.jpg', 35, '2026-01-31', '2026-04-19', '2026-01-19', 'Luxury Leasing: 2026 Nissan Patrol | Smart Mo', 'تأجير الفخامة: نيسان باترول 2026 | حلول تنقل ', 'The Icon of Adventure Awaits!\r\nStart your year with unmatched confidence and prestige. We are offering the Nissan Patrol (2026 Model) through our exclusive smart leasing program. Experience the ultimate SUV with a plan designed for long-term comfort and flexibility.\r\n\r\nOffer Details:\r\n\r\nModel: Nissan Patrol\r\n\r\nYear: 2026\r\n\r\nMonthly Lease: SAR 5,895\r\n\r\nTerm: 4 Years (48 Months)\r\n\r\nWhy Choose Jadeer United Motors?\r\nOur smart leasing options provide a hassle-free way to drive the latest luxury vehicles with fixed monthly payments and professional support.\r\n\r\nContact Us Today:\r\n? Phone: +966 56 887 7769\r\n? Provider: Jadeer United Motors', 'بطل الدروب بانتظارك!\r\nابدأ عامك بكل ثقة وفخامة مع سيارة نيسان باترول (موديل 2026). نقدم لك أقوى عروض التأجير الذكي المصممة لتمنحك الراحة والمرونة التي تستحقها، لتقود أيقونة السيارات العائلية والوعرة بكل سهولة.\r\n\r\nتفاصيل العرض:\r\n\r\nنوع السيارة: نيسان باترول\r\n\r\nالموديل: 2026\r\n\r\nالقسط الشهري: 5,895 ريال سعودي\r\n\r\nمدة العقد: 4 سنوات\r\n\r\nلماذا تختار التأجير من جدير المتحدة للسيارات؟\r\nنمنحك عبر برنامج \"التأجير الذكي\" وسيلة ميسرة لقيادة أحدث السيارات الفاخرة بدفعات شهرية ثابتة وحلول تمويلية تناسب احتياجاتك.\r\n\r\nتواصل معنا اليوم:\r\n? رقم التواصل: 7769 887 56 966+\r\n? المعرض: جدير المتحدة للسيارات'),
(23, 'offers/rWml1h8daklUmuyuzJreAJlTodNhg1KV6yCgsUgO.jpg', 'offers/VDV6hJyJDhyqBudbGAPp1Yncu2qRFPjDyqwSWlkD.jpg', 19, '2026-04-15', '2026-04-19', '2026-03-30', 'Reliable Business Partner: 2025 Toyota Hiace ', 'شريك الأعمال الموثوق: تويوتا هايس 2025 | تميز', 'Start Your Journey with Confidence!\r\nBoost your business operations with the legendary reliability of the Toyota Hiace (2025 Model). This quality pre-owned van is ready for the road, offering the durability and space you need to get the job done.\r\n\r\nOffer Details:\r\n\r\nModel: Toyota Hiace\r\n\r\nYear: 2025\r\n\r\nPrice: SAR 89,500\r\n\r\nNote: Price does not include VAT.\r\n\r\nWhy Choose Jadeer United Motors?\r\nWe provide high-quality, pre-owned vehicles that have been thoroughly inspected to ensure they are ready for immediate use, giving you peace of mind for every mile.\r\n\r\nContact Us Today:\r\n? Phone: +966 56 281 2000\r\n? Dealer: Jadeer United Motors', 'ابدأ رحلتك بكل ثقة!\r\nارتقِ بأعمالك مع الاعتمادية الأسطورية لسيارة تويوتا هايس (موديل 2025). هذه السيارة المستعملة بجودة عالية جاهزة تماماً للانطلاق، وتوفر لك المتانة والمساحة التي تحتاجها لإنجاز مهامك.\r\n\r\nتفاصيل العرض:\r\n\r\nنوع السيارة: تويوتا هايس\r\n\r\nالموديل: 2025\r\n\r\nالسعر: 89,500 ريال سعودي\r\n\r\nملاحظة: السعر لا يشمل ضريبة القيمة المضافة.\r\n\r\nلماذا تختار جدير المتحدة للسيارات؟\r\nنحن نوفر سيارات مستعملة بجودة ممتازة خضعت لفحوصات دقيقة لضمان جاهزيتها التامة، مما يمنحك راحة البال في كل طريق.\r\n\r\nتواصل معنا اليوم:\r\n? رقم التواصل: 2000 281 56 966+\r\n? المعرض: جدير المتحدة للسيارات'),
(24, 'offers/1RfH1YtS4mimsoyOqxFK5wEAwUOHnjfXyjCLNc1Q.jpg', 'offers/EAJvv99QcLJCI1DfFkrFQw7Ncf03tIZwoAW7YqT5.jpg', 11, '2026-04-15', '2026-04-19', '2026-03-30', 'Drive Smart with the Toyota Veloz GLX 2025 –', 'انطلق بذكاء مع تويوتا فيلوز GLX 2025 – أناقة،', 'Step into a modern driving experience with the Toyota Veloz GLX 2025 — a perfect blend of practicality, comfort, and sleek design. Ideal for families and daily commuting, this vehicle offers spacious seating, advanced safety features, and a refined interior that elevates every journey.\r\n\r\nEnjoy smooth performance, fuel efficiency, and Toyota’s trusted reliability, all at an unbeatable value.\r\n\r\n? Price: 76,000 SAR (excluding VAT)\r\n? Contact: +966 56 281 2000\r\n\r\nStart your journey today with confidence — limited availability, so don’t miss out.', 'استمتع بالراحة والعملية والتصميم العصري مع تويوتا فيلوز GLX 2025. سيارة مثالية للعائلات والاستخدام اليومي، توفر مساحة واسعة، أداء سلس، واعتمادية عالية.\r\n? Price | السعر: 76,000 ريال سعودي (غير شامل الضريبة)\r\n? Contact | التواصل: +966 56 281 2000\r\nابدأ رحلتك اليوم بثقة. الكمية محدودة!'),
(25, 'offers/IIPdyYKSGo5N6y7eanc4yTp3D5CgbgEatuKOXgAY.jpg', 'offers/ClFHZ6P4ejWhPbReBAFkOAYkj4xI2I5VBm1rz68l.jpg', 7, '2026-04-15', '2026-04-19', '2026-03-30', 'Drive More, Pay Less with the Chery Arrizo 5', 'سُق أكثر وادفع أقل مع شيري أريزو 5 2026 – الخ', 'Enjoy a perfect balance of efficiency, comfort, and modern styling with the Chery Arrizo 5 2026. Designed for daily driving, this sedan offers a smooth ride, practical features, and great fuel economy — making it an ideal choice for budget-conscious drivers.\r\n? Price | السعر: 39,500 ريال سعودي (غير شامل الضريبة)\r\n? Contact | التواصل: +966 56 281 2000\r\nAffordable, reliable, and ready for the road. Don’t miss this offer!', 'استمتع بتوازن مثالي بين الكفاءة والراحة والتصميم العصري مع شيري أريزو 5 2026. سيارة سيدان مصممة للاستخدام اليومي، توفر قيادة سلسة، مزايا عملية، واستهلاك وقود اقتصادي — مما يجعلها الخيار الأمثل للباحثين عن التوفير.\r\n? Price | السعر: 39,500 ريال سعودي (غير شامل الضريبة)\r\n? Contact | التواصل: +966 56 281 2000\r\nعملية، اقتصادية، وجاهزة للطريق. لا تفوّت العرض!'),
(26, 'offers/SXrsHzry0Hq0QuzzJ0zd2Rql5KqdmJJsSxTB8jsn.jpg', 'offers/BqBTgvx0dPMWQG7AvJwygXPjzoW5ODFM65657SHL.jpg', 15, '2026-04-15', '2026-04-19', '2026-03-30', 'Conquer Every Road with the Renault Duster 20', 'سيطر على كل الطرق مع رينو داستر 2025 – قوة، ع', 'Take on your daily drives and weekend adventures with confidence in the Renault Duster 2025. Built for durability and comfort, this SUV offers strong performance, elevated driving position, and practical space for all your needs — whether in the city or off the beaten path.\r\n? Price | السعر: 49,500 ريال سعودي (غير شامل الضريبة)\r\n? Contact | التواصل: +966 56 281 2000\r\nBuilt to handle more. Ready when you are.', 'استمتع بقيادة يومية ومغامرات نهاية الأسبوع بثقة مع رينو داستر 2025. سيارة SUV مصممة لتحمل الظروف المختلفة، توفر أداء قوي، ارتفاع مناسب عن الأرض، ومساحة عملية تناسب جميع احتياجاتك داخل المدينة وخارجها.\r\n? Price | السعر: 49,500 ريال سعودي (غير شامل الضريبة)\r\n? Contact | التواصل: +966 56 281 2000\r\nمصممة لتتحمل أكثر… وجاهزة عندما تكون أنت جاهز.'),
(27, 'offers/Eo2ElRdVpvBtqrjBHOPQPvKxhsCW9Wf0ysBkFFyr.jpg', 'offers/zJ4TLj63BpKbYnOFA7IqQbsl6X3gyMonj4L9c49i.jpg', 16, '2026-04-15', '2026-04-19', '2026-03-30', 'Special Offer: 2026 Chevrolet Captiva LT | Re', 'عرض خاص: شيفروليه كابتيفا LT موديل 2026 | جاه', 'Drive with Confidence!\r\nGet behind the wheel of the sleek and versatile Chevrolet Captiva LT (2026 Model). Whether it\'s for family trips or daily commutes, this quality pre-owned vehicle offers the perfect balance of style, space, and performance.\r\nOffer Details:\r\n\r\nModel: Chevrolet Captiva LT\r\n\r\nYear: 2026\r\n\r\nPrice: SAR 64,490\r\n\r\nNote: Price does not include VAT.\r\n\r\nWhy Choose Jadeer United Motors?\r\nWe ensure every vehicle in our collection meets high-quality standards so you can start your journey with total peace of mind.\r\n\r\nContact Us Today:\r\n? Phone: +966 56 281 2000\r\n? Dealer: Jadeer United Motors', 'ابدأ رحلتك بكل ثقة!\r\nامتلك الآن سيارة شيفروليه كابتيفا LT (موديل 2026) الأنيقة والمتعددة الاستخدامات. سواء كنت تبحث عن سيارة عائلية واسعة أو سيارة عملية للتنقل اليومي، فإنها توفر لك التوازن المثالي بين التصميم والأداء.\r\nتفاصيل العرض:\r\n\r\nنوع السيارة: شيفروليه كابتيفا LT\r\n\r\nالموديل: 2026\r\n\r\nالسعر: 64,490 ريال سعودي\r\n\r\nملاحظة: السعر لا يشمل ضريبة القيمة المضافة.\r\n\r\nلماذا تختار جدير المتحدة للسيارات؟\r\nنحن نضمن أن جميع سياراتنا المختارة بعناية تلبي أعلى معايير الجودة لتبدأ رحلتك براحة بال تامة.\r\n\r\nتواصل معنا اليوم:\r\n? رقم التواصل: 2000 281 56 966+\r\n? المعرض: جدير المتحدة للسيارات');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `quotations`
--

CREATE TABLE `quotations` (
  `quotation_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `company` varchar(512) NOT NULL,
  `phone` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `edition` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL,
  `message` mediumtext NOT NULL,
  `cr` mediumtext DEFAULT NULL,
  `vat` mediumtext DEFAULT NULL,
  `nat` mediumtext DEFAULT NULL,
  `status` varchar(30) NOT NULL DEFAULT 'Pending',
  `ex_date` date DEFAULT NULL,
  `quotation` mediumtext DEFAULT NULL,
  `delivered_at` date DEFAULT NULL,
  `seen` tinyint(1) NOT NULL DEFAULT 0,
  `updated_at` date NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `quotations`
--

INSERT INTO `quotations` (`quotation_id`, `name`, `email`, `company`, `phone`, `car_id`, `edition`, `quantity`, `message`, `cr`, `vat`, `nat`, `status`, `ex_date`, `quotation`, `delivered_at`, `seen`, `updated_at`, `created_at`) VALUES
(132, 'Muhammad Marwan', 'marwan@solsynergy.sa', 'Sol Synergy', 554588262, 6, 'GL 4×2 2.4L DSL', 2, 'Please provide your best offer for the same', 'cr/8sX6wCxzXw1JD7W1rejfG3iBPWUmUCjgXtpotku0.pdf', 'vat/0JIMFIqgmh44EzwknCL9H80dqO7dq2uPR72GbQvJ.pdf', 'address/5FZUfYZJ2ynRCjKTPxQFoJ3YzDxhOLCXzW2cercA.pdf', 'Pending', NULL, NULL, NULL, 0, '2025-12-01', '2025-12-01'),
(133, 'Norah Alqahtani', 'norah.alqahtani@zodcon.com', 'Zod Con', 570161212, 62, 'LS', 2, 'Request for Quotation – Vehicle (Rental & Purchase Options)', 'cr/r4939i1ACmyvDrKgjkO65vGsgOvxXJ2vtw0SK1kD.pdf', 'vat/PUwmpnARma9rTvZuqlpU6HWYHxYfCUCyStuMVcOl.pdf', 'address/iqZJLgt5uxNUZIoGMV8xnwV4XKcqKqDCFKfqQrE5.pdf', 'Pending', NULL, NULL, NULL, 0, '2025-12-08', '2025-12-08'),
(137, 'Mohammed', 'Mohdahmed36690@proton.me', '', 570004759, 69, '', 2, 'kdsjnlkfnlkdsjn', NULL, NULL, NULL, 'Pending', NULL, NULL, NULL, 0, '2026-03-04', '2026-03-04'),
(138, 'Mohammed', 'Mohdahmed36690@proton.me', '', 570004759, 69, '', 2, 'oihsdokld', NULL, NULL, NULL, 'Pending', NULL, NULL, NULL, 0, '2026-03-04', '2026-03-04');

-- --------------------------------------------------------

--
-- Table structure for table `quotation_requests`
--

CREATE TABLE `quotation_requests` (
  `id` int(11) NOT NULL,
  `client_id` varchar(45) DEFAULT NULL,
  `guest_name` varchar(45) DEFAULT NULL,
  `guest_company` varchar(45) DEFAULT NULL,
  `guest_email` varchar(45) DEFAULT NULL,
  `guest_phone` varchar(45) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `updated_at` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `service` varchar(45) NOT NULL,
  `doc` text DEFAULT NULL,
  `quotation_requestscol` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_general_ci;

--
-- Dumping data for table `quotation_requests`
--

INSERT INTO `quotation_requests` (`id`, `client_id`, `guest_name`, `guest_company`, `guest_email`, `guest_phone`, `message`, `status`, `updated_at`, `created_at`, `service`, `doc`, `quotation_requestscol`) VALUES
(8, NULL, 'Mohammed', 'Sabit', 'Mohdahmed36690@proton.me', '966570004759', 'hey there', 1, '2026-04-08 11:41:12', '2026-04-08 10:54:46', 'selling', 'quotations/ywqAAkkUulBpsZX6dvYy3OIOJ7ZOqFjkBKoXKuVZ.pdf', NULL),
(9, NULL, 'ads', 'sad', 'a@b.c', '4674987489', 'safdslfjhsdl;', 0, '2026-04-12 15:40:04', '2026-04-12 15:40:04', 'selling', NULL, NULL),
(10, NULL, 'ads', 'sad', 'a@b.c', '4674987489', 'safdslfjhsdl;', 0, '2026-04-12 15:41:06', '2026-04-12 15:41:06', 'selling', NULL, NULL),
(11, NULL, 'aaa', 'aaa', 'Mohdahmed36690@proton.me', '33333333', '3333', 0, '2026-04-22 11:32:07', '2026-04-22 11:32:07', 'selling', NULL, NULL),
(12, NULL, 'a', 'a', 'Mohdahmed36690@proton.me', '11', 'aa', 0, '2026-04-22 14:01:07', '2026-04-22 14:01:07', 'leasing', NULL, NULL),
(13, NULL, 'a', 'a', 'a@b.c', NULL, 'aa', 0, '2026-04-26 14:49:18', '2026-04-26 14:49:18', 'leasing', NULL, NULL),
(14, NULL, 'Abdalrahman Munir', '-', 'abdo81411@gmail.com', '0536928106', '40,000 جاد', 0, '2026-05-03 14:20:46', '2026-05-03 14:20:46', 'selling', NULL, NULL),
(15, NULL, 'Arif patel', 'Kbr', 'Marifpatel67@Gmail.com', '966503890147', 'Contract length 4 years', 0, '2026-05-15 13:35:19', '2026-05-15 13:35:19', 'leasing', NULL, NULL),
(16, NULL, 'Ahmed alkhamis', 'Velan Gulf Manufacturing Company', 'ahmed.alkhamis@velan.com', '966559697440', 'Dear Jadeer,\r\n\r\nWe are planning to arrange new vehicles and are considering lease options of 2-year, 3-year, and 5-year terms for the following 2026 models:\r\n•	Toyota RAV4 \r\n•	Toyota Fortuner \r\n•	Toyota Land Cruiser Prado \r\nWe would greatly appreciate it if your team could provide us with your best quotations for the above models and lease options at your earliest convenience.\r\nThank you for your support and prompt attention to this request.\r\n\r\nThank,', 0, '2026-05-21 15:01:01', '2026-05-21 15:01:01', 'leasing', NULL, NULL),
(17, NULL, 'عبدالمجيد', NULL, 'jood1422aaa@gmail.com', '966545920159', '', 0, '2026-07-06 04:24:58', '2026-07-06 04:24:58', 'leasing', NULL, NULL),
(18, NULL, 'عبدالمجيد البلوي', 'هونداي', 'jood1422aaa@gmail.com', '966545920159', '', 0, '2026-07-06 04:28:28', '2026-07-06 04:28:28', 'leasing', NULL, NULL),
(19, NULL, 'Harith Al-Faddagh', 'Privet', 'harithalfaddagh@gmail.com', '966550598640', 'افضل باص متوفر  لخدمة أطفال  ووضة', 0, '2026-10-01 20:49:52', '2026-10-01 20:49:52', 'leasing', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `quotation_request_details`
--

CREATE TABLE `quotation_request_details` (
  `id` int(11) NOT NULL,
  `quotation_request_id` int(11) DEFAULT NULL,
  `car` varchar(45) NOT NULL,
  `condition` varchar(10) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `website_price` int(11) NOT NULL,
  `created_at` varchar(45) NOT NULL,
  `updated_at` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_general_ci;

--
-- Dumping data for table `quotation_request_details`
--

INSERT INTO `quotation_request_details` (`id`, `quotation_request_id`, `car`, `condition`, `quantity`, `website_price`, `created_at`, `updated_at`) VALUES
(2, 8, 'Toyota Corolla Corolla 2026', 'new', 1, 60000, '2026-04-08 10:54:46', '2026-04-08 10:54:46'),
(3, 10, 'Mitsubishi اوتلاندر اوتلاندر 2023', 'used', 1, 75000, '2026-04-12 15:41:06', '2026-04-12 15:41:06'),
(4, 11, 'Toyota Corolla Corolla 2022', 'used', 1, 43000, '2026-04-22 11:32:07', '2026-04-22 11:32:07'),
(5, 12, 'Nissan X-Trail X-Trail 2026', 'new', 1, 104999, '2026-04-22 14:01:07', '2026-04-22 14:01:07'),
(6, 13, 'Toyota Corolla Cross Hybrid Corolla Cross Hyb', 'new', 1, 103845, '2026-04-26 14:49:18', '2026-04-26 14:49:18'),
(7, 14, 'Toyota Corolla Corolla 2020', 'used', 1, 44000, '2026-05-03 14:20:46', '2026-05-03 14:20:46'),
(8, 15, 'Hyundai Palisade Palisade 2026', 'new', 1, 174139, '2026-05-15 13:35:19', '2026-05-15 13:35:19'),
(9, 16, 'Toyota Land Cruiser Prado Land Cruiser Prado ', 'new', 1, 193775, '2026-05-21 15:01:01', '2026-05-21 15:01:01'),
(10, 17, 'Toyota Camry Hybrid Camry Hybrid 2026', 'new', 1, 107295, '2026-07-06 04:24:58', '2026-07-06 04:24:58'),
(11, 18, 'Hyundai Elantra Elantra 2026', 'new', 1, 76667, '2026-07-06 04:28:28', '2026-07-06 04:28:28'),
(12, 19, 'Toyota Hiace Bus Hiace Bus 2026', 'new', 1, 148925, '2026-10-01 20:49:52', '2026-10-01 20:49:52');

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `id` int(11) NOT NULL,
  `employee_id` varchar(15) NOT NULL,
  `type` varchar(20) NOT NULL,
  `file` text DEFAULT NULL,
  `other` text DEFAULT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `replacement` text NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'Sent',
  `admin_message` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `requests`
--

INSERT INTO `requests` (`id`, `employee_id`, `type`, `file`, `other`, `start_date`, `end_date`, `replacement`, `status`, `admin_message`, `created_at`, `updated_at`) VALUES
(16, '10819827', 'annual', NULL, NULL, '2025-10-15', '2025-10-15', ',mznfk,fdznlk', '3', NULL, '2025-10-19 19:15:14', '2025-10-15 18:36:30'),
(17, '990849664', 'sick', NULL, NULL, '2025-10-23', '2025-10-23', 'علي سنان', '3', NULL, '2025-10-22 12:37:50', '2025-10-22 22:35:19');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `company` varchar(255) NOT NULL,
  `employee` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `date_of_service` date NOT NULL,
  `vehicle_condition` int(11) NOT NULL,
  `price_satisfaction` int(11) NOT NULL,
  `staff_behavior` int(11) NOT NULL,
  `pickup_process` int(11) NOT NULL,
  `dropoff_process` int(11) NOT NULL,
  `cleanliness` int(11) NOT NULL,
  `value_for_money` int(11) NOT NULL,
  `overall` int(11) NOT NULL,
  `again` tinyint(1) NOT NULL,
  `comment` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `company`, `employee`, `position`, `date_of_service`, `vehicle_condition`, `price_satisfaction`, `staff_behavior`, `pickup_process`, `dropoff_process`, `cleanliness`, `value_for_money`, `overall`, `again`, `comment`, `created_at`, `updated_at`) VALUES
(8, 'Snamprogetti S.A Ltd.', 'MOHAMMAD MAHFOOZ AHMED', 'General Services Coordinator', '2025-12-07', 4, 3, 2, 2, 4, 3, 3, 3, 1, 'Dear Team, I wanted to take a moment to address an important area where we can improve our services and better meet the needs of our customers. Recently, we\'ve received a significant number of complaints regarding the service of old vehicles. This is a matter that needs our immediate attention to ensure customer satisfaction and maintain our reputation.\r\n\r\nTo address this, I propose we implement a detailed service checklist for old vehicles. This checklist will help ensure that no steps are skipped during servicing, thereby reducing the likelihood of repeat complaints. \r\nAdditionally, we need to review and adjust our pricing strategy to ensure it aligns with the value we provide. Competitive and fair', '2025-12-07 18:40:43', '2025-12-07 18:40:43'),
(9, 'Nesma United industries LTD', 'Abdulaziz Alsufyani', 'Lease unit supervisor', '2025-08-12', 5, 3, 4, 3, 3, 4, 3, 4, 1, 'reduce tires change intervals to 45,000 km instead of 60,000 km', '2025-12-07 21:40:11', '2025-12-07 21:40:11'),
(10, 'Pietro Fiorentini', 'Ayman', 'Project Manager', '2025-12-10', 5, 2, 5, 5, 5, 5, 3, 3, 1, 'over all the cars rented from Jadeer are new cars. total 3 new cars and 1 used car.\r\nhowever still the prices comparing with other competitors are higher.\r\n\r\nwe are looking to have better prices to have more relation and long period agreement with Jadeer .\r\n\r\nthank you\r\nAyman', '2025-12-10 22:03:56', '2025-12-10 22:03:56'),
(11, 'Naseem Energy Company', 'Mohammed Saud Alharbi', 'GRO', '2025-12-07', 5, 4, 5, 4, 4, 5, 4, 5, 1, 'No Comments', '2025-12-11 20:49:21', '2025-12-11 20:49:21'),
(12, 'Worley', 'Shawaz', 'N/A', '2025-12-11', 4, 4, 5, 5, 5, 3, 4, 4, 1, 'Excellent in -house and vehicle servicing team . Quality work and maintenance schedule is done professionally.', '2025-12-11 22:20:33', '2025-12-11 22:20:33');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `fleet_car` int(11) NOT NULL,
  `client` int(11) NOT NULL DEFAULT 0,
  `user` varchar(255) DEFAULT NULL,
  `contact` varchar(20) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'Periodic car maintenance',
  `pictures` text DEFAULT NULL,
  `request_details` text DEFAULT NULL,
  `workshop` int(11) NOT NULL,
  `odo` bigint(20) NOT NULL,
  `job_card` text DEFAULT NULL,
  `request_date` date NOT NULL DEFAULT current_timestamp(),
  `workshop_notes` text DEFAULT NULL,
  `delivery_date` date DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `fleet_car`, `client`, `user`, `contact`, `type`, `pictures`, `request_details`, `workshop`, `odo`, `job_card`, `request_date`, `workshop_notes`, `delivery_date`, `status`, `created_at`, `updated_at`) VALUES
(10, 7, 10, 'Mohammed Sabit', '570006378', 'periodic', '[\"serviceImages\\/vPKFNfZ2fluFpbumYt6iKRzQ69jXLvXfKm9VJnr4.jpg\"]', NULL, 1, 125000, NULL, '2026-01-01', NULL, NULL, 'pending', '2026-06-10 06:49:06', '2026-06-10 06:49:06'),
(11, 7, 10, 'Mohammed Sabit', '570006378', 'periodic', '[\"serviceImages\\/4J881Tks5qKrdqJOKOcTay3DD6S514iTIAi2NY70.jpg\"]', NULL, 1, 124997, NULL, '2026-06-01', NULL, NULL, 'pending', '2026-06-10 06:50:19', '2026-06-10 06:50:19'),
(12, 7, 10, NULL, '444444444', 'Periodic', '[\"serviceImages\\/hM9BjRL3L8z4UGLolW7Z7CglgXBDOWudNSeu13yF.jpg\"]', '4444', 1, 444, NULL, '2222-02-02', NULL, NULL, 'pending', '2026-06-10 11:02:22', '2026-06-10 11:02:22'),
(13, 7, 10, 'Mohammed Sabit', '570006378', 'periodic', '[\"serviceImages\\/n15x6HZFvR7vUsgcs5V8UVqbfWjlepgp6rfhxUNu.jpg\"]', NULL, 1, 125555, NULL, '2026-06-16', NULL, NULL, 'pending', '2026-06-16 08:22:35', '2026-06-16 08:22:35'),
(14, 7, 10, 'Mohammed Sabit', '570006378', 'periodic', '[\"serviceImages\\/OCagsOFlcTeGyTOJgASB2bLRDqYL5O3YUs07Z0OZ.png\"]', NULL, 1, 1258888, NULL, '2026-06-21', NULL, NULL, 'pending', '2026-06-21 08:42:34', '2026-06-21 08:42:34'),
(15, 7, 10, 'Mohammed Sabit', '570006378', 'periodic', '[\"serviceImages\\/NMIBg1d8Yce7zL70GfFxkQ0tfVyqybQP2NefL7Ke.png\"]', NULL, 1, 17, NULL, '2026-06-21', NULL, NULL, 'pending', '2026-06-21 08:45:11', '2026-06-21 08:45:11'),
(16, 7, 10, 'Mohammed Sabit', '570006378', 'periodic', '[\"serviceImages\\/gvwQkKyIcE9b3ltmUkmTRc2hfCTCYfdLz1Xi8qFx.png\"]', NULL, 1, 17, NULL, '2026-06-21', NULL, NULL, 'pending', '2026-06-21 08:45:48', '2026-06-21 08:45:48'),
(17, 7, 10, 'Mohammed Sabit', '570006378', 'accident', '[\"serviceImages\\/2FKitKfaKc2LJE2fgnbkTrWtu032Fsq60px8PJGU.png\"]', NULL, 1, 17, NULL, '2026-06-21', NULL, NULL, 'pending', '2026-06-21 08:51:05', '2026-06-21 08:51:05'),
(18, 7, 10, 'Mohammed Sabit', '570006378', 'accident', '[\"serviceImages\\/SqF52jRzWL9c7OEEfILcq3QdAsmS8Vrjw0FvZJeD.png\"]', NULL, 1, 18, NULL, '2026-06-21', NULL, NULL, 'pending', '2026-06-21 08:51:33', '2026-06-21 08:51:33'),
(20, 7, 10, 'Mohammed Sabit', '570006378', 'accident', '[\"serviceImages\\/wEABA6g97ZSYstl8I7K255JmJOqdGlughKB8tR90.png\"]', NULL, 1, 19, NULL, '2026-06-21', NULL, NULL, 'pending', '2026-06-21 08:53:31', '2026-06-21 08:53:31'),
(21, 7, 10, 'Mohammed Sabit', '570006378', 'accident', '[\"serviceImages\\/ls0qfd4g58qa0YpscK85BR36xA2zTzw5yKMyotbL.png\"]', NULL, 1, 21, NULL, '2026-06-21', NULL, NULL, 'pending', '2026-06-21 08:55:08', '2026-06-21 08:55:08'),
(22, 7, 10, 'Mohammed Sabit', '570006378', 'maintenance', '[\"serviceImages\\/iweynw8LOhg3iQt1EvPK1X8KHG8CnmC3DT2k5oFz.png\"]', NULL, 1, 22, NULL, '2026-06-21', NULL, NULL, 'pending', '2026-06-21 11:47:37', '2026-06-21 11:47:37'),
(23, 7, 10, 'Mohammed Sabit', '570006378', 'periodic', '[\"serviceImages\\/M3w2W4IM21aLpiGkY2JCFbaJNTjnrvRYRZ533grC.png\"]', NULL, 1, 25, NULL, '2026-06-21', NULL, NULL, 'pending', '2026-06-21 11:48:50', '2026-06-21 11:48:50'),
(25, 7, 10, 'Mohammed Sabit', '570006378', 'accident', '[\"serviceImages\\/mGm0I2MS3de537noptFgb24CzpAVdQH8A3ztTBmB.png\"]', NULL, 1, 125000, NULL, '2026-06-21', NULL, NULL, 'pending', '2026-06-21 11:52:37', '2026-06-21 11:52:37'),
(28, 7, 10, 'Mohammed Sabit', '570006378', 'periodic', '[\"serviceImages\\/wMR7hNjQAM6TyN147nBgVKaBWn8omce83R3Ph0kG.png\"]', NULL, 1, 60, NULL, '2026-06-21', NULL, NULL, 'pending', '2026-06-21 11:57:52', '2026-06-21 11:57:52'),
(29, 7, 10, NULL, '570000000', 'maintenance', '[\"serviceImages\\/q2Q2tyH7TumMG1FRFwqLjU9TZWyQ1LJglDhXOpkP.jpg\"]', '56456465', 1, 70000, NULL, '2026-06-30', NULL, NULL, 'pending', '2026-06-21 13:57:53', '2026-06-21 13:57:53'),
(30, 7, 10, NULL, '570000000', 'periodic', '[\"serviceImages\\/GJVOQlm86AEMihWOvd18RpUAskVJqhr4ALIo9L0H.jpg\"]', 'ljsajhil', 2, 150000, NULL, '2026-06-30', NULL, NULL, 'pending', '2026-06-21 13:59:11', '2026-06-21 13:59:11'),
(31, 7, 10, 'randy penny', '562654488', 'accident', '[\"serviceImages\\/XxhMXI0hnQR1nKmGQ8kmQsFVmjZ8D5rLoKwc2FLW.jpg\"]', NULL, 1, 150000, NULL, '2030-06-21', NULL, NULL, 'pending', '2026-06-21 14:25:45', '2026-06-21 14:25:45'),
(32, 7, 10, 'Mohammed Ahmed', '570004759', 'periodic', '[\"serviceImages\\/wa0Ow0fGHwUJBAaWybOPPVkY9hsRPX7yRI97cjOO.jpg\"]', NULL, 1, 999999, NULL, '2026-06-23', NULL, NULL, 'pending', '2026-06-23 13:57:40', '2026-06-23 13:57:40');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('02ucM0tEYdVrgjefSjZbIZMmry2K5SNXmOkVq7iO', NULL, '112.34.110.28', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15     (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiT016OVQ5MDdXbVZzSjhWQUlNbGtzZXlidHFiRjN2dFRDYjdNek1WQyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjg6Imh0dHBzOi8vd3d3LmphZGVlcnVuaXRlZC5jb20iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1795241395),
('0EyjOeE1PVnLN4ZUucvvSmYu1Gb47b6qmaIqJThc', NULL, '96.20.51.126', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:156.0) Gecko/20100101 Firefox/156.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVUdGYW5telhaeEdFWGY4dHZoNUJmOXdHd3lCbzNyR0szUHo0b2Z4SCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9mbGVldD9wYWdlPTEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1795240583),
('6DBMW4ZfGdXkd0mHs6sdnfZ6Lg5AGrDHAdSkkTKn', NULL, '100.29.59.194', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Amzn-SearchBot/0.1) Chrome/119.0.6045.214 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibEVVOEttanVtRVc1cGpXV1VLUU9lQjdlVWU0M2p3UzZoVXV4SVg2ZyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9jYXItZGV0YWlscy8zNiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795249094),
('7WsuGo9QjzpDb0zE5WGd1EZG39n4yGVDw6Gv4whF', NULL, '2806:263:b480:8348:f135:f07e:4169:d369', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/158.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoid2tVRDRuYWNqWFI3aFVvZmZUa0RlNnhTeDBRbklDOWxSakQ5YjZFaiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHBzOi8vd3d3LmphZGVlcnVuaXRlZC5jb20vcm9ib3RzLnR4dCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795240138),
('8Tr4LMUIzSGQNSR7YcLWMnqAsl8P3jvBopPh8HJL', NULL, '51.75.236.145', 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibmFrNmJEYkg0ZlBHYkcwMWptTW9sY1BSb1pVT1A4ZjFFbkZxOVFDMiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9vZmZlci1kZXRhaWxzLzI2Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1795236633),
('9fi6PeFMRPnZS9Sk3DinMu9hF4bAA6fl7FMKMCKK', NULL, '131.196.114.154', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUG5ZVTdlcXNObEltOG9ua3B2SU9jbGdvVDlBY3VhVm9JQTQ3VG1vVyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9wcml2YWN5LXBvbGljeSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795240579),
('9it0SyWNbiMlnK6TViYdsvcu0ctHZ37w8ftq3MBw', NULL, '51.81.163.72', 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWkhDQzIyU1VjcXlJVHhMMUdxV1F6a1ZoZU1HMGhCT1RDbGVNZXNWdiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHBzOi8vd3d3LmphZGVlcnVuaXRlZC5jb20vcm9ib3RzLnR4dCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795245533),
('a0P5GyYFQGTrHpqyvkfeDyNqbreOg1h9mw5wekle', NULL, '1.20.187.15', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRWp4T1pzYXpjVTJEQTVLRVpDdW14RFhzbmNmVzdKcm5kbGN0cEFjbSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjQ6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795240579),
('b0LMlbI3O9DfIqnI0Fl8eoQKRELSg0qbCufOFfid', NULL, '185.91.208.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVXZjRE1hQ3NuMjRrODIzZVlYUFZCSXFYV3JiSEplSW9TM2VzTnhndCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9vZmZlcnMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1795240576),
('BzjqIqidqLFIY0NzvT2RYiLIczDcYDaazSMuTFZY', NULL, '196.239.160.108', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNmdwNDBYY3Y3dTNFMlJwSk5aTmFHZGdxbVF0VjZ2WDBmSTgxNXFVQiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9mbGVldCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795246692),
('CcCRuiv7ekwvMc8H5lRbTyQGtRFyKRwiRNvYgiP8', NULL, '79.181.189.97', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicFgyZVdYUWY0NkdqOFZ6VGhhdTFTNDFiVnhjWU40U2k2cml5OTRZbiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjQ6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795242576),
('cnhC7nntpGJSof7gDUN2AEawbTykMST8h2GGp6dA', NULL, '184.35.33.27', 'SeltzSitemapFetcher/1.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaENDaWxTYkg4VEg3djQzVmlKemFidTRISXZXdE9IbEJCQlAyZFVJMCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHBzOi8vd3d3LmphZGVlcnVuaXRlZC5jb20vcm9ib3RzLnR4dCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795247353),
('fkmLiC6gFUSP5TqChcJYwsw5H8bwuywCBsZeDSx4', NULL, '2001:4ba0:cafe:b2c::1', 'Mozilla/5.0 (compatible; webXtrendBot/1.1; +https://webxtrend.com/crawler)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieENxNzUzdEV4SXYzTkdMeE5iaUZsdDBNSVI3T1FHQXI0bFNDVXdlbSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9yb2JvdHMudHh0Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1795247676),
('gCJgJIc6RGUj6qM1JFOldFjibnrucach7tj3MfQF', NULL, '154.206.91.94', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiM2JJTzlZd0VDcWtNNXlmczNtckxpckhLb1VaRkZuOEd5RVhxbDYwMyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjQ6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795244869),
('ieuHtiiHMDhgMU3qjaNujjdlof4H7QDATukvad1M', NULL, '2001:16a2:c391:2652:e1f1:399:ddd:4284', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/156.0.0.0 Mobile Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoib1ozT21EQTExWDQ0QUlqZFluNG1GTEhrOVVwa0o3MTkxR3NCdWtTUCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDM6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9lbXBsb3llZXMvY2xvY2staW4iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjU1OiJsb2dpbl9lbXBsb3llZV81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjY1NDY1NDk4Nzk4O30=', 1795241261),
('j2YhKDgKv9QrRiJmW8fKQUpHMLbCVGPEFwaHuQCZ', NULL, '154.246.98.222', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.141 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibnoyaTlSMlV2aWg2N0p3UEtnMVNBeTJ2TGQ4am5RZ1ZRTmFuWk9IQyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDI6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9zaW5nbGUtYXJ0aWNsZS8xNyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795239193),
('JL1DELBAHMsqxz89urHjwqpQXAnodkhZcW2tUumT', NULL, '184.35.33.27', 'SeltzSitemapFetcher/1.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTWI2dHJWMkFqVjFvZk5teG8wRlNKbE14MGJSRXNjSHZBQ1hPbG96MCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9yb2JvdHMudHh0Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1795247351),
('JvCLpNiF6CuhEXvgakw6JexAu6sDUcAkFDGgY6O7', NULL, '169.58.202.174', 'Mozilla/5.0 ApolloContacts/1.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTzBIRWduSFBzQVh0V1Zub2FqbjcxdEZBR1lNN2pKS3BNV0R1SDlMUSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9jb250YWN0LXVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1795249462),
('LjJpz9h1pY5b7hLI5Zm4i97U5Amea6IXcu5h0d6o', NULL, '113.22.213.47', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicmEzTFBhU3REeUdvS1R3d21BNXdRaGtyZnlrSVNEdlpyYlhwTFQ3NiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9vZmZlci1kZXRhaWxzLzIyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1795240576),
('m8mIW7Ks3K6aXsGcbsikX5mE3fpdpwaExOFTVd9A', NULL, '34.232.233.214', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Amzn-SearchBot/0.1) Chrome/119.0.6045.214 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYTJKNjdxSzIxUkFTTEM5Rkp2T0JsbFdwTDZTTmhKTURNTEdsc2pkRiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9vZmZlci1kZXRhaWxzLzI3Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1795249104),
('MwlxVzzF8UXScsZNPgVQf9LscSW1KPT7FTaLkuzp', NULL, '2001:16a2:c37b:9724:a201:b6e2:8624:8ff0', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/156.0.0.0 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiamJTWWJ2dHlPakwzN3pWZGRuTXhpaXJMT2FxNGloRGJpM0NWTGFOcSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzg6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9lbXBsb3llZWxvZ2luIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1795243798),
('NcmgfESZiacJhvX7cclBltkEeGVjlcFGnMl15XrL', NULL, '200.4.118.127', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6400.44 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRDZkbFp0TW1GRGJhTkJJOUo0TzMzaTNlc0xFanZYTmVtejQ3aHdHUSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjQ6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795241828),
('ncuEV1aD4CRgttwwiheHtJLGLeWshVSXLcoxA00l', NULL, '103.148.178.29', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36 Edg/151.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNjVGVExtQU5iUWxUb1dpRGpCWkhFWjh5d0NFanlobnVkeEk2YTBoaCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9vZmZlci1kZXRhaWxzLzIwIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1795240581),
('niGRSbSMofDgpHNoz7ybZprLGsMREaseCxqZtt7g', NULL, '181.209.92.230', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNWs5ZTgwYU05cUhPbkxQaTN4UXQ0dDFZRzY3Zmt6UUlYajVraXhTUSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9mbGVldD9wYWdlPTQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1795247446),
('OboTOiXqV4RPy2UC23dAcAVbacGx8LAl8P9j7Cu5', NULL, '74.243.201.106', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 15_7_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQnBsWkZMY0FwWmplQktvdVZDQ2RmZk8yeWo4N1NsbkNXWW9DZUlJRSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjg6Imh0dHBzOi8vd3d3LmphZGVlcnVuaXRlZC5jb20iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1795240742),
('pBG5vPpfTKT3KyJ7WdzHx2zoMW1Ai56ACfTPrnBH', NULL, '2001:4ba0:cafe:b2c::1', 'Mozilla/5.0 (compatible; webXtrendBot/1.1; +https://webxtrend.com/crawler)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiM3FTYUxkTHVWbDF4dk5nendVQWozY2xKUVQyQ1VMSkpBSGlRdnp5UyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjQ6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795247677),
('qUQ5al39CUYybNYe8QUP1tebs7Vl6SWYsXCTjTgw', NULL, '178.51.214.16', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:155.0) Gecko/20100101 Firefox/155.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWEZtTG5obFlEdTVuVDIxUEo5cmszSFU5aUo3MlVXOUpOVGtYZnhzUiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9zaXRlbWFwLnhtbCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795247179),
('r6PI7PHODZYcVyDFnQozhFGUC15vxOss0OyJRMTX', NULL, '177.137.75.208', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.6943.98 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoib2daWEZNcjcxallkbFd0aEFZYmk0MEpiV3lWSkR0cTN0akkzWHF2QyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9wcml2YWN5LXBvbGljeSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795244212),
('RJQzpD6jihJd5pMfqitvtiaSLHsDi8gilMJFeMWV', NULL, '138.121.35.157', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQldTck80NVFDeWZqRzVLNVVjeWU5MXBrWFo5VVRkZlh3aHRTUmJmTCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTM6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9mbGVldD9ib2R5JTVCMCU1RD1Db21tZXJjaWFsIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1795244191),
('SAhhjTXMNM4VGvytfIqYKsR4NeSrXLoohsSKUhbM', NULL, '208.72.23.196', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoid05nQVE5UkdteEd4dVBoQmE2bzlJcHhxN1VvY3ZlUlJyZGtWYWNxOSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjQ6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795247447),
('sfeLQnQ7HUR9HjKdgMYPJf0LwMY3QSjbGEue5mxR', NULL, '180.74.224.141', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiOUlRTVd3QU51VjA3QlZPTTdkZWRpNU1JTGtZRFQ1WDBVczdUcVBTQiI7czoxMDoiX29sZF9pbnB1dCI7YToxOntzOjk6ImNvbmRpdGlvbiI7YToxOntpOjA7czo0OiJVc2VkIjt9fXM6NjoiX2ZsYXNoIjthOjI6e3M6MzoibmV3IjthOjA6e31zOjM6Im9sZCI7YToyOntpOjA7czoxMDoiX29sZF9pbnB1dCI7aToxO3M6NjoiZXJyb3JzIjt9fXM6NjoiZXJyb3JzIjtPOjMxOiJJbGx1bWluYXRlXFN1cHBvcnRcVmlld0Vycm9yQmFnIjoxOntzOjc6IgAqAGJhZ3MiO2E6MTp7czo3OiJkZWZhdWx0IjtPOjI5OiJJbGx1bWluYXRlXFN1cHBvcnRcTWVzc2FnZUJhZyI6Mjp7czoxMToiACoAbWVzc2FnZXMiO2E6MTp7czo5OiJjb25kaXRpb24iO2E6MTp7aTowO3M6MzQ6IlRoZSBzZWxlY3RlZCBjb25kaXRpb24gaXMgaW52YWxpZC4iO319czo5OiIAKgBmb3JtYXQiO3M6ODoiOm1lc3NhZ2UiO319fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjUyOiJodHRwczovL2phZGVlcnVuaXRlZC5jb20vZmxlZXQ/Y29uZGl0aW9uJTVCMCU1RD1Vc2VkIjt9fQ==', 1795240576),
('SY4h9XtFbRaX9JGjNQbKDTTGslzEj6jNf6PIyzFk', NULL, '103.104.28.245', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiY1NSSm9PUlA5djZ1OHBkTk5ndWZqUzJQUnJFTFJKaURZTGZMOFgwViI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjQ6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795241192),
('UcODMwOwlk2uMHIDDfdVrlSvuHvvykOR46luctZK', NULL, '158.47.198.196', 'Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUWJVeXF1RFNva25PTmU3UjhxMGZUVk82ajNiSXlidENSUFVGRUFLSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9mbGVldD9wYWdlPTMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1795242376),
('WojShWutyCKoplvxW0XXFvv0oBxnSE0MEkmDbSOi', NULL, '88.201.11.75', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/158.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVnhZM0V2UlFGYTV3Q2ZmQW80MGsya1lpMllKNk9pODlmTGJYUmtsQyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9jb250YWN0LXVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1795248643),
('XeG3SkjCXqMeSPg3Hv4LmirczvXZa1koOKFeCpqr', NULL, '44.198.230.203', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Amzn-SearchBot/0.1) Chrome/119.0.6045.214 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoia0VRUmZMdXE2dWpGSVhSODlBbmZWQ3RRR0pvTXRZRE9IQU9GMzZVbiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDA6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9jYXItZGV0YWlscy8xMzIiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1795246813),
('xEl3VzuEnxw9tv1pMuMB93YirIISaUA8fNpWFG7B', NULL, '2001:16a4:2b2:37f3:b4c7:77ff:fe4f:7834', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/156.0.0.0 Mobile Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiR1NaWDVFWklHaWF6WDFMVlM0RUxoanVtSVlXbWtsUjdBVUdERFRXbyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9lbXBsb3llZXMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjU1OiJsb2dpbl9lbXBsb3llZV81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjc3Nzc3Nzc3Nzt9', 1795243533),
('y6YEqiYsbW0w5RU5o3KxrWrCSbL7YAyRYn1bAhqO', NULL, '43.134.62.67', 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaDA3WjRCZGlVUlVrUXJrQ3JTUVBDbXl4bkdTd2tFQ2xCNEhrSWhNYSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjQ6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795245902),
('Zo08EzY7cP0aKibSLzTo6OjBh8m5GVO1RQ3F0k28', NULL, '181.79.150.244', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.88 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibE5IeW42Tld6blp5WHlhVlNBQ2NLem56MXNGMndpR01ZRG1jVzFpdyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDI6Imh0dHBzOi8vamFkZWVydW5pdGVkLmNvbS9zaW5nbGUtYXJ0aWNsZS8xNCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1795242409);

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `value` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `test2`
--

CREATE TABLE `test2` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  `school` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `test2`
--

INSERT INTO `test2` (`id`, `name`, `age`, `school`) VALUES
(1, 'Sabit', 17, NULL),
(2, 'ali', 15, NULL),
(3, 'ali', 17, NULL),
(4, 'hassan', 15, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `trade_requests`
--

CREATE TABLE `trade_requests` (
  `id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `request_items` text NOT NULL,
  `po` text NOT NULL,
  `status` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `trading_quotations`
--

CREATE TABLE `trading_quotations` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `cars` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `client` varchar(200) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `payment` varchar(10) NOT NULL,
  `expiry_date` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `trading_quotations`
--

INSERT INTO `trading_quotations` (`id`, `employee_id`, `cars`, `created_at`, `updated_at`, `client`, `name`, `email`, `phone`, `payment`, `expiry_date`) VALUES
(13, 2147483647, '[{\"brand\":\"Toyota\",\"model\":\"Land Cruiser\",\"year\":\"2027\",\"trim\":\"TXL-1\",\"quantity\":\"1\",\"unit_price\":\"3200\",\"registration_fees\":\"850\",\"vat\":480,\"total\":3680}]', '2026-01-02 00:02:43', '2026-01-02 00:02:43', 'Sinan Ltd', 'Ali Sinan', 'ali@jadeergulf.com', '570004759', 'Cash', 2026),
(14, 990849664, '[{\"brand\":\"Toyota\",\"model\":\"Land Cruiser\",\"year\":\"2026\",\"trim\":\"GXR\",\"quantity\":\"1\",\"unit_price\":\"5700\",\"registration_fees\":\"5000\",\"vat\":855,\"total\":6555}]', '2026-04-28 23:59:42', '2026-04-28 23:59:42', 'sabit', 'sabit', 'a@b.c', '222222222', 'Cash', 2026),
(15, 990849664, '[{\"brand\":\"Toyota\",\"model\":\"Land Cruiser\",\"year\":\"2026\",\"trim\":\"GXR\",\"quantity\":\"1\",\"unit_price\":\"5700\",\"registration_fees\":\"5000\",\"vat\":855,\"total\":6555},{\"brand\":\"Toyota\",\"model\":\"Land Cruiser\",\"year\":\"2027\",\"trim\":\"asas\",\"quantity\":\"1\",\"unit_price\":\"2222\",\"registration_fees\":\"222\",\"vat\":333.3,\"total\":2555.3}]', '2026-04-29 00:00:08', '2026-04-29 00:00:08', 'sabit', 'sabit', 'a@b.c', '222222222', 'Cash', 2026);

-- --------------------------------------------------------

--
-- Table structure for table `used__cars__quotations`
--

CREATE TABLE `used__cars__quotations` (
  `id` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `name` varchar(120) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `car_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `message` text NOT NULL,
  `status` varchar(10) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `used__cars__quotations`
--

INSERT INTO `used__cars__quotations` (`id`, `email`, `name`, `phone`, `car_id`, `quantity`, `message`, `status`, `created_at`, `updated_at`) VALUES
(1, 'it@jadeergulf.com', 'Mohammed Sabits', '0570004759', 56, 2, 'sdasda', 'pending', '2025-10-09 13:05:45', '2025-10-09 13:05:45'),
(2, 'Mohdahmed36690@proton.me', 'Mohammmed', '1234567890', 69, 1, 'ldskjkdf', '', '2026-03-04 11:15:43', '2026-03-04 11:15:43'),
(3, 'Mohdahmed36690@proton.me', 'Mohammed Sabit', '0570004759', 84, 2, 'nothing', '', '2026-03-05 13:49:09', '2026-03-05 13:49:09');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phonenumber` varchar(12) NOT NULL,
  `company` varchar(511) NOT NULL,
  `position` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `cr_number` varchar(100) NOT NULL,
  `vat_number` varchar(100) DEFAULT NULL,
  `nat` text DEFAULT NULL,
  `vat` text DEFAULT NULL,
  `cr` text DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `picture` text DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phonenumber`, `company`, `position`, `location`, `cr_number`, `vat_number`, `nat`, `vat`, `cr`, `email_verified_at`, `password`, `picture`, `remember_token`, `created_at`, `updated_at`) VALUES
(54, 'Mohammed Sabit', 'mohd@gmailqq', '12345678', 'Sabit Ltd', '', '', '22', '6', 'address/GbHkZOFsdCf5U4AGwjZ8RALHeHqLqOk2ub0231G4.pdf', 'vat/Dcni9HA1gGzj0TYLhlUjlmeu2WtgYV8gFouvkXI7.pdf', 'cr/JJ9wk383IvIurLwXxOKKDMOf75lXAdIyupRATABa.pdf', NULL, '$2y$12$qBntVVacuTomuF1dYEeHdOP1DKdYH/l0XX3R4n10eWTbxTf8jCax2', 'profile_pictures/ocaqtkaPQwuv15gEiZSoEJ8derEwMMC6ROwactHr.png', NULL, '2025-01-23 08:06:54', '2025-01-23 08:06:54'),
(56, 'Mohammed Sabit', 'mohd@gmailqqa', '12345678', '', '', '', '', NULL, NULL, NULL, NULL, NULL, '$2y$12$kcxwSJhVg/6TX6M2g276EONTULF30tnI0jJVRAEEleGeGJnLCir.6', NULL, NULL, '2025-01-23 08:07:05', '2025-01-23 08:07:05'),
(58, 'Mohammed Sabit', 'mohd@gmailqqas', '12345678', '', '', '', '', NULL, NULL, NULL, NULL, NULL, '$2y$12$Kc5rpqG4o356.Aagn0LY5e0akxX2SAyhf5MJwmIU9fDaze1YM0R6q', NULL, NULL, '2025-01-23 08:07:24', '2025-01-23 08:07:24'),
(59, 'Mohammed Ahmed', 'Mohdahmed36690@gmail.com', '570004759', 'Sabit Ltd', '', '', '', NULL, NULL, NULL, NULL, NULL, '$2y$12$gjrUbzWbGLup7MkvjoizvOn0YVkbfY796AtkIULTw2oldD5P64qTS', NULL, NULL, '2025-06-22 23:49:42', '2025-06-22 23:49:42'),
(60, 'Mohammed Ahmed', 'it@jadeer', '570004759', '', '', '', '', NULL, NULL, NULL, NULL, NULL, '$2y$12$NBBhmZI8HfMfNLwfj9rPEuykl6gqhY8Yo5Lw/tZPe2vu4V16/GvRK', NULL, NULL, '2025-06-23 22:12:51', '2025-06-23 22:12:51'),
(61, 'Mohammed Ahmed', 'it@jadeergulf.com', '0570004759', '', '', '', '', NULL, NULL, NULL, NULL, NULL, '$2y$12$g7bcoF9i1mnHOJ4TRoax/e7m00grj7U5YGSH0xah3UfSm6gu91NGW', NULL, NULL, '2025-06-23 22:13:46', '2025-06-23 22:13:46'),
(62, 'Yaman Jallad', 'yaman@jadeergulf.com', '0583410000', '', '', '', '', NULL, NULL, NULL, NULL, NULL, '$2y$12$F5HXVoq4mrJITcRrxomLVOqMvnFlmLwZ4HRs4i2HNCQlQW7RfO6gu', NULL, NULL, '2025-07-12 03:44:12', '2025-07-12 03:44:12'),
(63, 'Mohammad Mustafa', 'average.gamerboii09@gmail.com', '0539540117', '', '', '', '', NULL, NULL, NULL, NULL, NULL, '$2y$12$NsN8/F565ySkrXBySFCJMO7r26mRX64Z9GENyG/LIOK5OgWB8Z/3u', NULL, NULL, '2025-09-05 06:45:55', '2025-09-05 06:45:55');

-- --------------------------------------------------------

--
-- Table structure for table `usersa`
--

CREATE TABLE `usersa` (
  `client_id` int(11) NOT NULL,
  `client_full_name` varchar(40) NOT NULL,
  `email` varchar(300) NOT NULL,
  `client_phone_number` varchar(12) NOT NULL,
  `client_cr` varchar(100) DEFAULT NULL,
  `client_ssn` varchar(12) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `client_profile_picture` text DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `usersa`
--

INSERT INTO `usersa` (`client_id`, `client_full_name`, `email`, `client_phone_number`, `client_cr`, `client_ssn`, `password`, `client_profile_picture`, `email_verified_at`, `created_at`, `updated_at`, `remember_token`) VALUES
(11, 'Mohammed Sabit', 'mohd@gmail', '12345678', NULL, NULL, '$2y$12$Bpqdtg6Yw5keyeg2bqkG6.4gujrAClm.IWqo5f7BjcQRWoxtHgnMO', NULL, NULL, '2025-01-23 05:29:47', '2025-01-23 05:29:47', NULL),
(12, 'Mohammed Sabit', 'mohd@gmail', '12345678', NULL, NULL, '$2y$12$UhSSfnbTr5AV6QBQSUOV8egoIym/pbR6jmB7LpTnFCSIh3cCGoVgu', NULL, NULL, '2025-01-23 07:35:46', '2025-01-23 07:35:46', NULL),
(13, 'Mohammed Sabit', 'mohd@gmail', '12345678', NULL, NULL, '$2y$12$SBMyr5xDRNME0s6nFJxLsOUMv2Rg3fSGQ8KjYSXGRPVfyO/dKbyii', NULL, NULL, '2025-01-23 07:37:06', '2025-01-23 07:37:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `password` text NOT NULL,
  `brands` text NOT NULL,
  `rep` varchar(100) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `workshops`
--

CREATE TABLE `workshops` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `link` text NOT NULL,
  `branch` int(11) NOT NULL,
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `created_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `workshops`
--

INSERT INTO `workshops` (`id`, `name`, `phone`, `link`, `branch`, `updated_at`, `created_at`) VALUES
(1, 'Jadeer United', '570006378', 'google.com', 1, '2026-06-09', '2026-06-09'),
(2, 'Four Lines', '570000000', 'google.com', 1, '2026-06-21', '2026-06-21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `username_2` (`username`),
  ADD UNIQUE KEY `username_3` (`username`);

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attendances`
--
ALTER TABLE `attendances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- Indexes for table `auctions`
--
ALTER TABLE `auctions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `car_id` (`car_id`);

--
-- Indexes for table `bids`
--
ALTER TABLE `bids`
  ADD PRIMARY KEY (`id`),
  ADD KEY `car_id` (`auction_id`);

--
-- Indexes for table `branches`
--
ALTER TABLE `branches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `id_2` (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `client_quotations`
--
ALTER TABLE `client_quotations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indexes for table `client_requests`
--
ALTER TABLE `client_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`),
  ADD KEY `quotation_id` (`quotation_id`);

--
-- Indexes for table `delivery_notes`
--
ALTER TABLE `delivery_notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client` (`client`),
  ADD KEY `fleet_car` (`car`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_id` (`manager`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `employee_branch` (`branch`),
  ADD KEY `department` (`department`),
  ADD KEY `direct_supervisor` (`mg_id`),
  ADD KEY `mg_id` (`mg_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `fleet_cars`
--
ALTER TABLE `fleet_cars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `homepage`
--
ALTER TABLE `homepage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mobile__reviews`
--
ALTER TABLE `mobile__reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee` (`employee`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `quotations`
--
ALTER TABLE `quotations`
  ADD PRIMARY KEY (`quotation_id`);

--
-- Indexes for table `quotation_requests`
--
ALTER TABLE `quotation_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quotation_request_details`
--
ALTER TABLE `quotation_request_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`employee_id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test2`
--
ALTER TABLE `test2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trade_requests`
--
ALTER TABLE `trade_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indexes for table `trading_quotations`
--
ALTER TABLE `trading_quotations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `used__cars__quotations`
--
ALTER TABLE `used__cars__quotations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `car_id` (`car_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `usersa`
--
ALTER TABLE `usersa`
  ADD PRIMARY KEY (`client_id`);

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `workshops`
--
ALTER TABLE `workshops`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_us`
--
ALTER TABLE `about_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `attendances`
--
ALTER TABLE `attendances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auctions`
--
ALTER TABLE `auctions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bids`
--
ALTER TABLE `bids`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `branches`
--
ALTER TABLE `branches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=135;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `client_quotations`
--
ALTER TABLE `client_quotations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `client_requests`
--
ALTER TABLE `client_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `delivery_notes`
--
ALTER TABLE `delivery_notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fleet_cars`
--
ALTER TABLE `fleet_cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `homepage`
--
ALTER TABLE `homepage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `mobile__reviews`
--
ALTER TABLE `mobile__reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `offers`
--
ALTER TABLE `offers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `quotations`
--
ALTER TABLE `quotations`
  MODIFY `quotation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;

--
-- AUTO_INCREMENT for table `quotation_requests`
--
ALTER TABLE `quotation_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `quotation_request_details`
--
ALTER TABLE `quotation_request_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `test2`
--
ALTER TABLE `test2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `trade_requests`
--
ALTER TABLE `trade_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trading_quotations`
--
ALTER TABLE `trading_quotations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `used__cars__quotations`
--
ALTER TABLE `used__cars__quotations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `usersa`
--
ALTER TABLE `usersa`
  MODIFY `client_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `workshops`
--
ALTER TABLE `workshops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auctions`
--
ALTER TABLE `auctions`
  ADD CONSTRAINT `auctions_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `cars` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `bids`
--
ALTER TABLE `bids`
  ADD CONSTRAINT `bids_ibfk_1` FOREIGN KEY (`auction_id`) REFERENCES `auctions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `client_quotations`
--
ALTER TABLE `client_quotations`
  ADD CONSTRAINT `client_quotations_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_ibfk_3` FOREIGN KEY (`branch`) REFERENCES `branches` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `employees_ibfk_4` FOREIGN KEY (`department`) REFERENCES `departments` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `employees_ibfk_5` FOREIGN KEY (`mg_id`) REFERENCES `employees` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
