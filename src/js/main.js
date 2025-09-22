import '@/scss/main.scss';


// Main JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {

    
    $(".datepicker").datepicker({
    dateFormat: "yy-mm-dd",
    dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"], // 주 전체 이름
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"], // 축약 이름(헤더)
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월",
                    "7월", "8월", "9월", "10월", "11월", "12월"], // 월 이름
    monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월",
                        "7월", "8월", "9월", "10월", "11월", "12월"], // 축약 월 이름
    prevText: "이전",
    nextText: "다음",
    currentText: "오늘",
    closeText: "닫기",
    changeMonth: true,
    changeYear: true,
    showMonthAfterYear: true, // 년 뒤에 월 표시
    yearSuffix: "년"
    });
    
    
    // Quantity control functionality
    const quantityControls = document.querySelectorAll('.quantity-control');
    
    quantityControls.forEach(control => {
        const minusBtn = control.querySelector('.minus');
        const plusBtn = control.querySelector('.plus');
        const input = control.querySelector('.qty-input');
        
        minusBtn.addEventListener('click', () => {
            let value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;
                //updateTotalPrice();
            }
        });
        
        plusBtn.addEventListener('click', () => {
            let value = parseInt(input.value);
            input.value = value + 1;
            //updateTotalPrice();
        });
        
        //input.addEventListener('change', updateTotalPrice);
    });
    
    // Toggle functionality for progress items
    // const toggleBtns = document.querySelectorAll('.toggle-btn');
    
    // toggleBtns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         const progressItem = this.closest('.progress-item');
    //         const details = progressItem.querySelector('.item-details');
            
    //         if (progressItem.classList.contains('expanded')) {
    //             progressItem.classList.remove('expanded');
    //             progressItem.classList.add('collapsed');
    //             //this.textContent = '▶';
    //         } else {
    //             progressItem.classList.remove('collapsed');
    //             progressItem.classList.add('expanded');
    //             //this.textContent = '▼';
    //         }
    //     });
    // });
    
    // Tab functionality for order info cards
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabContainer = this.closest('.order-tabs');
            const allTabs = tabContainer.querySelectorAll('.tab');
            
            // Remove active class from all tabs
            allTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });
    
    // Search functionality
    // const searchBtn = document.querySelector('.btn-search');
    // if (searchBtn) {
    //     searchBtn.addEventListener('click', function() {
    //         // Search logic here
    //         console.log('Search button clicked');
    //         // You can add actual search functionality here
    //     });
    // }
    
    // Product search button
    // const productSearchBtn = document.querySelector('.product-search-btn');
    // if (productSearchBtn) {
    //     productSearchBtn.addEventListener('click', function() {
    //         console.log('Product search button clicked');
    //         // Add product search modal or redirect logic
    //     });
    // }
    
    // Order button
    // const orderBtn = document.querySelector('.btn-order');
    // if (orderBtn) {
    //     orderBtn.addEventListener('click', function() {
    //         const checkedProducts = document.querySelectorAll('.product-checkbox:checked');
    //         if (checkedProducts.length === 0) {
    //             alert('주문할 상품을 선택해주세요.');
    //             return;
    //         }
    //         console.log('Order button clicked');
    //         // Add order submission logic
    //     });
    // }
    
    // Update total price function
    function updateTotalPrice() {
        const checkboxes = document.querySelectorAll('.product-checkbox:checked');
        let total = 0;
        
        checkboxes.forEach(checkbox => {
            const row = checkbox.closest('tr');
            const priceText = row.querySelector('.product-price').textContent;
            const quantity = parseInt(row.querySelector('.qty-input').value);
            const price = parseInt(priceText.replace(/[^\d]/g, ''));
            
            total += price * quantity;
        });
        
        const totalElement = document.querySelector('.total-amount');
        if (totalElement) {
            totalElement.textContent = total.toLocaleString() + '원';
        }
    }
    
    // // Checkbox change event
    // const checkboxes = document.querySelectorAll('.product-checkbox');
    // checkboxes.forEach(checkbox => {
    //     checkbox.addEventListener('change', updateTotalPrice);
    // });
    
    // // Initialize total price
    // updateTotalPrice();
});


