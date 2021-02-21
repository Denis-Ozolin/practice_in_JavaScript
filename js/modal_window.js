const openModalbtnRef = document.querySelector('.modal__btn--open');
const modalWindow = document.querySelector('.modal__backdrop');
const closeModalBtnRef = document.querySelector('.modal__btn--close');

const onOpenModal = () => {
   window.addEventListener('keydown', onPressEsc);
   modalWindow.classList.add('modal__backdrop--show');
};

const onCloseModal = () => {
   window.removeEventListener('keydown', onPressEsc);
   modalWindow.classList.remove('modal__backdrop--show');
}

const onPressEsc = event => {
   if (event.code === 'Escape') {
      onCloseModal();
   }
}

openModalbtnRef.addEventListener('click', onOpenModal);

closeModalBtnRef.addEventListener('click', onCloseModal); 

modalWindow.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        onCloseModal();
    }
}); 

