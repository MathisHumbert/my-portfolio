const SectionHeader = ({ title, marginLeft }) => {
  return (
    <h2
      className='section-header'
      style={marginLeft ? { marginLeft: '5vw' } : null}
    >
      {title}
    </h2>
  );
};

export default SectionHeader;
