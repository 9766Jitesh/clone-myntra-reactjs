import React, { useState } from 'react';
import withLoader from '../../HOC/withLoader';
import Product from '../Product/Product'
import './List.css'

const List = (props) => {

    const [data, setData] = useState(null)

    React.useEffect(() => {
        fetch('https://run.mocky.io/v3/bf175661-5e9f-4112-8580-d587759ff72e/products')
            .then(res => res.json())
            .then(data => {
                setData(data)
                props.setLoading(false)
            })
    }, [])

    return (
        <div className="each-item-wrapper">
            {
                data && data.products.map((eachItem, i) => {
                    return <Product item={eachItem}  key={i} />
                })
            }
        </div>
    )
}














// class List extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             data: null
//         }
//     }

//     componentDidMount() {
//         fetch('https://run.mocky.io/v3/bf175661-5e9f-4112-8580-d587759ff72e&products')
//             .then(res => res.json())
//             .then(data => this.setState({
//                 data
//             }))
//     }

//     render() {
//         return (
//             <div className="each-item-wrapper">
//                 {
//                     this.state.data ? this.state.data.products.map((eachItem, i) => {
//                         return <Product item={eachItem} key={i} />
//                     }) : <h1>Loading......</h1>
//                 }
//             </div>
//         )
//     }
// }

export default withLoader(List, 'Product list');