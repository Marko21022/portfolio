import { BubbleBackground } from '@/components/animate-ui/components/backgrounds/bubble';

type BubbleBackgroundDemoProps = {
  interactive: boolean;
};

export const Background = ({
  interactive,
}: BubbleBackgroundDemoProps) => {
  const colors = {
  first:  "101, 71, 252",
  second: "66, 138, 227",
  third:  "65, 118,224",
  fourth: "0, 60, 255",
  fifth:  "188, 112, 255",
  sixth:  "244, 129, 252",
};

  return (
    <BubbleBackground
      interactive={false}
      className="fixed inset-0 flex items-center justify-center bg-blue-700"
      colors={colors}
      transition={{ stiffness: 50, damping: 30 }}
    />
  );
};