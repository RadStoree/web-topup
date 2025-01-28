document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('L3p4RwtkmTJ6YFpwh'); // Ganti dengan kunci publik Anda
});

function openForm(gameName) {
    document.getElementById('selected-game').value = gameName;
    document.getElementById('form-section').classList.remove('hidden');
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });

    const amountSelect = document.getElementById('amount');
    amountSelect.innerHTML = ''; // Reset options

    let prices = [];
    if (gameName === 'Game ML') {
        prices = [
            'Weekly Diamond Pass (Event Topup +100) - Rp 27.000',
            '5 Diamonds (5 + 0 Bonus) - Rp 1.467',
            '12 Diamonds (11 + 1 Bonus) - Rp 3.500',
            '19 Diamonds (17 + 2 Bonus) - Rp 5.500',
            '28 Diamonds (25 + 3 Bonus) - Rp 8.000',
            '44 Diamonds (40 + 4 Bonus) - Rp 12.000',
            '59 Diamonds (53 + 6 Bonus) - Rp 15.660',
            '85 Diamonds (77 + 8 Bonus) - Rp 22.455',
            '113 Diamonds (102 + 11 Bonus) - Rp 30.100',
            '144 Diamonds (130 + 14 Bonus) - Rp 37.900',
            '170 Diamonds (154 + 16 Bonus) - Rp 44.800',
            '229 Diamonds (207 + 22 Bonus) - Rp 60.160',
            '240 Diamonds (217 + 23 Bonus) - Rp 63.100',
            '257 Diamonds (233 + 24 Bonus) - Rp 67.888',
            '278 Diamonds (251 + 27 Bonus) - Rp 73.500',
            '284 Diamonds (257 + 27 Bonus) - Rp 75.600',
            '296 Diamonds (256 + 40 Bonus) - Rp 77.400',
            '301 Diamonds (261 + 40 Bonus) - Rp 79.000',
            '345 Diamonds (301 + 44 Bonus) - Rp 91.000',
            '355 Diamonds (309 + 46 Bonus) - Rp 93.000',
            '374 Diamonds (326 + 48 Bonus) - Rp 98.000',
            '381 Diamonds (333 + 48 Bonus) - Rp 100.000',
            '408 Diamonds (367 + 41 Bonus) - Rp 107.500',
            '425 Diamonds (373 + 52 Bonus) - Rp 112.000',
            '427 Diamonds (384 + 43 Bonus) - Rp 112.500',
            '512 Diamonds (461 + 51 Bonus) - Rp 134.500',
            '522 Diamonds (471 + 51 Bonus) - Rp 137.500',
            '568 Diamonds (503 + 65 Bonus) - Rp 145.500',
            'Twilight Pass - Rp 145.800',
            '601 Diamonds (533 + 68 Bonus) - Rp 154.500',
            '750 Diamonds (668 + 82 Bonus) - Rp 198.281',
            '875 Diamonds (774 + 101 Bonus) - Rp 223.000',
            '977 Diamonds (867 + 110 Bonus) - Rp 250.500',
            '1050 Diamonds (933 + 117 Bonus) - Rp 269.000',
            '1136 Diamonds (1006 + 130 Bonus) - Rp 295.000',
            '1220 Diamonds (1075 + 145 Bonus) - Rp 312.000',
            '1368 Diamonds (1218 + 150 Bonus) - Rp 352.000',
            '1412 Diamonds (1258 + 154 Bonus) - Rp 363.000',
            '1443 Diamonds (1277 + 166 Bonus) - Rp 368.000',
            '1453 Diamonds (1295 + 158 Bonus) - Rp 374.000',
            '1507 Diamonds (1335 + 172 Bonus) - Rp 385.000',
            '1672 Diamonds (1484 + 188 Bonus) - Rp 428.000',
            '1704 Diamonds (1509 + 195 Bonus) - Rp 436.000',
            '1750 Diamonds (1548 + 202 Bonus) - Rp 445.000',
            '2010 Diamonds (1708 + 302 Bonus) - Rp 484.000',
            '2180 Diamonds (1862 + 318 Bonus) - Rp 529.000'
        ];
    } else if (gameName === 'Game FF') {
    prices = [
        'Membership Mingguan - Rp 26.500',
         'Membership Bulanan - Rp 79.500',
        '10 Diamonds - Rp 1.600',
        '15 Diamonds - Rp 2.600',
        '20 Diamonds - Rp 3.300',
        '25 Diamonds - Rp 4.000',
        '30 Diamonds - Rp 4.800',
        '40 Diamonds - Rp 6.400',
        '50 Diamonds - Rp 6.500',
        '55 Diamonds - Rp 7.200',
        '60 Diamonds - Rp 8.000',
        '70 Diamonds - Rp 8.800',
        '75 Diamonds - Rp 9.700',
        '80 Diamonds - Rp 10.500',
        '90 Diamonds - Rp 12.000',
        '100 Diamonds - Rp 12.800',
        '140 Diamonds - Rp 17.800',
        '145 Diamonds - Rp 18.500',
        '150 Diamonds - Rp 19.000',
        '160 Diamonds - Rp 21.000',
        '170 Diamonds - Rp 21.500',
        '180 Diamonds - Rp 23.600',
        '190 Diamonds - Rp 24.000',
        '200 Diamonds - Rp 25.500',
        '210 Diamonds - Rp 26.000',
        '250 Diamonds - Rp 31.600',
        '260 Diamonds - Rp 32.500',
        '280 Diamonds - Rp 35.500',
        '300 Diamonds - Rp 38.500',
        '355 Diamonds - Rp 43.500',
        '360 Diamonds - Rp 45.000',
        '375 Diamonds - Rp 47.000',
        '400 Diamonds - Rp 50.500',
        '405 Diamonds - Rp 50.500',
        '425 Diamonds - Rp 52.000',
        '475 Diamonds - Rp 59.000',
        '495 Diamonds - Rp 60.500',
        '500 Diamonds - Rp 62.000',
        '510 Diamonds - Rp 63.500',
        '545 Diamonds - Rp 67.500',
        '565 Diamonds - Rp 69.500',
        '635 Diamonds - Rp 78.500',
        '720 Diamonds - Rp 85.000',
        '740 Diamonds - Rp 90.500',
        '770 Diamonds - Rp 93.000',
        '790 Diamonds - Rp 96.000',
        '860 Diamonds - Rp 105.000',
        '930 Diamonds - Rp 115.000',
        '1000 Diamonds - Rp 122.000',
        '1075 Diamonds - Rp 130.000',
        '1200 Diamonds - Rp 143.000',
        '1450 Diamonds - Rp 175.000',
        '1875 Diamonds - Rp 235.000',
        '2000 Diamonds - Rp 243.000'
    ];
    } else if (gameName === 'Game HOK') {
    prices = [
        'Weekly Card - Rp 14.000',
        'Weekly Card Plus - Rp 39.500',
        '8 Tokens - Rp 1.330',
        '16+1 Tokens - Rp 2.650',
        '23+2 Tokens - Rp 3.620',
        '240+17 Tokens - Rp 39.000',
        '400+32 Tokens - Rp 65.500',
        '560+45 Tokens - Rp 90.000',
        '800+65 Tokens - Rp 130.000',
        '1200+108 Tokens - Rp 190.500',
        '2400+216 Tokens - Rp 400.000',
        '4000+400 Tokens - Rp 648.000'
    ];
} else if (gameName === 'Game PUBG') {
        prices = [
        '60 UC (60 + 0) - Rp 13.000',
        '120 UC (120 + 0) - Rp 26.400',
        '180 UC (180 + 0) - Rp 39.600',
        '325 UC (300 + 25) - Rp 66.000',
        '385 UC (360 + 25) - Rp 79.000',
        '445 UC (420 + 25) - Rp 92.000',
        '505 UC (480 + 25) - Rp 105.500',
        '660 UC (600 + 60) - Rp 128.500',
        '720 UC (600 + 120) - Rp 145.000',
        '975 UC (900 + 75) - Rp 197.000',
        '985 UC (900 + 85) - Rp 198.000',
        '1045 UC (950 + 85) - Rp 210.500',
        '1320 UC (1200 + 120) - Rp 264.000',
        '1800 UC (1500 + 300) - Rp 328.000',
        '1860 UC (1560 + 300) - Rp 343.000',
        '2125 UC (1800 + 325) - Rp 395.500',
        '2460 UC (2100 + 360) - Rp 460.500',
        '2785 UC (2400 + 385) - Rp 527.000',
        '3850 UC (3000 + 850) - Rp 640.000',
        '3925 UC (3300 + 625) - Rp 725.000',
        '4500 UC (3600 + 900) - Rp 790.000',
        '5650 UC (4500 + 1150) - Rp 989.000',
        '6310 UC (5100 + 1210) - Rp 1.120.000',
        '8100 UC (6000 + 2100) - Rp 1.270.000',
        '8100 UC (6000 + 2100) - Rp 1.315.000' ];
    } else if (gameName === 'Game Valorant') {
        prices = [ 
        '475 Points - Rp 55.000',
        '1000 Points - Rp 107.500',
        '2050 Points - Rp 215.000',
        '3650 Points - Rp 370.000',
        '5350 Points - Rp 530.000',
        '11000 Points - Rp 1.050.000'];
    } else if (gameName === 'Game Zepeto') {
        prices = [
        '14 ZEMs - Rp 14.000',
        '28 ZEMs - Rp 27.000',
        '58 ZEMs - Rp 55.500',
        '128 ZEMs - Rp 114.000',
        '323 ZEMs - Rp 287.000',
        '1.000 ZEMs - Rp 860.000',
        '4.680 Coins - Rp 13.800',
        '9.700 Coins - Rp 26.900',
        '25.200 Coins - Rp 66.900',
        '40.700 Coins - Rp 108.000',
        '110.000 Coins - Rp 280.000',
        '300.000 Coins - Rp 743.000'];
    } else if (gameName === 'Game AOV') {
        prices = [
        '7 Vouchers - Rp 2.500',
        '18 Vouchers - Rp 5.500',
        '40 Vouchers - Rp 9.000',
        '90 Vouchers - Rp 18.000',
        '230 Vouchers - Rp 44.500',
        '470 Vouchers - Rp 89.500',
        '600 Vouchers - Rp 120.900',
        '700 Vouchers - Rp 139.600',
        '950 Vouchers - Rp 178.900',
        '1030 Vouchers - Rp 205.000',
        '1430 Vouchers - Rp 268.500',
        '1420 Vouchers - Rp 278.900',
        '1440 Vouchers - Rp 288.000',
        '2390 Vouchers - Rp 447.000'];
    } else if (gameName === 'Game Genshin') {
        prices = [
        'Blessing Of The Welkin Moon - Rp 59.000',
        'Blessing Of The Welkin Moon 2x - Rp 117.500',
        'Blessing Of The Welkin Moon 3x - Rp 176.000',
        '60 Genesis Crystals - Rp 11.600',
        '300+30 Genesis Crystals - Rp 59.000',
        '980+110 Genesis Crystals - Rp 177.000',
        'Blessing Of The Welkin Moon 4x - Rp 234.000',
        'Blessing Of The Welkin Moon 5x - Rp 293.000',
        '1980+260 Genesis Crystals - Rp 382.000',
        '3280+600 Genesis Crystals - Rp 587.000'];
    } else if (gameName === 'Game Honkai') {
        prices = [
        '60 Oneiric Shard - Rp 12.500',
        '300 + 30 Oneiric Shard - Rp 58.000',
        '980 + 110 Oneiric Shard - Rp 174.000',
        '1420 Oneiric Shard - Rp 232.000',
        '1420 Oneiric Shard - Rp 230.520',
        'Express Supply Pass - Rp 58.000',
        'Express Supply Pass x 2 - Rp 116.000',
        'Express Supply Pass x 3 - Rp 175.000',
        'Express Supply Pass x 4 - Rp 230.099',
        'Express Supply Pass x 5 - Rp 287.624'];
    } else if (gameName === 'Game CODuty') {
        prices = [ 
        '63 CP - Rp 9.000',
        '128 CP - Rp 17.800',
        '321 CP - Rp 44.000',
        '645 CP - Rp 88.000',
        '800 CP - Rp 106.000',
        '1373 CP - Rp 175.000',
        '2060 CP - Rp 287.500',
        '2750 CP - Rp 334.000'];
    }

    prices.forEach((price) => {
        const option = document.createElement('option');
        option.value = price.split(' ')[0];
        option.textContent = price;
        amountSelect.appendChild(option);
    });
}

