/* eslint-disable react/prop-types */
const VideoCard = ({item}) => {
    return (
        <div style={{background:"#f1f1f1"}} className="align-items-center flex-column border rounded p-3">
            <img className="rounded" width="100%" src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="w-100 pt-2" style={{fontSize: "smaller",fontWeight: "bold"}}>{item.snippet.title}</div>
            <ul className="p-0 m-0"  style={{listStyle:"none",fontSize: "small", color:"#606060"}}>
                <li>{item.snippet.channelTitle}</li>
                <li>{item.statistics.viewCount}</li>
            </ul>
        </div>
    )
}
export default VideoCard