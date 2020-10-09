const RollExchange = () => {
  return (
    <div>
      <iframe
        scrolling="no"
        className="mt-24 w-full h-screen"
        style={{
          zoom: 0.9,
          transform: 0.9
        }}
        src='https://exchange.tryroll.com/swap'
      />
    </div>
  );
};

export default RollExchange;
