const MemeImage: React.FC<any> = ({ meme }: any) => {
  return (
    <div>
      {meme.imageUrl && <div className="memeImage">
        <img src={meme.imageUrl} alt="img" className="memeImage-img" />
        <span className="memeImage-text1">{meme.topText}</span>
        <span className="memeImage-text2">{meme.bottonText}</span>
      </div>}
    </div>
  );
};

export default MemeImage;
