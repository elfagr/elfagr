function calculatePrice() {
    // الحصول على القيم المدخلة من النموذج
    const paperCount = document.getElementById('paperCount').value;
    const printColor = document.getElementById('printColor').value;
    const printType = document.getElementById('printType').value;

    // تحديد الأسعار
    const pricePerBlackWhite = 1; // سعر الورقة أبيض وأسود
    const pricePerColor = 2; // سعر الورقة ألوان
    const pricePerSingle = 1; // سعر الورقة وجه واحد
    const pricePerDouble = 2; // سعر الورقة وجهين

    // حساب السعر بناءً على اللون ونوع الطباعة
    let paperPrice = 0;
    if (printColor === 'blackWhite') {
        paperPrice = pricePerBlackWhite;
    } else if (printColor === 'color') {
        paperPrice = pricePerColor;
    }

    let typePrice = 0;
    if (printType === 'single') {
        typePrice = pricePerSingle;
    } else if (printType === 'double') {
        typePrice = pricePerDouble;
    }

    // حساب السعر الإجمالي
    const totalPrice = (paperPrice + typePrice) * paperCount;

    // عرض النتيجة
    document.getElementById('totalPrice').textContent = totalPrice;
}
