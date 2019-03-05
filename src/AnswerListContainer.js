import React, { Component } from 'react'
import request from 'superagent'
import AnswerList from './AnswerList'

export default class AnswerListContainer extends Component {
    state = { dogBreeds: null }

    componentDidMount() {
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const breeds = Object.keys(response.body.message)
                this.updateBreeds(breeds)
            })
            .catch(console.error)
    }

    updateBreeds(breeds) {
        this.setState({
            dogBreeds: breeds
        })
    }

    render() {
        return <AnswerList dogBreeds={this.state.dogBreeds} />
    }
}