document.getElementById('topup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;

    emailjs.sendForm('service_d0qhtx7', 'template_pgdsr1q', form)
        .then(() => {
            alert('Berhasil. Lakukan pembayaran yang pas sesuai harga!');
            displayQRCode();
            form.reset();
            document.getElementById('form-section').classList.add('hidden');
        })
        .catch(err => {
            console.error('EmailJS Error:', err);
            alert('Pengiriman gagal. Silakan coba lagi.');
        });
});

function displayQRCode() {
    const qrCodeSection = document.getElementById('qr-code-section');
    const qrCodeImg = document.getElementById('payment-qr');
    const selectedGame = document.getElementById('selected-game').value;

    if (selectedGame === 'Game ML') {
        qrCodeImg.src = 'qr.jpg';
    } else if (selectedGame === 'Game FF') {
        qrCodeImg.src = 'qr.jpg';
    } else if (selectedGame === 'Game HOK') {
        qrCodeImg.src = 'qr.jpg';
    } else if (selectedGame === 'Game PUBG') {
        qrCodeImg.src = 'qr.jpg';
    } else if (selectedGame === 'Game Valorant') {
        qrCodeImg.src = 'qr.jpg';
    } else if (selectedGame === 'Game Zepeto') {
        qrCodeImg.src = 'qr.jpg';
    } else if (selectedGame === 'Game AOV') {
        qrCodeImg.src = 'qr.jpg';
    } else if (selectedGame === 'Game Genshin') {
        qrCodeImg.src = 'qr.jpg';
    } else if (selectedGame === 'Game Honkai') {
        qrCodeImg.src = 'qr.jpg';
    } else if (selectedGame === 'Game CODuty') {
        qrCodeImg.src = 'qr.jpg';
    }


    qrCodeSection.classList.remove('hidden');
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
