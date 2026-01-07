// ✨ Анімація пунктів меню (наприклад .nav-item)
gsap.to(".nav-item", {
  duration: 0.8,
  y: 0,                  // повернутись на місце
  opacity: 1,            // зробити видимим
  ease: "power2.out",    // плавне зупинення
  stagger: 0.2           // затримка між пунктами
});

// ✨ Реєструємо плагіни один раз
gsap.registerPlugin(ScrollTrigger,);

//🌊 Створюємо плавний скрол (якщо використовується ScrollSmoother)
ScrollSmoother.create({
  wrapper: 'body',
  content: '.page_2',
  smooth: 1.5,
  effects: true,
}); 

// ✨ Анімація появи елементів знизу при скролі
gsap.utils.toArray('.service_item').forEach((item, i) => {
  gsap.fromTo(item,
    { opacity: 0, y: 10 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: i * 0.2, // по черзі
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );
});
