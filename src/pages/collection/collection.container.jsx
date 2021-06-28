import {connect} from 'react-redux';
import {compose} from "redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
                       // 这个地方传 state  莫名其妙不知所云，他也没解释，为啥selector 到这儿 就需要传值了
  isCollectionsLoaded: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage)

export default CollectionPageContainer;