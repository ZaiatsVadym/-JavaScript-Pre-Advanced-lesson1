$(document).ready(function () {
    // випадкове розміщення пазлів
    var container = document.getElementById("start2");
    var elementsArray = Array.prototype.slice.call(container.getElementsByClassName("bl"));

    shuffleArray(elementsArray);

    for (var i = 0; i < elementsArray.length; i++) {
        container.appendChild(elementsArray[i]);
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    // таймер для модального вікна і центрального
    const timeScreen = document.getElementById('timer');
    const timeScreen2 = document.getElementById('timer2');

    let time = 59;
    let tCount;

    function countDown() {
        let seconds = time % 60 < 10 ? '0' + time % 60 : time % 60;
        timeScreen.innerHTML = `00:${seconds}`;
        timeScreen2.innerHTML = `00:${seconds}`;
        if (time <= 0) {
            clearInterval(tCount);
            document.getElementById("check").setAttribute('disabled', 'disabled')
        }
        time--;
    }
    // запуск таймера
    function startGame() {
        clearInterval(tCount);
        tCount = setInterval(countDown, 1000);
    }
    // модальні вікна і блокування кнопок

    document.getElementById("start").addEventListener("click", () => {
        startGame()
        document.getElementById("start").setAttribute('disabled', 'disabled');
        document.getElementById("check").removeAttribute('disabled', 'disabled')


    })
    document.getElementById("check").addEventListener("click", () => {
        let modalDiv = $('.modal1');
        $('.modal-container').css({
            backgroundColor: '#000000c7',
            zIndex: 3
        });
        modalDiv.css('top', (window.innerHeight - modalDiv.height()) / 4);
        modalDiv.css('left', (window.innerWidth - modalDiv.width()) / 2);
        modalDiv.show()

    })
    $('.close').on('click', function () {
        $(`.modal1`).slideUp(1, function () {
            $('.modal-container').css({
                backgroundColor: '#fff',
                zIndex: -1
            });
        });
    });
    $('.close2').on('click', function () {
        $(`.modal2`).slideUp(1, function () {
            $('.modal-container').css({
                backgroundColor: '#fff',
                zIndex: -1
            });
        });
    });
    $('.close3').on('click', function () {
        $(`.modal3`).slideUp(1, function () {
            $('.modal-container').css({
                backgroundColor: '#fff',
                zIndex: -1
            });
        });
    });

    document.getElementById("new").addEventListener("click", () => {
        clearInterval(tCount);
        timeScreen.innerHTML = `01:00`;
        document.getElementById("start").removeAttribute('disabled');
        document.getElementById("check").setAttribute('disabled', 'disabled');
        window.location.reload()
        time = 59;
    });



    // сортування і переміщення пазлів
    $('.block1').sortable({
        connectWith: '#start2, #end',
        start: function (event, ui) {
            startGame()
            document.getElementById("start").setAttribute('disabled', 'disabled');
            document.getElementById("check").removeAttribute('disabled', 'disabled')
        },
        stop: function (event, ui) {
        }

    })

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    let check = true;
    $('#check2').on('click', function () {
        for (let i = 0; i < $('.bl').length; i++) {
            if ($('.bl').eq(i).text() != numbers[i]) {
                check = false;
                break;
            }
        }
        if (check) {
            const secondM = function () {
                let modalDiv2 = $('.modal2');
                $('.modal-container').css({
                    backgroundColor: '#000000c7',
                    zIndex: 3
                });
                modalDiv2.css('top', (window.innerHeight - modalDiv2.height()) / 4);
                modalDiv2.css('left', (window.innerWidth - modalDiv2.width()) / 2);
                modalDiv2.show()
                $(`.modal1`).slideUp(1, function () {
                    $('.modal-container').css({
                        backgroundColor: '#fff',
                        zIndex: -1
                    });
                });
                clearInterval(tCount);
                document.getElementById("check").setAttribute('disabled', 'disabled');


            }
            secondM();
        }
        else {
            const secondM2 = function () {
                let modalDiv3 = $('.modal3');
                $('.modal-container').css({
                    backgroundColor: '#000000c7',
                    zIndex: 3
                });
                modalDiv3.css('top', (window.innerHeight - modalDiv3.height()) / 4);
                modalDiv3.css('left', (window.innerWidth - modalDiv3.width()) / 2);
                modalDiv3.show()
                $(`.modal1`).slideUp(1, function () {
                    $('.modal-container').css({
                        backgroundColor: '#fff',
                        zIndex: -1
                    });
                });

                clearInterval(tCount);
                document.getElementById("check").setAttribute('disabled', 'disabled');

            }
            secondM2();

        }
        check = true;
    })
    // функція яка гарно сортує, але тоді "дівки" з пазлами змінюються свої позицію і послідовність нумерації в материнському блоці, і функція перевірки вже не працює

    // $(function () {
    //     startGame()
    //     document.getElementById("start").setAttribute('disabled', 'disabled');
    //     document.getElementById("check").removeAttribute('disabled', 'disabled')
    //     $(".bl").draggable({
    //         revert: "invalid",
    //         helper: "clone",
    //         cursor: "move"

    //     });
    //     $(".bL").droppable({
    //         accept: ".bl",
    //         activeClass:` active`,
    //         hoverClass: `hover`,
    //         tolerance: `intersect`,
    //         drop: function (event, ui) {
    //             var draggable = ui.draggable;
    //             var droppable = $(this);
    //             var droppableOffset = droppable.offset();
    //             var draggableOffset = draggable.offset();

    //             draggable.offset({
    //                 top: droppableOffset.top,
    //                 left: droppableOffset.left
    //             });

    //             droppable.offset({
    //                 top: draggableOffset.top,
    //                 left: draggableOffset.left
    //             });
    //         }
    //     });

    // });
})
