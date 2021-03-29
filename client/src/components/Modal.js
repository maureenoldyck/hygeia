import React from 'react'

const Modal = ({children}) => {
    
    return (

        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center h-auto pt-4 px-4 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" aria-hidden="true">
            </div>

            <div className="inline-block align-bottom bg-brown-white bg-opacity-90 rounded-br-lg rounded-tl-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-1/2">
               
                {children}
            </div>
          </div>
        </div>
        
    );
};
  

    

export default Modal;