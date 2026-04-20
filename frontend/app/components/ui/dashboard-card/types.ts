export default interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  rightAction?: React.ReactNode;
  className?: string;
}