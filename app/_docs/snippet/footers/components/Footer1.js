// import footer from layouts
import FooterDark from "layouts/marketing/footers/FooterDark";

export const Footer1 = ({ bgColor }) => {
  return <FooterDark bgColor={bgColor} />;
};

export const Footer1Code = `
// import footer from layouts
import FooterDark from 'layouts/marketing/footers/FooterDark';

export const Footer1Example = () => {
    return (<FooterDark />)
}`.trim();
