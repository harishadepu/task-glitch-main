import { Snackbar, Button } from '@mui/material';
import type { SyntheticEvent } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  onUndo: () => void;
}

export default function UndoSnackbar({ open, onClose, onUndo }: Props) {
  const handleClose = (_: Event | SyntheticEvent, __: string) => {
    // Always notify parent to clear last-deleted state regardless of reason
    onClose();
  };

  const handleUndo = () => {
    onUndo();
    onClose();
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={4000}
      message="Task deleted"
      action={<Button color="secondary" size="small" onClick={handleUndo}>Undo</Button>}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  );
}


