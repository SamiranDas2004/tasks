import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SortableItem({ id, title, image, type, price, onMoveToTop, onMoveToBottom, onRemove }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '8px',
    border: '1px solid #ccc',
    marginBottom: '4px',
    backgroundColor: 'white',
    cursor: 'grab',
    display: 'flex',
    alignItems: 'center',
  };

  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
  };

  const imgStyle = {
    width: '50px',
    height: '50px',
    marginRight: '16px',
  };

  const fontStyle = {
    display:'flex',
    width: '100px',
    height: '26px',
    borderRadius: '4px',
    backgroundColor: '#DBFFCE',
    padding: '4px',
    textAlign: 'center',
    alignItems:'center',
    lineHeight: '26px',
    top:'436px',
    opacity: 1,
  };

  const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (action) => {
    handleMenuClose();
    if (action === 'Move to Top') {
      onMoveToTop(id);
    } else if (action === 'Move to Bottom') {
      onMoveToBottom(id);
    } else if (action === 'Remove') {
      onRemove(id);
    }
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div style={leftSectionStyle}>
        <DragIndicatorIcon />
        <img src={image} alt={title} style={imgStyle} />
        <div>
          <div >{title}</div>
   
        </div>
      </div>
      <div style={rightSectionStyle}>
       
        <div className="w-full" style={{ marginLeft: '16px' ,top:'329px',lefet:'880px', display:'flex' }}>{price}</div>
        <div style={fontStyle}>{type}</div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
          style={{ marginLeft: '1px' }}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: '20ch',
            },
          }}
        >
          <MenuItem onClick={() => handleMenuItemClick('Move to Top')}>Move to Top</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('Move to Bottom')}>Move to Bottom</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('Remove')}>Remove</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default SortableItem;
