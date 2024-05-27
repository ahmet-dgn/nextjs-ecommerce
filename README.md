Bu bir headless e-ticaret projesidir. Proje Next.js kullanılarak geliştirilmiş ve React bileşenleri ile modüler ve yeniden kullanılabilir yapıda tasarlanmıştır.

Kurulum ve Çalıştırma Adımları

## Gereksinimler

Node.js (v14.0.0 veya üzeri)
npm (v6.0.0 veya üzeri) veya yarn (v1.22.0 veya üzeri)

## Kurulum

Depoyu klonlayın:
https://github.com/ahmet-dgn/nextjs-ecommerce.git

Bağımlılıkları yükleyin:
npm install - yarn install

## Çevresel Değişkenler

Çevresel değişkenleri .envdosyasında tanımlayabilirsiniz. Örnek bir .env dosyası şu şekilde olabilir:
Json server api adresi olarak aşağıda ki serverı kullanabilirsiniz:
API_URL="https://json-server-iota-rosy.vercel.app/"

Web sitesinin yayında olacağı adres
WEB_SITE_URL="//www.example.com

## Geliştirme Ortamı

npm run dev veya yarn dev
Tarayıcınızda http://localhost:3000 adresine gidin. Uygulamanızın çalıştığını görmelisiniz.

## Proje Yapısı

root/
|-- app/ # Next.js sayfa bileşenleri
|-- components/ # Tüm React bileşenleri
|-- context/ # React global props
|-- lib/ # Fetch fonksiyonlar
|-- public/ # Statik dosyalar (resimler vb.)

## API Entegrasyonu

Proje aşağıdaki API'lere bağlanmaktadır:

Banners
Products
Brands
Categories
Navigations
