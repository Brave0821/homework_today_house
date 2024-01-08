// remove.js 참고
// 왼쪽 썸네일 이미지 js 
/* 
스몰 썸네일 a에 올렸을 때 big 썸네일 이미지 경로가 바뀜?
1. small_thumnail -  마우스를 올리면 ex small2에 마우스를 올렸다면 
2. big_thumnail - img (src) 값이 변경된다. ex big1 이 big2 이미지 변경
*/
const item_detail = document.querySelector(".item_detail")
const small_img = item_detail.querySelectorAll(".small_thumnail a")
const big_img = item_detail.querySelector(".big_thumnail img")
console.log(item_detail, small_img, big_img); /* 성공 */

small_img[0].addEventListener("mouseover", function(){
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src="./dog_images/small1.jpg"
})
small_img[1].addEventListener("mouseover", function(){
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src="./dog_images/small2.jpg"
})

small_img[2].addEventListener("mouseover", function(){
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src="./dog_images/small1.jpg"
})

small_img[3].addEventListener("mouseover", function(){
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src="./dog_images/small2.jpg"
})

small_img[4].addEventListener("mouseover", function(){
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src="./dog_images/small1.jpg"
})

small_img[5].addEventListener("mouseover", function(){
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src="./dog_images/small2.jpg"
})

console.log("-----------------------------------------")
// 가격 할인 정보 클릭 시 나오는 정보 팝업
/* 
1. 팝업을 숨긴다.
2. i 클릭하면 팝업 보이기 
*/

const price_info = document.querySelector(".price i[class$=info]")
const price_info_open = document.querySelector(".price .open")
console.log(price_info,price_info_open )

price_info_open.style.display = 'none';

price_info.addEventListener("click", function(){
    price_info_open.style.display = 'block';
});

console.log("-----------------------------------------")

// 내일 출발 i 클릭 시 팝업 출력하고 팝업 내 x 클릭 시 팝업 닫히기 JS 
/* 
1. 팝업 숨기기 
2. i 클릭시 팝업 출력 
3. x 클릭 시 팝업 닫히기 
*/
const info = item_detail.querySelector(".benefit_shipping i[class$=info]")
const popup = item_detail.querySelector(".benefit_shipping .open")
const close = popup.querySelector(".close")

console.log(info,popup,close)

popup.style.display = "none";

info.addEventListener("click", function(){
    popup.style.display = "block"
})

close.addEventListener("click", function(){
    popup.style.display = "none";
})

/* ---------------------------------------------------------------------- */
console.log("--------------------------숙제------------------------------------")

// <i class="fa-solid fa-chevron-down"></i>

const down = item_detail.querySelector(".benefit_shipping i[class$=down]")
console.log(down)
/* delivery_menu_open  */
const menu_open = item_detail.querySelector(".benefit_shipping .delivery_menu_open")
console.log(menu_open)
const menu = item_detail.querySelector(".benefit_shipping .delivery_menu")
console.log(menu)

// const down_up = item_detail.querySelector(".benefit_shipping i[class$=down]")
// console.log(down_up)
// const down_close = item_detail.querySelector(".benefit_shipping i[class$=down]")


/* <!-- # 오늘의 집 배송 정보 보기 cart_sample.js 이어서-

목표) 배송 1/9 (화) 도착 예정 94% 메뉴를 클릭하면 메뉴 펼침 정보 나타나기

1. 펼침 메뉴 초기 숨기기
2. 배송1/9(화) 도착 예정 94% 메뉴 클릭 시 
3. 위(2)의 둥근 모서리 하단 모양 뾰족하게 변경
4. 위(2)의 94% 옆 화살표 상하 반전 하기
5. 메뉴 펼침 정보 보이기 --> */

menu_open.style.display = "none";
//메뉴 숨김.

down.addEventListener("click", function(){
    menu_open.style.display = "block";
})

// https://www.techiedelight.com/ko/remove-inline-css-properties-javascript/
// 보더 값 빼기

menu.addEventListener("click", function(){
    menu_open.style.removeProperty = ("boder"); 
})

// down.addEventListener("click", function(){
//     down_up.style.transform = "rotate(50px)"
// });


// down.addEventListener("click", function(){
//     menu_open.style.display = "none";
// })


/*  transform: scaleY(-1); transition: .3s;  */
// down.addEventListener("click", function(){
//     down_up.style({transform : ["scaleY(-1)",
//     "transition(.3s)"
// ]})

// })


/*  menu.addEventListener("click", function(){
    menu_open.style.borderRadius = ("0px 0px 30px 0px"); 
})
 */
 

// menu.addEventListener("click", function(){
//     menu.style.display = "none";
// })


// down_close.addEventListener("click", function(){
//     menu.style.display = "none";
// })
