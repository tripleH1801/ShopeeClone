const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const modal = $('.modal');
const modalOverlay = $('.overlay');
const modal_body = $('.modal__contain');
const btnShowRegis = $('.show_regis');
const btnShowLogin = $('.show_login');
const optionSearch_Text = $('.option-search span:first-child');
const list_OptionSearchs = $$('.option-search__item');
const input_search = $('#search');
const logoutBtn = $('.logout');
const product_content = $('.product-content__body');

var isLogin = true;
var is_RequestLogin = false;

// biến render
// 0
var product_hint = [{
            product_name: '[Mã 88FASHIONSALE1 giảm 10K đơn 50K] [GIÁ HUỶ DIỆT] Sỉ Cột Tóc Scrunchies Pompom Hoa Cúc Caro',
            product_img: 'https://cf.shopee.vn/file/a4831986bce7779c1462767f590115b2_tn',
            product_price: 1000,
            pruduct_sold: 21000
        },
        {
            product_name: 'Khô gà lá chanh',
            product_img: 'https://cf.shopee.vn/file/9d6499b34d8a1120cdc3172567ab2c9b_tn',
            product_price: 9000,
            pruduct_sold: 40
        },
        {
            product_name: '[Mã WABRMA88 giảm 10% đơn 250K] Áo sơ mi vai phồng cộc tay đính ngọc chống nhăn trắng tingoan BABY CHAELA SHIRT/WH',
            product_img: 'https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e',
            product_price: 1000,
            pruduct_sold: 21000
        },
        {
            product_name: '[Mã 88FASHIONSALE1 giảm 10K đơn 50K] [GIÁ HUỶ DIỆT] Sỉ Cột Tóc Scrunchies Pompom Hoa Cúc Caro',
            product_img: 'https://cf.shopee.vn/file/a4831986bce7779c1462767f590115b2_tn',
            product_price: 1000,
            pruduct_sold: 21000
        },
        {
            product_name: 'Khô gà lá chanh',
            product_img: 'https://cf.shopee.vn/file/9d6499b34d8a1120cdc3172567ab2c9b_tn',
            product_price: 9000,
            pruduct_sold: 40
        },
        {
            product_name: '[Mã WABRMA88 giảm 10% đơn 250K] Áo sơ mi vai phồng cộc tay đính ngọc chống nhăn trắng tingoan BABY CHAELA SHIRT/WH',
            product_img: 'https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e',
            product_price: 1000,
            pruduct_sold: 21000
        },
        {
            product_name: '[Mã 88FASHIONSALE1 giảm 10K đơn 50K] [GIÁ HUỶ DIỆT] Sỉ Cột Tóc Scrunchies Pompom Hoa Cúc Caro',
            product_img: 'https://cf.shopee.vn/file/a4831986bce7779c1462767f590115b2_tn',
            product_price: 1000,
            pruduct_sold: 21000
        },
        {
            product_name: 'Khô gà lá chanh',
            product_img: 'https://cf.shopee.vn/file/9d6499b34d8a1120cdc3172567ab2c9b_tn',
            product_price: 9000,
            pruduct_sold: 40
        },
        {
            product_name: '[Mã WABRMA88 giảm 10% đơn 250K] Áo sơ mi vai phồng cộc tay đính ngọc chống nhăn trắng tingoan BABY CHAELA SHIRT/WH',
            product_img: 'https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e',
            product_price: 1000,
            pruduct_sold: 21000
        }
    ]
    // 1
