import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const DisplayCard = ({ businessData, regenHeadline }) => {
  const [isLoading, setLoading] = useState(false);

  const onClickRegenButton = async () => {
    try {
      setLoading(true);
      await regenHeadline();
    } catch (error) {
      console.error('Error regenerating headline:', error);
      alert('An error occurred while regenerating the headline. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h5 className="card-title mb-3">Business Summary</h5>
          <p className="card-text"><strong>Rating:</strong> {businessData.rating}</p>
          <p className="card-text"><strong>Reviews:</strong> {businessData.reviews}</p>
          <p className="card-text"><strong>Headline:</strong> {businessData.headline}</p>

          <button
            type="button"
            className="btn btn-outline-primary mt-3"
            onClick={onClickRegenButton}
            disabled={isLoading}
          >
            {isLoading ? <ClipLoader size={20} color="#0d6efd" /> : 'Regenerate Headline'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
