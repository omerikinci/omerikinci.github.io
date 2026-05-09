const siteTranslations = {
  common: {
    items: [
      { selector: 'a.project-open-link[href="../index.html#projeler"]', text: { tr: "← Projelere Dön", en: "← Back to Projects" } },
      { selector: "#lightboxClose", text: { tr: "Kapat", en: "Close" } },
      { selector: "#lightboxLoader span:last-child", text: { tr: "Yükleniyor...", en: "Loading..." } }
    ],
    attrs: [
      { selector: "#lightbox", attr: "aria-label", text: { tr: "Proje galeri görüntüleyici", en: "Project gallery viewer" } },
      { selector: "#lightboxClose", attr: "aria-label", text: { tr: "Galeri kapat", en: "Close gallery" } },
      { selector: "#lightboxPrev", attr: "aria-label", text: { tr: "Önceki görsel", en: "Previous image" } },
      { selector: "#lightboxNext", attr: "aria-label", text: { tr: "Sonraki görsel", en: "Next image" } }
    ]
  },
  pages: {
    home: {
      title: { tr: "Ömer Salih İkinci | Elektronik Projeleri", en: "Ömer Salih İkinci | Electronics Projects" },
      description: {
        tr: "Ömer Salih İkinci'nin elektronik, güç elektroniği, batarya ve 3D baskı odaklı proje notları.",
        en: "Electronics, power electronics, battery and 3D printing project notes by Ömer Salih İkinci."
      },
      items: [
        { selector: ".hero-subtitle", text: { tr: "Kişisel Blog", en: "Personal Blog" } },
        { selector: ".lead", text: { tr: "Burada elektronik, güç elektroniği, batarya sistemleri, PCB tasarımı ve 3D baskı üzerine geliştirdiğim projeleri not alıyorum. Yalnızca ortaya çıkan sonucu değil, deneme sürecini, karşılaştığım hataları, yaptığım ölçümleri ve öğrendiğim şeyleri de paylaşmaya çalışıyorum.", en: "Here I document the projects I build around electronics, power electronics, battery systems, PCB design and 3D printing. I try to share not only the final result, but also the testing process, the mistakes I run into, the measurements I take and the things I learn along the way." } },
        { selector: "#email-btn", text: { tr: "E-posta Gönder", en: "Send Email" } },
        { selector: "#projeler h2", text: { tr: "Projeler", en: "Projects" } },
        { selector: ".project-list > article:nth-of-type(1) .project-kicker", text: { tr: "Test Ekipmanları", en: "Test Equipment" } },
        { selector: ".project-list > article:nth-of-type(1) h3", text: { tr: "Elektronik Kör Yük", en: "Electronic Dummy Load" } },
        { selector: ".project-list > article:nth-of-type(1) p:not(.project-kicker)", text: { tr: "Prototip kör yük cihazının V1 versiyonunu geliştirdim. Kasa yerleşimi, PCB uygulaması, osiloskop ölçümleri ve test süreciyle cihazı daha düzenli, izlenebilir ve kullanılabilir hale getirdim.", en: "I developed the V1 version of my prototype dummy load. Through enclosure layout, PCB implementation, oscilloscope measurements and testing, I made the device more organized, traceable and usable." } },
        { selector: ".project-list > article:nth-of-type(1) .project-open-link", text: { tr: "Detay Sayfası", en: "Details" } },
        { selector: ".project-list > article:nth-of-type(2) .project-kicker", text: { tr: "Güç Elektroniği", en: "Power Electronics" } },
        { selector: ".project-list > article:nth-of-type(2) p:not(.project-kicker)", text: { tr: "Fırçalı DC motor için geliştirdiğim, yön değişimini rölelerle yapan basit yapıda 20A motor sürücü prototipi.", en: "A simple 20A motor driver prototype for a brushed DC motor, using relays for direction change." } },
        { selector: ".project-list > article:nth-of-type(2) .project-open-link", text: { tr: "Detay Sayfası", en: "Details" } },
        { selector: ".project-list > article:nth-of-type(3) .project-kicker", text: { tr: "Batarya Sistemleri", en: "Battery Systems" } },
        { selector: ".project-list > article:nth-of-type(3) h3", text: { tr: "E-Bike Batarya", en: "E-Bike Battery" } },
        { selector: ".project-list > article:nth-of-type(3) p:not(.project-kicker)", text: { tr: "10S2P yapıda, 42V 5600mAh kapasitede, 18650 Aspilsan hücrelerle oluşturulan batarya paketi. 20A BMS ve hücre balanslama uygulandı.", en: "A 10S2P, 42V 5600mAh battery pack built with 18650 Aspilsan cells. A 20A BMS and cell balancing were implemented." } },
        { selector: ".project-list > article:nth-of-type(3) .project-open-link", text: { tr: "Detay Sayfası", en: "Details" } },
        { selector: ".project-list > article:nth-of-type(4) .project-kicker", text: { tr: "3D Print ve Modifikasyon", en: "3D Printing and Modification" } },
        { selector: ".project-list > article:nth-of-type(4) h3", text: { tr: "3D Baskı ve Modifiye RC Araba", en: "3D Printed and Modified RC Car" } },
        { selector: ".project-list > article:nth-of-type(4) p:not(.project-kicker)", text: { tr: "3D baskı, mekanik modifikasyon ve tek yönlü uçak ESC'si için hazırlanan röleli yön değiştirme devresiyle geliştirdiğim RC araba prototipi. Alıcı kontrollü servo ile mekanik fren sistemi de eklendi.", en: "An RC car prototype built with 3D printed parts, mechanical modifications and a relay-based direction change circuit for a one-way aircraft ESC. A receiver-controlled servo mechanical brake was also added." } },
        { selector: ".project-list > article:nth-of-type(4) .project-open-link", text: { tr: "Detay Sayfası", en: "Details" } },
        { selector: "#yetenekler h2", text: { tr: "Yetenekler ve Araçlar", en: "Skills and Tools" } },
        { selector: ".skill-grid article:nth-of-type(1) h3", text: { tr: "Üretim ve Test", en: "Production and Testing" } },
        { selector: ".skill-grid article:nth-of-type(1) p", text: { tr: "THT/SMD lehimleme, devre testleri, hata ayıklama, kalite kontrol.", en: "THT/SMD soldering, circuit testing, debugging and quality control." } },
        { selector: ".skill-grid article:nth-of-type(2) h3", text: { tr: "Donanım", en: "Hardware" } },
        { selector: ".skill-grid article:nth-of-type(2) p", text: { tr: "Arduino, ESP32, STM32, batarya paketleme, ESC ve motor sürücü çalışmaları. RS232/RS485 pratik deneyim.", en: "Arduino, ESP32, STM32, battery pack assembly, ESC and motor driver work. Practical RS232/RS485 experience." } },
        { selector: ".skill-grid article:nth-of-type(3) h3", text: { tr: "Laboratuvar Araçları", en: "Lab Equipment" } },
        { selector: ".skill-grid article:nth-of-type(3) p", text: { tr: "Osiloskop, multimetre, LCR metre, güç kaynağı, elektronik kör yük, sıcak hava istasyonu.", en: "Oscilloscope, multimeter, LCR meter, power supply, electronic dummy load and hot air station." } },
        { selector: ".skill-grid article:nth-of-type(4) h3", text: { tr: "Yazılım", en: "Software" } },
        { selector: ".site-footer p", text: { tr: "Ömer Salih İKİNCİ - Elektronik projeleri ve notları", en: "Ömer Salih İKİNCİ - Electronics projects and notes" } }
      ],
      attrs: [
        { selector: ".project-video-embed", attr: "title", text: { tr: "Kör Yük Proje Videosu", en: "Dummy Load Project Video" } }
      ]
    },
    "electronic-dummy-load": {
      title: { tr: "Elektronik Kör Yük V1 | Proje Detayı", en: "Electronic Dummy Load V1 | Project Details" },
      description: {
        tr: "Elektronik kör yük V1 geliştirme süreci, PCB, kasa ve osiloskop ölçüm görselleri.",
        en: "Electronic dummy load V1 development process with PCB, enclosure and oscilloscope measurement visuals."
      },
      items: [
        { selector: "h1", text: { tr: "Elektronik Kör Yük V1", en: "Electronic Dummy Load V1" } },
        { selector: ".lead", text: { tr: "Var olan elektronik kör yük prototip cihazının V1 versiyonunu geliştirdim. Bu çalışma kapsamında kasa yerleşimi, PCB uygulaması, test bağlantıları ve osiloskopla sinyal takibi üzerinde iyileştirmeler yaptım.", en: "I developed the V1 version of my existing electronic dummy load prototype. In this version I improved the enclosure layout, PCB implementation, test connections and oscilloscope-based signal checks." } },
        { selector: ".project-download-kicker", text: { tr: "Şematik", en: "Schematic" } },
        { selector: ".project-download-title", text: { tr: "Şematik PDF", en: "Schematic PDF" } },
        { selector: ".project-download-note", text: { tr: "Tıklayınca PDF dosyası indirilir.", en: "Click to download the PDF file." } },
        { selector: ".project-detail-text h2", text: { tr: "Geliştirme Süreci", en: "Development Process" } },
        { selector: ".project-detail-text p:nth-of-type(1)", text: { tr: "Elektronik kör yük cihazının ilk stabil versiyonu olan V1'i tamamladım.", en: "I completed V1, the first stable version of the electronic dummy load device." } },
        { selector: ".project-detail-text p:nth-of-type(2)", text: { tr: "Bu versiyondan önce bir prototip cihaz ürettim. Prototip üzerinde testler gerçekleştirdim, karşılaştığım problemleri not aldım ve V1 tasarımına bu hataları düzeltecek şekilde başladım.", en: "Before this version, I built a prototype device. I tested it, noted the problems I encountered and started the V1 design with the goal of fixing those issues." } },
        { selector: ".project-detail-text p:nth-of-type(3)", text: { tr: "Projenin şema ve PCB tasarımını KiCad üzerinde hazırladım. Komponent yerleşimi, güç ve kontrol katlarının ayrılması, test noktaları ve rework yapılabilirlik gibi detayları PCB tasarım sürecinde dikkate aldım.", en: "I prepared the schematic and PCB design in KiCad. During PCB design, I paid attention to component placement, separation of power and control sections, test points and rework accessibility." } },
        { selector: ".project-detail-text p:nth-of-type(4)", text: { tr: "Cihazın kasasını ise Blender üzerinde modelledim ve 3D yazıcıda bastım. Kasa tasarımında LCD ekran, fan, güç girişi, banana soketler, XT60 soket, butonlar ve bağlantı noktalarının yerleşimini dikkate alarak elektronik tasarımla uyumlu bir mekanik yapı oluşturmaya çalıştım.", en: "I modeled the enclosure in Blender and printed it on a 3D printer. In the enclosure design, I considered the LCD, fan, power input, banana sockets, XT60 connector, buttons and connection points to create a mechanical structure compatible with the electronics." } },
        { selector: ".project-detail-text p:nth-of-type(5)", text: { tr: "Mikrodenetleyici tarafında ATmega328P yerine daha uygun maliyetli, stabil, güçlü ve hızlı bir seçenek olan STM32G030F6P6TR kullandım.", en: "On the microcontroller side, I used the STM32G030F6P6TR instead of the ATmega328P because it was a more cost-effective, stable, capable and fast option." } },
        { selector: ".project-detail-text p:nth-of-type(6)", text: { tr: "Prototip cihazda kullandığım yarı analog, yarı dijital çalışma mantığını V1 cihazımda da korudum. Analog kontrol yapısının çalışma karakterini stabil bulduğum için bu yaklaşımı kullanmaya devam ettim.", en: "I kept the semi-analog, semi-digital operating approach from the prototype in the V1 device. Since I found the analog control behavior stable, I continued with that approach." } },
        { selector: ".project-detail-text p:nth-of-type(7)", text: { tr: "Güç katında tek MOSFET yerine, lineer kullanımda daha iyi SOA değerlerine sahip 4 adet IRFP260N MOSFET tercih ettim. Bu MOSFET'leri lineer bölgede sürebilmek için prototip cihazda da kullandığım LM358 op-amp yapısını, her MOSFET için ayrı bir op-amp olacak şekilde tasarladım.", en: "In the power stage, I chose four IRFP260N MOSFETs instead of a single MOSFET because they offer better SOA values for linear operation. To drive them in the linear region, I designed the LM358 op-amp structure I used in the prototype with one op-amp per MOSFET." } },
        { selector: ".project-detail-text p:nth-of-type(8)", text: { tr: "MOSFET'lerin shunt dirençleri üzerindeki gerilimi doğrudan STM32 ADC pinleriyle okumak yerine, 16-bit çözünürlük sağlayan ADS1115 harici ADC ile ölçtüm. Böylece anlık akım ölçümlerinde daha yüksek çözünürlük elde etmeyi hedefledim.", en: "Instead of reading the voltage across the MOSFET shunt resistors directly with the STM32 ADC pins, I measured it with an ADS1115 external ADC that provides 16-bit resolution. This was intended to improve instant current measurement resolution." } },
        { selector: ".project-detail-text p:nth-of-type(9)", text: { tr: "Güç, kontrol ve ölçüm katlarının ihtiyaç duyduğu farklı besleme seviyeleri için kart üzerinde birden fazla regülatör yapısı kullandım; regülatör çevresindeki filtreleme elemanlarını datasheet önerilerini dikkate alarak yerleştirdim.", en: "I used multiple regulator sections on the board for the different supply levels required by the power, control and measurement stages, placing the filtering components around the regulators according to datasheet recommendations." } },
        { selector: ".project-detail-text p:nth-of-type(10)", text: { tr: "Elektriksel gürültüyü azaltmak için güç katı ile kontrol katı arasında fiziksel boşluk bıraktım. Osiloskop ölçümlerinde anahtarlamalı regülatörlerden çıkan sinyallerin doğru ve ideal seviyelerde olduğunu doğruladım.", en: "To reduce electrical noise, I left physical spacing between the power stage and the control stage. With oscilloscope measurements, I verified that the signals from the switching regulators were at correct and suitable levels." } },
        { selector: ".project-detail-text p:nth-of-type(11)", text: { tr: "LCD ekran tarafında da küçük bir rework ihtiyacı oluştu. Ekran üzerindeki I2C modülü 5V pull-up dirençleriyle çalışıyordu; ancak kullandığım STM32 mikrodenetleyici 3.3V lojik seviyesinde çalıştığı için bu yapı doğrudan uyumlu değildi. Bu nedenle I2C modülü üzerindeki 5V pull-up dirençlerini tespit edip söktüm. Ardından ekrana ek bir bağlantı kablosu çekerek I2C hattının 3.3V pull-up ile çalışmasını sağlayacak şekilde rework uyguladım.", en: "The LCD also required a small rework. The I2C module on the display used 5V pull-up resistors, but the STM32 microcontroller operates at 3.3V logic level, so the setup was not directly compatible. I identified and removed the 5V pull-up resistors on the I2C module, then added an extra wire to the display so the I2C line could work with a 3.3V pull-up." } },
        { selector: ".project-detail-text p:nth-of-type(12)", text: { tr: "Bunların dışında cihazın güvenilir çalışması için küçük ama önemli birçok yardımcı devre ve yapı da tasarıma dahil edildi.", en: "In addition to these, I included several small but important auxiliary circuits and structures to support reliable operation." } },
        { selector: ".project-detail-text p:nth-of-type(13)", text: { tr: "İlk kart olduğu için rework işlemlerini daha kolay yapabilmek adına pasif komponentlerde ağırlıklı olarak 0805 kılıf boyutunu tercih ettim. Sonraki stabil revizyonlarda 0603 ve daha küçük kılıf boyutları kullanmayı düşünüyorum.", en: "Since this was the first board, I mostly chose 0805 passive components to make rework easier. For later stable revisions, I plan to use 0603 and smaller packages." } },
        { selector: ".project-detail-text p:nth-of-type(14)", text: { tr: "Elbette süreç tamamen sorunsuz ilerlemedi. Prototip cihazda bulunmayan ters polarite korumasını V1'e eklemek istedim. İlk tasarımda tek P-Channel MOSFET ile ters polarite koruma devresi kurdum ve test ettim. Ancak gözden kaçırdığım bir durum vardı: Tek P-Channel MOSFET bazı senaryolar için yeterli olsa da içeriden gelen ters akımı engelleyemiyordu. IRFP260N MOSFET'ler kapalı olsa bile ters akım body diyot üzerinden geçerek girişe bağlı güç kaynağını kısa devre durumuna düşürüyordu.", en: "Of course, the process was not completely smooth. I wanted to add reverse polarity protection to V1, which the prototype did not have. In the first design, I built and tested a reverse polarity protection circuit with a single P-Channel MOSFET. However, I had missed one scenario: although a single P-Channel MOSFET can be enough in some cases, it could not block reverse current coming from inside the device. Even when the IRFP260N MOSFETs were off, reverse current could pass through the body diodes and put the connected power supply into a short-circuit condition." } },
        { selector: ".project-detail-text p:nth-of-type(15)", text: { tr: "Bu problemi çözmek için güç giriş bloğunu Back-to-Back P-Channel MOSFET yapısına geçirmek üzere PCB üzerinde rework işlemi gerçekleştirdim. Ön paneldeki banana soketleri korumalı giriş için kullandım ve bu giriş 8-30V aralığını destekleyecek şekilde tasarlandı. Hemen sağ tarafındaki XT60 soket ise korumasız giriş olarak çalışıyor ve 0-30V giriş aralığını destekliyor.", en: "To solve this problem, I reworked the PCB to convert the power input block to a back-to-back P-Channel MOSFET structure. I used the banana sockets on the front panel as the protected input, designed to support an 8-30V range. The XT60 connector on the right works as the unprotected input and supports a 0-30V input range." } },
        { selector: ".project-detail-text p:nth-of-type(16)", text: { tr: "Rework sonrasında korumalı güç girişi 8V ve altındaki gerilimlerde koruma MOSFET'lerini yarı açık bölgede bıraktığı için ciddi ısınmaya sebep oldu. Bu nedenle sonraki PCB revizyonunda güç giriş bloğunu ideal diyot kontrolcüsü ve düşük RDS(on) değerine sahip iki adet N-Channel Back-to-Back MOSFET yapısına göre yeniden tasarlamayı planlıyorum.", en: "After the rework, the protected power input caused significant heating at 8V and below because it left the protection MOSFETs partially on. For the next PCB revision, I plan to redesign the power input block using an ideal diode controller and two low-RDS(on) N-Channel MOSFETs in a back-to-back structure." } },
        { selector: ".project-detail-text p:nth-of-type(17)", text: { tr: "Ayrıca iki adet P-Channel Back-to-Back MOSFET yapısı nedeniyle hedeflediğim 200W test gücünde koruma MOSFET'leri tehlikeli seviyede ısındı. Bu yüzden cihazı güvenli çalışma için 150W güç ile sınırlandırdım. Cihaz, 30V ve 10A aralığındaki akım ve voltaj değerlerini destekleyebilmektedir.", en: "Also, because of the two P-Channel back-to-back MOSFETs, the protection MOSFETs heated to unsafe levels at my target 200W test power. For safe operation, I limited the device to 150W. The device can support voltage and current values up to 30V and 10A within this limit." } },
        { selector: ".project-detail-text p:nth-of-type(18)", text: { tr: "Yazılım tarafında ise yapay zekadan destek alarak RST tuşu ile istenildiği zaman yük çekimini açıp kapatma, aşırı akım uyarısı, ters polarite bildirimi, sıcaklık takibi ve fan kontrolü gibi kontrol, koruma ve izleme fonksiyonlarını geliştirdim.", en: "On the software side, with AI assistance, I developed control, protection and monitoring functions such as toggling load draw with the RST button, overcurrent warning, reverse polarity notification, temperature tracking and fan control." } },
        { selector: ".project-detail-text p:nth-of-type(19)", text: { tr: "V2 revizyonunda cihazı daha farklı ve işlevsel özelliklerle geliştirmeyi, aynı zamanda daha yüksek güç kapasitesine sahip bir yapı tasarlamayı hedefliyorum.", en: "For the V2 revision, I aim to improve the device with more functional features and design a structure with higher power capacity." } },
        { selector: ".project-detail-text p:nth-of-type(20)", text: { tr: "Sonuç olarak bu proje benim için güç elektroniği, ölçüm, PCB tasarımı, mekanik tasarım, rework ve hata analizi konularında ciddi şekilde öğretici ve tecrübe kazandıran bir çalışma oldu.", en: "Overall, this project was a very educational and experience-building work for me in power electronics, measurement, PCB design, mechanical design, rework and fault analysis." } },
        { selector: "main > section:nth-of-type(2) h2", text: { tr: "V1 Fotoğrafları", en: "V1 Photos" } },
        { selector: ".project-gallery-section .gallery-group:nth-of-type(2) h3", text: { tr: "V1 Osiloskop Görüntüleri", en: "V1 Oscilloscope Images" } },
        { selector: ".project-gallery-section .gallery-group:nth-of-type(3) h3", text: { tr: "V1 Test Fotoğrafları", en: "V1 Test Photos" } },
        { selector: ".project-gallery-section .gallery-group:nth-of-type(4) h3", text: { tr: "V1 Kasa", en: "V1 Enclosure" } },
        { selector: ".project-gallery-section .gallery-group:nth-of-type(5) h3", text: { tr: "Prototip Cihaz", en: "Prototype Device" } }
      ],
      attrs: [
        { selector: ".project-video-embed", attr: "title", text: { tr: "Kör Yük Proje Videosu", en: "Dummy Load Project Video" } }
      ]
    },
    "esc-20a": {
      title: { tr: "ESC 20A | Proje Detayı", en: "ESC 20A | Project Details" },
      description: { tr: "ESC 20A proje detayı.", en: "ESC 20A project details." },
      items: [
        { selector: ".lead", text: { tr: "Basit yapıda, fırçalı DC motor kontrolü için geliştirdiğim 20A ESC benzeri motor sürücü prototipi.", en: "A simple 20A ESC-like motor driver prototype I developed for brushed DC motor control." } },
        { selector: ".project-detail-text h2", text: { tr: "Proje Özeti", en: "Project Summary" } },
        { selector: ".project-detail-text p:nth-of-type(1)", text: { tr: "Bu projede olabildiğince basit yapıya sahip, fırçalı DC motor için kullanılabilecek 20A seviyesinde bir motor sürücü prototipi geliştirdim.", en: "In this project, I developed a simple 20A-level motor driver prototype that can be used with a brushed DC motor." } },
        { selector: ".project-detail-text p:nth-of-type(2)", text: { tr: "Çalışma mantığı bilinçli olarak oldukça temel tutuldu. Motor hız kontrolü MOSFET anahtarlama yapısı üzerinden sağlanırken, motorun yön değişimi faz değiştirici röleler ile gerçekleştirildi.", en: "The operating logic was intentionally kept very basic. Motor speed control is handled through MOSFET switching, while direction change is done with phase-switching relays." } },
        { selector: ".project-detail-text p:nth-of-type(3)", text: { tr: "Bu çalışma bana motor sürücü devrelerinde güç katı yerleşimi, MOSFET kullanımı, röle ile yön değiştirme mantığı ve basit kontrol devrelerinin sınırları hakkında pratik deneyim kazandırdı.", en: "This work gave me practical experience in power-stage layout, MOSFET usage, relay-based direction change and the limits of simple control circuits in motor driver designs." } },
        { selector: "main > section h2", text: { tr: "Fotoğraflar", en: "Photos" } }
      ]
    },
    "e-bike-battery": {
      title: { tr: "E-Bike Batarya | Proje Detayı", en: "E-Bike Battery | Project Details" },
      description: { tr: "E-Bike batarya proje detayı.", en: "E-bike battery project details." },
      items: [
        { selector: "h1", text: { tr: "E-Bike Batarya", en: "E-Bike Battery" } },
        { selector: ".lead", text: { tr: "Aspilsan 18650 hücrelerle hazırladığım 10S2P yapıda e-bike batarya paketi.", en: "A 10S2P e-bike battery pack I built using Aspilsan 18650 cells." } },
        { selector: ".project-detail-text h2", text: { tr: "Proje Özeti", en: "Project Summary" } },
        { selector: ".project-detail-text p:nth-of-type(1)", text: { tr: "Bu projede Aspilsan 18650 hücreler kullanarak 10S2P yapıda bir e-bike batarya paketi hazırladım.", en: "In this project, I built a 10S2P e-bike battery pack using Aspilsan 18650 cells." } },
        { selector: ".project-detail-text p:nth-of-type(2)", text: { tr: "Batarya paketinde hücre dizilimi, seri-paralel bağlantı yapısı, 20A BMS entegrasyonu ve paketleme adımları üzerinde çalıştım.", en: "I worked on cell layout, series-parallel connection structure, 20A BMS integration and packaging steps." } },
        { selector: ".project-detail-text p:nth-of-type(3)", text: { tr: "Bu çalışma sayesinde batarya paketleme, BMS bağlantısı, hücre balanslama ve güvenli montaj konularında pratik deneyim kazandım.", en: "This work gave me practical experience in battery pack assembly, BMS wiring, cell balancing and safe assembly practices." } },
        { selector: "main > section h2", text: { tr: "Fotoğraflar", en: "Photos" } }
      ]
    },
    "rc-car": {
      title: { tr: "3D Baskı ve Modifiye RC Araba | Proje Detayı", en: "3D Printed and Modified RC Car | Project Details" },
      description: { tr: "3D baskı ve modifiye RC araba proje detayı.", en: "3D printed and modified RC car project details." },
      items: [
        { selector: "h1", text: { tr: "3D Baskı ve Modifiye RC Araba", en: "3D Printed and Modified RC Car" } },
        { selector: ".lead", text: { tr: "3D baskı parçalar, mekanik modifikasyonlar ve elektronik yön değiştirme devresiyle geliştirdiğim RC araba prototipi.", en: "An RC car prototype I built with 3D printed parts, mechanical modifications and an electronic direction-change circuit." } },
        { selector: ".project-detail-text h2", text: { tr: "Proje Özeti", en: "Project Summary" } },
        { selector: ".project-detail-text p:nth-of-type(1)", text: { tr: "Bu projede 3D baskı parçalar ve mekanik modifikasyonlar kullanarak bir RC araba prototipi geliştirdim.", en: "In this project, I developed an RC car prototype using 3D printed parts and mechanical modifications." } },
        { selector: ".project-detail-text p:nth-of-type(2)", text: { tr: "Şasi, gövde ve elektronik yerleşim üzerinde çalışarak mekanik yapı ile elektronik sistemin birlikte nasıl konumlandırılması gerektiğini deneyimledim.", en: "By working on the chassis, body and electronics layout, I gained experience in positioning the mechanical structure and electronics together." } },
        { selector: ".project-detail-text p:nth-of-type(3)", text: { tr: "RC araçta kullandığım ESC tek yönlü bir uçak motoru ESC'siydi. Aracın geri gidebilmesi için transistör ve rölelerle faz değiştirici bir yapı hazırladım. Bu yapıyı alıcı üzerinden kontrol edilebilir hale getirerek kumanda üzerindeki bir tuşa atadım ve ileri/geri kontrolünü kumanda üzerinden sağlayabildim.", en: "The ESC I used in the RC car was a one-way aircraft motor ESC. To make the car move backward, I built a phase-changing structure with transistors and relays. I made it controllable through the receiver, assigned it to a button on the controller and enabled forward/reverse control from the remote." } },
        { selector: ".project-detail-text p:nth-of-type(4)", text: { tr: "Aracın arka kısmına alıcı ile kontrol edilen büyük bir servo ekledim. Servo koluna kauçuk benzeri sürtünme sağlayan bir parça yerleştirerek, kol aşağı indiğinde arka aksa temas etmesini sağladım. Bu yapı sayesinde kumanda üzerinden ani durumlarda mekanik frenleme yapılabilir hale geldi.", en: "I added a large receiver-controlled servo to the rear of the car. I attached a rubber-like friction part to the servo arm so it contacts the rear axle when the arm moves down. This made it possible to apply mechanical braking from the remote in sudden situations." } },
        { selector: ".project-detail-text p:nth-of-type(5)", text: { tr: "Proje sürecinde 3D baskı toleransları, montaj kolaylığı, elektronik bileşen yerleşimi, kumanda kontrollü yön değiştirme ve mekanik fren sistemi gibi konulara odaklandım. Bu çalışma bana mekanik tasarım, 3D baskı ve elektronik entegrasyonu konusunda pratik deneyim kazandırdı.", en: "During the project, I focused on 3D printing tolerances, ease of assembly, electronic component placement, remote-controlled direction change and a mechanical braking system. This work gave me practical experience in mechanical design, 3D printing and electronics integration." } },
        { selector: "main > section:nth-of-type(1) h2", text: { tr: "Fotoğraflar", en: "Photos" } }
      ],
      attrs: [
        { selector: ".project-video-embed", attr: "title", text: { tr: "RC Car Sürüş Videosu", en: "RC Car Driving Video" } }
      ]
    },
    "auto-printer-shutdown": {
      title: { tr: "Otomatik 3D Yazıcı Kapatıcı | Proje Detayı", en: "Automatic 3D Printer Shutdown | Project Details" },
      description: { tr: "Otomatik 3D yazıcı kapatıcı proje detayı.", en: "Automatic 3D printer shutdown project details." },
      items: [
        { selector: "h1", text: { tr: "Otomatik 3D Yazıcı Kapatıcı", en: "Automatic 3D Printer Shutdown" } },
        { selector: ".lead", text: { tr: "3D yazıcı baskısı tamamlandığında sistemi otomatik kapatmak için geliştirdiğim basit kontrol devresi.", en: "A simple control circuit I developed to automatically shut down the system when a 3D printer job is completed." } },
        { selector: ".project-detail-text h2", text: { tr: "Proje Özeti", en: "Project Summary" } },
        { selector: ".project-detail-text p:nth-of-type(1)", text: { tr: "Bu projede 3D yazıcı baskısı tamamlandığında sistemi otomatik olarak kapatmak için basit bir kontrol devresi geliştirdim.", en: "In this project, I developed a simple control circuit to automatically turn off the system when a 3D print is completed." } },
        { selector: ".project-detail-text p:nth-of-type(2)", text: { tr: "MZ80 sensör ve Arduino Uno kullanarak baskı bitiş durumunu algılayan, ardından yazıcıyı güvenli şekilde kapatmayı hedefleyen bir sistem oluşturdum.", en: "Using an MZ80 sensor and Arduino Uno, I created a system that detects the end of a print and then aims to shut down the printer safely." } },
        { selector: ".project-detail-text p:nth-of-type(3)", text: { tr: "Proje küçük ölçekli olsa da sensör okuma, röle/kontrol mantığı ve otomasyon fikrini pratik olarak uygulamamı sağladı.", en: "Although it was a small-scale project, it let me practically apply sensor reading, relay/control logic and the idea of automation." } }
      ]
    }
  }
};

