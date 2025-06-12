const gifts = document.querySelectorAll('.gift');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');

// أصوات الهدايا
const sounds = {
    gift1: new Audio('/audio/sheap.mp3'),
    gift2: new Audio('/audio/bee audio.mp3'),
    gift3: new Audio('audio/chicken.mp3'),
    gift4: new Audio('/audio/donkey.mp3'),
    gift5: new Audio('/audio/dog.mp3'),
    gift6: new Audio('/audio/model 1.mp3'),
    gift7: new Audio('/audio/model2.mp3'),
    gift8: new Audio('/audio/error-call-to-attention-129258.mp3'),
};

// صور الهدايا
const images = {
    gift1: '/img/cherry-removebg-preview.png',
    gift2: 'treats/images.jpg',
    gift3: '/treats/images.png',
    gift4: '/treats/img.png',
    gift5: '/treats/istockphoto-2155253329-612x612.jpg',
    gift6: '/treats/emojis.com minecraft-￼.png',
    gift7: '/treats/emojis.com minecraft-￼.png',
    gift8: '/img2/error 1.jpg',
};

let currentGift = null;

gifts.forEach(gift => {
    gift.addEventListener('click', () => {
        const classList = gift.classList;
        const giftClass = Array.from(classList).find(cls => cls.startsWith('gift') && cls !== 'gift');

        if (giftClass) {
            currentGift = giftClass;

            // تشغيل الصوت
            const sound = sounds[giftClass];
            if (sound) {
                sound.currentTime = 0;
                sound.play();
            }

            // تحميل صورة البوب أب
            popupImg.src = images[giftClass] || '';

            // تحكم في الحجم
            if (giftClass === 'gift8') {
                popupImg.style.width = '70vw';
                popupImg.style.height = 'auto';
            } else {
                popupImg.style.width = '100%';
                popupImg.style.height = 'auto';
            }

            // عرض البوب أب
            popup.classList.add('active');

            // تشغيل الأنيميشن المناسب
            popupImg.classList.remove('animate', 'animate-long');
            void popupImg.offsetWidth;

            if (giftClass === 'gift8') {
                popupImg.classList.add('animate-long');
            } else {
                popupImg.classList.add('animate');
            }

            // إخفاء تلقائي بعد 2 ثانية لغير آخر هدية
            if (giftClass !== 'gift8') {
                setTimeout(() => {
                    popup.classList.remove('active');
                    popupImg.classList.remove('animate', 'animate-long');
                    popupImg.src = '';
                    currentGift = null;
                }, 2000);
            }
        }
    });
});

// عند الضغط على الصورة: تخفي البوب أب لو كانت gift8
popupImg.addEventListener('click', () => {
    if (currentGift === 'gift8') {
        popup.classList.remove('active');
        popupImg.classList.remove('animate', 'animate-long');
        popupImg.src = '';
        currentGift = null;
    }
});
