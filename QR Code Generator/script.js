const imgBox = document.querySelector('.imgBox');
const QRImage = document.querySelector('#QRImage');
const QRText = document.querySelector('#QRText');
function generateQR() {
    if (QRText.value.length > 0) {
        QRImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + QRText.value;
        imgBox.classList.add('show-img');
    } else {
        QRText.classList.add('error');
        setTimeout(() => {
            QRText.classList.remove('error');
        }, 1000)
    }
}