var product_saleoff = [{
            product_name: 'Cột tóc ngọc xinh xinh 04',
            product_img: 'https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e',
            product_price: 9999,
            pruduct_sold: 215
        },
        {
            product_name: 'CT16 Cột tóc con ong hoa cúc xinh',
            product_img: 'https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497',
            product_price: 7500,
            pruduct_sold: 100
        },
        {
            product_name: 'Cột Tóc Vải Scrunchies Họa Tiết Nhiều Màu',
            product_img: 'https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497',
            product_price: 3500,
            pruduct_sold: 19
        },
        {
            product_name: '[CT26] Cột tóc hoa rơi ruy băng nơ kèm hạt châu trắng',
            product_img: 'https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497',
            product_price: 7000,
            pruduct_sold: 249
        },
        {
            product_name: '[Mã 88FASHIONSALE1 giảm 10K đơn 50K] CT117 Cột tóc hoa rơi hạt châu trắng',
            product_img: 'https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497',
            product_price: 15000,
            pruduct_sold: 64
        },
        {
            product_name: 'Cột tóc ngọc xinh xinh 04',
            product_img: 'https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e',
            product_price: 9999,
            pruduct_sold: 215
        },
        {
            product_name: 'CT16 Cột tóc con ong hoa cúc xinh',
            product_img: 'https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497',
            product_price: 7500,
            pruduct_sold: 100
        },
        {
            product_name: 'Cột Tóc Vải Scrunchies Họa Tiết Nhiều Màu',
            product_img: 'https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497',
            product_price: 3500,
            pruduct_sold: 19
        },
        {
            product_name: '[CT26] Cột tóc hoa rơi ruy băng nơ kèm hạt châu trắng',
            product_img: 'https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497',
            product_price: 7000,
            pruduct_sold: 249
        },
        {
            product_name: '[Mã 88FASHIONSALE1 giảm 10K đơn 50K] CT117 Cột tóc hoa rơi hạt châu trắng',
            product_img: 'https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497',
            product_price: 15000,
            pruduct_sold: 64
        },
        {
            product_name: 'Cột tóc ngọc xinh xinh 04',
            product_img: 'https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e',
            product_price: 9999,
            pruduct_sold: 215
        },
        {
            product_name: 'CT16 Cột tóc con ong hoa cúc xinh',
            product_img: 'https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497',
            product_price: 7500,
            pruduct_sold: 100
        },
        {
            product_name: 'Cột Tóc Vải Scrunchies Họa Tiết Nhiều Màu',
            product_img: 'https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497',
            product_price: 3500,
            pruduct_sold: 19
        },
        {
            product_name: '[CT26] Cột tóc hoa rơi ruy băng nơ kèm hạt châu trắng',
            product_img: 'https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497',
            product_price: 7000,
            pruduct_sold: 249
        },
        {
            product_name: '[Mã 88FASHIONSALE1 giảm 10K đơn 50K] CT117 Cột tóc hoa rơi hạt châu trắng',
            product_img: 'https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497',
            product_price: 15000,
            pruduct_sold: 64
        },
        {
            product_name: 'Cột tóc ngọc xinh xinh 04',
            product_img: 'https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e',
            product_price: 9999,
            pruduct_sold: 215
        },
        {
            product_name: 'CT16 Cột tóc con ong hoa cúc xinh',
            product_img: 'https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497',
            product_price: 7500,
            pruduct_sold: 100
        },
        {
            product_name: 'Cột Tóc Vải Scrunchies Họa Tiết Nhiều Màu',
            product_img: 'https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497',
            product_price: 3500,
            pruduct_sold: 19
        },
        {
            product_name: '[CT26] Cột tóc hoa rơi ruy băng nơ kèm hạt châu trắng',
            product_img: 'https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497',
            product_price: 7000,
            pruduct_sold: 249
        },
        {
            product_name: '[Mã 88FASHIONSALE1 giảm 10K đơn 50K] CT117 Cột tóc hoa rơi hạt châu trắng',
            product_img: 'https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497',
            product_price: 15000,
            pruduct_sold: 64
        }
    ]
    // add event listioner

function render_product(index) {
    product_content.innerHTML = "";
    let list_product = [];
    switch (index) {
        case 0:
            list_product = product_hint;
            break;
        case 1:
            list_product = product_saleoff;
            break;
        default:
            list_product = product_saleoff;
            break;

    }
    let htmls = ``;
    list_product.forEach((product) => {
        var format_price = new Intl.NumberFormat('de-DE').format(product.product_price);
        var format_sold = formatNumber_to_K(product.pruduct_sold)
        htmls += `
            <div class="col c-2 product-item__wrapper">
                <div class="product-item">
                    <a class="product-link">
                        <img src="${product.product_img}" alt="" class="product-img">
                        <div class="product-about">
                            <div class="product-name__wrapper">
                                <span class="product-name">${product.product_name}</span>
                            </div>
                            <div class="product-price-sold">
                                <span class="product-price">
                                    <span class="currency_format">đ</span>${format_price}
                                </span>
                                <span class="product-sold">
                                    Đã bán ${format_sold}
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            `;
    })
    product_content.innerHTML = htmls;
}
// chuyển số > 1000 thành 'k'
function formatNumber_to_K(number_morethanthousand) {
    return Math.floor(number_morethanthousand / 1000, 1) + 'k';
}

