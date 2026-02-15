
export const config = {
    business: {
        name: "Lodos Veteriner Kliniği",
        slogan: "Burada sevgi var, emek var, güven var.",
        phone: "0531 622 59 78",
        address: "Çankaya, Barış Manço Blv. No:204/35, 07000 Kepez/Antalya",
        googleMapsUrl: "https://www.google.com/maps?cid=10603446563726838806",
        rating: "4.9",
        reviewCount: "170+",
        hours: "11:00 - 19:30 (Her Gün Açık)",
        instagram: "https://www.instagram.com/lodosveterinerklinigi/",
    },
    team: [
        {
            name: "Veteriner Hekim İbrahim Ufuk Bey",
            role: "Veteriner Hekim",
            image: "/team/ibrahim-ufuk.jpg",
        },
        {
            name: "Veteriner Hekim Can Bey",
            role: "Veteriner Hekim",
            image: "/team/can.jpg",
        }
    ],
    services: [
        { title: "Genel Muayene & Teşhis", icon: "Stethoscope" },
        { title: "Cerrahi Operasyonlar", description: "Kısırlaştırma ve yumuşak doku cerrahisi", icon: "Scalpel" },
        { title: "Aşı & Parazit", description: "Düzenli takip ve koruyucu hekimlik", icon: "Syringe" },
        { title: "Röntgen & Laboratuvar", description: "Hızlı ve doğru tanı", icon: "Activity" },
        { title: "Ağız ve Diş Sağlığı", description: "Diş temizliği ve çekimi", icon: "Smile" },
    ],
    theme: {
        colors: {
            primary: "#008080", // Teal / Dark Cyan
            secondary: "#FF7F50", // Coral / Orange
            background: "#ffffff",
        }
    },
    gallery: [
        { src: "/gallery/foto1.jpg", alt: "Klinik & Hastalarımız" },
        { src: "/gallery/foto2.jpg", alt: "Klinik & Hastalarımız" },
        { src: "/gallery/foto3.jpg", alt: "Klinik & Hastalarımız" },
        { src: "/gallery/foto4.jpg", alt: "Klinik & Hastalarımız" },
        { src: "/gallery/foto5.jpg", alt: "Klinik & Hastalarımız" },
        { src: "/gallery/foto6.jpg", alt: "Klinik & Hastalarımız" },
        { src: "/gallery/foto7.jpg", alt: "Klinik & Hastalarımız" },
        { src: "/gallery/foto8.jpg", alt: "Klinik & Hastalarımız" },
        { src: "/gallery/foto9.jpg", alt: "Klinik & Hastalarımız" },
    ],
    testimonials: [
        { name: "Ayşe Yılmaz", comment: "Can Bey kedimle o kadar güzel ilgilendi ki, minnettarım. Çok temiz ve ilgili bir klinik.", rating: 5 },
        { name: "Mehmet Demir", comment: "İbrahim Hoca işinin ehli. Gece yarısı acil gelmek zorunda kaldık, hemen müdahale ettiler.", rating: 5 },
        { name: "Selin Kara", comment: "Fiyatlar makul, hizmet kalitesi çok yüksek. Güvenle tercih edebilirsiniz.", rating: 5 },
        { name: "Ahmet Çelik", comment: "Köpeğimin aşı takibini düzenli yapıyorlar, sms ile bilgilendirme harika.", rating: 5 },
    ],
    googleMapsEmbed: "https://maps.google.com/maps?q=Lodos+Veteriner+Kliniği+Antalya&cid=10603446563726838806&t=&z=15&ie=UTF8&iwloc=&output=embed"
};
