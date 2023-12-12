
function ChooseAd({handleAdventureClick, adventures}) {
  return(
    <div className="z-40">
      <h2 className="text-primary text-5xl tracking-wider text-center font-bold mb-12">Choose Your Adventure</h2>
      <div className="grid grid-cols-3 gap-4 w-full px-10">
        {
          adventures.map((ad, index) => (
            <div className="flex flex-col items-center" onClick={() => handleAdventureClick(ad)}>
              <div className="mb-2 border-animation">
                <div className="h-80 w-64 bg-blue-300 flex items-center justify-center">ADVENTURE {index+1} IMAGE</div>
              </div>
              <p className="uppercase text-lg mt-2">{ad.title}</p>
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default ChooseAd;