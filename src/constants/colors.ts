interface BackgroundThemes {
    fontColor: string;
    fontColorDark: string;
    background: string;
    background5: string;
    background10: string;
    background20: string;
    primary: string;
    primary5: string;
    primary10: string;
    primary20: string;
    secondary: string;
    secondary5: string;
    secondary10: string;
    secondary20: string;
    accent: string;
    accent5: string;
    accent10: string;
    accent20: string;
    gray: string;
    black: string;
  }

export const BackgroundVariants: BackgroundThemes = {
    fontColor: "bg-fontColor",
    fontColorDark: "bg-fontColorDark",
    background: "bg-background",
    background5: "bg-background-5",
    background10: "bg-background-10",
    background20: "bg-background-20",
    accent: "bg-accent",
    accent5: "bg-accent-5",
    accent10: "bg-accent-10",
    accent20: "bg-accent-20",
    secondary: "bg-secondary",
    secondary5: "bg-secondary-5",
    secondary10: "bg-secondary-10",
    secondary20: "bg-secondary-20",
    primary: "bg-primary",
    primary5: "bg-primary-5",
    primary10: "bg-primary-10",
    primary20: "bg-primary-20",
    gray: "bg-neutral-500",
    black: "bg-black"
  };

  interface FontThemes {
    background: string;
    fontColor: string;
    primary: string;
    secondary: string;
    accent: string;
  }

export const FontVariants: FontThemes = {
    background: "text-background",
    fontColor: "text-fontColor",
    accent: "text-accent",
    secondary: "text-secondary",
    primary: "text-primary",
};