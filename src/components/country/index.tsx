import React from "react"
import axios from "axios"


export default class Country extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        console.log(props.match)
        this.state = { currentCountry: null }
    }

    // componentDidMount() {
    //     const { code } = this.props.match.params
    //     axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`).then(res => {
    //         this.setState({
    //             currentCountry: res.data
    //         })
    //     }).catch(ex => {
    //         console.log(ex)
    //     })
    // }


    async componentDidMount() {
        const { code } = this.props.match.params
        try {
            const { data } = await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
            this.setState({
                currentCountry: data
            })
        } catch (ex) {
            console.log(ex)
        }
    }

    render() {
        const { currentCountry } = this.state
        if (!currentCountry) return <h1>Loading...</h1>
        return (<span> This is country: {JSON.stringify(this.state.currentCountry)} </span>)
    }

}