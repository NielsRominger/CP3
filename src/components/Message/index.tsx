import './styles.scss';

interface MessageProps {
  searchResultNumber: number;
}

function Message({ searchResultNumber }: MessageProps) {
  return (
    <div className="container">
      <p className="results">
        {`La recherche a donné
         ${searchResultNumber}
        résultats.`}
      </p>
    </div>
  );
}

export default Message;
