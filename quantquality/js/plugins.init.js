
/**************************************************/
/*                    INDEX                       */
/*=================================================
 *       01) Gallery filter js                    *
 *       02) Tobii lightbox                       *
 *       03) Data Counter                         *
 *       04) Typed Text animation (animation)     *
 *       05) Swiper slider                        *
 *       06) Maintenance js                       *
 *       07) Tiny Slider                          *
 *       08) Back Button                          *
 =================================================*/


//================================================//
/*/*            01) Gallery filter js             */
//================================================//

// try {
//     var Shuffle = window.Shuffle;

//     class Demo {
//         constructor(element) {
//             if(element){
//                 this.element = element;
//                 this.shuffle = new Shuffle(element, {
//                     itemSelector: '.picture-item',
//                     sizer: element.querySelector('.my-sizer-element'),
//                 });

//                 // Log events.
//                 this.addShuffleEventListeners();
//                 this._activeFilters = [];
//                 this.addFilterButtons();
//             }
//         }

        /**
         * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
         * for them like you normally would (with jQuery for example).
         */
    //     addShuffleEventListeners() {
    //         this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
    //             console.log('layout. data:', data);
    //         });
    //         this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
    //             console.log('removed. data:', data);
    //         });
    //     }

    //     addFilterButtons() {
    //         const options = document.querySelector('.filter-options');
    //         if (!options) {
    //             return;
    //         }

    //         const filterButtons = Array.from(options.children);
    //         const onClick = this._handleFilterClick.bind(this);
    //         filterButtons.forEach((button) => {
    //             button.addEventListener('click', onClick, false);
    //         });
    //     }

    //     _handleFilterClick(evt) {
    //         const btn = evt.currentTarget;
    //         const isActive = btn.classList.contains('active');
    //         const btnGroup = btn.getAttribute('data-group');

    //         this._removeActiveClassFromChildren(btn.parentNode);

    //         let filterGroup;
    //         if (isActive) {
    //             btn.classList.remove('active');
    //             filterGroup = Shuffle.ALL_ITEMS;
    //         } else {
    //             btn.classList.add('active');
    //             filterGroup = btnGroup;
    //         }

    //         this.shuffle.filter(filterGroup);
    //     }

    //     _removeActiveClassFromChildren(parent) {
    //         const { children } = parent;
    //         for (let i = children.length - 1; i >= 0; i--) {
    //             children[i].classList.remove('active');
    //         }
    //     }
    // }

//     document.addEventListener('DOMContentLoaded', () => {
//         window.demo = new Demo(document.getElementById('grid'));
//     });
// } catch (err) {

// }

//=========================================//
/*/*            02) Tobii lightbox         */
//=========================================//

// try {
//     const tobii = new Tobii()
// } catch (err) {

// }

//=========================================//
/*/*            03) Data Counter           */
//=========================================//

// try {
//     const counter = document.querySelectorAll('.counter-value');
//     const speed = 2500; // The lower the slower

//     counter.forEach(counter_value => {
//         const updateCount = () => {
//             const target = +counter_value.getAttribute('data-target');
//             const count = +counter_value.innerText;

//             // Lower inc to slow and higher to slow
//             var inc = target / speed;

//             if (inc < 1) {
//                 inc = 1;
//             }

//             // Check if target is reached
//             if (count < target) {
//                 // Add inc to count and output in counter_value
//                 counter_value.innerText = (count + inc).toFixed(0);
//                 // Call function every ms
//                 setTimeout(updateCount, 1);
//             } else {
//                 counter_value.innerText = target;
//             }
//         };

//         updateCount();
//     });
// } catch (err) {

// }


//=========================================//
/*/* 04) Typed Text animation (animation) */
//=========================================//

// try {
//     var TxtType = function (el, toRotate, period) {
//         this.toRotate = toRotate;
//         this.el = el;
//         this.loopNum = 0;
//         this.period = parseInt(period, 10) || 2000;
//         this.txt = '';
//         this.tick();
//         this.isDeleting = false;
//     };

