import './under-review.scss';
import Stars from '../../images/underReviewStars.svg'
import {Grid, makeStyles} from "@material-ui/core"



const useStyles = makeStyles({
    Grid: {
        flexGrow : 1,
    },
    mobileUnderReviewContainer:{
        display : "flex",
        justifyContent: "center",
        
    },

    mobileUnderReviewEmpty:
    {
        // display: "flex",
        // justifyContent: "center",
        position: "relative",
        left: "-25vw",
        height: "37vh",
        
    },
    mobileText : {
        whiteSpace: "nowrap"
    },
    mobileUnderReviewEmptyText: {
        fontWeight: "600",
        color: "#1B1918",
        position : "absolute",
        left: "0%",
        bottom: "15%"
        // left: "50%"
    },
    mobileUnderReviewEmptyImg: {
        position: "absolute",
        left: "0%",
        top: "0%",
        height: 200,
        width: 200 
    }
})

const UnderReview = (props) => {
    const {mobile} = props
    const classes = useStyles()
    return (
        <div className="under-review-main">
            <Grid container className = {classes.Grid}>
                <Grid item xs className = {mobile ? classes.mobileUnderReviewContainer : ""}>
                    <div className= {mobile ? classes.mobileUnderReviewEmpty : "under-review-empty"}>
                        <div>
                            <img src={Stars} alt="" className = {mobile ? classes.mobileUnderReviewEmptyImg : ""}/>
                        </div>
                        <div className = {mobile ? classes.mobileText : ""}>
                            <p className = {mobile ? classes.mobileUnderReviewEmptyText :"under-review-empty-text"}>No design under Review</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
            
            
            
        </div>
    )
}

export default UnderReview;