function addAction() {
    input_search.oninput = (e) => {
        showSuggestList_whenPress();
        $('.item-sub span').innerHTML = 'Tìm Shop" ' + input_search.value + '"';
    }
    logoutBtn.onclick = (e) => {
        e.preventDefault();
        logOut();
    }
    btnShowRegis.onclick = (e) => {
        loadRegisterForm();
    };
    btnShowLogin.onclick = (e) => {
        loadLoginForm();
    };
    modalOverlay.onclick = () => {
        closeForm();
    };
    Array.from($$('.product-content_tab')).forEach((tab) => {
        tab.onclick = () => {
            $('.product-content_tab.tab-active').classList.remove('tab-active');
            tab.classList.add('tab-active');
            render_product(tab.value);
        }
    })
}

// function

function loadRegisterForm() {
    modal.classList.remove('isHidden');
    is_RequestLogin = false;
    let randomcode = 'test';
    modal_body.innerHTML = `
        <div class="modal-contain__body">
            <div class="modal-contain__header">
                <h1>
                    Đăng ký
                </h1>
                <span class="switch-auth" onclick='changeForm()'>Đăng nhập</span>
            </div>
            <form action="" class="group-form">
                <input type="text" placeholder="Số điện thoại">
                <div class="row no-gutters">
                    <input type="text" class="col c-9" placeholder="Nhập mã ngẫu nhiên/mã hiển thị bên phải">
                    <span class="col c-3 random-code">qweee</span>
                </div>
                <div class="row no-gutters">
                    <input type="text" class="col c-8" placeholder="Mã xác minh">
                    <span class="col c-4 send-capcha-btn">
                        Gửi mã xác minh
                    </span>
                </div>
                <span class="note-massage">
                    Bằng việc đăng ký, bạn đã đồng ý với Shopee về <a href='#'>Điều khoản dịch vụ</a> & <a href='#'>chính sách bảo mật</a>
                </span>
                <div class="row no-gutters form__group-submit-btn">
                    <input type="button" class="col c-4 c-o-4 modal-form__btn btn--white btn--strong close-modal" onclick="closeForm()" value=" Trở lại">
                    <input type="submit" class="col c-4 modal-form__btn btn--red btn--strong" value="Đăng ký">
                </div>
            </form>
        </div>
        <div class="modal-contain__footer">
            <a href="" id='link-facebook' class="modal-form__btn btn--blue">
                <img src="./asset/img/icons8-facebook-30.png" alt="facebook">
                <span>Kết nối Facebook</span>
            </a>
            <a href="" id='link-google' class="modal-form__btn btn--white">
                <img src="./asset/img/icons8-google-48.png" alt="google" />
                <span>Kết nối Google</span>
            </a>
        </div>
    `;
}

function loadLoginForm() {
    modal.classList.remove('isHidden');
    is_RequestLogin = true;
    modal_body.innerHTML = `
        <div class="modal-contain__body">
            <div class="modal-contain__header">
                <h1>
                    Đăng nhập
                </h1>
                <span class="switch-auth" onclick='changeForm()'>Đăng ký</span>
            </div>
            <form action="" class="group-form">
                <input type="text" placeholder="Email/Số điện thoại/Tên đăng nhập">
                <input type="password" placeholder="Mật khẩu">
                <div class="supportLogin">
                    <a href="" id="" class="forgotPassword item--seperate">Quên mật khẩu</a>
                    <a href="" class="support">Cần trợ giúp?</a>
                </div>

                <div class="row no-gutters form__group-submit-btn">
                    <input type="button" class="col c-4 c-o-4 modal-form__btn btn--white btn--strong close-modal" onclick="closeForm()" value=" Trở lại">
                    <input type="submit" class="col c-4 modal-form__btn btn--red btn--strong" value="Đăng ký">
                </div>
            </form>
        </div>
        <div class="modal-contain__footer">
            <a href="#" id="link-sms" class="modal-form__btn btn--green">
                <img src="./asset/img/icons8-chat-bubble-30.png" alt="facebook">
                <span>SMS</span>
            </a>
            <a href="#" id="link-facebook" class="modal-form__btn btn--blue">
                <img src="./asset/img/icons8-facebook-30.png" alt="facebook">
                <span>Facebook</span>
            </a>
            <a href="#" id="link-google" class="modal-form__btn btn--white">
                <img src="./asset/img/icons8-google-48.png" alt="google" />
                <span>Google</span>
            </a>
        </div>
    `;
}

function changeForm() {
    isLogin ? loadRegisterForm() : loadLoginForm();
}

function closeForm() {
    modal.classList.add('isHidden');
}

function changeOpionSearch() {
    Array.from(list_OptionSearchs).forEach((option) => {
        option.onclick = () => {
            $('.option-search__item .icon:not(.isHidden)').classList.add('isHidden');
            optionSearch_Text.innerHTML = option.textContent;
            option.querySelector('i').classList.remove('isHidden');
        }
    })
}


