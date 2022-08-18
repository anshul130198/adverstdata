const WZ08_list = [
    {
      wz08: 'A',
      german: 'Land- und Forstwirtschaft, Fischerei',
      english: 'Agriculture, forestry and fishing'
    },
    {
      wz08: 'A01',
      german: 'Landwirtschaft, Jagd und damit verbundene Tätigkeiten',
      english: 'Crop and animal production, hunting and related service activities'
    },
    {
      wz08: 'A02',
      german: 'Forstwirtschaft und Holzeinschlag',
      english: 'Forestry and logging'
    },
    {
      wz08: 'A03',
      german: 'Fischerei und Aquakultur',
      english: 'Fishing and aquaculture'
    },
    {
      wz08: 'B',
      german: 'Bergbau und Gewinnung von Steinen und Erden',
      english: 'Mining and quarrying'
    },
    {
      wz08: 'B05',
      german: 'Kohlenbergbau',
      english: 'Mining of coal and lignite'
    },
    {
      wz08: 'B06',
      german: 'Gewinnung von Erdöl und Erdgas',
      english: 'Extraction of crude petroleum and natural gas'
    },
    {
      wz08: 'B07',
      german: 'Erzbergbau',
      english: 'Mining of metal ores'
    },
    {
      wz08: 'B08',
      german: 'Gewinnung von Steinen und Erden, sonstiger Bergbau',
      english: 'Other mining and quarrying'
    },
    {
      wz08: 'B09',
      german: 'Erbringung von Dienstleistungen für den Bergbau und für die Gewinnung von Steinen und Erden',
      english: 'Mining support service activities'
    },
    {
      wz08: 'C',
      german: 'Verarbeitendes Gewerbe',
      english: 'Manufacturing'
    },
    {
      wz08: 'C10',
      german: 'Herstellung von Nahrungs- und Futtermitteln',
      english: 'Manufacture of food products'
    },
    {
      wz08: 'C11',
      german: 'Getränkeherstellung',
      english: 'Manufacture of beverages'
    },
    {
      wz08: 'C12',
      german: 'Tabakverarbeitung',
      english: 'Manufacture of tobacco products'
    },
    {
      wz08: 'C13',
      german: 'Herstellung von Textilien',
      english: 'Manufacture of textiles'
    },
    {
      wz08: 'C14',
      german: 'Herstellung von Bekleidung',
      english: 'Manufacture of wearing apparel'
    },
    {
      wz08: 'C15',
      german: 'Herstellung von Leder, Lederwaren und Schuhen',
      english: 'Manufacture of leather and related products'
    },
    {
      wz08: 'C16',
      german: 'Herstellung von Holz-, Flecht-, Korb- und Korkwaren (ohne Möbel)',
      english: 'Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles of straw and plaiting materials'
    },
    {
      wz08: 'C17',
      german: 'Herstellung von Papier, Pappe und Waren daraus',
      english: 'Manufacture of paper and paper products'
    },
    {
      wz08: 'C18',
      german: 'Herstellung von Druckerzeugnissen; Vervielfältigung von bespielten Ton-, Bild- und Datenträgern',
      english: 'Printing and reproduction of recorded media'
    },
    {
      wz08: 'C19',
      german: 'Kokerei und Mineralölverarbeitung',
      english: 'Manufacture of coke and refined petroleum products'
    },
    {
      wz08: 'C20',
      german: 'Herstellung von chemischen Erzeugnissen',
      english: 'Manufacture of chemicals and chemical products'
    },
    {
      wz08: 'C21',
      german: 'Herstellung von pharmazeutischen Erzeugnissen',
      english: 'Manufacture of basic pharmaceutical products and pharmaceutical preparations'
    },
    {
      wz08: 'C22',
      german: 'Herstellung von Gummi- und Kunststoffwaren',
      english: 'Manufacture of rubber and plastic products'
    },
    {
      wz08: 'C23',
      german: 'Herstellung von Glas und Glaswaren, Keramik, Verarbeitung von Steinen und Erden',
      english: 'Manufacture of other non-metallic mineral products'
    },
    {
      wz08: 'C24',
      german: 'Metallerzeugung und -bearbeitung',
      english: 'Manufacture of basic metals'
    },
    {
      wz08: 'C25',
      german: 'Herstellung von Metallerzeugnissen',
      english: 'Manufacture of fabricated metal products, except machinery and equipment'
    },
    {
      wz08: 'C26',
      german: 'Herstellung von Datenverarbeitungsgeräten, elektronischen und optischen Erzeugnissen',
      english: 'Manufacture of computer, electronic and optical products'
    },
    {
      wz08: 'C27',
      german: 'Herstellung von elektrischen Ausrüstungen',
      english: 'Manufacture of electrical equipment'
    },
    {
      wz08: 'C28',
      german: 'Maschinenbau',
      english: 'Manufacture of machinery and equipment n.e.c.'
    },
    {
      wz08: 'C29',
      german: 'Herstellung von Kraftwagen und Kraftwagenteilen',
      english: 'Manufacture of motor vehicles, trailers and semi-trailers'
    },
    {
      wz08: 'C30',
      german: 'Sonstiger Fahrzeugbau',
      english: 'Manufacture of other transport equipment'
    },
    {
      wz08: 'C30.3',
      german: 'Luft- und Raumfahrzeugbau',
      english: 'Manufacture of air and spacecraft and related machinery'
    },
    {
      wz08: 'C31',
      german: 'Herstellung von Möbeln',
      english: 'Manufacture of furniture'
    },
    {
      wz08: 'C32',
      german: 'Herstellung von sonstigen Waren',
      english: 'Other manufacturing'
    },
    {
      wz08: 'C32.5',
      german: 'Herstellung von medizinischen und zahnmedizinischen Apparaten und Materialien',
      english: 'Manufacture of medical and dental instruments and supplies'
    },
    {
      wz08: 'C33',
      german: 'Reparatur und Installation von Maschinen und Ausrüstungen',
      english: 'Repair and installation of machinery and equipment'
    },
    {
      wz08: 'D',
      german: 'Energieversorgung',
      english: 'Electricity, gas, steam and air conditioning supply'
    },
    {
      wz08: 'D35',
      german: 'Energieversorgung',
      english: 'Electricity, gas, steam and air conditioning supply'
    },
    {
      wz08: 'E',
      german: 'Wasserversorgung; Abwasser- und Abfallentsorgung und Beseitigung von Umweltverschmutzungen',
      english: 'Water supply, sewerage, waste management and remediation activities'
    },
    {
      wz08: 'E36',
      german: 'Wasserversorgung',
      english: 'Water collection, treatment and supply'
    },
    { wz08: 'E37', german: 'Abwasserentsorgung', english: 'Sewerage' },
    {
      wz08: 'E38',
      german: 'Sammlung, Behandlung und Beseitigung von Abfällen; Rückgewinnung',
      english: 'Waste collection, treatment and disposal activities; materials recovery'
    },
    {
      wz08: 'E39',
      german: 'Beseitigung von Umweltverschmutzungen und sonstige Entsorgung',
      english: 'Remediation activities and other waste management services'
    },
    { wz08: 'F', german: 'Baugewerbe', english: 'Construction' },
    {
      wz08: 'F41',
      german: 'Hochbau',
      english: 'Construction of buildings'
    },
    { wz08: 'F42', german: 'Tiefbau', english: 'Civil engineering' },
    {
      wz08: 'F43',
      german: 'Vorbereitende Baustellenarbeiten, Bauinstallation und sonstiges Ausbaugewerbe',
      english: 'Specialised construction activities'
    },
    {
      wz08: 'G',
      german: 'Handel; Instandhaltung und Reparatur von Kraftfahrzeugen',
      english: 'Wholesale and retail trade; repair of motor vehicles and motorcycles'
    },
    {
      wz08: 'G45',
      german: 'Handel mit Kraftfahrzeugen; Instandhaltung und Reparatur von Kraftfahrzeugen',
      english: 'Wholesale and retail trade and repair of motor vehicles and motorcycles'
    },
    {
      wz08: 'G46',
      german: 'Großhandel (ohne Handel mit Kraftfahrzeugen)',
      english: 'Wholesale trade, except of motor vehicles and motorcycles'
    },
    {
      wz08: 'G47',
      german: 'Einzelhandel (ohne Handel mit Kraftfahrzeugen)',
      english: 'Retail trade, except of motor vehicles and motorcycles'
    },
    {
      wz08: 'H',
      german: 'Verkehr und Lagerei',
      english: 'Transportation and storage'
    },
    {
      wz08: 'H49',
      german: 'Landverkehr und Transport in Rohrfernleitungen',
      english: 'Land transport and transport via pipelines'
    },
    { wz08: 'H50', german: 'Schifffahrt', english: 'Water transport' },
    { wz08: 'H51', german: 'Luftfahrt', english: 'Air transport' },
    {
      wz08: 'H52',
      german: 'Lagerei sowie Erbringung von sonstigen Dienstleistungen für den Verkehr',
      english: 'Warehousing and support activities for transportation'
    },
    {
      wz08: 'H53',
      german: 'Post-, Kurier- und Expressdienste',
      english: 'Postal and courier activities'
    },
    {
      wz08: 'I',
      german: 'Gastgewerbe',
      english: 'Accommodation and food service activities'
    },
    { wz08: 'I55', german: 'Beherbergung', english: 'Accommodation' },
    {
      wz08: 'I56',
      german: 'Gastronomie',
      english: 'Food and beverage service activities'
    },
    {
      wz08: 'J',
      german: 'Information und Kommunikation',
      english: 'Information and communication'
    },
    {
      wz08: 'J58',
      german: 'Verlagswesen',
      english: 'Publishing activities'
    },
    {
      wz08: 'J59',
      german: 'Herstellung, Verleih und Vertrieb von Filmen und Fernsehprogrammen;  Kinos, Tonstudios und Verlegen',
      english: 'Motion picture, video and television programme production, sound recording and music publishing activities'
    },
    {
      wz08: 'J60',
      german: 'Rundfunkveranstalter',
      english: 'Programming and broadcasting activities'
    },
    {
      wz08: 'J61',
      german: 'Telekommunikation',
      english: 'Telecommunications'
    },
    {
      wz08: 'J62',
      german: 'Erbringung von Dienstleistungen der Informationstechnologie',
      english: 'Computer programming, consultancy and related activities'
    },
    {
      wz08: 'J63',
      german: 'Informationsdienstleistungen',
      english: 'Information service activities'
    },
    {
      wz08: 'J63.1',
      german: 'Datenverarbeitung, Hosting und damit verbundene Tätigkeiten, Webportale',
      english: 'Data processing, hosting and related activities; web portals'
    },
    {
      wz08: 'K',
      german: 'Erbringung von Finanz- und Versicherungsdienstleistungen',
      english: 'Financial and insurance activities'
    },
    {
      wz08: 'K64',
      german: 'Erbringung von Finanzdienstleistungen',
      english: 'Financial service activities, except insurance and pension funding'
    },
    {
      wz08: 'K65',
      german: 'Versicherungen, Rückversicherungen und Pensionskassen (ohne Sozialversicherung)',
      english: 'Insurance, reinsurance and pension funding, except compulsory social security'
    },
    {
      wz08: 'K66',
      german: 'Mit Finanz- und Versicherungsdienstleistungen verbundene Tätigkeiten',
      english: 'Activities auxiliary to financial services and insurance activities'
    },
    {
      wz08: 'L',
      german: 'Grundstücks- und Wohnungswesen',
      english: 'Real estate activities'
    },
    {
      wz08: 'L68',
      german: 'Grundstücks- und Wohnungswesen',
      english: 'Real estate activities'
    },
    {
      wz08: 'M',
      german: 'Erbringung von freiberuflichen, wissenschaftlichen und technischen Dienstleistungen',
      english: 'Professional, scientific and technical activities'
    },
    {
      wz08: 'M69',
      german: 'Rechts- und Steuerberatung, Wirtschaftsprüfung',
      english: 'Legal and accounting activities'
    },
    {
      wz08: 'M70',
      german: 'Verwaltung und Führung von Unternehmen und Betrieben, Unternehmensberatung',
      english: 'Activities of head offices; management consultancy activities'
    },
    {
      wz08: 'M71',
      german: 'Architektur- und Ingenieurbüros, technische, physikalische und chemische Untersuchung',
      english: 'Architectural and engineering activities; technical testing and analysis'
    },
    {
      wz08: 'M71.2',
      german: 'Technische, physikalische und chemische Untersuchung',
      english: 'Technical testing and analysis'
    },
    {
      wz08: 'M72',
      german: 'Forschung und Entwicklung',
      english: 'Scientific research and development '
    },
    {
      wz08: 'M73',
      german: 'Werbung und Marktforschung',
      english: 'Advertising and market research'
    },
    {
      wz08: 'M74',
      german: 'Sonstige freiberufliche, wissenschaftliche und technische Tätigkeiten',
      english: 'Other professional, scientific and technical activities'
    },
    {
      wz08: 'M75',
      german: 'Veterinärwesen',
      english: 'Veterinary activities'
    },
    {
      wz08: 'N',
      german: 'Erbringung von sonstigen wirtschaftlichen Dienstleistungen',
      english: 'Administrative and support service activities'
    },
    {
      wz08: 'N77',
      german: 'Vermietung von beweglichen Sachen',
      english: 'Rental and leasing activities'
    },
    {
      wz08: 'N78',
      german: 'Vermittlung und Überlassung von Arbeitskräften',
      english: 'Employment activities'
    },
    {
      wz08: 'N78.1',
      german: 'Vermittlung von Arbeitskräften',
      english: 'Activities of employment placement agencies'
    },
    {
      wz08: 'N78.2',
      german: 'Befristete Überlassung von Arbeitskräften',
      english: 'Temporary employment agency activities'
    },
    {
      wz08: 'N79',
      german: 'Reisebüros, Reiseveranstalter und Erbringung sonstiger Reservierungsdienstleistungen',
      english: 'Travel agency, tour operator and other reservation service and related activities'
    },
    {
      wz08: 'N80',
      german: 'Wach- und Sicherheitsdienste sowie Detekteien',
      english: 'Security and investigation activities'
    },
    {
      wz08: 'N81',
      german: 'Gebäudebetreuung Garten- und Landschaftsbau',
      english: 'Services to buildings and landscape activities'
    },
    {
      wz08: 'N82',
      german: 'Erbringung von wirtschaftlichen Dienstleistungen für Unternehmen und Privatpersonen a. n. g.',
      english: 'Office administrative, office support and other business support activities'
    },
    {
      wz08: 'O',
      german: 'Öffentliche Verwaltung, Verteidigung; Sozialversicherung',
      english: 'Public administration and defence; compulsory social security'
    },
    {
      wz08: 'O84',
      german: 'Öffentliche Verwaltung, Verteidigung; Sozialversicherung',
      english: 'Public administration and defence; compulsory social security'
    },
    {
      wz08: 'P',
      german: 'Erziehung und Unterricht',
      english: 'Education'
    },
    {
      wz08: 'P85',
      german: 'Erziehung und Unterricht',
      english: 'Education'
    },
    {
      wz08: 'Q',
      german: 'Gesundheits- und Sozialwesen',
      english: 'Human health and social work activities'
    },
    {
      wz08: 'Q86',
      german: 'Gesundheitswesen',
      english: 'Human health activities'
    },
    {
      wz08: 'Q86.1',
      german: 'Krankenhäuser',
      english: 'Hospital activities'
    },
    // ... 19 more items
  ]

  export default WZ08_list;
  
  