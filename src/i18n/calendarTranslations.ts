import type { Locale, LocalizedCalendarInfo } from './types';
import type { CalendarDate } from '../engines/calendar/types';

export const localizedCalendars: LocalizedCalendarInfo[] = [
  {
    id: 'hindu-vikram',
    name: {
      en: 'Vikram Samvat (Gujarati/Hindu)',
      hi: 'विक्रम संवत (गुजराती/हिंदू)',
      gu: 'વિક્રમ સંવત (ગુજરાતી/હિન્દુ)',
    },
    nativeName: 'विक्रम संवत् / વિક્રમ સંવત',
    type: {
      en: 'Lunisolar',
      hi: 'चांद्र-सौर',
      gu: 'ચંદ્ર-સૌર (લ્યુનિસોલર)',
    },
    description: {
      en: 'A traditional lunisolar calendar used historically across Northern and Western India, including Gujarat. The Vikram Samvat era is offset by approximately 57 years ahead of the Gregorian calendar. Months are based on lunar phases, while the year aligns with solar cycles.',
      hi: 'उत्तर और पश्चिमी भारत (गुजरात सहित) में ऐतिहासिक रूप से प्रयुक्त एक पारंपरिक चांद्र-सौर कैलेंडर। विक्रम संवत काल ग्रेगोरियन कैलेंडर से लगभग ५७ वर्ष आगे है। महीने चंद्रमा की कलाओं (तिथियों) पर आधारित होते हैं, जबकि वर्ष सौर चक्र के साथ संरेखित रहता है।',
      gu: 'ગુજરાત સહિત ઉત્તર અને પશ્ચિમ ભારતમાં ઐતિહાસિક રીતે વપરાતું પારંપરિક ચંદ્ર-સૌર કેલેન્ડર. વિક્રમ સંવત વર્ષ ગ્રેગોરિયન કેલેન્ડર કરતાં લગભગ ૫૭ વર્ષ આગળ છે. મહિનાઓ ચંદ્ર કળા (તિથિ) પર આધારિત છે, જ્યારે વર્ષ સૂર્ય ચક્ર સાથે જોડાયેલું રહે છે.',
    },
    cycleNote: {
      en: 'Lunisolar, 12 lunar months (~354 days) with an extra intercalary month (Adhik Maas) added roughly every 3 years to align with the solar year.',
      hi: 'चांद्र-सौर, १२ चंद्र मास (~३५४ दिन) जिसमें सौर वर्ष के साथ सामंजस्य बनाए रखने के लिए लगभग प्रत्येक ३ वर्ष में एक अतिरिक्त अधिक मास जोड़ा जाता है।',
      gu: 'ચંદ્ર-સૌર, ૧૨ ચંદ્ર માસ (~૩૫૪ દિવસ) જેમાં સૌર વર્ષ સાથે સુસંગતતા જાળવવા દર ૩ વર્ષે એક વધારાનો અધિક માસ ઉમેરવામાં આવે છે.',
    },
    variations: {
      en: 'Regional variations include Kartika-adi (New Year begins in Autumn, observed in Gujarat) and Chaitra-adi (New Year begins in Spring).',
      hi: 'क्षेत्रीय विविधताओं में कार्तिक-आदि (शरद ऋतु में गुजराती नववर्ष/बेस्तू वर्ष) और चैत्र-आदि (वसंत में नववर्ष) शामिल हैं।',
      gu: 'પ્રાદેશિક વિવિધતાઓમાં કાર્તિક-આદિ (નૂતન વર્ષ/બેસતું વર્ષ - દિવાળી પછી, ગુજરાતમાં) અને ચૈત્ર-આદિ (વસંતમાં નવું વર્ષ) શામેલ છે.',
    },
  },
  {
    id: 'islamic-civil',
    name: {
      en: 'Hijri (Islamic)',
      hi: 'हिजरी (इस्लामी कैलेंडर)',
      gu: 'હિજરી (ઇસ્લામિક કેલેન્ડર)',
    },
    nativeName: 'التقويم الهجري',
    type: {
      en: 'Lunar',
      hi: 'चांद्र (चंद्र आधारित)',
      gu: 'ચાંદ્ર (ચંદ્ર આધારિત)',
    },
    description: {
      en: 'A purely lunar calendar consisting of 12 lunar months in a year of 354 or 355 days. It is used to determine the proper days of Islamic observances and festivals. The era begins with the Hijra (migration of Prophet Muhammad from Mecca to Medina) in 622 CE.',
      hi: 'एक विशुद्ध चांद्र कैलेंडर जिसमें ३૫४ या ३૫५ दिनों के वर्ष में १२ चंद्र मास होते हैं। इसका उपयोग इस्लामी पर्वों और त्योहारों की तिथियां निर्धारित करने के लिए किया जाता है। इसका युग सन् ६२२ ईस्वी में पैगंबर मुहम्मद के मक्का से मदीना हिजरत (प्रवास) से प्रारंभ होता है।',
      gu: 'એક શુદ્ધ ચાંદ્ર કેલેન્ડર જેમાં ૩૫૪ કે ૩૫૫ દિવસના વર્ષમાં ૧૨ ચંદ્ર માસ હોય છે. તેનો ઉપયોગ ઇસ્લામિક પર્વો અને તહેવારોની તિથિઓ નક્કી કરવા માટે થાય છે. આ યુગ ઇ.સ. ૬૨૨ માં પયગંબર મુહમ્મદના મક્કાથી મદીના હિજરત સાથે શરૂ થાય છે.',
    },
    cycleNote: {
      en: 'Purely lunar. Dates drift backward through the Gregorian solar year by approximately 11 days annually.',
      hi: 'विशुद्ध चांद्र। तिथियां ग्रेगोरियन सौर वर्ष के सापेक्ष प्रति वर्ष लगभग ११ दिन पीछे खिसकती हैं।',
      gu: 'સંપૂર્ણપણે ચાંદ્ર. તિથિઓ ગ્રેગોરિયન સૌર વર્ષની તુલનામાં દર વર્ષે લગભગ ૧૧ દિવસ પાછળ ખસે છે.',
    },
    variations: {
      en: 'Umm al-Qura (calculated, used in Saudi Arabia), Tabular Islamic (arithmetic calculation), and local crescent-sighting variations.',
      hi: 'उम्म अल-कुरा (सऊदी अरब में गणना आधारित), सारणीबद्ध इस्लामी (अंकगणितीय गणना), और स्थानीय हिलाल (चांद) दर्शन आधारित परंपराएं।',
      gu: 'ઉમ્મ અલ-કુરા (સાઉદી અરેબિયામાં ગણતરી આધારિત), સારણીબદ્ધ ઇસ્લામિક (ગણિતીય), અને સ્થાનિક ચાંદ દર્શન આધારિત વિવિધતાઓ.',
    },
  },
  {
    id: 'hebrew',
    name: {
      en: 'Hebrew Calendar',
      hi: 'हिब्रू कैलेंडर',
      gu: 'હિબ્રૂ કેલેન્ડર',
    },
    nativeName: 'הַלּוּחַ הָעִבְרִי',
    type: {
      en: 'Lunisolar',
      hi: 'चांद्र-सौर',
      gu: 'ચંદ્ર-સૌર',
    },
    description: {
      en: 'The traditional calendar used for Jewish religious and national observances. It determines the dates for Jewish holidays, weekly Torah portions, and memorial dates. It is calculated using a combination of astronomical lunar cycles and seasonal solar adjustments.',
      hi: 'यहूदी धार्मिक और राष्ट्रीय आयोजनों के लिए प्रयुक्त पारंपरिक कैलेंडर। यह यहूदी छुट्टियों, साप्ताहिक तोराह पाठों और स्मृति दिवसों की तिथियां निर्धारित करता है। यह खगोलीय चंद्र चक्रों और मौसमी सौर समायोजन के समन्वय से संचालित होता है।',
      gu: 'યહૂદી ધાર્મિક અને રાષ્ટ્રીય પરંપરાઓ માટે વપરાતું પારંપરિક કેલેન્ડર. તે યહૂદી તહેવારો, સાપ્તાહિક તોરાહ વાચન અને સ્મૃતિ તિથિઓ નક્કી કરે છે. તે ખગોળીય ચંદ્ર ચક્ર અને ઋતુગત સૂર્ય સંરેખણના આધારે ગણવામાં આવે છે.',
    },
    cycleNote: {
      en: 'Lunisolar, using the 19-year Metonic cycle to insert an extra leap month (Adar I) seven times within the cycle to keep festivals in their correct seasons.',
      hi: 'चांद्र-सौर, १९ वर्षीय मेटोनिक चक्र का उपयोग करके चक्र में ७ बार एक अतिरिक्त लीप माह (अदार १) जोड़ता है ताकि त्योहार अपनी सही ऋतुओं में रहें।',
      gu: 'ચંદ્ર-સૌર, ૧૯ વર્ષના મેટોનિક ચક્રનો ઉપયોગ કરીને ચક્રમાં ૭ વખત વધારાનો અધિક માસ (અદાર ૧) ઉમેરે છે જેથી તહેવારો યોગ્ય ઋતુઓમાં સચવાય.',
    },
    variations: {
      en: 'Calculated mathematical rules are globally standardized today, though historically determined by visual observation in Israel.',
      hi: 'गणितीय नियम आज विश्व स्तर पर मानकीकृत हैं, हालांकि ऐतिहासिक रूप से प्राचीन इसराइल में प्रत्यक्ष दर्शन द्वारा निर्धारित होते थे।',
      gu: 'ગણિતીય નિયમો આજે વૈશ્વિક સ્તરે પ્રમાણિત છે, જોકે ઐતિહાસિક રીતે પ્રત્યક્ષ દર્શન દ્વારા નક્કી થતા હતા.',
    },
  },
  {
    id: 'persian',
    name: {
      en: 'Solar Hijri (Persian)',
      hi: 'सौर हिजरी (फ़ारसी कैलेंडर)',
      gu: 'સૌર હિજરી (પર્શિયન કેલેન્ડર)',
    },
    nativeName: 'گاه‌شماری هجری خورشیدی',
    type: {
      en: 'Solar',
      hi: 'सौर (सूर्य आधारित)',
      gu: 'સૌર (સૂર્ય આધારિત)',
    },
    description: {
      en: 'The official calendar of Iran and Afghanistan. It is one of the most accurate calendar systems in use today, determining its New Year (Nowruz) on the astronomical vernal equinox. The era begins with the Hijra in 622 CE, matching the Hijri calendar, but calculations are solar-based.',
      hi: 'ईरान और अफ़गानिस्तान का आधिकारिक कैलेंडर। यह वर्तमान में प्रयुक्त सबसे सटीक कैलेंडर प्रणालियों में से एक है, जो अपने नववर्ष (नवरोज़) को खगोलीय वसंत विषुव (इक्विनૉક્સ) पर निर्धारित करता है। इसका युग सन् ६२२ ईस्वी में हिजरत से शुरू होता है, किंतु गणना पूर्णतः सौर है।',
      gu: 'ઈરાન અને અફઘાનિસ્તાનનું સત્તાવાર કેલેન્ડર. તે વિશ્વની સૌથી સચોટ કેલેન્ડર પ્રણાલીઓમાંની એક છે, જે વસંત વિષુવવૃત્ત (ઇક્વિનોક્સ) પર નવરોઝ (નવું વર્ષ) નક્કી કરે છે. આ યુગ ઇ.સ. ૬૨૨ થી શરૂ થાય છે પરંતુ ગણતરી શુદ્ધ સૌર આધારિત છે.',
    },
    cycleNote: {
      en: 'Purely solar. The length of months is determined astronomically by the Sun’s transit through zodiacal signs.',
      hi: 'विशुद्ध सौर। महीनों की अवधि सूर्य के राशि चक्र में खगोलीय पारगमन (संक्रांति) द्वारा निर्धारित होती है।',
      gu: 'શુદ્ધ સૌર. મહિનાઓની લંબાઈ સૂર્યના રાશિ સંક્રમણ દ્વારા ખગોળીય રીતે નક્કી થાય છે.',
    },
    variations: {
      en: 'Astronomical calculations (Jalali system) compared to rule-based leap year models.',
      hi: 'जलाली खगोलीय गणना प्रणाली नियम-आधारित लीप वर्ष मॉडल के साथ अत्यधिक सटीकता प्रदान करती है।',
      gu: 'જલાલી ખગોળીય ગણતરી પ્રણાલી અત્યંત સચોટતા સાથે વર્ષની ગણતરી કરે છે.',
    },
  },
  {
    id: 'indian-saka',
    name: {
      en: 'Indian National (Saka)',
      hi: 'भारतीय राष्ट्रीय पंचांग (शक संवत)',
      gu: 'ભારતીય રાષ્ટ્રીય પંચાંગ (શક સંવત)',
    },
    nativeName: 'भारतीय राष्ट्रीय पंचांग / શક સંવત',
    type: {
      en: 'Solar',
      hi: 'सौर',
      gu: 'સૌર',
    },
    description: {
      en: 'The official civil calendar of India, introduced in 1957. It is used alongside the Gregorian calendar for government communications. The calendar uses the Saka era, which is offset by 78 years behind the Gregorian calendar.',
      hi: 'भारत का आधिकारिक नागरिक कैलेंडर, जिसे १९५૭ में अपनाया गया था। इसका उपयोग सरकारी गजट और प्रसारणों में ग्रेगोरियन कैलेंडर के साथ किया जाता है। यह शक युग का उपयोग करता है, जो ग्रेगोरियन कैलेंडर से ७८ वर्ष पीछे है।',
      gu: 'ભારતનું સત્તાવાર નાગરિક કેલેન્ડર, જેને ૧૯૫૭ માં અપનાવવામાં આવ્યું હતું. સરકારી સંચાર અને ગેઝેટમાં ગ્રેગોરિયન કેલેન્ડર સાથે વપરાય છે. તે શક સંવત યુગનો ઉપયોગ કરે છે, જે ગ્રેગોરિયન કેલેન્ડર કરતાં ૭૮ વર્ષ પાછળ છે.',
    },
    cycleNote: {
      en: 'Purely solar. Year begins on March 22 (March 21 in leap years) on the day of the vernal equinox. Months have fixed lengths.',
      hi: 'विशुद्ध सौर। वर्ष २२ मार्च (लीप वर्ष में २१ मार्च) को वसंत विषुव के दिन प्रारंभ होता है। महीनों की अवधि निश्चित है।',
      gu: 'શુદ્ધ સૌર. વર્ષ ૨૨ માર્ચ (લીપ વર્ષમાં ૨૧ માર્ચ) ના રોજ વસંત વિષુવના દિવસે શરૂ થાય છે. મહિનાઓના દિવસો નિયત છે.',
    },
    variations: {
      en: 'Standardized by the Indian Calendar Reform Committee; distinct from traditional religious regional calendars.',
      hi: 'भारतीय कैलेंडर सुधार समिति (मेघनाद साहा समिति) द्वारा मानकीकृत; पारंपरिक क्षेत्रीय धार्मिक पंचांगों से पृथक।',
      gu: 'ભારતીય કેલેન્ડર સુધારણા સમિતિ દ્વારા પ્રમાણિત; પારંપરિક પ્રાદેશિક ધાર્મિક પંચાંગોથી અલગ નાગરિક પ્રણાલી.',
    },
  },
  {
    id: 'chinese',
    name: {
      en: 'Chinese Traditional (Lunisolar)',
      hi: 'चीनी पारंपरिक कैलेंडर (चांद्र-सौर)',
      gu: 'ચાઇનીઝ પારંપરિક કેલેન્ડર (ચંદ્ર-સૌર)',
    },
    nativeName: '农历 / 漢曆',
    type: {
      en: 'Lunisolar',
      hi: 'चांद्र-सौर',
      gu: 'ચંદ્ર-સૌર',
    },
    description: {
      en: 'The traditional lunisolar calendar of China and East Asia. Dates are determined by astronomical lunar phases (months beginning on the new moon) and solar terms (Jieqi) based on the Sun\'s celestial longitude. Years are named according to the 60-year sexagenary cycle combining 10 Heavenly Stems and 12 Earthly Branches with corresponding zodiac animals.',
      hi: 'चीन और पूर्वी एशिया का पारंपरिक चांद्र-सौर कैलेंडर। तिथियां खगोलीय चंद्र कलाओं (अमावस्या पर नया माह) और सूर्य के रेखांश पर आधारित २४ सौर शब्दों (जिएची) द्वारा निर्धारित होती हैं। वर्ष ६०-वर्षीय षष्टि चक्र (१० स्वर्गीय तने और १२ सांसारिक शाखाएं व राशि पशु) के अनुसार नामित होते हैं।',
      gu: 'ચીન અને પૂર્વ એશિયાનું પારંપરિક ચંદ્ર-સૌર કેલેન્ડર. તિથિઓ અમાસના ચંદ્ર અને સૂર્યના ૨૪ સૌર વિભાગો (જિયેચી) પરથી નક્કી થાય છે. વર્ષો ૬૦-વર્ષના ષષ્ઠિ ચક્ર અને રાશિ પ્રાણીઓ (ઝોડિયાક) મુજબ ઓળખાય છે.',
    },
    cycleNote: {
      en: 'Lunisolar. Uses 12 lunar months (~29.5 days each) with an intercalary leap month (Runyue) inserted roughly every 2–3 years to maintain seasonal alignment with the 24 solar terms.',
      hi: 'चांद्र-सौर। १२ चंद्र महीनों (~२९.५ दिन प्रत्येक) के साथ ऋतुओं के तालमेल के लिए हर २-३ साल में एक अतिरिक्त लीप माह (रुनयूए) जोड़ा जाता है।',
      gu: 'ચંદ્ર-સૌર. ૧૨ ચંદ્ર માસ સાથે ઋતુગત સુસંગતતા જાળવવા દર ૨-૩ વર્ષે એક અધિક માસ (રુનયુએ) ઉમેરાય છે.',
    },
    variations: {
      en: 'Standard astronomical calculations (Purple Mountain Observatory / GB/T 33661-2017) referenced across China, Taiwan, Hong Kong, and global diaspora communities.',
      hi: 'मानक खगोलीय गणनाएं (पर्पल माउंटेन ऑब्जर्वेटरी / GB/T 33661-2017) चीन, ताइवान, हांगकांग और वैश्विक प्रवासी समुदायों में मान्य हैं।',
      gu: 'પર્પલ માઉન્ટેન ઓબ્ઝર્વેટરી આધારિત પ્રમાણિત ખગોળીય ગણતરીઓ વૈશ્વિક સ્તરે માન્ય છે.',
    },
  },
  {
    id: 'coptic',
    name: {
      en: 'Coptic (Alexandrian)',
      hi: 'कॉप्टिक कैलेंडर (अलेक्जेंड्रियन)',
      gu: 'કોપ્ટિક કેલેન્ડર (એલેક્ઝાન્ડ્રિયન)',
    },
    nativeName: 'ⲡⲓⲁⲃⲟⲧ ⲛ̀ⲣⲉⲙⲛ̀ⲭⲏⲙⲓ',
    type: {
      en: 'Solar',
      hi: 'सौर',
      gu: 'સૌર',
    },
    description: {
      en: 'The liturgical calendar used by the Coptic Orthodox Church of Alexandria, directly inherited from the ancient Egyptian solar calendar. The era begins with the Anno Martyrum (A.M. / Year of the Martyrs) in 284 CE, commemorating the reign of Emperor Diocletian.',
      hi: 'अलेक्जेंड्रिया के कॉप्टिक ऑर्थोडॉक्स चर्च द्वारा प्रयुक्त धार्मिक कैलेंडर, जो प्राचीन मिस्र के सौर कैलेंडर से सीधे प्राप्त हुआ है। इसका युग सन् २८४ ईस्वी में सम्राट डायोक्लेशियन के शासनकाल में शहीदों के वर्ष (एनो मार्टिरम / A.M.) से प्रारंभ होता है।',
      gu: 'એલેક્ઝાન્ડ્રિયાના કોપ્ટિક ઓર્થોડોક્સ ચર્ચ દ્વારા વપરાતું ધાર્મિક કેલેન્ડર, જે પ્રાચીન ઇજિપ્તના સૌર કેલેન્ડર પર આધારિત છે. તેનો યુગ ઇ.સ. ૨૮૪ માં શહીદોના વર્ષ (એનો માર્ટિરમ / A.M.) થી શરૂ થાય છે.',
    },
    cycleNote: {
      en: 'Purely solar. Consists of 12 equal months of 30 days each, followed by a 13th intercalary month called Nasie (Pi Kogi Enavot) of 5 days (6 days in leap years).',
      hi: 'विशुद्ध सौर। ३० दिनों के १२ समान महीने होते हैं, जिसके बाद ५ दिनों (लीप वर्ष में ६ दिन) का १३वां अतिरिक्त महीना नासी (नसियाह) आता है।',
      gu: 'શુદ્ધ સૌર. ૩૦ દિવસના ૧૨ સમાન મહિનાઓ અને વર્ષના અંતે ૫ દિવસ (લીપ વર્ષમાં ૬ દિવસ) નો ૧૩મો અધિક મહિનો નાસી (પિ કોગી એનાવોટ) આવે છે.',
    },
    variations: {
      en: 'Directly coordinated with the Julian solar year structure, beginning on 1 Tout (September 11 Gregorian, or September 12 following a Coptic leap year).',
      hi: 'जूलियन सौर वर्ष के साथ समन्वित, १ तूत (११ सितंबर ग्रेगोरियन, या लीप वर्ष के बाद १२ सितंबर) से प्रारंभ होता है।',
      gu: 'જુલિયન સૌર વર્ષ સાથે સુમેળ ધરાવે છે, જે ૧ તૂત (૧૧ સપ્ટેમ્બર ગ્રેગોરિયન) થી શરૂ થાય છે.',
    },
  },
  {
    id: 'ethiopic',
    name: {
      en: 'Ethiopian (Ge\'ez)',
      hi: 'इथियोपियाई कैलेंडर (गीज़)',
      gu: 'ઇથિયોપિયન કેલેન્ડર (ગીઝ)',
    },
    nativeName: 'የኢትዮጵያ ዘመን አቆጣጠር',
    type: {
      en: 'Solar',
      hi: 'सौर',
      gu: 'સૌર',
    },
    description: {
      en: 'The principal civil calendar of Ethiopia and Eritrea, also serving as the liturgical calendar for the Ethiopian Orthodox Tewahedo Church. It shares astronomical roots with the Coptic and ancient Egyptian calendars, using the Ge\'ez numbering and naming tradition.',
      hi: 'इथियोपिया और इरिट्रिया का प्रमुख नागरिक और धार्मिक कैलेंडर। यह कॉप्टिक और प्राचीन मिस्र के कैलेंडरों के साथ खगोलीय समानता साझा करता है तथा गीज़ भाषा की अंक और नामकरण परंपरा का उपयोग करता है। इसका युग ग्रेगोरियन कैलेंडर से लगभग ७-८ वर्ष पीछे है।',
      gu: 'ઇથિયોપિયા અને એરિટ્રિયાનું મુખ્ય સત્તાવાર અને ધાર્મિક કેલેન્ડર. તે પ્રાચીન ઇજિપ્ત અને કોપ્ટિક કેલેન્ડર સાથે સમાનતા ધરાવે છે અને ગીઝ ભાષાની પરંપરા વાપરે છે. આ યુગ ગ્રેગોરિયન કરતાં ૭-૮ વર્ષ પાછળ છે.',
    },
    cycleNote: {
      en: 'Purely solar. 12 months of 30 days plus a 13th month of Pagume (5 or 6 intercalary days). The Ethiopian era is offset by approximately 7 to 8 years behind the Gregorian calendar.',
      hi: 'विशुद्ध सौर। ३० दिनों के १२ महीने और पागुमे नामक १३वां महीना (५ या ६ अतिरिक्त दिन)। इथियोपियाई युग ग्रेगोरियन से लगभग ७-८ वर्ष पीछे है।',
      gu: 'શુદ્ધ સૌર. ૩૦ દિવસના ૧૨ મહિના અને પાગુમે નામનો ૧૩મો મહિનો (૫ કે ૬ દિવસ). ઇથિયોપિયન વર્ષ ગ્રેગોરિયન કરતાં ૭ થી ૮ વર્ષ પાછળ ચાલે છે.',
    },
    variations: {
      en: 'Standardized civil and ecclesiastical timekeeping in Ethiopia; year begins on Enkutatash (1 Meskerem / September 11 Gregorian).',
      hi: 'इथियोपिया में मानकीकृत समय-गणना; वर्ष एनकुताताश (१ मेसकेरेम / ११ सितंबर ग्रेगोरियन) से प्रारंभ होता है।',
      gu: 'ઇથિયોપિયામાં પ્રમાણિત સમયગણના; વર્ષ એન્કુતાતાશ (૧ મેસ્કેરેમ / ૧૧ સપ્ટેમ્બર ગ્રેગોરિયન) થી શરૂ થાય છે.',
    },
  },
];

