const tabsBtns = document.querySelectorAll(".tabs-nav button");
// console.log(tabsBtns);
const tabsItems = document.querySelectorAll(".tabs_item");
// console.log(tabsItems);


//Функция скрывает табы и убирает active у кнопок
function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}
//Функция показывает переданный номер таба и делает соответсвующую ему кнопку активной.
function showTab(index){
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}
hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));