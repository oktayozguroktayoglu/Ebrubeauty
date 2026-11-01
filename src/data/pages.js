// Hizmet sayfalarının içerikleri. Görseller: Pexels id (CI'da indirilir, public/img/<id>-800.webp) ya da salon fotoğrafı (room, lounge, desk, door).
// Bilgiler genel bilgilendirme amaçlıdır; seans sayısı ve fiyat kişiye göre değişir, sitede vaat olarak yazılmaz.

export const pages = {
  'cilt-bakimi': {
    seoTitle: 'Cilt Bakımı | Ebru Beauty Güzellik Merkezi',
    seoDesc: 'Cilt tipine özel profesyonel cilt bakımı: derin temizlik, peeling, maske ve nem. Ebru Beauty’de kendine bir saat ayır. Randevu: 0537 916 10 36.',
    hero: { img: '8101533', alt: 'Kumaş üzerinde cilt bakım şişeleri ve kavanozları' },
    lead: 'Cildin her gün makyaj, kirlilik, stres ve uykusuzlukla uğraşıyor. Profesyonel cilt bakımı, evde ulaşamadığın derinliğe inip cildini yeniden nefes alır hale getirir.',
    sections: [
      { h: 'Cilt bakımı nedir?', p: [
        'Profesyonel cilt bakımı; cildin temizlenmesi, ölü hücrelerden arındırılması, gözeneklerin açılıp temizlenmesi ve cilde uygun maske ile nemin geri kazandırılmasından oluşan bir bakım seansıdır.',
        'Her cilt aynı değildir. Bu yüzden seansa başlamadan önce cildinin yağlı mı, kuru mu, karma mı ya da hassas mı olduğuna bakılır ve kullanılacak ürünler buna göre seçilir.' ] },
      { h: 'Kimler için uygun?', list: [
        'Siyah nokta ve belirgin gözeneklerden şikâyetçi olanlar',
        'Cildi mat, yorgun ve cansız görünenler',
        'Yoğun makyaj kullananlar ya da şehir kirliliğine çok maruz kalanlar',
        'Özel bir gün öncesi cildini hazırlamak isteyenler',
        'Kendine düzenli bir “me time” ayırmak isteyen herkes' ] },
      { h: 'Seans nasıl ilerliyor?', steps: [
        ['Cilt analizi', 'Cildinin tipine ve ihtiyacına birlikte bakılır.'],
        ['Temizlik ve peeling', 'Makyaj ve kir temizlenir, ölü hücreler nazikçe arındırılır.'],
        ['Gözenek temizliği', 'Buhar ile açılan gözeneklerde siyah noktalar temizlenir.'],
        ['Maske ve nem', 'Cildine uygun maske uygulanır, nem ve koruma ile seans biter.'] ] },
      { h: 'Bakım sonrası', p: [
        'Seans sonrasında cildinde hafif bir kızarıklık olabilir; genellikle kısa sürede geçer. Aynı gün yoğun makyajdan, sauna ve buhardan uzak durman ve güneş koruyucu kullanman önerilir. Düzenli aralıklarla yapılan bakım, tek seanstan çok daha kalıcı bir fark yaratır.' ] },
    ],
    faq: [
      ['Ne sıklıkla cilt bakımı yaptırmalıyım?', 'Cilt tipine ve ihtiyacına göre değişir. Genellikle ayda bir düzenli bakım tercih edilir; en doğru aralığı ilk seansta birlikte belirleriz.'],
      ['Seans ne kadar sürer?', 'Uygulanan adımlara göre değişmekle birlikte genellikle yaklaşık bir saat sürer.'],
      ['Hassas cildim var, yaptırabilir miyim?', 'Evet. Hassas ciltlerde daha nazik ürünler ve yöntemler seçilir. Bilinen bir alerjin ya da kullandığın bir ilaç varsa seans öncesinde mutlaka belirt.'],
      ['Bakımdan sonra makyaj yapabilir miyim?', 'Cildinin dinlenmesi için aynı gün makyaj yapmaman önerilir.'] ],
    gallery: [{ img: '8102021', alt: 'Siyah kumaş üzerinde serum şişeleri ve gua sha taşı' }],
  },

  hydrafacial: {
    seoTitle: 'Hydrafacial | Ebru Beauty Güzellik Merkezi',
    seoDesc: 'Hydrafacial ile tek seansta temizle, arındır, nemlendir. Etkinlik öncesi ışıltı için favori bakım. Ebru Beauty’de randevu: 0537 916 10 36.',
    hero: { img: '31251033', alt: 'Beyaz zemin üzerinde damlalıklı serum şişesi' },
    lead: 'Hydrafacial; temizlik, arındırma ve yoğun nemi tek seansta birleştiren, cildine anında ferahlık ve ışıltı kazandıran popüler bir bakım. Bakımdan sonra sosyal hayatına hemen dönebilirsin.',
    sections: [
      { h: 'Hydrafacial nedir?', p: [
        'Hydrafacial, vakum ve özel başlıklar yardımıyla cildi temizleyen, gözeneklerdeki kiri ve fazla yağı alan, ardından cildi serumlarla besleyen cihaz destekli bir bakımdır.',
        'Klasik cilt bakımına göre daha hızlı ve konforlu bir deneyim sunar; bu yüzden özellikle düğün, mezuniyet ya da özel bir davet öncesinde sık tercih edilir.' ] },
      { h: 'Kimler için uygun?', list: [
        'Cildi kuru, susuz ve gergin hissedenler',
        'Mat ve yorgun görünümden kurtulmak isteyenler',
        'Belirgin gözenek ve siyah nokta yaşayanlar',
        'Etkinlik öncesi hızlı bir ışıltı isteyenler' ] },
      { h: 'Seans nasıl ilerliyor?', steps: [
        ['Temizlik', 'Cilt yüzeyi temizlenir ve bakıma hazırlanır.'],
        ['Arındırma', 'Hafif peeling ile ölü hücreler uzaklaştırılır.'],
        ['Gözenek temizliği', 'Vakum başlık ile gözeneklerdeki kir ve yağ alınır.'],
        ['Nem ve serum', 'Cildine uygun serumlarla yoğun nem verilir.'] ] },
      { h: 'Bakım sonrası', p: [
        'Seanstan hemen sonra cildin genellikle daha nemli ve aydınlık görünür. Birkaç gün boyunca güneş koruyucu kullanman, aynı gün sauna, havuz ve yoğun makyajdan kaçınman önerilir.' ] },
    ],
    faq: [
      ['Hydrafacial acıtır mı?', 'Genellikle acı vermez; çoğu kişi uygulamayı rahatlatıcı ve serinletici olarak tanımlar.'],
      ['Sonucu ne zaman görürüm?', 'Pek çok kişi ilk seanstan sonra cildinde ferahlık ve parlaklık fark eder. Kalıcı etki için düzenli seanslar önerilir.'],
      ['Etkinlikten ne kadar önce yaptırmalıyım?', 'Birkaç gün önce yaptırmak, cildinin dinlenmesi için iyi bir zamanlamadır. En uygun günü birlikte planlayalım.'],
      ['Klasik cilt bakımından farkı ne?', 'Hydrafacial cihaz destekli ve daha hızlıdır; temizlik ile nem adımlarını tek uygulamada birleştirir.'] ],
    gallery: [{ own: 'room', alt: 'Ebru Beauty bakım odası: Hydrafacial cihazı ve LED maske' }, { img: '8100816', alt: 'Seramik tabak üzerinde damlalıklı bakım şişesi' }],
  },

  'lazer-epilasyon': {
    seoTitle: 'Lazer Epilasyon | Ebru Beauty Güzellik Merkezi',
    seoDesc: 'Profesyonel cihazla lazer epilasyon: jilet ve ağda döngüsüne son, daha pürüzsüz bir cilt. Seans planı cildine göre belirlenir. Randevu: 0537 916 10 36.',
    hero: { img: '16032298', alt: 'Kol bölgesine lazer epilasyon uygulaması' },
    lead: 'Her hafta jilet, her ay ağda… Lazer epilasyon, istenmeyen tüylerle uğraşmaya ayırdığın zamanı sana geri verir. Seans planını cildine ve kıl yapına göre birlikte oluştururuz.',
    sections: [
      { h: 'Lazer epilasyon nasıl çalışır?', p: [
        'Lazer ışığı, kıl kökündeki pigment tarafından emilir ve kökü zayıflatır. Kıllar farklı büyüme evrelerinde olduğu için tek seansta değil, belirli aralıklarla yapılan birkaç seans sonunda belirgin bir azalma görülür.',
        'Gereken seans sayısı; bölgeye, kıl yapısına, cilt tonuna ve hormonal duruma göre kişiden kişiye değişir.' ] },
      { h: 'Hangi bölgelere uygulanır?', list: [
        'Bacak ve kol', 'Koltuk altı', 'Bikini bölgesi', 'Yüz (dudak üstü, çene gibi)', 'Sırt ve karın' ] },
      { h: 'Seans öncesi ve sonrası', steps: [
        ['Ağda ve cımbızı bırak', 'Kıl kökünün yerinde kalması için seans döneminde ağda ve cımbız kullanılmamalı; jilet kullanılabilir.'],
        ['Seans günü tıraş', 'Uygulanacak bölge seanstan önce jiletle tıraş edilmiş olmalı.'],
        ['Güneşe dikkat', 'Seans öncesi ve sonrası bronzlaşmadan kaçın, güneş koruyucu kullan.'],
        ['Cildini dinlendir', 'Seans sonrası birkaç gün sıcak duş, sauna ve yoğun spordan uzak dur.'] ] },
    ],
    faq: [
      ['Lazer epilasyon acıtır mı?', 'Çoğu kişi lastik çarpması gibi kısa ve hafif bir his tarif eder. Hissedilen yoğunluk bölgeye ve kişiye göre değişir.'],
      ['Kaç seans gerekir?', 'Kişiye ve bölgeye göre değişir. İlk görüşmede cildine ve kıl yapına bakarak sana uygun planı birlikte çıkarırız.'],
      ['Seanslar arası ne kadar olmalı?', 'Bölgeye göre değişmekle birlikte genellikle birkaç haftalık aralar verilir.'],
      ['Yazın yaptırabilir miyim?', 'Yaptırılabilir; ancak güneşten korunmak ve bronz ciltle seansa girmemek gerekir.'] ],
    gallery: [{ own: 'room', alt: 'Ebru Beauty bakım odasındaki lazer epilasyon cihazı' }],
  },

  'g5-selulit': {
    seoTitle: 'G5 Selülit Masajı | Ebru Beauty Güzellik Merkezi',
    seoDesc: 'G5 masaj cihazı ile selülit görünümünü azaltmaya yardımcı, dolaşımı hareketlendiren rahatlatıcı vücut bakımı. Ebru Beauty randevu: 0537 916 10 36.',
    hero: { img: '6187653', alt: 'Sırt bölgesine uygulanan rahatlatıcı masaj' },
    lead: 'G5, titreşimli başlıklarıyla dokuya derinlemesine masaj yapan bir cihaz. Hem rahatlatıyor hem de selülit görünümüne karşı düzenli bakımın bir parçası oluyor.',
    sections: [
      { h: 'G5 masajı nedir?', p: [
        'G5 cihazı, farklı başlıklarla titreşim ve ritmik hareket oluşturarak cilt altı dokuya masaj yapar. Bu masaj, bölgedeki kan ve lenf dolaşımını hareketlendirmeye yardımcı olur.',
        'Düzenli uygulama, sağlıklı beslenme, yeterli su tüketimi ve hareketle desteklendiğinde portakal kabuğu görünümünün azalmasına ve cildin daha sıkı hissedilmesine katkı sağlar.' ] },
      { h: 'Hangi bölgelere uygulanır?', list: [ 'Basen ve kalça', 'Bacak ve diz çevresi', 'Karın ve bel', 'Kol' ] },
      { h: 'Seans nasıl ilerliyor?', steps: [
        ['Bölge belirleme', 'Odaklanmak istediğin bölgeler birlikte belirlenir.'],
        ['G5 uygulaması', 'Cihaz, bölgeye uygun başlık ve yoğunlukla uygulanır.'],
        ['Rahatlama', 'Seans sonunda bol su içmen ve hareketli kalman önerilir.'] ] },
    ],
    faq: [
      ['G5 masajı ağrılı mı?', 'Genellikle ağrılı değildir; yoğunluk kişinin konforuna göre ayarlanır.'],
      ['Kaç seans yaptırmalıyım?', 'Hedefe ve bölgeye göre değişir. Düzenli seanslar tek seanstan çok daha etkilidir; planı birlikte yaparız.'],
      ['Sonuçlar kalıcı mı?', 'G5 bir destek uygulamasıdır. Kalıcılık; beslenme, su tüketimi ve hareketle birlikte korunur.'],
      ['Bölgesel incelme ile birlikte yapılır mı?', 'Evet, sık tercih edilen bir kombinasyondur. Sana uygun programı birlikte belirleyebiliriz.'] ],
    gallery: [],
  },

  'bolgesel-incelme': {
    seoTitle: 'Bölgesel İncelme | Ebru Beauty Güzellik Merkezi',
    seoDesc: 'Karın, bel, basen gibi inatçı bölgelere odaklı, cihaz destekli bölgesel incelme seansları. Kişiye özel plan. Ebru Beauty: 0537 916 10 36.',
    hero: { img: '3230236', alt: 'Spa ortamında sırt bölgesine uygulanan vücut bakımı' },
    lead: 'Spor ve beslenmeye rağmen bazı bölgeler inat eder. Bölgesel incelme seansları; karın, bel, basen gibi alanlara odaklanarak hedefine destek olur.',
    sections: [
      { h: 'Bölgesel incelme nedir?', p: [
        'Bölgesel incelme, belirli vücut bölgelerine odaklanan cihaz destekli uygulamaların genel adıdır. Amaç; bölgedeki dolaşımı desteklemek, cildin daha sıkı görünmesine ve siluetin daha düzgün hissedilmesine katkı sağlamaktır.',
        'Bu uygulamalar bir kilo verme yöntemi değil, sağlıklı yaşam alışkanlıklarını tamamlayan destekleyici bakımlardır.' ] },
      { h: 'Kimler için uygun?', list: [
        'Belirli bölgelerde inatçı yağlanma yaşayanlar',
        'Cildinin daha sıkı görünmesini isteyenler',
        'Spor ve beslenmesini bakım ile desteklemek isteyenler' ] },
      { h: 'Seans nasıl ilerliyor?', steps: [
        ['Ön görüşme', 'Hedef bölgeler ve beklentin birlikte konuşulur.'],
        ['Kişiye özel plan', 'Bölgeye uygun uygulama ve seans sıklığı belirlenir.'],
        ['Uygulama', 'Cihaz destekli seanslar planlanan aralıklarla yapılır.'] ] },
    ],
    faq: [
      ['Kaç seansta sonuç alırım?', 'Kişiye, bölgeye ve yaşam tarzına göre değişir. Gerçekçi bir plan için ilk görüşmede birlikte değerlendiririz.'],
      ['Uygulama sırasında ne hissederim?', 'Genellikle sıcaklık ve masaj hissi olur; uygulama konforuna göre ayarlanır.'],
      ['Kimler yaptırmamalı?', 'Hamilelik, emzirme ve bazı sağlık durumlarında uygulama önerilmez. Sağlık durumunu seans öncesinde mutlaka belirt; gerekirse doktoruna danış.'],
      ['G5 ile birlikte yapılır mı?', 'Evet, birlikte planlanabilir.'] ],
    gallery: [{ img: '6187653', alt: 'Vücut masajı uygulaması' }],
  },

  'protez-tirnak': {
    seoTitle: 'Protez Tırnak, Kalıcı Oje ve Nail Art | Ebru Beauty',
    seoDesc: 'Jel ve protez tırnak, kalıcı oje ve nail art. Doğal, sade ya da tamamen sana özel tasarımlar. Ebru Beauty’de randevu: 0537 916 10 36.',
    hero: { img: '17471377', alt: 'Çiçek desenli, renk geçişli nail art tırnaklar' },
    lead: 'Kırılan tırnaklarla vedalaş. Jel ve protez tırnak, kalıcı oje ve nail art ile tırnakların her gün bakımlı, her fotoğrafta hazır.',
    sections: [
      { h: 'Neler yapıyoruz?', list: [
        'Protez tırnak: Doğal tırnağın üzerine uzatma ve şekillendirme',
        'Jel güçlendirme: Kendi tırnağını daha sağlam hale getirme',
        'Kalıcı oje: Uzun süre parlak kalan renkler',
        'Nail art: French, ombre, krom, taşlı ya da tamamen sana özel tasarımlar',
        'Bakım ve dolgu: Uzayan tırnakların yenilenmesi' ] },
      { h: 'Seans nasıl ilerliyor?', steps: [
        ['Tasarımı seç', 'Beğendiğin bir fotoğrafla gelebilir ya da birlikte karar verebiliriz.'],
        ['Hazırlık', 'Tırnaklar temizlenir, şekillendirilir ve uygulamaya hazırlanır.'],
        ['Uygulama', 'Protez, jel ya da kalıcı oje uygulanır, lamba ile sabitlenir.'],
        ['Son dokunuş', 'Nail art ve parlatıcı ile tasarım tamamlanır.'] ] },
      { h: 'Uzun süre güzel kalması için', p: [
        'Tırnaklarını alet gibi kullanmamaya özen göster, bulaşık ve temizlik sırasında eldiven kullan, tırnak etlerini düzenli nemlendir. Dolgu zamanını geciktirmemek hem görünümü hem de doğal tırnağının sağlığını korur.' ] },
    ],
    faq: [
      ['Protez tırnak doğal tırnağıma zarar verir mi?', 'Doğru uygulama ve doğru çıkarma ile risk en aza indirilir. Tırnakları kendin koparmamalı, çıkarma işlemini salonda yaptırmalısın.'],
      ['Ne kadar dayanır?', 'Tırnak uzama hızına ve kullanımına göre değişir. Dolgu zamanını birlikte planlarız.'],
      ['Tasarım için fotoğraf getirebilir miyim?', 'Kesinlikle! Instagram’da beğendiğin tasarımları WhatsApp’tan gönderebilirsin.'],
      ['Kalıcı oje ile protez tırnak farkı ne?', 'Kalıcı oje kendi tırnağına uygulanan uzun ömürlü bir renktir; protez tırnak ise uzunluk ve şekil de kazandırır.'] ],
    gallery: [{ img: '6429663', alt: 'Renkli ojeler arasında renkli manikürlü el' }],
  },

  'kalici-makyaj': {
    seoTitle: 'Kalıcı Makyaj: Kaş, Dudak, Dipliner | Ebru Beauty',
    seoDesc: 'Yüz hatlarına uygun kalıcı kaş tasarımı, dudak renklendirme ve dipliner. Sabah rutinin kısalsın. Ebru Beauty’de randevu: 0537 916 10 36.',
    hero: { img: '5881083', alt: 'Pembe zemin üzerinde kaş ve makyaj fırçaları' },
    lead: 'Uyandığın an hazır ol. Kalıcı makyaj; kaş, dudak ve göz çevresinde doğal görünümlü, uzun süreli bir tanım kazandırır ve sabah rutinini kısaltır.',
    sections: [
      { h: 'Hangi uygulamalar var?', list: [
        'Kaş: Seyrek ya da şekilsiz kaşlara yüz hatlarına uygun form ve dolgunluk',
        'Dudak renklendirme: Dudaklara doğal bir renk ve belirgin bir kontür',
        'Dipliner: Kirpik diplerinde gözü belirginleştiren ince bir çizgi' ] },
      { h: 'Seans nasıl ilerliyor?', steps: [
        ['Tasarım', 'Yüz hatlarına ve tarzına uygun form ve renk birlikte belirlenir, önce çizimle gösterilir.'],
        ['Uygulama', 'Onayladığın tasarım uygulanır.'],
        ['Rötuş', 'İyileşme sürecinden sonra gerekirse rötuş seansı planlanır.'] ] },
      { h: 'Uygulama sonrası', p: [
        'İlk günlerde renk olması gerekenden koyu görünebilir; iyileşmeyle birlikte yumuşar. Bölgeyi kaşımamalı, kabukları koparmamalı, bir süre sauna, havuz ve doğrudan güneşten uzak durmalısın. Sana verilen bakım önerilerine uymak sonucun kalitesini doğrudan etkiler.' ] },
    ],
    faq: [
      ['Kalıcı makyaj ne kadar kalır?', 'Cilt tipine, yaşam tarzına ve uygulama bölgesine göre değişir; zamanla solar ve tazeleme gerekebilir.'],
      ['Doğal görünür mü?', 'Amaç yüzüne uygun, doğal bir görünüm elde etmektir. Tasarımı uygulamadan önce birlikte onaylarız.'],
      ['Acı hissedilir mi?', 'Hassasiyet kişiden kişiye değişir; uygulama sırasında konforun ön planda tutulur.'],
      ['Kimler yaptırmamalı?', 'Hamilelik, emzirme ve bazı sağlık durumlarında uygulama önerilmez. Sağlık durumunu seans öncesinde mutlaka paylaş.'] ],
    gallery: [{ img: '212236', alt: 'Beyaz zemin üzerinde makyaj fırçaları ve araçları' }],
  },
};

export const pexelsIds = [...new Set(Object.values(pages).flatMap((p) => [p.hero.img, ...p.gallery.map((g) => g.img)]).filter(Boolean))];
