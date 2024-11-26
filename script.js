 document.getElementById("calculate").onclick = function() {
            // Очищаем сообщения об ошибках
            document.getElementById("error1").innerText = "";

            // Получаем цену выбранного товара
            const productPrice = parseFloat(document.getElementById("product").value);
            // Получаем количество товара
            const quantity = document.getElementById("quantity1").value;

            // Проверяем, является ли количество числом
            if (isNaN(quantity) || quantity <= 0) {
                document.getElementById("error1").innerText = "Пожалуйста, введите корректное количество товара.";
                document.getElementById("result1").innerText = "";
                return;
            }

            const totalCost = productPrice * quantity;

            // Выводим результат
            document.getElementById("result1").innerText = "Стоимость заказа: " + totalCost + " рублей.";
        };


        function updatePrice() {
            const servicePrice = parseFloat(document.querySelector('input[name="service"]:checked').value);
            const quantity = parseInt(document.getElementById("quantity").value);

            let totalCost = servicePrice * quantity;

            const selectedService = document.querySelector('input[name="service"]:checked').id;

            if (selectedService === 'service2') {
                const optionPrice = parseFloat(document.getElementById("option").value);
                totalCost += optionPrice;
            } else if (selectedService === 'service3') {
                const isPropertyChecked = document.getElementById("property").checked;
                if (isPropertyChecked) {
                    totalCost += 15; // цена свойства
                }
            }

            document.getElementById("result").innerText = "Стоимость услуги: " + totalCost + " рублей.";
        }

        // Обработчик для радиокнопок
        const services = document.querySelectorAll('input[name="service"]');
        services.forEach(service => {
            service.onclick = function() {
                document.getElementById("serviceOptions").style.display = (this.id === "service2") ? "block" : "none";
                document.getElementById("serviceProperty").style.display = (this.id === "service3") ? "block" : "none";

                // Обновляем цену при изменении типа услуги
                updatePrice();
            };
        });

        // Обработчик для изменения количества
        document.getElementById("quantity").oninput = updatePrice;

        // Обработчик для выбора опции
        document.getElementById("option").onchange = updatePrice;

        // Обработчик для чекбокса свойств

        document.getElementById("property").onchange = updatePrice;

        // Инициализация
        updatePrice(); // Расчет начальной стоимости

   const swiper = new Swiper('.image-slider', {

      loop: true,
      spaceBetween:30,
      simulateTouch: false,
      autoHeight: true,
      centeredSlides: true,
      slideToClickedSlide: true,
      freeMode: false,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets:true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index+1) + '</span>>';
        }
      },

      keyboard:{
        enabled:true,
        onlyInViewport: true,
        pageUpDown: true,
      },

      mousewheel:{
        sensitivity:1,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        0:{
          slidesPerView: 1
        },
         768:{
          slidesPerView: 2
        },
         1024:{
          slidesPerView: 3
        },
      }
    });
