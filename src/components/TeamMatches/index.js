// Write your code here
import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import Loader from 'react-loader-spinner'

class TeamMatches extends Component{
    state={isLoading:true,teamMatchesData:{}}

    componentDidMount(){
        this.getTeamMatchesData()
    }

    getData = data => ({
        id:data.id,
        umpires:data.umpires,
        date:data.date,
        result:data.result,
        venue:data.venue,
        manOfTheMatch:data.man_of_the_match,
        firstInnings:data.first_innings,
        secondInnings:data.second_innings,
        matchStatus:data.match_status,
        competingTeam:data.competing_team,
        competingTeamLogo:data.competing_team_logo,
    })

    getTeamMatchesData=async()=>{
        const {match}=this.props
        const {params}=match
        const {id}=params
        const response=await fetch(`https://apis.ccbp.in/ipl/${id}`)
        const dataReceived = await response.json()
        const newData={
            teamBannerUrl:dataReceived.team_banner_url,
            latestMatch:this.getData(dataReceived.latest_match_details),
            recentMatches:dataReceived.recent_matches.map(eachMatch=>(this.getData(eachMatch))),
        }
        this.setState({isLoading:false,teamMatchesData:newData})
    }

    displayRecentMatches=()=>{
        const {teamMatchesData}=this.state
        const {recentMatches}=teamMatchesData
        return(
            <ul className="recent-matches-list">
            {recentMatches.map(recentMatch=>(
                <MatchCard key={recentMatch.id} matchDetails={recentMatch}/>
            ))}
            </ul>
        )
    }

    displayTeamMatches=()=>{
        const {teamMatchesData}=this.state
        const {teamBannerUrl,latestMatch}=teamMatchesData
        return(
            <div className="team-matches-container">
            <img src={teamBannerUrl} alt="team banner" className="team-banner-img"/>
            <LatestMatch latestMatchDetails={latestMatch}/>
            {this.displayRecentMatches()}
            </div>
        )
    }

    getTeamMatchesClass=()=>{
        const {match}=this.props
        const {params}=match
        const {id}=params

        switch(id){
            case 'RCB':
                return 'rcb'
            case 'KKR':
                return 'kkr'
            case 'KXP':
                return 'kxp'
            case 'CSK':
                return 'csk'
            case 'RR':
                return 'rr'
            case 'MI':
                return 'mi'
            case 'SH':
                return 'sh'
            case 'DC':
                return 'dc'
            default:
                return ''
        }
    }

    render(){
        const {isLoading}=this.state
        const getTeamMatchesBackgroundColors=`team-matches-colors ${this.getTeamMatchesClass()}`
        return(
            <div className={getTeamMatchesBackgroundColors}>
            {isLoading ? (
            <div testid="loader" className="loader-class"> 
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
            ) : (
            this.displayTeamMatches()
            )}
            </div>
        )
    }
}
export default TeamMatches