export function getLocalizedCalendarInfo(id: string): LocalizedCalendarInfo | undefined {
  return localizedCalendars.find(c => c.id === id);
}

// Month name translations for Vikram Samvat
const vikramMonthsMap: Record<number, { en: string; hi: string; gu: string }> = {
  1: { en: 'Kartak', hi: 'कार्तिक', gu: 'કાર્તક' },
  2: { en: 'Magsar', hi: 'मार्गशीर्ष', gu: 'માગશર' },
  3: { en: 'Pos', hi: 'पौष', gu: 'પોષ' },
  4: { en: 'Maha', hi: 'माघ', gu: 'મહા' },
  5: { en: 'Fagun', hi: 'फाल्गुन', gu: 'ફાગણ' },
  6: { en: 'Chaitra', hi: 'चैत्र', gu: 'ચૈત્ર' },
  7: { en: 'Vaishakh', hi: 'वैशाख', gu: 'વૈશાખ' },
  8: { en: 'Jeth', hi: 'ज्येष्ठ', gu: 'જેઠ' },
  9: { en: 'Ashadh', hi: 'आषाढ़', gu: 'અષાઢ' },
  10: { en: 'Shravan', hi: 'श्रावण', gu: 'શ્રાવણ' },
  11: { en: 'Bhadarvo', hi: 'भाद्रपद', gu: 'ભાદરવો' },
  12: { en: 'Aaso', hi: 'आश्विन', gu: 'આસો' },
};

