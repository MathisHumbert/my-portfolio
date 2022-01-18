const SectionHeader = ({ title, marginLeft }) => {
  return (
    <h6
      className='section-header'
      style={marginLeft ? { marginLeft: '5vw' } : null}
    >
      {title}
    </h6>
  );
};

export default SectionHeader;
