import audios from "./data/audios"
import AudioFileCardBox from "./AudioFileCardBox"


const MixCardInfo = ({ audioFileIds }) => { 
    const filteredObjects = audios.filter(obj => audioFileIds.includes(obj.id));
    
    <div className="row" >
        <div className="col">
            <AudioFileCardBox audios={filteredObjects} /> 
        </div>
    </div>
}

export default MixCardInfo;