interface Props {
  type: "success" | "danger";
  message: string;
}

const Alert = ({ type, message }: Props) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  );
};

export default Alert;