// render sp trong gợi ý khi chưa co data
function renderProduct_suggest(someProducts_coming_soon) {
    var products = [
        'Quần áo',
        'Giày dép',
        'Quần áo',
        'somthings'
    ]
    for (var product of products) {
        $('.search-history__list').innerHTML += `
        <li class="search-history__item">
            <a href="">
                <span>${product}</span>
            </a>
        </li>`
    }
}

// xử lý hiển thị gợi ý khi gõ vào ô tìm kiếm
function showSuggestList_whenPress() {
    if (input_search.value === '') {
        $('.item-first').classList.remove('isHidden');
        $('.item-sub').classList.add('isHidden');
        // xóa những gợi ý khi thanh tìm kiếm không có chữ
        Array.from($$('.search-history__item:not(.item-first):not(.item-sub)')).forEach((element) => {
            element.remove();
        });
    } else {
        $('.item-first').classList.add('isHidden');
        $('.item-sub').classList.remove('isHidden');
        Array.from($$('.item-first ~ *')).length > 1 ? true : renderProduct_suggest();
    }
}

// xử lý giao diện (chưa có backend)
function logOut() {
    isLogin = false;

    var element_logout_remove = $$('.logOutRemove');
    var cart_popup = $('.cart-popup');
    var cart_notice = $('.cart-notice');

    // tắt thông báo ở cart hiện tại
    cart_notice.classList.remove('isNotice');

    // chuyển cart sang chế độ no-cart
    cart_popup.classList.add('no-cart');

    // xoa những thành phần chỉ có khi loggin
    Array.from(element_logout_remove).forEach((element) => {
        element.remove();
    });

    render_element_login_logout();
}
// ẩn và hiện các thành phần khi login/out
function render_element_login_logout() {
    var element_logout = $$('.logOutShow');
    var element_login = $$('.logInShow');
    if (isLogin) {
        Array.from(element_login).forEach((btn) => {
            btn.classList.remove('isHidden')
        });
        Array.from(element_logout).forEach((btn) => {
            btn.classList.add('isHidden')
        });
    } else {
        Array.from(element_login).forEach((btn) => {
            btn.classList.add('isHidden')
        });
        Array.from(element_logout).forEach((btn) => {
            btn.classList.remove('isHidden')
        });
    }
}
// xử lý các danh sách scroll
function moving_list() {
    var all_Moving_content = Array.from($$('.have-pre-next-btn'));

    all_Moving_content.forEach((content) => {
        var list_moving;
        var pre_btn = content.querySelector('.previus-btn');
        var next_btn = content.querySelector('.next-btn');
        var promise = new Promise(
            function(resolve, reject) {
                list_moving = content.querySelector('.moving-list');
                resolve(list_moving);
            }
        )
        promise
            .then((list_moving) => {
                // độ rộng các item dc hiển thị
                var item_show_length = list_moving.offsetWidth;
                // độ rộng 1 item
                var item_width = list_moving.firstChild.nextElementSibling.offsetWidth;
                // số item trong list_moving
                var item_count = list_moving.childElementCount;
                // item-ishidden
                var item_hidden = item_count - item_show_length / item_width;
                // moving-count
                var count = 0;
                check_position();
                // pre-btn
                pre_btn.onclick = () => {
                    if (count == -item_hidden) {
                        console.log('is end');
                        check_position();
                    } else {
                        // chuyen 1 lan 3 item
                        count = count - 3 < -item_hidden ? -item_hidden : count - 3;
                        list_moving.style.transform = 'translateX(-' + Math.abs(count) * item_width + 'px)';
                        check_position();
                    }
                }

                // next-btn
                next_btn.onclick = () => {
                    if (count == 0) {
                        console.log('is start');
                        check_position();
                    } else {
                        // chuyen 1 lan 3 item
                        count = count + 3 > 0 ? 0 : count + 3;
                        list_moving.style.transform = 'translateX(-' + Math.abs(count) * item_width + 'px)';
                        check_position();
                    }
                }

                // kiem tra thay doi trang thai nut
                function check_position() {
                    if (count == 0) {
                        next_btn.style.display = 'none';
                    }
                    if (count == -item_hidden) {
                        pre_btn.style.display = 'none';
                    }
                    if (count != 0 && count != -item_hidden) {
                        pre_btn.style.display = 'flex';
                        next_btn.style.display = 'flex';
                    }
                }
            })

    })
}
addAction();
changeOpionSearch();
render_element_login_logout();
moving_list();
render_product('default');