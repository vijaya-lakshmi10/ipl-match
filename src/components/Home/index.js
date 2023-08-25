// Write your code here
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'
import Loader from 'react-loader-spinner'

class Home extends Component{
    state={teamsData:[],isLoading:true}

    componentDidMount(){
        this.getTeamsData()
    }

    getTeamsData = async() => {
        const response = await fetch('https://apis.ccbp.in/ipl')
        const data = await response.json()
        const newData=data.teams.map(eachTeam=>({
            name:eachTeam.name,
            id:eachTeam.id,
            teamImageUrl:eachTeam.team_image_url,
        }))

        this.setState({teamsData:newData,isLoading:false})
    }

    displayTeamsList = () => {
        const {teamsData}=this.state
        return(
            <ul className="teams-list">
            {teamsData.map(team=>(
                <TeamCard key={team.id} teamDetails={team}/>
            ))}
            </ul>
        )
    }

    render(){
        const {isLoading}=this.state
        return(
            <div className="home-container">
            <div className="teams-list-container">
            <div className="header">
            <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" className="logo-img" alt="ipl logo"/>
            <h1 className="main-heading">IPL Dashboard</h1>
            </div>
            {isLoading ? (
            <div testid="loader" className="loader-class"> 
            <Loader type="Oval" color="#ffffff" height={50} width={50} /> 
            </div>
            ) : (
            this.displayTeamsList()
            )}
            </div>
            </div>
        )
    }
}
export default Home