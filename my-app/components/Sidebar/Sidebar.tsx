'use client';

import React, { useState, FC } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  TextField,
  InputAdornment,
} from '@mui/material';
import KeyboardShortcutIcon from '@mui/icons-material/Keyboard';
import { LayoutDashboard, Newspaper, Folders, CreditCard, Settings, User } from 'lucide-react';
import Link from 'next/link';

// npm install --save-dev @types/next

interface CommandItemType {
  id: string;
  group: string;
  label: string;
  icon: React.ComponentType<any>;
  href?: string;
  shortcut?: string;
}

const CMD_ITEMS: CommandItemType[] = [
  { id: 'dashboard', group: 'Suggestions', label: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { id: 'posts', group: 'Suggestions', label: 'Posts', icon: Newspaper, href: '/posts' },
  { id: 'categories', group: 'Suggestions', label: 'Categories', icon: Folders, href: '#' },
  { id: 'profile', group: 'Settings', label: 'Profile', icon: User, shortcut: '⌘P' },
  { id: 'billing', group: 'Settings', label: 'Billing', icon: CreditCard, shortcut: '⌘B' },
  { id: 'settings', group: 'Settings', label: 'Settings', icon: Settings, shortcut: '⌘S' },
];

const Sidebar: FC = () => {
  const [query, setQuery] = useState('');
  const filtered = CMD_ITEMS.filter(i => i.label.toLowerCase().includes(query.toLowerCase()));
  const groups: string[] = Array.from(new Set(filtered.map((i: CommandItemType) => i.group)));

  const renderItem = ({ id, icon: Icon, label, href, shortcut }: CommandItemType) => (
    <ListItem key={id} disablePadding>
      <ListItemButton component={href ? Link : 'div'} href={href || '#'}>
        <ListItemIcon sx={{ minWidth: 36 }}>
          <Icon size={18} />
        </ListItemIcon>
        <ListItemText primary={label} />
        {shortcut && <Typography variant='caption' color='text.secondary'>{shortcut}</Typography>}
      </ListItemButton>
    </ListItem>
  );

  return (
    <Box sx={{ width: 300, height: '100vh', borderRight: 1, borderColor: 'divider', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2 }}>
        <TextField
          fullWidth size='small'
          placeholder='Type a command or search...'
          value={query} onChange={e => setQuery(e.target.value)}
          InputProps={{ startAdornment: <InputAdornment position='start'><KeyboardShortcutIcon fontSize='small' /></InputAdornment> }}
        />
      </Box>

      <Box sx={{ flex: 1, overflow: 'auto' }}>
        {filtered.length === 0 ? (
          <Typography sx={{ p: 2 }} variant='body2' color='text.secondary'>No results found.</Typography>
        ) : (
          groups.map(g => (
            <Box key={g}>
              <Typography variant='caption' color='text.secondary' sx={{ px: 2, py: 1 }}>{g}</Typography>
              <List dense>
                {filtered.filter(i => i.group === g).map(renderItem)}
              </List>
              <Divider sx={{ my: 1 }} />
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;
