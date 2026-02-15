"use client";

import { config } from "@/data/config";
import { Phone, MapPin, Clock, Star, ArrowRight, Instagram, Menu, X, ChevronRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const { business, team, services, gallery, testimonials, googleMapsEmbed } = config;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="min-h-screen flex flex-col font-sans text-slate-800 relative">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VeterinaryCare",
                        "name": business.name,
                        "image": "https://lodosveteriner.com/hero-vet.jpg",
                        "url": "https://lodosveteriner.com",
                        "telephone": business.phone,
                        "priceRange": "₺₺",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Barış Manço Blv. No:204/35",
                            "addressLocality": "Kepez",
                            "addressRegion": "Antalya",
                            "postalCode": "07000",
                            "addressCountry": "TR"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 36.9436,
                            "longitude": 30.6789
                        },
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday",
                                    "Sunday"
                                ],
                                "opens": "11:00",
                                "closes": "19:30"
                            }
                        ],
                        "sameAs": [
                            business.instagram,
                            business.googleMapsUrl
                        ]
                    })
                }}
            />
            {/* Floating WhatsApp Button */}
            <a
                href={`https://wa.me/${business.phone.replace(/\s+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 hover:shadow-green-500/30 flex items-center justify-center"
            >
                <MessageCircle size={28} fill="white" className="text-green-500" />
            </a>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <Link href="/" className="text-2xl md:text-3xl text-teal-custom tracking-tight hover:opacity-90 transition-opacity flex flex-wrap gap-x-2">
                        <span className="font-spartan font-bold">LODOS</span>
                        <span className="font-spartan font-normal">Veteriner Kliniği</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#services" className="text-slate-600 hover:text-teal-custom font-medium transition-colors">Hizmetler</Link>
                        <Link href="#team" className="text-slate-600 hover:text-teal-custom font-medium transition-colors">Hekimlerimiz</Link>
                        <Link href="#gallery" className="text-slate-600 hover:text-teal-custom font-medium transition-colors">Galeri</Link>
                        <Link href="#contact" className="text-slate-600 hover:text-teal-custom font-medium transition-colors">İletişim</Link>

                        <a
                            href={`tel:${business.phone}`}
                            className="bg-orange-custom hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            <Phone size={18} className="fill-current" />
                            <span>Hemen Ara</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 hover:text-teal-custom transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
                        <Link href="#services" className="text-lg font-medium text-slate-700 py-2 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Hizmetler</Link>
                        <Link href="#team" className="text-lg font-medium text-slate-700 py-2 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Hekimlerimiz</Link>
                        <Link href="#gallery" className="text-lg font-medium text-slate-700 py-2 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Galeri</Link>
                        <Link href="#contact" className="text-lg font-medium text-slate-700 py-2 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>İletişim</Link>
                        <a
                            href={`tel:${business.phone}`}
                            className="bg-orange-custom text-white px-4 py-3 rounded-xl font-bold text-center shadow-sm"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Hemen Ara: {business.phone}
                        </a>
                    </div>
                )}
            </nav>

            {/* Hero Section (Premium Design) */}
            <section className="pt-32 pb-16 px-4 md:pt-48 md:pb-32 flex flex-col items-center relative overflow-hidden">
                {/* Animated Background Ambience */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl animate-pulse delay-700 mix-blend-multiply"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse mix-blend-multiply"></div>

                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-teal-100 text-teal-700 font-semibold text-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 shadow-sm">
                            <Star size={16} className="fill-teal-500 text-teal-500" />
                            <span>Antalya'nın En Güvenilen Veteriner Kliniği</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both">
                            Patili Dostlarınız İçin <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-400">Güvenli Liman</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 mb-10 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both delay-100">
                            Lodos Veteriner Kliniği olarak patili dostlarımızı sadece “hasta” değil, ailenin bir parçası olarak görüyoruz.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both delay-200">
                            <a
                                href={`tel:${business.phone}`}
                                className="relative bg-teal-custom text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-teal-500/20 hover:shadow-teal-500/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 min-w-[200px] overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 skew-x-12"></div>
                                <span className="relative">Randevu Al</span>
                            </a>
                            <a
                                href={business.googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200 hover:border-orange-300 hover:text-orange-500 px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 hover:bg-white shadow-lg shadow-slate-200/50 min-w-[200px]"
                            >
                                <MapPin size={22} />
                                Yol Tarifi
                            </a>
                        </div>
                    </div>

                    {/* Right Visual (Premium Composition) */}
                    <div className="relative flex justify-center items-center animate-in fade-in slide-in-from-right-8 duration-[1500ms] delay-300">
                        {/* Main Image Container */}
                        <div className="relative w-full max-w-lg aspect-square">
                            {/* Abstract Shapes */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-100 rounded-full blur-xl opacity-80"></div>
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal-100 rounded-full blur-xl opacity-80"></div>

                            {/* Main Image Mask */}
                            <div className="relative w-full h-full bg-white rounded-[3rem] rotate-3 overflow-hidden shadow-2xl border-[6px] border-white group transition-transform duration-700 hover:rotate-0">
                                <img
                                    src="/hero-vet.jpg"
                                    alt="Lodos Veteriner Kliniği"
                                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <div className="absolute inset-0 bg-slate-100 hidden flex-col items-center justify-center text-slate-400">
                                    <span className="text-6xl mb-4 block animate-bounce">🐕‍🦺</span>
                                    <span className="font-semibold">Görsel Bekleniyor...</span>
                                    <p className="text-xs mt-2 px-6 text-center opacity-70">public/hero-vet.jpg yükleyin</p>
                                </div>
                            </div>

                            {/* Floating Badge (Trust Signal) */}
                            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow flex items-center gap-3 max-w-[200px]">
                                <div className="bg-orange-100 p-2.5 rounded-xl">
                                    <Star className="text-orange-500 fill-orange-500" size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-800 text-lg">4.9/5</div>
                                    <div className="text-xs text-slate-500 font-medium">170+ Mutlu Yorum</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar (Trust Signals) */}
            <section className="bg-teal-custom text-white py-4 shadow-md relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-teal-500/50 text-center">
                        <div className="flex items-center justify-center gap-3 py-2">
                            <Clock className="text-teal-200" />
                            <span className="font-bold text-lg">11:00 - 19:30 Açık</span>
                        </div>
                        <div className="flex items-center justify-center gap-3 py-2">
                            <Star className="text-orange-300 fill-orange-300" />
                            <span className="font-bold text-lg">{business.reviewCount} Mutlu Yorum</span>
                        </div>
                        <div className="flex items-center justify-center gap-3 py-2">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                            <span className="font-bold text-lg">Her Gün Hizmet</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 px-4 relative">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-teal-600 font-bold uppercase tracking-wider mb-2">Hizmetlerimiz</h2>
                        <h3 className="text-4xl font-bold text-slate-900 mb-4">Küçük Dostlarınız İçin En İyisi</h3>
                        <div className="w-24 h-1.5 bg-orange-custom mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="glass p-8 rounded-3xl shadow-lg border border-white/40 hover:border-orange-200 hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] w-full md:w-[calc(33.333%-2rem)] min-w-[300px] flex flex-col items-center text-center group relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-white group-hover:from-orange-50 group-hover:to-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:rotate-6 transition-all duration-300">
                                    <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300">🐾</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                                {service.description && (
                                    <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                                        {service.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-24 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-teal-600 font-bold uppercase tracking-wider mb-2">Uzman Kadromuz</h2>
                        <h3 className="text-4xl font-bold text-slate-900 mb-4">Hekimlerimizle Tanışın</h3>
                        <div className="w-24 h-1.5 bg-orange-custom mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                        {team.map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-full aspect-square bg-slate-100 rounded-2xl mb-6 overflow-hidden relative shadow-xl group border-4 border-white">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                        }}
                                    />
                                    <div className="absolute inset-0 hidden flex flex-col items-center justify-center text-slate-400 bg-slate-100">
                                        <span className="text-6xl mb-4 grayscale opacity-50">👨‍⚕️</span>
                                        <span className="text-xs font-semibold uppercase tracking-wider">Görsel Bekleniyor</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                                <p className="text-teal-custom font-medium mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            {gallery && gallery.length > 0 && (
                <section id="gallery" className="py-24 px-4 border-t border-gray-100/20">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-orange-custom font-bold uppercase tracking-wider mb-2">Klinik Galeri</h2>
                            <h3 className="text-4xl font-bold text-slate-900 mb-4">Modern ve Hijyenik Ortam</h3>
                            <div className="w-24 h-1.5 bg-teal-custom mx-auto rounded-full"></div>
                        </div>

                        <div className="
                            flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 
                            md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 md:mx-auto md:px-0 max-w-6xl
                            scrollbar-hide
                        ">
                            {gallery.map((item, index) => (
                                <div
                                    key={index}
                                    className="
                                        snap-center shrink-0 w-[85vw] md:w-auto 
                                        aspect-square relative group overflow-hidden rounded-2xl bg-gray-100 shadow-sm
                                        first:ml-0 last:mr-0 cursor-pointer
                                    "
                                    onClick={() => setSelectedImage(item.src)}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-slate-200 hidden flex items-center justify-center text-slate-400">
                                        <div className="text-center text-xs">
                                            <p className="mb-1">Görsel: {index + 1}</p>
                                            <p className="opacity-70">{item.src}</p>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Testimonials Section */}
            {testimonials && testimonials.length > 0 && (
                <section className="py-24 px-4">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-teal-600 font-bold uppercase tracking-wider mb-2">Mutlu Patiler</h2>
                            <h3 className="text-4xl font-bold text-slate-900 mb-4">Hasta Yorumları</h3>
                            <div className="w-24 h-1.5 bg-orange-custom mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {testimonials.map((t, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative group hover:-translate-y-1 transition-transform">
                                    {/* Speech Bubble Tail */}
                                    <div className="absolute -bottom-3 left-8 w-6 h-6 bg-white border-b border-r border-gray-100 transform rotate-45"></div>

                                    <div className="flex text-yellow-400 mb-4 justify-center">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                                        ))}
                                    </div>
                                    <p className="text-slate-600 italic mb-6 text-center text-sm leading-relaxed">"{t.comment}"</p>
                                    <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-50">
                                        <span className="font-bold text-slate-800 text-sm">{t.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-16">
                            <a href={business.googleMapsUrl} target="_blank" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-bold transition-colors border-b-2 border-teal-100 hover:border-teal-600 pb-1">
                                Google Haritalar'da Tüm Yorumları Gör <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </section>
            )}

            {/* Contact & Map Section */}
            <section id="contact" className="py-24 px-4 border-t border-gray-100/20">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                        {/* Contact Info */}
                        <div className="order-2 lg:order-1">
                            <div className="mb-10">
                                <h2 className="text-teal-600 font-bold uppercase tracking-wider mb-2">Bize Ulaşın</h2>
                                <h3 className="text-4xl font-bold text-slate-900 mb-6">Sizi ve Minik Dostunuzu Bekliyoruz</h3>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                    Masadağı'nın en güvenilir kliniği olarak her zaman yanınızdayız.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <a href={`tel:${business.phone}`} className="flex items-center gap-6 p-6 rounded-2xl bg-teal-50 border border-teal-100 hover:border-teal-200 hover:bg-teal-100/50 transition-all group">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-teal-600 group-hover:scale-110 transition-transform">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-teal-600 uppercase tracking-wide">Telefon</div>
                                        <div className="text-2xl font-bold text-slate-900">{business.phone}</div>
                                    </div>
                                </a>

                                <div className="flex items-center gap-6 p-6 rounded-2xl bg-orange-50 border border-orange-100">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-orange-custom">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-orange-custom uppercase tracking-wide">Çalışma Saatleri</div>
                                        <div className="text-xl font-bold text-slate-900">{business.hours}</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-600 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Adres</div>
                                        <div className="text-lg font-medium text-slate-900">{business.address}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="order-1 lg:order-2 h-[500px] w-full bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl relative border-4 border-white">
                            {googleMapsEmbed ? (
                                <iframe
                                    src={googleMapsEmbed}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all duration-700"
                                ></iframe>
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-100">
                                    <MapPin size={48} className="mb-4 opacity-20" />
                                    <p>Harita Yükleniyor...</p>
                                </div>
                            )}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-full px-6 flex justify-center pointer-events-none">
                                <a
                                    href={business.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pointer-events-auto bg-white/95 backdrop-blur-md text-slate-800 px-8 py-3 rounded-full font-bold shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform border border-gray-200 text-sm md:text-base border-b-4 border-b-gray-300 active:border-b-0 active:translate-y-1"
                                >
                                    <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">
                                        <ArrowRight size={16} />
                                    </div>
                                    Yol Tarifi Al
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 text-sm">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Column 1: Brand & About */}
                        <div>
                            <Link href="/" className="inline-block text-2xl text-teal-400 tracking-tight mb-4 hover:opacity-90 transition-opacity">
                                <span className="font-spartan font-bold">LODOS</span>
                                <span className="font-spartan font-normal ml-1">Veteriner Kliniği</span>
                            </Link>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                {business.slogan} <br />
                                Minik dostlarınızın sağlığı ve mutluluğu için modern tıbbın tüm imkanlarını sevgiyle sunuyoruz.
                            </p>
                            <div className="flex gap-4">
                                {business.instagram && (
                                    <a
                                        href={business.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300"
                                    >
                                        <Instagram size={20} />
                                    </a>
                                )}
                                <a
                                    href={`https://wa.me/${business.phone.replace(/\s+/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
                                >
                                    <MessageCircle size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
                                Hızlı Erişim
                            </h3>
                            <ul className="space-y-3">
                                <li><Link href="/" className="hover:text-teal-400 transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-teal-500" /> Ana Sayfa</Link></li>
                                <li><Link href="#services" className="hover:text-teal-400 transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-teal-500" /> Hizmetlerimiz</Link></li>
                                <li><Link href="#team" className="hover:text-teal-400 transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-teal-500" /> Hekimlerimiz</Link></li>
                                <li><Link href="#gallery" className="hover:text-teal-400 transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-teal-500" /> Galeri</Link></li>
                                <li><Link href="#contact" className="hover:text-teal-400 transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-teal-500" /> İletişim</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Services */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
                                Hizmetlerimiz
                            </h3>
                            <ul className="space-y-3">
                                {services.slice(0, 5).map((service, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></div>
                                        <span className="hover:text-teal-400 transition-colors cursor-default">{service.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Contact */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
                                İletişim
                            </h3>
                            <div className="space-y-4">
                                <a href={`tel:${business.phone}`} className="flex items-start gap-3 hover:text-teal-400 transition-colors group">
                                    <Phone size={20} className="text-teal-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    <span>{business.phone}</span>
                                </a>
                                <div className="flex items-start gap-3">
                                    <MapPin size={20} className="text-teal-500 shrink-0 mt-0.5" />
                                    <span>{business.address}</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock size={20} className="text-teal-500 shrink-0 mt-0.5" />
                                    <span>{business.hours}</span>
                                </div>
                                <a
                                    href={business.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-teal-400 hover:text-white mt-2 font-medium transition-colors"
                                >
                                    Yol Tarifi Al <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-slate-500">
                        <div className="text-center">
                            &copy; {new Date().getFullYear()} {business.name}. Tüm hakları saklıdır.
                        </div>
                    </div>
                </div>
            </footer>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Gallery Fullscreen"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 select-none"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </main>
    );
}
