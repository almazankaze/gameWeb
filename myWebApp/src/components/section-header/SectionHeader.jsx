import { SectionHeaderContainer } from "./section-title.style";

const SectionHeader = ({ title }) => {
  return (
    <SectionHeaderContainer>
      <h1>{title}</h1> <hr />
    </SectionHeaderContainer>
  );
};

export default SectionHeader;