function getPageKey() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  if (page === "index.html" || page === "") return "home";
  return page.replace(/\.html$/, "");
}

function isEnglishPath(pathname = window.location.pathname) {
  return pathname === "/en/" || pathname.startsWith("/en/");
}

function getCurrentLanguage() {
  return isEnglishPath() ? "en" : "tr";
}

function saveLanguage(language) {
  try {
    localStorage.setItem("site-language", language);
  } catch {
    return;
  }
}

function applyTranslationSet(set, language) {
  if (!set) return;

  if (set.title) document.title = set.title[language];

  if (set.description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", set.description[language]);
  }

  (set.items || []).forEach((item) => {
    document.querySelectorAll(item.selector).forEach((element) => {
      element.textContent = item.text[language];
    });
  });

  (set.attrs || []).forEach((item) => {
    document.querySelectorAll(item.selector).forEach((element) => {
      element.setAttribute(item.attr, item.text[language]);
    });
  });
}

function withSiteLanguage(url, language) {
  try {
    const parsed = new URL(url, window.location.href);
    if (parsed.origin !== window.location.origin) return url;
    if (!parsed.pathname.endsWith(".html") && parsed.pathname !== "/" && parsed.pathname !== "/en/" && parsed.pathname !== "") return url;

    const withoutLanguagePrefix = parsed.pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    parsed.pathname = language === "en"
      ? `/en${withoutLanguagePrefix === "/" ? "/" : withoutLanguagePrefix}`
      : withoutLanguagePrefix;
    parsed.searchParams.delete("lang");
    return `${parsed.pathname}${parsed.search}${parsed.hash}`;
  } catch {
    return url;
  }
}