//     TxtType.prototype.tick = function () {
//         var i = this.loopNum % this.toRotate.length;
//         var fullTxt = this.toRotate[i];
//         if (this.isDeleting) {
//             this.txt = fullTxt.substring(0, this.txt.length - 1);
//         } else {
//             this.txt = fullTxt.substring(0, this.txt.length + 1);
//         }
//         this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
//         var that = this;
//         var delta = 200 - Math.random() * 100;
//         if (this.isDeleting) { delta /= 2; }
//         if (!this.isDeleting && this.txt === fullTxt) {
//             delta = this.period;
//             this.isDeleting = true;
//         } else if (this.isDeleting && this.txt === '') {
//             this.isDeleting = false;
//             this.loopNum++;
//             delta = 500;
//         }
//         setTimeout(function () {
//             that.tick();
//         }, delta);
//     };

//     function typewrite() {
//         if (toRotate === 'undefined') {
//             changeText()
//         }
//         else
//             var elements = document.getElementsByClassName('typewrite');
//         for (var i = 0; i < elements.length; i++) {
//             var toRotate = elements[i].getAttribute('data-type');
//             var period = elements[i].getAttribute('data-period');
//             if (toRotate) {
//                 new TxtType(elements[i], JSON.parse(toRotate), period);
//             }
//         }
//         // INJECT CSS
//         var css = document.createElement("style");
//         css.type = "text/css";
//         css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid transparent}";
//         document.body.appendChild(css);
//     };
//     window.onload(typewrite());
// } catch(err) {

// }

//=========================================//
/*            05) Swiper slider            */
//=========================================//

try {
    var menu = [];
    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + 0 + (index + 1) + '</span>';
            },
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: {
            progress: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },

            touchStart: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },

            setTransition: function (speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
                }
            }
        }
    };

    // DATA BACKGROUND IMAGE
    var swiper = new Swiper(".swiper-container", swiperOptions);

    let data = document.querySelectorAll(".slide-bg-image")
    data.forEach((e) => {
        e.style.backgroundImage =
        `url(${e.getAttribute('data-background')})`;
    })

} catch (err) {

}


//=========================================//
/*/*            06) Maintenance js         */
//=========================================//

// try {
//     if(document.getElementById("maintenance")){
//         var seconds = 3599;
//         function secondPassed() {
//             var minutes = Math.round((seconds - 30) / 60);
//             var remainingSeconds = seconds % 60;
//             if (remainingSeconds < 10) {
//                 remainingSeconds = "0" + remainingSeconds;
//             }
//             document.getElementById('maintenance').innerHTML = minutes + ":" + remainingSeconds;
//             if (seconds == 0) {
//                 clearInterval(countdownTimer);
//                 document.getElementById('maintenance').innerHTML = "Buzz Buzz";
//             } else {
//                 seconds--;
//             }
//         }
//         var countdownTimer = setInterval('secondPassed()', 1000);
//     }
// } catch (err) {

// }

//=========================================//
/*/*            07) Tiny Slider            */
//=========================================//
// if(document.getElementsByClassName('tiny-three-item').length > 0) {
//     var slider = tns({
//         container: '.tiny-three-item',
//         controls: false,
//         mouseDrag: true,
//         loop: true,
//         rewind: true,
//         autoplay: true,
//         autoplayButtonOutput: false,
//         autoplayTimeout: 3000,
//         navPosition: "bottom",
//         speed: 400,
//         gutter: 12,
//         responsive: {
//             992: {
//                 items: 3
//             },

//             767: {
//                 items: 2
//             },

//             320: {
//                 items: 1
//             },
//         },
//     });
// };

//=========================================//
/*/*            08) Back Button            */
//=========================================//
// document.getElementsByClassName("back-button")[0]?.addEventListener("click", (e)=>{
//     if (document.referrer !== "") {
//         e.preventDefault();
//         window.location.href = document.referrer;
//       }
// })