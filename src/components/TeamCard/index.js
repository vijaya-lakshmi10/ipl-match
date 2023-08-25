// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
    const {teamDetails}=props
    const {name,id,teamImageUrl}=teamDetails
    return(
        <li className="team-card-item">
        <Link to={`/team-matches/${id}`} className="team-link">
        <img src={teamImageUrl} className="team-image" alt={name}/>
        <p className="name">{name}</p>
        </Link>
        </li>
    )
}
export default TeamCard
