'use client'

import React, { useState } from 'react'
import {
  Menu,
  MenuItem,
  Divider,
  IconButton,
  MenuList,
  Checkbox,
  Radio,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { ChevronRight, Check, Circle } from 'lucide-react'

interface DropdownItem {
  label: string
  onClick?: () => void
  disabled?: boolean
  checked?: boolean
  radio?: boolean
  subMenu?: DropdownItem[]
}

interface DropdownMenuProps {
  trigger: React.ReactNode
  items: DropdownItem[]
}

const DropdownMenu = ({ trigger, items }: DropdownMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [subAnchorEl, setSubAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const openSub = Boolean(subAnchorEl)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setSubAnchorEl(null)
  }

  return (
    <>
      <span onClick={handleOpen}>{trigger}</span>

      {/* Main Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          className:
            'bg-popover border rounded-md shadow-md p-1 text-sm text-popover-foreground z-50 min-w-[8rem]',
        }}
      >
        <MenuList>
          {items.map((item, i) =>
            item.label === 'divider' ? (
              <Divider key={i} className="my-1 bg-muted" />
            ) : (
              <MenuItem
                key={i}
                onClick={() => {
                  item.onClick?.()
                  if (!item.subMenu) handleClose()
                }}
                disabled={item.disabled}
                className={`relative flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer select-none transition-colors
                hover:bg-accent hover:text-accent-foreground 
                ${item.disabled ? 'opacity-50 pointer-events-none' : ''}
                `}
              >
                {item.checked && (
                  <ListItemIcon className="min-w-0 mr-1">
                    <Check className="h-4 w-4" />
                  </ListItemIcon>
                )}
                {item.radio && (
                  <ListItemIcon className="min-w-0 mr-1">
                    <Circle className="h-2 w-2 fill-current" />
                  </ListItemIcon>
                )}
                <ListItemText>{item.label}</ListItemText>

                {item.subMenu && (
                  <IconButton
                    size="small"
                    className="ml-auto"
                    onClick={(e) => setSubAnchorEl(e.currentTarget)}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </IconButton>
                )}

                {/* Sub Menu */}
                {item.subMenu && (
                  <Menu
                    anchorEl={subAnchorEl}
                    open={openSub}
                    onClose={() => setSubAnchorEl(null)}
                    PaperProps={{
                      className:
                        'bg-popover border rounded-md shadow-md p-1 min-w-[8rem]',
                    }}
                  >
                    {item.subMenu.map((sub, j) => (
                      <MenuItem
                        key={j}
                        onClick={() => {
                          sub.onClick?.()
                          handleClose()
                        }}
                        className="rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
                      >
                        {sub.label}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </MenuItem>
            )
          )}
        </MenuList>
      </Menu>
    </>
  )
}

export default DropdownMenu
