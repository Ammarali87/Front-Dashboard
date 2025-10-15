import { Card, CardContent, Typography, Box } from '@mui/material';
import { User } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, count, icon }) => {
  return (
    <Card
      sx={{
        bgcolor: 'background.paper',
        p: 2,
        pb: 0,
        textAlign: 'center',
        boxShadow: 3,
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: 'text.secondary' }}>
          {title}
        </Typography>

        <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
          {icon}
          <Typography variant="h3" sx={{ fontWeight: 600, color: 'text.primary' }}>
            {count}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
