// Ebru Beauty – tüm iletişim bilgileri ve içerik tek yerde.
export const NAME = 'Ebru Beauty';
export const FULL_NAME = 'Ebru Beauty Güzellik Merkezi';
export const SLOGAN = 'Güzelliğinize değer katar';
export const TAGLINE = 'Kendine iyi bak, ışıltını göster';

export const PHONE = '0537 916 10 36';
export const PHONE_TEL = 'tel:+905379161036';
export const WA_NUMBER = '905379161036';
export const INSTAGRAM = 'ebrubeautys';
export const INSTAGRAM_URL = 'https://www.instagram.com/ebrubeautys/';

// Adres: Google İşletme kaydındaki açık adres buraya yazılacak. Boşken sitede gösterilmez.
export const ADDRESS = '';
// Google Haritalar bağlantısı (işletme kaydının "Paylaş" linki). Boşken işletme adıyla arama açılır.
export const MAPS_URL = '';
export const mapsLink = () => MAPS_URL || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_NAME)}`;

// Çalışma saatleri
export const HOURS_TEXT = 'Pazartesi – Cumartesi 09:00 – 19:00 · Pazar kapalı';
export const SLOTS = ['09:00 – 11:00', '11:00 – 13:00', '13:00 – 15:00', '15:00 – 17:00', '17:00 – 19:00'];

export const wa = (text = 'Merhaba, randevu almak istiyorum ✨') => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

// Hizmetler: tabeladaki ve kartvizitteki işlemler
export const services = [
  { slug: 'cilt-bakimi', title: 'Cilt Bakımı', icon: 'face', tag: 'glow',
    short: 'Cildinin ihtiyacına göre temizlik, nem ve canlılık. Mat görünüme bye bye.',
    detail: 'Cilt tipine uygun ürünlerle derinlemesine temizlik, peeling, maske ve nem desteği. Düzenli bakımla daha pürüzsüz, daha aydınlık bir görünüm.' },
  { slug: 'hydrafacial', title: 'Hydrafacial', icon: 'drop', tag: 'trend',
    short: 'Tek seansta temizle, arındır, nemlendir. Etkinlik öncesi favori.',
    detail: 'Vakum ve serum teknolojisiyle gözenekleri temizleyip cildi yoğun nemle besleyen, aynı gün sosyal hayata dönebileceğin popüler bakım.' },
  { slug: 'lazer-epilasyon', title: 'Lazer Epilasyon', icon: 'spark', tag: 'smooth',
    short: 'Jilet ve ağda döngüsüne son. Pürüzsüz cilt, daha çok özgürlük.',
    detail: 'Profesyonel cihazla istenmeyen tüylerden kalıcıya yakın kurtulma. Seans planı cilt ve kıl tipine göre birlikte belirlenir.' },
  { slug: 'g5-selulit', title: 'G5 Selülit Masajı', icon: 'wave', tag: 'body',
    short: 'Titreşimli G5 ile sıkılaşma hissi ve portakal kabuğu görünümüne destek.',
    detail: 'G5 masaj cihazıyla dolaşımı hareketlendiren, selülit görünümünü azaltmaya yardımcı olan rahatlatıcı vücut uygulaması.' },
  { slug: 'bolgesel-incelme', title: 'Bölgesel İncelme', icon: 'shape', tag: 'body',
    short: 'İnatçı bölgelere odaklı, kişiye özel vücut şekillendirme seansları.',
    detail: 'Karın, bel, basen gibi bölgelere odaklanan cihaz destekli uygulamalarla daha sıkı ve düzgün bir siluet hedefi.' },
  { slug: 'protez-tirnak', title: 'Protez Tırnak', icon: 'nail', tag: 'nails',
    short: 'Jel, kalıcı oje ve nail art. Her gün feed’e layık tırnaklar.',
    detail: 'Jel ve protez tırnak uygulamaları, kalıcı oje ve tasarım. Doğal, sade ya da tamamen sana özel nail art.' },
  { slug: 'kalici-makyaj', title: 'Kalıcı Makyaj', icon: 'brow', tag: 'face',
    short: 'Kaş, dudak ve eyeliner ile uyandığın an hazır ol.',
    detail: 'Yüz hatlarına uygun kaş tasarımı, dudak renklendirme ve dipliner. Sabah rutini kısalır, görünüm hep derli toplu.' },
];

// "Sana hangisi uygun?" mini testi: dert → önerilen hizmet
export const concerns = [
  { label: 'Cildim mat ve yorgun', emoji: '😴', service: 'hydrafacial' },
  { label: 'Gözeneklerim belirgin', emoji: '🔍', service: 'cilt-bakimi' },
  { label: 'Jilet / ağdadan bıktım', emoji: '🪒', service: 'lazer-epilasyon' },
  { label: 'Selülit beni üzüyor', emoji: '🍊', service: 'g5-selulit' },
  { label: 'Bel ve basen bölgem', emoji: '⏳', service: 'bolgesel-incelme' },
  { label: 'Tırnaklarım hep kırılıyor', emoji: '💅', service: 'protez-tirnak' },
  { label: 'Sabah makyajına vaktim yok', emoji: '⏰', service: 'kalici-makyaj' },
];

export const gallery = [
  { id: 'lounge', alt: 'Ebru Beauty bekleme alanı: siyah kadife koltuk, bitkiler ve yeşil manzaralı geniş pencere' },
  { id: 'room', alt: 'Bakım odası: lazer cihazı, Hydrafacial cihazı, LED maske ve bakım yatağı' },
  { id: 'desk', alt: 'Resepsiyonda altın heykel ve Ebru Beauty kartvizitleri' },
  { id: 'door', alt: 'Ebru Beauty Güzellik Merkezi giriş kapısı ve hizmet listesi' },
];
