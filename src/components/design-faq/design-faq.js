import './design-faq.scss';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: "16px",
        fontWeight: "bold",
        marginLeft: "25px"
    },
    accordionSummary: {
        flexDirection: 'row-reverse',
        padding: 0,
        '& .MuiAccordionSummary-expandIcon': {
            padding: 0
        }
    },
    accordion: {
        marginBottom: '10px',
        boxShadow: 'none',
        '&:before': {
            height: 0
        }
    }
}));

const DesignFAQ = (props) => {

    const classes = useStyles();

    return (
        <div className="faqs-container">
            <div className="faqs-div">
                <h2 className="faqs-title">Understand The Wallrus Business Ecosystem </h2>
                <p className="faqs-subtitle">The Wallrus Company is a platform that connects the artists and graphic designers to the Architects and Interior Designers for Home Decor Products like Wallpapers, Curtains, Blinds, Cushion Covers etc.</p>
                <ul className="faqs-subtitle">
                    <li>The Interior Designers want unique and customized home decor products.</li>
                    <li>They register onto our business only platform.</li>
                    <li> Our platform will house a range of designs from multiple artists across the country that suit the home decor applications.</li>
                    <li>The Interior Designer choses a design that works for them and then places an order.</li>
                    <li>The Wallrus Company manufactures the products and ships them to the Interior Designer.</li>
                    <li>The artist whose design was chosen makes a percentage of this sale.</li>
                </ul>
            </div>
            <hr className="horizontal-line" noshade />
            <div className="artists-agreements-container">
                <h2 className="faqs-title">Artist’s Agreements</h2>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordionSummary}
                        expandIcon={<ExpandMoreIcon className="expand-more-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        IconButtonProps={{
                            disableRipple: true
                        }}
                    >
                        <Typography variant="h4" className={classes.heading}>Copyright and Ownership of Design</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography>
                            By Agreeing to the Artist’s Agreement, you represent and warrant that you own or otherwise are authorized to use the design being offered. You further agree that the sale of a product with this design will not violate the copyright, trademark or other proprietary rights of any third-party. Further, you will not use any third-party trademark, trade names, or publicity rights in connection with the name, description or tags associated with your design that may result in confusion as to the source of the design. The Wallrus Company reserves the right to modify, block, edit or delete any design, term or terms used to promote a design if it believes, in its exclusive discretion, that the use may violate a third-party right or is otherwise objectionable.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordionSummary}
                        expandIcon={<ExpandMoreIcon className="expand-more-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        IconButtonProps={{
                            disableRipple: true
                        }}
                    >
                        <Typography variant="h4" className={classes.heading}>Indemnity</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordionSummary}
                        expandIcon={<ExpandMoreIcon className="expand-more-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        IconButtonProps={{
                            disableRipple: true
                        }}
                    >
                        <Typography variant="h4" className={classes.heading}>Content Use</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordionSummary}
                        expandIcon={<ExpandMoreIcon className="expand-more-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        IconButtonProps={{
                            disableRipple: true
                        }}
                    >
                        <Typography variant="h4" className={classes.heading}>Proprietary Rights</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordionSummary}
                        expandIcon={<ExpandMoreIcon className="expand-more-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        IconButtonProps={{
                            disableRipple: true
                        }}
                    >
                        <Typography variant="h4" className={classes.heading}>Privacy Policy</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordionSummary}
                        expandIcon={<ExpandMoreIcon className="expand-more-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        IconButtonProps={{
                            disableRipple: true
                        }}
                    >
                        <Typography variant="h4" className={classes.heading}>Termination</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordionSummary}
                        expandIcon={<ExpandMoreIcon className="expand-more-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        IconButtonProps={{
                            disableRipple: true
                        }}
                    >
                        <Typography variant="h4" className={classes.heading}>Modification of Terms</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <hr className="horizontal-line" noshade />
            <div className="uploading-managing-designs-container">
                <h2 className="faqs-title">Uploading and Managing your Designs</h2>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordionSummary}
                        expandIcon={<ExpandMoreIcon className="expand-more-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        IconButtonProps={{
                            disableRipple: true
                        }}
                    >
                        <Typography variant="h4" className={classes.heading}>Copyright and Ownership of Design</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography>
                            By Agreeing to the Artist’s Agreement, you represent and warrant that you own or otherwise are authorized to use the design being offered. You further agree that the sale of a product with this design will not violate the copyright, trademark or other proprietary rights of any third-party. Further, you will not use any third-party trademark, trade names, or publicity rights in connection with the name, description or tags associated with your design that may result in confusion as to the source of the design. The Wallrus Company reserves the right to modify, block, edit or delete any design, term or terms used to promote a design if it believes, in its exclusive discretion, that the use may violate a third-party right or is otherwise objectionable.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordionSummary}
                        expandIcon={<ExpandMoreIcon className="expand-more-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        IconButtonProps={{
                            disableRipple: true
                        }}
                    >
                        <Typography variant="h4" className={classes.heading}>Indemnity</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordionSummary}
                        expandIcon={<ExpandMoreIcon className="expand-more-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        IconButtonProps={{
                            disableRipple: true
                        }}
                    >
                        <Typography variant="h4" className={classes.heading}>Content Use</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordionSummary}
                        expandIcon={<ExpandMoreIcon className="expand-more-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        IconButtonProps={{
                            disableRipple: true
                        }}
                    >
                        <Typography variant="h4" className={classes.heading}>Proprietary Rights</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordionSummary}
                        expandIcon={<ExpandMoreIcon className="expand-more-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        IconButtonProps={{
                            disableRipple: true
                        }}
                    >
                        <Typography variant="h4" className={classes.heading}>Privacy Policy</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordionSummary}
                        expandIcon={<ExpandMoreIcon className="expand-more-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        IconButtonProps={{
                            disableRipple: true
                        }}
                    >
                        <Typography variant="h4" className={classes.heading}>Termination</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordionSummary}
                        expandIcon={<ExpandMoreIcon className="expand-more-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        IconButtonProps={{
                            disableRipple: true
                        }}
                    >
                        <Typography variant="h4" className={classes.heading}>Modification of Terms</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <hr className="horizontal-line" noshade />
            <div className="understanding-media-art-container">
                <h2 className="faqs-title">Understanding the Media & Art working</h2>
            </div>
            <div className="contact-us-container">
                <div className="contact-us-div">
                    <h3 className="contact-us-title">Still can’t find the answer?</h3>
                    <p className="contact-us-subtitle">Send you note-we’re happy to help.</p>
                    <Button className="contact-us-button" variant="contained">Contact us</Button>
                </div>
            </div>
        </div>
    )
}

export default DesignFAQ;