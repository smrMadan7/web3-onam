import { Dialog, Transition } from '@headlessui/react';
import React, { ReactNode, Fragment, LegacyRef } from 'react';
// import { ReactComponent as CloseIcon } from '../../../../public/assets/images/icons/closeIcon.svg';


function ModalHeader({
  title,
  headerStyleClass,
  image,
  onClose,
}) {
  return (
    <>
      {/* <CloseIcon
        className="stroke-3 absolute right-5 top-5 z-40 cursor-pointer"
        onClick={() => onClose()}
      /> */}
      <div className={`focus:outline-none ${headerStyleClass} rounded-lg`}>
        {image && (
          <div className="flex h-40 rounded-tr-lg rounded-tl-lg bg-[url('/assets/images/Banner.svg')]">
            <div className="my-auto ml-5">{image}</div>
          </div>
        )}
        {title && (
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            {title}
          </Dialog.Title>
        )}
      </div>
    </>
  );
}

function ModalFooter({ onClose }) {
  return (
    <div className="absolute bottom-2 m-3">
      <div className="ml-2">
        <button
          className="on-focus leading-3.5 text-md mb-2 mr-2 rounded-full border border-slate-300 px-5 py-3 text-left font-medium last:mr-0 focus-within:rounded-full hover:border-slate-400 focus:rounded-full focus-visible:rounded-full"
          onClick={() => onClose()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

function Modal({
  isOpen,
  title,
  children,
  image,
  onClose,
  enableHeader = true,
  enableFooter = true,
  modalClassName,
  modalRef,
  isPopup = false,
  contentClassName="",
}) {
  // const modalRef = useRef(null);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        ref={modalRef}
        className={`fixed ${ isPopup ? 'top-40' : 'top-0' } inset-0 left-0 w-full grow overflow-x-hidden rounded-[30px] outline-none z-[45]`}
        onClose={() => onClose()}
      >
        <div className="">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed left-0 top-0 h-full w-full overflow-y-auto overflow-x-hidden bg-gray-500 bg-opacity-75  outline-none transition-opacity" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className={`dia  mx-auto  relative my-8 h-auto transform rounded-lg bg-white text-left align-middle shadow-xl transition-all ${modalClassName}`}>
              {enableHeader && (
                <ModalHeader
                  onClose={onClose}
                  title={title}
                  image={image}
                  headerStyleClass="h-10"
                />
              )}
              <div className={`${enableHeader ? "t-40" : "mt-20 pb-3"} ${contentClassName}`}>{children}</div>
              {enableFooter && <ModalFooter onClose={onClose} />}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
