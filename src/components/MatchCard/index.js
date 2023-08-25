// Write your code here
import './index.css'
const MatchCard=props=>{
    const {matchDetails}=props
    const {competingTeam,competingTeamLogo,matchStatus,result}=matchDetails
    const getMatchStatus=status=>status==='Won' ? 'match-won' : 'match-lost'
    const getMatchStatusClass=`match-status ${getMatchStatus(matchStatus)}`
    return(
        <li className="match-card-item">
        <img src={competingTeamLogo} className="match-card-team-logo" alt={`competing team ${competingTeam}`}/>
        <p className="team-name">{competingTeam}</p>
        <p className="team-result">{result}</p>
        <p className={getMatchStatusClass}>{matchStatus}</p>
        </li>
    )
}
export default MatchCard