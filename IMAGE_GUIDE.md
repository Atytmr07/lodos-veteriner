# Görsel Yükleme Kılavuzu - Lodos Veteriner Kliniği

Web sitesindeki placeholder (yer tutucu) görselleri gerçek fotoğraflarınızla değiştirmek için aşağıdaki adımları takip edebilirsiniz.

## 1. Klasör Yapısını Oluşturma
Öncelikle projenizin `public` klasörü içinde şu alt klasörleri oluşturun:
- `public/team/` (Hekim fotoğrafları için)
- `public/gallery/` (Klinik fotoğrafları için)

## 2. Beklenen Dosya İsimleri ve Boyutlar

Şu anki `data/config.ts` dosyanıza göre aşağıdaki isimleri kullanırsanız kodda değişiklik yapmanıza gerek kalmaz:

### Hekimlerimiz (Team)
- `public/team/ibrahim-ufuk.jpg` (Önerilen: 800x800px, Kare)
- `public/team/can.jpg` (Önerilen: 800x800px, Kare)

```markdown
### Galeri (Gallery)
- `public/gallery/foto1.jpg`
- `public/gallery/foto2.jpg`
- `public/gallery/foto3.jpg`
- `public/gallery/foto4.jpg`
- `public/gallery/foto5.jpg`
- `public/gallery/foto6.jpg`
- `public/gallery/foto7.jpg`
- `public/gallery/foto8.jpg`
*(Önerilen: 1200x800px veya 1000x1000px, Kare veya Yatay)*
```

### Arkaplan (Background)
- `public/bg-pattern.png` - Gönderdiğiniz desen görseli buraya kaydedilmeli.
*(SVG yerine PNG kullanıyoruz)*

### Hero (Ana Görsel)
- `public/hero-vet.jpg` (Ana girişteki köpek/hekim görseli için önerilen isim)

## 3. İpuçları ve Optimizasyon
- **Format:** Mümkünse `.webp` formatını kullanın (daha hızlı yüklenir). Eğer `.jpg` kullanacaksanız dosyaları sıkıştırmayı unutmayın.
- **Dosya İsimleri:** Türkçe karakter (ş, ç, ö, ğ, ü, ı) ve boşluk kullanmamaya özen gösterin.
- **Farklı İsim Kullanmak:** Eğer görsel ismini değiştirirseniz, `data/config.ts` dosyasını açıp ilgili satırdaki yolu (path) güncellemeniz yeterlidir.

## 4. Değişiklikten Sonra
Görselleri ilgili klasöre attığınızda, geliştirme sunucusu (`npm run dev`) açıksa değişiklikler otomatik olarak yansıyacaktır. Eğer yansımazsa sayfayı yenilemeniz yeterlidir.
