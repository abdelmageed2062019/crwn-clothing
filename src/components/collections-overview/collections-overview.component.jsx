import { connect } from 'react-redux';
import {  createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/preview-collection/collection-preview";

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className="collection-overview">
        {
            collections.map(({id, ...otherCollectionsProps}) => (
                <CollectionPreview key={id} {...otherCollectionsProps} />
            ))
        }
    </div>
)



const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)