import './mixCard.scss';
// import audios from './data/audios';
import SetMenu from './SetMenu';


const MixCard = ({ mix, loadMixView }) => {
  // const [showMixInfo, setShowMixInfo] = useState(false);
  // const filteredObjects = audios.filter(obj => mix.audioFileIds.includes(obj.id));

  // function handleDropdownClick() {
  //   setShowMixInfo(!showMixInfo);
  //   console.log('showInfo: ' + showMixInfo);
  // }

  return (
    <div className="mix-card"
    onClick={() => loadMixView(mix.id)}
    >
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10'>
            <div className="mix-card__title">{mix.title}</div>
          </div>
          <div className='col-2 set-menu px-4'>
            <SetMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixCard;
