
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div>
            <p>{subHeading}</p>
            <hr />
            <h1 className="text-3xl font-semibold">{heading}</h1>
          <hr />
        </div>
    );
};

export default SectionTitle;