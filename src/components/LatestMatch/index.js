// Write your code here
import './index.css'
const LatestMatch = props => {
    const {latestMatchDetails} = props
    const {competingTeam,date,venue,result,competingTeamLogo,manOfTheMatch,firstInnings,secondInnings,umpires}=latestMatchDetails
    return(
        <div className="latest-match-container">
        <h1 className="latest-match-heading">Latest Matches</h1>
        <div className="latest-match-details">
        <div className="latest-match-details-container">
        <div className="sub-container-1">
        <p className="latest-match-team-name">{competingTeam}</p>
        <p className="latest-match-team-date">{date}</p>
        <p className="latest-match-rem-details">{venue}</p>
        <p className="latest-match-rem-details">{result}</p>
        </div>
        <img src={competingTeamLogo} className="latest-match-team-logo" alt={`latest match ${competingTeam}`}/>
        </div>
        <hr className="horizontal-line"/>
        <div className="sub-container-2">
        <p className="label">First Innings</p>
        <p className="value">{firstInnings}</p>
        <p className="label">Second Innings</p>
        <p className="value">{secondInnings}</p>
        <p className="label">Man Of The Match</p>
        <p className="value">{manOfTheMatch}</p>
        <p className="label">Umpires</p>
        <p className="value">{umpires}</p>
        </div>
        </div>
        </div>
    )

}
export default LatestMatch
