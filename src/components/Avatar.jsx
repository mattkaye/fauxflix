import PropTypes from "prop-types";

const Avatar = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <a
      href=""
      onClick={handleClick}
      className="flex flex-col items-center gap-3 group -translate-y-0"
    >
      <img
        src={props.thumbnail}
        alt={`Profile for ${props.userName}`}
        className="group-hover:border-white/50 group-hover:-translate-y-1 border-2 border-brand-black rounded-lg transform duration-300"
      />
      <p className="text-gray-500 group-hover:text-white group-hover:-translate-y-1 transform duration-300">
        {props.userName}
      </p>
    </a>
  );
};

Avatar.propTypes = {
  userName: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Avatar;
