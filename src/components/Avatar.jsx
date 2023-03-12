import PropTypes from "prop-types";

const Avatar = (props) => {
  return (
    <a
      href="#0"
      className="flex flex-col items-center gap-3 group -translate-y-0"
    >
      <img
        src={props.thumbnail}
        alt={`Profile for ${props.userName}`}
        className="group-hover:border-white/50 group-hover:-translate-y-2 border-2 border-brand-black rounded-lg transform duration-300"
      />
      <p className="text-gray-500 group-hover:text-white group-hover:-translate-y-2 transform duration-300">
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
