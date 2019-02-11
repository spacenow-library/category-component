import React, { Component } from 'react';

import { API, graphqlOperation } from 'aws-amplify';
import { listCategories } from '../../graphql/queries'


class ListCategories extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    allCategories = async () => {
        return API.graphql(graphqlOperation(listCategories, {filter: {typeId: {eq: 2}}}))
    }

    async componentDidMount() {
        try {
            const categories = await this.allCategories()
            this.setState({ data: categories.data.listListingSettingss.items });
          } catch (err) {
            console.log('error: ', err)
          }
    }

    categoryList = (category) => {
        return (
            <React.Fragment key={category.id}>
                <li>{category.itemName}</li>
            </React.Fragment>
        )
    }

    render() {
        const { data } = this.state;
        return (
            <>
                { [].concat(data).map(this.categoryList) }
            </>
        );
    }

}

export default ListCategories;
