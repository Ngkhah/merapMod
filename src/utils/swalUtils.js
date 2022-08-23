import Swal from 'sweetalert2';

export const loadingSwal = () => {
  Swal.fire({
    title: 'Wait ...',
    showConfirmButton: false,
    allowOutsideClick: false,
    showClass: {popup: '',icon: ''},
    hideClass: {popup: ''},
    onBeforeOpen: () => {
      Swal.showLoading ()
    }
 });
}

export const successSwal = (title, text, callback) => {
  Swal.fire({
    icon: 'success',
    title: title,
    text: text,
    showConfirmButton: true,
    allowOutsideClick: false,
    confirmButtonColor: '#05754E',
    confirmButtonText: 'Xác nhận',
  }).then(() => {
    callback();
  });
}

export const errorSwal = (title,text, callback) => {
  Swal.fire({
    icon: 'error',
    title: title,
    text: text,
    showConfirmButton: true,
    allowOutsideClick: false,
    confirmButtonText: 'Xác nhận',
  }).then(() => {
    callback();
  });
}

export const errorMessSwal = (title,text, callback) => {
  Swal.fire({
    icon: 'error',
    title: title,
    text: text,
    showConfirmButton: true,
    allowOutsideClick: false,
    confirmButtonColor: '#05754E',
    confirmButtonText: 'Xác nhận',
  }).then(() => {
    callback();
  });
}


export const confirmSwal = (title, text, callback) => {
  Swal.fire({
    icon: 'warning',
    title,
    text,
    showCancelButton: true,
    closeButtonAriaLabel: true,
    allowOutsideClick: false,
    confirmButtonText: 'Xác nhận',
    confirmButtonColor: '#05754E',
    cancelButtonText: 'Hủy bỏ'
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
    }
  })
}

export const infoSwal = (title, text) => {
  Swal.fire({ 
    title, 
    text,
    confirmButtonText: 'Xác nhận',
  });
}