function getPublicLanguageUrl(language) {
  const path = withSiteLanguage(window.location.href, language).split(/[?#]/)[0];
  return `https://omerikinci.com${path}`;
}

function upsertHeadLink(rel, attributes) {
  const selector = attributes.hreflang
    ? `link[rel="${rel}"][hreflang="${attributes.hreflang}"]`
    : `link[rel="${rel}"]`;
  let link = document.querySelector(selector);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  Object.entries(attributes).forEach(([name, value]) => link.setAttribute(name, value));
}

function syncSeoLinks(language) {
  upsertHeadLink("canonical", { href: getPublicLanguageUrl(language) });
  upsertHeadLink("alternate", { hreflang: "tr", href: getPublicLanguageUrl("tr") });
  upsertHeadLink("alternate", { hreflang: "en", href: getPublicLanguageUrl("en") });
}

function syncLanguageLinks(language) {
  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || !href.includes(".html")) return;
    link.setAttribute("href", withSiteLanguage(href, language));
  });

  document.querySelectorAll(".project-card[data-project-url]").forEach((card) => {
    card.dataset.projectUrl = withSiteLanguage(card.dataset.projectUrl, language);
  });
}

function navigateToLanguage(language) {
  const target = withSiteLanguage(window.location.href, language);
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (target !== current) window.location.href = target;
}

function applyLanguage(language, shouldNavigate = false) {
  const normalized = language === "en" ? "en" : "tr";
  saveLanguage(normalized);
  if (shouldNavigate) {
    navigateToLanguage(normalized);
    return;
  }
  document.documentElement.lang = normalized;
  document.querySelectorAll(".language-option").forEach((button) => {
    const isActive = button.dataset.language === normalized;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  applyTranslationSet(siteTranslations.common, normalized);
  applyTranslationSet(siteTranslations.pages[getPageKey()], normalized);
  syncLanguageLinks(normalized);
  syncSeoLinks(normalized);
}

function initLanguageSwitcher() {
  const switcher = document.createElement("nav");
  switcher.className = "language-switch";
  switcher.setAttribute("aria-label", "Dil seçimi");

  ["tr", "en"].forEach((language) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "language-option";
    button.dataset.language = language;
    button.textContent = language.toUpperCase();
    button.addEventListener("click", () => applyLanguage(language, true));
    switcher.appendChild(button);
  });

  document.body.prepend(switcher);
}

initLanguageSwitcher();
applyLanguage(getCurrentLanguage());
