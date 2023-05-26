import React, { Dispatch, SetStateAction } from 'react'
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent } from '@mui/material';


interface ModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  modalTitle: string;
  children: JSX.Element;
}


const Modal = ({ open, setOpen, modalTitle, children }: ModalProps) => {

  const handleCloseModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleCloseModal} >
      <DialogTitle>{modalTitle}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <div className='flex justify-end pb-2 pr-2'><button onClick={handleCloseModal}>salir</button></div>
    </Dialog>
  )
}

export { Modal };