// Hindi Devanagari and Gujarati numerals conversion
export function toIndicDigits(num: number | string, locale: Locale): string {
  const str = String(num);
  if (locale === 'en') return str;
  
  const hiDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  const guDigits = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'];
  const targetDigits = locale === 'hi' ? hiDigits : guDigits;
  
  return str.replace(/\d/g, d => targetDigits[parseInt(d, 10)]);
}

/**
 * Formats a calendar date respectfully with authentic localized terminology.
 */
export function formatLocalizedCalendarDate(date: CalendarDate, locale: Locale = 'en'): string {
  if (date.calendar === 'hindu-vikram') {
    const rawDay = date.day;
    const isSud = rawDay <= 15;
    const tithiNum = isSud ? rawDay : rawDay - 15;
    const monthObj = vikramMonthsMap[date.month] || { en: date.monthName || 'Kartak', hi: 'कार्तिक', gu: 'કાર્તક' };
    const monthName = monthObj[locale] || monthObj.en;
    
    if (locale === 'gu') {
      const paksha = isSud ? 'સુદ' : 'વદ';
      return `${monthName} ${paksha} ${toIndicDigits(tithiNum, 'gu')}, ${toIndicDigits(date.year, 'gu')} વિ.સં.`;
    }
    if (locale === 'hi') {
      const paksha = isSud ? 'शुक्ल पक्ष' : 'कृष्ण पक्ष';
      return `${monthName} ${paksha} ${toIndicDigits(tithiNum, 'hi')}, ${toIndicDigits(date.year, 'hi')} वि.सं.`;
    }
    const paksha = isSud ? 'Sud' : 'Vad';
    return `${monthObj.en} ${paksha} ${tithiNum}, ${date.year} VS`;
  }

  // For other calendar systems:
  // If English, return standard adapter formatting.
  // If Hindi/Gujarati, format with localized terms while preserving the authentic month/era identity.
  const rawDayStr = String(date.day);
  const rawYearStr = String(date.year);
  
  if (locale === 'hi') {
    const dStr = toIndicDigits(rawDayStr, 'hi');
    const yStr = toIndicDigits(rawYearStr, 'hi');
    if (date.calendar === 'islamic-civil') {
      return `${dStr} ${date.monthName || ''} ${yStr} हिजरी`;
    }
    if (date.calendar === 'hebrew') {
      return `${dStr} ${date.monthName || ''} ${yStr} हिब्रू वर्ष`;
    }
    if (date.calendar === 'persian') {
      return `${dStr} ${date.monthName || ''} ${yStr} सौर हिजरी`;
    }
    if (date.calendar === 'indian-saka') {
      return `${dStr} ${date.monthName || ''} ${yStr} शक संवत`;
    }
    if (date.calendar === 'coptic') {
      return `${dStr} ${date.monthName || ''} ${yStr} ए.एम.`;
    }
    if (date.calendar === 'ethiopic') {
      return `${dStr} ${date.monthName || ''} ${yStr} ई.सी.`;
    }
    if (date.calendar === 'chinese') {
      return `${date.monthName || ''}, दिन ${dStr} (${yStr})`;
    }
  }

  if (locale === 'gu') {
    const dStr = toIndicDigits(rawDayStr, 'gu');
    const yStr = toIndicDigits(rawYearStr, 'gu');
    if (date.calendar === 'islamic-civil') {
      return `${dStr} ${date.monthName || ''} ${yStr} હિજરી`;
    }
    if (date.calendar === 'hebrew') {
      return `${dStr} ${date.monthName || ''} ${yStr} હિબ્રૂ વર્ષ`;
    }
    if (date.calendar === 'persian') {
      return `${dStr} ${date.monthName || ''} ${yStr} સૌર હિજરી`;
    }
    if (date.calendar === 'indian-saka') {
      return `${dStr} ${date.monthName || ''} ${yStr} શક સંવત`;
    }
    if (date.calendar === 'coptic') {
      return `${dStr} ${date.monthName || ''} ${yStr} એ.એમ.`;
    }
    if (date.calendar === 'ethiopic') {
      return `${dStr} ${date.monthName || ''} ${yStr} ઈ.સી.`;
    }
    if (date.calendar === 'chinese') {
      return `${date.monthName || ''}, દિવસ ${dStr} (${yStr})`;
    }
  }

  // Default English representation
  const eraSuffix = date.era ? ` ${date.era}` : '';
  return `${date.monthName || ''} ${date.day}, ${date.year}${eraSuffix}`.trim();
}
