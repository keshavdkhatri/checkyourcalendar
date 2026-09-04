import type { Locale, LocalizedObservanceInfo } from './types';

export const localizedObservances: Record<string, LocalizedObservanceInfo> = {
  'putrada-ekadashi': {
    name: {
      en: 'Shravan Putrada Ekadashi',
      hi: 'श्रावण पुत्रदा एकादशी',
      gu: 'શ્રાવણ પુત્રદા એકાદશી',
    },
    shortDescription: {
      en: 'A significant fasting day dedicated to Lord Vishnu, observed on the 11th lunar day of the bright fortnight of Shravana. Smarta and Vaishnava traditions observe it according to sunrise and tithi boundaries.',
      hi: 'भगवान विष्णु को समर्पित एक महत्वपूर्ण उपवास दिवस, जो श्रावण मास के शुक्ल पक्ष की एकादशी को मनाया जाता है। स्मार्त और वैष्णव परंपराएं इसे सूर्योदय और तिथि सीमाओं के अनुसार मनाती हैं।',
      gu: 'ભગવાન વિષ્ણુને સમર્પિત એક મહત્વપૂર્ણ વ્રત, જે શ્રાવણ સુદ અગિયારસના દિવસે ઉજવાય છે. સ્માર્ત અને વૈષ્ણવ પરંપરાઓ તેને સૂર્યોદય અને તિથિ અનુસાર ઉજવે છે.',
    },
  },
  'kajari-teej': {
    name: {
      en: 'Kajari Teej',
      hi: 'कजरी तीज',
      gu: 'કજરી તીજ',
    },
    shortDescription: {
      en: 'Also known as Badi Teej or Kevda Trij, celebrated on Krishna Tritiya of Shravana with fasting, songs, and prayers to Goddess Parvati.',
      hi: 'बड़ी तीज या कजली तीज के रूप में भी प्रसिद्ध, जो श्रावण/भाद्रपद कृष्ण तृतीया को उपवास, कजरी गीतों और माता पार्वती की पूजा के साथ मनाई जाती है।',
      gu: 'બડી તીજ અથવા કેવડા ત્રીજ તરીકે પણ જાણીતી, જે શ્રાવણ વદ ત્રીજના દિવસે વ્રત, ગીતો અને માતા પાર્વતીની આરાધના સાથે ઉજવાય છે.',
    },
  },
  'bol-choth': {
    name: {
      en: 'Bol Choth (Bahula Chaturthi)',
      hi: 'बोल चौथ (बहुला चतुर्थी)',
      gu: 'બોળ ચોથ (બહુલા ચતુર્થી)',
    },
    shortDescription: {
      en: 'A traditional observance in Gujarat honoring cows and calves, celebrated on the fourth day of the dark fortnight of Shravana.',
      hi: 'गुजरात में गाय और बछड़े की पूजा का पारंपरिक पर्व, जो श्रावण मास के कृष्ण पक्ष की चतुर्थी (बहुला चतुर्थी) को मनाया जाता है।',
      gu: 'શ્રાવણ વદ ચોથના દિવસે ઉજવાતો ગુજરાતનો પરંપરાગત તહેવાર, જેમાં ગાય અને વાછરડાનું પૂજન કરવામાં આવે છે.',
    },
  },
  'nag-panchami': {
    name: {
      en: 'Nag Panchami',
      hi: 'नाग पंचमी',
      gu: 'નાગ પાંચમ',
    },
    shortDescription: {
      en: 'A sacred day dedicated to serpent deities (Nagas), observed with milk offerings and prayers for family protection.',
      hi: 'नाग देवताओं की पूजा को समर्पित एक पावन दिवस, जिसमें परिवार की रक्षा और कल्याण के लिए दूध का अर्घ्य और प्रार्थनाएं की जाती हैं।',
      gu: 'નાગ દેવતાઓની પૂજાને સમર્પિત પવિત્ર દિવસ, જેમાં પરિવારના રક્ષણ માટે દૂધ ચઢાવીને પૂજા-અર્ચના કરવામાં આવે છે.',
    },
  },
  'randhan-chhath': {
    name: {
      en: 'Randhan Chhath',
      hi: 'रांधण छठ',
      gu: 'રાંધણ છઠ',
    },
    shortDescription: {
      en: 'A unique Gujarati culinary tradition observed on Shravana Vad 6, where meals are prepared a day in advance for Shitala Satam.',
      hi: 'श्रावण कृष्ण षष्ठी को मनाया जाने वाला गुजरात का अनूठा पाक पर्व, जिसमें शीतला सातम के लिए एक दिन पूर्व ही भोजन तैयार कर लिया जाता है।',
      gu: 'શ્રાવણ વદ છઠના દિવસે ઉજવાતી ગુજરાતની અનોખી પરંપરા, જેમાં શીતળા સાતમ માટે અગાઉથી રસોઈ બનાવી ચૂલો ઠારવામાં આવે છે.',
    },
  },
  'shitala-satam': {
    name: {
      en: 'Shitala Satam',
      hi: 'शीतला सातम',
      gu: 'શીતળા સાતમ',
    },
    shortDescription: {
      en: 'Dedicated to Goddess Shitala, seeking health and protection from seasonal ailments. Stoves remain unlit and only previously prepared cold food is consumed.',
      hi: 'शीतला माता को समर्पित पर्व, जिसमें मौसमी बीमारियों से रक्षा की प्रार्थना की जाती है। इस दिन चूल्हा नहीं जलाया जाता और केवल ठंडा (बासी) भोजन किया जाता है।',
      gu: 'શીતળા માતાને સમર્પિત પર્વ, જેમાં આરોગ્ય અને રક્ષણની પ્રાર્થના કરાય છે. આ દિવસે ચૂલો પ્રગટાવ્યા વગર ટાઢું ભોજન લેવાય છે.',
    },
  },
  'janmashtami': {
    name: {
      en: 'Krishna Janmashtami',
      hi: 'श्रीकृष्ण जन्माष्टमी',
      gu: 'શ્રીકૃષ્ણ જન્માષ્ટમી',
    },
    shortDescription: {
      en: 'The joyful celebration commemorating the birth of Lord Krishna at midnight on Shravana Vad 8, marked with fasting, temple bells, and devotional night vigils.',
      hi: 'श्रावण कृष्ण अष्टमी की आधी रात को भगवान श्रीकृष्ण के जन्मोत्सव का पावन पर्व, जो उपवास, झांकियों, शंख-घंटियों और रात्रि जागरण के साथ मनाया जाता है।',
      gu: 'શ્રાવણ વદ આઠમની મધ્યરાત્રિએ ભગવાન શ્રીકૃષ્ણના જન્મોત્સવની ભક્તિભાવપૂર્વક ઉજવણી, જેમાં વ્રત, આરતી અને રાત્રિ જાગરણ થાય છે.',
    },
  },
  'nand-mahotsav': {
    name: {
      en: 'Nand Mahotsav',
      hi: 'नंद महोत्सव',
      gu: 'નંદ મહોત્સવ',
    },
    shortDescription: {
      en: 'Celebrated the day after Janmashtami, reenacting the joy of Nanda Baba and the Gokul community upon Krishna\'s birth.',
      hi: 'जन्माष्टमी के अगले दिन मनाया जाने वाला आनंदोत्सव, जिसमें श्रीकृष्ण जन्म पर नंद बाबा और गोकुलवासियों के हर्षोल्लास को याद किया जाता है।',
      gu: 'જન્માષ્ટમીના બીજા દિવસે ગોકુળમાં નંદબાબાના ઘેર શ્રીકૃષ્ણ પ્રાગટ્યના આનંદમાં ઉજવાતો ઉત્સવ (નંદ ઘેર આનંદ ભયો).',
    },
  },
  'vaikuntha-ekadashi': {
    name: {
      en: 'Vaikuntha Ekadashi',
      hi: 'वैकुंठ एकादशी',
      gu: 'વૈકુંઠ એકાદશી',
    },
    shortDescription: {
      en: 'A highly sacred Ekadashi dedicated to Lord Vishnu, believed to open the gates of Vaikuntha (heavenly abode). Observed with strict fasting and prayers.',
      hi: 'भगवान विष्णु को समर्पित एक अत्यंत पावन एकादशी, जिसमें वैकुंठ द्वार खुलने की मान्यता है। इसे कठोर उपवास और विष्णु सहस्रनाम पाठ के साथ मनाया जाता है।',
      gu: 'ભગવાન વિષ્ણુને સમર્પિત પરમ પવિત્ર અગિયારસ, જેમાં વૈકુંઠના દ્વાર ખૂલવાની માન્યતા છે. કઠોર વ્રત અને પ્રભુભક્તિ સાથે ઉજવાય છે.',
    },
  },
  'raksha-bandhan': {
    name: {
      en: 'Raksha Bandhan',
      hi: 'रक्षाबंधन',
      gu: 'રક્ષાબંધન',
    },
    shortDescription: {
      en: 'The festival celebrating the bond of love and protection between brothers and sisters, observed on the full moon day (Purnima) of Shravana.',
      hi: 'भाई-बहन के पवित्र प्रेम और रक्षा के संकल्प का पावन पर्व, जो श्रावण मास की पूर्णिमा को रक्षा-सूत्र (राखी) बांधकर मनाया जाता है।',
      gu: 'ભાઈ-બહેનના સ્નેહ અને સુરક્ષાના અતૂટ બંધનનું પર્વ, જે શ્રાવણી પૂનમે રાખડી બાંધીને ઉજવવામાં આવે છે.',
    },
  },
  'ganesh-chaturthi': {
    name: {
      en: 'Ganesh Chaturthi',
      hi: 'गणेश चतुर्थी',
      gu: 'ગણેશ ચતુર્થી',
    },
    shortDescription: {
      en: 'The grand festival marking the arrival of Lord Ganesha, celebrated on Bhadrapada Shukla Chaturthi with vibrant idol installations and prayers.',
      hi: 'विघ्नहर्ता भगवान श्री गणेश के जन्मोत्सव का महापर्व, जो भाद्रपद शुक्ल चतुर्थी से भव्य मूर्ति स्थापना और मोदक भोग के साथ प्रारंभ होता है।',
      gu: 'વિઘ્નહર્તા ગણેશજીના આગમનનો ભવ્ય ઉત્સવ, જે ભાદરવા સુદ ચોથથી મૂર્તિ સ્થાપના અને પૂજા-અર્ચના સાથે ઉજવાય છે.',
    },
  },
  'samvatsari': {
    name: {
      en: 'Samvatsari (Paryushana Parva)',
      hi: 'संवत्सरी (पर्युषण पर्व)',
      gu: 'સંવત્સરી (પર્યુષણ પર્વ)',
    },
    shortDescription: {
      en: 'The holiest day in Jain tradition, dedicated to universal forgiveness (Michhami Dukkadam), self-reflection, and spiritual purification.',
      hi: 'जैन परंपरा का परम पावन महापर्व, जो क्षमावाणी (मिच्छामि दुक्कडम्), आत्म-निरीक्षण और आध्यात्मिक शुद्धि को समर्पित है।',
      gu: 'જૈન પરંપરાનો મહાપવિત્ર દિવસ, જેમાં સર્વ જીવો પ્રત્યે ક્ષમાપના (મિચ્છામિ દુક્કડમ્) અને આત્મશુદ્ધિનું વ્રત લેવાય છે.',
    },
  },
  'anant-chaturdashi': {
    name: {
      en: 'Anant Chaturdashi',
      hi: 'अनंत चतुर्दशी',
      gu: 'અનંત ચતુર્દશી',
    },
    shortDescription: {
      en: 'The fourteenth day of the bright fortnight of Bhadrapada, honoring Lord Vishnu in his infinite form and marking the immersion of Ganesha idols.',
      hi: 'भाद्रपद शुक्ल चतुर्दशी, जो भगवान विष्णु के अनंत स्वरूप की आराधना और गणेश विसर्जन के साथ धूमधाम से मनाई जाती है।',
      gu: 'ભાદરવા સુદ ચૌદશ, જે ભગવાન વિષ્ણુના અનંત રૂપની પૂજા અને ગણેશ વિસર્જન સાથે ભક્તિભાવથી ઉજવાય છે.',
    },
  },
  'navaratri': {
    name: {
      en: 'Sharad Navaratri',
      hi: 'शारदीय नवरात्रि',
      gu: 'શારદીય નવરાત્રી',
    },
    shortDescription: {
      en: 'The nine-night festival celebrating the divine feminine Goddess Durga, celebrated across Gujarat and India with Garba dances and fasting.',
      hi: 'मां दुर्गा की नौ रातों की पावन उपासना का पर्व, जो आश्विन मास में गरबा, डांडिया, उपवास और शक्ति साधना के साथ मनाया जाता है।',
      gu: 'મા આદ્યશક્તિની આરાધનાનો નવરાત્રિ મહોત્સવ, જેમાં ગુજરાતભરમાં રાસ-ગરબા, ઉપવાસ અને માતાજીની ઘટસ્થાપના થાય છે.',
    },
  },
  'durga-ashtami': {
    name: {
      en: 'Maha Ashtami (Durga Ashtami)',
      hi: 'महा अष्टमी (दुर्गा अष्टमी)',
      gu: 'મહા અષ્ટમી (દુર્ગા અષ્ટમી)',
    },
    shortDescription: {
      en: 'The eighth day of Navaratri honoring Goddess Mahagauri, celebrated with special pujas, havan ceremonies, and Kanya Puja.',
      hi: 'नवरात्रि की आठवीं प्रमुख तिथि जिसमें मां महागौरी की विशेष पूजा, हवन और कन्या पूजन (कंजक) श्रद्धापूर्वक किया जाता है।',
      gu: 'નવરાત્રીની આઠમ તિથિ જેમાં માં મહાગૌરીનું પૂજન, હવન અને કન્યા પૂજન ભાવપૂર્વક કરવામાં આવે છે.',
    },
  },
  'dussehra': {
    name: {
      en: 'Dussehra (Vijayadashami)',
      hi: 'दशहरा (विजयादशमी)',
      gu: 'દશેરા (વિજયાદશમી)',
    },
    shortDescription: {
      en: 'Celebrating the victory of good over evil — Lord Rama\'s victory over Ravana and Goddess Durga\'s triumph over Mahishasura.',
      hi: 'बुराई पर अच्छाई की विजय का प्रतीक महापर्व — भगवान श्रीराम द्वारा रावण वध और मां दुर्गा द्वारा महिषासुर मर्दन की स्मृति।',
      gu: 'અસત્ય પર સત્યના વિજયનું પર્વ — શ્રીરામનો રાવણ પર વિજય અને માં દુર્ગાનો મહિષાસુર પર વિજય, જલેબી-ફાફડાનો આનંદ.',
    },
  },
  'sharad-purnima': {
    name: {
      en: 'Sharad Purnima',
      hi: 'शरद पूर्णिमा (कोजागरी)',
      gu: 'શરદ પૂનમ (દૂધ-પૌંઆની રાત)',
    },
    shortDescription: {
      en: 'The autumn full moon night associated with Lord Krishna\'s Raas Leela and Goddess Lakshmi\'s blessings, celebrated with kheer and moonlight vigils.',
      hi: 'शरद ऋतु की धवल पूर्णिमा जिसमें भगवान श्रीकृष्ण की महारास लीला और मां लक्ष्मी के वरदान की मान्यता है। चंद्र किरणों में रखी खीर का प्रसाद ग्रहण किया जाता है।',
      gu: 'આસો સુદ પૂનમની અમૃત વર્ષા રાત્રિ, શ્રીકૃષ્ણની રાસલીલા અને લક્ષ્મીજીની કૃપાનું પર્વ, જેમાં દૂધ-પૌંઆનો પ્રસાદ લેવાય છે.',
    },
  },
  'karva-chauth': {
    name: {
      en: 'Karva Chauth',
      hi: 'करवा चौथ',
      gu: 'કરવા ચોથ',
    },
    shortDescription: {
      en: 'A dedicated fasting ritual observed by married Hindu women for the longevity and well-being of their spouses, breaking the fast after moonrise.',
      hi: 'सुहागिन महिलाओं द्वारा पति की दीर्घायु और कल्याण के लिए रखा जाने वाला निर्जला व्रत, जो चंद्र दर्शन और अर्घ्य के बाद खोला जाता है।',
      gu: 'સૌભાગ્યવતી સ્ત્રીઓ દ્વારા પતિના દીર્ઘાયુ અને સુખાકારી માટે રખાતું વ્રત, જે ચંદ્રોદય પછી અર્ધ્ય આપીને પૂરું થાય છે.',
    },
  },
  'dhanteras': {
    name: {
      en: 'Dhanteras (Dhan Trayodashi)',
      hi: 'धनतेरस (धन त्रयोदशी)',
      gu: 'ધનતેરસ (ધન ત્રયોદશી)',
    },
    shortDescription: {
      en: 'The first day of the Diwali festival celebrating Lord Dhanvantari (deity of health) and Goddess Lakshmi, traditionally marked by purchasing precious metals.',
      hi: 'दीपावली महापर्व का प्रथम दिन, जिसमें आयुर्वेद के जनक भगवान धन्वंतरि और मां लक्ष्मी की पूजा होती है तथा नए धातु व बर्तनों की खरीदारी शुभ मानी जाती है।',
      gu: 'દિવાળી પર્વનો પહેલો દિવસ, ભગવાન ધન્વંતરી અને લક્ષ્મી પૂજન સાથે સોના-ચાંદી કે નવા વાસણોની ખરીદી કરવાનો શુભ દિવસ.',
    },
  },
  'diwali': {
    name: {
      en: 'Diwali (Deepavali / Lakshmi Puja)',
      hi: 'दीपावली (लक्ष्मी पूजन)',
      gu: 'દિવાળી (દીપાવલી / લક્ષ્મી પૂજન)',
    },
    shortDescription: {
      en: 'The festival of lights marking the victory of light over darkness and prosperity, celebrated with oil lamps, Lakshmi Puja, and festive fireworks on Aso Vad Amas.',
      hi: 'दीपों का महापर्व जो अंधकार पर प्रकाश और अज्ञान पर ज्ञान की विजय का प्रतीक है। आश्विन अमावस्या को मां लक्ष्मी-गणेश पूजन और दीप प्रज्वलन किया जाता है।',
      gu: 'રોશનીનો મહાપર્વ, આસો વદ અમાસની રાત્રે ચોપડા પૂજન, લક્ષ્મી પૂજન અને દીપમાળા પ્રગટાવીને ઉજવાતો વર્ષનો સૌથી મોટો તહેવાર.',
    },
  },
  'bestu-varas': {
    name: {
      en: 'Bestu Varas (Gujarati New Year)',
      hi: 'बेस्तू वर्ष (गुजराती नववर्ष)',
      gu: 'બેસતું વર્ષ (નૂતન વર્ષ / ગુજરાતી નવું વર્ષ)',
    },
    shortDescription: {
      en: 'The Gujarati New Year celebrated on Kartak Sud 1 (the day after Diwali), marked with temple visits, Govardhan Puja, and greetings of Saal Mubarak.',
      hi: 'कार्तिक शुक्ल प्रतिपदा (दीपावली के अगले दिन) मनाया जाने वाला गुजराती नववर्ष, जो गोवर्धन पूजा, बही-खाता पूजन और साल मुबारक की शुभकामनाओं के साथ शुरू होता है।',
      gu: 'કારતક સુદ એકમનો પાવન દિવસ — ગુજરાતી નવું વર્ષ. ગોવર્ધન પૂજા, મંદિરે દર્શન અને એકબીજાને "સાલ મુબારક" તથા નૂતન વર્ષાભિનંદન પાઠવવાનું પર્વ.',
    },
  },
  'bhai-bij': {
    name: {
      en: 'Bhai Bij (Bhai Dooj)',
      hi: 'भाई दूज (यम द्वितीया)',
      gu: 'ભાઈ બીજ (યમ દ્વિતીયા)',
    },
    shortDescription: {
      en: 'Celebrated on Kartak Sud 2, reinforcing the sacred bond between brothers and sisters through tilak ceremonies and festive meals.',
      hi: 'कार्तिक शुक्ल द्वितीया का पर्व जिसमें बहनें भाई को तिलक लगाकर उसकी लंबी उम्र और सुख-समृद्धि की कामना करती हैं।',
      gu: 'કારતક સુદ બીજનો તહેવાર, જેમાં બહેન ભાઈને તિલક કરીને દીર્ઘાયુની શુભેચ્છા પાઠવે છે અને ભાઈ-બહેન સાથે ભોજન લે છે.',
    },
  },
  'labh-pancham': {
    name: {
      en: 'Labh Pancham (Saubhagya Panchami)',
      hi: 'लाभ पंचम (सौभाग्य पंचमी)',
      gu: 'લાભ પાંચમ (સૌભાગ્ય પંચમી)',
    },
    shortDescription: {
      en: 'The highly auspicious fifth day of the Gujarati New Year on Kartak Sud 5, marking the reopening of businesses and shops with new ledgers.',
      hi: 'कार्तिक शुक्ल पंचमी का शुभ दिन, जब नए व्यापारिक प्रतिष्ठान खोले जाते हैं और नए बही-खातों का श्रीगणेश किया जाता है।',
      gu: 'દિવાળી વેકેશન પછી કારતક સુદ પાંચમના દિવસે વેપાર-ધંધાના શુભ મુહૂર્ત અને ચોપડાનું વિધિવત પૂજન કરવાનો મંગલ દિવસ.',
    },
  },
  'dev-diwali': {
    name: {
      en: 'Dev Diwali (Kartika Purnima)',
      hi: 'देव दीपावली (कार्तिक पूर्णिमा)',
      gu: 'દેવ દિવાળી (ત્રિપુરાંતક પૂનમ)',
    },
    shortDescription: {
      en: 'The Diwali of the Gods celebrated on Kartika Purnima, concluding the holy month of Kartak with thousands of lamps lit on river ghats and temples.',
      hi: 'कार्तिक पूर्णिमा को देवताओं की दीपावली के रूप में मनाया जाने वाला पर्व, जिसमें तुलसी विवाह संपन्न होता है और पवित्र नदियों के घाट दीपों से जगमगा उठते हैं।',
      gu: 'કારતકી પૂનમનો મહાપર્વ, દેવોની દિવાળી, તુલસી વિવાહની પૂર્ણાહુતિ અને મંદિરોમાં ભવ્ય અન્નકૂટ દર્શન.',
    },
  },
  'maha-shivaratri': {
    name: {
      en: 'Maha Shivaratri',
      hi: 'महाशिवरात्रि',
      gu: 'મહાશિવરાત્રી',
    },
    shortDescription: {
      en: 'The great night of Lord Shiva observed on Magha/Phalguna Krishna Chaturdashi with overnight vigil, fasting, and sacred milk and water offerings (Abhisheka).',
      hi: 'भगवान शिव और माता पार्वती के दिव्य मिलन की पावन रात्रि। महा कृष्ण चतुर्दशी को रुद्राभिषेक, बेलपत्र अर्पण, उपवास और चार प्रहर की पूजा की जाती है।',
      gu: 'દેવાધિદેવ મહાદેવની ઉપાસનાની મહા રાત્રિ. મહા વદ ચૌદશે શિવલિંગ પર જળાભિષેક, બીલીપત્ર, ઉપવાસ અને ચાર પ્રહરની ભક્તિ થાય છે.',
    },
  },
  'holi': {
    name: {
      en: 'Holi (Holika Dahan)',
      hi: 'होलिका दहन (छोटी होली)',
      gu: 'હોળી (હોલિકા દહન)',
    },
    shortDescription: {
      en: 'The festival of burning evil celebrated on the full moon eve of Phalguna, commemorating the divine protection of devotee Prahlad.',
      hi: 'फाल्गुन पूर्णिमा की संध्या पर होलिका दहन का पर्व, जो भक्त प्रह्लाद की रक्षा और अहंकार पर ईश्वर भक्ति की विजय का संदेश देता है।',
      gu: 'ફાગણ સુદ પૂનમની સંધ્યાએ હોલિકા દહન, જેમાં શ્રીફળ, ધાણી અને ખજૂર અર્પણ કરીને અનિષ્ટ પર ભક્તિના વિજયની ઉજવણી થાય છે.',
    },
  },
  'dhuleti': {
    name: {
      en: 'Dhuleti (Holi Dhuleti)',
      hi: 'धुलेटी (रंगोत्सव / होली)',
      gu: 'ધૂળેટી (રંગોત્સવ)',
    },
    shortDescription: {
      en: 'The joyous festival of colors celebrated the day after Holika Dahan on Chaitra Vad 1, welcoming spring with vibrant powders and water.',
      hi: 'होलिका दहन के अगले दिन मनाया जाने वाला रंगों का महाउत्सव, जिसमें गुलाल और प्राकृतिक रंगों से वसंत ऋतु का स्वागत किया जाता है।',
      gu: 'હોળીના બીજા દિવસે રંગો, ગુલાલ અને પિચકારીઓથી વસંતનું સ્વાગત કરતો ઉલ્લાસમય તહેવાર.',
    },
  },
  'rama-navami': {
    name: {
      en: 'Rama Navami',
      hi: 'श्री राम नवमी',
      gu: 'શ્રી રામ નવમી',
    },
    shortDescription: {
      en: 'The celebration of the birth of Lord Rama on Chaitra Shukla Navami, concluding Chaitra Navaratri with devotional chanting and temple celebrations.',
      hi: 'चैत्र शुक्ल नवमी को मर्यादा पुरुषोत्तम भगवान श्रीराम का जन्मोत्सव, जो चैत्र नवरात्रि का समापन और अखंड रामायण पाठ के साथ मनाया जाता है।',
      gu: 'ચૈત્ર સુદ નોમના પાવન દિવસે મર્યાદા પુરુષોત્તમ પ્રભુ શ્રીરામનો જન્મોત્સવ, બપોરે ૧૨ વાગ્યે આરતી અને ઉત્સવ.',
    },
  },
  'hanuman-jayanti': {
    name: {
      en: 'Hanuman Jayanti',
      hi: 'हनुमान जयंती',
      gu: 'હનુમાન જયંતિ',
    },
    shortDescription: {
      en: 'Commemorating the birth of Lord Hanuman on the full moon day of Chaitra, observed with Hanuman Chalisa recitations and sindoor offerings.',
      hi: 'चैत्र पूर्णिमा को पवनपुत्र भगवान हनुमान का जन्मोत्सव, जो सिंदूर अर्पण, सुंदरकांड और हनुमान चालीसा पाठ के साथ मनाया जाता है।',
      gu: 'ચૈત્ર પૂનમે સંકટમોચન હનુમાનજી મહારાજનો જન્મોત્સવ, મંદિરોમાં સિંદૂર પૂજન, તેલ-આંકડાની માળા અને ભજન કીર્તન.',
    },
  },
  'rosh-hashanah': {
    name: {
      en: 'Rosh Hashanah',
      hi: 'रोश हशनाह (यहूदी नववर्ष)',
      gu: 'રોશ હશનાહ (યહૂદી નવું વર્ષ)',
    },
    shortDescription: {
      en: 'The Jewish New Year marking the anniversary of creation, celebrated with the sounding of the Shofar and eating apples dipped in honey for a sweet year.',
      hi: 'यहूदी नववर्ष जो सृष्टि के निर्माण की वर्षगांठ का प्रतीक है। शोफार (मेढ़े का सींग) फूंकने और मीठे वर्ष के लिए शहद में डूबे सेब खाने की परंपरा है।',
      gu: 'યહૂદી નવું વર્ષ, જે શોફાર ફૂંકીને અને મધુર વર્ષની કામના સાથે મધમાં બોળેલો સફરજન ખાઈને ઉજવવામાં આવે છે.',
    },
  },
  'yom-kippur': {
    name: {
      en: 'Yom Kippur',
      hi: 'योम किप्पुर (प्रायश्चित्त दिवस)',
      gu: 'યોમ કિપ્પુર (પ્રાયશ્ચિત દિવસ)',
    },
    shortDescription: {
      en: 'The Day of Atonement, the holiest day on the Hebrew calendar, observed with a 25-hour fast, intensive prayer, and repentance.',
      hi: 'यहूदी कैलेंडर का सबसे पवित्र दिवस, जो २५ घंटे के उपवास, गहन प्रार्थना और ईश्वर से क्षमा याचना के साथ मनाया जाता है।',
      gu: 'હિબ્રૂ કેલેન્ડરનો સૌથી પવિત્ર દિવસ, જે ૨૫ કલાકના ઉપવાસ, પ્રાર્થના અને આત્મશુદ્ધિ સાથે ઉજવાય છે.',
    },
  },
  'sukkot': {
    name: {
      en: 'Sukkot',
      hi: 'सुक्कोत (कुटीर पर्व)',
      gu: 'સુક્કોત (પર્ણકુટીર પર્વ)',
    },
    shortDescription: {
      en: 'The week-long Jewish festival commemorating the 40-year desert journey of the Israelites, observed by dwelling in temporary booths (sukkahs).',
      hi: 'सप्ताह भर चलने वाला यहूदी फसल पर्व, जो जंगल में ४० वर्षों की यात्रा की स्मृति में अस्थाई कुटीरों (सुक्का) में रहकर मनाया जाता है।',
      gu: 'યહૂદીઓનો સપ્તાહભર ચાલતો પર્વ, જેમાં ઐતિહાસિક સ્મૃતિ રૂપે અસ્થાયી પર્ણકુટીરમાં રહીને ઈશ્વરનો આભાર માનવામાં આવે છે.',
    },
  },
  'hanukkah': {
    name: {
      en: 'Hanukkah',
      hi: 'हनुक्का (प्रकाश पर्व)',
      gu: 'હનુક્કા (રોશનીનું પર્વ)',
    },
    shortDescription: {
      en: 'The eight-day Jewish Festival of Lights celebrating the rededication of the Second Temple in Jerusalem, marked by lighting the Menorah.',
      hi: 'आठ दिवसीय यहूदी प्रकाश पर्व जो यरुशलम के दूसरे मंदिर के पुनर्समर्पण और तेल के चमत्कार की याद में मेनोराह (दीपदान) जलाकर मनाया जाता है।',
      gu: 'યહૂદીઓનો ૮ દિવસીય રોશનીનો તહેવાર, જેમાં મેનોરાહ દીપ પ્રગટાવીને ઐતિહાસિક ચમત્કારની ઉજવણી કરાય છે.',
    },
  },
  'pesach': {
    name: {
      en: 'Passover (Pesach)',
      hi: 'पासओवर (पेसाख / मुक्ति पर्व)',
      gu: 'પાસઓવર (પેસાખ / મુક્તિ પર્વ)',
    },
    shortDescription: {
      en: 'The major Jewish festival celebrating the liberation of the Israelites from slavery in ancient Egypt, centered around the traditional Seder meal.',
      hi: 'प्राचीन मिस्र की गुलामी से इसराइली समुदाय की मुक्ति का महापर्व, जो पारंपरिक सेडर भोज और अखमीरी रोटी (मात्जाह) के साथ मनाया जाता है।',
      gu: 'પ્રાચીન ઇજિપ્તની ગુલામીમાંથી મુક્તિનું પ્રતીક પર્વ, જે પારંપરિક સેડર ભોજન સાથે ઉજવવામાં આવે છે.',
    },
  },
  'islamic-new-year': {
    name: {
      en: 'Hijri New Year',
      hi: 'हिजरी नववर्ष (इस्लामी नया साल)',
      gu: 'હિજરી નવું વર્ષ (ઇસ્લામિક નૂતન વર્ષ)',
    },
    shortDescription: {
      en: 'The first day of the Islamic lunar calendar on 1 Muharram, marking the historic Hijra from Mecca to Medina.',
      hi: 'इस्लामी चांद्र कैलेंडर का प्रथम दिन (१ मुहर्रम), जो सन् ६२२ ईस्वी में मक्का से मदीना हिजरत की ऐतिहासिक यात्रा की स्मृति कराता है।',
      gu: 'ઇસ્લામિક ચાંદ્ર કેલેન્ડરનો પ્રથમ દિવસ (૧ મોહરમ), જે ઐતિહાસિક હિજરતની સ્મૃતિમાં નૂતન વર્ષ તરીકે ઉજવાય છે.',
    },
  },
  'ashura': {
    name: {
      en: 'Day of Ashura',
      hi: 'आशूरा (१० मुहर्रम)',
      gu: 'આશુરા (૧૦ મોહરમ)',
    },
    shortDescription: {
      en: 'Observed on the 10th day of Muharram, commemorating the rescue of Prophet Moses at the Red Sea and the martyrdom of Imam Husayn at Karbala.',
      hi: 'मुहर्रम की १०वीं तारीख का पावन दिन, जिसमें हज़रत मूसा की लाल सागर से मुक्ति और कर्बला में इमाम हुसैन की शहादत का स्मरण किया जाता है।',
      gu: 'મોહરમની ૧૦મી તારીખ, જેમાં હઝરત મૂસાની મુક્તિ અને કરબલામાં ઇમામ હુસૈનની શહાદતનું સ્મરણ કરવામાં આવે છે.',
    },
  },
  'mawlid': {
    name: {
      en: 'Mawlid an-Nabi',
      hi: 'मिलाद-उन-नबी (ईद-ए-मिलाद)',
      gu: 'મિલાદ-ઉન-નબી (ઈદ-એ-મિલાદ)',
    },
    shortDescription: {
      en: 'Commemorating the birth of the Islamic Prophet Muhammad on 12 Rabi\' al-Awwal with prayers, poetry, and charity.',
      hi: '१२ रबीउल अव्वल को पैगंबर मुहम्मद साहब के जन्मोत्सव का पावन पर्व, जो विशेष नमाज़, नात पाठ और दान-पुण्य के साथ मनाया जाता है।',
      gu: '૧૨ રબીઉલ અવ્વલના રોજ પયગંબર મુહમ્મદ સાહેબના જન્મદિનની ઉજવણી, વિશેષ નમાઝ અને સેવાકાર્યો.',
    },
  },
  'eid-al-fitr': {
    name: {
      en: 'Eid al-Fitr',
      hi: 'ईद-उल-फ़ितर (मीठी ईद)',
      gu: 'ઈદ-ઉલ-ફિત્ર (રમઝાન ઈદ)',
    },
    shortDescription: {
      en: 'The festival marking the conclusion of the holy month of Ramadan on 1 Shawwal, celebrated with communal prayers, feast, and zakat charity.',
      hi: 'पवित्र रमज़ान माह के रोज़ों की पूर्णता पर १ शव्वाल को मनाया जाने वाला आनंदोत्सव, जिसमें विशेष नमाज़, सिवइयां और फ़ित्र दान की परंपरा है।',
      gu: 'રમઝાન માસના ઉપવાસ (રોઝા) પૂર્ણ થવા પર શવ્વાલ માસના પહેલા દિવસે ઉજવાતી ઈદ, જેમાં નમાઝ અને ભાઈચારાની આપ-લે થાય છે.',
    },
  },
  'eid-al-adha': {
    name: {
      en: 'Eid al-Adha',
      hi: 'ईद-उल-अज़हा (बकरीद)',
      gu: 'ઈદ-ઉલ-અઝહા (બકરી ઈદ)',
    },
    shortDescription: {
      en: 'The Festival of Sacrifice marking the culmination of the Hajj pilgrimage on 10 Dhu al-Hijjah, honoring Prophet Ibrahim\'s devotion.',
      hi: '१० ज़ुल-हिज्जाह को हज़ यात्रा की पूर्णता और हज़रत इब्राहिम के समर्पण की स्मृति में मनाया जाने वाला कुर्बानी का पर्व।',
      gu: 'હજ યાત્રાના સમાપન પર ૧૦ ઝુલ-હિજ્જાહના રોજ હઝરત ઇબ્રાહિમના સમર્પણની સ્મૃતિમાં ઉજવાતો પર્વ.',
    },
  },
  'nowruz': {
    name: {
      en: 'Nowruz (Persian New Year)',
      hi: 'नवरोज़ (फ़ारसी नववर्ष)',
      gu: 'નવરોઝ (પર્શિયન નવું વર્ષ)',
    },
    shortDescription: {
      en: 'The Iranian/Persian New Year celebrated on the astronomical vernal equinox (1 Farvardin), honoring rebirth, renewal, and the Haft-Sin table.',
      hi: 'खगोलीय वसंत विषुव (१ फ़रवरदीन) पर मनाया जाने वाला प्राचीन ईरानी/फ़ारसी नववर्ष, जो प्रकृति के पुनर्जन्म और हाफ़्त-सीन की मेज़ से सजाया जाता है।',
      gu: 'વસંત ઋતુના આગમન (૧ ફરવરદીન) પર ઉજવાતું પારસી/ઈરાની નવું વર્ષ, જે નવીનતા અને હાફ્ટ-સીન સજાવટ સાથે ઉજવાય છે.',
    },
  },
  'shab-e-yalda': {
    name: {
      en: 'Shab-e Yalda (Yalda Night)',
      hi: 'शब-ए-यल्दा (यल्दा रात्रि)',
      gu: 'શબ-એ-યલ્દા (યલ્દા રાત્રિ)',
    },
    shortDescription: {
      en: 'The ancient Persian winter solstice festival celebrating the longest night of the year with poetry readings, pomegranates, and family gatherings.',
      hi: 'प्राचीन फ़ारसी शीतकालीन संक्रांति पर्व, जिसमें वर्ष की सबसे लंबी रात को हाफ़िज़ की शायरी, अनार, तरबूज और पारिवारिक मिलन के साथ बिताया जाता है।',
      gu: 'વર્ષની સૌથી લાંબી રાત્રિ (વિન્ટર સોલસ્ટિસ) ની ઉજવણી કરતો પ્રાચીન પર્શિયન તહેવાર, કવિતા વાચન અને ફળો સાથે ઉજવાય છે.',
    },
  },
  'saka-new-year': {
    name: {
      en: 'Saka Calendar New Year',
      hi: 'राष्ट्रीय शक संवत नववर्ष',
      gu: 'રાષ્ટ્રીય શક સંવત નવું વર્ષ',
    },
    shortDescription: {
      en: 'The start of the Indian National Calendar year on 1 Chaitra (March 22 / March 21 in leap years), aligning with the vernal equinox.',
      hi: 'भारतीय राष्ट्रीय पंचांग का प्रथम दिवस (१ चैत्र / २२ मार्च), जो वसंत विषुव के साथ भारत के आधिकारिक नागरिक वर्ष का प्रारंभ करता है।',
      gu: 'ભારતીય રાષ્ટ્રીય પંચાંગનું નવું વર્ષ (૧ ચૈત્ર / ૨૨ માર્ચ), જે સૂર્યના વસંત વિષુવ સાથે શરૂ થાય છે.',
    },
  },
  'republic-day-india': {
    name: {
      en: 'Republic Day of India',
      hi: 'गणतंत्र दिवस (भारत)',
      gu: 'પ્રજાસત્તાક દિન (ભારત)',
    },
    shortDescription: {
      en: 'Commemorating the enactment of the Constitution of India on January 26, 1950, transitioning India into a sovereign democratic republic.',
      hi: '२६ जनवरी १९५० को भारत का संविधान लागू होने का राष्ट्रीय पर्व, जिसने भारत को एक संप्रभु लोकतांत्रिक गणराज्य के रूप में स्थापित किया।',
      gu: '૨૬ જાન્યુઆરી ૧૯૫૦ ના રોજ ભારતના બંધારણના અમલીકરણની સ્મૃતિમાં ઉજવાતો રાષ્ટ્રીય પ્રજાસત્તાક પર્વ.',
    },
  },
  'independence-day-india': {
    name: {
      en: 'Independence Day of India',
      hi: 'स्वतंत्रता दिवस (भारत)',
      gu: 'સ્વાતંત્ર્ય દિન (ભારત)',
    },
    shortDescription: {
      en: 'Marking India\'s independence from British colonial rule on August 15, 1947, celebrated with flag-hoisting ceremonies and national pride.',
      hi: '१५ अगस्त १९४७ को ब्रिटिश शासन से भारत की स्वतंत्रता का ऐतिहासिक राष्ट्रीय पर्व, जो राष्ट्रध्वज फहराने और राष्ट्रभक्ति के साथ मनाया जाता है।',
      gu: '૧૫ ઓગસ્ટ ૧૯૪૭ ના રોજ ભારતની આઝાદીની સ્મૃતિમાં દેશભરમાં ધ્વજવંદન સાથે ઉજવાતો રાષ્ટ્રીય સ્વાતંત્ર્ય પર્વ.',
    },
  },
  'remembrance-victims-terrorism': {
    name: {
      en: 'International Day of Remembrance for Victims of Terrorism',
      hi: 'आतंकवाद के पीड़ितों की स्मृति का अंतरराष्ट्रीय दिवस',
      gu: 'આતંકવાદના પીડિતોની સ્મૃતિનો આંતરરાષ્ટ્રીય દિવસ',
    },
    shortDescription: {
      en: 'Observed on August 21 to honor and support the victims and survivors of terrorism and promote international solidarity.',
      hi: '२१ अगस्त को आतंकवाद के पीड़ितों और उत्तरजीवियों के सम्मान व समर्थन तथा वैश्विक एकजुटता के लिए संयुक्त राष्ट्र द्वारा समर्पित दिवस।',
      gu: '૨૧ ઓગસ્ટે આતંકવાદનો ભોગ બનેલા લોકોના સન્માન અને વૈશ્વિક શાંતિ માટે સમર્પિત આંતરરાષ્ટ્રીય સ્મરણ દિવસ.',
    },
  },
  'international-day-peace': {
    name: {
      en: 'International Day of Peace',
      hi: 'अंतरराष्ट्रीय शांति दिवस',
      gu: 'આંતરરાષ્ટ્રીય શાંતિ દિવસ',
    },
    shortDescription: {
      en: 'Established by the United Nations on September 21, dedicated to world peace and non-violence with a 24-hour global ceasefire.',
      hi: 'संयुक्त राष्ट्र द्वारा २१ सितंबर को स्थापित दिवस, जो विश्व शांति, अहिंसा और २४ घंटे के युद्धविराम के संकल्प को समर्पित है।',
      gu: 'સંયુક્ત રાષ્ટ્ર દ્વારા ૨૧ સપ્ટેમ્બરે વિશ્વ શાંતિ અને અહિંસાના સંકલ્પ સાથે ઉજવાતો આંતરરાષ્ટ્રીય દિવસ.',
    },
  },
  'gandhi-jayanti': {
    name: {
      en: 'Gandhi Jayanti',
      hi: 'गांधी जयंती (अंतरराष्ट्रीय अहिंसा दिवस)',
      gu: 'ગાંધી જયંતી (આંતરરાષ્ટ્રીય અહિંસા દિન)',
    },
    shortDescription: {
      en: 'Commemorating the birth of Mahatma Gandhi on October 2, celebrated in India as a national holiday and globally as the International Day of Non-Violence.',
      hi: '२ अक्टूबर को राष्ट्रपिता महात्मा गांधी का जन्मदिवस, जिसे भारत में राष्ट्रीय पर्व और विश्व भर में अंतरराष्ट्रीय अहिंसा दिवस के रूप में मनाया जाता है।',
      gu: '૨ ઓક્ટોબરે પૂજ્ય મહાત્મા ગાંધીજીનો જન્મદિન, જે ભારતમાં રાષ્ટ્રીય તહેવાર અને વિશ્વમાં આંતરરાષ્ટ્રીય અહિંસા દિન તરીકે ઉજવાય છે.',
    },
  },
  'chinese-new-year': {
    name: {
      en: 'Chinese New Year (Spring Festival / 春节)',
      hi: 'चीनी नववर्ष (वसंतोत्सव / 春节)',
      gu: 'ચાઇનીઝ નવું વર્ષ (વસંતોત્સવ / 春节)',
    },
    shortDescription: {
      en: 'The paramount traditional East Asian festival celebrating the new year on the second new moon after the winter solstice, marked by lion dances and reunion dinners.',
      hi: 'शीतकालीन संक्रांति के बाद दूसरी अमावस्या को मनाया जाने वाला प्रमुख पारंपरिक चीनी वसंतोत्सव, जिसमें शेर नृत्य और पारिवारिक भोज की परंपरा है।',
      gu: 'પૂર્વ એશિયાનો સૌથી મોટો પરંપરાગત તહેવાર, જે પરિવાર મિલન, લાલ પરબિડીયા અને ડ્રેગન નૃત્ય સાથે ઉજવાય છે.',
    },
  },
  'lantern-festival': {
    name: {
      en: 'Lantern Festival (Yuanxiao / 元宵节)',
      hi: 'लालटेन महोत्सव (युआनशियाओ / 元宵节)',
      gu: 'લાલટેન મહોત્સવ (યુઆનશિયાઓ / 元宵节)',
    },
    shortDescription: {
      en: 'The 15th day of the first lunar month marking the final day of traditional Chinese New Year celebrations with glowing lanterns and sweet dumplings.',
      hi: 'प्रथम चंद्र मास की १५वीं तिथि जो चीनी नववर्ष उत्सव के समापन पर लालटेन जलाने और युआनशियाओ (मीठे पकवान) खाने से मनाई जाती है।',
      gu: 'પહેલા ચંદ્ર માસની ૧૫મી તારીખે ઉજવાતો લાલટેન ઉત્સવ, જે ચાઇનીઝ નૂતન વર્ષના ઉત્સવનું સમાપન દર્શાવે છે.',
    },
  },
  'dragon-boat-festival': {
    name: {
      en: 'Dragon Boat Festival (Duanwu / 端午节)',
      hi: 'ड्रैगन बोट महोत्सव (दुआनवू / 端午节)',
      gu: 'ડ્રેગન બોટ મહોત્સવ (દુઆનવૂ / 端午节)',
    },
    shortDescription: {
      en: 'Observed on the 5th day of the 5th lunar month, commemorating ancient poet Qu Yuan with dragon boat races and sticky rice dumplings (zongzi).',
      hi: '५वें चंद्र मास के ५वें दिन मनाया जाने वाला प्राचीन चीनी पर्व, जिसमें कवि चू युआन की स्मृति में ड्रैगन बोट दौड़ और ज़ोंगज़ी पकवान बनते हैं।',
      gu: '૫મા ચંદ્ર માસના ૫મા દિવસે ઉજવાતો તહેવાર, જેમાં ડ્રેગન બોટ રેસ અને ઝોંગઝી વાનગીઓનો આનંદ લેવાય છે.',
    },
  },
  'mid-autumn-festival': {
    name: {
      en: 'Mid-Autumn Festival (Zhongqiu / 中秋节)',
      hi: 'मध्य-शरद महोत्सव (झोंगछ्यू / 中秋节)',
      gu: 'મધ્ય-શરદ મહોત્સવ (ઝોંગછ્યૂ / 中秋节)',
    },
    shortDescription: {
      en: 'Celebrated on the full moon of the 8th lunar month, celebrating the harvest, mooncakes, and the legend of the Moon Goddess Chang\'e.',
      hi: '८वें चंद्र मास की पूर्णिमा को फसल कटाई, मूनकेक और चंद्रमा की देवी चांग-ए की स्मृति में मनाया जाने वाला पारिवारिक मिलन का पर्व।',
      gu: '૮મા ચંદ્ર માસની પૂનમે પૂર્ણ ચંદ્ર, મૂનકેક અને પાકની લણણીની ખુશીમાં ઉજવાતો લોકપ્રિય પર્વ.',
    },
  },
  'double-ninth-festival': {
    name: {
      en: 'Double Ninth Festival (Chongyang / 重阳节)',
      hi: 'द्वि-नवमी पर्व (चोंगयांग / 重阳节)',
      gu: 'ડબલ નાઇન્થ ફેસ્ટિવલ (ચોંગયાંગ / 重阳节)',
    },
    shortDescription: {
      en: 'Occurring on the 9th day of the 9th lunar month, an auspicious day dedicated to seniors, mountain climbing, and chrysanthemum wine.',
      hi: '९वें चंद्र मास के ९वें दिन मनाया जाने वाला पारंपरिक दिवस, जो वरिष्ठ नागरिकों के सम्मान, पर्वत आरोहण और गुलदाउदी चाय को समर्पित है।',
      gu: '૯મા ચંદ્ર માસના ૯મા દિવસે વડીલોના સન્માન અને પર્વતારોહણ સાથે ઉજવાતો પરંપરાગત દિવસ.',
    },
  },
  'coptic-new-year': {
    name: {
      en: 'Nayrouz (Coptic New Year / Feast of the Martyrs)',
      hi: 'नैरूज़ (कॉप्टिक नववर्ष / शहीदों का पर्व)',
      gu: 'નૈરૂઝ (કોપ્ટિક નવું વર્ષ / શહીદોનું પર્વ)',
    },
    shortDescription: {
      en: 'The feast of 1 Tout (September 11) marking the start of the Coptic calendar year, honoring Egyptian Christian martyrs.',
      hi: '१ तूत (११ सितंबर) को मनाया जाने वाला कॉप्टिक नववर्ष, जो मिस्र के ईसाई शहीदों के बलिदान और आस्था की स्मृति का पावन दिन है।',
      gu: '૧ તૂત (૧૧ સપ્ટેમ્બર) ના રોજ ઉજવાતું કોપ્ટિક નૂતન વર્ષ, જે ઇજિપ્તના ખ્રિસ્તી શહીદોના સ્મરણમાં ઉજવાય છે.',
    },
  },
  'coptic-christmas': {
    name: {
      en: 'Coptic Christmas (Feast of the Nativity / 29 Kiahk)',
      hi: 'कॉप्टिक क्रिसमस (प्रभु ईसा का जन्मोत्सव / २९ कियाहक)',
      gu: 'કોપ્ટિક ક્રિસમસ (પ્રભુ ઈસુ જન્મોત્સવ / ૨૯ કિયાહક)',
    },
    shortDescription: {
      en: 'Celebrated on 29 Kiahk (January 7 Gregorian), concluding the 43-day Nativity Fast with midnight mass and special festive breads.',
      hi: '२९ कियाहक (७ जनवरी ग्रेगोरियन) को ४३ दिवसीय उपवास की समाप्ति पर मध्यरात्रि प्रार्थना और विशेष भोज के साथ मनाया जाने वाला ईसा मसीह का जन्मोत्सव।',
      gu: '૨૯ કિયાહક (૭ જાન્યુઆરી) ના રોજ મધ્યરાત્રિની પ્રાર્થના અને વિશેષ વાનગીઓ સાથે ઉજવાતો કોપ્ટિક નાતાલ પર્વ.',
    },
  },
  'enkutatash': {
    name: {
      en: 'Enkutatash (Ethiopian New Year)',
      hi: 'एनकुताताश (इथियोपियाई नववर्ष)',
      gu: 'એન્કુતાતાશ (ઇથિયોપિયન નવું વર્ષ)',
    },
    shortDescription: {
      en: 'The Ethiopian New Year on 1 Meskerem (September 11), welcoming the end of the rainy season with yellow daisies (Adey Abeba) and singing.',
      hi: '१ मेसकेरेम (११ सितंबर) को मनाया जाने वाला इथियोपियाई नववर्ष, जो वर्षा ऋतु की समाप्ति और पीले फूलों (अदेय अबेबा) के साथ नवजीवन का स्वागत करता है।',
      gu: '૧ મેસ્કેરેમ (૧૧ સપ્ટેમ્બર) ના રોજ ઉજવાતું ઇથિયોપિયાનું નવું વર્ષ, જે પીળા ફૂલો અને ગીતો સાથે નવી ઋતુનું સ્વાગત કરે છે.',
    },
  },
  'meskel': {
    name: {
      en: 'Meskel (Finding of the True Cross)',
      hi: 'मेस्केल (पवित्र क्रूस की खोज का पर्व)',
      gu: 'મેસ્કેલ (પવિત્ર ક્રૂસની શોધનું પર્વ)',
    },
    shortDescription: {
      en: 'The Ethiopian Orthodox festival on 17 Meskerem (September 27), marked by the lighting of large communal bonfires (Demera).',
      hi: '१७ मेसकेरेम (२७ सितंबर) को इथियोपियाई ऑर्थोडॉक्स परंपरा का पावन पर्व, जिसमें विशाल अलाव (डेमेरा) प्रज्वलित कर पवित्र क्रूस की खोज का उत्सव मनाया जाता है।',
      gu: '૧૭ મેસ્કેરેમ (૨૭ સપ્ટેમ્બર) ના રોજ વિશાળ બોનફાયર (ડેમેરા) પ્રગટાવીને ઉજવાતો ઇથિયોપિયાનો પવિત્ર ધાર્મિક ઉત્સવ.',
    },
  },
  'genna': {
    name: {
      en: 'Genna (Ethiopian Christmas)',
      hi: 'गेन्ना (इथियोपियाई क्रिसमस)',
      gu: 'ગેન્ના (ઇથિયોપિયન નાતાલ)',
    },
    shortDescription: {
      en: 'Celebrated on 29 Tahsas (January 7 Gregorian) following a 43-day fast, observed with overnight church services and traditional hockey-like games.',
      hi: '२९ तहसास (७ जनवरी ग्रेगोरियन) को मनाया जाने वाला इथियोपियाई क्रिसमस, जिसमें रात्रिकालीन चर्च प्रार्थनाएं और पारंपरिक गेन्ना खेल खेला जाता है।',
      gu: '૨૯ તહસાસ (૭ જાન્યુઆરી) ના રોજ રાત્રિ ઉપાસના અને પારંપરિક રમતો સાથે ઉજવાતો ઇથિયોપિયન ક્રિસમસ તહેવાર.',
    },
  },
  'timkat': {
    name: {
      en: 'Timkat (Ethiopian Epiphany)',
      hi: 'तिमकत (इथियोपियाई बपतिस्मा पर्व)',
      gu: 'તિમકત (ઇથિયોપિયન એપિફેની)',
    },
    shortDescription: {
      en: 'The Ethiopian Orthodox celebration of the Baptism of Jesus in the Jordan River on 11 Tir (January 19), featuring processions carrying the replica of the Ark of the Covenant (Tabot).',
      hi: '११ तीर (१९ जनवरी) को जॉर्डन नदी में ईसा मसीह के बपतिस्मा की स्मृति में मनाया जाने वाला भव्य पर्व, जिसमें ताबोत (पवित्र मंजूषा) की शोभायात्रा निकाली जाती है।',
      gu: '૧૧ તીર (૧૯ જાન્યુઆરી) ના રોજ યોર્દન નદીમાં પ્રભુ ઈસુના બાપ્તિસ્માની સ્મૃતિમાં તાબોત યાત્રા સાથે ઉજવાતો ભવ્ય પર્વ.',
    },
  },
};

export function getLocalizedObservance(id: string, locale: Locale = 'en') {
  const item = localizedObservances[id];
  if (!item) return null;
  return {
    name: item.name[locale] || item.name.en,
    shortDescription: item.shortDescription[locale] || item.shortDescription.en,
  };
}
